import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import StickyWhatsAppButton from "@/components/StickyWhatsappButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="mb-28">
          <Navbar />
        </header>
        {children}

        <footer>
          <StickyWhatsAppButton />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
