import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import "./Cards.css";

const Cards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="card mt-5">
      <div className="container mx-auto p-5">
        <div className="main-card">

          <div className="left-cart">
            {users.map((user) => <DisplayCard user={user} key={user.id}></DisplayCard>)}
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
