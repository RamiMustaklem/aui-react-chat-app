import {atom} from "recoil";

const messages = [
    { id: 'you', text: 'message 1' },
    { id: 'you', text: 'message 2' },
    { id: 'me', text: 'a very long long long long message as long as possible lets see how much space it should take at max' },
    { id: 'me', text: 'message 2' },
    { id: 'me', text: 'yeah yeah alright, lets go' },
    { id: 'you', text: 'Lorem ipsum dolor kaza' },
];

const messagesState = atom({
    key: 'messagesState',
    default: messages,
});

export default messagesState;
