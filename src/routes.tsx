import {createBrowserRouter} from 'react-router';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProductsServices from './pages/ProductsServices';
import InvestmentOpportunities from './pages/InvestmentOpportunities';
import WhatFranchiseesDo from './pages/WhatFranchiseesDo';
import FranchiseOpportunity from './pages/FranchiseOpportunity';
import ContactUs from './pages/ContactUs';
import WithTitle from './components/WithTitle';
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsConditions from "./pages/TermsConditions.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: (
                    <WithTitle title="Home">
                        <Home/>
                    </WithTitle>
                ),
            },
            {
                path: 'about-us',
                element: (
                    <WithTitle title="About Us">
                        <AboutUs/>
                    </WithTitle>
                ),
            },
            {
                path: 'products-services',
                element: (
                    <WithTitle title="Products & Services">
                        <ProductsServices/>
                    </WithTitle>
                ),
            },
            {
                path: 'investment-opportunities',
                element: (
                    <WithTitle title="Investment Opportunities">
                        <InvestmentOpportunities/>
                    </WithTitle>
                ),
            },
            {
                path: 'what-franchisees-do',
                element: (
                    <WithTitle title="What Franchisees Do">
                        <WhatFranchiseesDo/>
                    </WithTitle>
                ),
            },
            {
                path: 'franchise-opportunity',
                element: (
                    <WithTitle title="Franchise Opportunity">
                        <FranchiseOpportunity/>
                    </WithTitle>
                ),
            },
            {
                path: 'contact-us',
                element: (
                    <WithTitle title="Contact Us">
                        <ContactUs/>
                    </WithTitle>
                ),
            },
            {
                path: 'privacy-policy',
                element: (
                    <WithTitle title="Privacy Policy">
                        <PrivacyPolicy/>
                    </WithTitle>
                ),
            },
            {
                path: 'terms-conditions',
                element: (
                    <WithTitle title="Terms and Conditions">
                        <TermsConditions/>
                    </WithTitle>
                ),
            },
        ],
    },
]);

export default router;
