import listLogo from "./assets/designLogo.svg"
import { fadeIn } from "../variants"
import { motion } from "framer-motion"

function Design(){

    const list = [
        {
            id: 1,
            number: "01",
            header: "URBAN DESIGNE",
            paragraph: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        },
        {
            id: 2,
            number: "02",
            header: "INTERIOR DESIGNE",
            paragraph: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        },
        {
            id: 3,
            number: "03",
            header: "LANDSCAPE DESIGNE",
            paragraph: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        }
    ]

    return (
        <>
            <div className="design">
                <motion.div
                variants={fadeIn('up', 0)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.5}}                
                
                className="design__item">
                    {
                    list.map((item) => 
                        <div className="item" key={item.id}> 
                            <span>{item.number}</span>
                            <img className="list__logo" src={listLogo} alt="" />
                            <h2>{item.header}</h2>
                            <p>{item.paragraph}</p>
                            <a className="arrow__link" href=""> &rarr; </a>
                        </div> )  
                    }
                </motion.div>
            </div>
        </>
    )
}

export default Design