import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const drawTL = gsap.timeline();
export function drawAnimation(){

   drawTL.from("#outline", {duration:3, drawSVG: "0%"}, "start");
   drawTL.from("#bottom-line", {duration:3, drawSVG: "0%"}, "start" );
   drawTL.from("#shell-line1", {duration:3, drawSVG: "0%"}, "start");
   drawTL.from("#shell-line2", {duration:3, drawSVG: "0%"}, "start");
   drawTL.from("#mid-line", {duration:3, drawSVG: "0%"}, "start");
   drawTL.from("#underline", {duration:3, drawSVG: "0%"}, "start");
   drawTL.from("#krusty-krab", {duration:3, alpha: 0}, "start");

   drawTL.to("#outlines", {duration:1, scale: .3, x: 10, y:10}, "next")
   drawTL.to("#krusty-krab", {duration:1, scale: .3, x: 22, y:22}, "next")
  
  
 
   

   


    return drawTL;
} 