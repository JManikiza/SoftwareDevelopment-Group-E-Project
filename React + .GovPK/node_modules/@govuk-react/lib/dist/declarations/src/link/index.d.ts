import type { CSSObject } from 'styled-components';
export declare function common(fontFamily?: string): [CSSObject, CSSObject];
export declare const styleDefault: {
    ':link': {
        color: any;
    };
    ':visited': {
        color: any;
    };
    ':hover': {
        color: any;
    };
    ':active': {
        color: any;
    };
    ':focus': {
        color: any;
    };
};
export declare const styleMuted: {
    '&:link, &:visited, &:hover, &:active': {
        color: any;
    };
    '&:focus': {
        color: any;
    };
};
export declare const styleText: {
    '&:link, &:visited, &:hover, &:active, &:focus': {
        [x: string]: any;
        color: any;
    };
};
export declare const styleNoVisitedState: {
    ':link': {
        color: any;
    };
    ':visited': {
        color: any;
    };
    ':hover': {
        color: any;
    };
    ':active': {
        color: any;
    };
    ':focus': {
        color: any;
    };
};
export declare const printFriendly: CSSObject;
