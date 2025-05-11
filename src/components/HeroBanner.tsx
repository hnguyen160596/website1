import type React from 'react';

const popularStores = [
  { name: 'Amazon', logo: 'https://ext.same-assets.com/3000230773/4055390373.png', href: '/coupons-for/amazon' },
  { name: 'CVS', logo: 'https://ext.same-assets.com/3000230773/1492697023.png', href: '/coupons-for/cvs' },
  { name: 'Target', logo: 'https://ext.same-assets.com/3000230773/1149209340.png', href: '/coupons-for/target' },
  { name: 'Walmart', logo: 'https://ext.same-assets.com/3000230773/2779205483.png', href: '/coupons-for/walmart' },
  { name: 'Walgreens', logo: 'https://ext.same-assets.com/3000230773/1880570889.png', href: '/coupons-for/walgreens' },
];

const topDeals = [
  {
    title: 'Huge Walker Edison Furniture Sale on Walmart.com (Save Up to 60%)',
    image: 'https://ext.same-assets.com/3000230773/3347604496.jpeg',
    href: '/2025/04/25/huge-walker-edison-furniture-sale-on-walmart-com-save-up-to-60',
    arrow: 'https://ext.same-assets.com/3000230773/1443725800.svg',
  },
  {
    title: "Pay Only $4.99 for This Women's Ribbed Tank Top on Amazon",
    image: 'https://ext.same-assets.com/3000230773/3704997900.jpeg',
    href: '/2025/05/07/pay-only-usd4-99-for-this-womens-ribbed-tank-top-on-amazon',
    arrow: 'https://ext.same-assets.com/3000230773/409235749.svg',
  },
  {
    title: "It's Back: $400 Self-Cleaning Litter Box Drops to $164.99 on Amazon",
    image: 'https://content-images.thekrazycouponlady.com/nie44ndm9bqr/67CZ2HfqFefuuBD002NSDH/be309ca6be7ba5900363161d0668c2e1/ChatGPT_Image_Apr_30__2025__12_57_28_PM.png?w=241&fit=max&auto=format&q=90',
    href: '/2025/05/07/its-back-usd400-self-cleaning-litter-box-drops-to-usd164-99-on-amazon',
    arrow: 'https://ext.same-assets.com/3000230773/3225579771.svg',
  },
];

const HeroBanner: React.FC = () => (
  <section className="bg-secondary text-primary">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-5xl font-uniforma leading-tight mb-6">
          Welcome to Sales Aholics Deals.<br />Welcome to all the savings.
        </h1>
        <div className="flex items-center space-x-6 mb-8">
          {popularStores.map((store) => (
            <a key={store.name} href={store.href}>
              <img src={store.logo} srcSet={`${store.logo} 1x, ${store.logo} 2x`} loading="lazy" decoding="async" alt={store.name} className="h-10 w-auto" />
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        {topDeals.map((deal) => (
          <div key={deal.href} className="bg-white rounded-lg shadow-md flex overflow-hidden">
            <img src={deal.image} alt={deal.title} loading="lazy" decoding="async" className="w-24 h-24 object-cover" />
            <div className="p-4 flex flex-col justify-between flex-1">
              <a href={deal.href} className="font-semibold text-primary text-base hover:underline">
                {deal.title}
              </a>
              <a href={deal.href} className="mt-2 text-sm text-secondary font-semibold flex items-center">
                Here's the deal!
                <img src={deal.arrow} alt="arrow" loading="lazy" decoding="async" className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroBanner;
