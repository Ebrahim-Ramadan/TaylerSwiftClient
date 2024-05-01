import { Landing } from "@/components/globals/Landing";
import { SwiftGallery } from "@/components/globals/SwiftGallery";
import SliderTemplate from "@/components/SliderTemplate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-16 items-center justify-between p-4 md:p-24">
      <Landing/>
      {/* <SliderTemplate /> */}
      <SwiftGallery/>
    </main>
  );
}
