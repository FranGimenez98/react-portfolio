import { useState } from "react";
import { ThemeProvider } from "styled-components";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import { Works } from "./components/Works/Works";
import GlobalStyle from "./styles/global";
import { themes } from "./styles/themes";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <About />
      <Skills />
      <Works />
      <Form />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

