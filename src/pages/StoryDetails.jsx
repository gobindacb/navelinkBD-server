import { useLoaderData } from "react-router-dom";


const StoryDetails = () => {
    const story = useLoaderData();
    return (
        <div className="container w-[1200px] px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-3">

                </div>
                <div className="col-span-6 bg-slate-100 p-2 rounded-lg">
                    <h2>{story.title}</h2>
                    <p>By: {story.writer.name}</p>
                    <div>
                        <img src={story.image} alt="" />
                    </div>
                    <p className="text-sm mt-6">{story.story}</p>
                </div>
                <div className="col-span-3">

                </div>
            </div>
        </div>
    );
};

export default StoryDetails;