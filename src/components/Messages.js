import {useEffect, useRef} from "react";
import {useRecoilValue} from "recoil";
import "./Messages.css";
import TextMessage from "./TextMessage";
import messagesState from "../recoil/atoms/messagesAtom";

const Messages = () => {
    const messages = useRecoilValue(messagesState);

    const ref = useRef();

    useEffect(() => {
        if (ref?.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="messages" ref={ref}>
            {messages.map((msg, i) => <TextMessage msg={msg} key={i} />)}
        </div>
    );
};

export default Messages;
