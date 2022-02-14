import React from "react";

const CommentOptions = () => {
  return (
    <form action="">
      <input type="text" />
      <div className="comment-options">
        <div className="add-comment">add</div>
        <div className="delete-comment">delete</div>
        <div className="edit-comment">edit</div>
      </div>
    </form>
  );
};

export default CommentOptions;
