import StoryCard from "../components/StoryCard";
import useStories from "../hooks/useStories";


const AllStories = () => {

    const [ stories ] = useStories();

    return (
        <div className="max-w-[1200px] mx-auto mt-4 min-h-[80vh]">
            <div className="mb-4 text-center">
                <h2>Here you can found all of our {stories.length} Stories.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                   stories.map(story => <StoryCard
                        key={story._id}
                        story={story}
                    ></StoryCard>)
                }
            </div>
        </div>
    );
};

export default AllStories;