import React from "react";
import Container from "react-bootstrap/esm/Container";
import { CommentItem } from "./commentItem";

export const Comments = ({ comments, voteHandler, subVoteHandler }) => {
  //TODO:add infinite scroll to comments

  return (
    <Container className="seekCommentBox">
      {comments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          voteHandler={voteHandler}
          subVoteHandler={subVoteHandler}
        />
      ))}
    </Container>
  );
};
