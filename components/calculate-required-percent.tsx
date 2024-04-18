import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CalculateRequiredPercent = () => {
  const [pastPercentage, setPastPercentage] = useState("");
  const [pastWeightage, setPastWeightage] = useState("");
  const [targetPercentage, setTargetPercentage] = useState("");
  const [requiredPercentage, setRequiredPercentage] = useState("");

  const calculateRequiredPercentage = () => {
    const pastPercentageValue = parseFloat(pastPercentage);
    const pastWeightageValue = parseFloat(pastWeightage);
    const targetPercentageValue = parseFloat(targetPercentage);

    if (
      isNaN(pastPercentageValue) ||
      isNaN(pastWeightageValue) ||
      isNaN(targetPercentageValue)
    ) {
      setRequiredPercentage("0");
      return;
    }

    const requiredPercentageValue: number =
      (targetPercentageValue -
        pastPercentageValue * (pastWeightageValue / 100)) /
      (1 - pastWeightageValue / 100);

    setRequiredPercentage(requiredPercentageValue.toFixed(2));
  };
  return (
    <>
      <div>
        <Label htmlFor="pastPercentage">
          Percentage obtained in the previous assessment
        </Label>
        <Input
          id="pastPercentage"
          type="number"
          value={pastPercentage}
          onChange={(e) => {
            setPastPercentage(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="pastWeightage">
          Weightage of the previous assessment (%)
        </Label>
        <Input
          id="pastWeightage"
          type="number"
          value={pastWeightage}
          onChange={(e) => {
            setPastWeightage(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="targetPercentage">
          Target percentage for the entire module
        </Label>
        <Input
          id="targetPercentage"
          type="number"
          value={targetPercentage}
          onChange={(e) => {
            setTargetPercentage(e.target.value);
          }}
        />
      </div>

      <div className="my-8 grid grid-cols-4">
        <div className="col-span-3 space-y-2">
          <p className="text-xl font-bold sm:text-2xl">Required Percentage:</p>
          <p className="text-lg font-bold sm:text-xl">{requiredPercentage}%</p>
        </div>

        <Button className="mt-auto" onClick={calculateRequiredPercentage}>
          Calculate
        </Button>
      </div>
    </>
  );
};
