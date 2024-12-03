import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Admission from "./components/Admission/Admission";
import Cutoff from "./components/Cutoff/Cutoff";
import Placement from "./components/Placement/Placement";
import Ranking from "./components/Ranking/Ranking";
import Scholarship from "./components/Scholarship/Scholarship";
import Campus from "./components/Campus/Campus";
import AlumniNetwork from "./components/AlumniNetwork/AlumniNetwork";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="containerr">
      <Header />
      <Navbar />
      <div className="contain">
        <About />
        <Courses />
        <Admission />
        <Cutoff />
        <Placement />
        <Ranking />
        <Scholarship />
        <Campus />
        <AlumniNetwork />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default App;
