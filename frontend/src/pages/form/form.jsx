import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration successful!');
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '50px' }}>
      <h2 className="text-center">Online Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone Input */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Course Selection */}
        <div className="mb-3">
          <label htmlFor="course" className="form-label">Select Course</label>
          <select
            className="form-select"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose a course</option>
            <option value="IT Diploma">IT Diploma</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-dark w-100">
          Register Now
        </button>
      </form>
    </div>
  );
}

export default Form;
