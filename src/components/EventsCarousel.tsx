import type React from 'react';

const events = [
  { icon: 'https://ext.same-assets.com/3000230773/3lXxh14qiqSIIWATjcBN3s/2bde63f094a2aa9c911c8fd9896ec182/Target-Icon-2x.png?w=36', title: 'Target Teacher Appreciation Event', date: 'May 04 - 10', href: '/tips/money/target-teacher-discount' },
  { icon: 'https://ext.same-assets.com/3000230773/34zceobKByurKiVJs0jF3G/ba6d75e8d2e881b037252b6091f6e188/ihop-icon-2x.png?w=36', title: 'IHOP Kids Eat Free Deals', date: 'May 05 - Jun 15', href: '/tips/money/kids-eat-free-at-ihop' },
  { icon: 'https://ext.same-assets.com/3000230773/5f9viIqMGy5A6xtQzZSqZD/be87f647dedb09b7ff1654d5b87607c1/nationalteacherappreciationday-icon-2x.png?w=36', title: 'Teacher Appreciation Day', date: 'May 05 - 12', href: '/tips/money/national-teacher-appreciation-day-deals' },
  { icon: 'https://ext.same-assets.com/3000230773/2o3bmD3X9IDOfnPAkLR4Ik/22025c84ef26161ae40ce0362b474bc4/nationalnursesday-icon-2x.png?w=36', title: 'Nurses Day Deals', date: 'May 06 - 13', href: '/tips/money/national-nurses-day-freebies-deals' },
];

const EventsCarousel: React.FC = () => (
  <section className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-uniforma text-primary mb-6">Check out these latest events</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {events.map((event) => (
          <a key={event.href} href={event.href} className="flex-shrink-0 bg-secondary text-white rounded-lg p-4 w-64 flex space-x-3 items-center">
            <img src={event.icon} alt={event.title} className="w-9 h-9" />
            <div>
              <p className="font-semibold">{event.title}</p>
              <p className="text-sm">{event.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default EventsCarousel;
