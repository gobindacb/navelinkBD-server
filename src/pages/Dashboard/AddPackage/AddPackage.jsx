import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UseAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddPackage = () => {
    const { user } = UseAuth();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to image bb and get an URL
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image
            const packageItem = {
                title: data.title,
                type: data.type,
                cost: parseFloat(data.cost),
                duration: parseFloat(data.duration),
                description: data.description,
                image: res.data.data.display_url,
                day: {
                    day1: data.day1,
                    day2: data.day2,
                    day3: data.day3
                },
                posted_by: {
                    name: user?.displayName,
                    email: user?.email,
                    photo: user?.photoURL
                }
            }
            // 
            const packageRes = await axiosSecure.post('/packages', packageItem);
            console.log(packageRes.data);
            if (packageRes.data.insertedId) {
                reset();
                // show toast or
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added as new packages`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image-url', res.data);
    }


    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-red-500 to-green-500 lg:text-7xl drop-shadow-2xl animate-fadeIn text-center">
                    Add a package
                </h1>
            </div>
            <div className="w-3/4 bg-red-100 p-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Package Title</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Package Title"
                            {...register("title", { required: true })}
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex flex-col lg:flex-row gap-2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Package Title</span>
                            </div>
                            <select defaultValue="default" {...register('type')}
                                className="select select-bordered w-full max-w-xs"
                            >
                                <option disabled value="default">Select a type</option>
                                <option value="Relax tour">Relax tour</option>
                                <option value="Vacation">Vacation</option>
                                <option value="Honeymoon">Honeymoon</option>
                                <option value="Sports & Fun">Sports & Fun</option>
                                <option value="Hiking">Hiking</option>

                            </select>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Package cost</span>
                            </div>
                            <input
                                type="number"
                                placeholder="cost"
                                {...register("cost")}
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Package duration</span>
                            </div>
                            <input
                                type="number"
                                placeholder="duration in days"
                                {...register("duration")}
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    {/* tour plan */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Package Plan for day 1</span>
                            </div>
                            <textarea {...register('day1')} className="textarea textarea-bordered h-24 w-52" placeholder="Write a description of your package day 1"></textarea>
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Package Plan for day 2</span>
                            </div>
                            <textarea {...register('day2')} className="textarea textarea-bordered h-24 w-52" placeholder="Write a description of your package day 2"></textarea>
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Package Plan for day 3</span>
                            </div>
                            <textarea {...register('day3')} className="textarea textarea-bordered h-24 w-52" placeholder="Write a description of your package day 3"></textarea>
                        </label>
                    </div>
                    {/* package details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Package details</span>
                        </div>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Write a description of your package"></textarea>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Pick a image</span>
                        </div>
                        <input {...register('image')} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </label>
                    <button className="btn mt-3 w-full">Add Package <FaPlus /></button>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;