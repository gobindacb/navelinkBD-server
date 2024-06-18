import { Link } from "react-router-dom";
import useGuide from "../hooks/useGuide";
import GuideCard from "./GuideCard";



const MeetGuides = () => {

    const [guides] = useGuide();


    return (
        <div className="my-10">
            <div>
                <h2 className="text-center">Meet our top rated guides</h2>
                <p className="text-center">Meet our expert guides at Navigate BD, who bring local knowledge and passion <br /> to every tour. With their insights and personalized attention, you'll experience Bangladesh's culture,<br /> history, and natural beauty in a truly unique and memorable way.</p>
            </div>
            <div className="flex justify-center flex-wrap gap-6 mt-8">
                {
                    guides.map(guide=> <GuideCard
                    key={guide._id}
                    guide={guide}
                    ></GuideCard>)
                }
            </div>
            <div className="mt-16 flex justify-center">
                <Link to='/allGuides' className="btn btn-md bg-primary-color text-white font-bold">Meet all Guides</Link>
            </div>
        </div>
    );
};

export default MeetGuides;