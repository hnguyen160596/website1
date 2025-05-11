import type React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-primary text-white">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div>
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Sales Aholics Deals Logo" loading="lazy" decoding="async" className="h-6" />
          </a>
          <p className="mt-4 text-sm">© 2025 Sales Aholics Deals</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Discover Deals</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/coupons-for/amazon" className="hover:text-secondary">Amazon</a></li>
            <li><a href="/coupons-for/cvs" className="hover:text-secondary">CVS</a></li>
            <li><a href="/coupons-for/target" className="hover:text-secondary">Target</a></li>
            <li><a href="/coupons-for/walmart" className="hover:text-secondary">Walmart</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Savings Hacks</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/tips" className="hover:text-secondary">All Savings Hacks</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/krazy-coupon-lady-privacy-policy" className="hover:text-secondary">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-secondary">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
