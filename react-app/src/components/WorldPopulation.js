import React from "react";

const WorldPopulation = () => {
  const tenHighestPopulation = [
    { country: "World", population: 7693165599 },
    { country: "China", population: 1377422166 },
    { country: "India", population: 1295210000 },
    { country: "United States of America", population: 323947000 },
    { country: "Indonesia", population: 258705000 },
    { country: "Brazil", population: 206135893 },
    { country: "Pakistan", population: 194125062 },
    { country: "Nigeria", population: 186988000 },
    { country: "Bangladesh", population: 161006790 },
    { country: "Russian Federation", population: 146599183 },
    { country: "Japan", population: 126960000 },
  ];
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#000000",
          margin: "40px",
          marginBottom: "10px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        World Population
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#000000",
          fontFamily: "sans-serif",
        }}
      >
        Ten most populated countries
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
          height: "370px",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            listStyleType: "none",
            height: "100%",
            padding: "0px",
          }}
        >
          {tenHighestPopulation.map((country) => (
            <li
              key={country.country}
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                fontWeight: "bold",
              }}
            >
              {country.country.toUpperCase()}
            </li>
          ))}
        </ul>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            listStyleType: "none",
            height: "100%",
            padding: "0px",
          }}
        >
          {tenHighestPopulation.map((country) => (
            <li
              key={country.country}
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                fontWeight: "bold",
                margin: "2px 20px",
              }}
            >
              <div
                style={{
                  width: `${(country.population/7693165599)*400}px`,
                  height: "22px",
                  borderRadius: "4px",
                  backgroundColor: "#FFA500",
                }}
              />
            </li>
          ))}
        </ul>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            listStyleType: "none",
            height: "100%",
            padding: "0px",
          }}
        >
          {tenHighestPopulation.map((country) => (
            <li
              key={country.country}
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                fontWeight: "bold",
              }}
            >
              {country.population.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorldPopulation;
