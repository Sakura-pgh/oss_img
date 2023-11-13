/*! For license information please see Menu-MenuList-MenuList-stories.a1fb8c2f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_symphony_common_web_ui=self.webpackChunk_symphony_common_web_ui||[]).push([[3350],{"./node_modules/@mui/material/Divider/dividerClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getDividerUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDividerUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiDivider",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},"./node_modules/@mui/material/List/List.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>List_List});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiList",slot)}(0,generateUtilityClasses.Z)("MuiList",["root","padding","dense","subheader"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","component","dense","disablePadding","subheader"],ListRoot=(0,styled.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,!ownerState.disablePadding&&styles.padding,ownerState.dense&&styles.dense,ownerState.subheader&&styles.subheader]}})((({ownerState})=>(0,esm_extends.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!ownerState.disablePadding&&{paddingTop:8,paddingBottom:8},ownerState.subheader&&{paddingTop:0}))),List_List=react.forwardRef((function List(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiList"}),{children,className,component="ul",dense=!1,disablePadding=!1,subheader}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useMemo((()=>({dense})),[dense]),ownerState=(0,esm_extends.Z)({},props,{component,dense,disablePadding}),classes=(ownerState=>{const{classes,disablePadding,dense,subheader}=ownerState,slots={root:["root",!disablePadding&&"padding",dense&&"dense",subheader&&"subheader"]};return(0,composeClasses.Z)(slots,getListUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:context,children:(0,jsx_runtime.jsxs)(ListRoot,(0,esm_extends.Z)({as:component,className:(0,clsx.Z)(classes.root,className),ref,ownerState},other,{children:[subheader,children]}))})}))},"./node_modules/@mui/material/List/ListContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,f:()=>getListItemIconUtilityClass});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemIconUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiListItemIcon",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},"./node_modules/@mui/material/ListItemText/listItemTextClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>getListItemTextUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemTextUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiListItemText",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},"./node_modules/@mui/material/MenuList/MenuList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MenuList_MenuList});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),ownerDocument=(__webpack_require__("./node_modules/react-is/index.js"),__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js")),List=__webpack_require__("./node_modules/@mui/material/List/List.js");const utils_getScrollbarSize=__webpack_require__("./node_modules/@mui/utils/esm/getScrollbarSize.js").Z;var useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function nextItem(list,item,disableListWrap){return list===item?list.firstChild:item&&item.nextElementSibling?item.nextElementSibling:disableListWrap?null:list.firstChild}function previousItem(list,item,disableListWrap){return list===item?disableListWrap?list.firstChild:list.lastChild:item&&item.previousElementSibling?item.previousElementSibling:disableListWrap?null:list.lastChild}function textCriteriaMatches(nextFocus,textCriteria){if(void 0===textCriteria)return!0;let text=nextFocus.innerText;return void 0===text&&(text=nextFocus.textContent),text=text.trim().toLowerCase(),0!==text.length&&(textCriteria.repeating?text[0]===textCriteria.keys[0]:0===text.indexOf(textCriteria.keys.join("")))}function moveFocus(list,currentFocus,disableListWrap,disabledItemsFocusable,traversalFunction,textCriteria){let wrappedOnce=!1,nextFocus=traversalFunction(list,currentFocus,!!currentFocus&&disableListWrap);for(;nextFocus;){if(nextFocus===list.firstChild){if(wrappedOnce)return!1;wrappedOnce=!0}const nextFocusDisabled=!disabledItemsFocusable&&(nextFocus.disabled||"true"===nextFocus.getAttribute("aria-disabled"));if(nextFocus.hasAttribute("tabindex")&&textCriteriaMatches(nextFocus,textCriteria)&&!nextFocusDisabled)return nextFocus.focus(),!0;nextFocus=traversalFunction(list,nextFocus,disableListWrap)}return!1}const MenuList_MenuList=react.forwardRef((function MenuList(props,ref){const{actions,autoFocus=!1,autoFocusItem=!1,children,className,disabledItemsFocusable=!1,disableListWrap=!1,onKeyDown,variant="selectedMenu"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),listRef=react.useRef(null),textCriteriaRef=react.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,useEnhancedEffect.Z)((()=>{autoFocus&&listRef.current.focus()}),[autoFocus]),react.useImperativeHandle(actions,(()=>({adjustStyleForScrollbar:(containerElement,theme)=>{const noExplicitWidth=!listRef.current.style.width;if(containerElement.clientHeight<listRef.current.clientHeight&&noExplicitWidth){const scrollbarSize=`${utils_getScrollbarSize((0,ownerDocument.Z)(containerElement))}px`;listRef.current.style["rtl"===theme.direction?"paddingLeft":"paddingRight"]=scrollbarSize,listRef.current.style.width=`calc(100% + ${scrollbarSize})`}return listRef.current}})),[]);const handleRef=(0,useForkRef.Z)(listRef,ref);let activeItemIndex=-1;react.Children.forEach(children,((child,index)=>{react.isValidElement(child)?(child.props.disabled||("selectedMenu"===variant&&child.props.selected||-1===activeItemIndex)&&(activeItemIndex=index),activeItemIndex===index&&(child.props.disabled||child.props.muiSkipListHighlight||child.type.muiSkipListHighlight)&&(activeItemIndex+=1,activeItemIndex>=children.length&&(activeItemIndex=-1))):activeItemIndex===index&&(activeItemIndex+=1,activeItemIndex>=children.length&&(activeItemIndex=-1))}));const items=react.Children.map(children,((child,index)=>{if(index===activeItemIndex){const newChildProps={};return autoFocusItem&&(newChildProps.autoFocus=!0),void 0===child.props.tabIndex&&"selectedMenu"===variant&&(newChildProps.tabIndex=0),react.cloneElement(child,newChildProps)}return child}));return(0,jsx_runtime.jsx)(List.Z,(0,esm_extends.Z)({role:"menu",ref:handleRef,className,onKeyDown:event=>{const list=listRef.current,key=event.key,currentFocus=(0,ownerDocument.Z)(list).activeElement;if("ArrowDown"===key)event.preventDefault(),moveFocus(list,currentFocus,disableListWrap,disabledItemsFocusable,nextItem);else if("ArrowUp"===key)event.preventDefault(),moveFocus(list,currentFocus,disableListWrap,disabledItemsFocusable,previousItem);else if("Home"===key)event.preventDefault(),moveFocus(list,null,disableListWrap,disabledItemsFocusable,nextItem);else if("End"===key)event.preventDefault(),moveFocus(list,null,disableListWrap,disabledItemsFocusable,previousItem);else if(1===key.length){const criteria=textCriteriaRef.current,lowerKey=key.toLowerCase(),currTime=performance.now();criteria.keys.length>0&&(currTime-criteria.lastTime>500?(criteria.keys=[],criteria.repeating=!0,criteria.previousKeyMatched=!0):criteria.repeating&&lowerKey!==criteria.keys[0]&&(criteria.repeating=!1)),criteria.lastTime=currTime,criteria.keys.push(lowerKey);const keepFocusOnCurrent=currentFocus&&!criteria.repeating&&textCriteriaMatches(currentFocus,criteria);criteria.previousKeyMatched&&(keepFocusOnCurrent||moveFocus(list,currentFocus,!1,disabledItemsFocusable,nextItem,criteria))?event.preventDefault():criteria.previousKeyMatched=!1}onKeyDown&&onKeyDown(event)},tabIndex:autoFocus?0:-1},other,{children:items}))}))},"./node_modules/@mui/utils/esm/getScrollbarSize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getScrollbarSize(doc){const documentWidth=doc.documentElement.clientWidth;return Math.abs(window.innerWidth-documentWidth)}__webpack_require__.d(__webpack_exports__,{Z:()=>getScrollbarSize})},"./src/stories/Navigation/Menu/MenuList/MenuList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MenuList:()=>MenuList_stories_MenuList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MenuList_stories});var react=__webpack_require__("./node_modules/react/index.js"),MenuItem=__webpack_require__("./src/stories/Navigation/Menu/MenuItem/index.ts"),MenuList=__webpack_require__("./node_modules/@mui/material/MenuList/MenuList.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuList_compoent_MenuList=props=>(0,jsx_runtime.jsx)(MenuList.Z,{"data-testid":"menu-list",...props});try{MenuList_compoent_MenuList.displayName="MenuList",MenuList_compoent_MenuList.__docgenInfo={description:"",displayName:"MenuList",props:{autoFocus:{defaultValue:{value:"false"},description:'If `true`, will focus the `[role="menu"]` container and move into tab order.',name:"autoFocus",required:!1,type:{name:"boolean"}},autoFocusItem:{defaultValue:{value:"false"},description:'If `true`, will focus the first menuitem if `variant="menu"` or selected item\nif `variant="selectedMenu"`.',name:"autoFocusItem",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"MenuList contents, normally `MenuItem`s.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},disabledItemsFocusable:{defaultValue:{value:"false"},description:"If `true`, will allow focus on disabled items.",name:"disabledItemsFocusable",required:!1,type:{name:"boolean"}},disableListWrap:{defaultValue:{value:"false"},description:"If `true`, the menu items will not wrap focus.",name:"disableListWrap",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'selectedMenu'"},description:"The variant to use. Use `menu` to prevent selected items from impacting the initial focus\nand the vertical alignment relative to the anchor element.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"selectedMenu"'}]}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<ListClasses> & Partial<ClassNameMap<never>>)"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used for\nthe list and list items.\nThe prop is available to descendant components as the `dense` context.",name:"dense",required:!1,type:{name:"boolean"}},disablePadding:{defaultValue:{value:"false"},description:"If `true`, vertical padding is removed from the list.",name:"disablePadding",required:!1,type:{name:"boolean"}},subheader:{defaultValue:null,description:"The content of the subheader, normally `ListSubheader`.",name:"subheader",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Navigation/Menu/MenuList/MenuList.compoent.tsx#MenuList"]={docgenInfo:MenuList_compoent_MenuList.__docgenInfo,name:"MenuList",path:"src/stories/Navigation/Menu/MenuList/MenuList.compoent.tsx#MenuList"})}catch(__react_docgen_typescript_loader_error){}var _MenuList$parameters,_MenuList$parameters2,_MenuList$parameters3;const MenuList_stories_MenuList={args:{}},MenuList_stories={component:MenuList_compoent_MenuList,render:_ref=>{let{...args}=_ref;const[,setAnchorEl]=react.useState(null),handleClose=()=>{setAnchorEl(null)};return(0,jsx_runtime.jsxs)(MenuList_compoent_MenuList,{...args,id:"basic-menu",children:[(0,jsx_runtime.jsx)(MenuItem.s,{sx:{color:"red.main"},onClick:handleClose,children:"Profile"}),(0,jsx_runtime.jsx)(MenuItem.s,{sx:{color:"red.main"},onClick:handleClose,children:"Settings"}),(0,jsx_runtime.jsx)(MenuItem.s,{sx:{color:"red.main"},onClick:handleClose,children:"Logout"})]})}};MenuList_stories_MenuList.parameters={...MenuList_stories_MenuList.parameters,docs:{...null===(_MenuList$parameters=MenuList_stories_MenuList.parameters)||void 0===_MenuList$parameters?void 0:_MenuList$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_MenuList$parameters2=MenuList_stories_MenuList.parameters)||void 0===_MenuList$parameters2||null===(_MenuList$parameters3=_MenuList$parameters2.docs)||void 0===_MenuList$parameters3?void 0:_MenuList$parameters3.source}}};const __namedExportsOrder=["MenuList"]},"./src/stories/Navigation/Menu/MenuItem/MenuItem.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>MenuItem_component_MenuItem});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),dividerClasses=__webpack_require__("./node_modules/@mui/material/Divider/dividerClasses.js"),listItemIconClasses=__webpack_require__("./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js"),listItemTextClasses=__webpack_require__("./node_modules/@mui/material/ListItemText/listItemTextClasses.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getMenuItemUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiMenuItem",slot)}const MenuItem_menuItemClasses=(0,generateUtilityClasses.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],MenuItemRoot=(0,styled.ZP)(ButtonBase.Z,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiMenuItem",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.dense&&styles.dense,ownerState.divider&&styles.divider,!ownerState.disableGutters&&styles.gutters]}})((({theme,ownerState})=>(0,esm_extends.Z)({},theme.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!ownerState.disableGutters&&{paddingLeft:16,paddingRight:16},ownerState.divider&&{borderBottom:`1px solid ${(theme.vars||theme).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(theme.vars||theme).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${MenuItem_menuItemClasses.selected}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity),[`&.${MenuItem_menuItemClasses.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)}},[`&.${MenuItem_menuItemClasses.selected}:hover`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity)}},[`&.${MenuItem_menuItemClasses.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette.action.focus},[`&.${MenuItem_menuItemClasses.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity},[`& + .${dividerClasses.Z.root}`]:{marginTop:theme.spacing(1),marginBottom:theme.spacing(1)},[`& + .${dividerClasses.Z.inset}`]:{marginLeft:52},[`& .${listItemTextClasses.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${listItemTextClasses.Z.inset}`]:{paddingLeft:36},[`& .${listItemIconClasses.Z.root}`]:{minWidth:36}},!ownerState.dense&&{[theme.breakpoints.up("sm")]:{minHeight:"auto"}},ownerState.dense&&(0,esm_extends.Z)({minHeight:32,paddingTop:4,paddingBottom:4},theme.typography.body2,{[`& .${listItemIconClasses.Z.root} svg`]:{fontSize:"1.25rem"}})))),MenuItem_MenuItem=react.forwardRef((function MenuItem(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiMenuItem"}),{autoFocus=!1,component="li",dense=!1,divider=!1,disableGutters=!1,focusVisibleClassName,role="menuitem",tabIndex:tabIndexProp,className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useContext(ListContext.Z),childContext=react.useMemo((()=>({dense:dense||context.dense||!1,disableGutters})),[context.dense,dense,disableGutters]),menuItemRef=react.useRef(null);(0,useEnhancedEffect.Z)((()=>{autoFocus&&menuItemRef.current&&menuItemRef.current.focus()}),[autoFocus]);const ownerState=(0,esm_extends.Z)({},props,{dense:childContext.dense,divider,disableGutters}),classes=(ownerState=>{const{disabled,dense,divider,disableGutters,selected,classes}=ownerState,slots={root:["root",dense&&"dense",disabled&&"disabled",!disableGutters&&"gutters",divider&&"divider",selected&&"selected"]},composedClasses=(0,composeClasses.Z)(slots,getMenuItemUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(props),handleRef=(0,useForkRef.Z)(menuItemRef,ref);let tabIndex;return props.disabled||(tabIndex=void 0!==tabIndexProp?tabIndexProp:-1),(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:childContext,children:(0,jsx_runtime.jsx)(MenuItemRoot,(0,esm_extends.Z)({ref:handleRef,role,tabIndex,component,focusVisibleClassName:(0,clsx.Z)(classes.focusVisible,focusVisibleClassName),className:(0,clsx.Z)(classes.root,className)},other,{ownerState,classes}))})})),MenuItem_component_MenuItem=props=>(0,jsx_runtime.jsx)(MenuItem_MenuItem,{"data-testid":"menuItem",...props});try{MenuItem_component_MenuItem.displayName="MenuItem",MenuItem_component_MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{autoFocus:{defaultValue:{value:"false"},description:"If `true`, the list item is focused during the first mount.\nFocus will also be triggered if the value changes from false to true.",name:"autoFocus",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<MenuItemClasses> & Partial<ClassNameMap<never>>)"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used.\nThe prop defaults to the value inherited from the parent Menu component.",name:"dense",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false\nfalse"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableGutters:{defaultValue:{value:"false"},description:"If `true`, the left and right padding is removed.",name:"disableGutters",required:!1,type:{name:"boolean"}},divider:{defaultValue:{value:"false"},description:"If `true`, a 1px light border is added to the bottom of the menu item.",name:"divider",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"If `true`, the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Navigation/Menu/MenuItem/MenuItem.component.tsx#MenuItem"]={docgenInfo:MenuItem_component_MenuItem.__docgenInfo,name:"MenuItem",path:"src/stories/Navigation/Menu/MenuItem/MenuItem.component.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Navigation/Menu/MenuItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>_MenuItem_component__WEBPACK_IMPORTED_MODULE_0__.s});var _MenuItem_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Navigation/Menu/MenuItem/MenuItem.component.tsx")},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference")},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);