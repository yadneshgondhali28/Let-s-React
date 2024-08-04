import { useState } from "react";

function App() {
  let [color, setColor] = useState("");

  // logic for generating color code
  function generateRGBColorCode() {
    return Math.floor(Math.random() * 256);
  }

  function generateRGBColor() {
    return `rgb(${generateRGBColorCode()}, ${generateRGBColorCode()}, ${generateRGBColorCode()})`;
  }

  function generateHEXColor() {
    const hexCodes = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return newColor;
  }

  function generateHSLColor() {
    let hue = Math.floor(Math.random() * 361);
    let saturation = Math.floor(Math.random() * 101);
    let lightness = Math.floor(Math.random() * 101);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  // logic for setting the color
  function setRGBBackgroundColor() {
    setColor(generateRGBColor());
  }
  function setHEXBackgroundColor() {
    setColor(generateHEXColor());
  }
  function setHSLBackgroundColor() {
    setColor(generateHSLColor());
  }

  return (
    <>
      <div
        className="outer-container w-full h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="inner-container bg-white px-12 py-8 flex flex-col justify-center items-center gap-3 border-2 border-solid border-black rounded-2xl shadow-xl min-h-28">
          <h1 className="text-3xl mb-4">Change Background Color</h1>
          <div className="btns">
            <button
              className="px-6 py-2 mx-2 border-2 border-black border-solid rounded-md"
              onClick={setRGBBackgroundColor}
            >
              RGB
            </button>

            <button
              className="px-6 py-2 mx-2 border-2 border-black border-solid rounded-md"
              onClick={setHEXBackgroundColor}
            >
              HEX
            </button>

            <button
              className="px-6 py-2 mx-2 border-2 border-black border-solid rounded-md"
              onClick={setHSLBackgroundColor}
            >
              HSL
            </button>
          </div>
          <p>Code: {color}</p>
        </div>
      </div>
    </>
  );
}

export default App;
