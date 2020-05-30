import React from "react";
import { Landing } from "./Landing";
import { CheckOut } from "./CheckOut";
import { useSteps } from "./components/Hook/useSteps";
import { useTotal } from "./components/Hook/useTotal";

function App() {
  const steps = useSteps();
  const total = useTotal();

  switch (steps.step) {
    case 1:
      return <Landing {...steps} {...total} />;
    case 2:
      return <CheckOut {...steps} {...total} />;
    default:
      return <Landing {...steps} {...total} />;
  }
}

export default App;
