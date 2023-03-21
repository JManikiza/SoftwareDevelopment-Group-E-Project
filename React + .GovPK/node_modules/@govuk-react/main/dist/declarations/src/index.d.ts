import * as React from 'react';
/**
 * Provides a container which aligns to the TopNav component, is centered, and provides top padding.
 *
 * Note, this equivalent to 'width-container' from govuk-frontend.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/main
 * - https://design-system.service.gov.uk/styles/layout/#page-wrappers
 */
export declare const Main: React.FC<MainProps>;
export interface MainProps {
    /**
     * Child nodes for the page being built
     */
    children?: React.ReactNode;
}
export default Main;
