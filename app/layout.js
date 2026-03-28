import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "DEVION",
  description:
    "Complete Courses for frontend, backend, and full-stack development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <PageTransition>{children}</PageTransition>

        <Footer />
      </body>
    </html>
  );
}
