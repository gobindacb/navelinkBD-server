import ReactPlayer from "react-player/youtube";


const Overview = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-8 px-6 mt-10">
            <div className="grid col-span-2 py-6">
                <h2 className="mb-5 font-bold">Overview</h2>
                <p>Navigate BD is your premier guide to uncovering the beauty and diversity of Bangladesh. From its rich cultural heritage to breathtaking landscapes, we provide essential travel tips, detailed itineraries, and insider information to make your exploration seamless and memorable. Discover the best of Bangladesh with Navigate BD.</p>
            </div>
            <div className="grid col-span-3 glass px-4 pt-1 relative pb-[56.25%] h-0">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=Md09zeGR6-I"
                    controls={true}
                    width='100%'
                    height='100%'
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>
        </div>
    );
};

export default Overview;