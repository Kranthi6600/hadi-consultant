import "../globals.css";

export const metadata = {
  title: "Hadi Consultant Business",
  description: "Hadi Consultant Business",
  icons: {
    icon: "/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='index-one'>
        {children}
      </body>
    </html>
  );
}
