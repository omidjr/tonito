import React from "react";
import { Landing } from "./Landing";
import { CheckOut } from "./CheckOut";
import { Email } from "./Email";
import { useOrders } from "./components/Hook/useOrders";
import { useSteps } from "./components/Hook/useSteps";
import { useTotal } from "./components/Hook/useTotal";

function App() {
  const orders = useOrders();
  const steps = useSteps();
  const total = useTotal();

  switch (steps.step) {
    case 1:
      return <Landing {...orders} {...steps} {...total} />;
    case 2:
      return <CheckOut {...steps} {...total} />;
    case 3:
      return <Email {...steps} {...orders} />;
    default:
      return <Landing {...orders} {...steps} {...total} />;
  }
}

export default App;
