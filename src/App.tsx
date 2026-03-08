import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DataIntelligence from "./pages/DataIntelligence";
import Biostatistics from "./pages/Biostatistics";
import DataManagement from "./pages/DataManagement";
import HEOR from "./pages/HEOR";
import FlexibleFSP from "./pages/FlexibleFSP";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import WhyChooseUs from "./pages/WhyChooseUs";
import SuccessStories from "./pages/SuccessStories";
import SuccessfulProjects from "./pages/SuccessfulProjects";
import CustomerTestimonials from "./pages/CustomerTestimonials";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/data-intelligence" element={<DataIntelligence />} />
          <Route path="/services/biostatistics" element={<Biostatistics />} />
          <Route path="/services/data-management" element={<DataManagement />} />
          <Route path="/services/heor" element={<HEOR />} />
          <Route path="/flexible-fsp" element={<FlexibleFSP />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/success-stories/successful-projects" element={<SuccessfulProjects />} />
          <Route path="/success-stories/customer-testimonials" element={<CustomerTestimonials />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/news" element={<Insights />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
