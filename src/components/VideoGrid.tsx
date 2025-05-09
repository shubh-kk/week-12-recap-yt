import VideoCard from "./VideoCard"
import { VIDEOS } from "../videos"

export function VideoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map((video)=> (
                <div>
                    <VideoCard video={video}  />
                </div>
            ))}
        </div>
    )
}