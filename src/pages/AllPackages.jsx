import PackageCard from "../components/Packages/PackageCard";
import usePackages from "../hooks/usePackages";


const AllPackages = () => {
       
    const [ packages ] = usePackages()

    return (
        <div className="max-w-[1200px] mx-auto mt-4 min-h-[80vh]">
            <div className="mb-4 text-center">
                <h2>Here you can found all of our {packages.length} Packages.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    packages.map(pack => <PackageCard
                        key={pack._id}
                        pack={pack}
                    ></PackageCard>)
                }
            </div>
        </div>
    );
};

export default AllPackages;