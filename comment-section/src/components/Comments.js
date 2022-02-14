import React from "react";
import { useGlobalContext } from "../context";
import SingleComment from "./SingleComment";
import CommentOptions from "./CommentOptions";

const Comments = ({ currentUserId }) => {
  const { comments } = useGlobalContext();
  const rootComments = comments.filter((comment) => {
    return comment.parentId === null;
  });

  const getReplies = (commentId) => {
    return comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  console.log(rootComments);
  console.log(comments);
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">
        Write comment
        <CommentOptions></CommentOptions>
      </div>
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <SingleComment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
          ></SingleComment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
