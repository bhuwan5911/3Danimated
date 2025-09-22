// This function initializes the Locomotive Scroll library for smooth scrolling.
// Locomotive Scroll is used to control the scroll behavior and enable the scroll-based animation.
function locomotive() {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin with GSAP.

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"), // The element that will be used for scrolling.
        smooth: true, // Enable smooth scrolling.
    });

    // Tell ScrollTrigger to use the scrollerProxy.
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    // Refresh ScrollTrigger and LocomotiveScroll on page resize.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

// Get the canvas element and its 2D rendering context.
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Set canvas dimensions to the window size.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjust canvas size and re-render the image when the window is resized.
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

// FIXED: Updated the file path to the correct directory structure.
// This function generates the file path for each image based on its index.
function files(index) {
    const paddedIndex = String(index).padStart(4, '0');
    // Updated path to account for the nested folder
    return `./CYBERFICTION-IMAGES/CYBERFICTION-IMAGES/male${paddedIndex}.png`;
}

// Define the total number of frames in the animation.
const frameCount = 300;

// Arrays and objects to store the images and track the current frame.
const images = [];
const imageSeq = {
    frame: 1,
};

// New and improved image preloading.
// This function preloads all images and returns a promise.
function preloadImages() {
    return new Promise((resolve) => {
        let loadedCount = 0;
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    resolve(); // Resolve the promise when all images are loaded.
                }
            };
            img.src = files(i);
            images.push(img);
        }
    });
}

// Call the preload function and then start the animation after all images are ready.
preloadImages().then(() => {
    // Renders the first image once they're all loaded.
    render();

    // Use GSAP to animate the 'frame' property as the user scrolls.
    // This creates the scroll-driven animation effect.
    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page>canvas`,
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });
});

// Renders the current image frame on the canvas.
function render() {
    scaleImage(images[imageSeq.frame], context);
}

// Scales and centers the image on the canvas to maintain aspect ratio.
function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

// Pin the canvas element so it stays fixed while the content scrolls.
ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true, // Pins the canvas in place.
    scroller: `#main`, // The scroller element.
    start: `top top`, // Starts pinning when the canvas hits the top of the viewport.
    end: `600% top`, // The pin lasts for 600% of the viewport height.
});

// Pin subsequent pages to create a full-page scroll effect.
gsap.to("#page1", {
    scrollTrigger: {
        trigger: `#page1`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page2", {
    scrollTrigger: {
        trigger: `#page2`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page3", {
    scrollTrigger: {
        trigger: `#page3`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
    }
})