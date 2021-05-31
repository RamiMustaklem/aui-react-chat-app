import {useState} from "react";
import {useSetRecoilState} from "recoil";
import messagesState from "../recoil/atoms/messagesAtom";
import "./TextInput.css";

const TextInput = () => {
    const [inputValue, setInputValue] = useState('');

    const setMessages = useSetRecoilState(messagesState);

    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    const onKeyUp = ({ key }) => {
        if (key === 'Enter' && inputValue) {
            setMessages(oldMessages => [
                ...oldMessages,
                {
                    id: 'me',
                    text: inputValue,
                },
            ]);

            setInputValue('');
        }
    };

    return (
        <input
            type="text"
            placeholder="Type something..."
            className="chat-text-input"
            value={inputValue}
            onChange={onChange}
            onKeyUp={onKeyUp}
        />
    );
};

export default TextInput;
