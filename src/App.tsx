import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target instanceof HTMLAnchorElement &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const href = target.getAttribute("href")!;
        const id = href.replace("#", "");
        const scrollTarget = document.getElementById(id);
        if (scrollTarget) {
          e.preventDefault();
          scrollTarget.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;