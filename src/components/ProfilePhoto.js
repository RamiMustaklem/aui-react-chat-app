import "./ProfilePhoto.css";

const SIZES = {
    small: 60,
    large: 180,
};

const ProfilePhoto = ({ size }) => {
    return (
        <div
            className="avatar"
            style={{
                width: `${SIZES[size]}px`,
                height: `${SIZES[size]}px`,
            }}
        >
            <img src={`https://i.pravatar.cc/${SIZES[size]}`} alt="" className="avatar__image" />
        </div>
    );
};

export default ProfilePhoto;
