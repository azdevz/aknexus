import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-medium">Technology Solutions Provider</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mt-2 mb-6">
              Transforming Ideas Into <span className="text-secondary">Digital Reality</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              AK Nexus FZ LLC delivers cutting-edge technology services in Blockchain, Metaverse, 
              SaaS development, and Project Management solutions for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-secondary hover:bg-accent text-white px-6 py-3 rounded-md transition font-medium text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Our Services
              </a>
              <a 
                href="#contact" 
                className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-md transition font-medium text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Digital technology concept" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
