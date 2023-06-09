import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Cat.scss";

function Category() {
  const [categories, setCategories] = useState([]);
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

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post("/cat", { name });
      // Handle the response, e.g., show success message or navigate to a different page
      fetchCategories(); // Refresh categories list
    } catch (error) {
      // Handle error, e.g., show error message
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await newRequest.delete(`/cat/${id}`);
      // Update categories list by removing the deleted category
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== id)
      );
    } catch (error) {
      // Handle error, e.g., show error message
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/admin");
  };

  return (
    <div className="category">
      <h1>Add Category</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Category Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
