"use strict";(self.webpackChunk_symphony_common_web_ui=self.webpackChunk_symphony_common_web_ui||[]).push([[9320],{"./node_modules/@mui/base/Portal/Portal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/utils/esm/setRef.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Portal=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Portal(props,forwardedRef){const{children,container,disablePortal=!1}=props,[mountNode,setMountNode]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.Z)(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)?children.ref:null,forwardedRef);if((0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{disablePortal||setMountNode(function getContainer(container){return"function"==typeof container?container():container}(container)||document.body)}),[container,disablePortal]),(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{if(mountNode&&!disablePortal)return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__.Z)(forwardedRef,mountNode),()=>{(0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__.Z)(forwardedRef,null)}}),[forwardedRef,mountNode,disablePortal]),disablePortal){if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const newProps={ref:handleRef};return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,newProps)}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:mountNode?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children,mountNode):mountNode})}))},"./node_modules/@mui/base/utils/appendOwnerState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>appendOwnerState});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_isHostComponent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/utils/isHostComponent.js");function appendOwnerState(elementType,otherProps,ownerState){return void 0===elementType||(0,_isHostComponent__WEBPACK_IMPORTED_MODULE_0__.X)(elementType)?otherProps:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},otherProps,{ownerState:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},otherProps.ownerState,ownerState)})}},"./node_modules/@mui/base/utils/extractEventHandlers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function extractEventHandlers(object,excludeKeys=[]){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]&&!excludeKeys.includes(prop))).forEach((prop=>{result[prop]=object[prop]})),result}__webpack_require__.d(__webpack_exports__,{_:()=>extractEventHandlers})},"./node_modules/@mui/base/utils/isHostComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isHostComponent(element){return"string"==typeof element}__webpack_require__.d(__webpack_exports__,{X:()=>isHostComponent})},"./node_modules/@mui/base/utils/useSlotProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useSlotProps});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),useForkRef=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),appendOwnerState=__webpack_require__("./node_modules/@mui/base/utils/appendOwnerState.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extractEventHandlers=__webpack_require__("./node_modules/@mui/base/utils/extractEventHandlers.js");function omitEventHandlers(object){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>!(prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]))).forEach((prop=>{result[prop]=object[prop]})),result}const _excluded=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function useSlotProps(parameters){var _parameters$additiona;const{elementType,externalSlotProps,ownerState,skipResolvingSlotProps=!1}=parameters,rest=(0,objectWithoutPropertiesLoose.Z)(parameters,_excluded),resolvedComponentsProps=skipResolvingSlotProps?{}:function resolveComponentProps(componentProps,ownerState,slotState){return"function"==typeof componentProps?componentProps(ownerState,slotState):componentProps}(externalSlotProps,ownerState),{props:mergedProps,internalRef}=function mergeSlotProps(parameters){const{getSlotProps,additionalProps,externalSlotProps,externalForwardedProps,className}=parameters;if(!getSlotProps){const joinedClasses=(0,clsx.Z)(null==additionalProps?void 0:additionalProps.className,className,null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className),mergedStyle=(0,esm_extends.Z)({},null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.Z)({},additionalProps,externalForwardedProps,externalSlotProps);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:void 0}}const eventHandlers=(0,extractEventHandlers._)((0,esm_extends.Z)({},externalForwardedProps,externalSlotProps)),componentsPropsWithoutEventHandlers=omitEventHandlers(externalSlotProps),otherPropsWithoutEventHandlers=omitEventHandlers(externalForwardedProps),internalSlotProps=getSlotProps(eventHandlers),joinedClasses=(0,clsx.Z)(null==internalSlotProps?void 0:internalSlotProps.className,null==additionalProps?void 0:additionalProps.className,className,null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className),mergedStyle=(0,esm_extends.Z)({},null==internalSlotProps?void 0:internalSlotProps.style,null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.Z)({},internalSlotProps,additionalProps,otherPropsWithoutEventHandlers,componentsPropsWithoutEventHandlers);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:internalSlotProps.ref}}((0,esm_extends.Z)({},rest,{externalSlotProps:resolvedComponentsProps})),ref=(0,useForkRef.Z)(internalRef,null==resolvedComponentsProps?void 0:resolvedComponentsProps.ref,null==(_parameters$additiona=parameters.additionalProps)?void 0:_parameters$additiona.ref);return(0,appendOwnerState.$)(elementType,(0,esm_extends.Z)({},mergedProps,{ref}),ownerState)}},"./node_modules/@mui/material/Grow/Grow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_transitions_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/transitions/utils.js"),_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function getScale(value){return`scale(${value}, ${value**2})`}const styles={entering:{opacity:1,transform:getScale(1)},entered:{opacity:1,transform:"none"}},isWebKit154="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Grow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Grow(props,ref){const{addEndListener,appear=!0,children,easing,in:inProp,onEnter,onEntered,onEntering,onExit,onExited,onExiting,style,timeout="auto",TransitionComponent=react_transition_group__WEBPACK_IMPORTED_MODULE_2__.ZP}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__.Z)(props,_excluded),timer=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),autoTimeout=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),theme=(0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__.Z)(),nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.Z)(nodeRef,children.ref,ref),normalizedTransitionCallback=callback=>maybeIsAppearing=>{if(callback){const node=nodeRef.current;void 0===maybeIsAppearing?callback(node):callback(node,maybeIsAppearing)}},handleEntering=normalizedTransitionCallback(onEntering),handleEnter=normalizedTransitionCallback(((node,isAppearing)=>{(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.n)(node);const{duration:transitionDuration,delay,easing:transitionTimingFunction}=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.C)({style,timeout,easing},{mode:"enter"});let duration;"auto"===timeout?(duration=theme.transitions.getAutoHeightDuration(node.clientHeight),autoTimeout.current=duration):duration=transitionDuration,node.style.transition=[theme.transitions.create("opacity",{duration,delay}),theme.transitions.create("transform",{duration:isWebKit154?duration:.666*duration,delay,easing:transitionTimingFunction})].join(","),onEnter&&onEnter(node,isAppearing)})),handleEntered=normalizedTransitionCallback(onEntered),handleExiting=normalizedTransitionCallback(onExiting),handleExit=normalizedTransitionCallback((node=>{const{duration:transitionDuration,delay,easing:transitionTimingFunction}=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.C)({style,timeout,easing},{mode:"exit"});let duration;"auto"===timeout?(duration=theme.transitions.getAutoHeightDuration(node.clientHeight),autoTimeout.current=duration):duration=transitionDuration,node.style.transition=[theme.transitions.create("opacity",{duration,delay}),theme.transitions.create("transform",{duration:isWebKit154?duration:.666*duration,delay:isWebKit154?delay:delay||.333*duration,easing:transitionTimingFunction})].join(","),node.style.opacity=0,node.style.transform=getScale(.75),onExit&&onExit(node)})),handleExited=normalizedTransitionCallback(onExited);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(timer.current)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({appear,in:inProp,nodeRef,onEnter:handleEnter,onEntered:handleEntered,onEntering:handleEntering,onExit:handleExit,onExited:handleExited,onExiting:handleExiting,addEndListener:next=>{"auto"===timeout&&(timer.current=setTimeout(next,autoTimeout.current||0)),addEndListener&&addEndListener(nodeRef.current,next)},timeout:"auto"===timeout?null:timeout},other,{children:(state,childProps)=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({style:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({opacity:0,transform:getScale(.75),visibility:"exited"!==state||inProp?void 0:"hidden"},styles[state],style,children.props.style),ref:handleRef},childProps))}))}));Grow.muiSupportAuto=!0;const __WEBPACK_DEFAULT_EXPORT__=Grow},"./node_modules/@mui/material/Tooltip/Tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Tooltip_Tooltip});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),appendOwnerState=__webpack_require__("./node_modules/@mui/base/utils/appendOwnerState.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),Grow=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),Popper=__webpack_require__("./node_modules/@mui/material/Popper/Popper.js"),useEventCallback=__webpack_require__("./node_modules/@mui/material/utils/useEventCallback.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),useId=__webpack_require__("./node_modules/@mui/material/utils/useId.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/material/utils/useIsFocusVisible.js"),useControlled=__webpack_require__("./node_modules/@mui/material/utils/useControlled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTooltipUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTooltip",slot)}const Tooltip_tooltipClasses=(0,generateUtilityClasses.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];const TooltipPopper=(0,styled.ZP)(Popper.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.popper,!ownerState.disableInteractive&&styles.popperInteractive,ownerState.arrow&&styles.popperArrow,!ownerState.open&&styles.popperClose]}})((({theme,ownerState,open})=>(0,esm_extends.Z)({zIndex:(theme.vars||theme).zIndex.tooltip,pointerEvents:"none"},!ownerState.disableInteractive&&{pointerEvents:"auto"},!open&&{pointerEvents:"none"},ownerState.arrow&&{[`&[data-popper-placement*="bottom"] .${Tooltip_tooltipClasses.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Tooltip_tooltipClasses.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Tooltip_tooltipClasses.arrow}`]:(0,esm_extends.Z)({},ownerState.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Tooltip_tooltipClasses.arrow}`]:(0,esm_extends.Z)({},ownerState.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})}))),TooltipTooltip=(0,styled.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.tooltip,ownerState.touch&&styles.touch,ownerState.arrow&&styles.tooltipArrow,styles[`tooltipPlacement${(0,capitalize.Z)(ownerState.placement.split("-")[0])}`]]}})((({theme,ownerState})=>{return(0,esm_extends.Z)({backgroundColor:theme.vars?theme.vars.palette.Tooltip.bg:(0,colorManipulator.Fq)(theme.palette.grey[700],.92),borderRadius:(theme.vars||theme).shape.borderRadius,color:(theme.vars||theme).palette.common.white,fontFamily:theme.typography.fontFamily,padding:"4px 8px",fontSize:theme.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:theme.typography.fontWeightMedium},ownerState.arrow&&{position:"relative",margin:0},ownerState.touch&&{padding:"8px 16px",fontSize:theme.typography.pxToRem(14),lineHeight:(value=16/14,Math.round(1e5*value)/1e5)+"em",fontWeight:theme.typography.fontWeightRegular},{[`.${Tooltip_tooltipClasses.popper}[data-popper-placement*="left"] &`]:(0,esm_extends.Z)({transformOrigin:"right center"},ownerState.isRtl?(0,esm_extends.Z)({marginLeft:"14px"},ownerState.touch&&{marginLeft:"24px"}):(0,esm_extends.Z)({marginRight:"14px"},ownerState.touch&&{marginRight:"24px"})),[`.${Tooltip_tooltipClasses.popper}[data-popper-placement*="right"] &`]:(0,esm_extends.Z)({transformOrigin:"left center"},ownerState.isRtl?(0,esm_extends.Z)({marginRight:"14px"},ownerState.touch&&{marginRight:"24px"}):(0,esm_extends.Z)({marginLeft:"14px"},ownerState.touch&&{marginLeft:"24px"})),[`.${Tooltip_tooltipClasses.popper}[data-popper-placement*="top"] &`]:(0,esm_extends.Z)({transformOrigin:"center bottom",marginBottom:"14px"},ownerState.touch&&{marginBottom:"24px"}),[`.${Tooltip_tooltipClasses.popper}[data-popper-placement*="bottom"] &`]:(0,esm_extends.Z)({transformOrigin:"center top",marginTop:"14px"},ownerState.touch&&{marginTop:"24px"})});var value})),TooltipArrow=(0,styled.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(props,styles)=>styles.arrow})((({theme})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:theme.vars?theme.vars.palette.Tooltip.bg:(0,colorManipulator.Fq)(theme.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let hystersisOpen=!1,hystersisTimer=null,cursorPosition={x:0,y:0};function composeEventHandler(handler,eventHandler){return event=>{eventHandler&&eventHandler(event),handler(event)}}const Tooltip_Tooltip=react.forwardRef((function Tooltip(inProps,ref){var _ref,_slots$popper,_ref2,_ref3,_slots$transition,_ref4,_slots$tooltip,_ref5,_slots$arrow,_slotProps$popper,_ref6,_slotProps$popper2,_slotProps$transition,_slotProps$tooltip,_ref7,_slotProps$tooltip2,_slotProps$arrow,_ref8,_slotProps$arrow2;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiTooltip"}),{arrow=!1,children:childrenProp,components={},componentsProps={},describeChild=!1,disableFocusListener=!1,disableHoverListener=!1,disableInteractive:disableInteractiveProp=!1,disableTouchListener=!1,enterDelay=100,enterNextDelay=0,enterTouchDelay=700,followCursor=!1,id:idProp,leaveDelay=0,leaveTouchDelay=1500,onClose,onOpen,open:openProp,placement="bottom",PopperComponent:PopperComponentProp,PopperProps={},slotProps={},slots={},title,TransitionComponent:TransitionComponentProp=Grow.Z,TransitionProps}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),children=react.isValidElement(childrenProp)?childrenProp:(0,jsx_runtime.jsx)("span",{children:childrenProp}),theme=(0,useTheme.Z)(),isRtl="rtl"===theme.direction,[childNode,setChildNode]=react.useState(),[arrowRef,setArrowRef]=react.useState(null),ignoreNonTouchEvents=react.useRef(!1),disableInteractive=disableInteractiveProp||followCursor,closeTimer=react.useRef(),enterTimer=react.useRef(),leaveTimer=react.useRef(),touchTimer=react.useRef(),[openState,setOpenState]=(0,useControlled.Z)({controlled:openProp,default:!1,name:"Tooltip",state:"open"});let open=openState;const id=(0,useId.Z)(idProp),prevUserSelect=react.useRef(),stopTouchInteraction=react.useCallback((()=>{void 0!==prevUserSelect.current&&(document.body.style.WebkitUserSelect=prevUserSelect.current,prevUserSelect.current=void 0),clearTimeout(touchTimer.current)}),[]);react.useEffect((()=>()=>{clearTimeout(closeTimer.current),clearTimeout(enterTimer.current),clearTimeout(leaveTimer.current),stopTouchInteraction()}),[stopTouchInteraction]);const handleOpen=event=>{clearTimeout(hystersisTimer),hystersisOpen=!0,setOpenState(!0),onOpen&&!open&&onOpen(event)},handleClose=(0,useEventCallback.Z)((event=>{clearTimeout(hystersisTimer),hystersisTimer=setTimeout((()=>{hystersisOpen=!1}),800+leaveDelay),setOpenState(!1),onClose&&open&&onClose(event),clearTimeout(closeTimer.current),closeTimer.current=setTimeout((()=>{ignoreNonTouchEvents.current=!1}),theme.transitions.duration.shortest)})),handleEnter=event=>{ignoreNonTouchEvents.current&&"touchstart"!==event.type||(childNode&&childNode.removeAttribute("title"),clearTimeout(enterTimer.current),clearTimeout(leaveTimer.current),enterDelay||hystersisOpen&&enterNextDelay?enterTimer.current=setTimeout((()=>{handleOpen(event)}),hystersisOpen?enterNextDelay:enterDelay):handleOpen(event))},handleLeave=event=>{clearTimeout(enterTimer.current),clearTimeout(leaveTimer.current),leaveTimer.current=setTimeout((()=>{handleClose(event)}),leaveDelay)},{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.Z)(),[,setChildIsFocusVisible]=react.useState(!1),handleBlur=event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&(setChildIsFocusVisible(!1),handleLeave(event))},handleFocus=event=>{childNode||setChildNode(event.currentTarget),handleFocusVisible(event),!0===isFocusVisibleRef.current&&(setChildIsFocusVisible(!0),handleEnter(event))},detectTouchStart=event=>{ignoreNonTouchEvents.current=!0;const childrenProps=children.props;childrenProps.onTouchStart&&childrenProps.onTouchStart(event)},handleMouseOver=handleEnter,handleMouseLeave=handleLeave,handleTouchStart=event=>{detectTouchStart(event),clearTimeout(leaveTimer.current),clearTimeout(closeTimer.current),stopTouchInteraction(),prevUserSelect.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",touchTimer.current=setTimeout((()=>{document.body.style.WebkitUserSelect=prevUserSelect.current,handleEnter(event)}),enterTouchDelay)},handleTouchEnd=event=>{children.props.onTouchEnd&&children.props.onTouchEnd(event),stopTouchInteraction(),clearTimeout(leaveTimer.current),leaveTimer.current=setTimeout((()=>{handleClose(event)}),leaveTouchDelay)};react.useEffect((()=>{if(open)return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)};function handleKeyDown(nativeEvent){"Escape"!==nativeEvent.key&&"Esc"!==nativeEvent.key||handleClose(nativeEvent)}}),[handleClose,open]);const handleRef=(0,useForkRef.Z)(children.ref,focusVisibleRef,setChildNode,ref);title||0===title||(open=!1);const popperRef=react.useRef(),nameOrDescProps={},titleIsString="string"==typeof title;describeChild?(nameOrDescProps.title=open||!titleIsString||disableHoverListener?null:title,nameOrDescProps["aria-describedby"]=open?id:null):(nameOrDescProps["aria-label"]=titleIsString?title:null,nameOrDescProps["aria-labelledby"]=open&&!titleIsString?id:null);const childrenProps=(0,esm_extends.Z)({},nameOrDescProps,other,children.props,{className:(0,clsx.Z)(other.className,children.props.className),onTouchStart:detectTouchStart,ref:handleRef},followCursor?{onMouseMove:event=>{const childrenProps=children.props;childrenProps.onMouseMove&&childrenProps.onMouseMove(event),cursorPosition={x:event.clientX,y:event.clientY},popperRef.current&&popperRef.current.update()}}:{});const interactiveWrapperListeners={};disableTouchListener||(childrenProps.onTouchStart=handleTouchStart,childrenProps.onTouchEnd=handleTouchEnd),disableHoverListener||(childrenProps.onMouseOver=composeEventHandler(handleMouseOver,childrenProps.onMouseOver),childrenProps.onMouseLeave=composeEventHandler(handleMouseLeave,childrenProps.onMouseLeave),disableInteractive||(interactiveWrapperListeners.onMouseOver=handleMouseOver,interactiveWrapperListeners.onMouseLeave=handleMouseLeave)),disableFocusListener||(childrenProps.onFocus=composeEventHandler(handleFocus,childrenProps.onFocus),childrenProps.onBlur=composeEventHandler(handleBlur,childrenProps.onBlur),disableInteractive||(interactiveWrapperListeners.onFocus=handleFocus,interactiveWrapperListeners.onBlur=handleBlur));const popperOptions=react.useMemo((()=>{var _PopperProps$popperOp;let tooltipModifiers=[{name:"arrow",enabled:Boolean(arrowRef),options:{element:arrowRef,padding:4}}];return null!=(_PopperProps$popperOp=PopperProps.popperOptions)&&_PopperProps$popperOp.modifiers&&(tooltipModifiers=tooltipModifiers.concat(PopperProps.popperOptions.modifiers)),(0,esm_extends.Z)({},PopperProps.popperOptions,{modifiers:tooltipModifiers})}),[arrowRef,PopperProps]),ownerState=(0,esm_extends.Z)({},props,{isRtl,arrow,disableInteractive,placement,PopperComponentProp,touch:ignoreNonTouchEvents.current}),classes=(ownerState=>{const{classes,disableInteractive,arrow,touch,placement}=ownerState,slots={popper:["popper",!disableInteractive&&"popperInteractive",arrow&&"popperArrow"],tooltip:["tooltip",arrow&&"tooltipArrow",touch&&"touch",`tooltipPlacement${(0,capitalize.Z)(placement.split("-")[0])}`],arrow:["arrow"]};return(0,composeClasses.Z)(slots,getTooltipUtilityClass,classes)})(ownerState),PopperComponent=null!=(_ref=null!=(_slots$popper=slots.popper)?_slots$popper:components.Popper)?_ref:TooltipPopper,TransitionComponent=null!=(_ref2=null!=(_ref3=null!=(_slots$transition=slots.transition)?_slots$transition:components.Transition)?_ref3:TransitionComponentProp)?_ref2:Grow.Z,TooltipComponent=null!=(_ref4=null!=(_slots$tooltip=slots.tooltip)?_slots$tooltip:components.Tooltip)?_ref4:TooltipTooltip,ArrowComponent=null!=(_ref5=null!=(_slots$arrow=slots.arrow)?_slots$arrow:components.Arrow)?_ref5:TooltipArrow,popperProps=(0,appendOwnerState.$)(PopperComponent,(0,esm_extends.Z)({},PopperProps,null!=(_slotProps$popper=slotProps.popper)?_slotProps$popper:componentsProps.popper,{className:(0,clsx.Z)(classes.popper,null==PopperProps?void 0:PopperProps.className,null==(_ref6=null!=(_slotProps$popper2=slotProps.popper)?_slotProps$popper2:componentsProps.popper)?void 0:_ref6.className)}),ownerState),transitionProps=(0,appendOwnerState.$)(TransitionComponent,(0,esm_extends.Z)({},TransitionProps,null!=(_slotProps$transition=slotProps.transition)?_slotProps$transition:componentsProps.transition),ownerState),tooltipProps=(0,appendOwnerState.$)(TooltipComponent,(0,esm_extends.Z)({},null!=(_slotProps$tooltip=slotProps.tooltip)?_slotProps$tooltip:componentsProps.tooltip,{className:(0,clsx.Z)(classes.tooltip,null==(_ref7=null!=(_slotProps$tooltip2=slotProps.tooltip)?_slotProps$tooltip2:componentsProps.tooltip)?void 0:_ref7.className)}),ownerState),tooltipArrowProps=(0,appendOwnerState.$)(ArrowComponent,(0,esm_extends.Z)({},null!=(_slotProps$arrow=slotProps.arrow)?_slotProps$arrow:componentsProps.arrow,{className:(0,clsx.Z)(classes.arrow,null==(_ref8=null!=(_slotProps$arrow2=slotProps.arrow)?_slotProps$arrow2:componentsProps.arrow)?void 0:_ref8.className)}),ownerState);return(0,jsx_runtime.jsxs)(react.Fragment,{children:[react.cloneElement(children,childrenProps),(0,jsx_runtime.jsx)(PopperComponent,(0,esm_extends.Z)({as:null!=PopperComponentProp?PopperComponentProp:Popper.Z,placement,anchorEl:followCursor?{getBoundingClientRect:()=>({top:cursorPosition.y,left:cursorPosition.x,right:cursorPosition.x,bottom:cursorPosition.y,width:0,height:0})}:childNode,popperRef,open:!!childNode&&open,id,transition:!0},interactiveWrapperListeners,popperProps,{popperOptions,children:({TransitionProps:TransitionPropsInner})=>(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({timeout:theme.transitions.duration.shorter},TransitionPropsInner,transitionProps,{children:(0,jsx_runtime.jsxs)(TooltipComponent,(0,esm_extends.Z)({},tooltipProps,{children:[title,arrow?(0,jsx_runtime.jsx)(ArrowComponent,(0,esm_extends.Z)({},tooltipArrowProps,{ref:setArrowRef})):null]}))}))}))]})}))}}]);