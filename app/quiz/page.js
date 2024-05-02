import CountdownTimer from "@/components/CountdownTimer";
import { TinyLoading } from "@/components/globals/Icons";
import RealQuiz from "@/components/RealQuiz";
import { FetchQuizQuestions } from "@/utils/services";
import { Suspense } from "react";

export default async function Page() {
  const QuizQuestions = await FetchQuizQuestions();
  console.log('Page QuizQuestions', QuizQuestions);
  if (!QuizQuestions) {
      return (
          'ass'
      );
  }
  return (
    <main className="flex min-h-screen flex-col space-y-16 items-center justify-between p-4 md:p-24">
      <Suspense fallback={<TinyLoading />}>
        <CountdownTimer>
        <RealQuiz QuizQuestions={QuizQuestions} />

        </CountdownTimer>
      </Suspense>
    </main>
  );
}
