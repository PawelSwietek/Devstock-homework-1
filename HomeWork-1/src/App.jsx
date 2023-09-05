import Accordion from "./components/Accordion/Accordion";
import AdvancedCommentSystem from "./components/Advanced_Coment_System/AdvancedCommentSystem";

import CommentSystem_1 from "./components/Comment_System/CommentSystem_1";
import DynamicTabs from "./components/Dynamic_Tabs/DynamicTabs";

import LikeButton from "./components/Like_Button/LikeButton";
import Personal_Greeting_Card from "./components/Personal_Greeting_Card/Personal_Greeting_Card";
import ProductList from "./components/Product_List/ProductList";
import ThemeSwitcher from "./components/Theme_Switcher/ThemeSwitcher";
import TodoListItem from "./components/Todo_List_Item/TodoListItem";
import User_profile from "./components/User_Profile/User_profile";
function App() {
  return (
    <div className="flex justify-center h-full items-center flex-col mt-10 space-y-20 ">
      <Personal_Greeting_Card />
      <User_profile />
      <LikeButton />
      <TodoListItem />
      <ProductList />
      <Accordion />
      <CommentSystem_1 />
      <DynamicTabs />
      <ThemeSwitcher />
      <AdvancedCommentSystem />
    </div>
  );
}

export default App;
