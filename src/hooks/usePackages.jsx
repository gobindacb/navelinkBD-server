import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePackages = () => {
    const axiosPublic = useAxiosPublic();


    const {data: packages = [], isPending: loading, refetch } = useQuery({
        queryKey: ['packages'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/packages');
            return res.data;
        }
    })
    return [packages, loading, refetch]
};

export default usePackages;







// import { useEffect, useState } from "react";


// const usePackages = () => {
//     const [packages, setPackages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_URL}/packages`)
//         .then(res => res.json())
//         .then(data => {
//             setPackages(data);
//             setLoading(false);
//         });
//     }, []);
//     return [packages, loading]
// };

// export default usePackages;