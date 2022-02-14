import React from "react";
import img from "../assets/user-icon.jpg";
import Comments from "./Comments";
//umut ketenci
const SingleComment = ({ comment, replies }) => {
  return (
    <article className="comment">
      <div className="comment-img-container">
        <img src={img} alt={comment.username} className="comment-img" />
      </div>
      <div className="comment-info">
        <div className="comment-content">
          <div className="comment-author">
            <b>{comment.username}</b>
          </div>
          <div className="">{comment.createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        {replies && (
          <div className="replies">
            {replies.map((reply) => {
              return (
                <SingleComment comment={reply} key={reply.id}></SingleComment>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default SingleComment;
