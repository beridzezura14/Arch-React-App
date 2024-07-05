import abouteImg from "./assets/about.jpg"
import { fadeIn} from "../variants"
import { opacity } from "../variants"
import { motion } from "framer-motion"



function About(){
    return(
        <>
            <div className="about">
                <motion.span
                variants={fadeIn('right', 0)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}               
                
                className="absolute__text">ABOUT</motion.span>


                <motion.img
                variants={opacity()}
                initial="hidden"
                whileInView={'show'}
                // viewport={{once: false, amount: 0.7}}                    
                src={abouteImg} alt="abouteImg" />
                <div className="about__text">
                    <motion.h3
                    variants={fadeIn('left', 0)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}>ABOUT MRITTIK</motion.h3>

                    <motion.h3
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}>ARCHITECTS</motion.h3>


                    <p
                    // variants={fadeIn('left', 0.4)}
                    // initial="hidden"
                    // whileInView={'show'}
                    // viewport={{once: false, amount: 0.7}}
                    >Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients.</p>
                    <div
                    // variants={fadeIn('left', 0.6)}
                    // initial="hidden"
                    // whileInView={'show'}
                    // viewport={{once: false, amount: 0.7}}
                    >
                        <a href="">READ MORE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About