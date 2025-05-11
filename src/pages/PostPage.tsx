import type React from 'react';
import { useParams } from 'react-router-dom';

const PostPage: React.FC = () => {
  const { year, month, day, slug } = useParams<{ year: string; month: string; day: string; slug: string }>();
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-uniforma mb-4 capitalize">{slug?.replace(/-/g, ' ')}</h1>
      {/* TODO: Clone the full post content here */}
    </div>
  );
};

export default PostPage;
