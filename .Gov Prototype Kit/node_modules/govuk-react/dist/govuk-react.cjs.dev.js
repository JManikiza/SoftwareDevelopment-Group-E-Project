'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var backLink = require('@govuk-react/back-link');
var breadcrumbs = require('@govuk-react/breadcrumbs');
var button = require('@govuk-react/button');
var caption = require('@govuk-react/caption');
var checkbox = require('@govuk-react/checkbox');
var dateField = require('@govuk-react/date-field');
var details = require('@govuk-react/details');
var documentFooterMetadata = require('@govuk-react/document-footer-metadata');
var errorSummary = require('@govuk-react/error-summary');
var errorText = require('@govuk-react/error-text');
var fieldset = require('@govuk-react/fieldset');
var fileUpload = require('@govuk-react/file-upload');
var footer = require('@govuk-react/footer');
var formGroup = require('@govuk-react/form-group');
var globalStyle = require('@govuk-react/global-style');
var gridCol = require('@govuk-react/grid-col');
var gridRow = require('@govuk-react/grid-row');
var heading = require('@govuk-react/heading');
var hintText = require('@govuk-react/hint-text');
var input = require('@govuk-react/input');
var inputField = require('@govuk-react/input-field');
var insetText = require('@govuk-react/inset-text');
var label = require('@govuk-react/label');
var labelText = require('@govuk-react/label-text');
var leadParagraph = require('@govuk-react/lead-paragraph');
var link = require('@govuk-react/link');
var listItem = require('@govuk-react/list-item');
var loadingBox = require('@govuk-react/loading-box');
var main = require('@govuk-react/main');
var multiChoice = require('@govuk-react/multi-choice');
var orderedList = require('@govuk-react/ordered-list');
var page = require('@govuk-react/page');
var pagination = require('@govuk-react/pagination');
var panel = require('@govuk-react/panel');
var paragraph = require('@govuk-react/paragraph');
var phaseBanner = require('@govuk-react/phase-banner');
var radio = require('@govuk-react/radio');
var relatedItems = require('@govuk-react/related-items');
var searchBox = require('@govuk-react/search-box');
var sectionBreak = require('@govuk-react/section-break');
var select = require('@govuk-react/select');
var skipLink = require('@govuk-react/skip-link');
var table = require('@govuk-react/table');
var tabs = require('@govuk-react/tabs');
var tag = require('@govuk-react/tag');
var textArea = require('@govuk-react/text-area');
var topNav = require('@govuk-react/top-nav');
var unorderedList = require('@govuk-react/unordered-list');
var visuallyHidden = require('@govuk-react/visually-hidden');
var warningText = require('@govuk-react/warning-text');
var icons = require('@govuk-react/icons');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var backLink__default = /*#__PURE__*/_interopDefault(backLink);
var breadcrumbs__default = /*#__PURE__*/_interopDefault(breadcrumbs);
var button__default = /*#__PURE__*/_interopDefault(button);
var caption__default = /*#__PURE__*/_interopDefault(caption);
var checkbox__default = /*#__PURE__*/_interopDefault(checkbox);
var dateField__default = /*#__PURE__*/_interopDefault(dateField);
var details__default = /*#__PURE__*/_interopDefault(details);
var documentFooterMetadata__default = /*#__PURE__*/_interopDefault(documentFooterMetadata);
var errorSummary__default = /*#__PURE__*/_interopDefault(errorSummary);
var errorText__default = /*#__PURE__*/_interopDefault(errorText);
var fieldset__default = /*#__PURE__*/_interopDefault(fieldset);
var fileUpload__default = /*#__PURE__*/_interopDefault(fileUpload);
var footer__default = /*#__PURE__*/_interopDefault(footer);
var formGroup__default = /*#__PURE__*/_interopDefault(formGroup);
var globalStyle__default = /*#__PURE__*/_interopDefault(globalStyle);
var gridCol__default = /*#__PURE__*/_interopDefault(gridCol);
var gridRow__default = /*#__PURE__*/_interopDefault(gridRow);
var heading__default = /*#__PURE__*/_interopDefault(heading);
var hintText__default = /*#__PURE__*/_interopDefault(hintText);
var input__default = /*#__PURE__*/_interopDefault(input);
var inputField__default = /*#__PURE__*/_interopDefault(inputField);
var insetText__default = /*#__PURE__*/_interopDefault(insetText);
var label__default = /*#__PURE__*/_interopDefault(label);
var labelText__default = /*#__PURE__*/_interopDefault(labelText);
var leadParagraph__default = /*#__PURE__*/_interopDefault(leadParagraph);
var link__default = /*#__PURE__*/_interopDefault(link);
var listItem__default = /*#__PURE__*/_interopDefault(listItem);
var loadingBox__default = /*#__PURE__*/_interopDefault(loadingBox);
var main__default = /*#__PURE__*/_interopDefault(main);
var multiChoice__default = /*#__PURE__*/_interopDefault(multiChoice);
var orderedList__default = /*#__PURE__*/_interopDefault(orderedList);
var page__default = /*#__PURE__*/_interopDefault(page);
var pagination__default = /*#__PURE__*/_interopDefault(pagination);
var panel__default = /*#__PURE__*/_interopDefault(panel);
var paragraph__default = /*#__PURE__*/_interopDefault(paragraph);
var phaseBanner__default = /*#__PURE__*/_interopDefault(phaseBanner);
var radio__default = /*#__PURE__*/_interopDefault(radio);
var relatedItems__default = /*#__PURE__*/_interopDefault(relatedItems);
var searchBox__default = /*#__PURE__*/_interopDefault(searchBox);
var sectionBreak__default = /*#__PURE__*/_interopDefault(sectionBreak);
var select__default = /*#__PURE__*/_interopDefault(select);
var skipLink__default = /*#__PURE__*/_interopDefault(skipLink);
var table__default = /*#__PURE__*/_interopDefault(table);
var tabs__default = /*#__PURE__*/_interopDefault(tabs);
var tag__default = /*#__PURE__*/_interopDefault(tag);
var textArea__default = /*#__PURE__*/_interopDefault(textArea);
var topNav__default = /*#__PURE__*/_interopDefault(topNav);
var unorderedList__default = /*#__PURE__*/_interopDefault(unorderedList);
var visuallyHidden__default = /*#__PURE__*/_interopDefault(visuallyHidden);
var warningText__default = /*#__PURE__*/_interopDefault(warningText);



