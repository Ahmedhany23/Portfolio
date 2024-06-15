import { motion, AnimatePresence } from "framer-motion";
import { opacity, slide, perspective } from "./anim";
import "./styles.scss";
const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function Inner({ children }) {
  return (
    <div className="inner">
      <motion.div className="slide" {...anim(slide)} />

      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)} className="children">
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
