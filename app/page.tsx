// app/page.tsx
"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
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
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">
        UCLan Result Piece of Software
      </h1>

      <p className="mb-8">
        UCLan Result Piece of Software helps you calculate the percentage you
        need to achieve in your upcoming exam to reach your target grade for the
        entire module. Simply enter your past percentage, the weightage of the
        past assessment, and your desired target percentage. The calculator will
        determine the percentage you should aim for in the upcoming exam to
        reach your goal.
      </p>

      <div className="mb-4">
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

      <div className="mb-4">
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

      <div className="mb-4">
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

      <div className="grid grid-cols-4 my-8">
        <div className="col-span-3">
          <p className="text-2xl font-bold">Required Percentage:</p>
          <p className="text-6xl font-bold">{requiredPercentage}%</p>
        </div>

        <Button className="mt-auto" onClick={calculateRequiredPercentage}>
          Calculate
        </Button>
      </div>
    </div>
  );
}
