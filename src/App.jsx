import 'remixicon/fonts/remixicon.css'
import Chats from './components/chats';
import { gsap } from "gsap";
import { createEffect } from 'solid-js';
import Jscode from '.';
import Button from './components/button_1';

function Main() {


  createEffect(() => {
    gsap.from('.users', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: .2,
      ease: "back.out",
      delay: .4
    });

    gsap.to(".pleft", {
      clipPath: "circle(70.7% at 50% 50%)",
      duration: 2,
      ease: "expo",
      delay: .2

    })


    gsap.from(".inputbox",{
      y:200,
      duration:1.4,
      ease: "back.out"
    })
     

    gsap.from(".pright-title",{
      opacity:0,
      delay:.2,
      duration:3,
      ease:"power3"
    })
  

    gsap.from(".machan-v",{
      y:-200,
      duration:1,
     
    })

  })



  return (

    <>
      <div id="main">
        <div id="page1">
          <div className="pleft">
            <div className="nav">
              <img onClick={() => Jscode(gsap)} src="https://avatarfiles.alphacoders.com/323/323609.png" alt="" />
              <i class="ri-settings-3-line"></i>

            </div>
            <p className="bl">Bullet Launch</p>

            <div className="search">
              <i class="ri-add-fill"></i>
              <input type="text" placeholder='Search' />
              <i class="ri-search-2-line"></i>
            </div>



            <div className="chats">
              <Chats />
              <Chats />
              <Chats />
              <Chats />
              <Chats />
              <Chats />
              <Chats />
              <Chats /> <Chats />
              <Chats />
              <Chats />
              <Chats />
            </div>





          </div>
          <div className="pright">
            <div className="machan-v">
              <h2>Machan v-1 <i class="ri-arrow-down-s-line"></i></h2>
              <div className="blob1 blob"></div>
              <div className="blob2 blob"></div>
              <div className="blob3 blob"></div>
            </div>

            <div className="pright-title">
              <h1>Manglish Mingle: How Can Machan Spice Up Your Conversations Today?</h1>
            </div>

            <div className="pright-type inputbox">
              <input type="text" placeholder='Chat with machu' />
              <i className="ri-arrow-right-line"></i>

            </div>



          </div>
        </div>
        <div id="profile">
          <div className="p2-top">
            <i onClick={() => Jscode(gsap)} class="ri-arrow-left-line"></i>
            <h2>Profile</h2>
          </div>

          <div className="p2-mid">

            <img src="https://avatarfiles.alphacoders.com/323/323609.png" alt="" />
            <img src="https://avatarfiles.alphacoders.com/323/323609.png" alt="" />

            <h2>Alex</h2>``
          </div>

          <div className="p2-btm">
            <div className="det-name">

              <input type="text" placeholder='Type in your name' />
              <i class="ri-pencil-line"></i>
            </div>
            <Button />



          </div>

        </div>
      </div>
    </>
  );
}

export default Main;
