import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
/**
 * For wrapping a set of radio buttons with a label, optional hint and optional error.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/multi-choice
 * - https://design-system.service.gov.uk/components/radios/
 */
export declare const MultiChoice: React.FC<MultiChoiceProps>;
export interface MultiChoiceProps extends WithWhiteSpaceProps {
    meta?: {
        error?: string | string[];
        touched?: boolean;
    };
    label: React.ReactNode;
    children: React.ReactNode;
    hint?: string;
}
export default MultiChoice;
