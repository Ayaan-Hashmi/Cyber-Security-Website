import "./App.css";
import React from "react";
import * as Component from "./Components";
import "animate.css/animate.compat.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as Pages from "./pages";
// TODO: Add links correctly , finish writup of all pages , optimize imges and dependancies , also add lazy loading

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
      <Component.Header />
      <section id="main">
        <Component.UniqueHeroSection />
      </section>
      <section className="" id="vulnerabilities">
        <Component.Features />
        <Component.safetyTips />
      </section>
      <section className="" id="https">
        <Component.Faq />
      </section>
      <section id="encryption">
        <Component.EncryptionDemo />
      </section>
      <section id="bestpractices">
        <Component.BestPractice />
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
                path={`/${value.url}`}
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
            path="/quiz"
            element={
              <>
                <Component.Header></Component.Header>
                <Component.Quiz />
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
