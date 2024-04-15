// import React, { useState } from "react";
// import axios from "axios";
// import './AddBlogs.scss'
// const AddBlog = ({ setBlogPosts }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [name, setName] = useState("");
//   const [desc, setDesc] = useState("");
//   const [date, setDate]=useState("");

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       alert("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);
//     formData.append("name", name);
//     formData.append("desc", desc);
//     formData.append("date", date);


//     try {
//       const response = await axios.post("http://localhost:8080/blogs", formData);
//       const newBlogPost = response.data;
//       setBlogPosts((prevBlogPosts) => [...prevBlogPosts, newBlogPost]);
//       setSelectedFile(null);
//       setName("");
//       setDesc("");
//       setDate("")
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//     <div className="addblog">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Image:
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//           />
//         </label>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <label>
//           Desc:
//           <input
//             type="text"
//             name="desc"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//           />
//         </label>
//         <label>
//           date:
//           <input
//             type="date"
//             name="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//     </>

//   );
// };

// export default AddBlog;



// import React, { useState } from "react";
// import axios from "axios";
// import './AddBlogs.scss'
// import { toast, Toaster } from "react-hot-toast";

// const AddBlog = ({ setBlogPosts }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [name, setName] = useState("");
//   const [desc, setDesc] = useState("");
//   const [date, setDate] = useState("");

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       alert("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);
//     formData.append("name", name);
//     formData.append("desc", desc);
//     formData.append("date", date);

//     try {
//       const response = await axios.post("http://localhost:8080/blogs", formData);
//       const newBlogPost = response.data;
//       setBlogPosts((prevBlogPosts) => [...prevBlogPosts, newBlogPost]);
//       setSelectedFile(null);
//       setName("");
//       setDesc("");
//       setDate("");
      
//     } 
//     catch {
//       toast.success("Added new Blog");
//     }
//   };

//   return (
//     <>
//     <div className="addblog">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Image:
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//           />
//         </label>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <label>
//           Desc:
//           <input
//             type="text"
//             name="desc"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//           />
//         </label>
//         <label>
//           date:
//           <input
//             type="date"
//             name="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//     <Toaster/>
//     </>
//   );
// };

// export default AddBlog;



import React, { useState } from "react";
import axios from "axios";
import './AddBlogs.scss'
import { toast, Toaster } from "react-hot-toast";

const AddBlog = ({ setBlogPosts }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("date", date);

    try {
      const response = await axios.post("http://localhost:8080/blogs", formData);
      const newBlogPost = response.data;
      setBlogPosts((prevBlogPosts) => [...prevBlogPosts, newBlogPost]);
      setSelectedFile(null);
      setName("");
      setDesc("");
      setDate("");
    } catch (error) {
      toast.success("Added new Blog");
    }
  };

  return (
    <>
    <div className="addblog">
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Desc:
          <input
            type="text"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <label>
          date:
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
    <Toaster/>
    </>
  );
};

export default AddBlog;
