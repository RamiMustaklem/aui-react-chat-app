import "./Messages.css";
import TextMessage from "./TextMessage";

const Messages = ({ messages }) => {
    return (
        <div className="messages">
            {messages.map((msg, i) => <TextMessage msg={msg} key={i} />)}
        </div>
    );
};

export default Messages;
