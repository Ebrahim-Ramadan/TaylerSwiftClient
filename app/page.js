import { HorizontalSpacer } from "@/components/globals/Icons";
import { Landing } from "@/components/globals/Landing";
import MeetTheTeam from "@/components/globals/MeetTheTeam";
import { SwiftGallery } from "@/components/globals/SwiftGallery";
import { SongSuggestion } from "@/components/globals/SongSuggestion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 md:px-24 md:py-12">
            <SongSuggestion/>

      <Landing/>
      <SwiftGallery />
      <HorizontalSpacer small={false} />
      <MeetTheTeam/>
    </main>
  );
}
