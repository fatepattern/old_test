import './App.css';
import Header from "./components/Header/Header";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import profilePicture from "./assets/images/1.jpg"
import Avatar from "./components/Avatar/Avatar";

function App() {
  return (
    <div>
        <div className="header-wrapper">
            <Header/>
        </div>
        <div className="avatar-wrapper">
            <Avatar/>
        </div>
        <div className="sidebar-wrapper">
            <SidebarContainer/>
        </div>
    </div>
  );
}

export default App;
