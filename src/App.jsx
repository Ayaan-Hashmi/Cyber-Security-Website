import "./App.css";
import React from "react";
import * as Component from "./Components";
import "animate.css/animate.compat.css";

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
  return <>{loading ? <Core /> : <Loader />}</>;
}

export default App;
