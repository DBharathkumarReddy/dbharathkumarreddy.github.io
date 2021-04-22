import './App.css';
import {About} from "./Components/About"
import {Techstack} from "./Components/Techstack"
import Proficiency from "./Components/Proficiency"
import ProjectCard from "./Components/ProjectCard"
import Circle from "./Components/Circle"
import ReactGitHubCalendar from 'react-ts-github-calendar';
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="App">
      <About/>
      <Techstack/>
      <Proficiency/>
      <ProjectCard/>
      <Circle/>
      <div className="gitdata">
      <ReactGitHubCalendar userName="DBharathkumarReddy" responsive/>;
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
