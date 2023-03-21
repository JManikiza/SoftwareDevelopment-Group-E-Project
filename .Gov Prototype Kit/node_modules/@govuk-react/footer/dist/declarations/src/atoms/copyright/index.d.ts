import * as React from 'react';
declare const Copyright: React.FC<CopyrightProps>;
export interface CopyrightProps {
    text?: string;
    image?: {
        src: string;
        width: number;
        height: number;
    };
    link?: string;
}
export default Copyright;
