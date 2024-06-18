import { Link } from "react-router-dom";


const GuideCard = ({ guide }) => {

    const { name, photo, _id } = guide

    return (

        <div className="flex flex-col justify-center max-w-xs p-2 shadow-md rounded-xl sm:px-2 bg-gray-50 text-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <img src={photo} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square transition duration-300 hover:scale-110" />
            <div className="space-y-4 text-center">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl transition duration-300 hover:text-primary-color">{name}</h2>
                    <p className="px-5 text-xs sm:text-base dark:text-gray-600">Tourist Guide</p>
                </div>
                <div className="divider">
                    <Link to={`/guideDetails/${_id}`} className="btn bg-primary-color btn-xs text-white font-bold transition duration-300 hover:bg-secondary-color">See Details</Link>
                </div>
            </div>
        </div>

    );
};

export default GuideCard;