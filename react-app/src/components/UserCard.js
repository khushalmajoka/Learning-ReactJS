import React from "react";
import khushal from "../images/khushal.jpeg";
import clock from "../images/clock.png";
import check from "../images/check.png";

const UserCard = () => {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Flask",
    "MYSQL",
    "Git",
    "Github",
    "Express",
  ];
  return (
    <div
      style={{
        margin: "50px",
        padding: "30px",
        background: "#FFFFFF",
        borderRadius: "10px",
        boxShadow: "10px 10px 30px #575757",
      }}
    >
      <div style={{
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        overflow: "hidden"
      }}>
        <img
          src={khushal}
          alt="profile pic"
          style={{
            borderRadius: "300px",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: "scale(1.4)",
            objectPosition: "center 20px"
          }}
        />
      </div>
      <h1
        style={{
          fontFamily: "Montserrat",
          margin: "25px 10px 10px 10px",
        }}
      >
        KHUSHAL MAJOKA{" "}
        <img
          src={check}
          alt="check"
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </h1>
      <p style={{
        fontFamily: "Montserrat",
        margin: "10px 10px",
      }}>Software Developer, India</p>
      <h2
        style={{
          fontFamily: "Montserrat",
          margin: "25px 20px 10px 10px",
        }}
      >
        SKILLS
      </h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill) => (
          <li
            key={skill}
            style={{
              margin: "10px",
              padding: "10px",
              display: "flex",
              fontSize: "17px",
              background: "#2ACFCF",
              borderRadius: "10px",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
      <p style={{
        margin: "10px",
      }}>
        <img
          src={clock}
          alt="clock"
          style={{
            width: "13px",
            height: "13px",
          }}
        />{" "}
        Joined on Aug 30, 2020
      </p>
    </div>
  );
};

export default UserCard;