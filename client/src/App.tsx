import { Switch, Route } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";
import NavigationScrollReset from "@/components/NavigationScrollReset";
import ServiceDetail from "@/pages/ServiceDetail";
import PolicyPage from "@/pages/PolicyPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/privacy-policy" component={PolicyPage} />
      <Route path="/terms-of-service" component={PolicyPage} />
      <Route path="/cookie-policy" component={PolicyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationScrollReset />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
