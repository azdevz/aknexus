import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold font-poppins flex items-center mb-6">
              <span className="text-secondary">AK</span>NEXUS
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative technology solutions in Blockchain, Metaverse, SaaS, and Project Management.
            </p>
            <div className="flex space-x-4">
              <div className="group relative">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.7 3.5H4.3C3.582 3.5 3 4.082 3 4.8v14.4c0 0.718 0.582 1.3 1.3 1.3h15.4c0.718 0 1.3-0.582 1.3-1.3V4.8c0-0.718-0.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574c-0.857 0-1.549-0.694-1.549-1.548 0-0.855 0.691-1.548 1.549-1.548 0.854 0 1.547 0.694 1.547 1.548 0 0.855-0.692 1.548-1.547 1.548zm11.335 9.764h-2.669v-4.177c0-0.998-0.017-2.278-1.388-2.278-1.389 0-1.601 1.086-1.601 2.206v4.25h-2.667v-8.59h2.559v1.174h0.037c0.355-0.675 1.227-1.387 2.526-1.387 2.704 0 3.203 1.779 3.203 4.092v4.711z"></path>
                  </svg>
                </a>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                  Coming Soon
                </div>
              </div>
              <div className="group relative">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.023 10.023 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.901 4.901 0 01-2.228-.616v.06a4.921 4.921 0 003.946 4.827 4.9 4.9 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a10.076 10.076 0 002.446-2.548l-.047-.02z"></path>
                  </svg>
                </a>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                  Coming Soon
                </div>
              </div>
              <div className="group relative">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                  Coming Soon
                </div>
              </div>
              <div className="group relative">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold font-poppins mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/blockchain-solutions" className="text-gray-400 hover:text-white transition">Blockchain Solutions</Link></li>
              <li><Link href="/services/metaverse-development" className="text-gray-400 hover:text-white transition">Metaverse Development</Link></li>
              <li><Link href="/services/saas-development" className="text-gray-400 hover:text-white transition">SaaS Applications</Link></li>
              <li><Link href="/services/project-management" className="text-gray-400 hover:text-white transition">Project Management</Link></li>
              <li><Link href="/services/agentic-ai-solutions" className="text-gray-400 hover:text-white transition">Agentic AI Solutions</Link></li>
              <li><Link href="/services/ecommerce-business" className="text-gray-400 hover:text-white transition">Ecommerce Business</Link></li>
              <li><Link href="/services/digital-banking-solution-uae" className="text-gray-400 hover:text-white transition">Digital Banking Solution</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition">Consulting Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold font-poppins mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold font-poppins mb-6">Our Offices</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">UAE Office</h4>
                <div className="rounded-lg overflow-hidden shadow-lg mb-3">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.4052683977186!2d55.78371787589538!3d25.664998266674663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60bee567a253b%3A0x80fd444807765d7!2sRAKEZ%20Compass%20Coworking%20Centre!5e0!3m2!1sen!2sae!4v1684938745123!5m2!1sen!2sae" 
                    width="100%" 
                    height="140" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AK Nexus UAE Location"
                    className="w-full"
                  ></iframe>
                </div>
                <p className="text-gray-400 text-sm mb-1">AK NEXUS FZ LLC</p>
                <p className="text-gray-400 text-sm mb-1">RAKEZ Compass Coworking Centre</p>
                <p className="text-gray-400 text-sm mb-2">Ras Al Khaimah, UAE</p>
                <p className="text-gray-400 text-sm">+971 66 78 3871</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-white mb-2">USA Office</h4>
                <p className="text-gray-400 text-sm mb-1">AK NEXUS LLC</p>
                <p className="text-gray-400 text-sm mb-1">30 N Gould St Ste R</p>
                <p className="text-gray-400 text-sm mb-2">Sheridan, WY 82801</p>
                <p className="text-gray-400 text-sm">+1 307 403 0755</p>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AK Nexus FZ LLC. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
