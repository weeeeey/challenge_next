import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        // QueryClientProvider로 인해 모든 페이지, 컴포넌트에서 queryClient에 접근이 가능해진다.
        <QueryClientProvider client={queryClient}>
            <div className="bg-white h-screen max-w-xl mx-auto">
                <Component {...pageProps} />
                {/* devTool 설치. 화면 좌측하단 로고를 누르면 개발툴을 볼수 있다. 개발환경에서만 활성화 */}
                <ReactQueryDevtools initialIsOpen={false} />
            </div>
        </QueryClientProvider>
    );
}
