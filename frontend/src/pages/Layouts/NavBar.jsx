// NavBar.jsx
import 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  // Styling for the navbar
  const navbarStyle = {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  // Styling for the navbar links
  const linkStyle = {
    color: 'black',
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        {/* Logo and Branding */}
        <a className="navbar-brand" href="#" style={{ color: 'black' }}>
          <img
            src="/iconn.png" // Ensure iconn.png is in the public folder
            alt="Page Icon"
            style={{ width: '80px', height: 'auto', marginRight: '10px' }}
          />
          Diploma in IT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-5">
              <a className="nav-link" href="#programs" style={linkStyle}>
                Programs
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#academic-info" style={linkStyle}>
                Academic Info
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#register" style={linkStyle}>
                Register
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#contact" style={linkStyle}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
