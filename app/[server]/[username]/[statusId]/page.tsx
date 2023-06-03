'use client';

import BigPost from "@/app/components/BigPost";
import Header from "@/app/components/Header";
import Post from "@/app/components/Post";
import usePost from "@/app/hooks/usePost";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

// import Form from "@/app/components/Form";
// import Header from "@/app/components/Header";
// import BigPostItem from "@/app/components/posts/BigPostItem";
// import CommentFeed from "@/app/components/posts/CommentFeed";
// import usePost from "@/app/hooks/usePost";
// import { ClipLoader } from "react-spinners";

interface StatusViewParams {
  server: string;
  username: string;
  statusId: string;
}

const StatusView = ({ params }: { params: StatusViewParams }) => {
    // const router = useRouter();
    const server = params.server;
    const username = params.username.slice(3);
    const statusId = params.statusId;
    // console.log('StatusView:', server, username, statusId);
  
    const { data: fetchedPost, statusContext, isLoading } = usePost(server, statusId);
    
    if (isLoading || !fetchedPost) {
      return (
        <div className="flex justify-center items-center h-full">
          <ClipLoader color="lightblue" size={80} />
        </div>
      )
    }
  
    return (
      <>
        <Header showBackArrow title="Back" />

        <ul className="[&_p:last-child]:text-slate-500 [&_p:first-child]:text-lg divide-y divide-slate-200">
          <li className="p-4">
            <BigPost server={server} statusId={statusId} data={fetchedPost} />
          </li>
			  </ul>

        {/* <Form postId={statusId as string} isComment placeholder="Tweet your reply" /> */}
        {/* <CommentFeed comments={statusContext} server={server} /> */}
      </>
     );
  }
   
  export default StatusView;