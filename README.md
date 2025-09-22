🌐 CYBERFICTION: Animated Web Experience
Welcome to the CYBERFICTION project! This is an immersive web experience that uses a unique 3D animation sequence to create an engaging and dynamic landing page. The website combines smooth scroll-based animations with a captivating visual story.

🚀 Key Features
Interactive 3D Animation: A stunning 3D character animation that plays as you scroll down the page, creating a "scroll-telling" effect.

Smooth Scrolling: Utilizes the Locomotive Scroll library for a fluid and polished scrolling experience.

Performance Optimization: Images are preloaded to ensure the animation is smooth and responsive without any lag.

GSAP & ScrollTrigger: The entire animation and page-pinning logic are powered by GSAP (GreenSock Animation Platform) and its ScrollTrigger plugin for precise control.

⚙️ Technologies Used
HTML: For the page structure.

CSS: For styling and the seamless background loop text animation.

JavaScript: The core logic for controlling the canvas animation and scroll behavior.

GSAP: A powerful JavaScript animation library.

Locomotive Scroll: A library for creating smooth scrolling effects.

🖼️ Project Structure
The project is organized in a clear and logical way:

├── CYBERFICTION-IMAGES/
│   ├── CYBERFICTION-IMAGES/
│   │   ├── male0001.png
│   │   ├── male0002.png
│   │   └── ... (300 image files)
├── index.html
├── script.js
└── style.css
✨ How It Works
The magic of this project lies in the combination of a canvas element and an image sequence. Here’s a quick breakdown:

Image Preloading: All 300 PNG images of the 3D character are loaded into memory before the animation starts. This prevents any stuttering.

Scroll-Driven Frame Animation: As you scroll, a GSAP ScrollTrigger tracks your position. Based on this, it updates a frame variable.

Canvas Rendering: The render() function draws the image corresponding to the current frame variable onto the HTML <canvas> element.

Pinning: ScrollTrigger is also used to "pin" the canvas and subsequent sections of the page, ensuring that the visual elements stay in place while the user scrolls through the content.

This project is a perfect example of how to create a high-performance, visually rich animation without relying on video files, providing a unique and interactive user experience.

🤝 Contribution
This project was built as a fun learning exercise. Feel free to explore and modify the code.
