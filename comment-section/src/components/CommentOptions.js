import React, { useState } from "react";

const CommentOptions = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}) => {
  const [text, setText] = useState(initialText);
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols="50"
        rows="5"
      ></textarea>
      <div className="comment-options">
        <div className="add-comment">
          <button disabled={!text}>{submitLabel}</button>
        </div>
        {hasCancelButton && <button onClick={handleCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default CommentOptions;
