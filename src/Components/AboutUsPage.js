import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/AboutUs.css";

function AboutUsPage() {
  return (
    <div>
      <section id="ABOUT">
        <div class="about-1">
          <h1>About Us</h1>
          <p>
            We are a passionate and dedicated group of students who share a
            common love for coding, technology, and innovation. Our group is
            fueled by a strong desire to explore the vast world of coding,
            constantly pushing the boundaries of what is possible. But Semicolon
            is more than just a coding group. We are a community that fosters
            meaningful connections and friendships among like-minded individuals
            and organising regular meetups, hackathons, and coding competitions
            which not only provide exciting challenges but also offer
            opportunities for networking and collaboration.
          </p>
        </div>
        <div id="about-2">
          <div class="content-box-lg">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="about-item text-left">
                    <center>
                      <i class="fa fa-book"></i>
                    </center>
                    <h3>MISSION</h3>
                    <hr />
                    <p>
                      {" "}
                      Our mission is to provide a dynamic platform for students
                      to enhance their coding skills, foster a culture of
                      collaboration and innovation, and facilitate their
                      transition into successful professionals in the tech
                      industry. We are dedicated to organizing impactful events,
                      offering valuable resources, and creating an inclusive
                      community where every member can thrive and realize their
                      full potential as coders and technologists.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-item text-left">
                    <center>
                      <i class="fa fa-globe"></i>
                    </center>
                    <h3>VISSION</h3>
                    <hr />
                    <p>
                      {" "}
                      Our vision is to establish Semicolon as a hub of coding
                      excellence, where students can explore, learn, and excel
                      in the world of programming. We strive to cultivate a
                      passion for coding, inspire innovation, and create a
                      strong network of future technologists. Through our
                      initiatives, we aim to empower students with the skills
                      and knowledge necessary to tackle real-world challenges
                      and make a positive impact in the technology industry.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-item text-left">
                    <center>
                      <i class="fa fa-pencil"></i>
                    </center>
                    <h3>ACHIEVEMENTS</h3>
                    <hr />
                    <p>
                      {" "}
                      Some notable achievements: Semicolon organized the mega event
                      Exordium, which attracted participation from students all
                      over the Kashmir Valley. The club also successfully
                      organized Techsapiens 1.0, the biggest coding challenge in
                      the campus. Members of Semicolon achieved placements in
                      renowned companies such as Google, DE SHAW, Samsung R&D,
                      Capgemini, Optum, Bluestacks, and many others.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
