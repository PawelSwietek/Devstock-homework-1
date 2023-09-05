import CommentList_1 from "./CommentList_1";

const comments = [
  { id: 1, userName: "user1", comment: "What a beautiful day!" },
  { id: 2, userName: "user2", comment: "Just finished reading a great book." },
  { id: 3, userName: "user3", comment: "Looking forward to the weekend." },
  { id: 4, userName: "user4", comment: "Trying out a new recipe today." },
  { id: 5, userName: "user5", comment: "Has anyone seen the latest movie?" },
  { id: 6, userName: "user6", comment: "Enjoying a walk in the park." },
  { id: 7, userName: "user7", comment: "Listening to my favorite song." },
  { id: 8, userName: "user8", comment: "Feeling grateful for my friends." },
  { id: 9, userName: "user9", comment: "Just had a productive day at work." },
  { id: 10, userName: "user10", comment: "Relaxing with a cup of tea." },
];

const CommentSystem_1 = () => {
  return (
    <div className="border p-6 shadow-2xl border-slate-200 bg-slate-50">
      <p className="text-4xl">Comments</p>
      <CommentList_1 comments={comments} />
    </div>
  );
};

export default CommentSystem_1;
