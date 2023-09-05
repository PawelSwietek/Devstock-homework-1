const Comment_1 = ({ userName, commentText }) => {
  return (
    <div className="">
      <p className="font-semibold">{userName}</p>
      <p className="text-sm ml-6">{commentText}</p>
    </div>
  );
};

export default Comment_1;
