/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_links.scss
 */
import * as React from 'react';
export interface LinkProps {
    /** link contents */
    children: React.ReactNode;
    /** show link in a "muted" (grey) style */
    muted?: boolean;
    /** ensure link is shown in plain text colour */
    textColour?: boolean;
    /** ensure there is no "visited" style */
    noVisitedState?: boolean;
}
/**
 * Link/Anchor element.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/link
 * - https://design-system.service.gov.uk/styles/typography/#links
 */
export declare const Link: import("styled-components").StyledComponent<"a", any, LinkProps, never>;
export default Link;
