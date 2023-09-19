gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

  $('#page1 h1').textillate({ in: { effect: 'fadeIn' } });

gsap.to("#page1 h1 ,#page1 h2",{
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page1",
    start:"top 0%",
    scrub:1,
  }
})
gsap.from("#page2 h2 ,#page2 h1",{
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top 60%",
    end:"top 0%",
  }
})
gsap.from("#page3>h1",{
  scale:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    start:"top 70%",
  }
})
gsap.from("#page3 .boxs",{
  y:400,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    start:"top 50%",
  }
})
gsap.from("#page4 h1",{
  opacity:0,
  scale:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    start:"top 70%",
  }
})
gsap.from("#page4 .sections",{
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    start:"top 40%",
  }
})
