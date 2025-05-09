import { AppBar } from "@/components/AppBar";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/videos";

export default function VideoPage() {
    return (
        <div className="p-4">
            <AppBar />
            <div className="grid gap-4 grid-cols-12 pt-5">
                <div className="col-span-12 md:col-span-9 sm:col-span-8">
                    <video width={"100%"} height={"720px"} controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                    <div className="flex col-span-2 pt-3 pl-2 lg:pl-1 md:pl-4">
                        <img src={"/profile.jpg"} alt="Profile" className="rounded-full w-12 h-12 lg:h-11 lg:w-11" />
                        <div className="ml-2 pl-3 sm:pl-1 md:pl-1 lg:pl-3">
                            <div className="font-bold">
                                <p className="line-clamp-1">Big Buck Bunny</p>
                            </div>
                            <div className="text-gray-400 text-sm">
                                Bunny Hen
                            </div>
                            <div className="text-gray-400 text-sm">
                                2.1 Cr • 7 years ago
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-3 sm:col-span-4">
                    {VIDEOS.map(x => <VideoCardHorizontal video={x} />)}
                </div>
            </div>
        </div>
    );
}