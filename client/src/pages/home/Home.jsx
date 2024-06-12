import NoUserSelected from "../../components/NoUserSelected";
import ChatRoomContainer from "../../components/messages/ChatRoomContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import ContentBlock from "../../layout/ContentBlock";
import useContactStore from "../../store/useContactStore";

const Home = () => {
    const {selectedContact} = useContactStore();
    return (
        <ContentBlock width="w-[900px]" bgColor="bg-teal-100" pad="p-0">
            <div className="flex w-full">
                <Sidebar />
                {selectedContact ? <ChatRoomContainer /> : <NoUserSelected/>}
            </div>
        </ContentBlock>
    );
}

export default Home;