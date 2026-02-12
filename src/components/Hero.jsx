
import React from 'react';

// ==========================================
// DESIGN SPECIFICATIONS
// ==========================================
//
// FONTS:
// - Navbar Items: "Montserrat" (font-nav) [Weight: 500/Medium]
// - Main Title ("SOLUTIONS 26"): "Orbitron" (font-tech) [Weight: 900/Black]
//
// FONT SIZES (Tailwind Equivalents):
// - Navbar Links: text-lg (1.125rem / 18px) to text-xl (1.25rem / 20px)
// - Title "SOLUTIONS": text-5xl (3rem/48px) -> md:text-7xl (4.5rem/72px) -> lg:text-[7rem] (~112px)
// - Title "26": text-3xl (1.875rem/30px) -> md:text-5xl (3rem/48px) -> lg:text-6xl (3.75rem/60px)
//
// COLORS:
// - Background: #231818 (bg-bg) to #1a1010 (bg-darkBg)
// - F1 Red: #E25E5E (text-f1-red)
// - Navbar Gradient: Transparent to Dark (scrim)
//
// ASSETS:
// - Logo: /public/TBLOGO.svg
// - Man: /public/Man.svg
// - Car: /public/Car.svg
//
// LAYOUT & POSITIONING:
// - Container: Relative, Full Screen (100vh), Overflow Hidden
// - Navbar: Fixed/Absolute top, z-50
//   - Margin Top: px-6 py-6 (~24px)
//   - Gap between items: gap-12 (3rem/48px)
// - Overlay: Diagonal Lines (repeating-linear-gradient)
// - Man: Bottom Left
//   - Mobile: w-[60%]
//   - Desktop: w-[35%]
// - Car: Bottom Right
//   - Mobile: w-[90%] (Full width feel)
//   - Tablet: Scaled 80% (via md:w-[65%])
//
// Z-INDEX LAYERS:
// - Background: 0
// - Overlay Pattern: 0
// - Main Content Container: 10
// - Title: 20
// - Man/Car Images: 30
// - Navbar: 50
// ==========================================

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen bg-bg overflow-hidden flex flex-col">
      {/* 
        ==========================================
        BACKGROUND & OVERLAYS 
        ==========================================
      */}

      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#231818] to-[#1a1010] z-0" />

      {/* Diagonal Line Pattern Overlay 
          - Opacity: 0.1 (Subtle)
          - Color: White/Gray overlay
          - Angle: 45deg
      */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #ffffff 0px,
            #ffffff 1px,
            transparent 1px,
            transparent 10px
          )`
        }}
      />

      {/* 
        ==========================================
        NAVBAR 
        ==========================================
        - Font: Montserrat (font-nav)
        - Height: ~80px-100px
        - Logo: Left
        - Links: Center/Right
      */}
      <nav className="relative z-50 w-full px-6 py-6 flex items-center justify-between font-nav">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src="/TBLOGO.svg"
            alt="Logo"
            className="h-12 md:h-16 w-auto object-contain" // Responsive height
          />
        </div>

        {/* Navigation items - Hidden on small mobile, visible on md+ */}
        <div className="hidden md:flex items-center gap-8 md:gap-12">
          {['Prizes', 'Timeline', 'Events', 'About Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white text-lg md:text-xl font-medium tracking-wide hover:text-f1-red transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (Placeholder for responsiveness) */}
        <div className="md:hidden text-white text-2xl">
          ☰
        </div>

        {/* Racing Flags / Right Icon Placeholder (from design reference if needed) */}
        <div className="hidden md:block w-12 h-12">
          {/* Use existing assets if available or placeholder icon */}
          <img src="/End.svg" alt="Flags" className="h-full w-full object-contain opacity-80" />
        </div>
      </nav>


      {/* 
        ==========================================
        MAIN CONTENT / HERO BODY
        ==========================================
      */}
      <div className="relative z-10 flex-grow w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-start">

        {/* 
            TITLE LAYER 
            - Center/Top emphasis
            - Font: Orbitron (font-tech)
            - Font Size: Responsive (text-4xl to text-8xl)
        */}
        <div className="absolute top-[15%] md:top-[20%] left-0 right-0 w-full text-center z-20 px-4">
          <h1 className="font-tech text-white uppercase font-black tracking-wider leading-none">
            <span className="block text-5xl md:text-7xl lg:text-[7rem] drop-shadow-lg text-white">
              SOLUTIONS
              <span className="text-3xl md:text-5xl lg:text-6xl align-top ml-2 text-white/90">26</span>
            </span>
          </h1>
        </div>


        {/* 
           MAN ASSET
           - Mobile: Relative flow, below text
           - Desktop: Absolute Bottom Left
           - Z-Index: 30 (Above Text? Depends on design. Usually creates depth if overlapping)
        */}
        <div className="absolute bottom-0 left-0 z-30 
                        w-[60%] md:w-[35%] lg:w-[30%] 
                        -translate-x-10 md:translate-x-0
                        transition-all duration-500">
          <img
            src="/Man.svg"
            alt="Racing Driver"
            className="w-full h-auto object-bottom object-contain max-h-[60vh] md:max-h-[80vh]"
          />
        </div>

        {/* 
           CAR ASSET
           - Mobile: Bottom full width
           - Desktop: Bottom Right
           - Tablet: Scaled 80%
        */}
        <div className="absolute bottom-0 right-0 z-30
                        w-[90%] md:w-[65%] lg:w-[60%]
                        translate-x-10 md:translate-x-0
                        transition-transform duration-500">
          <img
            src="/Car.svg"
            alt="F1 Car"
            className="w-full h-auto object-bottom object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
