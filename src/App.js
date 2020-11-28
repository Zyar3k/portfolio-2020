import About from "./components/views/About/About";
import Contact from "./components/views/Contact/Contact";
import Home from "./components/views/Home/Home";
import Portfolio from "./components/views/Portfolio/Portfolio";
import Skills from "./components/views/Skills/Skills";

const { default: Sidebar } = require("./components/features/Sidebar/Sidebar");

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <aside>
        <Sidebar />
      </aside>
    </>
  );
}

export default App;
