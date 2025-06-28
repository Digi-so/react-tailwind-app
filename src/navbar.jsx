// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useTheme } from './Themecontext';

export default function Navbar() {
  const { dark, setdark } = useTheme();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">My App</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
        <button
          onClick={() => setdark(!dark)}
          className="ml-4 text-sm bg-black/20 px-2 py-1 rounded"
        >
          {dark ? '🌙 Light' : '☀️ Dark'}
        </button>
      </div>
    </nav>
  );
}
