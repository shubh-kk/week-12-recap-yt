export function YTSearchBar() {
    return (
        <div className="flex items-center justify-center mt-2">
            <input type="text" placeholder="Search" className="border border-gray-600 rounded-l-full py-2 px-4 md:w-96 focus:outline-none focus:ring-gray-600" />
            <button className="border border-gray-600 bg-gray-800 text-white rounded-r-full py-2 px-4 hover:bg-gray-600 cursor-pointer">
                Search
            </button>
        </div>
    );
}