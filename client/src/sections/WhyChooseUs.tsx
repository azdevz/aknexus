import { motion } from "framer-motion";
import { LightbulbIcon, Users, Settings } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
              Your Partner in Digital Transformation
            </h2>
            <p className="text-gray-600 mb-8">
              AK Nexus FZ LLC combines technical expertise with strategic thinking to deliver 
              innovative technology solutions that drive business growth and competitive advantage.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-secondary text-white">
                    <LightbulbIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold font-poppins">Innovative Approach</h3>
                  <p className="text-gray-600 mt-2">We embrace cutting-edge technologies and methodologies to solve complex business challenges.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-secondary text-white">
                    <Users />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold font-poppins">Expert Team</h3>
                  <p className="text-gray-600 mt-2">Our team consists of skilled professionals with deep expertise in various technology domains.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-secondary text-white">
                    <Settings />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold font-poppins">Customized Solutions</h3>
                  <p className="text-gray-600 mt-2">We tailor our services to meet your specific business requirements and objectives.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Technology team collaboration" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
