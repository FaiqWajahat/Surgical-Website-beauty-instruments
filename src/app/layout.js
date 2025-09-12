import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import StickyWhatsAppButton from "@/components/StickyWhatsappButton";

export const metadata = {
  title: "Trimzo Enterprises",
  description: "Awesome Next.js site",
  icons: {
    icon: "/favicon.svg", // can also be .png or .svg
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
      </body>
    </html>
  );
}
