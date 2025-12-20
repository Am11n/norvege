"use client";

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  onEnded?: () => void;
  isActive?: boolean;
}

export interface HeroVideoRef {
  restart: () => void;
}

const HeroVideo = forwardRef<HeroVideoRef, HeroVideoProps>(
  ({ src, poster, className = "", style, onEnded, isActive = false }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Expose restart method to parent component
    useImperativeHandle(ref, () => ({
      restart: () => {
        const video = videoRef.current;
        if (video) {
          video.currentTime = 0;
          video.play().catch((error) => {
            console.warn("Video restart failed:", error);
          });
        }
      },
    }));

    // Restart video when it becomes active
    useEffect(() => {
      const video = videoRef.current;
      if (!video || !isActive) return;

      // Restart video from beginning when slide becomes active
      video.currentTime = 0;
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
      });
    }, [isActive]);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleLoadedData = () => {
        setIsLoaded(true);
        // Only play if active
        if (isActive) {
          video.play().catch((error) => {
            console.warn("Video autoplay failed:", error);
            setHasError(true);
          });
        }
      };

      const handleCanPlay = () => {
        setIsLoaded(true);
        if (isActive) {
          video.play().catch((error) => {
            console.warn("Video autoplay failed:", error);
          });
        }
      };

      const handleError = () => {
        console.warn("Video failed to load:", src);
        setHasError(true);
      };

      const handleEnded = () => {
        // Call parent callback when video ends
        if (onEnded) {
          onEnded();
        }
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);
      video.addEventListener("ended", handleEnded);

      // Try to load the video
      video.load();

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
        video.removeEventListener("ended", handleEnded);
        // Pause video when component unmounts
        video.pause();
      };
    }, [src, isActive, onEnded]);

    if (hasError) {
      return null; // Don't render video if it fails to load
    }

    return (
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full ${className}`}
        autoPlay
        muted
        playsInline
        poster={poster}
        preload={isActive ? "auto" : "metadata"}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          objectFit: "cover",
          ...style,
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
);

HeroVideo.displayName = "HeroVideo";

export default HeroVideo;
