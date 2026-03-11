import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/all.min.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/swiper.min.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/main.css";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--manrope",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--jakarta",
  display: "swap",
});

export const metadata = {
  title: "Aktivacity - AI-Powered Creativity in Motion.",
  description: "AI-Powered Creativity in Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicons/aktivacity-final.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="/favicons/aktivacity-final.png"
          type="image/png"
        />
      </head>


      <body
        className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}
      >
        {/* Example: site logo (inside page, not favicon) */}
        {/* <img
          src="/aktivacity-v2.png"
          alt="Aktivacity Logo"
          className="site-logo"
          style={{ borderRadius: "50%" }}
        /> */}


        {children}
      </body>
    </html>
  );
}
