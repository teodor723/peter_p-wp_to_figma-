// components/WithTitle.tsx
import {useEffect, ReactNode} from 'react';
import {useLocation} from "react-router";

interface WithTitleProps {
    title: string;
    children: ReactNode;
}

const WithTitle: React.FC<WithTitleProps> = ({title, children}) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'}); // or just window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
};

export default WithTitle;
