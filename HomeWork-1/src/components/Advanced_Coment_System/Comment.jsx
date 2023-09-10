/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
const Comment = ({ userName, commentText, replies, commentId, submitReplay, replyBtnClickHandler, addInput }) => {
  return (
    <div className="flex flex-col ">
      <p className="font-semibold text-xl">{userName}</p>
      <p className="text-lg ml-2">
        {commentText}{" "}
        <button
          onClick={() => replyBtnClickHandler(commentId)}
          className=" text-xs border rounded-lg bg-gray-600 px-1 text-white"
        >
          Replay
        </button>
      </p>
      {addInput.show && addInput.id == commentId && <ReplyInput key={commentId} id={commentId} submitReplay={submitReplay} />}
      <Replies
        key={replies.id}
        replies={replies}
        addInput={addInput}
        replyBtnClickHandler={replyBtnClickHandler}
        submitReplay={submitReplay}
      />
    </div>
  );
};

export default Comment;

function ReplyInput({ id, submitReplay }) {
  const [input, setInput] = useState("");

  return (
    <div className="m-2">
      <form action="#" className="flex justify-center items-center " onSubmit={(e) => submitReplay(id, e)}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add your reply here"
          className="h-5 text-sm shadow appearance-none border rounded-l w-full py-4 px-3 text-gray-700 leading-tight "
        ></input>
        <button type="submit" className="text-xs p-2 border border-gray-600 rounded-r bg-gray-600 px-1 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

function Replies({ replies, depth = 1, addInput, replyBtnClickHandler, submitReplay }) {
  if (!replies || replies.length === 0) return null;

  return (
    <>
      {replies.map((item, index) => (
        <React.Fragment key={index}>
          <div style={{ marginLeft: `${depth * 10}px` }} className={` text-sm text-slate-600 `}>
            <span className="font-semibold just">&uarr;{`${item.id} ${item.author}`}</span> {item.content}
            <button
              onClick={() => replyBtnClickHandler(item.id)}
              className=" text-xs border rounded-lg bg-gray-600 px-1 text-white"
            >
              Replay
            </button>
          </div>
          {addInput.show && addInput.id == item.id && <ReplyInput id={item.id} submitReplay={submitReplay} />}
          {item.replies && item.replies.length > 0 && (
            <Replies
              replies={item.replies}
              depth={depth + 1}
              addInput={addInput}
              replyBtnClickHandler={replyBtnClickHandler}
              submitReplay={submitReplay}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}
