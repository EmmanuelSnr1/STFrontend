import {Outlet} from 'react-router-dom'
import {Header} from "../components/Header";
import {ErrorBoundary} from "../components/ErrorBoundary";
import {Footer} from "../components/Footer";
import { AuthContextProvider } from "../auth/AuthContext";

export default function MainLayout() {
    return (
        <AuthContextProvider>
            <Header/>
            <ErrorBoundary>
                <Outlet/>
            </ErrorBoundary>
            <Footer/>
        </AuthContextProvider>
    );
}
