import type1 from '../assets/relax-icon.svg'
import type2 from '../assets/vacation.svg'
import type3 from '../assets/honeymoon.png'
import type4 from '../assets/sports.png'
import type5 from '../assets/hiking.svg'


const packages = [
    {
        icon: type1,
        type: "Relax tour",
    },
    {
        icon: type2,
        type: "Vacation",
    },
    {
        icon: type3,
        type: "Honeymoon",
    },
    {
        icon: type4,
        type: "Sports & Fun",
    },
    {
        icon: type5,
        type: "Hiking",
    },
    
]


const TourType = () => {
    return (
        <div className='mx-w-[1200px] mx-auto mt-12 flex flex-col items-center'>
            <div className='space-y-8 mb-2'>
                <h2 className='text-center'>Tour Type</h2>
                <p className='text-center'>Explore cultural, adventure, nature, and heritage tours, tailored to showcase Bangladesh's diverse attractions.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-14 glass py-4 w-1/3 md:w-3/4'>
                {
                    packages.map((pack, index) =>
                    <div key={pack.index}
                    className='flex gap-5'
                    >
                        <div className='flex flex-col items-center'>
                            <img src={pack.icon} className='w-20 h-20' alt="type-icon" />
                            <p>{pack.type}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TourType;