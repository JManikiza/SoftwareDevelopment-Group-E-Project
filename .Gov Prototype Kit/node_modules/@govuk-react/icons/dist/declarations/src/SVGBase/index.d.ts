import React, { SVGProps as SVGPropsBase } from 'react';
export interface SVGProps extends SVGPropsBase<SVGSVGElement> {
    children?: React.ReactNode;
    title?: string;
    fill?: string;
    width?: string;
}
declare const SVG: React.FC<SVGProps>;
export default SVG;
