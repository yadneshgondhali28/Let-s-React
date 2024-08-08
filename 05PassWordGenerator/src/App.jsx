import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setspecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let passwd = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed) str += "!@#$%^&*()-_=+[{]}|;:'\",<.>/?`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      passwd += str[char];
    }
    setPassword(passwd);
  }, [length, numberAllowed, specialCharAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, specialCharAllowed, passwordGenrator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded px-4 py-4 my-4 text-orange-400 bg-gray-700">
        <h1 className="text-center text-2xl">Password Generator</h1>
        <div className="flex shadow rounded mt-4">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3 rounded text-orange-500 text-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="text-white px-5 py-2 bg-blue-800 rounded ml-2 hover:bg-blue-700"
          >
            Copy
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              id="length"
              value={length}
              min={8}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="number"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="cursor-pointer" htmlFor="number">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="specialChar"
              defaultChecked={specialCharAllowed}
              className="cursor-pointer"
              onChange={() => {
                setspecialCharAllowed((prev) => !prev);
              }}
            />
            <label className="cursor-pointer" htmlFor="specialChar">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
