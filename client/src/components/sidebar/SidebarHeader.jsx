import Avatar from "../../layout/Avatar";
import HeaderTitle from "../../layout/HeaderTitle";
import Logout from "./Logout";

const SidebarHeader = () => {
    return (
        <div className="flex items-center w-full border-b border-teal-800 mb-2 pr-3">
            <Avatar />
            <div className="pt-3">
                <HeaderTitle title="Welcome" span="Ankit Sharma" size="text-md" />
            </div>
            <Logout />
        </div>
    );
}

export default SidebarHeader;