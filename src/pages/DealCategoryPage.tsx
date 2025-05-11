import type React from 'react';
import { useParams } from 'react-router-dom';

const DealCategoryPage: React.FC = () => {
  const { dealSlug } = useParams<{ dealSlug: string }>();
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-uniforma mb-4">Deals: {dealSlug}</h1>
      {/* TODO: Implement deal category list */}
    </div>
  );
};

export default DealCategoryPage;
