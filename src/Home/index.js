import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Curve from "../components/curve/curve";
import Inner from "../components/inner/index"
import { useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Home() {

  const navigate = useNavigate();
/* 
  useEffect(()=>{
    if(window.scrollY === 100){
      navigate('/about')
    }
  },[window.scrollY,navigate]) */
  const [text] = useTypewriter({
    words:["I Am Front-End Developer", "My Name is Ahmed Hany","Feel Free To Look in My Portfolio"],
    loop:{}
  }) 
  return (
    <Inner>
    <main>
    <div className="container">
        <motion.h1
          className="heading"
          transition={{ staggerChildren: 0.1 }}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={charVariants} className="lucky">
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
      </div>
   
        <div className={`${styles.link} prime `} onClick={()=>navigate('/about')}>About Me</div>
   
    </main>
      
    </Inner>
  );
}
