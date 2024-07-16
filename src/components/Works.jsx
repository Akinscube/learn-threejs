import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Grid } from "@mui/material";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <Grid item md={6} sm={12}>
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div //Tilt
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex gap-[4px] pt-[4px] pr-[4px] justify-end card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              className="bg-[#D9772E1f] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(live_link, "_blank")}
            >
              <img
                src={live}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] ">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p className={`text-[14px] ${tag.color}`} key={tag.name}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
    </Grid>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

    <div className="flex justify-between gap-20">
      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          These showcased projects offer a glimpse into my skills and experience
          through tangible real-world examples. Each project provides a concise
          overview, complete with links to code repositories and live demos.
          These examples illustrate my proficiency in tackling intricate
          challenges, adapting to diverse technologies, and adept project
          management.
        </motion.p>
      </div>
      <div className="flex flex-row justify-end flex-wrap  gap-x-8" >
      {technologies.map(technology => (
        <div className="flex items-center gap-2 text-[#ffffffa1] hover:text-[#fff] justify-between" key={technology.name}>
          <img src={technology.icon} alt="" className="w-[30px] max-h-[30px]"/>
          <p className="m-0 font-bold text-[11px]  uppercase">{technology.name}</p>
        </div>
      ))}
    </div>
      </div>
      <Grid container spacing={4} className="" style={{marginTop: '40px'}}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </Grid>
    </>
  );
};

export default SectionWrapper(Works, "");
