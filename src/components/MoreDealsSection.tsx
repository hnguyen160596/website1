import type React from 'react';

const deals = [
  {
    title: 'This Amazon-Approved Ionic Hair Dryer Is Only $25 After Markdowns',
    image:
      'https://content-images.thekrazycouponlady.com/nie44ndm9bqr/5LRKyxiEggf1xXgnmgf0LH/401955e80bb626e397279b935e98e80a/Maroon___Pink.png?w=260&fit=max&auto=format&q=90',
    href: '/2025/05/06/this-amazon-approved-ionic-blow-dryer-is-only-usd27-after-markdowns',
    arrow: 'https://ext.same-assets.com/3000230773/286459257.svg',
  },
  {
    title: 'Kate Spade Large Crossbody, Only $79 Shipped (Reg. $329)',
    image:
      'https://content-images.thekrazycouponlady.com/nie44ndm9bqr/UzKN0TQHprekCOQQsczqU/eef2765cca4f67a76654fc5b016a9089/kate_spade_crosbody.jpg?w=260&fit=max&auto=format&q=90',
    href: '/2025/05/07/kate-spade-large-crossbody-only-usd79-shipped-reg-usd329',
    arrow: 'https://ext.same-assets.com/3000230773/3160495444.svg',
  },
  {
    title: 'The 5 Bestselling Jewelry Deals on Sale for Mothers Day (All Under $10)',
    image:
      'https://content-images.thekrazycouponlady.com/nie44ndm9bqr/6ZNVrme9t63fIywxKn3aVH/075b32733f841e7fafdb414a3bec0974/target_mothers_day_jewelry_collage.png?w=260&fit=max&auto=format&q=90',
    href: '/2025/05/07/the-5-bestselling-jewelry-deals-on-sale-for-mothers-day-all-under-usd10',
    arrow: 'https://ext.same-assets.com/3000230773/658199468.svg',
  },
  {
    title: 'Get a Free Krispy Kreme Original Glazed Donut Today No Purchase Necessary',
    image:
      'https://content-images.thekrazycouponlady.com/nie44ndm9bqr/3wuSJn63SzzV61G8VBfqoc/6df1a33df58e82615aebf2cb1649c900/krispy-kreme-original-glazed-donut-free-rewards-kcl-09-1702494075-1702494075.jpg?w=550&fit=max&auto=format&q=90',
    href: '/tips/store-hacks/krispy-kreme-free-donuts',
  },
];

const MoreDealsSection: React.FC = () => (
  <section className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-uniforma text-primary mb-6">More Today's Top Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deals.map((deal) => (
          <div key={deal.href} className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-24 h-24 object-cover flex-shrink-0"
            />
            <div className="p-4 flex flex-col justify-between">
              <a href={deal.href} className="font-semibold text-primary hover:underline">
                {deal.title}
              </a>
              {deal.arrow && (
                <a href={deal.href} className="mt-2 text-sm text-secondary font-semibold flex items-center">
                  Here&apos;s the deal!
                  <img src={deal.arrow} alt="arrow" className="ml-1 w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MoreDealsSection;
