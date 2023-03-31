import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import DisplayCard from "../DisplayCard/DisplayCard";
import "./Cards.css";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [readTime, setReadTime] = useState(0);

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
              ></DisplayCard>
            ))}
          </div>

          <div className="right-card">
            <Bookmark readTime={readTime}></Bookmark>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
