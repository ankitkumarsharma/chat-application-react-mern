import Avatar from "../layout/Avatar";
import HeaderTitle from "../layout/HeaderTitle";

const SidebarHeader = () => {
    return (
        <div className="flex border-b border-teal-800 mb-2">
            <Avatar />
            <HeaderTitle title="Welcome" span="Ankit Sharma" size="text-xl" />
        </div>
    );
}

export default SidebarHeader;