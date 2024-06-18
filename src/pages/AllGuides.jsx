import GuideCard from "../components/GuideCard";
import useGuide from "../hooks/useGuide";


const AllGuides = () => {

    const [guides] = useGuide();

    return (
        <div className="max-w-[1200px] mx-auto mt-4 min-h-[80vh]">
            <div className="mb-4 text-center">
                <h2>Here you can found all of our {guides.length} guides.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {
                    guides.map(guide => <GuideCard
                        key={guide._id}
                        guide={guide}
                    ></GuideCard>)
                }
            </div>
        </div>
    );
};

export default AllGuides;