import type React from 'react';
import { useParams } from 'react-router-dom';

const TipDetailPage: React.FC = () => {
  const { tipSlug } = useParams<{ tipSlug: string }>();
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-uniforma mb-4 capitalize">{tipSlug?.replace(/-/g, ' ')}</h1>
      {/* TODO: Clone the tip hack detail content here */}
    </div>
  );
};

export default TipDetailPage;
