import Layout from './Layout';
import Navbar from './navbar';
import Footer from './footer';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      
      <nav className="flex space-x-4 p-4 bg-white dark:bg-gray-900">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/tasks" className="text-blue-500 hover:underline">Tasks</Link>
        <Link to="/api" className="text-blue-500 hover:underline">API</Link>
  </nav>

      <main className="flex-grow p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
