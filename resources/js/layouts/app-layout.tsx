import FooterComponent from '@/components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <section {...props}>
        <HeaderComponent />
        {children}
        <FooterComponent />
    </section>
);
