import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    course: "",
    gender: "",
    activities: [],
    image: null,
    document: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        activities: checked
          ? [...prev.activities, value]
          : prev.activities.filter((activity) => activity !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (name === "image") {
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        setFormData({ ...formData, image: file });
        const reader = new FileReader();
        reader.onload = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file (jpg, png).");
      }
    } else if (name === "document") {
      if (
        file &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type)
      ) {
        setFormData({ ...formData, document: file });
      } else {
        alert("Please upload a valid document file (PDF, DOC, DOCX).");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/register", // Replace with your backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle success
      alert("Registration successful!");
      console.log("Response:", response.data);

      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        course: "",
        gender: "",
        activities: [],
        image: null,
        document: null,
      });
      setImagePreview(null);
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
    setImagePreview(null);
  };

  return (
    <div className="container" style={{ maxWidth: "800px", marginTop: "50px" }}>
      <h2 className="text-center">Online Registration</h2>
      <form onSubmit={handleSubmit}>
        <h4 className="mb-3">Basic Details</h4>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
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

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
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

        {/* Retain the remaining sections */}
        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Select Course
          </label>
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

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="male" className="ms-2">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
              required
              className="ms-3"
            />
            <label htmlFor="female" className="ms-2">
              Female
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Extracurricular Activities</label>
          <div>
            <input
              type="checkbox"
              id="Sports"
              name="activities"
              value="Sports"
              checked={formData.activities.includes("Sports")}
              onChange={handleInputChange}
            />
            <label htmlFor="Sports" className="ms-2">
              Sports
            </label>
            <input
              type="checkbox"
              id="Dancing"
              name="activities"
              value="Dancing"
              checked={formData.activities.includes("Dancing")}
              onChange={handleInputChange}
              className="ms-3"
            />
            <label htmlFor="Dancing" className="ms-2">
              Dancing
            </label>
            <input
              type="checkbox"
              id="art"
              name="activities"
              value="Art"
              checked={formData.activities.includes("Art")}
              onChange={handleInputChange}
              className="ms-3"
            />
            <label htmlFor="art" className="ms-2">
              Art
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/jpeg, image/png"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2"
              style={{ width: "100px" }}
            />
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="document" className="form-label">
            Upload Document
          </label>
          <input
            type="file"
            className="form-control"
            id="document"
            name="document"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </div>

        <div
          className="text-center mt-4"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <button type="submit" className="btn btn-dark">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
