import React, { useEffect } from "react";
import pic1 from "../assets/semicolon.png";
import pic2 from "../assets/gallery_img/fig3.jpeg";
import "../Styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="parent">
      <div className="container">
        <div
          className="flex"
          // data-aos="flip-up"
          // data-aos-easing="linear"
          // data-aos-duration="1500"
        >
          <motion.img
            initial={{ x: -100, opacity: 0.8 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="who_img"
            src={pic1}
            alt="Image"
          />
          <div>
            <div className="heading">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="font-extrabold text-2xl mdl:text-3xl"
              >
                Who we are?
              </motion.h1>
            </div>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
              }}
              className="description"
            >
              Semicolon is the official coding club of National Institute of
              Technology Srinagar, a prestigious technical institute in India,
              founded in a Summer of 2010, by the Department of Computer Science
              and Engineering under Dr.Mohammad Ahsan Chishti. Comprised of
              passionate programmers, developers, and technology enthusiasts, we
              come together to foster a vibrant coding culture within our
              campus. Semicolon serves as a platform for students to enhance
              their coding skills, explore new technologies, and collaborate on
              innovative projects.
            </motion.p>
          </div>
        </div>
        <div
          className="flex1"
          // data-aos="flip-down"
          // data-aos-easing="linear"
          // data-aos-duration="1500"
        >
          <div>
            <div className="heading">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                What we do?
              </motion.h1>
            </div>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
              }}
              className="description"
            >
              Semicolon provides a platform for students to learn, collaborate,
              and excel in the field of computer programming, through workshops,
              coding competitions, and coding challenges, we aim to foster a
              vibrant coding culture within our college community. Our club also
              organizes Non-Technical events, guest lectures and coding boot
              camps to facilitate knowledge sharing and skill development. It
              also hosts one of the biggest Technical fest in whole J&K valley
              named as “EXORDIUM”
            </motion.p>
          </div>
          <motion.img
            initial={{ x: 100, opacity: 0.8 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="what_img"
            src={pic2}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
