'use client';

import Feed from "@/app/components/Feed";
import Header from "@/app/components/Header";

interface PublicViewParams {
  server: string;
  username: string;
}

const PublicView = ({ params }: { params: PublicViewParams }) => {
    const server = params.server;

    return (
      <>
        <Header title="Federated Timeline" />
        <Feed server={server} type='public' />
        {/* <PostFeed server={server} type="public" /> */}
      </>
     );
  }
   
  export default PublicView;