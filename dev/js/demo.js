import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const drawTL = gsap.timeline();
export function drawAnimation(){

   drawTL.from("#outline", {duration:3, drawSVG: "0%"}, "start")
   drawTL.from("#bottom-line", {duration:3, drawSVG: "0%"}, "start" )
   drawTL.from("#shell-line1", {duration:3, drawSVG: "0%"}, "start")
   drawTL.from("#shell-line2", {duration:3, drawSVG: "0%"}, "start")
   drawTL.from("#mid-line", {duration:3, drawSVG: "0%"}, "start")
   drawTL.from("#underline", {duration:3, drawSVG: "0%"}, "start")
   drawTL.from("#krusty-krab", {duration:3, alpha: 0}, "start");

   drawTL.to("#outlines", {duration:1, scale: .3, x: 10, y:10}, "next")
   drawTL.to("#krusty-krab", {duration:1, scale: .3, x: 22, y:22}, "next");
   
   drawTL.from("#boundary-lines", {duration:1, alpha: 0}, "third")
   drawTL.from("#time-background", {duration:.25, alpha: 0}, "forth")
   drawTL.from("#fill-five", {duration:.25, alpha: 0}, "fifth")
   drawTL.from("#fill-seven", {duration:.25, alpha: 0}, "sixth")
   drawTL.from("#fill-nine", {duration:.25, alpha: 0}, "seventh")
   drawTL.from("#fill-eleven", {duration:.25, alpha: 0}, "eighth");
   drawTL.from("#fill-thirteen", {duration:.25, alpha: 0}, "ninth");
   drawTL.from("#fill-fifteen", {duration:.25, alpha: 0}, "ten");
   drawTL.from("#fill-seventeen", {duration:.25, alpha: 0}, "eleven");
   drawTL.from("#sun", {duration:.25, alpha: 0}, "twelve");
   drawTL.from("#fill-twenty", {duration:.25, alpha: 0}, "thirteen");
   drawTL.from("#fill-twentyone", {duration:.25, alpha: 0}, "fourteen");
   drawTL.from("#degrees", {duration:.25, alpha: 0}, "fifteen");
   drawTL.from("#f", {duration:.25, alpha: 0}, "sixteen");

   drawTL.from("#forwards", {duration:1, y:-200}, "seventeen");
   drawTL.from("#stop", {duration:1, y:-200}, "eighteen");
   drawTL.from("#backwards", {duration:1, y:-200}, "nineteen");

   drawTL.from("#music-background", {duration:.25, alpha: 0}, "twenty")
   drawTL.from("#note", {duration:2, alpha: 0, x:300}, "twentyone")
   drawTL.from("#song", {duration:2, alpha: 0, x:-10}, "twentytwo")
   drawTL.from("#play-button", {duration:2, alpha: -5}, "twentytwo")
   

   drawTL.from("#bottom-bun", {duration:1, y:-1000, ease: "circ"}, "twentythree")
   drawTL.from("#burger", {duration:.5, y:-1000, ease: "circ"})
   drawTL.from("#cheese", {duration:.5, y:-1000, ease: "circ"})
   drawTL.from("#lettuce", {duration:.5, y:-1000, ease: "circ"})
   drawTL.from("#top-bun", {duration:1, y:-1000, ease: "circ"});

   drawTL.from("#white-overlay", {duration:1, alpha:0}, "twentyfour");
   drawTL.from("#dashes", {duration:1, alpha:0}, "twentyfive");
   drawTL.from("#increase", {duration:1, alpha:0}, "twentyfive");
   drawTL.from("#zero", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#twentymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#fortymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#sixtymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#eightymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#one-hundredmph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#one-twentymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#one-fortymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#speed-fill", {duration:.5, alpha:0}, "twentysix");

   drawTL.from("#gas-guage", {duration:1, y:1000}, "twentyseven");
   drawTL.to("#fill-gas", {duration:1, scaleY: -15}, "twentyeight");
   
    return drawTL;
} 

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const morphTL = gsap.timeline();

export function drawAnimation(){

    morphTl.from("#speed-fill", {duration:2, morphSVG: "#outer"});  

return morphTL;

}