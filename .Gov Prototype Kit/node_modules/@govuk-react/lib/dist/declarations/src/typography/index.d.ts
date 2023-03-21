import { MEDIA_QUERY_PRINT } from '@govuk-react/constants';
export declare const textColour: {
    [x: string]: any;
    color: any;
};
export declare const textColor: {
    [x: string]: any;
    color: any;
};
export declare function common(fontFamily?: string): {
    fontFamily: string;
    WebkitFontSmoothing: string;
    MozOsxFontSmoothing: string;
    [MEDIA_QUERY_PRINT]: {
        fontFamily: string;
    };
};
export declare function responsive(size: number | string, overrideLineHeight?: number | string): {
    fontSize: string;
    lineHeight: string | number;
};
interface FontOptions {
    size?: number | string;
    weight?: string;
    tabular?: boolean;
    lineHeight?: number | string;
}
export declare function font({ size, weight, tabular, lineHeight }?: FontOptions): {
    fontSize: string;
    lineHeight: string | number;
    fontWeight: number;
    fontFamily: string;
    WebkitFontSmoothing: string;
    MozOsxFontSmoothing: string;
    [MEDIA_QUERY_PRINT]: {
        fontFamily: string;
    };
};
export {};
