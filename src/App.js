import {RecoilRoot} from 'recoil';
import './App.css';
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import Messages from "./components/Messages";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="container">
      <RecoilRoot>
        <Header />
        <div className="container__content">
          <Messages />
          <Sidebar />
        </div>
        <TextInput />
      </RecoilRoot>
    </main>
  );
}

export default App;
