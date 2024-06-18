import { Link } from "react-router-dom";
import useStories from "../hooks/useStories";
import StoryCard from "./StoryCard";



const TouristStory = () => {

    const [stories] = useStories();

    return (
        <div className="max-w-[1200pc] mx-auto px-6 mt-16">
            <div>
                <h2 className="text-center mt-5">Tourist Story</h2>
                <p className="text-center mt-2 mb-5">Share your adventures and experiences in the Tourist Story section, where travelers can inspire others <br /> with their unique Bangladeshi journeys.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {
                    stories.map(story => <StoryCard
                        key={story._id}
                        story={story}
                    ></StoryCard>)
                }
            </div>
            <div className="flex justify-center items-center mt-8"><Link to='/allStories' className="btn bg-primary-color text-white font-semibold">See all story</Link></div>
        </div>
    );
};

export default TouristStory;