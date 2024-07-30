import { useState } from "react";

function App() {
  let [color, setColor] = useState("");

  function generateRGBColorCode() {
    return Math.floor(Math.random() * 255);
  }

  function setRGBBackgroundColor() {
    color = `rgb(${generateRGBColorCode()}, ${generateRGBColorCode()}, ${generateRGBColorCode()})`;
    return setColor(color);
  }

  let hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function getHEXVal() {
    return Math.floor(Math.random() * hexCodes.length);
  }

  function setHEXBackgroundColor() {
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexCodes[getHEXVal()];
    }
    return setColor(color);
  }

  function generateHSLColorCode() {
    let hue = Math.floor(Math.random() * 360);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  function setHSLBackgroundColor() {
    color = generateHSLColorCode();
    console.log(color);
    return setColor(color);
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-center items-center"
        style={{ backgroundColor: color }}
      >
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
            Hex
          </button>

          <button
            className="px-6 py-2 mx-2 border-2 border-black border-solid rounded-md"
            onClick={setHSLBackgroundColor}
          >
            HSL
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
