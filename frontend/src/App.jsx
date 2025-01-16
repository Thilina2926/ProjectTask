import 'react'; // Import React if using JSX in older versions
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/pages/Layouts/NavBar'; // Import Navbar
import Home from '../src/pages/home/Home'; // Import Home component
import Form from '../src/pages/form/form'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* Add Navbar to the layout */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/form" element={<Form />} /> {/* Home route */}
        </Routes>
      </div>
    </Router>
  );
};

// Fixed: Removed non-breaking space
export default App;
