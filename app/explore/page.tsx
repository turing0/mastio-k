import Header from "../components/Header";
import ExploreTabs from "../components/radix/ExploreTabs";

export default function Home() {
    const server = "mstdn.social";

    return (
        <>
            <title>Home | Mastio</title>
            
            <Header title="Explore" />
            <ExploreTabs server={server} />
        </>
    )
}
