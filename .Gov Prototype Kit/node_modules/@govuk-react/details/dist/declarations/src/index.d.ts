/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/details/_details.scss
 */
import * as React from 'react';
/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/details
 * - https://design-system.service.gov.uk/components/details/
 */
export declare const Details: React.FC<DetailsProps>;
export interface DetailsProps {
    /** The content that will be displayed when details are revealed */
    children?: React.ReactNode;
    /** Flag to indicate whether to show component open by default */
    open?: boolean;
    /** Text for the details summary link e.g. Help with nationality */
    summary: React.ReactNode;
}
export default Details;
