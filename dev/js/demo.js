import {gsap} from "gsap";

const toggleTL = gsap.timeline();

toggleTL.to("#cat-cylinder", {duration: 0.5, fill:"#95D6FA"},"now")
 .to("#dog", {duration: 0.5, fill:"#1476b8"},"now")
 .to("#cat", {duration: 0.5, fill:"#D8D8D8"},"now");
    

export function toggleAnimation(){
    return toggleTL;

}