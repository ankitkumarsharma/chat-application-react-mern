import useContact from "../../hooks/useContact";
import Loader from "../../layout/Loader";
import Contact from "./Contact";

const ContactList = () => {
    const { loading, contactList } = useContact();
    return (
        <div className="overflow-x-auto h-[450px]">
            <div className="border-b border-gray-100 w-full h-1"></div>
            {
                loading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <Loader />
                    </div>
                ) : contactList.map((contact) => (
                    <Contact contact={contact} key={contact._id} />
                ))
            }
        </div>
    );
}

export default ContactList;