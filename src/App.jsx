import "./App.css";
import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";
import Education from "./Pages/Education";
import Landing from "./Pages/Landing";
import Navbar from "./Component/Navbar";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import WorkExperience from "./Pages/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Resume />
      <WorkExperience />
      <Education/>
      <ContactMe/>
    </>
  );
}

export default App;
