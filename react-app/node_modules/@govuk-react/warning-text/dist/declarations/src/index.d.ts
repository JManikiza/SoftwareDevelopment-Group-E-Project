/**
 * ### References:
 *
 * - https://govuk-elements.herokuapp.com/typography/#typography-warning-text
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/warning-text
 */
import * as React from 'react';
/**
 * Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/warning-text
 * - https://design-system.service.gov.uk/components/warning-text/
 */
export declare const WarningText: React.FC<WarningTextProps>;
export interface WarningTextProps {
    /**
     * Warning text to be displayed
     */
    children: React.ReactNode;
}
export default WarningText;
