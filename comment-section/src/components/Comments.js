import React, { useState } from "react";
import { useGlobalContext } from "../context";
import SingleComment from "./SingleComment";
import CommentOptions from "./CommentOptions";

const Comments = ({ currentUserId }) => {
  const {
    comments,
    createComment,
    setComments,
    deleteCommentApi,
    editCommentApi,
  } = useGlobalContext();
  const [activeComment, setActiveComment] = useState();
  const rootComments = comments.filter((comment) => {
    return comment.parentId === null;
  });
  const addComment = (text, parentId) => {
    console.log(text, parentId);
    createComment(text, parentId).then((comment) =>
      setComments([comment, ...comments])
    );

    setActiveComment(null);
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure?")) {
      deleteCommentApi(commentId).then(() => {
        const newComments = comments.filter((comment) => {
          return comment.id !== commentId;
        });
        setComments(newComments);
      });
    }
  };
  const editComment = (text, commentId) => {
    editCommentApi(text, commentId).then(() => {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, body: text };
        }
        return comment;
      });
      setComments(updatedComments);

      setActiveComment(null);
    });
  };

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
        <CommentOptions
          submitLabel="Write"
          handleSubmit={addComment}
        ></CommentOptions>
      </div>
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <SingleComment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            editComment={editComment}
          ></SingleComment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
