import "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// Admin component to display user data in a table
function Admin() {
  const[data,setData] = useState([])
  setData([])
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Admin Dashboard: User Data</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Selected Course</th>
            <th>Uploaded Image</th>
            <th>Uploaded Document</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            // eslint-disable-next-line react/prop-types
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.course}</td>
                <td>
                  {item.image ? (
                    <img
                      src={URL.createObjectURL(item.image)}
                      alt="Uploaded"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>
                  {item.document ? (
                    <a
                      href={URL.createObjectURL(item.document)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Document
                    </a>
                  ) : (
                    "No Document"
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
