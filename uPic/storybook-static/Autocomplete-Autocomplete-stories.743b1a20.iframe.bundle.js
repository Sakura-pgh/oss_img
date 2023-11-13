"use strict";(self.webpackChunk_symphony_common_web_ui=self.webpackChunk_symphony_common_web_ui||[]).push([[9590],{"./src/stories/Input/Autocomplete/Autocomplete.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Autocomplete:()=>Autocomplete_stories_Autocomplete,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Autocomplete_stories});__webpack_require__("./node_modules/react/index.js");var StandardTextField_component=__webpack_require__("./src/stories/Input/TextField/StandardTextField/StandardTextField.component.tsx"),Autocomplete=__webpack_require__("./node_modules/@mui/material/Autocomplete/Autocomplete.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Autocomplete_component_Autocomplete=props=>(0,jsx_runtime.jsx)(Autocomplete.Z,{"data-testid":"autocomplete",...props});try{Autocomplete_component_Autocomplete.displayName="Autocomplete",Autocomplete_component_Autocomplete.__docgenInfo={description:"",displayName:"Autocomplete",props:{ChipProps:{defaultValue:null,description:"Props applied to the [`Chip`](/material-ui/api/chip/) element.",name:"ChipProps",required:!1,type:{name:'ChipProps<"div">'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AutocompleteClasses>"}},clearIcon:{defaultValue:{value:'<ClearIcon fontSize="small" />'},description:"The icon to display in place of the default clear icon.",name:"clearIcon",required:!1,type:{name:"ReactNode"}},clearText:{defaultValue:{value:"'Clear'"},description:"Override the default text for the *clear* icon button.\n\nFor localization purposes, you can use the provided [translations](/material-ui/guides/localization/).",name:"clearText",required:!1,type:{name:"string"}},closeText:{defaultValue:{value:"'Close'"},description:"Override the default text for the *close popup* icon button.\n\nFor localization purposes, you can use the provided [translations](/material-ui/guides/localization/).",name:"closeText",required:!1,type:{name:"string"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"componentsProps",required:!1,type:{name:"{ clearIndicator?: Partial<IconButtonProps>; paper?: PaperProps; popper?: Partial<PopperProps> | undefined; popupIndicator?: Partial<...> | undefined; } | undefined"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disablePortal:{defaultValue:{value:"false"},description:"If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},forcePopupIcon:{defaultValue:{value:"'auto'"},description:"Force the visibility display of the popup icon.",name:"forcePopupIcon",required:!1,type:{name:'boolean | "auto"'}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the input will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},getLimitTagsText:{defaultValue:{value:"(more) => `+${more}`"},description:"The label to display when the tags are truncated (`limitTags`).\n@param more The number of truncated tags.\n@returns",name:"getLimitTagsText",required:!1,type:{name:"((more: number) => ReactNode)"}},ListboxComponent:{defaultValue:{value:"'ul'"},description:"The component used to render the listbox.",name:"ListboxComponent",required:!1,type:{name:"JSXElementConstructor<HTMLAttributes<HTMLElement>>"}},ListboxProps:{defaultValue:null,description:"Props applied to the Listbox element.",name:"ListboxProps",required:!1,type:{name:"(HTMLAttributes<HTMLUListElement> & { sx?: SxProps<Theme>; ref?: Ref<Element>; }) | undefined"}},loading:{defaultValue:{value:"false"},description:"If `true`, the component is in a loading state.\nThis shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"'Loading…'"},description:"Text to display when in a loading state.\n\nFor localization purposes, you can use the provided [translations](/material-ui/guides/localization/).",name:"loadingText",required:!1,type:{name:"ReactNode"}},limitTags:{defaultValue:{value:"-1"},description:"The maximum number of tags that will be visible when not focused.\nSet `-1` to disable the limit.",name:"limitTags",required:!1,type:{name:"number"}},noOptionsText:{defaultValue:{value:"'No options'"},description:"Text to display when there are no options.\n\nFor localization purposes, you can use the provided [translations](/material-ui/guides/localization/).",name:"noOptionsText",required:!1,type:{name:"ReactNode"}},openText:{defaultValue:{value:"'Open'"},description:"Override the default text for the *open popup* icon button.\n\nFor localization purposes, you can use the provided [translations](/material-ui/guides/localization/).",name:"openText",required:!1,type:{name:"string"}},PaperComponent:{defaultValue:{value:"Paper"},description:"The component used to render the body of the popup.",name:"PaperComponent",required:!1,type:{name:"JSXElementConstructor<HTMLAttributes<HTMLElement>>"}},PopperComponent:{defaultValue:{value:"Popper"},description:"The component used to position the popup.",name:"PopperComponent",required:!1,type:{name:"JSXElementConstructor<PopperProps>"}},popupIcon:{defaultValue:{value:"<ArrowDropDownIcon />"},description:"The icon to display in place of the default popup icon.",name:"popupIcon",required:!1,type:{name:"ReactNode"}},readOnly:{defaultValue:{value:"false"},description:"If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.",name:"readOnly",required:!1,type:{name:"boolean"}},renderGroup:{defaultValue:null,description:"Render the group.\n@param params The group to render.\n@returns",name:"renderGroup",required:!1,type:{name:"((params: AutocompleteRenderGroupParams) => ReactNode)"}},renderInput:{defaultValue:null,description:"Render the input.\n@param params\n@returns",name:"renderInput",required:!0,type:{name:"(params: AutocompleteRenderInputParams) => ReactNode"}},renderOption:{defaultValue:null,description:"Render the option, use `getOptionLabel` by default.\n@param props The props to apply on the li element.\n@param option The option to render.\n@param state The state of each option.\n@param ownerState The state of the Autocomplete component.\n@returns",name:"renderOption",required:!1,type:{name:'((props: HTMLAttributes<HTMLLIElement>, option: string, state: AutocompleteRenderOptionState, ownerState: AutocompleteOwnerState<string, boolean, boolean, boolean, "div">) => ReactNode)'}},renderTags:{defaultValue:null,description:"Render the selected value.\n@param value The `value` provided to the component.\n@param getTagProps A tag props getter.\n@param ownerState The state of the Autocomplete component.\n@returns",name:"renderTags",required:!1,type:{name:'((value: string[], getTagProps: AutocompleteRenderGetTagProps, ownerState: AutocompleteOwnerState<string, boolean, boolean, boolean, "div">) => ReactNode)'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ clearIndicator?: Partial<IconButtonProps>; paper?: PaperProps; popper?: Partial<PopperProps> | undefined; popupIndicator?: Partial<...> | undefined; } | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},unstable_classNamePrefix:{defaultValue:{value:"'Mui'"},description:"@internal The prefix of the state class name, temporary for Joy UI",name:"unstable_classNamePrefix",required:!1,type:{name:"string"}},unstable_isActiveElementInListbox:{defaultValue:null,description:"@internal Temporary for Joy UI because the parent listbox is the document object\nTODO v6: Normalize the logic and remove this param.",name:"unstable_isActiveElementInListbox",required:!1,type:{name:"((listbox: RefObject<HTMLElement>) => boolean)"}},autoComplete:{defaultValue:{value:"false"},description:"If `true`, the portion of the selected suggestion that has not been typed by the user,\nknown as the completion string, appears inline after the input cursor in the textbox.\nThe inline completion string is visually highlighted and has a selected state.",name:"autoComplete",required:!1,type:{name:"boolean"}},autoHighlight:{defaultValue:{value:"false"},description:"If `true`, the first option is automatically highlighted.",name:"autoHighlight",required:!1,type:{name:"boolean"}},autoSelect:{defaultValue:{value:"false"},description:"If `true`, the selected option becomes the value of the input\nwhen the Autocomplete loses focus unless the user chooses\na different option or changes the character string in the input.\n\nWhen using `freeSolo` mode, the typed value will be the input value\nif the Autocomplete loses focus without highlighting an option.",name:"autoSelect",required:!1,type:{name:"boolean"}},blurOnSelect:{defaultValue:{value:"false"},description:"Control if the input should be blurred when an option is selected:\n\n- `false` the input is not blurred.\n- `true` the input is always blurred.\n- `touch` the input is blurred after a touch event.\n- `mouse` the input is blurred after a mouse event.",name:"blurOnSelect",required:!1,type:{name:'boolean | "mouse" | "touch"'}},clearOnBlur:{defaultValue:{value:"!props.freeSolo"},description:"If `true`, the input's text is cleared on blur if no value is selected.\n\nSet to `true` if you want to help the user enter a new value.\nSet to `false` if you want to help the user resume their search.",name:"clearOnBlur",required:!1,type:{name:"boolean"}},clearOnEscape:{defaultValue:{value:"false"},description:"If `true`, clear all values when the user presses escape and the popup is closed.",name:"clearOnEscape",required:!1,type:{name:"boolean"}},componentName:{defaultValue:null,description:"The component name that is using this hook. Used for warnings.",name:"componentName",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"props.multiple ? [] : null"},description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"string | string[] | null"}},disableClearable:{defaultValue:{value:"false"},description:"If `true`, the input can't be cleared.",name:"disableClearable",required:!1,type:{name:"boolean"}},disableCloseOnSelect:{defaultValue:{value:"false"},description:"If `true`, the popup won't close when a value is selected.",name:"disableCloseOnSelect",required:!1,type:{name:"boolean"}},disabledItemsFocusable:{defaultValue:{value:"false"},description:"If `true`, will allow focus on disabled items.",name:"disabledItemsFocusable",required:!1,type:{name:"boolean"}},disableListWrap:{defaultValue:{value:"false"},description:"If `true`, the list box in the popup will not wrap focus.",name:"disableListWrap",required:!1,type:{name:"boolean"}},filterOptions:{defaultValue:{value:"createFilterOptions()"},description:"A function that determines the filtered options to be rendered on search.\n@param options The options to render.\n@param state The state of the component.\n@returns",name:"filterOptions",required:!1,type:{name:"((options: string[], state: FilterOptionsState<string>) => string[])"}},filterSelectedOptions:{defaultValue:{value:"false"},description:"If `true`, hide the selected options from the list box.",name:"filterSelectedOptions",required:!1,type:{name:"boolean"}},freeSolo:{defaultValue:{value:"false"},description:"If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.",name:"freeSolo",required:!1,type:{name:"boolean"}},getOptionDisabled:{defaultValue:null,description:"Used to determine the disabled state for a given option.\n@param option The option to test.\n@returns",name:"getOptionDisabled",required:!1,type:{name:"((option: string) => boolean)"}},getOptionLabel:{defaultValue:{value:"(option) => option.label ?? option"},description:"Used to determine the string value for a given option.\nIt's used to fill the input (and the list box options if `renderOption` is not provided).\n\nIf used in free solo mode, it must accept both the type of the options and a string.\n@param option\n@returns",name:"getOptionLabel",required:!1,type:{name:"((option: string) => string)"}},groupBy:{defaultValue:null,description:"If provided, the options will be grouped under the returned string.\nThe groupBy value is also used as the text for group headings when `renderGroup` is not provided.\n@param options The options to group.\n@returns",name:"groupBy",required:!1,type:{name:"((option: string) => string)"}},handleHomeEndKeys:{defaultValue:{value:"!props.freeSolo"},description:'If `true`, the component handles the "Home" and "End" keys when the popup is open.\nIt should move focus to the first option and last option, respectively.',name:"handleHomeEndKeys",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"This prop is used to help implement the accessibility logic.\nIf you don't provide an id it will fall back to a randomly generated one.",name:"id",required:!1,type:{name:"string"}},includeInputInList:{defaultValue:{value:"false"},description:"If `true`, the highlight can move to the input.",name:"includeInputInList",required:!1,type:{name:"boolean"}},inputValue:{defaultValue:null,description:"The input value.",name:"inputValue",required:!1,type:{name:"string"}},isOptionEqualToValue:{defaultValue:null,description:"Used to determine if the option represents the given value.\nUses strict equality by default.\n⚠️ Both arguments need to be handled, an option can only match with one value.\n@param option The option to test.\n@param value The value to test against.\n@returns",name:"isOptionEqualToValue",required:!1,type:{name:"((option: string, value: string) => boolean)"}},multiple:{defaultValue:{value:"false"},description:"If `true`, `value` must be an array and the menu will support multiple selections.",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:'Callback fired when the value changes.\n@param event The event source of the callback.\n@param value The new value of the component.\n@param reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".\n@param details',name:"onChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, value: string | string[] | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<...>) => void)"}},onClose:{defaultValue:null,description:'Callback fired when the popup requests to be closed.\nUse in controlled mode (see open).\n@param event The event source of the callback.\n@param reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.',name:"onClose",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, reason: AutocompleteCloseReason) => void)"}},onHighlightChange:{defaultValue:null,description:'Callback fired when the highlight option changes.\n@param event The event source of the callback.\n@param option The highlighted option.\n@param reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.',name:"onHighlightChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, option: string | null, reason: AutocompleteHighlightChangeReason) => void)"}},onInputChange:{defaultValue:null,description:'Callback fired when the input value changes.\n@param event The event source of the callback.\n@param value The new value of the text input.\n@param reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.',name:"onInputChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void)"}},onOpen:{defaultValue:null,description:"Callback fired when the popup requests to be opened.\nUse in controlled mode (see open).\n@param event The event source of the callback.",name:"onOpen",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => void)"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},openOnFocus:{defaultValue:{value:"false"},description:"If `true`, the popup will open on input focus.",name:"openOnFocus",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options.",name:"options",required:!0,type:{name:"readonly string[]"}},selectOnFocus:{defaultValue:{value:"!props.freeSolo"},description:"If `true`, the input's text is selected on focus.\nIt helps the user clear the selected value.",name:"selectOnFocus",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the autocomplete.\n\nThe value must have reference equality with the option in order to be selected.\nYou can customize the equality behavior with the `isOptionEqualToValue` prop.",name:"value",required:!1,type:{name:"string | string[] | null"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Input/Autocomplete/Autocomplete.component.tsx#Autocomplete"]={docgenInfo:Autocomplete_component_Autocomplete.__docgenInfo,name:"Autocomplete",path:"src/stories/Input/Autocomplete/Autocomplete.component.tsx#Autocomplete"})}catch(__react_docgen_typescript_loader_error){}var _Autocomplete$paramet,_Autocomplete$paramet2,_Autocomplete$paramet3;const clients=["Garrick Lanford","Stacy Danita","Lynda Jo-Anne","Ansel Francine","Robynne Rich","Micah Kaylie","Tennyson Jazmine","Ward Noah","Marjorie Andrea"],Autocomplete_stories_Autocomplete={args:{}},Autocomplete_stories={component:Autocomplete_component_Autocomplete,render:_ref=>{let{...args}=_ref;return(0,jsx_runtime.jsx)(Autocomplete_component_Autocomplete,{...args,options:clients,sx:{width:300},renderInput:params=>(0,jsx_runtime.jsx)(StandardTextField_component.$,{...params,label:"Clients"})})}};Autocomplete_stories_Autocomplete.parameters={...Autocomplete_stories_Autocomplete.parameters,docs:{...null===(_Autocomplete$paramet=Autocomplete_stories_Autocomplete.parameters)||void 0===_Autocomplete$paramet?void 0:_Autocomplete$paramet.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Autocomplete$paramet2=Autocomplete_stories_Autocomplete.parameters)||void 0===_Autocomplete$paramet2||null===(_Autocomplete$paramet3=_Autocomplete$paramet2.docs)||void 0===_Autocomplete$paramet3?void 0:_Autocomplete$paramet3.source}}};const __namedExportsOrder=["Autocomplete"]},"./src/stories/Input/TextField/StandardTextField/StandardTextField.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>StandardTextField});var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const StandardTextField=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{"data-testid":"standardTextfield",...props});try{StandardTextField.displayName="StandardTextField",StandardTextField.__docgenInfo={description:"",displayName:"StandardTextField",props:{onChange:{defaultValue:null,description:"Callback fired when the value is changed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},variant:{defaultValue:{value:"'outlined'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'}]}},InputProps:{defaultValue:null,description:"Props applied to the Input element.\nIt will be a [`FilledInput`](/material-ui/api/filled-input/),\n[`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)\ncomponent depending on the `variant` prop value.",name:"InputProps",required:!1,type:{name:"Partial<InputProps>"}},autoComplete:{defaultValue:null,description:"This prop helps users to fill forms faster, especially on mobile devices.\nThe name can be confusing, as it's more like an autofill.\nYou can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).",name:"autoComplete",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"If `true`, the `input` element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the component.\n@ignore",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TextFieldClasses>"}},color:{defaultValue:{value:"'primary'"},description:"The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"unknown"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"If `true`, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},FormHelperTextProps:{defaultValue:null,description:"Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.",name:"FormHelperTextProps",required:!1,type:{name:"Partial<FormHelperTextProps>"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the input will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"The helper text content.",name:"helperText",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The id of the `input` element.\nUse this prop to make `label` and `helperText` accessible for screen readers.",name:"id",required:!1,type:{name:"string"}},InputLabelProps:{defaultValue:null,description:"Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.\nPointer events like `onClick` are enabled if and only if `shrink` is `true`.",name:"InputLabelProps",required:!1,type:{name:"Partial<InputLabelProps>"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputBaseComponentProps"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"ReactNode"}},multiline:{defaultValue:{value:"false"},description:"If `true`, a `textarea` element is rendered instead of an input.",name:"multiline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"The short hint displayed in the `input` before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"If `true`, the label is displayed as required and the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true.",name:"rows",required:!1,type:{name:"string | number"}},maxRows:{defaultValue:null,description:"Maximum number of rows to display when multiline option is set to true.",name:"maxRows",required:!1,type:{name:"string | number"}},minRows:{defaultValue:null,description:"Minimum number of rows to display when multiline option is set to true.",name:"minRows",required:!1,type:{name:"string | number"}},select:{defaultValue:{value:"false"},description:"Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.\nIf this option is set you must pass the options of the select as children.",name:"select",required:!1,type:{name:"boolean"}},SelectProps:{defaultValue:null,description:"Props applied to the [`Select`](/material-ui/api/select/) element.",name:"SelectProps",required:!1,type:{name:"Partial<SelectProps<unknown>>"}},size:{defaultValue:null,description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},type:{defaultValue:null,description:"Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},value:{defaultValue:null,description:"The value of the `input` element, required for a controlled component.",name:"value",required:!1,type:{name:"unknown"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},margin:{defaultValue:{value:"'none'"},description:"If `dense` or `normal`, will adjust vertical spacing of this and contained components.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"dense"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},focused:{defaultValue:null,description:"If `true`, the component is displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:{value:"false"},description:"If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Input/TextField/StandardTextField/StandardTextField.component.tsx#StandardTextField"]={docgenInfo:StandardTextField.__docgenInfo,name:"StandardTextField",path:"src/stories/Input/TextField/StandardTextField/StandardTextField.component.tsx#StandardTextField"})}catch(__react_docgen_typescript_loader_error){}}}]);