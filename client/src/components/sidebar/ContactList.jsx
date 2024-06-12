import useContact from "../../hooks/useContact";
import Contact from "./Contact";

const ContactList = () => {
    const {loading, contactList} = useContact();
    return (
        <div className="overflow-x-auto h-[450px]">
            <div className="border-b border-gray-100 w-full h-1"></div>
            {
                contactList.map((contact) =>(
                    <Contact contact={contact} key={contact._id} />
                ))
            }
        </div>
    );
}

export default ContactList;