import { useSocketContext } from "../../context/SocketContext";
import useMessages from "../../hooks/useMessages";
import useWindowSizeQuery from "../../hooks/useWindowSizeQuery";
import Avatar from "../../layout/Avatar";
import useContactStore from "../../store/useContactStore";
import useMobileScreenStore from "../../store/useMobileScreenStore";

const Contact = ({ contact }) => {
    const { selectedContact, setSelectedContact } = useContactStore();
    const isSelected = selectedContact?._id === contact._id;
    const { getMessages } = useMessages();
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(contact._id);
    const isMobileResolution = useWindowSizeQuery('(max-width:600px)', true);
    const { setShowOnMobile } = useMobileScreenStore();

    const handleClick = () => {
        setSelectedContact(contact);
        getMessages();
        if (isMobileResolution) {
            setShowOnMobile(true);
        }
    }

    return (
        <>
            <div className={`${isSelected ? "bg-red-300" : ""}`} onClick={handleClick} key={contact._id}>
                <div className={"p-2 flex items-center pl-2 cursor-pointer pb-1"}>
                    <div className="relative flex">
                        <Avatar url={contact.profilePic} />
                        {isOnline ? <div className="w-3 h-3 rounded-full absolute right-1 bg-green-600"></div> : ""}
                    </div>
                    {contact.fullName}
                </div>
            </div>
            <div className="border-b border-gray-100 w-full h-1"></div>
        </>

    )
}

export default Contact;