import useContact from "../../hooks/useContact";
import Loader from "../../layout/Loader";
import useContactStore from "../../store/useContactStore";
import Contact from "./Contact";

const ContactList = () => {
    const { loading } = useContact();
    const { contactList } = useContactStore();
    return (
        <div className="overflow-x-auto h-[450px]">
            <div className="border-b border-gray-100 w-full h-1"></div>
            {
                loading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <Loader />
                    </div>
                ) : contactList.length === 0 ? "No contact found" : contactList.map((contact) => (
                    <Contact contact={contact} key={contact._id} />
                ))
            }
        </div>
    );
}

export default ContactList;