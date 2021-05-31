import {useState} from "react";
import {useRecoilValue} from "recoil";
import "./Sidebar.css";
import ProfilePhoto from "./ProfilePhoto";
import profileState from "../recoil/atoms/profileAtom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const { name, dob } = useRecoilValue(profileState);

    const toggleSidebarHandler = () => {
        setOpen(!open);
    };

    return (
        <div className={`sidebar ${open ? '' : 'closed'}`}>
            <button
                className={`collapse-btn ${open ? '' : 'closed'}`}
                onClick={toggleSidebarHandler}
            >
                ➡
            </button>

            <div className="sidebar__profile">

                <ProfilePhoto size="large" />

                <div className="sidebar__details">
                    <div>{name}</div>
                    <div>{dob}</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
