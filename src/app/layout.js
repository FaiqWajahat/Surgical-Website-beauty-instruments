import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import StickyWhatsAppButton from "@/components/StickyWhatsappButton";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Trimzo Enterprises",
  description: "Trizm Enterprises, provides you high quality FDA approved surgical and beauty instruments",
  icons: {
    icon: "/favicon.svg", 
  },
};

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
        <Toaster/>
      </body>
    </html>
  );
}
