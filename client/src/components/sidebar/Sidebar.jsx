import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarUsersList from "./SidebarUsersList";

const Sidebar = ()=>{
    return (
        <div className="bg-red-100 w-1/3 rounded-l p-3 h-[600px]">
            <SidebarHeader/>
            <SidebarSearch/>
            <SidebarUsersList/>
        </div>
    );
}

export default Sidebar;