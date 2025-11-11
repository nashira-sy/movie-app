import React from "react";
import ReactPlayer from "react-player";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerKey: string | null;
}

const Player = ReactPlayer as unknown as React.FC<{
  url: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
  playing?: boolean;
  light?: boolean | string;
}>;

const TrailerModal: React.FC<TrailerModalProps> = ({ isOpen, onClose, trailerKey }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-[51] text-white text-2xl bg-black bg-opacity-60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video content */}
        {trailerKey ? (
          <Player
            url={`https://www.youtube.com/watch?v=${trailerKey}`}
            width="100%"
            height="100%"
            controls
            playing
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white text-lg">
            No trailer available
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerModal;
