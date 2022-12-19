import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="mt-10 max-w-xl mx-auto w-full h-[100vh]">
            <Component {...pageProps} />
        </div>
    );
}
