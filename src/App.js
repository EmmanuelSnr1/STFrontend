import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPortfolioPage from "./pages/MyPortfolioPage";
import StockDetailPage from "./pages/StockDetailPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import InsightsPage from "./pages/InsightsPage";
import NewsPage from "./pages/NewsPage";
import PageNotFound from "./pages/PageNotFound";
import { AuthContextProvider } from "./auth/AuthContext";
import { QueryClient, QueryClientProvider } from 'react-query';
import ProtectedRoute from '../src/components/ProtectedRoute'; // Adjust the path



function App() {


    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
        <>
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/my-portfolio" element={<MyPortfolioPage/>}/>
                        <Route path="/stock/:symbol" element={<StockDetailPage/>}/>
                        <Route path="/analytics" element={<AnalyticsPage/>}/>
                        <Route path="/insights" element={<InsightsPage/>}/>
                        <Route path="/news" element={<NewsPage/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
        </>
        </QueryClientProvider>
    );
}

export default App;
