import { useState } from "react";
import Input from "../../layout/Input";
import { toast } from "react-toastify";
import useContact from "../../hooks/useContact";
import useContactStore from "../../store/useContactStore";

const SidebarSearch = () => {
    const [search, setSearch] = useState("");
    const {contactList} = useContact();
    const {setSelectedContact} =  useContactStore()

    const handleSearch = (e)=>{
       e.preventDefault();
       if(!search) return;
       if(search.length < 3) {
            return toast.error("Search must be atleast 3 characters!!!");
       }

       const filteredContactList = contactList.filter((contact)=>{
           return contact.fullName.toLowerCase().includes(search.toLowerCase());
       });
       if(filteredContactList) {
        setSelectedContact(filteredContactList);
        setSearch("");
       } else {
        toast.error("No user found!!!")
       }
    }

    return (
        <div className="flex pr-3">
            <form className="flex">
                <Input onChange={(e)=> setSearch(e.target.value)} mb="mb-3" />
                <span onClick={handleSearch} className="mt-3 ml-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
            </form>
        </div>
    );
}

export default SidebarSearch;