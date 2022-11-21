
        let clsbtn  = document.querySelector('.mainmenu')
        let shwbtn  = document.querySelector('.mainmenushow')


function settingshow() {
    let colorchange=document.querySelector("#changecolor");
    let closebtcg=document.querySelector("#closebtncg");
    let showbtcg=document.querySelector("#showbtncg");
        colorchange.style.display="block";
        showbtcg.style.display="none";
        closebtcg.style.display="block";
}
function settinghide() {
    let colorchange=document.querySelector("#changecolor");
    let closebtcg=document.querySelector("#closebtncg");
    let showbtcg=document.querySelector("#showbtncg");
        colorchange.style.display="none";
        showbtcg.style.display="block";
        closebtcg.style.display="none";

}
// function menuhish() {
//     console.log("hello");  
//     let menu = document.querySelector(".main1");
//     menu.setAttribute("style","display:none;")
//     let aboutmargin = document.querySelector(".about");
//     aboutmargin.setAttribute("style","margin-left:0px;")
//     let servicemargin = document.querySelector(".service");
//     servicemargin.setAttribute("style","margin-left:0px;")
//     let portfoliomargin = document.querySelector(".portfolio");
//     portfoliomargin.setAttribute("style","margin-left:0px;")
//     let Contactmargin = document.querySelector(".Contact");
//     Contactmargin.setAttribute("style","margin-left:0px;")
//     let main2margin = document.querySelector(".main2");
//     main2margin.setAttribute("style","margin-left:0px;")
    
