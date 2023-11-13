/*! For license information please see Image-ImageList-ImageList-stories.5026d6e9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_symphony_common_web_ui=self.webpackChunk_symphony_common_web_ui||[]).push([[463],{"./node_modules/@mui/material/ImageList/ImageListContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./src/stories/Layout/Image/ImageList/ImageList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ImageList:()=>ImageList_stories_ImageList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ImageList_stories});var react=__webpack_require__("./node_modules/react/index.js"),ImageListItem_component=__webpack_require__("./src/stories/Layout/Image/ImageListItem/ImageListItem.component.tsx"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getImageListUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiImageList",slot)}(0,generateUtilityClasses.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var ImageListContext=__webpack_require__("./node_modules/@mui/material/ImageList/ImageListContext.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","cols","component","rowHeight","gap","style","variant"],ImageListRoot=(0,styled.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant]]}})((({ownerState})=>(0,esm_extends.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===ownerState.variant&&{display:"block"}))),ImageList_ImageList=react.forwardRef((function ImageList(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiImageList"}),{children,className,cols=2,component="ul",rowHeight="auto",gap=4,style:styleProp,variant="standard"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),contextValue=react.useMemo((()=>({rowHeight,gap,variant})),[rowHeight,gap,variant]);react.useEffect((()=>{0}),[]);const style="masonry"===variant?(0,esm_extends.Z)({columnCount:cols,columnGap:gap},styleProp):(0,esm_extends.Z)({gridTemplateColumns:`repeat(${cols}, 1fr)`,gap},styleProp),ownerState=(0,esm_extends.Z)({},props,{component,gap,rowHeight,variant}),classes=(ownerState=>{const{classes,variant}=ownerState,slots={root:["root",variant]};return(0,composeClasses.Z)(slots,getImageListUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ImageListRoot,(0,esm_extends.Z)({as:component,className:(0,clsx.Z)(classes.root,classes[variant],className),ref,style,ownerState},other,{children:(0,jsx_runtime.jsx)(ImageListContext.Z.Provider,{value:contextValue,children})}))})),ImageList_component_ImageList=props=>(0,jsx_runtime.jsx)(ImageList_ImageList,{"data-testid":"imageList",...props});try{ImageList_component_ImageList.displayName="ImageList",ImageList_component_ImageList.__docgenInfo={description:"",displayName:"ImageList",props:{children:{defaultValue:null,description:"The content of the component, normally `ImageListItem`s.",name:"children",required:!0,type:{name:"NonNullable<ReactNode>"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<ImageListClasses> & Partial<ClassNameMap<never>>)"}},cols:{defaultValue:{value:"2"},description:"Number of columns.",name:"cols",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"4"},description:"The gap between items in px.",name:"gap",required:!1,type:{name:"number"}},rowHeight:{defaultValue:{value:"'auto'"},description:"The height of one row in px.",name:"rowHeight",required:!1,type:{name:'number | "auto"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'standard'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"woven"'},{value:'"masonry"'},{value:'"quilted"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Layout/Image/ImageList/ImageList.component.tsx#ImageList"]={docgenInfo:ImageList_component_ImageList.__docgenInfo,name:"ImageList",path:"src/stories/Layout/Image/ImageList/ImageList.component.tsx#ImageList"})}catch(__react_docgen_typescript_loader_error){}var _ImageList$parameters,_ImageList$parameters2,_ImageList$parameters3;const meta={component:ImageList_component_ImageList,render:_ref=>{let{...args}=_ref;return(0,jsx_runtime.jsx)(ImageList_component_ImageList,{...args})}},ImageList_stories_ImageList={args:{children:[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike"}].map((item=>(0,jsx_runtime.jsx)(ImageListItem_component.W,{children:(0,jsx_runtime.jsx)("img",{src:"".concat(item.img,"?w=164&h=164&fit=crop&auto=format"),srcSet:"".concat(item.img,"?w=164&h=164&fit=crop&auto=format&dpr=2 2x"),alt:item.title,loading:"lazy"})},item.img))),sx:{width:500,height:450},cols:3,rowHeight:164}},ImageList_stories=meta;ImageList_stories_ImageList.parameters={...ImageList_stories_ImageList.parameters,docs:{...null===(_ImageList$parameters=ImageList_stories_ImageList.parameters)||void 0===_ImageList$parameters?void 0:_ImageList$parameters.docs,source:{originalSource:'{\n  args: {\n    children: itemData.map((item: SampleImageType) => <ImageListItem key={item.img}>\n        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />\n      </ImageListItem>),\n    sx: {\n      width: 500,\n      height: 450\n    },\n    cols: 3,\n    rowHeight: 164\n  }\n}',...null===(_ImageList$parameters2=ImageList_stories_ImageList.parameters)||void 0===_ImageList$parameters2||null===(_ImageList$parameters3=_ImageList$parameters2.docs)||void 0===_ImageList$parameters3?void 0:_ImageList$parameters3.source}}};const __namedExportsOrder=["ImageList"]},"./src/stories/Layout/Image/ImageListItem/ImageListItem.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>ImageListItem_component_ImageListItem});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),ImageListContext=(__webpack_require__("./node_modules/react-is/index.js"),__webpack_require__("./node_modules/@mui/material/ImageList/ImageListContext.js")),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),isMuiElement=__webpack_require__("./node_modules/@mui/material/utils/isMuiElement.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getImageListItemUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiImageListItem",slot)}const ImageListItem_imageListItemClasses=(0,generateUtilityClasses.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","cols","component","rows","style"],ImageListItemRoot=(0,styled.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[{[`& .${ImageListItem_imageListItemClasses.img}`]:styles.img},styles.root,styles[ownerState.variant]]}})((({ownerState})=>(0,esm_extends.Z)({display:"block",position:"relative"},"standard"===ownerState.variant&&{display:"flex",flexDirection:"column"},"woven"===ownerState.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${ImageListItem_imageListItemClasses.img}`]:(0,esm_extends.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===ownerState.variant&&{height:"auto",flexGrow:1})}))),ImageListItem_ImageListItem=react.forwardRef((function ImageListItem(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiImageListItem"}),{children,className,cols=1,component="li",rows=1,style}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{rowHeight="auto",gap,variant}=react.useContext(ImageListContext.Z);let height="auto";"woven"===variant?height=void 0:"auto"!==rowHeight&&(height=rowHeight*rows+gap*(rows-1));const ownerState=(0,esm_extends.Z)({},props,{cols,component,gap,rowHeight,rows,variant}),classes=(ownerState=>{const{classes,variant}=ownerState,slots={root:["root",variant],img:["img"]};return(0,composeClasses.Z)(slots,getImageListItemUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ImageListItemRoot,(0,esm_extends.Z)({as:component,className:(0,clsx.Z)(classes.root,classes[variant],className),ref,style:(0,esm_extends.Z)({height,gridColumnEnd:"masonry"!==variant?`span ${cols}`:void 0,gridRowEnd:"masonry"!==variant?`span ${rows}`:void 0,marginBottom:"masonry"===variant?gap:void 0,breakInside:"masonry"===variant?"avoid":void 0},style),ownerState},other,{children:react.Children.map(children,(child=>react.isValidElement(child)?"img"===child.type||(0,isMuiElement.Z)(child,["Image"])?react.cloneElement(child,{className:(0,clsx.Z)(classes.img,child.props.className)}):child:null))}))})),ImageListItem_component_ImageListItem=props=>(0,jsx_runtime.jsx)(ImageListItem_ImageListItem,{"data-testid":"imageListItem",...props});try{ImageListItem_component_ImageListItem.displayName="ImageListItem",ImageListItem_component_ImageListItem.__docgenInfo={description:"",displayName:"ImageListItem",props:{children:{defaultValue:null,description:"The content of the component, normally an `<img>`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<ImageListItemClasses> & Partial<ClassNameMap<never>>)"}},cols:{defaultValue:{value:"1"},description:"Width of the item in number of grid columns.",name:"cols",required:!1,type:{name:"number"}},rows:{defaultValue:{value:"1"},description:"Height of the item in number of grid rows.",name:"rows",required:!1,type:{name:"number"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Layout/Image/ImageListItem/ImageListItem.component.tsx#ImageListItem"]={docgenInfo:ImageListItem_component_ImageListItem.__docgenInfo,name:"ImageListItem",path:"src/stories/Layout/Image/ImageListItem/ImageListItem.component.tsx#ImageListItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference")},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);