import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "src/components/navbar";
import { navigationOptions } from "src/constants/navigtionOptions";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <UserProvider>
      <div className="container">
        <Navbar currentPath={currentPath} navOptions={navigationOptions} />

        <video autoPlay muted loop id="backgroundVideo">
          <source src="/video-1.mp4" type="video/mp4" />
        </video>

        <Component {...pageProps} />

        <footer>Graphy 2023</footer>
      </div>
    </UserProvider>
  );
}
