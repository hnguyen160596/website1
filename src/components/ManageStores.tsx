import type React from 'react';
import { useState } from 'react';
import { useCMS, type StoreItem } from '../context/CMSContext';

const ManageStores: React.FC = () => {
  const { stores, addStore, updateStore, deleteStore } = useCMS();
  const [newName, setNewName] = useState('');
  const [newHref, setNewHref] = useState('');
  const [newIcon, setNewIcon] = useState('');
  const [editHref, setEditHref] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editLink, setEditLink] = useState('');
  const [editIcon, setEditIcon] = useState('');

  const handleAdd = () => {
    if (newName && newHref && newIcon) {
      addStore({ name: newName, href: newHref, icon: newIcon });
      setNewName(''); setNewHref(''); setNewIcon('');
    }
  };

  const startEdit = (item: StoreItem) => {
    setEditHref(item.href);
    setEditName(item.name);
    setEditLink(item.href);
    setEditIcon(item.icon);
  };

  const handleUpdate = () => {
    if (editHref) {
      updateStore(editHref, { name: editName, href: editLink, icon: editIcon });
      setEditHref(null);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Manage Stores</h2>
      <table className="w-full table-auto mb-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Icon</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Link</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((item) => (
            <tr key={item.href} className="hover:bg-gray-50">
              <td className="p-2 border">
                {editHref === item.href ? (
                  <input value={editIcon} onChange={(e) => setEditIcon(e.target.value)} className="w-full border px-1 py-0.5" />
                ) : (
                  <img src={item.icon} alt={item.name} className="h-6 w-auto mx-auto" />
                )}
              </td>
              <td className="p-2 border">
                {editHref === item.href ? (
                  <input value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full border px-1 py-0.5" />
                ) : (
                  item.name
                )}
              </td>
              <td className="p-2 border">
                {editHref === item.href ? (
                  <input value={editLink} onChange={(e) => setEditLink(e.target.value)} className="w-full border px-1 py-0.5" />
                ) : (
                  item.href
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
                    <button onClick={() => deleteStore(item.href)} className="text-red-600">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Add New Store</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} className="border px-2 py-1" />
          <input type="text" placeholder="Href" value={newHref} onChange={(e) => setNewHref(e.target.value)} className="border px-2 py-1" />
          <input type="text" placeholder="Icon URL" value={newIcon} onChange={(e) => setNewIcon(e.target.value)} className="border px-2 py-1" />
        </div>
        <button onClick={handleAdd} className="mt-2 bg-primary text-white px-4 py-2 rounded">Add Store</button>
      </div>
    </div>
  );
};

export default ManageStores;
