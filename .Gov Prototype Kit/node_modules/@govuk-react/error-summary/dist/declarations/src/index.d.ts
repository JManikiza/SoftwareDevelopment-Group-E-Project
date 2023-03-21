/**
 * ### References:
 *
 * - https://govuk-elements.herokuapp.com/errors/#summarise-errors
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/error-summary
 */
import * as React from 'react';
export interface ErrorSummaryProps {
    /** onClick function to scroll the target element into view */
    onHandleErrorClick?: (targetName: string) => void;
    /** Heading text */
    heading?: string;
    /** Optional description of the errors */
    description?: string;
    /** Array of errors with text and target element name to scroll into view when clicked */
    errors?: {
        targetName?: string;
        text?: string;
    }[];
}
/**
 * Use this component at the top of a page to summarise any errors a user has made.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/error-summary
 * - https://design-system.service.gov.uk/components/error-summary/
 */
export declare const ErrorSummary: React.FC<ErrorSummaryProps>;
export default ErrorSummary;
