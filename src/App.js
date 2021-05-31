import './App.css';
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import Messages from "./components/Messages";
import Sidebar from "./components/Sidebar";

const messages = [
    { id: 'you', text: 'message 1' },
    { id: 'you', text: 'message 2' },
    { id: 'me', text: 'a very long long long long message as long as possible lets see how much space it should take at max' },
    { id: 'me', text: 'message 2' },
    { id: 'me', text: 'yeah yeah alright, lets go' },
    { id: 'you', text: 'Lorem ipsum dolor kaza' },
];

function App() {
  return (
    <main className="container">
      <Header username="Rami Mustaklem" />
      <div className="container__content">
        <Messages messages={messages} />
        <Sidebar />
      </div>
      <TextInput />
    </main>
  );
}

export default App;
