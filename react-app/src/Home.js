import React from "react";
import { Link } from "react-router-dom";

const RoutingButton = ( { routingFor } ) => {
  return (
    <Link to={`/${routingFor.split(" ").join("")}`}>
      <button
        style={{
          border: "none",
          padding: "10px",
          fontSize: "20px",
          fontFamily: "Bricolage Grotesque",
          color: "white",
          margin: "10px",
          borderRadius: "10px",
          backgroundColor: "#4299E1",
          cursor: "pointer",
        }}
      >
        {routingFor}
      </button>
    </Link>
  );
};

const Home = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          padding: "10px",
          fontFamily: "Bricolage Grotesque",
          fontWeight: "normal",
          margin: "40px",
        }}
      >
        My React Portfolio
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "10px 100px",
          alignItems: "center",
        }}
      >
        <RoutingButton routingFor="Click Click Click"/>
        <RoutingButton routingFor="Event Form"/>
        <RoutingButton routingFor="Image and Newsletter"/>
        <RoutingButton routingFor="Odd Even Prime"/>
        <RoutingButton routingFor="Random Color Generator"/>
        <RoutingButton routingFor="Random Color Pallete 1"/>
        <RoutingButton routingFor="Random Color Pallete 2"/>
        <RoutingButton routingFor="User Card"/>
        <RoutingButton routingFor="World Population"/>
      </div>
    </div>
  );
};

export default Home;
