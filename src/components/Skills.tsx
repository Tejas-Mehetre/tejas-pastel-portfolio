import { motion } from 'framer-motion';
import BallCanvas from './canvas/Ball.jsx';
import SectionWrapper from '../hoc/SectionWrapper';
import { technologies } from '../constants';
import {styles} from '../styles'
import { textVariant } from '../utils/motion';
import nairobi from "../assets/backgrounds/nairobi.png"

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        {/* <p className="text-muted-foreground uppercase tracking-wider font-semibold text-sm mb-2">My skills</p> */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, '');