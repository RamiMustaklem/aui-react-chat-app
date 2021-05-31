import {useState} from "react";
import "./Sidebar.css";
import ProfilePhoto from "./ProfilePhoto";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

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
                    <div>Rami Mustaklem</div>
                    <div>Jan 1st, 1988</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
