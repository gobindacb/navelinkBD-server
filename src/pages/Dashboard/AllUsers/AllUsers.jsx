import { useQuery } from "@tanstack/react-query";
import { FaTrashCan, FaUsers } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaFlag } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // make admin in db
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `You make ${user.name} an admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // make admin in db
    const handleMakeGuide = user => {
        axiosSecure.patch(`/users/guide/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `You make ${user.name} tourist Guide`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // delete a user from db
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-center items-center gap-3">
                <span className="text-5xl"><FaUsers /></span>
                <h2 className="text-3xl underline">Manage All Users</h2>
                <span className="text-3xl">{users.length}</span>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Guide</th>
                                <th>Make Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.name}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                user.role === 'guide' ? 'Guide' : <button
                                                    onClick={() => handleMakeGuide(user)}
                                                    className="btn btn-ghost btn-lg"><FaFlag className="text-green-600" /></button>
                                            }
                                        </td>
                                        <td>
                                            {
                                                user.role === 'admin' ? 'Admin' : <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-ghost btn-lg"><FaUsers className="text-green-600" /></button>
                                            }
                                        </td>
                                        <th>
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="btn btn-ghost btn-lg"><FaTrashCan className="text-red-600" /></button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;