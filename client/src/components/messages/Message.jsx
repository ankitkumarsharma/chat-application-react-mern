import Avatar from "../../layout/Avatar";
import { useAuthContext } from "../../context/AuthContext";
import useContactStore from "../../store/useContactStore";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedContact } = useContactStore();
    const fromMe = message.senderId === authUser.id;
    const fullName = fromMe ? authUser.fullName : selectedContact.fullName;
    const profilePic = fromMe ? authUser.profilePic : selectedContact.profilePic;

    return (
        <>
            <div className={`flex items-start ${fromMe ? "justify-end" : ""} gap-2.5`}>
                {!fromMe ? <Avatar url={profilePic} /> : null}
                <div className={`flex flex-col gap-1 ${fromMe ? "text-right" : ""} w-full max-w-[320px]`}>
                    <div className={`flex items-center ${fromMe ? "justify-end" : ""} space-x-2 rtl:space-x-reverse`}>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {fullName}
                        </span>
                    </div>
                    <div className={`flex flex-col leading-1.5 p-4 border-gray-200 ${fromMe ? "bg-teal-100 rounded-l-xl rounded-b-xl" : "bg-gray-200 rounded-e-xl rounded-es-xl"}  dark:bg-gray-700`}>
                        <p className="text-sm font-normal text-gray-900 dark:text-white">
                            {message.message}
                        </p>
                    </div>
                    <span className="text-xs font-normal text-gray-500 dark:text-gray-400">11:46, Delivered</span>
                </div>
                {fromMe ? <Avatar url={profilePic} /> : null}
            </div>
        </>

    );
}

export default Message;