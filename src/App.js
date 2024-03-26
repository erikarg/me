import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Introduction from "./components/introduction/introduction";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
