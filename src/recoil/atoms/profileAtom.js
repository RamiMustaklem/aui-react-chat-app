import {atom} from "recoil";

const profileState = atom({
    key: 'profileState',
    default: {
        name: "Rami Mustaklem",
        dob: "Jan 1st, 1988",
    },
});

export default profileState;
