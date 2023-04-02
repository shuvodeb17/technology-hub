import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import DisplayCard from "../DisplayCard/DisplayCard";
import "./Cards.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // mark as read button
  const markReadBtn = (time) => {
    const timeValue = parseFloat(time.slice(0, 2));
    const sum = timeValue + readTime;
    setReadTime(sum);
  };

  // bookmark button
  const bookmarkBtn = (userDetails) => {
    const exists = bookmarked.find(
      (bookmark) => bookmark.id === userDetails.id
    );
    if (exists) {
       toast("Already added");
    } else {
      const bookmark = [...bookmarked, userDetails];
      setBookmarked(bookmark);
    }
  };

  return (
    <div className="card mt-5">
      <div className="container mx-auto p-5">
        <div className="main-card">
          <div className="left-cart">
            {users.map((user) => (
              <DisplayCard
                user={user}
                key={user.id}
                markReadBtn={markReadBtn}
                bookmarkBtn={bookmarkBtn}
              ></DisplayCard>
            ))}
          </div>

          <div className="right-card">
            <Bookmark readTime={readTime} bookmarked={bookmarked}></Bookmark>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
