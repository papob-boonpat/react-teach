import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div>
      Posts
      <Link to="1"> to Post 1</Link>
      <Link to="1?title=strong"> to search</Link>
    </div>
  );
}

export default Posts;
