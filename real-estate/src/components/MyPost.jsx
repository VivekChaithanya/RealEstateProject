import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyPost.css";

const MyPost = ({ sellerId }) => {
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [editPostContent, setEditPostContent] = useState({
    image: "",
    sqft: "",
    propertytype: "",
    projectname: "",
    ownership: "",
    location: "",
    status: "",
    bedrooms: "",
    carparking: "",
    propertyfloor: "",
    totalfloors: "",
    price: "",
    facing: "",
    description: ""
  });

  // Fetch seller's posts by sellerId
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/salepost/getAll`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [sellerId]);

  // Handle delete post
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:9000/deleteSalepostById/${postId}`);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Handle edit post
  const handleEdit = (post) => {
    setEditPostId(post.id);
    setEditPostContent({ ...post });
  };

  // Handle update post
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:9000/updateSalepost/${editPostId}`, editPostContent);

      setPosts(
        posts.map((post) =>
          post.id === editPostId ? { ...post, ...editPostContent } : post
        )
      );
      setEditPostId(null);
      setEditPostContent({
        image: "",
        sqft: "",
        propertytype: "",
        projectname: "",
        ownership: "",
        location: "",
        status: "",
        bedrooms: "",
        carparking: "",
        propertyfloor: "",
        totalfloors: "",
        price: "",
        facing: "",
        description: ""
      });
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="seller-posts">
      <h2>My Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          {editPostId === post.id ? (
            <div className="edit-post">
              <label>
                Image URL:
                <input
                  type="text"
                  value={editPostContent.image}
                  onChange={(e) =>
                    setEditPostContent({ ...editPostContent, image: e.target.value })
                  }
                />
              </label>
              <label>
                Square Foot:
                <input
                  type="text"
                  value={editPostContent.sqft}
                  onChange={(e) =>
                    setEditPostContent({ ...editPostContent, sqft: e.target.value })
                  }
                />
              </label>
              <label>
                Property Type:
                <input
                  type="text"
                  value={editPostContent.propertytype}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      propertytype: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Project Name:
                <input
                  type="text"
                  value={editPostContent.projectname}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      projectname: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Ownership:
                <input
                  type="text"
                  value={editPostContent.ownership}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      ownership: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  value={editPostContent.location}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      location: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Status:
                <input
                  type="text"
                  value={editPostContent.status}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      status: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Bedrooms:
                <input
                  type="text"
                  value={editPostContent.bedrooms}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      bedrooms: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Car Parking:
                <input
                  type="text"
                  value={editPostContent.carparking}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      carparking: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Property Floor:
                <input
                  type="text"
                  value={editPostContent.propertyfloor}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      propertyfloor: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Total Floors:
                <input
                  type="text"
                  value={editPostContent.totalfloors}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      totalfloors: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Price:
                <input
                  type="text"
                  value={editPostContent.price}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      price: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Facing:
                <input
                  type="text"
                  value={editPostContent.facing}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      facing: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Description:
                <textarea
                  value={editPostContent.description}
                  onChange={(e) =>
                    setEditPostContent({
                      ...editPostContent,
                      description: e.target.value
                    })
                  }
                />
              </label>
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setEditPostId(null)}>Cancel</button>
            </div>
          ) : (
            <div className="post-content">
              <p>Image: {post.image}</p>
              <p>Square Foot: {post.sqft}</p>
              <p>Property Type: {post.propertytype}</p>
              <p>Project Name: {post.projectname}</p>
              <p>Ownership: {post.ownership}</p>
              <p>Location: {post.location}</p>
              <p>Status: {post.status}</p>
              <p>Bedrooms: {post.bedrooms}</p>
              <p>Car Parking: {post.carparking}</p>
              <p>Property Floor: {post.propertyfloor}</p>
              <p>Total Floors: {post.totalfloors}</p>
              <p>Price: {post.price}</p>
              <p>Facing: {post.facing}</p>
              <p>Description: {post.description}</p>
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyPost;
