import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope,FaTwitter } from "react-icons/fa";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomePage() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (

<div class="bg-gradient-to-r from-green-600 via-red-800 to-orange-500 min-h-screen">  

<header className="bg-white shadow">
  <nav className="container mx-auto px-6 py-3 flex flex-wrap justify-between items-center">
    <div className="flex items-center">
      <a className="text-gray-800 text-xl font-bold hover:text-gray-700 mr-4" href="#">My Portfolio</a>
    </div>
    <div className="flex mt-4 md:mt-0">
      <a className="py-2 px-4 text-gray-800 font-bold hover:text-gray-700 mr-4" href="#">Home</a>
      <a className="py-2 px-4 text-gray-800 font-bold hover:text-gray-700 mr-4" href="#">About</a>
      <a className="py-2 px-4 text-gray-800 font-bold hover:text-gray-700 mr-4" href="#">Projects</a>
      <a className="py-2 px-4 text-gray-800 font-bold hover:text-gray-700 mr-4" href="#">Contact</a>
      <div className="flex items-center">
        <div className="ml-4">
          <a className="text-blue-700 hover:text-blue-500" href="https://www.linkedin.com/in/bikash-singh-410204aa/">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="ml-4">
          <a className="text-red-700 hover:text-blue-500" href="blackhatsys@gmail.com">
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="ml-4">
          <a className="text-gray-700 hover:text-gray-500" href="https://github.com/BikashSingh-GitHub">
            <FaGithub size={24} />
          </a>
        </div>
        <div className="ml-4">
          <a className="text-blue-700 hover:text-blue-500" href="https://twitter.com/BikashSinghTwit">
            <FaTwitter size={24} />
          </a>
        
        </div>
      </div>
    </div>
  </nav>
</header>

      <main className="container mx-auto mt-10 px-6">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
      >
        Hi, I'm Bikash Singh
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl lg:text-2xl font-serif text-white"
      >
        I'm an experienced React developer with a passion for creating stunning UI designs. I specialize in building responsive and scalable applications using modern React libraries and frameworks. I'm skilled in transforming complex ideas into visually appealing designs, and I'm always up for a challenge. Let's work together to bring your project to life!
      </motion.p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex flex-col md:flex-row"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md md:mr-4 mb-4 md:mb-0"
          href="https://github.com/BikashSingh-GitHub?tab=repositories"
        >
          View My Work
        </motion.a>
      </motion.div>
    </div>
    <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
      <motion.img
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full sm:w-4/2 md:w-full lg:w-4/5 xl:w-4/6 h-auto border-4 border-gray-500 rounded-full sm:float-left"
        src="https://media.licdn.com/dms/image/D4D03AQH65V_l1i0v2Q/profile-displayphoto-shrink_800_800/0/1676320463598?e=1684972800&v=beta&t=3owQTPHHKHBgoho9tk-o1p2T_ufvxdzbWVNlVfiSQIk"
        alt="[Insert alternate text for your profile picture]"
      />
      
    </div>
  </div>
</main>






</div>

);
}

export default HomePage;