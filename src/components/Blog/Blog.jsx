import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="container mx-auto">
        <h1 className="font-bold text-3xl text-center">Blog</h1>

        <div className="all-card mt-5">
          <div className="card bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">
                What is the difference between props and state ?
              </h2>
              <p>
                We can pass data between elements using props and state. Props
                are known as properties it can be used to pass data from one
                component to another. Props cannot be modified , read-only, and
                Immutable.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">How does useState work ?</h2>
              <p>
                useState is react hook. it returns an array with two values. The
                hook state takes an initial state value as an argument an
                returns and updated state value whenever the setter function is
                called
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">
                useEffect is used for other purposes than loading data ?
              </h2>
              <p>
                validating input field, live filtering, trigger animation on new
                array value, update paragraph list on fetched API data update,{" "}
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">How does react work ?</h2>
              <p>
                React components work similarly to javascript functions as they
                accept arbitrary input called properties to props. It possible
                to have as many components as necessary without cluttering your
                code.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
