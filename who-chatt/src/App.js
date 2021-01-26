import ChatBox from './Components/ChatBox'
import SideBar from './Components/SideBar'
import "./App.css"

function App() {
  return (
    <div className="app">
      <div className="app__body">
          <SideBar/>
          <ChatBox/>
      </div>
    </div>
  );
}

export default App;
