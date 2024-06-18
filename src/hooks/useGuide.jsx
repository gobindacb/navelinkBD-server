import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";




const useGuide = () => {
    const axiosPublic = useAxiosPublic();


    const { data: guides = [], isPending: loading, refetch } = useQuery({
        queryKey: ['user/guides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/user/guides');
            return res.data;
        }
    })
    return [guides, loading, refetch]
};

export default useGuide;