import NoUserSelected from "../../components/NoUserSelected";
import Conversation from "../../components/messages/Conversation";
import Sidebar from "../../components/sidebar/Sidebar";
import ContentBlock from "../../layout/ContentBlock";

const Home = () => {
    return (
        <ContentBlock width="w-[900px]" bgColor="bg-teal-100" pad="p-0">
            <div className="flex w-full">
                <Sidebar />
                {/* <NoUserSelected/> */}
                <Conversation />
            </div>
        </ContentBlock>
    );
}

export default Home;