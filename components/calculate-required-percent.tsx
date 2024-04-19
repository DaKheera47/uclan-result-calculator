import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CalculateRequiredPercent = () => {
  const [pastPercentage, setPastPercentage] = useState(0);
  const [pastWeightage, setPastWeightage] = useState(0);
  const [targetPercentage, setTargetPercentage] = useState(0);
  const [requiredPercentage, setRequiredPercentage] = useState(0);

  const calculateRequiredPercentage = () => {
    if (
      isNaN(pastPercentage) ||
      isNaN(pastWeightage) ||
      isNaN(targetPercentage)
    ) {
      setRequiredPercentage(0);
      return;
    }

    const requiredPercentageValue: number =
      (targetPercentage - pastPercentage * (pastWeightage / 100)) /
      (1 - pastWeightage / 100);

    setRequiredPercentage(requiredPercentageValue);
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
            setPastPercentage(e.target.valueAsNumber);
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
            setPastWeightage(e.target.valueAsNumber);
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
            setTargetPercentage(e.target.valueAsNumber);
          }}
        />
      </div>

      <div className="my-8 grid grid-cols-4">
        <div className="col-span-3 space-y-2">
          <p className="text-xl font-bold sm:text-2xl">
            Required Percentage from Exam:
          </p>
          <p className="text-lg font-bold sm:text-xl">{requiredPercentage}%</p>
        </div>

        <Button className="mt-auto" onClick={calculateRequiredPercentage}>
          Calculate
        </Button>
      </div>
    </>
  );
};
