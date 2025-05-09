import { AppBar } from "@/components/AppBar";
import { LeftBar } from "@/components/LeftBar";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <main>
      <div>
        <AppBar />
      </div>
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </main>
  );
}

// "dev": "next dev --hostname 0.0.0.0 --port 3000"