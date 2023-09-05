import { useState } from "react";
import CommentList from "./CommentList";
import data from "./assets/data";

const AdvancedCommentSystem = () => {
  const [replies, setReplies] = useState([...data.replies]);

  function submitReplay(id, reply) {
    reply.preventDefault();
    const ids = id.split(".");
    const a = findItem(ids, replies);

    let newId = "";
    if (a.replies.length > 0) {
      ids.push(a.replies.length + 1);
      newId = ids.join(".");
    } else {
      ids.push("1");
      newId = ids.join(".");
    }

    a.replies.push({ id: newId, author: "user", content: reply.target[0].value, replies: [] });

    setReplies((replies) => [...replies]);
  }

  function findItem(ids, replies, counter = 0) {
    const find = replies.find((item) => item.id == ids.slice(0, counter + 1).join("."));
    if (find && ids.length > counter + 1) {
      return findItem(ids, find.replies, counter + 1);
    } else {
      return find;
    }
  }

  return (
    <div className="border p-6 shadow-2xl border-slate-100 bg-slate-50">
      <p className="text-6xl">Comments</p>
      <CommentList key={Math.random()} comments={data.comments} replies={data.replies} submitReplay={submitReplay} />
    </div>
  );
};

export default AdvancedCommentSystem;
