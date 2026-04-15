import Head from 'next/head';
import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";

import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/style.css";


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
      <Head>
        <title>Hadi Consultant Business</title>
        <meta name="author" content="Hadi Consultant" />
        <meta name="description" content="Hadi Consultant Business" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.ico" />
      </Head>
      <body className='index-one'>

        {children}



      </body>
    </html>
  );
}
