import { useLoaderData } from "react-router-dom";


const GuidesDetails = () => {

    const guide = useLoaderData()

    return (
        <div className="container w-[1200px] px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-7">
                    <h2 className="text-center">Guide Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        <div className="col-span-7">
                            <img className="w-1/3 h-96 md:w-full" src={guide.photo} alt="" />
                        </div>
                        <div className="col-span-5">
                            <p>Name: {guide.name}</p>
                            <p>Email: {guide.email}</p>
                            <p>Phone: </p>
                            <p>Education:</p>
                            <p>Experience:</p>
                            <p>Language:</p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="col-span-4">

                </div>
            </div>
        </div>
    );
};

export default GuidesDetails;