// }
function menuhish() {
    let menu = document.querySelector(".main1");
        menu.setAttribute("style","display:none;")
        console.log("none");
        let aboutmargin = document.querySelector(".about")
    aboutmargin.setAttribute("style","margin-left:0px;")
    let servicemargin = document.querySelector(".service")
    servicemargin.setAttribute("style","margin-left:0px;")
    let portfoliomargin = document.querySelector(".portfolio")
    portfoliomargin.setAttribute("style","margin-left:0px;")
    let Contactmargin = document.querySelector(".Contact")
    Contactmargin.setAttribute("style","margin-left:0px;")
    let main2margin = document.querySelector(".main2");
    main2margin.setAttribute("style","margin-left:0px;")
    clsbtn.setAttribute("style","display:none;")
    shwbtn.setAttribute("style","display:block;")
    
}
function menucls() {
    let menu = document.querySelector(".main1");
        menu.setAttribute("style","display:block;")
        console.log("Block");
        let aboutmargin = document.querySelector(".about")
    aboutmargin.setAttribute("style","margin-left:23%;")
    let servicemargin = document.querySelector(".service")
    servicemargin.setAttribute("style","margin-left:23%;")
    let portfoliomargin = document.querySelector(".portfolio")
    portfoliomargin.setAttribute("style","margin-left:23%;")
    let Contactmargin = document.querySelector(".Contact")
    Contactmargin.setAttribute("style","margin-left:23%;")
    let main2margin = document.querySelector(".main2");
    main2margin.setAttribute("style","margin-left:23%;")
    clsbtn.setAttribute("style","display:block;")
    shwbtn.setAttribute("style","display:none;")
}
function changedaynight() {
    let main1clr = document.querySelector('.main1');
    let daychange = document.querySelector('#daynightclr');
    let nightchange = document.querySelector('#nightclr');
    daychange.style.display="none";
    nightchange.style.display="block";

    let main2clr = document.querySelector('.main2');
    let aboutclr = document.querySelector('.about');
    let serviceclr = document.querySelector('.service');
    let portfolioclr = document.querySelector('.portfolio');
    let Contactclr = document.querySelector('.Contact');
    main1clr.setAttribute("style","background: rgb(136, 174, 209);");
    main2clr.setAttribute("style","background: rgb(31, 102, 168);");
    aboutclr.setAttribute("style","background: rgb(31, 102, 168);");
    serviceclr.setAttribute("style","background: rgb(31, 102, 168);");
    portfolioclr.setAttribute("style","background: rgb(31, 102, 168);");
    Contactclr.setAttribute("style","background: rgb(31, 102, 168);");
    let daynight = document.querySelector('#daynightclr');

}
function changenight() {
    let main1clr = document.querySelector('.main1');
    let daychange = document.querySelector('#daynightclr');
    let nightchange = document.querySelector('#nightclr');
    daychange.style.display="block";
    nightchange.style.display="none";

    let main2clr = document.querySelector('.main2');
    let aboutclr = document.querySelector('.about');
    let serviceclr = document.querySelector('.service');
    let portfolioclr = document.querySelector('.portfolio');
    let Contactclr = document.querySelector('.Contact');
    main1clr.setAttribute("style","background: rgb(172, 172, 172);");
    main2clr.setAttribute("style","background: rgb(65, 65, 65);");
    aboutclr.setAttribute("style","background: rgb(65, 65, 65);");
    serviceclr.setAttribute("style","background: rgb(65, 65, 65);");
    portfolioclr.setAttribute("style","background: rgb(65, 65, 65);");
    Contactclr.setAttribute("style","background: rgb(65, 65, 65);");
    let daynight = document.querySelector('#daynightclr');

}
function redclr() {
    closebtncg.click();
    let main1boderclr = document.querySelector('.main1');
    let main1headclr = document.querySelector('.htext');
    let main2imgbrdclr = document.querySelector('.picture img');
    let main2animateclr = document.querySelector('.animatedname');
    let main2btnclr = document.querySelector('.btnhire');
    let aboutheadclr = document.querySelector('.about h1');
    let aboutanimateheadr = document.querySelector('.animatedskill2');
    let aboutbtn1clr = document.querySelector('.aboutbtns');
    let abouteduclr = document.querySelector('.educlr');
    let serviheadeduclr = document.querySelector('.service h1');
    let serviiconeduclr = document.querySelector('.servicebox1 i');
    let procheadclr = document.querySelector('.portfolioheading h1');
    let conheadclr = document.querySelector('.Contact h1');
    let conhead2clr = document.querySelector('.contactheading1 h4');
    let contacticonclr = document.querySelector('.contact1 .contactbox1 i');
    let contactbtnclr = document.querySelector('.massagebtn');
    main1boderclr.setAttribute("style","border: 8px double red;");
    main1headclr.setAttribute("style","color: red;");
    main2imgbrdclr.setAttribute("style","border: double red 10px;");
    main2animateclr.setAttribute("style","color: red;");
    main2btnclr.setAttribute("style","background-color: red;");
    aboutheadclr.setAttribute("style","border-bottom: 5px solid red;");
    aboutanimateheadr.setAttribute("style","color: red;");
    aboutbtn1clr.setAttribute("style","background-color: red;");
    abouteduclr.setAttribute("style"," background-color: red;");
    serviheadeduclr .setAttribute("style","border-bottom: 5px solid red;");
    serviiconeduclr .setAttribute("style","color: red;");
    procheadclr .setAttribute("style","border-bottom: 5px solid red;");
    conheadclr .setAttribute("style","border-bottom: 5px solid red;");
    conhead2clr .setAttribute("style","color: red;");
    contacticonclr .setAttribute("style","color: red;");
    contactbtnclr .setAttribute("style","background-color: red;");

}
function yellowclr(){
    closebtncg.click();
    let main1boderclr = document.querySelector('.main1');
    let main1headclr = document.querySelector('.htext');
    let main2imgbrdclr = document.querySelector('.picture img');
    let main2animateclr = document.querySelector('.animatedname');
    let main2btnclr = document.querySelector('.btnhire');
    let aboutheadclr = document.querySelector('.about h1');
    let aboutanimateheadr = document.querySelector('.animatedskill2');
    let aboutbtn1clr = document.querySelector('.aboutbtn button');
    let abouteduclr = document.querySelector('.educlr');
    let serviheadeduclr = document.querySelector('.service h1');
    let serviiconeduclr = document.querySelector('.servicebox1 i');
    let procheadclr = document.querySelector('.portfolioheading h1');
    let conheadclr = document.querySelector('.Contact h1');
    let conhead2clr = document.querySelector('.contactheading1 h4');
    let contacticonclr = document.querySelector('.contact1 .contactbox1 i');
    let contactbtnclr = document.querySelector('.massagebtn');
    main1boderclr.setAttribute("style","border: 8px double yellow;");
    main1headclr.setAttribute("style","color: yellow;");
    main2imgbrdclr.setAttribute("style","border: double yellow 10px;");
    main2animateclr.setAttribute("style","color: yellow;");
    main2btnclr.setAttribute("style","background-color: yellow;");
    aboutheadclr.setAttribute("style","border-bottom: 5px solid yellow;");
    aboutanimateheadr.setAttribute("style","color: yellow;");
    aboutbtn1clr.setAttribute("style","background-color: yellow;");
    abouteduclr.setAttribute("style"," background-color: yellow;");
    serviheadeduclr .setAttribute("style","border-bottom: 5px solid yellow;");
    serviiconeduclr .setAttribute("style","color: yellow;");
    procheadclr .setAttribute("style","border-bottom: 5px solid yellow;");
    conheadclr .setAttribute("style","border-bottom: 5px solid yellow;");
    conhead2clr .setAttribute("style","color: yellow;");
    contacticonclr .setAttribute("style","color: yellow;");
    contactbtnclr .setAttribute("style","background-color: yellow;");
}
function greenclr() {
    closebtncg.click();
    let main1boderclr = document.querySelector('.main1');
    let main1headclr = document.querySelector('.htext');
    let main2imgbrdclr = document.querySelector('.picture img');
    let main2animateclr = document.querySelector('.animatedname');
    let main2btnclr = document.querySelector('.btnhire');
    let aboutheadclr = document.querySelector('.about h1');
    let aboutanimateheadr = document.querySelector('.animatedskill2');
    let aboutbtn1clr = document.querySelector('.aboutbtns');
    let abouteduclr = document.querySelector('.educlr');
    let serviheadeduclr = document.querySelector('.service h1');
    let serviiconeduclr = document.querySelector('.servicebox1 i');
    let procheadclr = document.querySelector('.portfolioheading h1');
    let conheadclr = document.querySelector('.Contact h1');
    let conhead2clr = document.querySelector('.contactheading1 h4');
    let contacticonclr = document.querySelector('.contact1 .contactbox1 i');
    let contactbtnclr = document.querySelector('.massagebtn');
    main1boderclr.setAttribute("style","border: 8px double green;");
    main1headclr.setAttribute("style","color: green;");
    main2imgbrdclr.setAttribute("style","border: double green 10px;");
    main2animateclr.setAttribute("style","color: green;");
    main2btnclr.setAttribute("style","background-color: green;");
    aboutheadclr.setAttribute("style","border-bottom: 5px solid green;");
    aboutanimateheadr.setAttribute("style","color: green;");
    aboutbtn1clr.setAttribute("style","background-color: green;");
    abouteduclr.setAttribute("style"," background-color: green;");
    serviheadeduclr .setAttribute("style","border-bottom: 5px solid green;");
    serviiconeduclr .setAttribute("style","color: green;");
    procheadclr .setAttribute("style","border-bottom: 5px solid green;");
    conheadclr .setAttribute("style","border-bottom: 5px solid green;");
    conhead2clr .setAttribute("style","color: green;");
    contacticonclr .setAttribute("style","color: green;");
    contactbtnclr .setAttribute("style","background-color: green;");
}
function pinkclr() {
    closebtncg.click();
    let main1boderclr = document.querySelector('.main1');
    let main1headclr = document.querySelector('.htext');
    let main2imgbrdclr = document.querySelector('.picture img');
    let main2animateclr = document.querySelector('.animatedname');
    let main2btnclr = document.querySelector('.btnhire');
    let aboutheadclr = document.querySelector('.about h1');
    let aboutanimateheadr = document.querySelector('.animatedskill2');
    let aboutbtn1clr = document.querySelector('.aboutbtns');
    let abouteduclr = document.querySelector('.educlr');
    let serviheadeduclr = document.querySelector('.service h1');
    let serviiconeduclr = document.querySelector('.servicebox1 i');
    let procheadclr = document.querySelector('.portfolioheading h1');
    let conheadclr = document.querySelector('.Contact h1');
    let conhead2clr = document.querySelector('.contactheading1 h4');
    let contacticonclr = document.querySelector('.contact1 .contactbox1 i');
    let contactbtnclr = document.querySelector('.massagebtn');
    main1boderclr.setAttribute("style","border: 8px double pink;");
    main1headclr.setAttribute("style","color: pink;");
    main2imgbrdclr.setAttribute("style","border: double pink 10px;");
    main2animateclr.setAttribute("style","color: pink;");
    main2btnclr.setAttribute("style","background-color: pink;");
    aboutheadclr.setAttribute("style","border-bottom: 5px solid pink;");
    aboutanimateheadr.setAttribute("style","color: pink;");
    aboutbtn1clr.setAttribute("style","background-color: pink;");
    abouteduclr.setAttribute("style"," background-color: pink;");
    serviheadeduclr .setAttribute("style","border-bottom: 5px solid pink;");
    serviiconeduclr .setAttribute("style","color: pink;");
    procheadclr .setAttribute("style","border-bottom: 5px solid pink;");
    conheadclr .setAttribute("style","border-bottom: 5px solid pink;");
    conhead2clr .setAttribute("style","color: pink;");
    contacticonclr .setAttribute("style","color: pink;");
    contactbtnclr .setAttribute("style","background-color: pink;");
}
function purpulclr() {
    closebtncg.click();
    let main1boderclr = document.querySelector('.main1');
    let main1headclr = document.querySelector('.htext');
    let main2imgbrdclr = document.querySelector('.picture img');
    let main2animateclr = document.querySelector('.animatedname');
    let main2btnclr = document.querySelector('.btnhire');
    let aboutheadclr = document.querySelector('.about h1');
    let aboutanimateheadr = document.querySelector('.animatedskill2');
    let aboutbtn1clr = document.querySelector('.aboutbtns');
    let abouteduclr = document.querySelector('.educlr');
    let serviheadeduclr = document.querySelector('.service h1');
    let serviiconeduclr = document.querySelector('.servicebox1 i');
    let procheadclr = document.querySelector('.portfolioheading h1');
    let conheadclr = document.querySelector('.Contact h1');
    let conhead2clr = document.querySelector('.contactheading1 h4');
    let contacticonclr = document.querySelector('.contact1 .contactbox1 i');
    let contactbtnclr = document.querySelector('.massagebtn');
    main1boderclr.setAttribute("style","border: 8px double purple;");
    main1headclr.setAttribute("style","color: purple;");
    main2imgbrdclr.setAttribute("style","border: double purple 10px;");
    main2animateclr.setAttribute("style","color: purple;");
    main2btnclr.setAttribute("style","background-color: purple;");
    aboutheadclr.setAttribute("style","border-bottom: 5px solid purple;");
    aboutanimateheadr.setAttribute("style","color: purple;");
    aboutbtn1clr.setAttribute("style","background-color: purple;");
    abouteduclr.setAttribute("style"," background-color: purple;");
    serviheadeduclr .setAttribute("style","border-bottom: 5px solid purple;");
    serviiconeduclr .setAttribute("style","color: purple;");
    procheadclr .setAttribute("style","border-bottom: 5px solid purple;");
    conheadclr .setAttribute("style","border-bottom: 5px solid purple;");
    conhead2clr .setAttribute("style","color: purple;");
    contacticonclr .setAttribute("style","color: purple;");
    contactbtnclr .setAttribute("style","background-color: purple;");
}
function blueclr() {
    closebtncg.click();
    let main1boderclr = document.querySelector('.main1');
    let main1headclr = document.querySelector('.htext');
    let main2imgbrdclr = document.querySelector('.picture img');
    let main2animateclr = document.querySelector('.animatedname');
    let main2btnclr = document.querySelector('.btnhire');
    let aboutheadclr = document.querySelector('.about h1');
    let aboutanimateheadr = document.querySelector('.animatedskill2');
    let aboutbtn1clr = document.querySelector('.aboutbtns');
    let abouteduclr = document.querySelector('.educlr');
    let serviheadeduclr = document.querySelector('.service h1');
    let serviiconeduclr = document.querySelectorAll('.servicebox1 i');
    let procheadclr = document.querySelector('.portfolioheading h1');
    let conheadclr = document.querySelector('.Contact h1');
    let conhead2clr = document.querySelector('.contactheading1 h4');
    let contacticonclr = document.querySelector('.contact1 .contactbox1 i');
    let contactbtnclr = document.querySelector('.massagebtn');
    main1boderclr.setAttribute("style","border: 8px double blue;");
    main1headclr.setAttribute("style","color: blue;");
    main2imgbrdclr.setAttribute("style","border: double blue 10px;");
    main2animateclr.setAttribute("style","color: blue;");
    main2btnclr.setAttribute("style","background-color: blue;");
    aboutheadclr.setAttribute("style","border-bottom: 5px solid blue;");
    aboutanimateheadr.setAttribute("style","color: blue;");
    aboutbtn1clr.setAttribute("style","background-color: blue;");
    abouteduclr.setAttribute("style"," background-color: blue;");
    serviheadeduclr .setAttribute("style","border-bottom: 5px solid blue;");
    serviiconeduclr .setAttribute("style","color: blue;");
    procheadclr .setAttribute("style","border-bottom: 5px solid blue;");
    conheadclr .setAttribute("style","border-bottom: 5px solid blue;");
    conhead2clr .setAttribute("style","color: blue;");
    contacticonclr .setAttribute("style","color: blue;");
    contactbtnclr .setAttribute("style","background-color: blue;");
    
}
