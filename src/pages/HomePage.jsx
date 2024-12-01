import { useState } from "react";
import Bienvenidos from "../components/HomePage/Bienvenidos";
import Counter from "../components/HomePage/Counter";
import WelcomeAlert from "../components/HomePage/WelcomeAlert";
import Landing from "../components/HomePage/Landing";
import NavBar from "../components/HomePage/NavBar"

const HomePage = () => {
  const [activePage, setActivePage] = useState("Landing Page")
  const pages = {
    "Landing Page": <Landing />,
    "Counter Page": <Counter />
  }

  return (
    <>
      <Bienvenidos setActivePage={setActivePage}/>
      <WelcomeAlert />
      <div className=" text-center">
        <NavBar /* le paso las props */activePage={activePage} setActivePage={setActivePage} />
        <div>{pages[activePage]}</div>
      </div>
    </>
  );
};

export default HomePage;
