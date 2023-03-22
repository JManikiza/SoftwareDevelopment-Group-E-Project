/**
 * ### References:
 *
 * - https://components.publishing.service.gov.uk/component-guide/document_list
 * - https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/docs/metadata.yml
 * - https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/metadata.raw.html.erb
 */
import * as React from 'react';
/**
 * An ordered list of documents including a document type, when updated and a link.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/document-footer-metadata
 * - https://components.publishing.service.gov.uk/component-guide/document_list
 */
export declare const DocumentFooterMetadata: React.FC<DocumentFooterMetadataProps>;
export interface DocumentFooterMetadataProps {
    /**
     * Array of JSX nodes to render underneath the `from:` title
     */
    from?: React.ReactNode[];
    /**
     * Array of JSX nodes to render underneath the `part of:` title
     */
    partOf?: React.ReactNode[];
    /**
     * Array of Objects for any additional items, each object should contain an `id`, `title` and `content` property
     */
    other?: {
        id?: number;
        title?: string;
        content?: React.ReactNode;
    }[];
}
export default DocumentFooterMetadata;
