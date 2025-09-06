import { useParams, useLocation, Link } from 'wouter';
import { services } from '@/data/services';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Link as LinkIcon, Laptop, Cloud, ListTodo, Brain, ShoppingCart, CreditCard } from 'lucide-react';
import { useEffect } from 'react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const [, setLocation] = useLocation();
  
  // Find service by slug
  const service = services.find(s => s.slug === slug);
  
  useEffect(() => {
    if (service) {
      // Update document title for SEO
      document.title = `${service.title} - AK Nexus FZ LLC`;
      
      // Create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', `${service.description} Learn how AK Nexus can help with your ${service.title.toLowerCase()} needs.`);
      
      // Add Open Graph tags for better social sharing
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', `${service.title} - AK Nexus FZ LLC`);
      
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', service.description);
      
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', `https://aknexus.co/services/${service.slug}`);
      
      let ogType = document.querySelector('meta[property="og:type"]');
      if (!ogType) {
        ogType = document.createElement('meta');
        ogType.setAttribute('property', 'og:type');
        document.head.appendChild(ogType);
      }
      ogType.setAttribute('content', 'website');
    }
    
    // Cleanup function
    return () => {
      document.title = 'AK Nexus FZ LLC - Technology Services';
      
      // Reset meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'AK Nexus FZ LLC delivers cutting-edge technology services in Blockchain, Metaverse, SaaS development, and Project Management solutions for businesses worldwide.');
      }
    };
  }, [service]);
  
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="mb-8">The service you're looking for doesn't exist.</p>
        <Button 
          onClick={() => setLocation('/')}
          className="bg-secondary hover:bg-accent"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <Link href="/#services" className="inline-flex items-center text-secondary hover:text-accent mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mr-4">
                  {service.iconName === "Link" && <LinkIcon size={28} />}
                  {service.iconName === "Laptop" && <Laptop size={28} />}
                  {service.iconName === "Cloud" && <Cloud size={28} />}
                  {service.iconName === "ListTodo" && <ListTodo size={28} />}
                  {service.iconName === "Brain" && <Brain size={28} />}
                  {service.iconName === "ShoppingCart" && <ShoppingCart size={28} />}
                  {service.iconName === "CreditCard" && <CreditCard size={28} />}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-poppins">{service.title}</h1>
              </div>
              
{service.slug === 'digital-banking-solution-uae' ? (
                <div>
                  <p className="text-lg text-gray-700 mb-8">
                    AK Nexus offers fully customized digital banking solutions for startups, SMEs, and financial institutions in the UAE. 
                    We handle the entire lifecycle—from compliance and licensing guidance to building secure, scalable, and user-friendly platforms. 
                    Our technology meets UAE Central Bank, ADGM, and FSRA requirements, enabling you to launch your fintech service with confidence.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-6 font-poppins">Key Features</h2>
                  <div className="grid grid-cols-1 gap-6 mb-10">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 rounded-full bg-secondary/10 p-2">
                        <Check className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">IBAN Accounts for Businesses & Individuals</h3>
                        <p className="text-gray-600">
                          Open and manage UAE-compliant IBAN accounts with instant onboarding and KYC integration.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 rounded-full bg-secondary/10 p-2">
                        <Check className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Fiat On-Ramp & Off-Ramp for AED, USD, EUR</h3>
                        <p className="text-gray-600">
                          Seamlessly handle deposits and withdrawals across major currencies with integrated payment processing.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 rounded-full bg-secondary/10 p-2">
                        <Check className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">UAE Licensing Guidance (Central Bank, ADGM, FSRA)</h3>
                        <p className="text-gray-600">
                          Navigate local regulatory requirements with our licensing and compliance consultancy.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 rounded-full bg-secondary/10 p-2">
                        <Check className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">API Integration with Payment Gateways</h3>
                        <p className="text-gray-600">
                          Connect with PayTabs, Network International, Stripe UAE, and more for instant payment capability.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 rounded-full bg-secondary/10 p-2">
                        <Check className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">White-Label Mobile & Web Banking Apps</h3>
                        <p className="text-gray-600">
                          Fully branded apps with multi-language support, biometric login, and instant notifications.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-4 font-poppins">Why Choose AK Nexus</h2>
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Local Expertise:</span> Deep understanding of UAE fintech regulations and market dynamics.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">End-to-End Service:</span> From legal setup to platform launch and maintenance.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Scalable Technology:</span> Future-proof architecture ready for expansion.
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold mb-3 font-poppins">Ready to Launch Your Digital Banking Platform?</h3>
                    <p className="text-gray-700 mb-4">
                      Get started with UAE-compliant digital banking solutions tailored to your business needs.
                    </p>
                    <Link href="/#contact">
                      <button className="bg-secondary hover:bg-accent text-white px-8 py-3 rounded-md transition font-medium">
                        Contact Us Today
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-lg text-gray-700 mb-8">{service.description}</p>
                  
                  <h2 className="text-2xl font-semibold mb-4 font-poppins">What We Offer</h2>
                  <p className="text-gray-700 mb-6">
                    Our {service.title} service provides comprehensive solutions for businesses of all sizes. 
                    We leverage cutting-edge technology and industry best practices to deliver exceptional results.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 rounded-full bg-secondary/10 p-1">
                          <Check className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{feature}</h3>
                          <p className="text-gray-600 text-sm">
                            We provide expert {feature.toLowerCase()} solutions tailored to your specific business requirements.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-4 font-poppins">Our Approach</h2>
                  <p className="text-gray-700 mb-6">
                    At AK Nexus, we take a collaborative approach to {service.title.toLowerCase()}. Our team works closely with you to understand your unique challenges and objectives, developing tailored solutions that drive real business value.
                  </p>
                  <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
                    <li>Comprehensive initial consultation to understand your needs</li>
                    <li>Detailed planning and strategy development</li>
                    <li>Transparent implementation process with regular updates</li>
                    <li>Thorough testing and quality assurance</li>
                    <li>Ongoing support and maintenance</li>
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 sticky top-24"
            >
              <h3 className="text-xl font-semibold mb-4 font-poppins">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Contact us today to discuss how our {service.title} service can help your business grow.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-3" />
                  <span>Customized solutions for your business</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-3" />
                  <span>Expert team with proven experience</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-3" />
                  <span>Transparent pricing and timelines</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-3" />
                  <span>Ongoing support and maintenance</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/#contact">
                  <Button className="w-full bg-secondary hover:bg-accent">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;