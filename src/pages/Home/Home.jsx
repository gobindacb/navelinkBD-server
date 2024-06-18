import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel";
import TnTGuideSection from "../../components/TnTGuideSection";
import { useLoaderData } from "react-router-dom";
import TourType from "../../components/TourType";
import TouristStory from "../../components/TouristStory";


const Home = () => {

    const packages = useLoaderData();

    return (
        <div>
             <Helmet>
                <title>
                    Navigate-BD | Home
                </title>
            </Helmet>
            <Carousel></Carousel>
            <TnTGuideSection packages={packages}/>
            <TourType/>
            <TouristStory/>
        </div>
    );
};

export default Home;