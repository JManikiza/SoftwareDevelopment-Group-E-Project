import * as React from 'react';
declare const MetaLinks: React.FC<MetaLinksProps>;
interface MetaLinksProps {
    /**
     * Meta links
     */
    children: React.ReactNode;
    /**
     * Meta links heading (will be visually hidden)
     */
    heading: string;
}
export default MetaLinks;
