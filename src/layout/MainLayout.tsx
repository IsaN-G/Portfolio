import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
  {location.pathname === '/' && <Header />}
      <main className="flex-1">
      <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;


