import * as React from 'react';
declare const NavigationLinks: React.FC<NavigationLinksProps>;
interface NavigationLinksProps {
    /**
     * Navigation heading
     */
    heading: string;
    /**
     * Number of columns the links will split into
     */
    listColumns?: number;
    /**
     * Navigation links
     */
    children: React.ReactNode;
}
export default NavigationLinks;
