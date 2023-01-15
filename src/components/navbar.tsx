/* eslint-disable @typescript-eslint/no-unused-expressions */
import {useState} from 'react';
import {useEffect} from 'react';

export default function Navbar(){

    const [text, setText] = useState<string>("Matyáš Novotný🏒");

    useEffect(() => {
        let index = 0;
        const texts = ["Matyáš Novotný🏒", "Matyáš Novotný⚽", "Matyáš Novotný🏐", "Matyáš Novotný💻", "Matyáš Novotný🎮"];
        const intervalId = setInterval(() => {
          index = (index + 1) % texts.length;
          setText(texts[index]);
        }, 2000);
    
        return () => clearInterval(intervalId);
      }, []);

      useEffect(() => {
        const textElement = document.querySelector('.changing-text') as HTMLElement;
        textElement.classList.add('active');
    
        setTimeout(() => {
          textElement.classList.remove('active');
        }, 1000);
      },);

    return (
        <div className="navbar">
            <div className="left-side">
                <h2 className="changing-text">{text}</h2>
            </div>
            <div className="right-side">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home🏠</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#About-me">About🧑</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Work">Work💻</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}