import CountdownTimer from "@/components/CountdownTimer";
import { BigLocalLoading } from "@/components/globals/Icons";
import RealQuiz from "@/components/RealQuiz";
import { Suspense } from "react";

export default async function Page() {

  const data = await getData()
  if (!data) {
      return (
          'ass'
      );
  }
  return (
    <main className="flex min-h-screen flex-col space-y-16 items-center justify-between p-4 md:p-24">
      <Suspense fallback={<BigLocalLoading />}>
        <CountdownTimer>
        <RealQuiz QuizQuestions={data} />
        </CountdownTimer>
      </Suspense>
    </main>
  );
}

async function getData() {
  const response = await fetch(process.env.NEXT_PUBLIC_QUESTIONS_ENDPOINT,  { next: { revalidate: 3600 } });
  const data = await response.json();

  return data
}

export const revalidate = 3600 // revalidate at most every hour