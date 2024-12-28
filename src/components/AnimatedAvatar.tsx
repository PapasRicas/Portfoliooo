import React from "react";

interface AnimatedAvatarProps {
  imageUrl?: string;
  size?: number;
}

const AnimatedAvatar = ({
  imageUrl = "https://api.dicebear.com/7.x/pixel-art/svg?seed=dev&backgroundColor=b4f8c8",
  size = 200,
}: AnimatedAvatarProps) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden group"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: "grayscale(100%) brightness(1.2) contrast(1.2)",
        }}
      />
      <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-scanlines opacity-20" />

      {/* CRT flicker effect */}
      <div className="absolute inset-0 animate-flicker bg-white/5" />
    </div>
  );
};

export default AnimatedAvatar;

// Add these to your global CSS (src/index.css)
/*
@keyframes flicker {
  0% { opacity: 0.1; }
  50% { opacity: 0.15; }
  100% { opacity: 0.1; }
}

.animate-flicker {
  animation: flicker 0.15s infinite;
}

.bg-scanlines {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 255, 0, 0.05) 50%,
    transparent 100%
  );
  background-size: 100% 4px;
}
*/
