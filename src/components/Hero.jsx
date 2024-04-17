import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profileImage } from "../assets";
import { useState } from "react";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("+2348130341622");
  const [isCopied, setIsCopied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const copyPhoneNumber = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };


  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }


  return (
    <section className="relative w-full pt-[40px] sm:pt-0 h-screen mx-auto">
      <div className="flex justify-center h-full items-center w-full">
        <div
          className={`${styles.paddingX} relative inset-0 flex-wrap  max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#D9772E]" />
              <div className="w-1 sm:h-80 h-28 violet-gradient " />
            </div>
            <div className="text-center mb-4 sm:mb-0 sm:text-left">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#D9772E]">Akin</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop user interfaces <br className="sm:block hidden" />{" "}
                and web applications.
              </p>
            </div>
          </motion.div>
          <div className="flip-profile rounded-full w-[100%] h-[387px] sm:w-[600px] sm:h-[600px]" onClick={handleFlip}>
            <motion.div
              className="flip-profile-inner"
              initial="initial"
              whileHover={{
                rotateY: 180,
                transition: { duration: 0.5 },
              }}
              // animate={{
              //   y: 0,
              //   opacity: 1,
              //   transition: {
              //     duration: 2,
              //     animationDirection: "normal",
              //     ease: "easeInOut",
              //   },
              // }}
        animate={width >= 991 ? "desktop" : "mobile"}
        variants={{
          initial: { y: -20, opacity: 0 },
          desktop: { y: 0, opacity: 1, transition: {
            duration: 2,
            animationDirection: "normal",
            ease: "easeInOut",
          }},
          mobile: { y: 0, opacity: 1, rotateY: isFlipped ? 180 : 360, transition: {
            duration: 0.6, animationDirection: "normal "
          } },  
        }}
        

              transition={{
                duration: 2,
                animationDirection: "normal",
                ease: "easeInOut",
              }}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              <div className="flip-profile-front">
                <img
                  src={profileImage}
                  className="w-[100%] h-auto sm:w-[600px] sm:h-[600px] rounded-full object-cover object-top"
                  alt=""
                />
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(17,18,19,0.025)",
                  backgroundImage:
                    "repeating-radial-gradient(circle at 0 0, transparent 0, rgba(0, 0, 0, 0.09) 32px), repeating-linear-gradient(rgba(255, 0, 102, 0.02), rgba(255, 0, 102, 0.02))",
                }}
                className="flip-profile-back text-center text-secondary flex flex-col justify-center items-center w-[100%] h-[387px] sm:w-[600px] sm:h-[600px] rounded-full"
              >
                <p className="">Hey there, I see you 😁</p>
                <p className="">You can reach me on:</p>
                <p
                  style={{ border: "1px solid #aaa6c3" }}
                  className=" mt-4 rounded-2xl px-[15px] py-[5px]"
                >
                  {phoneNumber}
                </p>
                <button
                  onClick={copyPhoneNumber}
                  style={{ background: isCopied ? "#D9772E" : "#aaa6c3" }}
                  className="py-2 px-5 text-xs mt-2 text-[#fff] w-fit shadow-md shadow-primary rounded-xl"
                >
                  {isCopied ? "copied!" : "copy"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#D9772E] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
