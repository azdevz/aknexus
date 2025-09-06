import { motion } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-medium">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries and technology domains.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Badge variant="outline" className={`px-3 py-1 ${item.badgeColor} text-xs font-medium rounded-full`}>
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <a href="#" className="text-secondary hover:text-accent font-medium flex items-center transition">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <a href="#" className="text-secondary hover:text-accent font-medium flex items-center justify-center transition">
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
