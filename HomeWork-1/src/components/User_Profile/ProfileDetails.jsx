const ProfileDetails = ({ name, email }) => {
  return (
    <div className="p-5">
      <p className="text-white text-3xl tracking-tight font-bold">{name}</p>
      <p className="text-gray-400 text-xl">{email}</p>
    </div>
  );
};

export default ProfileDetails;
