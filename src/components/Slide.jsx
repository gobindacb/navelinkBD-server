import { Link } from "react-router-dom";


const Slide = ({image, text}) => {
    return (
        <div
      className='w-full bg-center bg-cover h-[30rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-red-500 to-green-500 lg:text-9xl drop-shadow-2xl animate-fadeIn">
            {text}
          </h1>
          <br />
          <h1 className="text-5xl text-white font-bold">Navigate<span className="text-6xl text-red-600">B</span><span className="text-6xl text-green-600">D</span></h1>
          <br />
          <p className="mt-0 text-yellow-400">The Ultimate Guide to Bangladesh</p>
          <br />
          <Link to='/need-volunteer' className='w-full px-5 py-4 mt-4 text-xl font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
           Explore Bangladesh
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Slide;