(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/visibility-icon.61689cf2.svg"},16:function(e,t,n){e.exports=n.p+"static/media/expand-less-icon.b7400197.svg"},18:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(8),a=n.n(i),s=n(9),l=n(3),c=n(4),u=n(6),d=n(5),m=n(7),h=n(1),p={colors:{primary:"#ba68c8",lightPrimary:"#f3e5f5",white:"#ffffff",lightGray:"#fafafa",mediumGray:"#9e9e9e",darkGray:"#424242",black:"#000000",red:"#e53935",orange:"#fb8c00",yellow:"#fdd835",green:"#6dc113",blue:"#03a9f4",purple:"#9c27b0"},typography:{fontFamily:'"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'},spacers:{xs:".25em",sm:".5em",md:"1em",lg:"2em"},mediaSizes:{largeDesktop:1440,smallDesktop:1200,tablet:768,phone:576,smallPhone:375},grid:{largeDesktop:{vw:80,percent:70},smallDesktop:{vw:95,percent:100},phone:{vw:100,percent:100}},pegSizes:{desktop:48,tablet:36,phone:20,smallPhone:16},boxShadow:"1px 2px 4px #bdbdbd"},f=p,g=n(2);function y(){var e=Object(g.a)(["\n\n  html { \n    font-size: calc(0.9em + 0.08vw); \n  }\n\n  body {\n    min-height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    overflow-anchor: none;\n    background-color: white;\n    font-family: ",";\n  }\n\n  button, input {\n    padding: 0;\n    margin: 0;\n    outline:0;\n    font-family: ",";\n    font-size: inherit;\n    cursor: pointer;\n\n    &:disabled {\n      cursor: auto;\n    }\n  }\n"]);return y=function(){return e},e}var b=Object(h.b)(y(),function(e){return e.theme.typography.fontFamily},function(e){return e.theme.typography.fontFamily});function w(){var e=Object(g.a)(["\n    font-size: ","rem;\n  "]);return w=function(){return e},e}function v(){var e=Object(g.a)(["\n    font-size: ","rem;\n  "]);return v=function(){return e},e}function x(){var e=Object(g.a)(["\n    padding: ",";\n  "]);return x=function(){return e},e}function k(){var e=Object(g.a)(["\n    padding: ",";\n  "]);return k=function(){return e},e}var E=f.mediaSizes,C=Object.keys(E).reduce(function(e,t){return e[t]=function(){return Object(h.c)(["@media (max-width:","rem){","}"],E[t]/16,h.c.apply(void 0,arguments))},e},{});C.padding=Object(h.c)(["padding:",";"," ",""],function(e){return e.theme.spacers.lg},C.tablet(k(),function(e){return e.theme.spacers.md}),C.phone(x(),function(e){return e.theme.spacers.sm})),C.fontSizing=function(e){return Object(h.c)(["font-size:","rem;"," ",""],e,C.tablet(v(),.8*e),C.phone(w(),.6*e))};var _=C,P=h.d.h1.withConfig({displayName:"typography__H1",componentId:"tk1pg-0"})(["margin:0;font-size:3em;font-weight:300;text-transform:uppercase;line-height:2;"]),W=h.d.h2.withConfig({displayName:"typography__H2",componentId:"tk1pg-1"})(["margin:0;font-size:2em;font-weight:300;text-transform:uppercase;"]),j=h.d.h3.withConfig({displayName:"typography__H3",componentId:"tk1pg-2"})(["margin:0;font-weight:400;text-transform:uppercase;"]),N=h.d.h4.withConfig({displayName:"typography__H4",componentId:"tk1pg-3"})(["margin:0;font-weight:400;text-transform:uppercase;"]),O=h.d.p.withConfig({displayName:"typography__P",componentId:"tk1pg-4"})(["margin-top:0.25em;margin-bottom:1em;font-weight:300;"]),I=h.d.small.withConfig({displayName:"typography__Small",componentId:"tk1pg-5"})(["font-weight:300;color:",";"],function(e){return e.theme.colors.darkGray}),S=h.d.span.withConfig({displayName:"typography__Semibold",componentId:"tk1pg-6"})(["font-weight:400;"]),z=h.d.a.withConfig({displayName:"typography__A",componentId:"tk1pg-7"})(["color:",";text-decoration:none;&:hover{text-decoration:underline;}&:visited{color:",";}"],function(e){return e.theme.colors.blue},function(e){return e.theme.colors.purple}),G=h.d.ul.withConfig({displayName:"typography__Ul",componentId:"tk1pg-8"})(["margin-top:0.25em;margin-bottom:1em;padding-left:1.5em;"]),M=h.d.li.withConfig({displayName:"typography__Li",componentId:"tk1pg-9"})(["list-style-type:none;padding-bottom:0.5em;font-weight:300;"]);function R(){var e=Object(g.a)(["\n    bottom: ","px;\n  "]);return R=function(){return e},e}var B=h.d.div.withConfig({displayName:"styled__Container",componentId:"lw1uy8-0"})(["display:",";position:absolute;bottom:","px;height:","px;width:","px;z-index:100;",""],function(e){return e.isVisible?"block":"none"},function(e){return e.pegRadius},function(e){return e.viewBoxHeight},function(e){return e.viewBoxWidth},_.phone(R(),function(e){return 1.75*e.pegRadius})),D=h.d.svg.attrs({viewBox:function(e){return e.viewBox}}).withConfig({displayName:"styled__ViewBox",componentId:"lw1uy8-1"})(["position:relative;height:","px;width:","px;filter:drop-shadow(",");"],function(e){return e.viewBoxHeight},function(e){return e.viewBoxWidth},function(e){return e.theme.boxShadow}),L=h.d.path.attrs({d:function(e){return e.path},stroke:"white",fill:"none"}).withConfig({displayName:"styled__CurvePath",componentId:"lw1uy8-2"})(["stroke-width:",";stroke-linecap:round;"],function(e){return e.strokeWidth}),A=h.d.button.withConfig({displayName:"styled__ColorDot",componentId:"lw1uy8-3"})(['position:absolute;top:0;left:0;offset-path:path("','");offset-distance:',"%;width:","px;height:","px;border-radius:50%;border:none;background:",";z-index:200;&:hover{transform:scale(1.3);}&:focus{outline:0;}"],function(e){return e.path},function(e){return e.distance},function(e){return e.colorDotWidth},function(e){return e.colorDotWidth},function(e){return e.theme.colors[e.color]});var V=function(e){var t,n,r,i,a=e.isVisible,s=e.colors,l=e.updatePegColor,c=e.pegIndex,u=e.pegWidth,d=Math.round(u/2);u<30?(t=4*d,n=Math.round(2.5*d),r=Math.round(.6*n),i=20):(t=2.5*d,n=Math.round(1.3*d),r=Math.round(.6*n),i=25);var m=2*t+n,h=t+n/2,p=function(e){return e*(Math.PI/180)},f=t-Math.sin(p(90-i))*t,g=0+n/2+f,y=h-Math.sin(p(i))*t,b=2*t+n/2-f,w=y,v="0 0 ".concat(m," ").concat(h),x="M ".concat(g," ").concat(y," A ").concat(t," ").concat(t," 0 0 1 ").concat(b," ").concat(w);return o.a.createElement(B,{isVisible:a,pegRadius:d,viewBoxWidth:m,viewBoxHeight:h},o.a.createElement(D,{viewBox:v,viewBoxWidth:m,viewBoxHeight:h},o.a.createElement(L,{path:x,strokeWidth:n})),s.map(function(e,t){return o.a.createElement(A,{color:e,distance:20*t,path:x,colorDotWidth:r,onClick:function(){return l(e,c)}})}))},Y=h.d.div.withConfig({displayName:"styled__Container",componentId:"p5zksf-0"})(["position:relative;display:inline-block;display:flex;justify-content:center;"]),H=h.d.div.withConfig({displayName:"styled__PegContainer",componentId:"p5zksf-1"})(["display:flex;align-items:center;justify-content:center;min-height:","px;min-width:","px;margin:0 ","px;"],function(e){return e.pegWidth},function(e){return e.pegWidth},function(e){return Math.floor(e.pegWidth/2)}),T=h.d.button.withConfig({displayName:"styled__Peg",componentId:"p5zksf-2"})(["background-color:",";min-height:","px;min-width:","px;border-radius:50%;border:none;z-index:",";"],function(e){return e.theme.colors[e.color||"mediumGray"]},function(e){return e.color?e.pegWidth:Math.floor(e.pegWidth/2)},function(e){return e.color?e.pegWidth:Math.floor(e.pegWidth/2)},function(e){return e.colorPickerVisible?200:0});function U(e){var t=e.color,n=e.disabled,r=e.index,i=e.indexOfVisibleColorPicker,a=e.handlePegClick,s=e.showColorPicker,l=e.hideColorPicker,c=e.updatePegColor,u=e.colors,d=e.pegWidth,m=!n&&r===i;return o.a.createElement(Y,{onMouseLeave:function(){return l()}},o.a.createElement(V,{isVisible:m,colors:u,updatePegColor:c,pegIndex:r,pegWidth:d}),o.a.createElement(H,{pegWidth:d},o.a.createElement(T,{color:t,colorPickerVisible:m,onMouseEnter:function(){return s(r)},onFocus:function(){return s(r)},onClick:function(){return a(t,r)},disabled:n,pegWidth:d})))}U.defaultProps={indexOfVisibleColorPicker:null};var q=U;function K(){var e=Object(g.a)(["\n    height: 1.6em;\n    width: 1.6em;\n    font-size: 1.1em;\n  "]);return K=function(){return e},e}function F(){var e=Object(g.a)(["\n    font-size: 1.1em;\n    line-height: 1em;\n    padding: 0.25em 0.5em;\n  "]);return F=function(){return e},e}var Z=h.d.button.withConfig({displayName:"buttons__PrimaryButton",componentId:"jbkhcv-0"})(["padding:0.25em 1em;background-color:",";border:1px solid ",";border-radius:1em;font-size:1.3em;line-height:1.3em;text-transform:uppercase;color:white;&:hover,&:focus{color:",";}",""],function(e){return e.theme.colors.black},function(e){return e.theme.colors.black},function(e){return e.theme.colors.lightPrimary},_.phone(F())),J=h.d.button.withConfig({displayName:"buttons__OutlineButton",componentId:"jbkhcv-1"})(["padding:0.25em 1em;background-color:white;box-sizing:border-box;border:1px solid ",";border-radius:1em;font-size:1.2em;text-transform:uppercase;color:",";&:hover,&:focus{background-color:",";}"],function(e){return e.theme.colors.black},function(e){return e.theme.colors.black},function(e){return e.theme.colors.lightPrimary}),Q=h.d.button.withConfig({displayName:"buttons__RoundButton",componentId:"jbkhcv-2"})(["display:flex;align-items:center;justify-content:center;height:1.8em;width:1.8em;padding:0.25em .25em;background-color:",";border:1px solid ",";border-radius:50%;font-size:1.3em;line-height:1;text-transform:uppercase;text-align:center;color:",";&:hover,&:focus{background-color:",";}",""],function(e){return e.theme.colors.white},function(e){return e.theme.colors.black},function(e){return e.theme.colors.black},function(e){return e.theme.colors.lightPrimary},_.phone(K())),X=h.d.div.withConfig({displayName:"styled__Container",componentId:"oihqwx-0"})(["display:grid;grid-template-columns:","px  auto ",'px;grid-template-rows:auto;grid-template-areas:"round guess key";align-items:center;min-height:',"px;width:100%;padding:","px;box-sizing:border-box;"],function(e){return Math.floor(.75*e.pegWidth)},function(e){return Math.floor(2.5*e.pegWidth)},function(e){return e.pegWidth},function(e){return Math.floor(e.pegWidth/2)}),$=h.d.div.withConfig({displayName:"styled__RoundNum",componentId:"oihqwx-1"})(["grid-area:round;color:",";"],function(e){return e.theme.colors.darkGray}),ee=h.d.div.withConfig({displayName:"styled__GuessPegs",componentId:"oihqwx-2"})(["grid-area:guess;display:flex;align-items:center;justify-content:center;flex-wrap:no-wrap;"]),te=h.d.div.withConfig({displayName:"styled__KeyPegs",componentId:"oihqwx-3"})(["grid-area:key;display:flex;align-items:center;justify-content:space-between;height:","px;min-width:100%;"],function(e){return e.pegWidth}),ne=h.d.div.withConfig({displayName:"styled__KeyPegContainer",componentId:"oihqwx-4"})(["align-self:",";display:flex;align-items:center;justify-content:center;min-width:","px;min-height:","px;"],function(e){return e.index%2===0?"flex-start":"flex-end"},function(e){return Math.floor(e.pegWidth/3)},function(e){return Math.floor(e.pegWidth/3)}),re=h.d.div.withConfig({displayName:"styled__KeyPeg",componentId:"oihqwx-5"})(["background-color:",";min-height:","px;min-width:","px;box-sizing:border-box;border-radius:50%;border-style:solid;border-width:","px;border-color:",";"],function(e){return e.theme.colors[e.color||"mediumGray"]},function(e){return e.color?Math.floor(e.pegWidth/3):Math.floor(e.pegWidth/6)},function(e){return e.color?Math.floor(e.pegWidth/3):Math.floor(e.pegWidth/6)},function(e){return e.color?1:0},function(e){return e.theme.black}),oe=Object(h.d)(J).withConfig({displayName:"styled__SubmitButton",componentId:"oihqwx-6"})(["justify-self:center;display:block;width:100%;padding:0.25em 0;font-size:","px;"],function(e){return Math.floor(2.5*e.pegWidth/5)}),ie=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).resetGuessColors=function(){var e=n.props.guessPegs,t=new Array(e.length).fill("");n.setState({guessColors:t})},n.showColorPicker=function(e){n.setState({indexOfVisibleColorPicker:e})},n.hideColorPicker=function(){n.setState({indexOfVisibleColorPicker:null})},n.updatePegColor=function(e,t){n.setState(function(n){var r=Object(s.a)(n.guessColors);return r[t]=e,{guessColors:r}})},n.handlePegClick=function(e,t){e&&n.updatePegColor("",t),n.showColorPicker(t)},n.state={guessColors:new Array(e.guessPegs.length).fill(""),indexOfVisibleColorPicker:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.secretPegs!==e.secretPegs&&this.resetGuessColors()}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.guessPegs,r=e.keyPegs,i=e.isCurrentRound,a=e.colors,s=e.handleNewGuess,l=e.pegWidth,c=this.state,u=c.guessColors,d=c.indexOfVisibleColorPicker,m=this.handlePegClick,h=this.showColorPicker,p=this.hideColorPicker,f=this.updatePegColor;return o.a.createElement(X,{pegWidth:l},o.a.createElement($,null,t),o.a.createElement(ee,null,n.map(function(e,t){return o.a.createElement(q,{color:e||u[t],disabled:!i,index:t,indexOfVisibleColorPicker:d,handlePegClick:m,showColorPicker:h,hideColorPicker:p,updatePegColor:f,colors:a,pegWidth:l})})),o.a.createElement(te,{pegWidth:l},i?o.a.createElement(oe,{onClick:function(){return s(u)},pegWidth:l},"Submit"):r.map(function(e,t){return o.a.createElement(ne,{index:t,pegWidth:l},o.a.createElement(re,{color:e,pegWidth:l}))})))}}]),t}(r.Component),ae=n(15),se=n.n(ae);function le(){var e=Object(g.a)(["\n    width: 7em;\n  "]);return le=function(){return e},e}function ce(){var e=Object(g.a)(["\n    width: ","vw;\n  "]);return ce=function(){return e},e}function ue(){var e=Object(g.a)(["\n    width: ","vw;\n  "]);return ue=function(){return e},e}var de=Object(h.d)(X).withConfig({displayName:"styled__SecretContainer",componentId:"xxy917-0"})(["position:fixed;z-index:200;bottom:0;width:","vw;box-sizing:border-box;background-color:",";border:1px solid ",";box-shadow:",";"," ",""],function(e){return e.theme.grid.largeDesktop.percent/100*e.theme.grid.largeDesktop.vw},function(e){return e.theme.colors.white},function(e){return e.theme.colors.mediumGray},function(e){return e.theme.boxShadow},_.smallDesktop(ue(),function(e){return e.theme.grid.smallDesktop.vw}),_.phone(ce(),function(e){return e.theme.grid.phone.vw})),me=h.d.div.withConfig({displayName:"styled__Cover",componentId:"xxy917-1"})(["position:absolute;right:0;z-index:300;width:100%;transform-origin:right;transform:scaleX(",");height:100%;background-color:",";transition-property:transform;transition-duration:2s;transition-timing-function:ease-in;transition-delay:",";"],function(e){return e.userWon||e.userLost?0:1},function(e){return e.theme.colors.lightGray},function(e){return e.userWon||e.userLost?"0.3s":0}),he=Object(h.d)(W).withConfig({displayName:"styled__CoverText",componentId:"xxy917-2"})(["position:absolute;display:block;z-index:400;opacity:",";color:",";transition-property:opacity;transition-duration:0.3s;transition-timing-function:ease-in;transition-delay:",";"],function(e){return e.userWon||e.userLost?0:1},function(e){return e.theme.colors.mediumGray},function(e){return e.userWon||e.userLost?0:"2s"}),pe=h.d.div.withConfig({displayName:"styled__RevealContainer",componentId:"xxy917-3"})(["position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:flex-end;margin:",";opacity:",";transition-property:opacity;transition-duration:0.3s;transition-timing-function:ease-in;transition-delay:",";"],function(e){return e.theme.spacers.sm},function(e){return e.userWon||e.userLost?0:1},function(e){return e.userWon||e.userLost?0:"2s"}),fe=h.d.button.attrs({"aria-labelledby":"reveal-icon-tooltip"}).withConfig({displayName:"styled__RevealIconButton",componentId:"xxy917-4"})(["width:1.5em;height:1.5em;margin-left:",";background-image:url(",");background-size:contain;background-repeat:no-repeat;background-color:transparent;border:none;"],function(e){return e.theme.spacers.sm},se.a),ge=h.d.div.attrs({role:"tooltip",id:"reveal-icon-tooltip"}).withConfig({displayName:"styled__RevealTooltip",componentId:"xxy917-5"})(["display:none;position:relative;padding:",";background-color:",";color:",";box-shadow:",";font-size:0.8em;z-index:500;",":hover &{display:block;}",""],function(e){return e.theme.spacers.xs},function(e){return e.theme.colors.white},function(e){return e.theme.colors.black},function(e){return e.theme.boxShadow},pe,_.phone(le())),ye=Object(h.d)(ee).withConfig({displayName:"styled__SecretPegs",componentId:"xxy917-6"})([""]),be=Object(h.d)(H).withConfig({displayName:"styled__SecretPegContainer",componentId:"xxy917-7"})([""]),we=Object(h.d)(T).withConfig({displayName:"styled__SecretPeg",componentId:"xxy917-8"})([""]),ve=Object(h.d)($).withConfig({displayName:"styled__LeftSpace",componentId:"xxy917-9"})([""]),xe=Object(h.d)(te).withConfig({displayName:"styled__RightSpace",componentId:"xxy917-10"})([""]),ke=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.secretPegs,n=e.userWon,r=e.userLost,i=e.pegWidth,a=e.revealCodeAndEndGame;return o.a.createElement(de,{pegWidth:i},o.a.createElement(me,{userWon:n,userLost:r},o.a.createElement(pe,{userWon:n,userLost:r},o.a.createElement(ge,null,"Reveal code & end game"),o.a.createElement(fe,{onClick:function(){return a()}}))),o.a.createElement(ve,null),o.a.createElement(ye,null,o.a.createElement(he,{userWon:n,userLost:r},"Secret Code"),t.map(function(e){return o.a.createElement(be,{pegWidth:i},o.a.createElement(we,{key:e,color:n||r?e:"mediumGray",pegWidth:i}))})),o.a.createElement(xe,{pegWidth:i}))}}]),t}(r.Component),Ee=h.d.main.withConfig({displayName:"styled__Container",componentId:"igjfx8-0"})(["grid-area:board;position:relative;display:flex;flex-direction:column;min-height:20em;min-width:100%;background-color:",";box-shadow:1px 2px 4px #bdbdbd;"],function(e){return e.theme.colors.lightGray});var Ce=function(e){var t=e.currentRoundId,n=e.rounds,r=e.colors,i=e.handleNewGuess,a=e.revealCodeAndEndGame,s=e.pegWidth,l=e.secretPegs,c=e.userWon,u=e.userLost;return o.a.createElement("div",null,o.a.createElement(Ee,null,n.map(function(e){return o.a.createElement(ie,{key:e.id,id:e.id,guessPegs:e.guessPegs,keyPegs:e.keyPegs,isCurrentRound:t===e.id,colors:r,handleNewGuess:i,pegWidth:s,secretPegs:l})})),o.a.createElement(ke,{pegWidth:s,secretPegs:l,userWon:c,userLost:u,revealCodeAndEndGame:a}))},_e=h.d.section.withConfig({displayName:"styled__Container",componentId:"sc-1067njy-0"})(["display:flex;align-items:center;justify-content:flex-end;"]),Pe=Object(h.d)(Z).withConfig({displayName:"styled__NewGameButton",componentId:"sc-1067njy-1"})(["margin-right:",";"],function(e){return e.theme.spacers.md}),We=Object(h.d)(Q).withConfig({displayName:"styled__NumPegButton",componentId:"sc-1067njy-2"})(["margin-right:",";background-color:",";color:",";&:hover,&:focus{background-color:",";color:",";}"],function(e){return e.theme.spacers.sm},function(e){return e.isCurrentNumPegs?e.theme.colors.black:e.theme.colors.white},function(e){return e.isCurrentNumPegs?e.theme.colors.white:e.theme.colors.black},function(e){return e.isCurrentNumPegs?e.theme.colors.black:e.theme.colors.lightPrimary},function(e){return e.isCurrentNumPegs?e.theme.colors.lightPrimary:e.theme.colors.black}),je=h.d.p.withConfig({displayName:"styled__Description",componentId:"sc-1067njy-3"})([""]);var Ne=function(e){var t=e.newGame,n=e.numPegs;return o.a.createElement(_e,null,o.a.createElement(Pe,{onClick:function(){return t(n)}},"New Game"),o.a.createElement(We,{isCurrentNumPegs:4===n,onClick:function(){return t(4)}},"4"),o.a.createElement(We,{isCurrentNumPegs:5===n,onClick:function(){return t(5)}},"5"),o.a.createElement(We,{isCurrentNumPegs:6===n,onClick:function(){return t(6)}},"6"),o.a.createElement(je,null,"Pegs"))},Oe=n(16),Ie=n.n(Oe),Se=h.d.section.withConfig({displayName:"styled__Zippy",componentId:"sc-14h7h7u-0"})(["padding-bottom:",";"],function(e){return e.theme.spacers.md}),ze=h.d.button.attrs({"aria-expanded":function(e){return e.isExpanded?"true":"false"}}).withConfig({displayName:"styled__ZippyButtonContainer",componentId:"sc-14h7h7u-1"})(["margin:0;background-color:transparent;border:none;font-weight:inherit;text-transform:inherit;"]),Ge=h.d.span.withConfig({displayName:"styled__ZippyHeading",componentId:"sc-14h7h7u-2"})(["margin-left:0.5rem;"]),Me=h.d.div.attrs({"aria-hidden":"true",focusable:"false"}).withConfig({displayName:"styled__ExpandIcon",componentId:"sc-14h7h7u-3"})(["display:inline-block;width:2rem;height:2rem;background-image:url(",");background-repeat:no-repeat;background-size:contain;background-color:transparent;background-position:center;transform:rotate(","deg);transform-origin:center;transition:transform 0.2s;"],Ie.a,function(e){return e.isExpanded?"0":"180"}),Re=h.d.div.attrs({}).withConfig({displayName:"styled__ZippyTextContainer",componentId:"sc-14h7h7u-4"})(["padding-top:1em;padding-left:2rem;"]),Be=h.d.table.withConfig({displayName:"styled__Table",componentId:"sc-14h7h7u-5"})(["border:none;"]),De=h.d.th.withConfig({displayName:"styled__Th",componentId:"sc-14h7h7u-6"})(["padding-right:",";font-weight:400;text-align:left;"],function(e){return e.theme.spacers.sm}),Le=h.d.td.withConfig({displayName:"styled__Td",componentId:"sc-14h7h7u-7"})(["text-align:center;"]),Ae=h.d.span.withConfig({displayName:"styled__Red",componentId:"sc-14h7h7u-8"})(["color:",";"],function(e){return e.theme.colors.red}),Ve=h.d.span.withConfig({displayName:"styled__Orange",componentId:"sc-14h7h7u-9"})(["color:",";"],function(e){return e.theme.colors.orange}),Ye=h.d.span.withConfig({displayName:"styled__Yellow",componentId:"sc-14h7h7u-10"})(["color:",";"],function(e){return e.theme.colors.yellow}),He=h.d.span.withConfig({displayName:"styled__Green",componentId:"sc-14h7h7u-11"})(["color:",";"],function(e){return e.theme.colors.green}),Te=h.d.span.withConfig({displayName:"styled__Blue",componentId:"sc-14h7h7u-12"})(["color:",";"],function(e){return e.theme.colors.blue}),Ue=h.d.span.withConfig({displayName:"styled__Purple",componentId:"sc-14h7h7u-13"})(["color:",";"],function(e){return e.theme.colors.purple}),qe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).toggleRulesDisplay=function(){var e=n.state.isRulesExpanded;n.setState({isRulesExpanded:!e})},n.toggleAboutDisplay=function(){var e=n.state.isAboutExpanded;n.setState({isAboutExpanded:!e})},n.state={isRulesExpanded:!0,isAboutExpanded:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.maxRounds,n=this.state,r=n.isRulesExpanded,i=n.isAboutExpanded;return o.a.createElement("div",null,o.a.createElement(Se,null,o.a.createElement(W,null,o.a.createElement(ze,{isExpanded:r,onClick:function(){return e.toggleRulesDisplay()}},o.a.createElement(Me,{isExpanded:r}),o.a.createElement(Ge,null,"Rules"))),o.a.createElement(Re,{hidden:!r,isExpanded:r},o.a.createElement(O,null,o.a.createElement(S,null,"You have ",t," rounds to guess the secret code")),o.a.createElement(j,null,"1. Guess"),o.a.createElement(O,null,"Choose a color for each large peg in the current round \xa0",o.a.createElement(Ae,null,"\u2b24"),o.a.createElement(Ve,null,"\u2b24"),o.a.createElement(Ye,null,"\u2b24"),o.a.createElement(He,null,"\u2b24"),o.a.createElement(Te,null,"\u2b24"),o.a.createElement(Ue,null,"\u2b24")),o.a.createElement(j,null,"2. Decipher clues"),o.a.createElement(O,null,"After you submit your guess, you\u2019ll see key pegs on the right:"),o.a.createElement(G,null,o.a.createElement(M,null,"\u25cf = correct color & correct position"),o.a.createElement(M,null,"\u25cb = correct color, but wrong position")),o.a.createElement(O,null,o.a.createElement(S,null,"The order of the key pegs is random")),o.a.createElement(N,null,"Example"),o.a.createElement(G,null,o.a.createElement(M,null,o.a.createElement(Be,null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement(Le,null),o.a.createElement(Le,null,o.a.createElement(I,null,"1")),o.a.createElement(Le,null,o.a.createElement(I,null,"2")),o.a.createElement(Le,null,o.a.createElement(I,null,"3")),o.a.createElement(Le,null,o.a.createElement(I,null,"4"))),o.a.createElement("tr",null,o.a.createElement(De,null,"Secret Code"),o.a.createElement(Le,null,o.a.createElement(Te,null,"\u2b24")),o.a.createElement(Le,null,o.a.createElement(Te,null,"\u2b24")),o.a.createElement(Le,null,o.a.createElement(He,null,"\u2b24")),o.a.createElement(Le,null,o.a.createElement(He,null,"\u2b24"))),o.a.createElement("tr",null,o.a.createElement(De,null,"Guess Pegs"),o.a.createElement(Le,null,o.a.createElement(Te,null,"\u2b24")),o.a.createElement(Le,null,o.a.createElement(He,null,"\u2b24")),o.a.createElement(Le,null,o.a.createElement(Te,null,"\u2b24")),o.a.createElement(Le,null,o.a.createElement(Te,null,"\u2b24"))),o.a.createElement("tr",null,o.a.createElement(De,null,"Key Pegs*"),o.a.createElement(Le,null,"\u25cf"),o.a.createElement(Le,null,"\u25cb"),o.a.createElement(Le,null,"\u25cb"),o.a.createElement(Le,null)))),o.a.createElement(I,null,"* Will be in random order")),o.a.createElement(M,null,"No peg for the last blue guess, only 2 blue pegs in the secret code"),o.a.createElement(M,null,"No indication that there's another green in the secret code")),o.a.createElement(j,null,"3. Guess again"),o.a.createElement(O,null,"Keep guessing until you get the right code, or run out of rounds"))),o.a.createElement(Se,null,o.a.createElement(W,null,o.a.createElement(ze,{isExpanded:i,onClick:function(){return e.toggleAboutDisplay()}},o.a.createElement(Me,{isExpanded:i}),o.a.createElement(Ge,null,"About"))),o.a.createElement(Re,{hidden:!i,isExpanded:i},o.a.createElement(O,null,"Project by Elena Czubiak"),o.a.createElement(O,null,o.a.createElement(z,{href:"https://github.com/elena-cz/mastermind-game",target:"_blank",rel:"noopener noreferrer"},"View code on Github")))))}}]),t}(r.Component);function Ke(){var e=Object(g.a)(["\n    padding: "," ",";\n  "]);return Ke=function(){return e},e}function Fe(){var e=Object(g.a)(["\n    left: calc(","vw - 10rem);\n    padding: "," ",";\n  "]);return Fe=function(){return e},e}function Ze(){var e=Object(g.a)(["\n    left: calc(","vw - 10rem);\n  "]);return Ze=function(){return e},e}var Je=Object(h.e)(["0%{transform:translateY(0);animation-timing-function:ease-in;}33%{transform:translateY(","vh);animation-timing-function:ease-out;}50%{transform:translateY(","vh);animation-timing-function:ease-in;}66%{transform:translateY(","vh);animation-timing-function:ease-out;}82%{transform:translateY(","vh);animation-timing-function:ease-in;}92%{transform:translateY(","vh);animation-timing-function:ease-out;}97%{transform:translateY(","vh);animation-timing-function:ease-in;}100%{transform:translateY(","vh);}"],-50,-42,-50,-48,-50,-49,-50),Qe=Object(h.e)(["0%,100%{transform:translateY(","vh);}"],-50),Xe=Object(h.e)(["0%{transform:translateY(","vh);}10%{transform:translateY(","vh);animation-timing-function:ease-in-out;}100%{transform:translateY(100px);animation-timing-function:ease-in;}"],-50,-52),$e=Object(h.c)(["animation:"," 1.5s,"," 2s 1.5s,"," 1.5s 3.5s;"],Je,Qe,Xe),et=h.d.div.withConfig({displayName:"styled__BannerContainer",componentId:"sc-9awomd-0"})(["visibility:",";display:flex;justify-content:center;position:fixed;bottom:0;width:","vw;z-index:100;"," "," ",""],function(e){return e.showBanner?"visible":"hidden"},function(e){return e.theme.grid.largeDesktop.percent/100*e.theme.grid.largeDesktop.vw},function(e){return e.showBanner?$e:""},_.smallDesktop(Ze(),function(e){return.5*e.theme.grid.smallDesktop.vw}),_.phone(Fe(),function(e){return.5*e.theme.grid.phone.vw},function(e){return e.theme.spacers.sm},function(e){return e.theme.spacers.md})),tt=Object(h.d)(W).withConfig({displayName:"styled__Banner",componentId:"sc-9awomd-1"})(["display:block;box-sizing:border-box;padding:"," ",";margin:",";background-color:",";border:1px solid ",";border-radius:0.5em;text-align:center;color:",";",""],function(e){return e.theme.spacers.sm},function(e){return e.theme.spacers.lg},function(e){return e.theme.spacers.sm},function(e){return e.theme.colors.white},function(e){return e.userWon?e.theme.colors.primary:e.theme.colors.red},function(e){return e.userWon?e.theme.colors.primary:e.theme.colors.red},_.phone(Ke(),function(e){return e.theme.spacers.sm},function(e){return e.theme.spacers.md})),nt=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).showBanner=function(){setTimeout(function(){n.setState({showBanner:!0}),n.hideBanner()},2300)},n.hideBanner=function(){setTimeout(function(){n.setState({showBanner:!1})},4500)},n.state={showBanner:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.userWon,r=t.userLost;(n&&n!==e.userWon||r&&r!==e.userLost)&&this.showBanner()}},{key:"render",value:function(){var e=this.props.userWon,t=this.state.showBanner;return o.a.createElement(et,{showBanner:t},o.a.createElement(tt,{userWon:e},e?"You Won!!":"Game over"))}}]),t}(r.Component);function rt(){var e=Object(g.a)(["\n    padding: ",";\n  "]);return rt=function(){return e},e}function ot(){var e=Object(g.a)(["\n    padding-top: ",";\n  "]);return ot=function(){return e},e}function it(){var e=Object(g.a)(["\n    padding-top: ",";\n    padding-left: ",";\n    padding-right: ",";\n  "]);return it=function(){return e},e}function at(){var e=Object(g.a)(["\n    padding-top: ",";\n  "]);return at=function(){return e},e}function st(){var e=Object(g.a)(["\n    grid-template-columns: ",'%;\n    grid-template-rows: auto auto auto auto;\n    grid-template-areas: \n      "header"      \n      "board"\n      "sidebar";\n    grid-gap: ',";\n    width: ","vw;\n  "]);return st=function(){return e},e}function lt(){var e=Object(g.a)(["\n    grid-template-columns: ",'%;\n    grid-template-rows: auto auto auto auto;\n    grid-template-areas: \n      "header"\n      "board"\n      "sidebar";\n    grid-gap: ',";\n    width: ","vw;\n  "]);return lt=function(){return e},e}var ct=h.d.div.withConfig({displayName:"styled__Grid",componentId:"oo32s0-0"})(["display:grid;grid-template-columns:",'% auto;grid-template-rows:auto auto;grid-template-areas:"header header" "board sidebar";grid-gap:',";align-content:start;min-height:100vh;width:","vw;margin:0 auto 0 auto;padding-bottom:6em;"," ",""],function(e){return e.theme.grid.largeDesktop.percent},function(e){return e.theme.spacers.lg},function(e){return e.theme.grid.largeDesktop.vw},_.smallDesktop(lt(),function(e){return e.theme.grid.smallDesktop.percent},function(e){return e.theme.spacers.md},function(e){return e.theme.grid.smallDesktop.vw}),_.phone(st(),function(e){return e.theme.grid.phone.percent},function(e){return e.theme.spacers.sm},function(e){return e.theme.grid.phone.vw})),ut=h.d.header.withConfig({displayName:"styled__Header",componentId:"oo32s0-1"})(["grid-area:header;display:flex;align-content:center;justify-content:space-between;flex-wrap:wrap;padding-top:",";"," ",""],function(e){return e.theme.spacers.lg},_.smallDesktop(at(),function(e){return e.theme.spacers.md}),_.phone(it(),function(e){return e.theme.spacers.sm},function(e){return e.theme.spacers.sm},function(e){return e.theme.spacers.sm})),dt=h.d.section.withConfig({displayName:"styled__Sidebar",componentId:"oo32s0-2"})(["grid-area:sidebar;"," ",""],_.smallDesktop(ot(),function(e){return e.theme.spacers.md}),_.phone(rt(),function(e){return e.theme.spacers.sm})),mt=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).newGame=function(e){var t=2*e;n.setState({numPegs:e,maxRounds:t,currentRoundId:1,userWon:!1,userLost:!1}),n.generateRounds(e,t),n.generateSecretCode(e)},n.handleNewGuess=function(e){var t=n.state,r=t.currentRoundId,o=t.maxRounds,i=t.rounds,a=n.generateKeyPegs(e),l=a.isCorrectGuess,c=a.keyPegs,u=Object(s.a)(i),d=u[r-1];d.guessPegs=e,d.keyPegs=c,n.setState({rounds:u}),l?n.setState({userWon:!0}):r===o?n.setState({userLost:!0}):n.setState({currentRoundId:r+1})},n.revealCodeAndEndGame=function(){n.setState({userLost:!0})},n.state={colors:["red","orange","yellow","green","blue","purple"],currentRoundId:1,maxRounds:10,numPegs:4,rounds:[],secretPegs:[],userWon:!1,userLost:!1,pegWidth:f.pegSizes.desktop},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.matchMedia("(max-width: ".concat(f.mediaSizes.largeDesktop,"px)")),n=window.matchMedia("(max-width: ".concat(f.mediaSizes.smallDesktop,"px)")),r=window.matchMedia("(max-width: ".concat(f.mediaSizes.tablet,"px)")),o=window.matchMedia("(max-width: ".concat(f.mediaSizes.phone,"px)")),i=window.matchMedia("(max-width: ".concat(f.mediaSizes.smallPhone,"px)")),a=function(){i.matches?e.setState({pegWidth:Math.floor(window.innerWidth/18)}):o.matches?e.setState({pegWidth:Math.floor(window.innerWidth/16)}):r.matches?e.setState({pegWidth:Math.floor(.95*window.innerWidth/16)}):n.matches?e.setState({pegWidth:Math.floor(.95*window.innerWidth/16)}):e.setState({pegWidth:Math.floor(.8*window.innerWidth*.7/18)})};a(),t.addListener(a),n.addListener(a),r.addListener(a),o.addListener(a),i.addListener(a),this.newGame(5)}},{key:"generateRounds",value:function(e,t){for(var n=new Array(t),r=0;r<t;r++)n[r]={id:r+1,guessPegs:new Array(e).fill(""),keyPegs:new Array(e).fill("")};this.setState({rounds:n})}},{key:"generateSecretCode",value:function(e){for(var t=this.state.colors,n=new Array(e),r=0;r<e;r++){var o=Math.floor(Math.random()*t.length);n[r]=t[o]}this.setState({secretPegs:n})}},{key:"generateKeyPegs",value:function(e){var t=this.state.secretPegs,n={};t.forEach(function(e){var t=n[e]||0;n[e]=t+1});var r=[],o=0;e.forEach(function(e,i){e===t[i]&&(r[i]="black",n[e]-=1,o+=1)}),e.forEach(function(e,t){r[t]||(n[e]?(r[t]="white",n[e]-=1):r[t]="")}),console.log("Code:",t);for(var i=0;i<r.length-2;i++){var a=Math.floor(Math.random()*(r.length-i)+i),s=r[i];r[i]=r[a],r[a]=s}return{isCorrectGuess:o===t.length,keyPegs:r}}},{key:"render",value:function(){var e=this.state,t=e.currentRoundId,n=e.maxRounds,r=e.rounds,i=e.colors,a=e.pegWidth,s=e.numPegs,l=e.secretPegs,c=e.userWon,u=e.userLost,d=this.newGame,m=this.handleNewGuess,p=this.revealCodeAndEndGame;return o.a.createElement(h.a,{theme:f},o.a.createElement(ct,null,o.a.createElement(b,null),o.a.createElement(ut,null,o.a.createElement(P,null,"Mastermind"),o.a.createElement(Ne,{newGame:d,numPegs:s})),o.a.createElement(Ce,{currentRoundId:t,rounds:r,colors:i,handleNewGuess:m,pegWidth:a,secretPegs:l,userWon:c,userLost:u,revealCodeAndEndGame:p}),o.a.createElement(dt,null,o.a.createElement(qe,{maxRounds:n})),o.a.createElement(nt,{userWon:c,userLost:u})))}}]),t}(r.Component),ht=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(o.a.createElement(mt,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mastermind-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/mastermind-game","/service-worker.js");ht?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):pt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):pt(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.fc097b0b.chunk.js.map