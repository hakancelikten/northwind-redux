//react hooks ilk kullanım
import React from "react";
// props'lardan bişey geliyorsa burada yakalamış olacağız.
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field"></div>
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextInput;
