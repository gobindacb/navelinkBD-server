import { Link, useLoaderData } from "react-router-dom";
import useGuide from "../../hooks/useGuide";


const PackageDetails = () => {
    const packages = useLoaderData();
    const [guides] = useGuide();
    const { _id, title, image, cost, duration, day, description, type } = packages;
    console.log(packages);
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="grid col-span-8 bg-red-100">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:space-x-reverse">
                        <div className="grid col-span-6 bg-green-100">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image} />
                        </div>
                        <div className="grid grid-cols-1 md:col-span-3 bg-purple-200">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square pb-2" src="https://i.ibb.co/pfXsBpS/bed-room.jpg" />
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/mS5b0Hk/breakfast.jpg" />
                        </div>
                        <div className="grid col-span-3 bg-lime-200">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square pb-2" src="https://i.ibb.co/VqDG3yz/car.jpg" />
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/5sVLTMg/spa.jpg" />
                        </div>
                    </div>
                </div>
                <div className="col-span-4 px-2">
                    <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
                    <h4 className="text-center">{description}</h4>
                    <div className="flex justify-between mt-2">
                        <h3>Tour duration: {duration} days</h3>
                        <h3>Cost:$ {cost}</h3>
                    </div>
                    <div className="flex justify-between mt-1 items-center">
                            <ul className="menu bg-base-200 w-56 rounded-box">
                                <li>
                                    <details className="bg-red-200">
                                        <summary>See all guides</summary>
                                        <ul className="absolute bg-slate-300">
                                            {
                                                guides.map((guide, index) =>
                                                    <li
                                                    key={guide._id}
                                                    ><Link to='/'>{index+1}. {guide.name}</Link></li>
                                                )
                                            }
                                            
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        <h3>Type: {type}</h3>
                    </div>
                    <div className="mt-20 ">
                        <button className="btn bg-primary-color text-white text-lg w-full">Book now</button>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <p>Details Tour Plan</p>
                <p>{day.day1}</p>
                <p className="mt-2">{day.day2}</p>
                <p className="mt-2">{day.day3}</p>
            </div>
        </div>
    );
};

export default PackageDetails;