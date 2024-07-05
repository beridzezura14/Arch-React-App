import { fadeIn } from "../variants"
import { motion } from "framer-motion"


function Hero(){

    return (
        <>
            <div className="hero">
                <motion.div
                variants={fadeIn('right', 0)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
                className="hero__text">
                    <h1
                    >the future architecture is here </h1>
                    <p>Architecture details  &ndash;  <a href="">Click Here</a> </p>
                </motion.div>
                <motion.span
                variants={fadeIn('left', 0)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
                className="letter">A</motion.span>
            </div>
        </>
    )
}

export default Hero