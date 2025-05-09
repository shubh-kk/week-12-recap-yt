import { YTSearchBar } from "./YTSearchBar";

//Youtube clone Appbar 
export function AppBar(){
    return <div className="flex justify-between items-center bg-transparent shadow-md mb-1">
        <div className="flex items-center">
            <div className=" fill: currentcolor; pt-3 pl-4">
                <img src="/ytlogo.svg" alt="Youtube Logo" />
            </div>
            
        </div>
        <div className="max-sm:hidden block">
            <YTSearchBar />
        </div>
        <div>
            {/* Signin */}
            <button className="bg-gray-700 text-white rounded-full md:rounded-3xl p-2 mt-2 md:ml-2 md:mr-4 md:py-2 md:px-4 hover:bg-gray-600 cursor-pointer">
                Sign In
            </button>

        </div>
    </div>
}