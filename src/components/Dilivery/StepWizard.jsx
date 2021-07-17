import React from "react";
import { WithWizard } from "react-albus";

const StepWizard = () => {
  return (
    <WithWizard
      render={({ next, previous, step, steps, set, go, replace }) => {
        console.log("step, set", set, replace);
        return (
          <div>
            {steps.indexOf(step) < steps.length - 1 ? (
              <button
                onClick={() => {
                  console.log("heheh");
                  go(1);
                }}
              >
                Next
              </button>
            ) : (
              "heet rooi"
            )}
            {steps.indexOf(step) > 0 ? (
              <button onClick={() => previous()}>Back</button>
            ) : (
              "dau tien rooif"
            )}
          </div>
        );
      }}
    />
  );
};

export default StepWizard;
