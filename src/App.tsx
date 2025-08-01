
import { HelmetProvider } from "react-helmet-async";
import { useDirection } from "./hooks/useDirection ";
import ScrollToTop from "./layouts/ScrollToTop";
import { useSignupModal } from "./hooks/useSignupModal";
import CoralySignupModal from "./components/home/hero/CoralySignupModal";
import AppRoutes from "./routes/AppRoutes";
import ContactModal from "./components/home/hero/ContactModal";
import { useContactUsModal } from "./hooks/useContactUsModal";

function App() {
  useDirection();
  const { isOpen, closeModal } = useSignupModal();
  const { isOpenContact, closeContactModal } = useContactUsModal();

  return <>
    <ScrollToTop />
    <HelmetProvider>
      <AppRoutes />
      <CoralySignupModal isOpen={isOpen} onClose={closeModal} />
      <ContactModal isOpen={isOpenContact} onClose={closeContactModal} />
    </HelmetProvider>
  </>
}
export default App;