import type React from 'react';

const EmailSignupSection: React.FC = () => (
  <section className="bg-secondary text-primary py-12">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
      <div>
        <h2 className="text-2xl font-uniforma mb-4">Get all the new deals and savings hacks straight to your inbox</h2>
        <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
          />
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md font-semibold">
            Subscribe
          </button>
        </form>
      </div>
      <div className="text-center">
        <img src="https://ext.same-assets.com/3000230773/4255486396.png" alt="Email CTA Graphic" className="mx-auto" />
      </div>
    </div>
  </section>
);

export default EmailSignupSection;
