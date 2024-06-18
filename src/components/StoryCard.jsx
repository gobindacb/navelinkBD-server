import { Link } from "react-router-dom";


const StoryCard = ({story}) => {

    

    return (
        <div>
            <div className="relative group">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300">
                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={story.image} alt="" className="rounded-lg md:max-w-[320px] md:max-h-[340px]" />
                </div>
            </div>
            <div>
                <h3>{story.title}</h3>
                <Link to={`/storyDetails/${story._id}`} className="btn bg-primary-color text-white font-semibold">Read full story</Link>
            </div>
            <div></div>
        </div>
    );
};

export default StoryCard;