export const metadata = {
  title: "LERIVO",
  description: "Create campaigns. Reward creators."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}