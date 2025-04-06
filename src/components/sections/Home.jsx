import { RevealOnScroll } from "../RevealOnScroll"
export const Home = () => {

 return <section 
     id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
       <div className="z-10 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-purple-500  to-blue-600 bg-clip-text text-transparent leading-right text-center">
              Hi, I'm Subhadeep Paul </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-screen mx-auto">
              I am a MERN stack web developer with expertise in MongoDB, Express.js, React, and Node.js. I build scalable, responsive web applications, focusing on clean code and seamless user experiences. With a strong foundation in both front-end and back-end development, I deliver efficient, high-quality solutions that meet client needs and ensure performance and functionality. I am committed to continuous learning and applying best practices to every project.
              </p>
              <div className="flex justify-center space-x-4">
                  <a href="#projects" className="bg-gradient-to-r from-[#a129a5c5] via-blue-900 to-[#ea00ff71] px-4 py-2 rounded font-medium text-[#fbfafffa] transition relative overflow-hidden hover:-translate-y-0.5 hover:opacity-80">
                    View Projects
                  </a>
                  <a href="#contact" className="border border-blue-800/80 text-blue-500  px-4 py-2 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:opacity-80 hover:bg-blue-600/10">
                    Contact Me
                  </a>
              </div>
       </div>
          </RevealOnScroll>
        </section>
 

}