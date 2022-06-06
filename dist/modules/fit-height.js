/**
 * Cupertino Pane 1.2.82
 * Multi-functional panes and boards for next generation progressive applications
 * https://github.com/roman-rr/cupertino-pane/
 *
 * Copyright 2019-2022 Roman Antonov (roman-rr)
 *
 * Released under the MIT License
 *
 * Released on: June 6, 2022
 */

function __awaiter(t,e,i,s){return new(i||(i=Promise))((function(n,a){function h(t){try{r(s.next(t))}catch(t){a(t)}}function o(t){try{r(s.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(h,o)}r((s=s.apply(t,e||[])).next())}))}class FitHeightModule{constructor(t){this.instance=t,this.calcHeightInProcess=!1,this.breakpoints=this.instance.breakpoints,this.settings=this.instance.settings,this.settings.fitHeight&&(this.instance.calcFitHeight=t=>__awaiter(this,void 0,void 0,(function*(){return this.calcFitHeight(t)})),this.instance.on("DOMElementsReady",(()=>{this.instance.wrapperEl.classList.add("fit-height")})),this.instance.on("onWillPresent",(()=>{this.breakpoints.beforeBuildBreakpoints=()=>this.beforeBuildBreakpoints()})),this.instance.on("beforeBreakHeightApplied",(t=>{var e;this.settings.fitScreenHeight&&((null===(e=this.settings.breaks[t.break])||void 0===e?void 0:e.height)>this.instance.screen_height&&(this.settings.breaks[t.break].height=this.instance.screen_height-this.settings.bottomOffset),this.settings.breaks.top&&this.settings.breaks.middle&&this.settings.breaks.top.height-50<=this.settings.breaks.middle.height&&(this.settings.breaks.middle.enabled=!1,this.settings.initialBreak="top")),this.settings.fitHeight&&"top"===t.break&&(this.settings.breaks.top.height>this.instance.screen_height?(this.settings.breaks.top.height=this.instance.screen_height-2*this.settings.bottomOffset,this.settings.topperOverflow=!0):this.instance.overflowEl&&!this.settings.maxFitHeight&&(this.settings.topperOverflow=!1,this.instance.overflowEl.style.overflowY="hidden"))}),!0))}beforeBuildBreakpoints(){var t,e,i;return __awaiter(this,void 0,void 0,(function*(){this.settings.fitScreenHeight=!1,this.settings.initialBreak="top",this.settings.topperOverflow=!1;let s=yield this.getPaneFitHeight();this.settings.maxFitHeight&&s>this.settings.maxFitHeight&&(s=this.settings.maxFitHeight,this.settings.topperOverflow=!0),this.breakpoints.conf={top:{enabled:!0,height:s},middle:{enabled:!1}},this.breakpoints.conf.top.bounce=null===(e=null===(t=this.settings.breaks)||void 0===t?void 0:t.top)||void 0===e?void 0:e.bounce,this.breakpoints.conf.bottom=(null===(i=this.settings.breaks)||void 0===i?void 0:i.bottom)||{enabled:!0,height:0}}))}calcFitHeight(t=!0){return __awaiter(this,void 0,void 0,(function*(){return this.instance.wrapperEl&&this.instance.el?this.calcHeightInProcess?(console.warn("Cupertino Pane: calcFitHeight() already in process"),null):void(yield this.breakpoints.buildBreakpoints(this.breakpoints.lockedBreakpoints,null,t)):null}))}getPaneFitHeight(){return __awaiter(this,void 0,void 0,(function*(){this.calcHeightInProcess=!0;let t,e=this.instance.el.querySelectorAll("img");this.instance.el.style.height="unset",this.instance.rendered||(this.instance.el.style.visibility="hidden",this.instance.el.style.pointerEvents="none",this.instance.el.style.display="block",this.instance.wrapperEl.style.visibility="hidden",this.instance.wrapperEl.style.pointerEvents="none",this.instance.wrapperEl.style.display="block");let i=[];e.length&&(i=Array.from(e).map((t=>new Promise((e=>{t.complete&&t.naturalHeight?e(!0):t.onload=()=>e(!0)}))))),i.push(new Promise((t=>setTimeout((()=>t(!0)),this.instance.rendered?0:150)))),yield Promise.all(i);let s=parseInt(document.defaultView.getComputedStyle(this.instance.el,"").getPropertyValue("height")),n=parseInt(document.defaultView.getComputedStyle(this.instance.el,"").getPropertyValue("margin-top"))+parseInt(document.defaultView.getComputedStyle(this.instance.el,"").getPropertyValue("margin-bottom")),a=parseInt(document.defaultView.getComputedStyle(this.instance.el.parentElement,"").getPropertyValue("padding-bottom"));return t=s+n,t+=this.instance.el.offsetTop,t+=a,this.instance.rendered||(this.instance.el.style.visibility="unset",this.instance.el.style.pointerEvents="unset",this.instance.el.style.display="none",this.instance.wrapperEl.style.visibility="unset",this.instance.wrapperEl.style.pointerEvents="unset",this.instance.wrapperEl.style.display="none"),this.calcHeightInProcess=!1,t}))}}export{FitHeightModule};