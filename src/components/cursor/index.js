import styles from "./style.module.scss";
import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ stickyElement }) {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 70 : 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const manageMouseMove = useCallback(
    (e) => {
      if (!stickyElement?.current) return;
      const { clientX, clientY } = e;
      const { left, top, height, width } =
        stickyElement.current.getBoundingClientRect();
      const center = { x: left + width / 2, y: top + height / 2 };
      if (isHovered) {
        const distance = { x: clientX - center.x, y: clientY - center.y };
        mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.2);
        mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.2);
      } else {
        mouse.x.set(clientX - cursorSize /2);
        mouse.y.set(clientY - cursorSize / 2);
      }
    },
    [isHovered, stickyElement, cursorSize, mouse.x, mouse.y]
  );
  const manageMouseOver = useCallback(() => setIsHovered(true), []);
  const manageMouseLeave = useCallback(() => setIsHovered(false), []);
  useEffect(() => {
    const element = stickyElement?.current;
    if (element) {
      element.addEventListener("mouseenter", manageMouseOver);
      element.addEventListener("mouseleave", manageMouseLeave);
    }
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
      }
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove, manageMouseOver, manageMouseLeave, stickyElement]);
  return (
    <div className={styles.cursorContainer}>
      <motion.div
        role="cursor"
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={styles.cursor}
      ></motion.div>
    </div>
  );
}
