import type React from 'react';
import Dropdown, { type DropdownItem } from './Dropdown';

const discoverItems: DropdownItem[] = [
  { label: 'Amazon', href: '/coupons-for/amazon', iconUrl: 'https://ext.same-assets.com/3000230773/4055390373.png' },
  { label: 'Costco', href: '/coupons-for/costco', iconUrl: 'https://ext.same-assets.com/3000230773/xxxxx.png' },
  { label: 'CVS', href: '/coupons-for/cvs', iconUrl: 'https://ext.same-assets.com/3000230773/1492697023.png' },
  { label: 'Walmart', href: '/coupons-for/walmart', iconUrl: 'https://content-images.thekrazycouponlady.com/nie44ndm9bqr/3ejfk8bY1oOHWbGbWqtigI/9a0f8eee27326b81064adb0967ddd8d3/Walmart-Logo-2025.png?w=960&fit=max&auto=format&q=90' },
  { label: 'Best Buy', href: '/coupons-for/best-buy', iconUrl: 'https://content-images.thekrazycouponlady.com/nie44ndm9bqr/1t5L7yAg0ZYTR1ZcuYmw6L/7b689ea747a66abb27d004388ce1747b/BestBuy-Icon-2x.png?w=46&fit=max&auto=format&q=90' },
  // TODO: add more store links
];

const savingsItems: DropdownItem[] = [
  { label: "Target Easter Clearance Sale", href: '/tips/couponing/target-easter-clearance' },
  { label: "Target Car Seat Trade-In Event", href: '/tips/store-hacks/target-car-seat-trade-in' },
  { label: "Sephora Oh Hair Yeah Sale", href: '/tips/money/sephora-oh-hair-yeah-event' },
  // TODO: add more savings hack links
];

const Header: React.FC = () => (
  <header className="bg-white shadow">
    <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
      <a href="/">
        <img src="/logo.svg" alt="Sales Aholics Deals Logo" loading="lazy" decoding="async" className="h-8" />
      </a>
      <div className="flex space-x-8">
        <Dropdown label="Discover Deals" items={discoverItems} />
        <a href="/deals" className="text-primary font-semibold">Today's Deals</a>
        <Dropdown label="Savings Hacks" items={savingsItems} />
      </div>
    </nav>
  </header>
);

export default Header;
