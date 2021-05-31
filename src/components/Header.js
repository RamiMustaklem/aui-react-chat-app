import {useRecoilValue} from "recoil";
import "./Header.css";
import ProfilePhoto from "./ProfilePhoto";
import profileState from "../recoil/atoms/profileAtom";

const Header = () => {
    const { name } = useRecoilValue(profileState);

    return (
        <div className="header">
            <div className="header__username">
                Hi <span>{name}</span>!
            </div>
            <ProfilePhoto size="small" />
        </div>
    );
};

export default Header;
