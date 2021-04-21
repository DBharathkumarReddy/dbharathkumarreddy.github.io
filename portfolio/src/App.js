import './App.css';
import {About} from "./Components/About"
import {Techstack} from "./Components/Techstack"
import Proficiency from "./Components/Proficiency"
import ProjectCard from "./Components/ProjectCard"
function App() {
  return (
    <div className="App">
      <About/>
      <Techstack/>
      <Proficiency/>
      <ProjectCard/>
    </div>
  );
}

export default App;
