import React from "react";
import DisplayBookmark from "../DisplayBookmark/DisplayBookmark";
import "./Bookmark.css";

const Bookmark = (props) => {
  const { bookmarked } = props;

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

      <h1 className="text-2xl font-bold mt-5">
        Bookmarked Blogs : {bookmarked.length}
      </h1>

      {bookmarked.map((bookmark) => (
        <DisplayBookmark
          bookmark={bookmark}
          key={bookmark.id}
        ></DisplayBookmark>
      ))}
    </div>
  );
};

export default Bookmark;
