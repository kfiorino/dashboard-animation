import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { CustomEase } from "gsap/CustomEase";



import { drawAnimation } from "./demo.js";

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(CustomEase);

const mainTL = gsap.timeline()
mainTL.add(drawAnimation());

GSDevTools.create();