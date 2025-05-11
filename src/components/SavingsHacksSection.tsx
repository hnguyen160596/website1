import type React from 'react';

const hacks = [
  { label: 'Target Easter Clearance Sale', href: '/tips/couponing/target-easter-clearance' },
  { label: 'Target Car Seat Trade-In Event', href: '/tips/store-hacks/target-car-seat-trade-in' },
  { label: 'Sephora Oh Hair Yeah Sale', href: '/tips/money/sephora-oh-hair-yeah-event' },
  { label: "Kohl's Credit Event", href: '/tips/store-hacks/kohls-credit-event' },
  { label: 'Target Teacher Appreciation Event', href: '/tips/money/target-teacher-discount' },
  { label: 'Walgreens Senior Day', href: '/tips/store-hacks/walgreens-senior-day' },
  { label: 'IHOP Kids Eat Free', href: '/tips/money/kids-eat-free-at-ihop' },
  { label: 'Teacher Appreciation Day Deals', href: '/tips/money/national-teacher-appreciation-day-deals' },
  { label: 'National Nurses Day', href: '/tips/money/national-nurses-day-freebies-deals' },
  { label: "MyLowe's Rewards Week", href: '/tips/store-hacks/mylowes-rewards-week' },
  { label: "JCPenney Kids Zone Craft", href: '/tips/family/free-jcpenney-kids-zone-crafts' },
  { label: "Mother's Day", href: '/tips/money/32-mothers-day-freebies-to-say-thank-you-to-mom' },
  { label: 'Bath & Body Works Member Appreciation Days', href: '/tips/store-hacks/bath-and-body-works-member-appreciation-days' },
  { label: 'Amazon Pet Day', href: '/tips/couponing/amazon-pet-day' },
];

const popularPages = [
  { label: 'How to Coupon', href: '/beginners', icon: 'https://ext.same-assets.com/3000230773/4252861238.svg' },
  { label: 'How to Save on Groceries', href: '/food-grocery-prices-rising', icon: 'https://ext.same-assets.com/3000230773/3301625649.svg' },
  { label: 'Store Return Policies', href: '/store-return-policies', icon: 'https://ext.same-assets.com/3000230773/3394157246.svg' },
  { label: 'Back to School Sales', href: '/deals/back-to-school', icon: 'https://ext.same-assets.com/3000230773/1787624407.svg' },
  { label: 'Black Friday Sales', href: '/best-black-friday-sales', icon: 'https://ext.same-assets.com/3000230773/2116589346.svg' },
];

const SavingsHacksSection: React.FC = () => (
  <section className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-uniforma text-primary mb-4">What’s Happening This Month</h2>
        <ul className="space-y-2 list-disc list-inside text-lg text-gray-700">
          {hacks.map((hack) => (
            <li key={hack.href}>
              <a href={hack.href} className="hover:text-primary hover:underline">
                {hack.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/tips"
          className="mt-4 inline-flex items-center text-secondary font-semibold"
        >
          See all savings hacks!
          <img
            src="https://ext.same-assets.com/3000230773/2018733539.svg"
            alt="arrow"
            className="ml-2 w-4 h-4"
          />
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-uniforma text-primary mb-4">Popular Pages</h2>
        <ul className="grid grid-cols-1 gap-4">
          {popularPages.map((page) => (
            <li key={page.href}>
              <a href={page.href} className="flex items-center space-x-2 hover:underline">
                <img src={page.icon} alt={page.label} className="w-8 h-8" />
                <span className="text-lg text-gray-700">{page.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default SavingsHacksSection;
