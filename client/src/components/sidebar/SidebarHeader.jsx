import { useAuthContext } from "../../context/AuthContext";
import Avatar from "../../layout/Avatar";
import HeaderTitle from "../../layout/HeaderTitle";
import Logout from "./Logout";

const SidebarHeader = () => {
    const {authUser} = useAuthContext();
    return (
        <div className="flex items-center w-full border-b border-teal-800 mb-2 pr-3">
            <Avatar url={authUser.profilePic} />
            <div className="pt-3">
                <HeaderTitle title="Welcome" span={authUser?.fullName} size="text-md" />
            </div>
            <Logout />
        </div>
    );
}

export default SidebarHeader;