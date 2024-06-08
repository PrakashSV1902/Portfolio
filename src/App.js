import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Header from './Components/Header/Header';
import Projectcontainer from './Components/Projectcontainer/Projectcontainer';
import Skillcontainer from './Components/Skillcontainer/Skillcontainer';
import Topcontainer from './Components/TopContainer/Topcontainer';

function App() {
  return (
    <div>
      <Header />
      <Topcontainer />
      <About />
      <Experience />
      <Education />
      <Skillcontainer />
      <Projectcontainer />
      <Contact />

    </div>
    
  );
}

export default App;
