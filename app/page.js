import { HorizontalSpacer } from "@/components/globals/Icons";
import { Landing } from "@/components/globals/Landing";
import MeetTheTeam from "@/components/globals/MeetTheTeam";
import { SwiftGallery } from "@/components/globals/SwiftGallery";

export default function Home() {
  return (
    <main className="flex flex-col space-y-16 items-center justify-between p-4 md:px-24 md:py-12">
      
      <Landing/>
      <SwiftGallery />
      <HorizontalSpacer small={false} />
      <MeetTheTeam/>
    </main>
  );
}
