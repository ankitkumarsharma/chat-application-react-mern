import noUser from "../assets/img/noUser.png";

const Avatar = ({ url }) => {
    return (
        <div className="w-8 border-teal-800 border-2 h-8 rounded-full text-white font-bold mr-2 flex items-center">
            <div className="text-center w-full">
                {<img src={url ? url : noUser} alt="" />}
            </div>
        </div>
    )
}

export default Avatar;