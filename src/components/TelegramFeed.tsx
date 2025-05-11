import type React from 'react';
import { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  imageUrl?: string | null;
  time: string;
}

const TelegramFeed: React.FC = () => {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string;
  // strip leading @ for username comparison
  const chatUsername = (import.meta.env.VITE_TELEGRAM_CHAT_ID as string).replace(/^@/, '');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    let offset = 0;
    const fetchUpdates = async () => {
      try {
        const res = await fetch(
          `https://api.telegram.org/bot${token}/getUpdates?offset=${offset + 1}`
        );
        const data = await res.json();
        if (data.ok && data.result.length) {
          const newMsgs: Message[] = [];
          for (const upd of data.result as any[]) {
            // Support both direct messages and channel posts
            const msg = upd.message ?? (upd as any).channel_post;
            if (!msg || !msg.chat) continue;
            // debug log chat info
            console.log('msg.chat', msg.chat);
            // filter by channel username
            if (msg.chat.username !== chatUsername) continue;

            let imageUrl: string | null = null;
            if (msg.photo?.length) {
              const fileId = msg.photo[msg.photo.length - 1].file_id;
              const fRes = await fetch(
                `https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`
              );
              const fData = await fRes.json();
              imageUrl = `https://api.telegram.org/file/bot${token}/${fData.result.file_path}`;
            }
            // format time from timestamp
            const time = new Date((msg.date as number) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            newMsgs.push({ id: upd.update_id, text: msg.text || '', imageUrl, time });
          }
          if (newMsgs.length) {
            setMessages((prev) => [...prev, ...newMsgs]);
            offset = Math.max(...data.result.map((u: { update_id: number }) => u.update_id));
          }
        }
      } catch (e) {
        console.error('TelegramFeed error', e);
      }
      setTimeout(fetchUpdates, 1000);
    };
    fetchUpdates();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto border border-gray-700 rounded-lg overflow-hidden mb-6">
      {/* Chat header */}
      <div className="flex justify-between items-center bg-[#2C2F33] p-3 border-b border-[#23272A]">
        <span className="text-base font-medium text-white">
          {import.meta.env.VITE_TELEGRAM_CHAT_TITLE}
        </span>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-white">🔍</button>
          <button className="text-gray-400 hover:text-white">☰</button>
        </div>
      </div>
      {/* Messages container */}
      <div className="h-48 bg-[#2F3136] overflow-y-auto p-3 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className="max-w-xs bg-[#304F6A] text-white p-3 rounded-2xl">
            {m.imageUrl && (
              <img src={m.imageUrl} alt="" className="w-full h-auto mb-2 rounded" />
            )}
            <p className="text-sm leading-snug break-words">{m.text}</p>
            <div className="flex justify-end items-center mt-2 text-xs text-gray-300">
              <span>{m.time}</span>
              <span className="ml-1">✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelegramFeed;
