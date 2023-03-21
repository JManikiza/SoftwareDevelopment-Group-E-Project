/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/tag/_tag.scss
 */
/**
 * Tag tints as defined by GDS
 *
 * - https://design-system.service.gov.uk/components/tag/#additional-colours
 */
declare const TAG_TINTS: {
    SOLID: {
        background: any;
        text: any;
    };
    GREY: {
        background: string;
        text: string;
    };
    GREEN: {
        background: string;
        text: string;
    };
    TURQUOISE: {
        background: string;
        text: string;
    };
    BLUE: {
        background: string;
        text: string;
    };
    PURPLE: {
        background: string;
        text: string;
    };
    PINK: {
        background: string;
        text: string;
    };
    RED: {
        background: string;
        text: string;
    };
    ORANGE: {
        background: string;
        text: string;
    };
    YELLOW: {
        background: string;
        text: string;
    };
};
/**
 * Use the tag component to show users the status of something.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/tag
 * - https://design-system.service.gov.uk/components/tag/
 *
 */
export declare const Tag: import("styled-components").StyledComponent<"strong", any, TagProps, never>;
export interface TagProps {
    /**
     * Deprecated: use grey tint instead
     */
    inactive?: boolean;
    /**
     * Tag tint
     */
    tint?: keyof typeof TAG_TINTS;
    /**
     * Custom colour to override the tag background color
     */
    backgroundColor?: string;
    /**
     * Custom colour to override the tag text color
     */
    color?: string;
}
export default Tag;
