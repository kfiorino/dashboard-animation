import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const drawTL = gsap.timeline();
export function drawAnimation(){

   drawTL.from("#underline", {duration:2, drawSVG: "0%"});

    return drawTL;
}