import ContactList from "./ContactList";
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";

const Sidebar = () => {
    return (
        <div className="bg-red-100 rounded-l p-3 pr-0 h-[600px]">
            <SidebarHeader />
            <SidebarSearch />
            <ContactList />
        </div>
    );
}

export default Sidebar;