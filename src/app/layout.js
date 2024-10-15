
import Navbar from "../Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "../app/context/AuthContext";
import { DarkModeProvider } from "./DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodie",
  description: "Get the best food in town.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <DarkModeProvider>
          <Navbar />
          {children}
          </DarkModeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}