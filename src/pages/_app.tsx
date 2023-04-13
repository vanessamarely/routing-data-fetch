import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, }: AppProps) {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
