/**
 * ### References
 *
 * - https://govuk-elements.herokuapp.com/typography/#typography-body-copy
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
import type { ReactMarkdownProps } from 'react-markdown';
/**
 * Markdown Formatter.
 *
 * Supports bold, italic, links, inline code and block code in Markdown ONLY.
 * This is to ensure we follow GDS as closely as possible.
 * It is worth noting that GDS recommends avoiding bold and italics.
 *
 * Bold should be avoided in general as not only can it dilute the message, it will also
 * cause Screenreaders to increase the volume of any bold text to reflect the increase in
 * font-weight.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/paragraph
 * - https://design-system.service.gov.uk/styles/typography/
 */
export declare const Paragraph: React.FC<ParagraphProps & ReactMarkdownProps>;
export interface ParagraphProps extends WithWhiteSpaceProps, React.HTMLAttributes<HTMLDivElement> {
    /**
     * Text content supporting markdown
     */
    children?: string;
    /**
     * Is this paragraph supporting text for another element?
     */
    supportingText?: boolean;
    linkRenderer?: React.ElementType;
}
export default Paragraph;
