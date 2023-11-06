import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import BlogDetailsCard from "../Component/BlogDetailsCard";

const BlogDetails = () => {
    const axiosSecure = useAxios();
    const {id} = useParams();
    const {data:blogDetails,isLoading} = useQuery({
        queryKey:["blogDetails"],
        queryFn: async () => {
            const response = await axiosSecure.get(`/blogs/${id}`);
            return response.data;
        },
    })
    
    return (
        <div style={{
            backgroundImage: "url(/bg-tips.jpg)",
          }}>
            <div className="max-w-screen-xl mx-auto">
          {
            isLoading ? (
                <div className="w-screen h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-grn  loading-lg"></span>
      </div>
            ) : (
                <div>
                    <BlogDetailsCard blogDetails={blogDetails}></BlogDetailsCard>
                </div>
            )
          }
            </div>
        </div>
    );
};

export default BlogDetails;