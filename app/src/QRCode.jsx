import React from "react";
import "./index.css";

export default function QRCode(props) {
  let input = document.getElementById("input");
  let btn = document.getElementById("btn");
  let img = document.getElementById("img");
  let qrcode = document.getElementsByClassName("qrcode-container");
  let [source, setSource] = React.useState();
  function myFunction() {
    if (input.value.length > 0) {
      setSource(source =
          "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
          input.value
      );
    }
  }
  return (
    <div className="container">
      <p>Enter text or URL</p>
      <input
        type="text"
        placeholder="Enter text or URL"
        maxLength="35"
        id="input"
      />
      <div className="qrcode-container">
        <img src={source} id="img" />
      </div>
      <button type="button" id="btn" onClick={myFunction}>
        Generate QR Code
      </button>
    </div>
  );
}
