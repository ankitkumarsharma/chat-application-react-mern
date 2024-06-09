import Avatar from "../layout/Avatar";

const SidebarUsersList = () => {
    return (
        <ul className="overflow-x-auto h-[450px]">
            <li>
                <div className={"border-b border-gray-100 py-2 flex items-center pl-2 cursor-pointer"}>
                    <Avatar />
                    Ankit
                </div>
            </li>
            <li>
                <div className={"border-b border-gray-100 py-2 flex items-center pl-2 cursor-pointer"}>
                    <Avatar />
                    Manish
                </div>
            </li>
            <li>
                <div className={"border-b border-gray-100 py-2 flex items-center pl-2 cursor-pointer"}>
                    <Avatar />
                    Anu Ankit
                </div>
            </li>
        </ul>
    );
}

export default SidebarUsersList;