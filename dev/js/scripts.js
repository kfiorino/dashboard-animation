import $ from "jquery";
import { gsap } from "gsap";
import { toggleAnimation } from './demo.js';

var toggle = false;

const mainTL = gsap.timeline({paused:true});
mainTL.add(toggleAnimation());

$("#svg-demo").on("click", function(){
    console.log("working");
    if(toggle === false){

        mainTL.play();
        toggle = true;

    }else{
        mainTL.reverse();
       toggle = false;
    }
})