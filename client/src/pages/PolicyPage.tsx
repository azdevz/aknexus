import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

interface PolicyContent {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

const policies: Record<string, PolicyContent> = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'May 20, 2025',
    sections: [
      {
        heading: 'Introduction',
        content: [
          'At AK Nexus FZ LLC, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
          'This privacy policy applies to all personal data we process when you use or interact with our website, services, and applications.'
        ]
      },
      {
        heading: 'Information We Collect',
        content: [
          'Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).',
          'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:',
          '• Identity Data includes first name, last name, username or similar identifier.',
          '• Contact Data includes email address, telephone number, and address.',
          '• Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.',
          '• Usage Data includes information about how you use our website, products, and services.'
        ]
      },
      {
        heading: 'How We Use Your Information',
        content: [
          'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
          '• Where we need to perform the contract we are about to enter into or have entered into with you.',
          '• Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.',
          '• Where we need to comply with a legal obligation.',
          'We generally do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message.'
        ]
      },
      {
        heading: 'Data Security',
        content: [
          'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.',
          'We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.'
        ]
      },
      {
        heading: 'Your Legal Rights',
        content: [
          'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:',
          '• Request access to your personal data',
          '• Request correction of your personal data',
          '• Request erasure of your personal data',
          '• Object to processing of your personal data',
          '• Request restriction of processing your personal data',
          '• Request transfer of your personal data',
          '• Right to withdraw consent'
        ]
      },
      {
        heading: 'Contact Us',
        content: [
          'If you have any questions about this privacy policy or our privacy practices, please contact us at:',
          'AK Nexus FZ LLC',
          'T010090, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE',
          'Email: info@aknexus.co'
        ]
      }
    ]
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'May 20, 2025',
    sections: [
      {
        heading: 'Introduction',
        content: [
          'These terms and conditions outline the rules and regulations for the use of AK Nexus FZ LLC\'s website.',
          'By accessing this website, we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.'
        ]
      },
      {
        heading: 'License',
        content: [
          'Unless otherwise stated, AK Nexus FZ LLC and/or its licensors own the intellectual property rights for all material on our website. All intellectual property rights are reserved.',
          'You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms and conditions.'
        ]
      },
      {
        heading: 'Restrictions',
        content: [
          'You are specifically restricted from all of the following:',
          '• Publishing any website material in any other media',
          '• Selling, sublicensing and/or otherwise commercializing any website material',
          '• Publicly performing and/or showing any website material',
          '• Using this website in any way that is or may be damaging to this website',
          '• Using this website in any way that impacts user access to this website',
          '• Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity'
        ]
      },
      {
        heading: 'Your Content',
        content: [
          'In these terms and conditions, "Your Content" shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying Your Content, you grant AK Nexus FZ LLC a non-exclusive, worldwide, irrevocable, royalty-free sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.',
          'Your Content must be your own and must not be infringing on any third party\'s rights. AK Nexus FZ LLC reserves the right to remove any of Your Content from this website at any time without notice.'
        ]
      },
      {
        heading: 'No Warranties',
        content: [
          'This website is provided "as is," with all faults, and AK Nexus FZ LLC makes no express or implied representations or warranties, of any kind related to this website or the materials contained on this website.',
          'Additionally, nothing contained on this website shall be construed as providing advice to you.'
        ]
      },
      {
        heading: 'Limitation of Liability',
        content: [
          'In no event shall AK Nexus FZ LLC, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise.',
          'AK Nexus FZ LLC, including its officers, directors, and employees shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.'
        ]
      },
      {
        heading: 'Indemnification',
        content: [
          'You hereby indemnify to the fullest extent AK Nexus FZ LLC from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney\'s fees) arising out of or in any way related to your breach of any of the provisions of these terms.'
        ]
      },
      {
        heading: 'Governing Law & Jurisdiction',
        content: [
          'These terms will be governed by and construed in accordance with the laws of the United Arab Emirates, and you submit to the non-exclusive jurisdiction of the courts located in the United Arab Emirates for the resolution of any disputes.'
        ]
      }
    ]
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: 'May 20, 2025',
    sections: [
      {
        heading: 'What Are Cookies',
        content: [
          'Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.',
          'Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.'
        ]
      },
      {
        heading: 'How We Use Cookies',
        content: [
          'When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:',
          '• To enable certain functions of the website',
          '• To provide analytics',
          '• To store your preferences',
          '• To enable advertisements delivery, including behavioral advertising',
          'We use both session and persistent cookies on the website and we use different types of cookies to run the website.'
        ]
      },
      {
        heading: 'Types of Cookies We Use',
        content: [
          'Essential cookies: These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.',
          'Analytical/performance cookies: These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.',
          'Functionality cookies: These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.',
          'Targeting cookies: These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.'
        ]
      },
      {
        heading: 'Third-Party Cookies',
        content: [
          'In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.',
          'Third-party cookies are used for the following purposes:',
          '• To collect information about your browsing habits and serve you with relevant advertising',
          '• To understand how you interact with our website',
          '• To collect analytics data about the use of our website'
        ]
      },
      {
        heading: 'What Are Your Choices Regarding Cookies',
        content: [
          'If you\'d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.',
          'Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.'
        ]
      },
      {
        heading: 'Changes to This Cookie Policy',
        content: [
          'We may update our Cookie Policy from time to time. We advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Cookie Policy on this page.',
          'If you have any questions about our Cookie Policy, please contact us at info@aknexus.co.'
        ]
      }
    ]
  }
};

const PolicyPage = () => {
  // Determine policy type based on the URL path
  const [location] = useLocation();
  let policyType = 'privacy';
  
  if (location === '/terms-of-service') {
    policyType = 'terms';
  } else if (location === '/cookie-policy') {
    policyType = 'cookies';
  } else {
    policyType = 'privacy';
  }
  
  const policy = policies[policyType as keyof typeof policies];
  
  useEffect(() => {
    if (policy) {
      // Update document title for SEO
      document.title = `${policy.title} - AK Nexus FZ LLC`;
      
      // Create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', `${policy.title} for AK Nexus FZ LLC. Last updated: ${policy.lastUpdated}.`);
      
      // Add Open Graph tags for better social sharing
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', `${policy.title} - AK Nexus FZ LLC`);
      
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', `${policy.title} for AK Nexus FZ LLC. Last updated: ${policy.lastUpdated}.`);
      
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', `https://aknexus.co${location}`);
      
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
  }, [policy, policyType]);
  
  if (!policy) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Policy Not Found</h2>
        <p className="mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/">
          <button className="bg-secondary hover:bg-accent text-white px-6 py-2 rounded-md transition">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-secondary hover:text-accent mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4">{policy.title}</h1>
            <p className="text-gray-600 mb-8">Last Updated: {policy.lastUpdated}</p>
            
            <div className="prose prose-lg max-w-none">
              {policy.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 font-poppins">{section.heading}</h2>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 mb-4">{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PolicyPage;