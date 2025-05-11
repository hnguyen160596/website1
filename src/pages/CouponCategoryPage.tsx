import type React from 'react';
import { useParams } from 'react-router-dom';

const CouponCategoryPage: React.FC = () => {
  const { couponSlug } = useParams<{ couponSlug: string }>();
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-uniforma mb-4">Coupons: {couponSlug}</h1>
      {/* TODO: Implement coupon category list */}
    </div>
  );
};

export default CouponCategoryPage;
