import frontend_image from "../images/frontend_technologies.png";
import React from "react";

const ImageAndNewsletter = () => {
  return (
    <div style={{ textAlign: "center", height: "100vh", background: "pink", display: "flex", flexDirection: "column"}}>
      <img src={frontend_image} alt="frontend" width="100%" />
      <div
        className="form"
        style={{
          background: "#C2E6F4",
          margin: "20px",
          padding: "20px",
          borderRadius: "20px",
          alignItems: "center",
          flex: 1
        }}
      >
        <h1 style={{
          margin: "10px",
        }}>Subscribe</h1>
        <p style={{
          margin: "10px",
        }}>Sign up with your email address to receive news and updates.</p>
        <input
          type="text"
          placeholder="First Name"
          style={{
            padding: "10px",
            border: "0px",
            borderRadius: "5px",
            margin: "10px",
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          style={{
            padding: "10px",
            border: "0px",
            borderRadius: "5px",
            margin: "10px",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: "10px",
            border: "0px",
            borderRadius: "5px",
            margin: "10px",
          }}
        />
        <br />
        <button
          placeholder="Subscribe"
          style={{
            background: "#F37474",
            border: "0px",
            color: "white",
            height: "40px",
            width: "200px",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ImageAndNewsletter;
