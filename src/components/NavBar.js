import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { menuSlide, slide } from "../animation/animation";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss"
const NavBar = forwardRef(function Index(props, ref) {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
    <div>
      <img src="trace.svg" alt="" />
    </div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="button"
      >
        <div className={`burger ${isActive ? "burgerActive" : ""}`}>
          <div ref={ref} className="bounds"></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.ul
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.div
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="body"
            >
              <li onClick={() => setIsActive(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link to="/about">About</Link>
              </li>
              <li>Project</li>
              <li>Contact</li>
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
});

export default NavBar;
