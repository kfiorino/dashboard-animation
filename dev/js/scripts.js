import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { CustomEase } from "gsap/CustomEase";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"; 



import { drawAnimation } from "./demo.js";


gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(MorphSVGPlugin);

const mainTL = gsap.timeline()
mainTL.add(drawAnimation());

GSDevTools.create();

