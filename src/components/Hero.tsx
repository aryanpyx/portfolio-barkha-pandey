import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);
  const animationFrameRef = useRef<number>(0);

  const animateOpacity = (targetOpacity: number, duration: number, callback?: () => void) => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    const video = videoRef.current;
    if (!video) return;

    const startTime = performance.now();
    const startOpacity = parseFloat(video.style.opacity || '0');

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      video.style.opacity = (startOpacity + (targetOpacity - startOpacity) * progress).toString();

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        if (callback) callback();
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const timeLeft = video.duration - video.currentTime;
    if (timeLeft <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      animateOpacity(0, 500);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.style.opacity = '0';
    setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(e => console.log('Autoplay prevented', e));
      fadingOutRef.current = false;
      animateOpacity(1, 500);
    }, 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.style.opacity = '0';
      const handleCanPlay = () => {
        animateOpacity(1, 500);
      };
      
      if (video.readyState >= 3) {
        handleCanPlay();
      } else {
        video.addEventListener('canplay', handleCanPlay, { once: true });
      }

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, []);

  return (
    <section id="home" className="min-h-screen bg-black overflow-hidden relative flex flex-col">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
          className="w-full h-full object-cover translate-y-[17%]"
          muted
          autoPlay
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
      </div>
      {/* Headline Content */}
      <div className="relative z-10 flex flex-col items-center justify-start flex-1 w-full px-6 pt-16 md:pt-24 gap-4">
        <p className="text-sm sm:text-lg md:text-xl font-sans tracking-[0.2em] md:tracking-[0.3em] text-white/90 uppercase font-bold text-center">
          <span className="text-[#ff4a00]">Barkha Pandey</span> | Graphic, UI/UX Designer & Video Editor
        </p>
        <h1 className="text-6xl sm:text-8xl md:text-[8rem] lg:text-[11rem] font-black tracking-tight text-white uppercase leading-none text-center">
          Portfolio
        </h1>
      </div>
    </section>
  );
}
