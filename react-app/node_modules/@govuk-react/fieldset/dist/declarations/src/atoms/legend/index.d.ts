import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
declare const Legend: React.FC<LegendProps>;
interface LegendProps extends WithWhiteSpaceProps {
    children: React.ReactNode;
    isPageHeading?: boolean;
    size?: string | number;
}
export default Legend;
