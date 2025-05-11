import type React from 'react';
import { useDeals } from '../context/DealsContext';

const TodaysDealsPage: React.FC = () => {
  const { deals } = useDeals();
  return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-uniforma text-primary mb-8">Today's Deals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <a key={deal.href} href={deal.href} className="block bg-white rounded-lg shadow overflow-hidden hover:shadow-lg">
              {deal.image && (
                <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h3 className="font-uniforma text-lg text-primary mb-2 truncate">{deal.title}</h3>
                <p className="text-secondary text-sm">View Deal</p>
              </div>
            </a>
          ))}
        </div>
      </div>
  );
};

export default TodaysDealsPage;
