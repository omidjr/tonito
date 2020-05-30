import { useState, useEffect } from "react";

export const useSteps = () => {
  const [step, setStep] = useState(() => {
    const localData = localStorage.getItem("step");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  return {
    step,
    setStep,
  };
};
