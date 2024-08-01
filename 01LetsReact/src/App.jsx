import Demo from "./demo";

function MyButton() {
  return <MyButton>Click for cookie!</MyButton>;
}

function App() {
  const userName = "Yadnesh";
  return (
    <>
      <Demo />
      <MyButton />
      <h2>Let&apos;s Vite + React {userName}!</h2>
    </>
  );
}

export default App;