Object.defineProperty(exports, 'BackLink', {
	enumerable: true,
	get: function () { return backLink__default["default"]; }
});
Object.defineProperty(exports, 'Breadcrumbs', {
	enumerable: true,
	get: function () { return breadcrumbs__default["default"]; }
});
Object.defineProperty(exports, 'Button', {
	enumerable: true,
	get: function () { return button__default["default"]; }
});
Object.defineProperty(exports, 'Caption', {
	enumerable: true,
	get: function () { return caption__default["default"]; }
});
Object.defineProperty(exports, 'Checkbox', {
	enumerable: true,
	get: function () { return checkbox__default["default"]; }
});
Object.defineProperty(exports, 'DateField', {
	enumerable: true,
	get: function () { return dateField__default["default"]; }
});
Object.defineProperty(exports, 'Details', {
	enumerable: true,
	get: function () { return details__default["default"]; }
});
Object.defineProperty(exports, 'DocumentFooterMetadata', {
	enumerable: true,
	get: function () { return documentFooterMetadata__default["default"]; }
});
Object.defineProperty(exports, 'ErrorSummary', {
	enumerable: true,
	get: function () { return errorSummary__default["default"]; }
});
Object.defineProperty(exports, 'ErrorText', {
	enumerable: true,
	get: function () { return errorText__default["default"]; }
});
Object.defineProperty(exports, 'Fieldset', {
	enumerable: true,
	get: function () { return fieldset__default["default"]; }
});
Object.defineProperty(exports, 'FileUpload', {
	enumerable: true,
	get: function () { return fileUpload__default["default"]; }
});
Object.defineProperty(exports, 'Footer', {
	enumerable: true,
	get: function () { return footer__default["default"]; }
});
Object.defineProperty(exports, 'FormGroup', {
	enumerable: true,
	get: function () { return formGroup__default["default"]; }
});
Object.defineProperty(exports, 'GlobalStyle', {
	enumerable: true,
	get: function () { return globalStyle__default["default"]; }
});
Object.defineProperty(exports, 'GridCol', {
	enumerable: true,
	get: function () { return gridCol__default["default"]; }
});
Object.defineProperty(exports, 'GridRow', {
	enumerable: true,
	get: function () { return gridRow__default["default"]; }
});
Object.defineProperty(exports, 'H1', {
	enumerable: true,
	get: function () { return heading.H1; }
});
Object.defineProperty(exports, 'H2', {
	enumerable: true,
	get: function () { return heading.H2; }
});
Object.defineProperty(exports, 'H3', {
	enumerable: true,
	get: function () { return heading.H3; }
});
Object.defineProperty(exports, 'H4', {
	enumerable: true,
	get: function () { return heading.H4; }
});
Object.defineProperty(exports, 'H5', {
	enumerable: true,
	get: function () { return heading.H5; }
});
Object.defineProperty(exports, 'H6', {
	enumerable: true,
	get: function () { return heading.H6; }
});
Object.defineProperty(exports, 'Heading', {
	enumerable: true,
	get: function () { return heading__default["default"]; }
});
Object.defineProperty(exports, 'HintText', {
	enumerable: true,
	get: function () { return hintText__default["default"]; }
});
Object.defineProperty(exports, 'Input', {
	enumerable: true,
	get: function () { return input__default["default"]; }
});
Object.defineProperty(exports, 'InputField', {
	enumerable: true,
	get: function () { return inputField__default["default"]; }
});
Object.defineProperty(exports, 'InsetText', {
	enumerable: true,
	get: function () { return insetText__default["default"]; }
});
Object.defineProperty(exports, 'Label', {
	enumerable: true,
	get: function () { return label__default["default"]; }
});
Object.defineProperty(exports, 'LabelText', {
	enumerable: true,
	get: function () { return labelText__default["default"]; }
});
Object.defineProperty(exports, 'LeadParagraph', {
	enumerable: true,
	get: function () { return leadParagraph__default["default"]; }
});
Object.defineProperty(exports, 'Link', {
	enumerable: true,
	get: function () { return link__default["default"]; }
});
Object.defineProperty(exports, 'ListItem', {
	enumerable: true,
	get: function () { return listItem__default["default"]; }
});
Object.defineProperty(exports, 'LoadingBox', {
	enumerable: true,
	get: function () { return loadingBox__default["default"]; }
});
Object.defineProperty(exports, 'Main', {
	enumerable: true,
	get: function () { return main__default["default"]; }
});
Object.defineProperty(exports, 'MultiChoice', {
	enumerable: true,
	get: function () { return multiChoice__default["default"]; }
});
Object.defineProperty(exports, 'OrderedList', {
	enumerable: true,
	get: function () { return orderedList__default["default"]; }
});
Object.defineProperty(exports, 'Page', {
	enumerable: true,
	get: function () { return page__default["default"]; }
});
Object.defineProperty(exports, 'Pagination', {
	enumerable: true,
	get: function () { return pagination__default["default"]; }
});
Object.defineProperty(exports, 'Panel', {
	enumerable: true,
	get: function () { return panel__default["default"]; }
});
Object.defineProperty(exports, 'Paragraph', {
	enumerable: true,
	get: function () { return paragraph__default["default"]; }
});
Object.defineProperty(exports, 'PhaseBanner', {
	enumerable: true,
	get: function () { return phaseBanner__default["default"]; }
});
Object.defineProperty(exports, 'Radio', {
	enumerable: true,
	get: function () { return radio__default["default"]; }
});
Object.defineProperty(exports, 'RelatedItems', {
	enumerable: true,
	get: function () { return relatedItems__default["default"]; }
});
Object.defineProperty(exports, 'SearchBox', {
	enumerable: true,
	get: function () { return searchBox__default["default"]; }
});
Object.defineProperty(exports, 'SectionBreak', {
	enumerable: true,
	get: function () { return sectionBreak__default["default"]; }
});
Object.defineProperty(exports, 'Select', {
	enumerable: true,
	get: function () { return select__default["default"]; }
});
Object.defineProperty(exports, 'SkipLink', {
	enumerable: true,
	get: function () { return skipLink__default["default"]; }
});
Object.defineProperty(exports, 'Table', {
	enumerable: true,
	get: function () { return table__default["default"]; }
});
Object.defineProperty(exports, 'Tabs', {
	enumerable: true,
	get: function () { return tabs__default["default"]; }
});
Object.defineProperty(exports, 'Tag', {
	enumerable: true,
	get: function () { return tag__default["default"]; }
});
Object.defineProperty(exports, 'TextArea', {
	enumerable: true,
	get: function () { return textArea__default["default"]; }
});
Object.defineProperty(exports, 'TopNav', {
	enumerable: true,
	get: function () { return topNav__default["default"]; }
});
Object.defineProperty(exports, 'UnorderedList', {
	enumerable: true,
	get: function () { return unorderedList__default["default"]; }
});
Object.defineProperty(exports, 'VisuallyHidden', {
	enumerable: true,
	get: function () { return visuallyHidden__default["default"]; }
});
Object.defineProperty(exports, 'WarningText', {
	enumerable: true,
	get: function () { return warningText__default["default"]; }
});
Object.defineProperty(exports, 'ArrowLeft', {
	enumerable: true,
	get: function () { return icons.ArrowLeft; }
});
Object.defineProperty(exports, 'ButtonArrow', {
	enumerable: true,
	get: function () { return icons.ButtonArrow; }
});
Object.defineProperty(exports, 'SearchIcon', {
	enumerable: true,
	get: function () { return icons.Search; }
});
Object.defineProperty(exports, 'Spinner', {
	enumerable: true,
	get: function () { return icons.Spinner; }
});
