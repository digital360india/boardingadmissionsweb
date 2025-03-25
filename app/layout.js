// import { Barlow, Inter, Jost, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { UserProvider } from "@/userProvider";
import Head from "next/head"; // Import Head for adding elements to the head section

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  icons: [{ rel: "icon", url: "./images/navbar.svg" }],
  title: "Get Admissions in Top Boarding Schools  | Admission 2025-26",
  description:
    "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
  keywords:
    "Boarding School Admissions,  Boarding School consultancy, School consultancy, Boarding Admissions, Boarding School Entrance Prep, Welham Girls admission, Mayo Girls Admissions, Bishop Cotton Admission, Welham Boys Admission ",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Get Admissions in Top Boarding Schools | Admission 2025-26",
    description:
      "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
    url: "https://www.boardingadmissions.com/",
    siteName: "Boarding Admissions",
    images: [
      {
        url: "https://www.boardingadmissions.com/welhamstudent.png",
        width: 800,
        height: 600,
        alt: "Welham Student",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content={metadata.viewport} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta
          name="google-site-verification"
          content="e2d7uybW-qYP1CRxNzoD2b3btePllT2VMs0_XqwZIGo"
        />
        <title>{metadata.title}</title>

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MR66K9GZ');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XHSL8SZLKJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XHSL8SZLKJ');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1033752393439199');
            fbq('track', 'PageView');
            `,
          }}
        />

        {/* Smartlook */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            window.smartlook||(function(d) {
              var o = smartlook = function(){ o.api.push(arguments) },
                  h = d.getElementsByTagName('head')[0];
              var c = d.createElement('script');
              o.api = new Array();
              c.async = 1;
              c.type = 'text/javascript';
              c.charset = 'utf-8';
              c.src = 'https://web-sdk.smartlook.com/recorder.js';
              h.appendChild(c);
            })(document);
            smartlook('init', '27d0790b98d4a90284e810130cb00bc23e87bf00', { region: 'eu' });
            `,
          }}
        />

        {/* Google Ads Conversion Tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10787874522"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10787874522');
            `,
          }}
        />
        {/* End Google Ads Conversion Tracking */}
      </head>

      <body className={`${poppins.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MR66K9GZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1033752393439199&ev=PageView&noscript=1"
          />
        </noscript>

        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
