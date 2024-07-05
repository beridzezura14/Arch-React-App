import { useState } from "react"
// import { useState } from "react"
import { fadeIn} from "../variants"
import { motion } from "framer-motion"
import { opacity } from "../variants"
// import { bg } from "./assets"

import exterior_1 from "./assets/g1.jpg"
import interior_1 from "./assets/g2.jpg"
import land_1 from "./assets/g3.jpg"
import exterior_2 from "./assets/g4.jpg"
import interior_2 from "./assets/g5.jpg"
import interior_3 from "./assets/g6.jpg"
// import residence from "./assets/g7.jpg"

const galleryList = [
    {
        id: 1,
        category: "exterior",
        img: exterior_1,
        name: "California young menz club"
    },
    {
        id:2,
        category: "interior",
        img: interior_1,
        name: "This is Sunlight in the Room"
    },
    {
        id:3,
        category: "landscape",
        img: land_1,
        name: "Find your own self in vintage lake house"
    },
    {
        id:4,
        category: "exterior",
        img: exterior_2,
        name: "Well decor house in Sydney"
    },
    {
        id:5,
        category: "interior",
        img: interior_2,
        name: "Huge large area Bedroom"
    },
    {
        id:6,
        category: "interior",
        img: interior_3,
        name: "Clean water in the swiming pool"
    },
    {
        id:7,
        category: "residence",
        img: exterior_1,
        name: "Newyork golf club house"
    },
]

function Gallery() {
    const [item, setItem] = useState(galleryList)
    console.log(item)

    const menuItems = [ ...new Set(galleryList.map((value) => value.category))]

    const filterItems = (cat) => {
        const newItems = galleryList.filter((newVal) => newVal.category === cat)
        setItem(newItems)
    }

    return (
        <div  className="gallery">
            <motion.span
            variants={fadeIn('right', 0)}
            initial="hidden"
            whileInView={'show'}           
            className="absolute__text absolute__gallery">GALLERY</motion.span>
            <div className="project__gallery">
                <motion.h4
                variants={fadeIn('left', 0)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}              
                
                >PROJECT GALLERY</motion.h4>
                <motion.p
                 variants={opacity()}
                 initial="hidden"
                 whileInView={'show'}>We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion. We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion.  Mrittik for the betterment of our clients and our people.</motion.p>
            </div>
            <div className="buttons">
                <button onClick={() => setItem(galleryList)}>All</button>
                {
                    menuItems.map(x => <button onClick={() => filterItems(x)} key={x}>{x}</button>)
                }
            </div>
            <div className="items">
                {
                    item.map((item) => (
                        <motion.div
                        variants={fadeIn("up", 0)}
                        initial="hidden"
                        whileInView={'show'}
                        className="gallery__item" key={item.id}> 
                            <img src={item.img} alt={item.name} />
                            <div className="item__name">
                                <span>LAKE CABIN</span>
                                <div></div>
                                <h4>{item.name}</h4>
                                <a href="">MORE DETAILS</a>
                            </div>
                        </motion.div>
                    ))
            }
            </div>
        </div>
    )
}

export default Gallery


