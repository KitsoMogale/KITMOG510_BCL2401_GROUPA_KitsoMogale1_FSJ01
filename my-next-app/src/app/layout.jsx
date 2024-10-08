import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { SearchProvider } from "./components/SearchProvider";
import { FilterProvider, SortProvider } from "./components/FilterProvider";
import Filter from "./components/Filter";
import Sort from "./components/Sort";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Primary Meta Tags */}
        <title>BuyNext - Shop Now</title>
        <meta
          name="description"
          content="Shop the best products on our e-commerce platform. Find beauty products, electronics, and more with great deals and fast shipping."
        />
        <meta
          name="keywords"
          content="e-commerce, buy products online, beauty products, electronics, best prices"
        />
        <meta name="Kitso Mogale" content="BuyNext" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BuyNext - Shop Now" />
        <meta
          property="og:description"
          content="Discover the best products across categories, from beauty to electronics. Shop now at great prices."
        />
        <meta property="og:url" content="https://BuyNext-site.com" />

        {/* Twitter */}
        <meta property="twitter:title" content="BuyNext - Shop Now" />
        <meta
          property="twitter:description"
          content="Shop the best products on our e-commerce platform. Get the latest deals now."
        />
      </head>


      <body>
       <SearchProvider>
        <FilterProvider>
          <SortProvider>
      <Header/>
        {children}
  
      </SortProvider>
      </FilterProvider>
      </SearchProvider>
      </body>
    </html>
  );
}


