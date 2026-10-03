import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "LERIVO",
  description: "Create campaigns. Reward creators."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}