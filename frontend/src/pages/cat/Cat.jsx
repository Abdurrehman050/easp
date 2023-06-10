import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";
import "./Cat.scss";

function Category() {
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await newRequest.get("/cat");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = await upload(file);
      await newRequest.post("/cat", { name, image: url });
      fetchCategories(); // Refresh categories list
    } catch (err) {
      console.log(err);
    }
  };

  const handleBack = () => {
    navigate("/admin");
  };

  return (
    <div className="category">
      <h1>Add Categories</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Category Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Add Category</button>
      </form>
      <h2>Categories</h2>
      {categories.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No categories found.</p>
      )}
      <button className="delete" onClick={handleBack}>
        Logout
      </button>
    </div>
  );
}

export default Category;
