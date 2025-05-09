import { Video } from "@/videos";
import { useRouter } from "next/router";
import { Line } from "./Line";

export const VideoCardHorizontal = ({ video }: { video: Video }) => {
    const router = useRouter();
    return (
        <div className="cursor-pointer grid grid-cols-12" onClick={() => {
            router.push("/video/" + video.id) //redirect to video page on click;
        }}>
            <div className="rounded overflow-hidden col-span-5 md:col-span-4 lg:col-span-3">
                
                    <img src={video.profileImage} />
                    <Line progress={10} />
                    
                
            </div>
            <div className="col-span-7 pl-2">
                <div className={"text-white-800 text-sm font-medium pb-2"}>
                    {video.title}
                </div>
                <div className={"text-gray-400 text-xs font-normal pb-1"}>
                    {video.channelName}
                </div>
                <div className="flex">
                    <div className={"text-gray-400 text-xs font-normal	pr-2"}>
                        {video.views}
                    </div>
                    <div className={"text-gray-400 text-xs font-normal"}>
                        • {video.timestamp}
                    </div>
                </div>
            </div>
        </div>
    );
}