import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const StorePage = lazy(() => import('./pages/StorePage'));
const CouponCategoryPage = lazy(() => import('./pages/CouponCategoryPage'));
const DealCategoryPage = lazy(() => import('./pages/DealCategoryPage'));
const TodaysDealsPage = lazy(() => import('./pages/TodaysDealsPage'));
const TipsListPage = lazy(() => import('./pages/TipsListPage'));
const TipDetailPage = lazy(() => import('./pages/TipDetailPage'));
const AllStoresPage = lazy(() => import('./pages/AllStoresPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BeginnersPage = lazy(() => import('./pages/BeginnersPage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coupons-for/:store" element={<StorePage />} />
        <Route path="/coupons/:couponSlug" element={<CouponCategoryPage />} />
        <Route path="/deals" element={<TodaysDealsPage />} />
        <Route path="/deals/:dealSlug" element={<DealCategoryPage />} />
        <Route path="/tips" element={<TipsListPage />} />
        <Route path="/tips/:tipSlug" element={<TipDetailPage />} />
        <Route path="/stores" element={<AllStoresPage />} />
        <Route path="/krazy-coupon-lady-privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/beginners" element={<BeginnersPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/:year/:month/:day/:slug" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
