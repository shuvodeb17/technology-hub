import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="card">
      <div className="container mx-auto">
        <div className="main-card">
          <div className="left-cart">
            <h1>left</h1>
            {users.map((user) => setUsers(user))}
          </div>

          <div className="right-card">
            <h1>Right</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
