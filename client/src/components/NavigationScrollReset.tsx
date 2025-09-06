import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Component that handles scrolling to the top of the page when navigation occurs
 */
const NavigationScrollReset = () => {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location]);
  
  return null; // This component doesn't render anything
};

export default NavigationScrollReset;