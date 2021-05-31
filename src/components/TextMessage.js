import "./TextMessage.css";

const TextMessage = ({ msg: { id, text } }) => {
    const msgPlace = id === 'me'
        ? 'right'
        : 'left';

    return (
        <div className={`text-msg ${msgPlace}`}>
            {text}
        </div>
    );
};

export default TextMessage;
