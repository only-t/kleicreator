(this.webpackJsonp=this.webpackJsonp||[]).push([[361],{"02hj":function(e,t,i){"use strict";var n=i("U1Ws");t.a={data:()=>({remainingTime:Object(n.r)(0),remainingTimeIntervalId:null}),mounted(){this.startRemainingTimeInterval()},beforeDestroy(){this.remainingTimeIntervalId&&clearInterval(this.remainingTimeIntervalId)},computed:{isDelayedJob(){var e,t;return(null===(e=this.job)||void 0===e?void 0:e.scheduled)||(null===(t=this.job)||void 0===t?void 0:t.scheduledAt)},scheduledTime(){return this.job.scheduled_at||this.job.scheduledAt}},watch:{isDelayedJob(){this.startRemainingTimeInterval()}},methods:{startRemainingTimeInterval(){var e=this;this.remainingTimeIntervalId&&clearInterval(this.remainingTimeIntervalId),this.isDelayedJob&&(this.updateRemainingTime(),this.remainingTimeIntervalId=setInterval((function(){return e.updateRemainingTime()}),1e3))},updateRemainingTime(){const e=Object(n.d)(this.scheduledTime);this.remainingTime=Object(n.r)(e)}}}},"15LA":function(e,t,i){"use strict";var n=i("SYh6");t.a=Object(n.a)()},Eycv:function(e,t,i){"use strict";var n={components:{ciIcon:i("Ng9o").a},props:{name:{type:String,required:!0},status:{type:Object,required:!0},iconSize:{type:Number,required:!1,default:16}}},a=i("bPvS"),s=Object(a.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"ci-job-name-component mw-100 gl-display-flex gl-align-items-center"},[t("ci-icon",{staticClass:"gl-line-height-0",attrs:{size:this.iconSize,status:this.status}}),this._v(" "),t("span",{staticClass:"gl-text-truncate mw-70p gl-pl-3 gl-display-inline-block"},[this._v("\n    "+this._s(this.name)+"\n  ")])],1)}),[],!1,null,null,null);t.a=s.exports},ZZCq:function(e,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getLinkedPipelines"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"fullPath"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"iid"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"project"},arguments:[{kind:"Argument",name:{kind:"Name",value:"fullPath"},value:{kind:"Variable",name:{kind:"Name",value:"fullPath"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pipeline"},arguments:[{kind:"Argument",name:{kind:"Name",value:"iid"},value:{kind:"Variable",name:{kind:"Name",value:"iid"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"downstream"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"project"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"detailedStatus"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"upstream"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"project"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"detailedStatus"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:604}};i.loc.source={body:"query getLinkedPipelines($fullPath: ID!, $iid: ID!) {\n  project(fullPath: $fullPath) {\n    id\n    pipeline(iid: $iid) {\n      id\n      path\n      downstream {\n        nodes {\n          id\n          path\n          project {\n            id\n            name\n          }\n          detailedStatus {\n            id\n            group\n            icon\n            label\n          }\n        }\n      }\n      upstream {\n        id\n        path\n        project {\n          id\n          name\n        }\n        detailedStatus {\n          id\n          group\n          icon\n          label\n        }\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function a(e,t){for(var i=0;i<e.definitions.length;i++){var n=e.definitions[i];if(n.name&&n.name.value==t)return n}}i.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,i){if("FragmentSpread"===t.kind)i.add(t.name.value);else if("VariableDefinition"===t.kind){var n=t.type;"NamedType"===n.kind&&i.add(n.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,i)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,i)})),t.definitions&&t.definitions.forEach((function(t){e(t,i)}))}(e,t),n[e.name.value]=t}})),e.exports=i,e.exports.getLinkedPipelines=function(e,t){var i={kind:e.kind,definitions:[a(e,t)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var s=n[t]||new Set,o=new Set,l=new Set;for(s.forEach((function(e){l.add(e)}));l.size>0;){var r=l;l=new Set,r.forEach((function(e){o.has(e)||(o.add(e),(n[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(t){var n=a(e,t);n&&i.definitions.push(n)})),i}(i,"getLinkedPipelines")},crpJ:function(e,t,i){"use strict";var n=i("H8gz"),a=i("zLBL"),s=i("OkMp"),o=i("ly/8"),l=i("teVv"),r=i("mphk"),d=i("t9l/"),c=i("15LA"),u=i("u1ru"),p=i("02hj"),m=i("/LsX"),g=i("DT29"),h=i("dGVp"),v=i("Eycv"),b={hoverClass:"gl-shadow-x0-y0-b3-s1-blue-500",components:{ActionComponent:h.a,JobNameComponent:v.a,GlLink:u.a},directives:{GlTooltip:o.a},mixins:[p.a],props:{job:{type:Object,required:!0},cssClassJobName:{type:String,required:!1,default:""},dropdownLength:{type:Number,required:!1,default:1/0},jobHovered:{type:String,required:!1,default:""},pipelineExpanded:{type:Object,required:!1,default:function(){return{}}},pipelineId:{type:Number,required:!1,default:-1}},computed:{boundary(){return 1===this.dropdownLength?"viewport":"scrollParent"},detailsPath(){return this.status.details_path},hasDetails(){return this.status.has_details},status(){return this.job&&this.job.status?this.job.status:{}},tooltipText(){const e=[],{name:t}=this.job;t&&e.push(t);const{tooltip:i}=this.status;return t&&i&&e.push("-"),i&&(this.isDelayedJob?e.push(Object(d.h)(i,{remainingTime:this.remainingTime})):e.push(i)),e.join(" ")},hasAction(){return this.job.status&&this.job.status.action&&this.job.status.action.path},relatedDownstreamHovered(){return this.job.name===this.jobHovered},relatedDownstreamExpanded(){return this.job.name===this.pipelineExpanded.jobName&&this.pipelineExpanded.expanded},jobClasses(){return this.relatedDownstreamHovered||this.relatedDownstreamExpanded?`${this.$options.hoverClass} ${this.cssClassJobName}`:this.cssClassJobName}},errorCaptured(e,t,i){Object(g.e)("pipelines_job_item",`pipelines_job_item error: ${e}, info: ${i}`)},methods:{hideTooltips(){this.$root.$emit(m.d)},pipelineActionRequestComplete(){this.$emit("pipelineActionRequestComplete")}}},k=i("bPvS"),f=Object(k.a)(b,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ci-job-component gl-display-flex gl-align-items-center gl-justify-content-space-between",attrs:{"data-qa-selector":"job_item_container"}},[e.hasDetails?i("gl-link",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{boundary:"viewport",placement:"bottom",customClass:"gl-pointer-events-none"},expression:"{\n      boundary: 'viewport',\n      placement: 'bottom',\n      customClass: 'gl-pointer-events-none',\n    }"}],staticClass:"js-pipeline-graph-job-link qa-job-link menu-item gl-text-gray-900 gl-active-text-decoration-none gl-focus-text-decoration-none gl-hover-text-decoration-none",class:e.jobClasses,attrs:{href:e.detailsPath,title:e.tooltipText,"data-testid":"job-with-link"},on:{click:function(t){return t.stopPropagation(),e.hideTooltips(t)},mouseout:e.hideTooltips}},[i("job-name-component",{attrs:{name:e.job.name,status:e.job.status,"icon-size":24}})],1):i("div",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{boundary:e.boundary,placement:"bottom",customClass:"gl-pointer-events-none"},expression:"{ boundary, placement: 'bottom', customClass: 'gl-pointer-events-none' }"}],staticClass:"js-job-component-tooltip non-details-job-component menu-item",class:e.jobClasses,attrs:{title:e.tooltipText,"data-testid":"job-without-link"},on:{mouseout:e.hideTooltips}},[i("job-name-component",{attrs:{name:e.job.name,status:e.job.status,"icon-size":24}})],1),e._v(" "),e.hasAction?i("action-component",{attrs:{"tooltip-text":e.status.action.title,link:e.status.action.path,"action-icon":e.status.action.icon,"data-qa-selector":"action_button"},on:{pipelineActionRequestComplete:e.pipelineActionRequestComplete}}):e._e()],1)}),[],!1,null,null,null).exports,j={components:{GlIcon:n.a,GlLoadingIcon:a.a,GlDropdown:s.a,JobItem:f},directives:{GlTooltip:o.a},props:{stage:{type:Object,required:!0},updateDropdown:{type:Boolean,required:!1,default:!1},isMergeTrain:{type:Boolean,required:!1,default:!1}},data:()=>({isLoading:!1,dropdownContent:[]}),computed:{triggerButtonClass(){return`ci-status-icon-${this.stage.status.group}`},borderlessIcon(){return`${this.stage.status.icon}_borderless`}},watch:{updateDropdown(){this.updateDropdown&&this.isDropdownOpen()&&!this.isLoading&&this.fetchJobs()}},methods:{onShowDropdown(){c.a.$emit("clickedDropdown"),this.isLoading=!0,this.fetchJobs()},fetchJobs(){var e=this;r.a.get(this.stage.dropdown_path).then((function(t){let{data:i}=t;e.dropdownContent=i.latest_statuses,e.isLoading=!1})).catch((function(){e.$refs.dropdown.hide(),e.isLoading=!1,Object(l.h)({message:Object(d.a)("Something went wrong on our end.")})}))},isDropdownOpen(){return this.$el.classList.contains("show")},pipelineActionRequestComplete(){this.$refs.dropdown.hide(),this.$emit("pipelineActionRequestComplete")},stageAriaLabel:e=>Object(d.h)(Object(d.a)("View Stage: %{title}"),{title:e})}},w={components:{PipelineStage:Object(k.a)(j,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("gl-dropdown",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip.hover.ds0",modifiers:{hover:!0,ds0:!0}},{name:"gl-tooltip",rawName:"v-gl-tooltip",value:e.stage.title,expression:"stage.title"}],ref:"dropdown",attrs:{"data-testid":"mini-pipeline-graph-dropdown",variant:"link","aria-label":e.stageAriaLabel(e.stage.title),lazy:!0,"popper-opts":{placement:"bottom"},"toggle-class":["mini-pipeline-graph-dropdown-toggle",e.triggerButtonClass],"menu-class":"mini-pipeline-graph-dropdown-menu"},on:{show:e.onShowDropdown},scopedSlots:e._u([{key:"button-content",fn:function(){return[i("span",{staticClass:"gl-pointer-events-none"},[i("gl-icon",{attrs:{name:e.borderlessIcon}})],1)]},proxy:!0}])},[e._v(" "),e.isLoading?i("gl-loading-icon",{attrs:{size:"sm"}}):i("ul",{staticClass:"js-builds-dropdown-list scrollable-menu",attrs:{"data-testid":"mini-pipeline-graph-dropdown-menu-list"}},[e._l(e.dropdownContent,(function(t){return i("li",{key:t.id},[i("job-item",{attrs:{"dropdown-length":e.dropdownContent.length,job:t,"css-class-job-name":"mini-pipeline-graph-dropdown-item"},on:{pipelineActionRequestComplete:e.pipelineActionRequestComplete}})],1)})),e._v(" "),e.isMergeTrain?[i("li",{staticClass:"gl-new-dropdown-divider",attrs:{role:"presentation"}},[i("hr",{staticClass:"dropdown-divider",attrs:{role:"separator","aria-orientation":"horizontal"}})]),e._v(" "),i("li",[i("div",{staticClass:"gl-display-flex gl-align-items-center",attrs:{"data-testid":"warning-message-merge-trains"}},[i("div",{staticClass:"menu-item gl-font-sm gl-text-gray-300!"},[e._v("\n            "+e._s(e.s__("Pipeline|Merge train pipeline jobs can not be retried"))+"\n          ")])])])]:e._e()],2)],1)}),[],!1,null,null,null).exports},props:{stages:{type:Array,required:!0},updateDropdown:{type:Boolean,required:!1,default:!1},stagesClass:{type:[Array,Object,String],required:!1,default:""},isMergeTrain:{type:Boolean,required:!1,default:!1}},methods:{onPipelineActionRequestComplete(){this.$emit("pipelineActionRequestComplete")}}},y=Object(k.a)(w,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{"data-testid":"pipeline-mini-graph"}},e._l(e.stages,(function(t){return i("div",{key:t.name,staticClass:"stage-container dropdown",class:e.stagesClass},[i("pipeline-stage",{attrs:{stage:t,"update-dropdown":e.updateDropdown,"is-merge-train":e.isMergeTrain},on:{pipelineActionRequestComplete:e.onPipelineActionRequestComplete}})],1)})),0)}),[],!1,null,null,null);t.a=y.exports},dGVp:function(e,t,i){"use strict";var n=i("H8gz"),a=i("cuRJ"),s=i("zLBL"),o=i("ly/8"),l=i("teVv"),r=i("mphk"),d=i("/LsX"),c=i("vRHk"),u=i("t9l/"),p=i("DT29"),m={components:{GlIcon:n.a,GlButton:a.a,GlLoadingIcon:s.a},directives:{GlTooltip:o.a},props:{tooltipText:{type:String,required:!0},link:{type:String,required:!0},actionIcon:{type:String,required:!0}},data:()=>({isDisabled:!1,isLoading:!1}),computed:{cssClass(){const e=Object(c.h)(this.actionIcon);return`${e} js-icon-${e}`}},errorCaptured(e,t,i){Object(p.e)("action_component",`error: ${e}, info: ${i}`)},methods:{onClickAction(){var e=this;this.$root.$emit(d.d,`js-ci-action-${this.link}`),this.isDisabled=!0,this.isLoading=!0,r.a.post(`${this.link}.json`).then((function(){e.isDisabled=!1,e.isLoading=!1,e.$emit("pipelineActionRequestComplete")})).catch((function(t){e.isDisabled=!1,e.isLoading=!1,Object(p.e)("action_component",t),Object(l.h)({message:Object(u.a)("An error occurred while making the request.")})}))}}},g=i("bPvS"),h=Object(g.a)(m,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("gl-button",{staticClass:"js-ci-action gl-ci-action-icon-container ci-action-icon-container ci-action-icon-wrapper gl-display-flex gl-align-items-center gl-justify-content-center",class:e.cssClass,attrs:{id:"js-ci-action-"+e.link,disabled:e.isDisabled,"data-testid":"ci-action-component"},on:{click:function(t){return t.stopPropagation(),e.onClickAction(t)}}},[i("div",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip.viewport",modifiers:{viewport:!0}}],staticClass:"gl-display-flex gl-align-items-center gl-justify-content-center gl-h-full",attrs:{title:e.tooltipText,"data-testid":"ci-action-icon-tooltip-wrapper"}},[e.isLoading?i("gl-loading-icon",{staticClass:"js-action-icon-loading",attrs:{size:"sm"}}):i("gl-icon",{staticClass:"gl-mr-0!",attrs:{name:e.actionIcon,"aria-label":e.actionIcon}})],1)])}),[],!1,null,null,null);t.a=h.exports}}]);
//# sourceMappingURL=commons-commitBoxPipelineMiniGraph-pages.projects.ci.pipeline_editor.show.4dd4276b.chunk.js.map