import { useState } from "react";
import "./App.css";
import MainBody from "./components/organisms/MainBody";
import ThanksForSubmit from "./components/organisms/ThanksForSubmit";

function App() {


  const [active, setActive] = useState(true);

  const [count, setCount] = useState(0);


  return (
    <>
      <section className="w-[100%] h-[100vh] bg-[#131518] p-[0px_24px] flex flex-col items-center justify-center">
        {active === true ? <MainBody setCount={setCount} active={active} setActive={setActive}/> : <ThanksForSubmit count={count} />}
      </section>
    </>
  );
}

export default App;