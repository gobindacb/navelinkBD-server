import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import usePackages from "../../../hooks/usePackages";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManagePackages = () => {
    const [packages, loading, refetch] = usePackages();
    const axiosSecure = useAxiosSecure();

    const handleDeletePack = (pack) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/packages/${pack._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${pack?.title}'package have been deleted.'`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <div>
                <h2 className="text-3xl underline">Manage All {packages.length} Packages</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Cost</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            packages.map((pack, index) =>
                                <tr
                                    key={pack._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={pack?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {pack?.title}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{pack?.type}</span>
                                    </td>
                                    <td>{pack?.duration} days long</td>
                                    <td>${pack?.cost}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs"><FaEye className="text-xl text-violet-600" /></button>
                                    </th>
                                    <th>
                                        <Link to={`/dashboard/updatePackage/${pack._id}`} >
                                            <button className="btn btn-ghost btn-xs"><FaEdit className="text-xl text-yellow-600" /></button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeletePack(pack)} className="btn btn-ghost btn-xs"><FaTrash className="text-xl text-red-600" /></button>
                                    </th>
                                </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePackages;