import "./Header.css";
import ProfilePhoto from "./ProfilePhoto";

const Header = ({ username }) => {
    return (
        <div className="header">
            <div className="header__username">
                Hi <span>{username}</span>!
            </div>
            <ProfilePhoto size="small" />
        </div>
    );
};

export default Header;
