import { useSocketContext } from "../../context/SocketContext";
import useMessages from "../../hooks/useMessages";
import Avatar from "../../layout/Avatar";
import useContactStore from "../../store/useContactStore";

const Contact = ({ contact }) => {
    const {selectedContact, setSelectedContact} = useContactStore();
    const isSelected = selectedContact?._id === contact._id;
    const {getMessages} = useMessages();
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(contact._id);
    console.log("contact >>>> online", onlineUsers)
    const handleClick = () =>{
        setSelectedContact(contact);
        getMessages();
    }
    
    return (
        <>
            <div className={`${isSelected ? "bg-red-300":""}`} onClick={handleClick} key={contact._id}>
                {isOnline ? "Online" : "Offline"}
                <div className={"p-2 flex items-center pl-2 cursor-pointer pb-1"}>
                    <Avatar url={contact.profilePic} />
                    {contact.fullName}
                </div>
            </div>
            <div className="border-b border-gray-100 w-full h-1"></div>
        </>

    )
}

export default Contact;