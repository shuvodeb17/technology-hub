import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./DisplayCard.css";

const DisplayCard = (props) => {
  const { coverImage, authorImage, authorName, releaseDate, readTime, title } =
    props.user;

  return (
    <div className="display-card">
      <div className="card card-compact bg-base-100 shadow-xl mb-11">
        <figure>
          <img className="cover-image" src={coverImage} alt="cover-image" />
        </figure>
        <div className="card-body">
          <div className="author-details mt-5 mb-5">
            <div className="avatar">
              <div className="w-11 rounded-full">
                <img src={authorImage} />
              </div>
            </div>
            <div className="author-name ms-5">
              <p className="card-title text-xl font-bold">{authorName}</p>
              <p className="release-date">{releaseDate}</p>
            </div>
            <p className="read-time text-right font-bold">
              {readTime}
              <FontAwesomeIcon
                icon={faBookmark}
                className="ms-2 text-2xl"
              ></FontAwesomeIcon>
            </p>
          </div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="card-actions justify-end">
            <p
              onClick={() => props.markReadBtn(readTime)}
              className="mark-read font-bold underline pointer"
            >
              Mark as read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
