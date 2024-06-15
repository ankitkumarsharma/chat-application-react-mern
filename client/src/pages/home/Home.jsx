import NoUserSelected from "../../components/NoUserSelected";
import ChatRoomContainer from "../../components/messages/ChatRoomContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useWindowSizeQuery from "../../hooks/useWindowSizeQuery";
import ContentBlock from "../../layout/ContentBlock";
import useContactStore from "../../store/useContactStore";
import useMobileScreenStore from "../../store/useMobileScreenStore";

const Home = () => {
    const { selectedContact } = useContactStore();

    const isMobileResolution = useWindowSizeQuery('(max-width:600px)', true);
    const { showOnMobile } = useMobileScreenStore();
    return (
        <ContentBlock width="w-[900px]" bgColor="bg-teal-100" pad="p-0">
            <div className="flex w-full">
                {isMobileResolution ?
                    (
                        <div className="w-full">
                            {showOnMobile ? <ChatRoomContainer /> : <Sidebar />}
                        </div>
                    ) :
                    (
                        <>
                            <div className="w-1/3">
                                <Sidebar />
                            </div>
                            <div className="w-2/3">
                                {selectedContact ? <ChatRoomContainer /> : <NoUserSelected />}
                            </div>
                        </>
                    )
                }

            </div>
        </ContentBlock>
    );
}

export default Home;