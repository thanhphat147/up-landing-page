import React from "react";
import Header from "./header/Header";
import Intro from "./intro/Intro";
import Navbar from "./navigation/Navbar";
import Courses from "./course/Courses";
import Environment from "./environment/Environment";
import Teacher from "./teacher/Teacher";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Courses />
      <Environment />
      <Teacher />
      <Footer />
    </div>
  );
};

export default Home;
