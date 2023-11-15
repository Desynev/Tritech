import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import "@/styles/globals.css"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>

      <Toaster
        toastOptions={{
          className: "!rounded-none",
        }}
      />
    </>
  )
}
