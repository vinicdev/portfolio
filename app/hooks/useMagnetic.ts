"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface UseMagneticOptions {
  distance?: number;
  stiffness?: number;
  damping?: number;
}

export function useMagnetic(options: UseMagneticOptions = {}) {
  const { distance: maxDistance = 30, stiffness = 300, damping = 30 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness, damping };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const elementMaxDistance = Math.max(rect.width, rect.height) / 2;
    const effectiveDistance = Math.min(maxDistance, elementMaxDistance);

    if (distance < effectiveDistance) {
      const force = (effectiveDistance - distance) / effectiveDistance;
      x.set((distanceX / effectiveDistance) * maxDistance * force * 0.5);
      y.set((distanceY / effectiveDistance) * maxDistance * force * 0.5);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    x: xSpring,
    y: ySpring,
    handleMouseMove,
    handleMouseLeave,
  };
}

