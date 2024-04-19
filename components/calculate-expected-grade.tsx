import { useState } from "react";
import { bands } from "@/data/gradebands";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CalculateExpectedGrade = () => {
  const [pastGrade, setPastGrade] = useState(0);
  const [pastWeightage, setPastWeightage] = useState(0);
  const [expectedExamGrade, setExpectedExamGrade] = useState(0);
  const [finalGrade, setFinalGrade] = useState(0);
  const [gradeBand, setGradeBand] = useState("");

  const calculatedFinalGrade = () => {
    if (isNaN(pastGrade) || isNaN(pastWeightage) || isNaN(expectedExamGrade)) {
      setFinalGrade(0);
      return;
    }

    const finalGradeValue =
      (pastGrade * pastWeightage + expectedExamGrade * (100 - pastWeightage)) /
      100;

    setFinalGrade(finalGradeValue);
    setGradeBand(
      bands.find((band) => band.numericalEquivalent <= finalGradeValue)?.name ??
        ""
    );
  };
  return (
    <>
      <div>
        <Label htmlFor="pastGrade">
          Percentage obtained in the previous assessment
        </Label>
        <Input
          id="pastGrade"
          type="number"
          value={pastGrade}
          onChange={(e) => {
            setPastGrade(e.target.valueAsNumber);
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
        <Label htmlFor="expectedExamGrade">Expected Exam Percentage</Label>
        <Input
          id="expectedExamGrade"
          type="number"
          value={expectedExamGrade}
          onChange={(e) => {
            setExpectedExamGrade(e.target.valueAsNumber);
          }}
        />
      </div>

      <div className="my-8 grid grid-cols-4">
        <div className="col-span-3 space-y-2">
          <p className="text-xl font-bold sm:text-2xl">
            Expected Final Grade (%):
          </p>
          <p className="text-lg font-medium sm:text-xl">{finalGrade}%</p>
          <p className="text-xl font-bold sm:text-2xl">Expected Grade Band:</p>
          <p className="text-lg font-bold sm:text-2xl">{gradeBand}</p>
        </div>

        <Button className="mt-auto" onClick={calculatedFinalGrade}>
          Calculate
        </Button>
      </div>
    </>
  );
};
