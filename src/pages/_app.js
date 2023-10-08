import { QueryClient, QueryClientProvider } from "react-query";


import '../styles/globals.css'; // Import your global styles
import styles from '../styles/Home.module.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
