
const Main = () => {
    function openYouTubeVideo() {
        const youtubeVideoUrl = 'https://www.youtube.com/watch?v=ZoIK7f8RDMY';
        window.open(youtubeVideoUrl, '_blank');
    }
    return (
        <div className="flex-grow">
            <div className="min-h-[calc(100vh-95px)] px-10 lg:px-28 py-4  flex flex-col  items-center">
                <h3 className="text-3xl font-semibold">Welcome to Stream Club</h3>
                <h2 className="text-2xl py-2">Upcoming match</h2>

                <div className=" md:flex items-center block md:space-x-8 py-4">
                    <img src="/img/team1.png" alt="team1"
                        className="h-44 md:h-36 w-80 md:w-60" />
                    <p className="text-4xl font-bold text-indigo-600 italic py-3 text-center">VS</p>
                    <img src="/img/team2.png" alt="team2"
                        className="h-44 md:h-36 w-80 md:w-60" />
                </div>

                <div className=" flex flex-col items-center  py-2">
                    <h2 className="text-2xl py-2">Match Trailer</h2>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.youtube.com/embed/amMJfaB5dXo?si=DVjPcfVjwZjXGBll"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>

                    <button
                        className="shadow-md text-white bg-slate-700 hover:bg-slate-900 font-normal py-1 px-4 rounded mt-4"
                        onClick={openYouTubeVideo}
                    >
                        Watch Now
                    </button>
                </div>


            </div>

        </div>
    )
}

export default Main