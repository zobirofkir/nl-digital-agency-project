import FooterComponent from '@/components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    headerTextColor?: 'black' | 'white';
    footerBgColor?: 'black' | 'white';
    footerTextColor?: 'white' | 'black';
}

export default ({ children, breadcrumbs, headerTextColor, footerBgColor = 'white', footerTextColor = 'black', ...props }: AppLayoutProps) => (
    <section
        {...props}
        className={`flex flex-col min-h-screen ${props?.className || ''}`}
    >
        {
            /**
             * Header Component
             */
        }
        <HeaderComponent textColor={headerTextColor} />

        {
            /**
             * Mail Pages
             */
        }
        <main className="flex-1">
            {children}
        </main>

        {
            /**
             * Footer Component
             */
        }
        <FooterComponent bgColor={footerBgColor} textColor={footerTextColor} />
    </section>
);
