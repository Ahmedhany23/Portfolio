import React from "react";
import { motion } from "framer-motion";
import "./style.scss";
import { expand,opacity } from "./anim";
const anim = (variants, custom=null) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};

const nbOfColumns = 5;
export default function Stairs({ children }) {
  return (

    <div className='page stairs'>

        <motion.div {...anim(opacity)} className='transition-background'/>

        <div className='transition-container'>

            {

                [...Array(nbOfColumns)].map( (_, i) => {

                    return (

                        <motion.div key={i} {...anim(expand, nbOfColumns - i)}/>

                    ) 

                })

            }

        </div>

        {

            children

        }

    </div>

)
}
