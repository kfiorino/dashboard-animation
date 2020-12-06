import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const drawTL = gsap.timeline();
export function drawAnimation(){

   drawTL.from("#outline", {duration:2, drawSVG: "0%"}, "start")
   drawTL.from("#bottom-line", {duration:2, drawSVG: "0%"}, "start" )
   drawTL.from("#shell-line1", {duration:2, drawSVG: "0%"}, "start")
   drawTL.from("#shell-line2", {duration:2, drawSVG: "0%"}, "start")
   drawTL.from("#mid-line", {duration:2, drawSVG: "0%"}, "start")
   drawTL.from("#underline", {duration:2, drawSVG: "0%"}, "start")
   drawTL.from("#krusty-krab", {duration:2, alpha: 0}, "start");

   drawTL.to("#outlines", {duration:1, scale: .3, x: 10, y:10}, "next")
   drawTL.to("#krusty-krab", {duration:1, scale: .3, x: 22, y:22}, "next");
   
   drawTL.from("#boundary1", {duration:1, drawSVG: "0%"}, "third")
   drawTL.from("#boundary2", {duration:1, drawSVG: "0%"}, "third")
   drawTL.from("#time-background", {duration:.25, alpha: 0}, "forth")
   drawTL.from("#fill-five", {duration:.15, alpha: 0}, "fifth")
   drawTL.from("#fill-seven", {duration:.15, alpha: 0}, "sixth")
   drawTL.from("#fill-nine", {duration:.15, alpha: 0}, "seventh")
   drawTL.from("#fill-eleven", {duration:.15, alpha: 0}, "eighth");
   drawTL.from("#fill-thirteen", {duration:.15, alpha: 0}, "ninth");
   drawTL.from("#fill-fifteen", {duration:.15, alpha: 0}, "ten");
   drawTL.from("#fill-seventeen", {duration:.15, alpha: 0}, "eleven");
   drawTL.from("#sun", {duration: 1, alpha: 0, rotation: 360}, "twelve");

   drawTL.from("#fill-twenty", {duration:.15, alpha: 0}, "thirteen");
   drawTL.from("#fill-twentyone", {duration:.15, alpha: 0}, "fourteen");
   drawTL.from("#degrees", {duration:.15, alpha: 0}, "fifteen");
   drawTL.from("#f", {duration:.15, alpha: 0}, "sixteen");

   drawTL.from("#flower1", {duration:1, alpha: 0, x: -200, rotate:60, scale:10}, "sixteen")

   drawTL.from("#forwards", {duration:.5, y:-200}, "seventeen");
   drawTL.from("#stop", {duration:.5, y:-200}, "eighteen");
   drawTL.from("#backwards", {duration:.5, y:-200}, "nineteen");

   drawTL.from("#music-background", {duration:.15, alpha: 0}, "twenty")
   drawTL.from("#note", {duration:.5, alpha: 0}, "twentyone")
   drawTL.from("#song", {duration:.5, alpha: 0, x:20}, "twentytwo")
   drawTL.from("#play-button", {duration:.5, alpha: 0}, "twentytwoo")

   drawTL.from("#flower-2", {duration:1, alpha: 0, x: 200, rotate:60, scale:10}, "twentythreee")
   

   drawTL.from("#bottom-bun", {duration:.5, y:-1000, ease:"back"}, "twentythree")
   drawTL.from("#burger", {y:-1000, ease:"back"})
   drawTL.from("#cheese", {y:-1000, ease:"back"})
   drawTL.from("#lettuce", {y:-1000, ease:"back"})
   drawTL.from("#top-bun", {y:-1000, ease:"back"});

   drawTL.from("#white-overlay", {duration:1, alpha:0}, "twentyfour");
   drawTL.from("#dashes", {duration:1, alpha:0}, "twentyfive");
   drawTL.from("#zeromph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#twentymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#fortymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#sixtymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#eightymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#one-hundredmph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#one-twentymph", {duration:.5, alpha:0}, "twentysix");
   drawTL.from("#one-fortymph", {duration:.5, alpha:0}, "twentysix");

   drawTL.from("#gas-guage", {duration:1, y:1000}, "twentyseven");
   drawTL.to("#fill-gas", {duration:1, scaleY: -15}, "twentyeight");
   drawTL.from("#bubble1", {duration:.5, alpha:0, y:10}, "twentyeightt");
   drawTL.from("#bubble2", {duration:.5, alpha:0, y:10}, "twentyeighttt");
   drawTL.from("#bubble3", {duration:.5, alpha:0, y:10}, "twentyeightttt");
   drawTL.from("#bubble4", {duration:.5, alpha:0, y:10}, "twentyeighttttt");
   drawTL.from("#bubble5", {duration:.5, alpha:0, y:10}, "twentyeightttttt");

   drawTL.to("#stop-fill", {duration:.5, alpha:0}, "twentynine");
   drawTL.to("#outline-stop", {duration:.5, alpha:0}, "twentynine");

   drawTL.to("#s", {duration:.5, fill: 858585}, "twentynine");
   drawTL.to("#t", {duration:.5, fill: 858585}, "twentynine");
   drawTL.to("#o", {duration:.5, fill: 858585}, "twentynine");
   drawTL.to("#p", {duration:.5, fill: 858585}, "twentynine");

   drawTL.from("#forward-background", {duration:1,alpha:0}, "thirtyone");

   drawTL.from("#speed-fill", {duration:2, drawSVG: "-100"}, "thirtytwo")
   

    return drawTL;
} 