import "./App.css";
import React from "react";
import * as Component from "./Components";
import "animate.css/animate.compat.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as Pages from "./pages";

const Loader = () => {
  return (
    <>
      <Component.HackerLoadingScreen />
    </>
  );
};
const Core = () => {
  return (
    <>
      {/* @error - with faq and best practices and resources causing x overflow */}

      <Component.Header />
      <section id="main">
        <Component.UniqueHeroSection />
      </section>
      <section className="" id="Vulnerabilities">
        <Component.Features />
      </section>
      <section className="" id="https">
        <Component.Faq />
      </section>

      <section id="bestpractices">
        <Component.BestPractice />
        <Component.Quiz />
      </section>
      <section id="resources">
        <Component.Team />
      </section>
      <Component.Footer />
    </>
  );
};
function App() {
  const [loading, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1); // 27k
  }, []);
  console.log(Pages.cybersecurity);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={loading ? <Core /> : <Loader />} />

          {Object.entries(Pages).map(([key, value]) => {
            return (
              <Route
                path={`/${value.title}`}
                element={
                  <>
                    <Component.Header />
                    <Component.Info
                      title={value.title}
                      author={value.author}
                      time={value.time}
                      intro={value.intro}
                      body={value.body}
                      conclusion={value.conclusion}
                    />
                    <Component.Footer />
                  </>
                }
              />
            );
          })}
          <Route
            path="/blog"
            element={
              <>
                <Component.Header></Component.Header>
                <Component.Info />
                <Component.Footer></Component.Footer>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
