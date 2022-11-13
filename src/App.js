import { useRef } from "react";
// components
import F2E from "./components/f2e/F2E";
import Bother from "./components/bother/Bother";
import Rules from "./components/rules/Rules";
import Interactive from "./components/interactive/Iinteractive";
import Signup from "./components/signup/Signup";

function App() {
  const backgroundRef = useRef();

  return (
    <>
      <div ref={backgroundRef}>
        <F2E />
        <Bother />
        <Interactive />
        <Signup />
        <Rules />
      </div>

      <div className="background_container" />
    </>
  );
}

export default App;
