import Conversation from "../../components/Conversation";
import Sidebar from "../../components/Sidebar";
import ContentBlock from "../../layout/ContentBlock";

const Home = () => {
    return (
        <ContentBlock width="w-[900px]" bgColor="bg-teal-100" pad="p-0">
            <div className="flex w-full">
                <Sidebar />
                <Conversation />
            </div>
        </ContentBlock>
    );
}

export default Home;