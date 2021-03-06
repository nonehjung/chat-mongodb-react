import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";








export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;








  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Diabetes Project Chat</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Link to={`/chat`} className="link"> 
            <Person />
            <span className="topbarIconBadge">1</span>
            </Link>
          </div>
          


          <div className="topbarIconItem">


          <Link to={`/messenger`} className="link">


            <Chat />
            <span className="topbarIconBadge">2</span>

            </Link>
          </div>

          

          <div className="topbarIconItem">


            <Link to={`/messenger`} className="link">

            <Notifications />
            <span className="topbarIconBadge">3</span>

            </Link>

          </div>

        </div>




        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>





      </div>
    </div>
  );
}
