/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/phase-banner
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
/**
 * Use the phase banner component to show users your service is still being worked on.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/phase-banner
 * - https://design-system.service.gov.uk/components/phase-banner/
 */
export declare const PhaseBanner: React.FC<PhaseBannerProps>;
export interface PhaseBannerProps extends WithWhiteSpaceProps {
    /** Children text and links */
    children: React.ReactNode;
    /** Alpha or beta banner */
    level: string;
}
export default PhaseBanner;
