import React from "react";
import "./Bookmark.css";

const Bookmark = (props) => {
  return (
    <div className="bookmark-wrapper">
      {/* Spent time */}
      <div className="spent-wrapper card bg-base-100 border">
        <div className="spent-body">
          <h2 className="card-title spent-time">
            Spent time on read : {props.readTime} min
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
