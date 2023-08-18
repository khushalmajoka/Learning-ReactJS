import React from "react";

const OddEvenPrime = () => {
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  const isOdd = (number) => number % 2 === 1;

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#000000",
          margin: "40px",
          fontWeight: "bold",
        }}
      >
        Odd Even Prime
      </h1>
      <div style={{
        margin: "40px 250px",
      }}>
        <ul style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap"
        }}>
          {numbers.map((number) => (
            <li key={number} style={{
                margin: "1px",
                backgroundColor: `${isPrime(number)? "#FD5E53" : isOdd(number)? "#FDDB3A": "#21BF73"}`,
                height: "120px",
                width: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "35px",
                fontFamily: "cursive",
                fontWeight: "bold",
            }}>
              {number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OddEvenPrime;
