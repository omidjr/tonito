import { useState } from "react";

export const useSteps = () => {
  const [step, setStep] = useState();

  return {
    step,
    setStep,
  };
};
