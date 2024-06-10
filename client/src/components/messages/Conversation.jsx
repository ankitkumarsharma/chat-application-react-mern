import Button from "../../layout/Button";
import Input from "../../layout/Input";
import ChatRoom from "./ChatRoom";

const Conversation = () => {
    return (
        <div className="bg-red-300 w-2/3 flex flex-col rounded-r p-3 h-[600px]">
            {/* <div className="flex-grow">
                <div className="flex items-center justify-center h-full">
                    <div className="w-full text-center text-gray-500">Select a person to chat</div>
                </div>
            </div> */}
            <ChatRoom/>
            <div className="p-2">
                <form className="flex items-center h-9 w-full" >
                    <div className="w-[80%]">
                        <Input mb="mb-0" name="message" />
                    </div>
                    <div className="w-[20%]">
                        <Button name="Send" />
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Conversation;