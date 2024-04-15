import React, { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
import './AllBlogs.scss';

const AllBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const [showInputs, setShowInputs] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [id,setId]= useState("")
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const toggleTable = () => {
    setShowTable(true);
  };

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    } else if (e.target.name === "date") {
      setDate(e.target.value);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    console.log("submit olundu1")
  };

  useEffect(() => {
    axios.get("http://localhost:8080/blogs")
      .then((res) => {
        setBlogPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/blogs/${id}`);
      setBlogPosts(blogPosts.filter((post) => post._id !== id));
      toast.success('Item successfully deleted!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    const editedPost = blogPosts.find((post) => post._id === id);
    setName(editedPost.name);
    setDesc(editedPost.desc);
    setDate(editedPost.date);
    setId(editedPost._id)
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("date", date);
    toggleInputs();
    toggleTable();
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      date: date,
      desc: desc,
      image: selectedFile,
      imageSrc: selectedFile.name
    }
    try {
      await axios.put(`http://localhost:8080/blogs/${id}`, data);
      toast.success('Item updated successfully!');
      window.location.reload(); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="allblog">
      <div className="">
        {showInputs ? (
          <div className="myform">
            <form onSubmit={handleEditSubmit}>
              <label className="">
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className=""
                />
              </label>
              <label className="">
                Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  className=""
                />
              </label>
              <label className="">
                Desc:
                <input
                  type="text"
                  name="desc"
                  value={desc}
                  onChange={handleInputChange}
                  className=""
                />
              </label>
              <label className="">
                Date:
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={handleInputChange}
                  className=""
                />
              </label>
              <button className="" type="submit">
                Save
              </button>
            </form>
          </div>
        ) : (
          <>
            {showTable && (
              <table className="allblog">
                <thead className="thead">
                  <tr>
                    <th className="">Image</th>
                    <th className="">Name</th>
                    <th className="">Date</th>
                    <th className="">Actions</th>
                  </tr>
                </thead>
                <tbody className="blogbody">
                  {blogPosts.map((item) => (
                    <tr key={item._id}>
                      <td className="">
                        <img
                          src={`http://localhost:8080/public/${item.image}`}
                          alt="Blog Post"
                          className=""
                        />
                      </td>
                      <td className="">{item.name}</td>
                      <td>{item.date}</td>
                      <td>
                        <div className="allblogbtns">
                          <button
                            className=""
                            onClick={() => handleEdit(item._id)}
                          >
                            Edit
                          </button>
                          <button
                            className=""
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
      <Toaster/>
    </div>
  );
};

export default AllBlogs;
