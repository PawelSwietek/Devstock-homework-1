import Comment_1 from "./Comment_1";

const CommentList_1 = ({ comments }) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg ">There are {comments.length} comments</p>
      {comments.map((user) => (
        <Comment_1 key={user.id} userName={user.userName} commentText={user.comment} />
      ))}
    </div>
  );
};

export default CommentList_1;
