import React from "react";
import img from "../assets/user-icon.jpg";
import Comments from "./Comments";
import CommentOptions from "./CommentOptions";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
//umut ketenci
const SingleComment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  activeComment,
  addComment,
  editComment,
  setActiveComment,
}) => {
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.type === "reply" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "edit" &&
    activeComment.id === comment.id;
  const replyId = comment.parentId ? comment.parentId : comment.id;
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
          <div className="">{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentOptions
            submitLabel="Edit"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => editComment(text, comment.id)}
            handleCancel={() => setActiveComment(null)}
          ></CommentOptions>
        )}
        <div className="comment-actions">
          {canReply && (
            <button
              className="comment-action"
              onClick={() => {
                setActiveComment({ id: comment.id, type: "reply" });
              }}
            >
              Reply
            </button>
          )}
          {canEdit && (
            <button
              className="comment-action"
              onClick={() => {
                setActiveComment({ id: comment.id, type: "edit" });
              }}
            >
              Edit
            </button>
          )}
          {canDelete && (
            <button
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </button>
          )}
        </div>
        {isReplying && (
          <CommentOptions
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          ></CommentOptions>
        )}
        {replies && (
          <div className="replies">
            {replies.map((reply) => {
              return (
                <SingleComment
                  comment={reply}
                  key={reply.id}
                  currentUserId={currentUserId}
                  deleteComment={deleteComment}
                  parentId={comment.id}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  addComment={addComment}
                  editComment={editComment}
                ></SingleComment>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default SingleComment;
