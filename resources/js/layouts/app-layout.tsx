import FooterComponent from '@/components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <section
        {...props}
        className={`flex flex-col min-h-screen ${props?.className || ''}`}
    >
        <HeaderComponent />
        <main className="flex-1">
            {children}
        </main>
        <FooterComponent />
    </section>
);
