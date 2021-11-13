import "./chat.css";
import Topbar from "../../components/topbar/Topbar";


import { AuthContext } from "../../context/AuthContext";

import { useContext, useEffect, useState } from "react";



import Post from "../../components/post/Post";

import axios from "axios";



export default function Chat({ username }) {


    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [posts, setPosts] = useState([]);
    



    

    useEffect(() => {
        const fetchPosts = async () => {
          const res = username
            ? await axios.get("/posts/profile/" + username)
            : await axios.get("posts/timeline/" + user._id);
          setPosts(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
        };
        fetchPosts();
      }, [username, user._id]);


    


  return (
    <>

      




        <Topbar />

        <div className="homeContainer">


            <div className="sidebar">
                sidebar
            </div>




            <div className="feed">
                

                <div className="chatBox">

                    <div className="chatBoxWrapper">


                        <div className="chatBoxTop">


                            <div className="messageTop">

                                {/* <img className="messageImg"
                                    src="/avrillavigne.jpg"
                                //    style={{ width: "100%", maxWidth: "100px" }}
                                    alt=""
                                /> */}




                                <img
                                    className="postProfileImg"
                                    src={
                                    user.profilePicture
                                        ? PF + user.profilePicture
                                        : PF + "person/noAvatar.png"
                                    }
                                    alt=""
                                />


                                <span className="postUsername">{user.username}</span>
                                


                                {posts.map((p) => (
                                <Post key={p._id} post={p} />
                                ))}
                                

                                {/* <p className="messageText">Hello, I'm Avril. I would like to chat with doctor. I don't want to go to hospital.</p> */}

                            </div>

                                <div className="messageBottom">1 hour ago</div>






                            <div className="chatBoxBottom">
                                        <textarea
                                            className="chatMessageInput"
                                            placeholder="write something..."
                                            
                                           
                                            >

                                        </textarea>


                                        <button className="chatSubmitButton" >
                                            Send
                                        </button>
                            </div>



                        </div>




                    </div>


                </div>









            </div>





            <div className="rightbar">
                rightbar
            </div>




        </div>
















    </>
  );
}














