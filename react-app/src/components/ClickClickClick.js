import React, { useEffect, useState } from 'react'

const ClickClickClick = () => {

  const [timer, setTimer] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if(timer === 0) return;

    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer-1)
    }, 1000);

    return () => {
      clearInterval(interval);
    }

  }, [timer])

  const GameButton = ( { buttonText, backgroundColor, onClick, disabled } ) => {
    return (
      <button style={{
        border: '0px',
        padding: '10px 20px',
        margin: '15px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontFamily: 'Bricolage Grotesque',
        fontSize: '35px',
        backgroundColor: `${backgroundColor}`,
      }} onClick={onClick}
      disabled={disabled}>
        {buttonText}
      </button>
    )
  }

  const handleStartClick = () => {
    setTimer(10);
    setCount(0);
  }

  const handleClickMe = () => {
    setCount(prevCount => prevCount+1)
  }

  const handleResetClick = () => {
    setCount(0);
    setTimer(0);
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: "black",
    }}>
      <h1 style={{
        color: "white",
        fontFamily: 'Bricolage Grotesque',
        letterSpacing: "2px",
        fontSize: "70px",
        margin: "50px 0px 30px 0px",
      }}>
        Timer: {timer}
      </h1>
      <h1 style={{
        color: "white",
        fontSize: "100px",
        fontFamily: 'Bricolage Grotesque',
        margin: "30px 0px 50px 0px",
        fontWeight: "bold",
      }}>
        {count}
      </h1>
      <GameButton buttonText="Start" backgroundColor="#E7DA3D" onClick={handleStartClick} disabled={timer !== 0}/>
      <GameButton buttonText="Click Me"backgroundColor="#3DD1E7" onClick={handleClickMe} disabled={timer === 0}/>
      <GameButton buttonText="Reset" backgroundColor="#E73D9F" onClick={handleResetClick}/>
    </div>
  )
}

export default ClickClickClick
