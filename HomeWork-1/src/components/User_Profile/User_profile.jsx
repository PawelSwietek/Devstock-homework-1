import ProfileDetails from "./ProfileDetails";
import ProfilePicture from "./ProfilePicture";
import ProfileImage from "./assets/Thrall.jpg";

const User_profile = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow max-w-sm">
        <ProfilePicture src={ProfileImage} />
        <ProfileDetails name="Pawel Swietek" email="thrall84s3@gmail.com" />
      </div>
    </div>
  );
};

export default User_profile;
