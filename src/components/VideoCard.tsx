import { useRouter } from "next/router";
import { Video } from "../videos";

//Youtuve Video Card Component  
function VideoCard({ video }: { video: Video }) {
    const router = useRouter();
    return <div className="cursor-pointer" onClick={() => {
        router.push("/video/" + video.id) //redirect to video page on click
    }}>
        <div className="pl-3">
            <img src={video.thumbnailImage} alt="Thumbnail" className="rounded-2xl" />
            <div className="grid grid-cols-12">
                <div className="col-span-2 pt-2 pl-2 lg:pl-1 md:pl-4">
                    <img src={video.profileImage} alt="Profile" className="rounded-full w-12 h-12 lg:h-11 lg:w-11" />
                </div>
                <div className="col-span-10 pt-2 pl-3 sm:pl-1 md:pl-1 lg:pl-3">
                    <div className="font-bold">
                        <p className="line-clamp-1">{video.title}</p>
                    </div>
                    <div className="text-gray-400 text-sm">
                        {video.channelName}
                    </div>
                    <div className="text-gray-400 text-sm">
                        {video.views} • {video.timestamp}
                    </div>
                </div>

            </div>
        </div>
    </div>

}

export default VideoCard;