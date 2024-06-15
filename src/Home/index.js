import { motion } from "framer-motion";
import "./style.scss";
import Curve from "../components/curve/curve";
import { useTypewriter } from "react-simple-typewriter";

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Home() {
  const [text] = useTypewriter({
    words:["I Am Front-End Developer", "My Name is Ahmed Hany"],
    loop:{}
  }) 
  return (
    <Curve>
      <div className="main">
        <motion.h1
          className="heading"
          transition={{ staggerChildren: 0.1 }}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
          
        <div className="section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet nibh sit amet velit dignissim, non tempus nisl
            pellentesque. Praesent sagittis magna sit amet ex blandit, id
            pharetra lectus feugiat. Praesent sit amet congue ipsum, in ultrices
            neque. In dapibus in purus vitae dignissim. Quisque molestie
            ullamcorper elementum. Sed sodales erat augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Duis aliquet quis lectus vitae
            venenatis. Aliquam erat volutpat. Nulla maximus sodales nibh dapibus
            congue. Integer nec pharetra felis, quis commodo elit. Fusce et
            aliquet neque. Vivamus leo diam, pharetra ut lorem eu, suscipit
            egestas ipsum. Aenean mauris ligula, laoreet ut volutpat sit amet,
            convallis et turpis.
          </p>

          <p>
            Quisque molestie ullamcorper elementum. Sed sodales erat augue.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet quis lectus vitae venenatis. Aliquam erat volutpat. Nulla
            maximus sodales nibh dapibus congue. Integer nec pharetra felis,
            quis commodo elit. Fusce et aliquet neque. Vivamus leo diam,
            pharetra ut lorem eu, suscipit egestas ipsum. Aenean mauris ligula,
            laoreet ut volutpat sit amet, convallis et turpis.
          </p>
        </div>
      </div>
    </Curve>
  );
}
