import React from "react";
import { Landing } from "./Landing";
import { CheckOut } from "./CheckOut";
import { useSteps } from "./components/Hook/useSteps";

function App() {
  const steps = useSteps();

  switch (steps.step) {
    case 1:
      return <Landing {...steps} />;
    case 2:
      return <CheckOut {...steps} />;
    default:
      return <Landing {...steps} />;
  }
}

export default App;
