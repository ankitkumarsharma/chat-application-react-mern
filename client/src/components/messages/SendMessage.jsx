import Button from "../../layout/Button";
import Input from "../../layout/Input";

const SendMessage = () => {
    return (
        <div className="p-2">
            <form className="flex items-center h-9 w-full" >
                <div className="w-[80%]">
                    <Input mb="mb-0" name="message" />
                </div>
                <div className="ml-2 w-[20%]">
                    <Button name="Send" />
                </div>
            </form>
        </div>
    );
};

export default SendMessage;