import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (




    // <div className={own ? "message own" : "message"}>
    //   <div className="messageTop">
    //     <img
    //       className="messageImg"
    //       src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //       alt=""
    //     />
    //     <p className="messageText">{message.text}</p>
    //   </div>
    //   <div className="messageBottom">{format(message.createdAt)}</div>
    // </div>





      
    <div className={own ? "message own" : "message"}>

    <div className="messageTop">

    <img className="messageImg"
     src="/avrillavigne.jpg"
  //    style={{ width: "100%", maxWidth: "100px" }}
     alt=""
   />

  <p className="messageText">Hello, I'm Avril. I would like to chat with doctor. I don't want to go to hospital.</p>

    </div>

    <div className="messageBottom">1 hour ago</div>

  
  

</div>





  );
}
