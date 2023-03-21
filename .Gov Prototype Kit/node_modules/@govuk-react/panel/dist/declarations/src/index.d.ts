/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/panel
 */
import * as React from 'react';
/**
 * The panel component is a visible container used on confirmation or results pages to highlight important content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/panel
 * - https://design-system.service.gov.uk/components/panel/
 *
 */
export declare const Panel: React.FC<PanelProps>;
export interface PanelProps {
    /** Panel title text */
    title: string;
    /** Panel body text */
    children?: React.ReactNode;
}
export default Panel;
