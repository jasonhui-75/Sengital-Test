import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import React, { useEffect, useState } from "react";
import * as BiIcons from 'react-icons/bi';
import { AiOutlineFontColors } from "react-icons/ai";
//import * as AiIcons from 'react-icons/ai';

function App() {
  const [fsize, setFsize] = useState(100);
  function changeSize(n){
    setFsize(n)
    console.log("changed to"+ fsize)
  }
  let fontMIcon = <AiOutlineFontColors size={20} style={{paddingTop:"1px"}}/>;
  let fontSIcon = <BiIcons.BiFont size={16} />;
  let fontLIcon = <BiIcons.BiFont size={24}/>;
  if(fsize===100)
  {
    fontMIcon = <AiOutlineFontColors size={20} style={{paddingTop:"1px"}}/>;
    fontSIcon = <BiIcons.BiFont size={16} />;
    fontLIcon = <BiIcons.BiFont size={24}/>;
  }
  else if(fsize ===90){
    fontSIcon = <AiOutlineFontColors size={16} style={{paddingTop:"1px"}}/>;
    fontMIcon = <BiIcons.BiFont size={20}/>;
    fontLIcon = <BiIcons.BiFont size={24}/>;
  }
  else if(fsize ===110){
    fontLIcon = <AiOutlineFontColors size={24} style={{paddingTop:"1px"}}/>;
    fontMIcon = <BiIcons.BiFont size={20}/>;
    fontSIcon = <BiIcons.BiFont size={16}/>;
  }
  return (
    < >
      <header className="App-header">
        <ul>
          <li id="iconli" style={{float:"left"}}>
                <a href="/" style={{padding: "0px 0px"}}><img id="icon" src="https://www.lcsd.gov.hk/en/artist/common/graphics/logo/logo_tc.gif" alt="Italian Trulli"/></a>
          </li>
          <li id="str1" className="lislash">|</li>
          <li className="licon">
            <button id="b3" class="btn shadow-none" onClick={()=>changeSize(110)} style={{paddingTop:"30px"}}>
              {fontLIcon}
            </button>
          </li>
          <li className="licon">
            <button id="b2" class="btn shadow-none" onClick={()=>changeSize(100)} style={{paddingTop:"31px"}}>
              {fontMIcon}
            </button>
          </li>
          <li className="licon">
            <button id="b1" class="btn shadow-none" onClick={()=>changeSize(90)} style={{paddingTop:"32px"}}>
              {fontSIcon}
            </button>
          </li>
          <li id="str1" className="lislash">|</li>
          <li className="lilang">
            <a href="#">
              <button   onclick="changeLang('sc')" class="btn2">简</button>
            </a>
          </li>
          <li id="str2"  className="lislash">/</li>
          <li className="lilang">
            <a href="#">
              <button id="fontType" onclick="changeLang('sc')" class="btn2">繁</button>
            </a>
          </li>
          <li id="str2"  className="lislash">/</li>
          <li className="lilang">
            <a href="#">
              <button id="fontType" onclick="changeLang('en')" class="btn2">EN</button>
            </a>
          </li>
        </ul>
      

      </header>
      
      <Navbar/>
      <Content fontSize={fsize}/>
    </>
  );
}

export default App;
