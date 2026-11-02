import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { getWaveformPath } from "./WaveformPaths";

interface EkgStripProps {
  rhythmId: string;
  animate?: boolean;
  height?: number;
  className?: string;
  showLabels?: boolean;
}

export function EkgStrip({
  rhythmId,
  animate = false,
  height = 200,
  className = "",
  showLabels = false,
}: EkgStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewWidth, setViewWidth] = useState(800);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setViewWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const pathData = getWaveformPath(rhythmId, viewWidth);
  const svgViewBox = `0 0 ${viewWidth} 100`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-lg border border-red-200 ${className}`}
      style={{ height: `${height}px`, backgroundColor: "#fff5f5" }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <pattern
            id={`smallGrid-${rhythmId}`}
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="#ffc8c8"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id={`largeGrid-${rhythmId}`}
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="50"
              height="50"
              fill={`url(#smallGrid-${rhythmId})`}
            />
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#ffa0a0"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#largeGrid-${rhythmId})`}
        />
      </svg>

      <svg
        width="100%"
        height="100%"
        viewBox={svgViewBox}
        preserveAspectRatio="xMinYMid meet"
        className="absolute inset-0"
      >
        {animate ? (
          <motion.path
            d={pathData}
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "linear" }}
          />
        ) : (
          <path
            d={pathData}
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>

      {showLabels && (
        <div className="absolute bottom-2 left-2 flex gap-3 text-xs">
          <span className="bg-white/80 px-2 py-0.5 rounded text-blue-900 font-medium border border-blue-200">
            25mm/s
          </span>
          <span className="bg-white/80 px-2 py-0.5 rounded text-blue-900 font-medium border border-blue-200">
            10mm/mV
          </span>
        </div>
      )}
    </div>
  );
}
