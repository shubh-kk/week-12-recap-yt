//Youtuve Video Card Component  
function VideoCard(props: { title: string; channelName: string; views: string; timestamp: string, profileImage: string, thumbnailImage: string }) {
    return <div className="pl-3">
        <img src={props.thumbnailImage} alt="Thumbnail" className="rounded-2xl" />
        <div className="grid grid-cols-12">
            <div className="col-span-2 pt-4 pl-2 lg:pl-1 md:pl-4">
                <img src={props.profileImage} alt="Profile" className="rounded-full w-12 h-12 lg:h-11 lg:w-11" />
            </div>
            <div className="col-span-10 pt-4 pl-3 sm:pl-1 md:pl-1 lg:pl-3">
                <div className="font-bold">
                   {props.title}
                </div>
                <div className="text-gray-400 text-sm">
                    {props.channelName}
                </div>
                <div className="text-gray-400 text-sm">
                    {props.views} • {props.timestamp}
                </div>
            </div>
           
        </div>
    </div>
}

export default VideoCard;