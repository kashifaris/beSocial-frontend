import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./leftBar.scss"

const LeftBar = () => {
  const {currentUser}=useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
         <div className="user">
          <img src={currentUser.profilePic} alt="profile-img"/> 
        <span>{currentUser.name}</span>
        </div> 
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/3220/3220829.png" alt=""/>
          <span>Friends</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/1921/1921935.png" alt=""/>
          <span>Group</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/7857/7857774.png" alt=""/>
          <span>MarketPlace</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/9357/9357527.png" alt=""/>
          <span>Watch</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/9422/9422862.png" alt=""/>
          <span>Memories</span>
        </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/3220/3220829.png" alt=""/>
          <span>Friends</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/1921/1921935.png" alt=""/>
          <span>Group</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/7857/7857774.png" alt=""/>
          <span>MarketPlace</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/9357/9357527.png" alt=""/>
          <span>Watch</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/9422/9422862.png" alt=""/>
          <span>Memories</span>
        </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/3220/3220829.png" alt=""/>
          <span>Friends</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/1921/1921935.png" alt=""/>
          <span>Group</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/7857/7857774.png" alt=""/>
          <span>MarketPlace</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/9357/9357527.png" alt=""/>
          <span>Watch</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/9422/9422862.png" alt=""/>
          <span>Memories</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar