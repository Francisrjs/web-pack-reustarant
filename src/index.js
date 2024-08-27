//index.js
console.log("hola web");
import "./style.css";
import "./reset.css"
import "./menuAbout.css"
import {DirectionContent, HomeContent,ReserveContent, TitleContent, MenuContent, AboutContent} from './home.js'
import { } from "./menu.js";
import { functionsIn, set } from "lodash";
function clearContent(){
    const content=document.getElementById("content");
    content.innerHTML="";
    const titleContainer = document.getElementById("titleContainer");
    if (titleContainer) {
        titleContainer.remove();
    }

    const h4 = document.getElementById("h4");
    if (h4) {
        h4.remove();
    }
}
function setupNav(){
    const home= document.getElementById("home");
    home.addEventListener("click", ()=>{
        clearContent();
        TitleContent();
        HomeContent();
        DirectionContent();
        ReserveContent();
        console.log("home");
    })
    const menu= document.getElementById("menu");
    menu.addEventListener("click", ()=>{
        clearContent();
        MenuContent();
        console.log("Menu");
    })
    const about= document.getElementById("about");
    about.addEventListener("click", ()=>{
        clearContent();
        AboutContent();
        console.log("about");
    })

}
//initialization
setupNav();
TitleContent();
HomeContent();
DirectionContent();
ReserveContent();
