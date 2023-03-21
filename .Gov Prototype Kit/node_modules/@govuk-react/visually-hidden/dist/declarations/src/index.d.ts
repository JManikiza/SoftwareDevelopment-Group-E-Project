/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_visually-hidden.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/utilities/_visually-hidden.scss
 */
import * as React from 'react';
/**
 * Hide an element visually, but have it available for screen readers.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/visually-hidden
 */
export declare const VisuallyHidden: import("styled-components").StyledComponent<"span", any, VisuallyHiddenProps, never>;
export interface VisuallyHiddenProps {
    /**
     * Content to be hidden
     */
    children: React.ReactNode;
    /**
     * Allow component to be focusable, and thus become visible
     */
    focusable?: boolean;
    /**
     * Set styles with `!important`
     */
    important?: boolean;
}
export default VisuallyHidden;
