import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
function Horisontal() {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 10000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -8000]);

  return (
    <>
      <div className="text__scroll">
        <div className="row__1">
          <motion.p style={{ x: x1 }}>
            THE BEST ARCHITECTURAL COMPANY &diams; THE BEST ARCHITECTURAL
            COMPANY &diams; THE BEST ARCHITECTURAL COMPANY &diams; THE BEST
            ARCHITECTURAL COMPANY &diams; THE BEST ARCHITECTURAL COMPANY &diams;
            THE BEST ARCHITECTURAL COMPANY  &diams;
          </motion.p>
        </div>
        <div className="row__2">
          <motion.p style={{ x: x2 }}>
            THE BEST ARCHITECTURAL COMPANY &diams; THE BEST ARCHITECTURAL
            COMPANY &diams; THE BEST ARCHITECTURAL COMPANY &diams; THE BEST
            ARCHITECTURAL COMPANY &diams; THE BEST ARCHITECTURAL COMPANY &diams;
            THE BEST ARCHITECTURAL COMPANY  &diams;
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default Horisontal;
