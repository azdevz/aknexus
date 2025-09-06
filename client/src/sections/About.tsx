import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business needs, challenges, and objectives through in-depth consultation."
    },
    {
      number: "02",
      title: "Strategy",
      description: "We develop a comprehensive strategy and roadmap tailored to your specific requirements."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our expert team executes the strategy using agile methodologies and best practices."
    },
    {
      number: "04",
      title: "Support",
      description: "We provide ongoing support, maintenance, and optimization to ensure long-term success."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
              We Are AK Nexus
            </h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision to bridge the gap between cutting-edge technology and business needs, 
              AK Nexus FZ LLC has established itself as a leading technology services provider specializing 
              in Blockchain, Metaverse, SaaS, and Project Management solutions.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced professionals brings together diverse expertise and a passion for 
              innovation to deliver solutions that drive digital transformation and create sustainable 
              business value for our clients across industries.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="text-accent mr-2 w-5 h-5" />
                <span>15+ Technology Experts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-accent mr-2 w-5 h-5" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-accent mr-2 w-5 h-5" />
                <span>Global Client Base</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-accent mr-2 w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-accent text-white px-6 py-3 rounded-md transition font-medium inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get to Know Us
            </a>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="AK Nexus team collaboration" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
        
        {/* Our Process */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins">Our Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We follow a structured approach to deliver successful technology solutions that align with your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <h4 className="text-xl font-bold font-poppins mb-2">{step.title}</h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
