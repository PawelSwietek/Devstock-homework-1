import { useState } from "react";
import Comment from "./Comment";

const CommentList = ({ comments, replies, submitReplay }) => {
  const [addInput, setAddInput] = useState({ show: false, id: "" });

  function replyBtnClickHandler(id) {
    console.log(id);
    setAddInput({ show: true, id: id });
  }
  return (
    <div className="flex flex-col w-full">
      <p className="text-2xl ">There are {comments.length} comments</p>
      {comments.map((comment) => {
        const repliesList = replies.find((reply) => reply.id == comment.id);

        return (
          <Comment
            key={comment.id}
            userName={comment.userName}
            commentText={comment.comment}
            commentId={comment.id}
            replies={repliesList ? repliesList.replies : null}
            submitReplay={submitReplay}
            addInput={addInput}
            replyBtnClickHandler={replyBtnClickHandler}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
