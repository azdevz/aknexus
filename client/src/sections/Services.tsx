import { motion } from "framer-motion";
import { Link as WouterLink } from "wouter";
import { services } from "@/data/services";
import { ArrowRight, Check, Link, Laptop, Cloud, ListTodo, Brain, ShoppingCart, CreditCard } from "lucide-react";

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "Link":
      return <Link className="w-10 h-10" />;
    case "Laptop":
      return <Laptop className="w-10 h-10" />;
    case "Cloud":
      return <Cloud className="w-10 h-10" />;
    case "ListTodo":
      return <ListTodo className="w-10 h-10" />;
    case "Brain":
      return <Brain className="w-10 h-10" />;
    case "ShoppingCart":
      return <ShoppingCart className="w-10 h-10" />;
    case "CreditCard":
      return <CreditCard className="w-10 h-10" />;
    default:
      return <div className="w-10 h-10"></div>;
  }
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-medium">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-4">Our Technology Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon text-4xl text-secondary mb-6">
                <ServiceIcon name={service.iconName} />
              </div>
              <h3 className="text-xl font-bold font-poppins mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="text-accent mt-1 mr-2 w-4 h-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <WouterLink
                href={`/services/${service.slug}`}
                className="text-secondary hover:text-accent font-medium flex items-center transition"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </WouterLink>
            </motion.div>
          ))}
        </div>
        
        {/* Service CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="bg-secondary hover:bg-accent text-white px-8 py-4 rounded-md transition font-medium inline-block"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discuss Your Project With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
