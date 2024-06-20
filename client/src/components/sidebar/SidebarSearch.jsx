import { useState } from "react";
import Input from "../../layout/Input";
import { toast } from "react-toastify";
import useContact from "../../hooks/useContact";
import useContactStore from "../../store/useContactStore";

const SidebarSearch = () => {
    const [search, setSearch] = useState("");
    const {contactListApi} = useContact();
    const { contactList, setContactList } = useContactStore();
    const [cancelSearch, setCancelSearch] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 2) {
            return toast.error("Search must be atleast 2 characters!");
        }
        const filteredContactList = contactList.filter((contact) => {
            return contact.fullName.toLowerCase().includes(search.toLowerCase());
        });
        if (filteredContactList) {
            setContactList(filteredContactList);
            setCancelSearch(true);
        }
    }

    const handleCancelSearch = (e) => {
        e.preventDefault();
        setSearch("");
        setContactList(contactListApi);
        setCancelSearch(false);
    }

    return (
        <div className="flex pr-3">
            <form className="flex">
                <div class="relative w-full">
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} mb="mb-2" />
                    {
                        cancelSearch && (
                            <button onClick={handleCancelSearch} type="button" class="absolute inset-y-0 end-0 flex items-center pe-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )
                    }

                </div>
                <button onClick={handleSearch} className=" ml-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default SidebarSearch;