import type React from 'react';
import { useParams } from 'react-router-dom';

const StorePage: React.FC = () => {
  const { store } = useParams<{ store: string }>();
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-uniforma mb-4">Deals for {store}</h1>
      {/* TODO: Implement store coupons list */}
    </div>
  );
};

export default StorePage;
