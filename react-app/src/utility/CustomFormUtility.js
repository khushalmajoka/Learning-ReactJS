import React from "react";

function CustomFormUtility(props) {
  console.log(Object.keys(props));
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '100px 0px 0px 0px',
    }}>
      {Object.keys(props).map((key) =>
        props[key].isInput ? (
          <>
            <label htmlFor={props[key].label}>{props[key].label}</label>
            <input
              className="form-input"
              key={key}
              ref={props[key].ref}
              type={props[key].type}
              id={props[key].label}
              placeholder={props[key].placeholder}
              style={{
                margin: '10px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #000',
              }}
            />
          </>
        ) : (
          <button
          style={{
            margin: '10px',
            padding: '10px 15px',
            borderRadius: '5px',
            backgroundColor: '#000',
            color: '#fff',
            border: '0px',
          }}
            className="form-button"
            key={key}
            type="submit"
            onClick={props[key].handler}
          >
            {props[key].buttonText}
          </button>
        )
      )}
    </div>
  );
}

export default CustomFormUtility;