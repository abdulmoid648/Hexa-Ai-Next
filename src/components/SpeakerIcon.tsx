import React from "react";

interface SpeakerIconProps {
  className?: string;
  color?: string;
  isPlaying?: boolean;
}

const SpeakerIcon: React.FC<SpeakerIconProps> = ({
  className = "w-6 h-6",
  color = "currentColor",
  isPlaying = false,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Refined Speaker Body & Cone */}
      <path
        d="M11.5 5.34C11.5 4.54 10.53 4.14 9.97 4.7L6.18 8.47C5.74 8.9 5.15 9.14 4.54 9.14H3.5C2.4 9.14 1.5 10.04 1.5 11.14V12.86C1.5 13.96 2.4 14.86 3.5 14.86H4.54C5.15 14.86 5.74 15.1 6.18 15.53L9.97 19.3C10.53 19.86 11.5 19.46 11.5 18.66V5.34Z"
        fill={color}
      />

      {isPlaying ? (
        <>
          {/* Sound Waves - Rounded ends, smooth arcs */}
          <path
            d="M15.5 8.5C16.3 9.7 16.7 11 16.7 12C16.7 13 16.3 14.3 15.5 15.5"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M19.5 6.5C20.8 8.3 21.5 10.2 21.5 12C21.5 13.8 20.8 15.7 19.5 17.5"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          {/* X Mark for Muted/Unselected state */}
          <path
            d="M15.5 10L19.5 14"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M19.5 10L15.5 14"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
};

export default SpeakerIcon;
