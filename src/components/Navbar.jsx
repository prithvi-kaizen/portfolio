import { NavLink } from 'react-router-dom';
import { User, Code2, Download } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">
          Prithvi
        </NavLink>
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={18} />
              About
            </span>
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Code2 size={18} />
              Projects
            </span>
          </NavLink>
        </div>
        <a 
          href="https://drive.google.com/file/d/16Q58f9dTsxSlO_nz9II-QqCw8uRZHU87/view?usp=sharing" 
          target="_blank" 
          rel="noreferrer" 
          className="nav-button"
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Download size={18} />
            Resume
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
