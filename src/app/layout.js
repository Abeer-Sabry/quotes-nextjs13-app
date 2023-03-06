import "../styles/globals.css";

export const metadata = {
  title: "quotes App",
  description: "quotes ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
