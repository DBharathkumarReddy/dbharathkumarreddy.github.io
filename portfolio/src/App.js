import './App.css';
import {About} from "./Components/About"
import {Techstack} from "./Components/Techstack"
import Proficiency from "./Components/Proficiency"
import ProjectCard from "./Components/ProjectCard"
import ReactGitHubCalendar from 'react-ts-github-calendar';
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="App">
      <About/>
      <Techstack/>
      <Proficiency/>
      <ProjectCard/>
      <div className="gitdata">
        <h1 style={{color:"rgb(92, 91, 91)"}}>GitHub Stats</h1>
      <ReactGitHubCalendar userName="DBharathkumarReddy" responsive/>;
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
