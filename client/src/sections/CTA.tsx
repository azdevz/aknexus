import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold font-poppins text-white mb-6">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss how our expertise in Blockchain, Metaverse, SaaS, and Project Management 
            can help you achieve your business goals.
          </p>
          <a 
            href="#contact" 
            className="bg-white text-secondary hover:bg-accent hover:text-white px-8 py-4 rounded-md transition font-medium inline-block"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
