import {Outlet} from 'react-router-dom'
import {Header} from "../components/Header";
import {ErrorBoundary} from "../components/ErrorBoundary";
import {Footer} from "../components/Footer";

export default function MainLayout() {

    return (
        <>
            <Header/>
            <ErrorBoundary>
                <Outlet/>
            </ErrorBoundary>
            <Footer/>
        </>
    );
}

