import { useState } from "react";
import { bands } from "@/data/gradebands";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CalculateExpectedGrade = () => {
  const [pastGrade, setPastGrade] = useState("");
  const [pastWeightage, setPastWeightage] = useState("");
  const [expectedExamGrade, setExpectedExamGrade] = useState("");
  const [finalGrade, setFinalGrade] = useState("");
  const [gradeBand, setGradeBand] = useState("");

  const calculatedFinalGrade = () => {
    const pastGradeValue = parseFloat(pastGrade);
    const pastWeightageValue = parseFloat(pastWeightage);
    const expectedExamGradeValue = parseFloat(expectedExamGrade);

    if (
      isNaN(pastGradeValue) ||
      isNaN(pastWeightageValue) ||
      isNaN(expectedExamGradeValue)
    ) {
      setFinalGrade("0");
      return;
    }

    const finalGradeValue =
      (pastGradeValue * pastWeightageValue +
        expectedExamGradeValue * (100 - pastWeightageValue)) /
      100;

    setFinalGrade(finalGradeValue.toFixed(2));
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
            setPastGrade(e.target.value);
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
        <Label htmlFor="expectedExamGrade">Expected Exam Percentage</Label>
        <Input
          id="expectedExamGrade"
          type="number"
          value={expectedExamGrade}
          onChange={(e) => {
            setExpectedExamGrade(e.target.value);
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
