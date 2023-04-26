import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useLocation} from 'react-router-dom'

const BlogPage = () => {
    const location=useLocation();
    console.log(location)
    return (
      <div className="blog-post">
        <h1 className="blog-post-title">{location?.state?.title}</h1>
        <p className="blog-post-meta">{location?.state?.date} by {location?.state?.author}</p>
        <div className="blog-post-summary">
          <img src={location?.state?.img_address} alt={location?.state?.title} />
          <p>{location?.state?.content}</p>
        </div>
      </div>
    );
  }

  export default BlogPage;