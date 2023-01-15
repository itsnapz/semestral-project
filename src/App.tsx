import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import arg from './images/arg.jpg';
import major from './images/major.jpg';
import login from './images/1.png';
import ui from './images/2.png';
import rp from './images/rp.jpg';
import rp2 from './images/rp2.jpg';
import discord from './images/discord.png';
import github from './images/github.png';
import twitter from './images/twitter.png';

function App() {
  return (
    <div className="App">
       <Navbar />
       <div className='main'>
          <h2 className='main-heading'>Hello!</h2>
          <div className='secondary'>
            <h3 className='secondary-heading'>I'm programmer 💻<br></br> & web 🎨 developer.</h3>
          </div>
       </div>
       <hr></hr>

       <div className='About' id='About-me'>
          <iframe className='About-hockey-video' width="560" height="315" src="https://www.youtube.com/embed/4tSxkfNNagw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <div className='About-hockey-text'>
            <h2 className='About-hockey-h'>Not only PC nerd..🏒</h2>
            <p className='About-hockey-p'>Hi, my name is Matyáš, but in English you can call me Matthew or Matthias. I'm 18 years old guy who loves Computers and things around them! I mainly program C# programs, but I can do websites aswell. Besides PC, I really love spending my time watching or playing sport games!</p>
          </div>
       </div>
       <div className='About-part2'>
        <div className='About-try-text'>
          <h2 className='About-try-h'>And.. you should try too!⚽🏒🏐</h2>
          <p className='About-try-p'>I always have been fighting with my mentality. As young kid, I played football, floorball and many other team sports, but I never stick to them. If you're spending a lot of time at your computer or mobile phone, It's really nice to take some time off your device. Just find what you like in "Offline world" and enjoy it!</p>
        </div>
        <img src={arg} className='About-try-img' alt='Argentina celebrating WC win'/>
       </div>
       <div className='About-gaming'>
        <div className='About-gaming-text'>
          <h2 className='About-gaming-h'>But not only sports nerd..🎮</h2>
          <p className='About-gaming-p'>Ofcourse I'm not running 24/7 on pitch and scoring goals, I love playing games aswell! I have been playing since really young age, but I don't regret it. I never was a person who talked a lot or had many friends, I just had few friends and it was enough for me. I know, that I'm really hard introvert, but that's my personality, everybody has some. Games really helped to escape from reality and have a good time.</p>
        </div>
       </div>
       <div className="About-gaming2">
        <div className='About-gaming-text2'>
          <p className='About-gaming-p2'>I play games until now, but with High school, can't play all day long like I used to. I always had my secret dream to be a professional gamer, but it's same as in the other sports. Only really small % of people can reach it. But playing infront of this croud that you can see on the photo, that must be ohh my..💔</p>
        </div>
        <img src={major} className='About-gaming-img' alt='PGL Major Antwerp 2022'/>
       </div>
      <hr className='bottom-hr'></hr>

      <div className="Work" id='Work'>
        <img src={login} className="Work-img" alt='Login aplikace'/>
        <div className="Work-text">
          <h2 className='Work-text-h'>Also doing some programming💻</h2>
          <p className='Work-text-p'>After long time, around late August, I decided to start playing GTA V Roleplay. Meanwhile, I went to the third grade of High School and we got new teacher for programming. We got from him semestral project, but I didn't know what to do..
          but I was playing RP as EMS. So I got really nice idea to connect it with it and create EMS Responding Service.  </p>
        </div>
      </div>

      <div className="Work2">
        <div className="Work-text2">
          <p className='Work-text-p2'>In a shortcut, it's an Windows Forms App where you login with doctors name and password and you can add, remove and edit Responds. Depends on what rank are you, but you can aswell add, remove and edit Patients, Doctors, Cars and also you have there tab where you can change you password.</p>
        </div>
        <img src={ui} className="Work-img2" alt='UI Aplikace'/>
      </div>

      <div className='Work3'>
        <div className='Work-RP-text'>
          <h2 className='Work-RP-h'>But.. What is Roleplay?👮‍♂️👨‍⚕️👨‍🔧👨‍🚒</h2>
          <p className='Work-RP-p'>The concept of roleplay, also role play or RP is essentially role-playing with its own story, which must reflect the events and stories of the other players with whom it interacts in the open world. In this case, it's roleplaying set in the world of Grand Theft Auto V in the unforgiving San Andreas setting of Los Santos, a city full of constant opportunities to become part of the legal or illegal elements. Each server is governed by basic and custom rules that help bring order and a real world feel to the RP to enhance the player's emotions.</p>
        </div>
        <div className='Work-RP-images'>
          <img src={rp} className="Work-img3" alt='KKRP'/>
          <img src={rp2} className="Work-img4" alt='KKRP'/>
        </div>
      </div>

      <hr className='bottom-one'></hr>

      <footer>
        <div className='foot-container'>
          <h2 className='foot-h'>Contact💡</h2>
        </div>
        <div className='foot-links'>
          <a className='site-link' href='https://twitter.com/napzzcs' target="_blank">
            <img src={twitter} alt="Twitter" className='site-img' />
            Twitter
          </a>
          <a className='site-link' href='https://github.com/itsnapz' target="_blank">
            <img src={github} alt="GitHub" className='site-img' />
            GitHub
          </a>
          <a className='site-link'>
            <img src={discord} alt="Discord" className='site-img' />
            napz#8916
          </a>
        </div>
      </footer>



    </div>
  );
}

export default App;
