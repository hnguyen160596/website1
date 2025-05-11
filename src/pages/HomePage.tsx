import type React from 'react';
import HeroBanner from '../components/HeroBanner';
import TelegramFeed from '../components/TelegramFeed';
import SavingsHacksSection from '../components/SavingsHacksSection';
import EventsCarousel from '../components/EventsCarousel';
import AppPromoSection from '../components/AppPromoSection';
import EmailSignupSection from '../components/EmailSignupSection';
import TopDealsList from '../components/TopDealsList';
import MoreDealsSection from '../components/MoreDealsSection';

const HomePage: React.FC = () => (
  <>
    <TelegramFeed />
    <HeroBanner />
    <SavingsHacksSection />
    <EventsCarousel />
    <AppPromoSection />
    <EmailSignupSection />
    <TopDealsList />
    <MoreDealsSection />
  </>
);

export default HomePage;
