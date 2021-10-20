import './Content.css';
import { ContentData } from "../data";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from "react";
import * as MdIcons from 'react-icons/md';
function Content(props) {
    const [option, setOption] = useState(0);
    const [tab, setTab] = useState(0);
    const[mmenu, setMmenu] = useState(0);
    const[s0menu, setS0menu] = useState(true);
    const[s1menu, setS1menu] = useState(true);
    const[s2menu, setS2menu] = useState(true);
    const[allSubMenu, setAllSubMenu] = useState(0);
    const[height, setHeight] = useState(75);
    const[ptitle,setPtitle] = useState("莘莘入場：學校文化日計劃");
    function show (n) {
        setOption(n)
        if(n ===0)
        {
            setPtitle("莘莘入場：學校文化日計劃"); 
            console.log("changed to "+ ptitle);
        }
        else if (n ===1)
        {
            setPtitle("少年登台：學校演藝實踐計劃"); 
            console.log("changed to "+ ptitle);
        }
        else if (n ===2)
        {
            setPtitle("青年探藝:高中生藝術新體驗計劃"); 
            console.log("changed to "+ ptitle);
        }
            
        else if (n ===3)
        {
            setPtitle("天空故事：初小校園藝術計劃"); 
            console.log("changed to "+ ptitle);
        }
    };
    function cTab (n) {
        console.log("tabbed");
        setTab(n)
        console.log(tab);
    };
    function cMmenu (){
        console.log("mmenu");
        setMmenu(!mmenu);
        console.log(mmenu);
    } 
    let subMenuStyle = { display:"none"};
    let mainMenuStyle = {color: "#50504f"};
    let mMenuIcon =<MdIcons.MdArrowDropDown className="menuicon"/>;
    if(mmenu ===true){
        subMenuStyle = { display:"block"};
        mainMenuStyle = {color: "violet"}
        mMenuIcon=<MdIcons.MdArrowDropUp className="menuicon"/>;
    }
    else if (mmenu ===false){
        subMenuStyle = { display:"none"};
        mainMenuStyle = {color: "#50504f"}
        mMenuIcon=<MdIcons.MdArrowDropDown className="menuicon"/>; 
    }
    let s0MenuIcon =<MdIcons.MdArrowRight className="menuicon"/>;
    let s0MenuStyle = { display:"none"};
    if(!s0menu){
        s0MenuStyle = { display:"block"};
        s0MenuIcon = <MdIcons.MdArrowDropUp className="menuicon"/>;
    }
    else {
        s0MenuStyle = { display:"none"};
        s0MenuIcon =<MdIcons.MdArrowRight className="menuicon"/>;
    }
    let s1MenuIcon =<MdIcons.MdArrowRight className="menuicon"/>;
    let s1MenuStyle = { display:"none"};
    function cS0Menu (){
        console.log("cs0 - s0: "+s0menu+", s2: "+s2menu);
        setS0menu(prevS0menu => !prevS0menu);
        if( s0menu === true ){
            console.log("added height s0");
            setHeight(prevHeight=> prevHeight+8);
        }
        else{
            console.log("removed height s0");
            setHeight(prevHeight=> prevHeight-8);
        }
    }
    function cS2Menu (){
        setS2menu(prevS2menu => !prevS2menu);
        if( s2menu === true ){
            console.log("added height s2");
            setHeight(prevHeight=> prevHeight+8);
        }
        else{
            console.log("removed height s2");
            setHeight(prevHeight=> prevHeight-8);
        }
        
    }
    function cS1Menu (){
        setS1menu(prevS1menu => !prevS1menu);
         if(s1menu === true){
            console.log("added height s1");
            setHeight(prevHeight=> prevHeight+20);
        }
        else{
            console.log("removed height s1");
            setHeight(prevHeight=> prevHeight-20);
        }
    }
    if(!s1menu){
        s1MenuStyle = { display:"block"};
        s1MenuIcon = <MdIcons.MdArrowDropUp className="menuicon"/>;
    }
    else{
        s1MenuStyle = { display:"none"};
        s1MenuIcon =<MdIcons.MdArrowRight className="menuicon"/>;
    }
    let s2MenuIcon =<MdIcons.MdArrowRight className="menuicon"/>;
    let s2MenuStyle = { display:"none"};
    if(!s2menu){
        s2MenuStyle = { display:"block"};
        s2MenuIcon = <MdIcons.MdArrowDropUp className="menuicon"/>;
    }
    else {
        s2MenuStyle = { display:"none"};
        s2MenuIcon =<MdIcons.MdArrowRight className="menuicon"/>;
    }
    
    // function cASMenu (n){
    //     console.log("cASmenu");
    //     setAllSubMenu(n);
    //     console.log(allSubMenu);
    //     switch(allSubMenu){
    //         case 0:
    //             setS0menu(0);
    //             setS1menu(0);
    //             setS2menu(0);
    //             console.log("changed all to 0");
    //             break;
    //         case 1:
    //             setS0menu(!s0menu);
    //             setS1menu(0);
    //             setS2menu(0);
    //             console.log("changed s0");
    //             break;
    //         case 2:
    //             setS0menu(0);
    //             setS1menu(!s1menu);
    //             setS2menu(0);
    //             console.log("changed s1");
    //             break;
    //         case 3:
    //             setS0menu(0);
    //             setS1menu(0);
    //             setS2menu(!s2menu);
    //             console.log("changed s2");
    //             break;
    //         default:
    //             setS0menu(0);
    //             setS1menu(0);
    //             setS2menu(0);
    //             console.log("default all");
    //             break;
    //     }
    // }
    
    return(
        <>
            <Container className="mycontainer " style= {{height: height+"rem"}}>
                <Row>
                    <h6>主頁 > {ptitle} </h6>
                </Row>
                <Row className="br" style={{marginRight:"0", width:"100%"}}>
                    <Col className="bc">
                        <button className={option===0?"myb clicked":"myb"} onClick={()=>show(0)}> 莘莘入場：學校文化日計劃 </button>
                    </Col>
                    <Col className="bc">
                        <button className={option===1?"mb clicked":"myb"} onClick={()=>show(1)}>少年登台：學校演藝實踐計劃</button>
                    </Col>
                    <Col className="bc">
                        <button className={option===2?"mb clicked":"myb"} onClick={()=>show(2)}>青年探藝:高中生藝術新體驗計劃</button>
                    </Col>
                    <Col className="bc">
                        <button className={option===3?"mb clicked":"myb"} onClick={()=>show(3)}>天空故事：初小校園藝術計劃</button>
                    </Col>
                </Row>
                <Row className="cont">
                    <Col sm={9}>
                        <img src="https://www.abo.gov.hk/img/upload/3d979b3f-720d-4b79-896d-adeec66b26b7_SCDS2122.jpg" className="ci"></img>
                        <div id="subNavBar"> 
                            <ul className="nav nav-tabs" id="subScheme" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className={tab===0?"nav-link selected":"nav-link tab"}  onClick={()=>cTab(0)}>引言</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={tab===1?"nav-link selected":"nav-link tab"}  onClick={()=>cTab(1)}>計劃目標</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={tab===2?"nav-link selected":"nav-link tab"}  href="#s1" onClick={()=>cTab(2)}>目標對象</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={tab===3?"nav-link selected":"nav-link tab"}  href="#s2" onClick={()=>cTab(3)}>甄選準則</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={tab===4?"nav-link selected":"nav-link tab"}  href="#s3" onClick={()=>cTab(4)}>費用</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={tab===5?"nav-link selected":"nav-link tab"}  href="#s4" onClick={()=>cTab(5)}>申請方法</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={tab===6?"nav-link selected":"nav-link tab"}  href="#s5" role="tab" onClick={()=>cTab(6)}>常見問題</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={tab===7?"nav-link selected":"nav-link tab"} href="#s6" role="tab" onClick={()=>cTab(7)}>查詢</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" style={{fontSize:props.fontSize+"%"}}>
                            <div className={tab===0?"":"hidden"} >
                                <h3>引言</h3>
                                <p>康樂及文化事務署（康文署）一直致力為學界提供多姿多彩的文化藝術教育節目及活動，以擴闊同學的學習經歷。自2001/02學年起推行的「學校文化日計劃」，更是廣受師生及家長歡迎。過去20多年，曾參與的學校逾1 160間，參與人次超過190萬。2020年，新冠肺炎肆虐，學校上課受影響，儘管如此，不少學校仍非常支持文化日的活動，積極參與，我們深受鼓舞。在2021/22學年，我們繼續在不同的表演場地、博物館及圖書館，舉辦各類「學校文化日」的節目及活動。</p>
                                <p>2021/22學校文化日表演藝術的節目豐富多姿，涵蓋多樣藝術形式，包括中國戲曲、舞蹈、音樂、戲劇及電影等，而受疫情影響而未能如期在2020/21學年上演的節目，亦會安排在2021/22學年演出。博物館及圖書館的活動會繼續以趣味與知識並重，動靜兼備，題材廣泛。此外，我們亦會選取合適的節目，於其中為特殊學校提供藝術通達服務，讓更多同學能參與，促進藝術共融。在2021/22學年，我們亦為幼稚園生特別設計趣味與互動元素兼備的活動，從小培養學童對文化藝術的興趣。</p>
                                <p>為優化申請程序及加強與學校的溝通，2021/22學年，我們有一個新突破，我們將會推出全新網絡「藝文共享：全港學校藝文平台」，將以往學校報名參加各活動的程序，以全電子化進行，透過這個平台，我們向各學校發放節目資訊，學校向我們表達意見，亦可全面電子化，相信這平台會為我們於推廣文化藝術的工作，帶來更佳成效。若你尚未登記加入「藝文共享：全港學校藝文平台」，請盡快登入網址<a href="https://eform.one.gov.hk/form/lcs105/tc/">https://eform.one.gov.hk/form/lcs105/tc/</a>進行註冊登記，以享這平台帶來更方便快捷的申請程序。</p>
                                <p>今年的「學校文化日計劃」將帶來超過600場的節目及活動，而九成以上學校可免費參加。誠邀全港學校，尤其是從未參與本計劃的學校，踴躍參加，引領同學走出校園，放眼藝術文化多姿釆的世界。</p>
                                <p>&nbsp;</p>
                                <p>「學校文化日計劃」承蒙教育局支持，謹此致謝。</p>
                            </div>
                            <div className={tab===1?"":"hidden"} >
                                <h3>計劃目標</h3>
                                <p>「莘莘入場：學校文化日計劃」主要目的是鼓勵學校於一學年內，有計劃地安排同學在上課時間安排同學到康樂及文化事務署轄下的表演場地、博物館和圖書館，參加特別為他們而設、富創意而有趣的文化藝術活動，藉此激發同學的創意思維，以及將藝術、歷史、科學等融入他們的學習和生活中。我們亦會將活動帶進校園，期望每一位同學都能在一學年中享有至少一次參與文化藝術活動的機會。</p>
                            </div>
                            <div className={tab===2?"":"hidden"} >
                                <h3>目標對象</h3>
                                <p><strong>表演藝術活動：</strong></p>
                                <p>除個別活動外，主要以幼稚園幼兒班至中三的學生觀眾為目標，故幼稚園幼兒班至中三同學的申請，其優先次序會較高。（康文署鼓勵中四至中六的同學參加<a href="https://www.abo.gov.hk/artconnect/tc/category/all?all=true&amp;subscheme=53">2021/22年度「青年探藝：高中生藝術新體驗計劃」</a>。)</p>
                                <p><strong>博物館及視覺藝術、圖書館活動：</strong></p>
                                <p>全港幼稚園幼兒班至中六同學。</p>
                                <p>有圖像<img class="img-responsive" src="https://www.abo.gov.hk/img/upload/43a16676-39a2-44f1-9ccf-e5fb601ebf74_parent logo_resized.jpg" alt="parent" width="35" height="35" border="0"/>標示的活動，歡迎學生與家長一同參與。</p>
                            </div>
                            <div className={tab===3?"":"hidden"} >
                                <h3>甄選準則</h3>
                                <p>每項活動均設有名額，若申請學校的總報名人數超出活動名額，本署將以電腦抽籤方式分配，考慮因素如下：</p>
                                <table cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td className="tnum">（一）</td>
                                        <td>過往從未參與「學校文化日計劃」的申請學校可優先考慮。</td>
                                    </tr>
                                    <tr>
                                        <td className="tnum">（二）</td>
                                        <td>若申請學校過去曾經參與「學校文化日計劃」，署方將按學校上次參與計劃的紀錄，包括學生的實際出席率，以及學校曾否取消獲分配的活動名額或缺席活動等因素排列優先次序，然後按優先次序安排電腦抽籤。</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={tab===4?"":"hidden"} >
                                <h3>費用</h3>
                                <p>除特別註明外，所有節目均免費入場。</p>
                            </div>
                            <div className={tab===5?"":"hidden"} >
                                <h3>申請方法</h3>
                                <p>學校可透過此「<a href="https://www.abo.gov.hk/artconnect/tc" target="_blank" rel="noopener">藝文共享：全港學校藝文平台</a>」進行網上報名（<a href="https://eform.one.gov.hk/form/lcs105/tc/" target="_blank" rel="noopener">按此</a>登記加入）。如已遞交申請，請勿重複遞交。</p>
                            </div>
                            <div className={tab===6?"":"hidden"} >
                                <h3>常見問題</h3>
                                <p><strong>1. 署方會於何時通知學校申請「學校文化日計劃」的結果?<br/></strong>署方將於截止報名後六個星期內通知學校有關申請結果：</p>
                                <ul>
                                    <li>如以傳真或網上報名表格遞交申請，學校將以傳真收到申請結果。</li>
                                    <li>如透過「藝文共享：全港學校藝文平台」遞交申請，申請人將收到電郵通知，屆時請登入「藝文共享：全港學校藝文平台」查閲申請結果。</li>
                                </ul>
                                <p><strong>2. 若學校未能按時出席活動，會有甚麼影響？<br/></strong>學生的實際出席率及學校的缺席紀錄，會影響該校日後報名參加計劃時本署進行電腦抽籤的優先次序，亦即影響該校獲分配活動的機會。</p>
                                <p>如學校因特別情況不能依時出席活動，請學校盡早通知我們，以便我們安排其他有興趣參與的學校補上。如學校知會我們未能按時出席活動的時間少於節目演出前一個月，其他學校實在難以在短期內作出相應安排 （如發出家長信、調動課堂、安排交通等），做成浪費；又或是學校在沒有通知的情況下缺席，我們都會去信有關學校的校長以了解情況。</p>
                            </div>
                            <div className={tab===7?"":"hidden"} >
                                <h3>查詢</h3>
                                <table className="tstyle" border="1" cellpadding="8px">
                                    <tbody>
                                        <tr>
                                            <td className="t1dstyle"><strong><span >港島區學校查詢電話：</span></strong></td>
                                            <td className="t2dstyle">2591 1783</td>
                                        </tr>
                                        <tr>
                                            <td className="t1dstyle"><strong><span >九龍區學校查詢電話：</span></strong></td>
                                            <td className="t2dstyle">2591 1766</td>
                                        </tr>
                                        <tr>
                                            <td className="t1dstyle"><strong><span >新界及離島區學校查詢電話：</span></strong></td>
                                            <td className="t2dstyle">2591 1738</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>&nbsp;</p>
                                <p>各「學校文化日計劃」節目內容及資料不反映康樂及文化事務署的意見。<br/>本網頁所列的節目資料主要作參考之用，節目如有更改，主辦機構將會另行通知入選學校有關的最新資料。<br/>在計劃進行期間，若有新增節目，將另行通知各學校。</p>
                            </div>
                        </div>
                        
                    </Col>
                    <Col sm={3}>
                        <div id="schemePageEvent">
                        <nav class="animated bounceInDown">
                                <ul>
                                    <li id="eventBarTitle">
                                        <a href="#">活動分類</a>
                                    </li>
                                    <li class="sub-menu">
                                        <a href="#" onClick={()=>cMmenu()} style={mainMenuStyle}>
                                            <div id="eventTextTitle">
                                                <p >
                                                    {mMenuIcon}
                                                    2021/22 莘莘入場：學校文化日計劃
                                                </p>
                                            </div>
                                            
                                        </a>
                                        <ul style={subMenuStyle}>
                                            <li class="sub-menu1">
                                                <a href="#" onClick={()=>cS0Menu()}>
                                                    <div id="eventImg">
                                                        <img src="https://www.abo.gov.hk/img/upload/7763846a-5037-473a-91d7-2f8f18837b4b_PA2021.jpg"/>
                                                    </div> 
                                                    <div id="eventText">
                                                        <p>
                                                            {s0MenuIcon}
                                                            表演藝術活動
                                                        </p>
                                                    </div>
                                                </a>
                                                <ul style={s0MenuStyle}>
                                                    <li>
                                                        <a href="#">中國戲曲</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">舞蹈</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">跨媒體藝術</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">音樂</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">戲劇及媒體藝術</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">表演場地特備節目</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-menu1">
                                                <a href="#" onClick={()=>cS1Menu()}>
                                                    <div id="eventImg">
                                                        <img src="https://www.abo.gov.hk/img/upload/e386530d-bdfa-424e-a002-d1dfa24bc39c_Museum2021.jpg"/>
                                                    </div> 
                                                    <div id="eventText">
                                                        <p>
                                                            {s1MenuIcon}
                                                            博物館及視覺藝術活動
                                                        </p>
                                                    </div>
                                                </a>
                                                <ul style={s1MenuStyle}>
                                                    <li>
                                                        <a href="#">香港文化博物館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">香港藝術館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">香港電影資料館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">孫中山紀念館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">香港文物探知館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">香港歷史博物館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">非物質文化遺產辦事處</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">屏山鄧族文物館暨文物徑訪客中心</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">文物修復辦事處</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">香港視覺藝術中心</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">香港太空館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">葛量洪號滅火輪展覽館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">香港科學館</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-menu1">
                                                <a href="#" onClick={()=>cS2Menu()}>
                                                    <div id="eventImg">
                                                        <img src="https://www.abo.gov.hk/img/upload/f33e6a90-c5aa-4474-9317-aec65f712c7a_Lib2021.jpg"/>
                                                    </div> 
                                                    <div id="eventText">
                                                        <p>
                                                            {s2MenuIcon}
                                                            圖書館活動
                                                        </p>
                                                    </div>
                                                </a>
                                                <ul style={s2MenuStyle}>
                                                    <li>
                                                        <a href="#">香港中央圖書館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">九龍公共圖書館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">大會堂公共圖書館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">沙田公共圖書館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">屯門公共圖書館</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">屏山天水圍公共圖書館</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer>
                <span>
                    <a href="#">
                            重要告示                
                    </a>
                </span>
                <span id="str1" style={{paddingTop: "10px"}}>|</span>
                <span>
                    <a href="#">
                        私隱政策                
                    </a>
                </span>
                <p>最近修訂日期 : 20.10.2021 </p>
                  
            </footer>
        </>
    );
}


export default Content;