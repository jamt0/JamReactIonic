import React from "react";
import HomeView from "pages/Home/HomeView";
import { useSettingsUser } from "context/settingsUser";

const { texts } = useSettingsUser()!;

const Home: React.FC = () => {
  return <HomeView texts={texts}/>;
};

export default Home;
