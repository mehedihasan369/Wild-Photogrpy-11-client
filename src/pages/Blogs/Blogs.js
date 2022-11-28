import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div>
      <h1>blogs</h1>
      <Link to='/blogs/:id' ></Link>
    </div>
  );
};

export default Blogs;