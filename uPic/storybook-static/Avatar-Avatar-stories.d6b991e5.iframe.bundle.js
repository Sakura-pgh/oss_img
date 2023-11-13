"use strict";(self.webpackChunk_symphony_common_web_ui=self.webpackChunk_symphony_common_web_ui||[]).push([[9454],{"./src/stories/DataDisplay/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Avatar:()=>Avatar_stories_Avatar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var react=__webpack_require__("./node_modules/react/index.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiAvatar",slot)}(0,generateUtilityClasses.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const _excluded=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme,ownerState})=>(0,esm_extends.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},"square"===ownerState.variant&&{borderRadius:0},ownerState.colorDefault&&(0,esm_extends.Z)({color:(theme.vars||theme).palette.background.default},theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===theme.palette.mode?theme.palette.grey[400]:theme.palette.grey[600]})))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",imgProps,sizes,src,srcSet,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}((0,esm_extends.Z)({},imgProps,{src,srcSet})),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState=(0,esm_extends.Z)({},props,{colorDefault:!hasImgNotFailing,component,variant}),classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,getAvatarUtilityClass,classes)})(ownerState);return children=hasImgNotFailing?(0,jsx_runtime.jsx)(AvatarImg,(0,esm_extends.Z)({alt,srcSet,src,sizes,ownerState,className:classes.img},imgProps)):null!=childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other,{children}))})),Avatar_component_Avatar=props=>(0,jsx_runtime.jsx)(Avatar_Avatar,{"data-testid":"avatar",...props});try{Avatar_component_Avatar.displayName="Avatar",Avatar_component_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{alt:{defaultValue:null,description:"Used in combination with `src` or `srcSet` to\nprovide an alt attribute for the rendered `img` element.",name:"alt",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Used to render icon or text elements inside the Avatar if `src` is not set.\nThis can be an element, or just a string.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<AvatarClasses> & Partial<ClassNameMap<never>>)"}},imgProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.\nIt can be used to listen for the loading error event.",name:"imgProps",required:!1,type:{name:"(ImgHTMLAttributes<HTMLImageElement> & { sx?: SxProps<Theme>; })"}},sizes:{defaultValue:null,description:"The `sizes` attribute for the `img` element.",name:"sizes",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The `src` attribute for the `img` element.",name:"src",required:!1,type:{name:"string"}},srcSet:{defaultValue:null,description:"The `srcSet` attribute for the `img` element.\nUse this attribute for responsive image display.",name:"srcSet",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'circular'"},description:"The shape of the avatar.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"circular"'},{value:'"rounded"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/DataDisplay/Avatar/Avatar.component.tsx#Avatar"]={docgenInfo:Avatar_component_Avatar.__docgenInfo,name:"Avatar",path:"src/stories/DataDisplay/Avatar/Avatar.component.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}var _Avatar$parameters,_Avatar$parameters2,_Avatar$parameters2$d;const Avatar_stories_Avatar={args:{}},Avatar_stories={component:Avatar_component_Avatar,render:_ref=>{let{...args}=_ref;return(0,jsx_runtime.jsx)(Avatar_component_Avatar,{...args})}};Avatar_stories_Avatar.parameters={...Avatar_stories_Avatar.parameters,docs:{...null===(_Avatar$parameters=Avatar_stories_Avatar.parameters)||void 0===_Avatar$parameters?void 0:_Avatar$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Avatar$parameters2=Avatar_stories_Avatar.parameters)||void 0===_Avatar$parameters2||null===(_Avatar$parameters2$d=_Avatar$parameters2.docs)||void 0===_Avatar$parameters2$d?void 0:_Avatar$parameters2$d.source}}};const __namedExportsOrder=["Avatar"]}}]);