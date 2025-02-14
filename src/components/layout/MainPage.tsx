import Navbar from "./Navigation_bar";
import Hero from "../layout/UI/Hero";
// import Project from "../UI/Projects"

const MainPage: React.FC = () => {
  return (
    <div className="bg-black">
      <Navbar />
        <div className ="pt-24">
          <Hero/>
        </div>

    </div>

  );
};
export default MainPage;