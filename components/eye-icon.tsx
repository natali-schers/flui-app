import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export function EyeIcon({ visible }: { visible: boolean }) {
  if (visible) {
    return (
      <Svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        fill="none"
        stroke="#9CA3AF"
        strokeWidth={2}
      >
        <Path
          d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
  return (
    <Svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke="#9CA3AF"
      strokeWidth={2}
    >
      <Path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={12} r={3} />
    </Svg>
  );
}

export function CheckIcon() {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={40}
      height={40}
      fill="none"
      stroke="white"
      strokeWidth={2.5}
    >
      <Path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
