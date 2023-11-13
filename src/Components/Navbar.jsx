

const Navbar = () => {
    function openYouTubeVideo() {
        const youtubeVideoUrl = 'https://www.youtube.com/watch?v=ZoIK7f8RDMY';
        window.open(youtubeVideoUrl, '_blank');
    }
    return (
        <div className="w-full  bg-slate-200 text-sal px-10 lg:px-28 py-3  flex items-center justify-between">
            <div className="flex items-center space-x-2">
                {/* Left Logo */}
                <img src={('../../src/assets/img/logo.png')} alt="Logo" className="h-8 w-8" />
                {/* Site Name */}
                <span className="text-xl font-bold">StreamClub</span>
            </div>

            <div className="flex items-center space-x-4">
                {/* Right Logo */}
                {/* <img src="right-logo.png" alt="Right Logo" className="h-8 w-8" /> */}
                {/* Button */}
                <button
                    className="shadow-md text-white bg-slate-700 hover:bg-slate-900 font-medium py-1 px-4 rounded "
                    onClick={openYouTubeVideo}
                >
                    Watch Now
                </button>
            </div>
        </div>
    )
}

export default Navbar