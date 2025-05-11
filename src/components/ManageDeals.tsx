import type React from 'react';
import { useState } from 'react';
import { useDealsCMS, type DealItem } from '../context/DealsCMSContext';

const ManageDeals: React.FC = () => {
  const { deals, addDeal, updateDeal, deleteDeal } = useDealsCMS();
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newHref, setNewHref] = useState('');
  const [newArrow, setNewArrow] = useState('');
  const [newTime, setNewTime] = useState('');

  const [editHref, setEditHref] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editLink, setEditLink] = useState('');
  const [editArrow, setEditArrow] = useState('');
  const [editTime, setEditTime] = useState('');

  const handleAdd = () => {
    if (newTitle && newImage && newHref) {
      addDeal({ title: newTitle, image: newImage, href: newHref, arrow: newArrow, time: newTime });
      setNewTitle(''); setNewImage(''); setNewHref(''); setNewArrow(''); setNewTime('');
    }
  };

  const startEdit = (item: DealItem) => {
    setEditHref(item.href);
    setEditTitle(item.title);
    setEditImage(item.image);
    setEditLink(item.href);
    setEditArrow(item.arrow || '');
    setEditTime(item.time || '');
  };

  const handleUpdate = () => {
    if (editHref) {
      updateDeal(editHref, { title: editTitle, image: editImage, href: editLink, arrow: editArrow, time: editTime });
      setEditHref(null);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Manage Deals</h2>
      <table className="w-full table-auto mb-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Link</th>
            <th className="p-2 border">Arrow</th>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((item) => (
            <tr key={item.href} className="hover:bg-gray-50">
              <td className="p-2 border">
                {editHref === item.href ? (
                  <input value={editImage} onChange={(e) => setEditImage(e.target.value)} className="w-full border px-1 py-0.5" />
                ) : (
                  <img src={item.image} alt={item.title} className="h-10 w-auto mx-auto" />
                )}
              </td>
              <td className="p-2 border">
                {editHref === item.href ? (
                  <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="w-full border px-1 py-0.5" />
                ) : (
                  item.title
                )}
              </td>
              <td className="p-2 border">
                {editHref === item.href ? (
                  <input value={editLink} onChange={(e) => setEditLink(e.target.value)} className="w-full border px-1 py-0.5" />
                ) : (
                  item.href
                )}
              </td>
              <td className="p-2 border">
                {editHref === item.href ? (
                  <input value={editArrow} onChange={(e) => setEditArrow(e.target.value)} className="w-full border px-1 py-0.5" />
                ) : (
                  item.arrow
                )}
              </td>
              <td className="p-2 border">
                {editHref === item.href ? (
                  <input value={editTime} onChange={(e) => setEditTime(e.target.value)} className="w-full border px-1 py-0.5" />
                ) : (
                  item.time
                )}
              </td>
              <td className="p-2 border text-center">
                {editHref === item.href ? (
                  <>
                    <button onClick={handleUpdate} className="text-green-600 mr-2">Save</button>
                    <button onClick={() => setEditHref(null)} className="text-gray-600">Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(item)} className="text-blue-600 mr-2">Edit</button>
                    <button onClick={() => deleteDeal(item.href)} className="text-red-600">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="font-medium mb-2">Add New Deal</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-2">
          <input type="text" placeholder="Image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} className="border px-2 py-1" />
          <input type="text" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="border px-2 py-1" />
          <input type="text" placeholder="Link" value={newHref} onChange={(e) => setNewHref(e.target.value)} className="border px-2 py-1" />
          <input type="text" placeholder="Arrow URL" value={newArrow} onChange={(e) => setNewArrow(e.target.value)} className="border px-2 py-1" />
          <input type="text" placeholder="Time" value={newTime} onChange={(e) => setNewTime(e.target.value)} className="border px-2 py-1" />
        </div>
        <button onClick={handleAdd} className="bg-primary text-white px-4 py-2 rounded">Add Deal</button>
      </div>
    </div>
  );
};

export default ManageDeals;
