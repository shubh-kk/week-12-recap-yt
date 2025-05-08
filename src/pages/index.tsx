import { AppBar } from "@/components/AppBar";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <div>
      <AppBar />
     <VideoGrid />
    </div>
  );
}

// "dev": "next dev --hostname 0.0.0.0 --port 3000"