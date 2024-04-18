// app/page.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculateExpectedGrade } from "@/components/calculate-expected-grade";
import { CalculateRequiredPercent } from "@/components/calculate-required-percent";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-balance text-3xl font-bold sm:text-4xl">
        UCLan Result Piece of Software
      </h1>

      <p className="mb-8 text-balance">
        UCLan Result Piece of Software helps you calculate the percentage you
        need to achieve in your upcoming exam to reach your target grade for the
        entire module. Simply enter your past percentage, the weightage of the
        past assessment, and your desired target percentage. The calculator will
        determine the percentage you should aim for in the upcoming exam to
        reach your goal.
      </p>
      <Tabs defaultValue="required">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="required">Required</TabsTrigger>
          <TabsTrigger value="expected">Expected</TabsTrigger>
        </TabsList>
        <TabsContent className="space-y-4" value="required">
          <CalculateRequiredPercent />
        </TabsContent>
        <TabsContent className="space-y-4" value="expected">
          <CalculateExpectedGrade />
        </TabsContent>
      </Tabs>
    </div>
  );
}
