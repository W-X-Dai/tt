(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dddba72"],{"3c19":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-container"},[t.mobileNar?i("div",[i("mu-appbar",{staticClass:"mobile-nav",attrs:{color:"primary"}},[i("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"left"},[i("i",{staticClass:"el-icon-s-unfold"})]),t._v(" "+t._s(t.websiteConfig.shortName?t.websiteConfig.shortName+" ADMIN":"ADMIN")+" "),i("mu-menu",{directives:[{name:"show",rawName:"v-show",value:t.isAuthenticated,expression:"isAuthenticated"}],attrs:{slot:"right"},slot:"right"},[i("mu-button",{attrs:{flat:""},on:{click:function(e){t.katexVisible=!0}}},[i("i",{staticClass:"fa fa-font katex-editor"})])],1),i("mu-menu",{directives:[{name:"show",rawName:"v-show",value:t.isAuthenticated,expression:"isAuthenticated"}],attrs:{slot:"right",open:t.openusermenu},on:{"update:open":function(e){t.openusermenu=e}},slot:"right"},[i("mu-button",{attrs:{flat:""}},[t._v(" "+t._s(t.userInfo.username)),i("i",{staticClass:"el-icon-caret-bottom"})]),i("mu-list",{attrs:{slot:"content"},on:{change:t.handleCommand},slot:"content"},[i("mu-list-item",{attrs:{button:"",value:"logout"}},[i("mu-list-item-content",[i("mu-list-item-title",[t._v(t._s(t.$t("m.Logout")))])],1)],1)],1)],1)],1),i("mu-drawer",{attrs:{open:t.opendrawer,docked:!1,right:!1},on:{"update:open":function(e){t.opendrawer=e}}},[i("mu-list",{attrs:{"toggle-nested":""}},[i("mu-list-item",{attrs:{button:"",ripple:!0,nested:"",to:"/admin/dashboard","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:":fa fa-tachometer",size:"24"}})],1),i("mu-list-item-title",[t._v(t._s(t.$t("m.Dashboard")))])],1),t.isSuperAdmin?i("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"general"===t.openSideMenu},on:{"toggle-nested":function(e){t.openSideMenu=arguments[0]?"general":""}}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:":el-icon-menu",size:"24"}})],1),i("mu-list-item-title",[t._v(t._s(t.$t("m.General")))]),i("mu-list-item-action",[i("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:":el-icon-arrow-down"}})],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/user","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.User_Admin")))])],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/announcement","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Announcement_Admin")))])],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/notice","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.SysNotice")))])],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/conf","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.System_Config")))])],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/switch","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.System_Switch")))])],1)],1):t._e(),i("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"problem"===t.openSideMenu},on:{"toggle-nested":function(e){t.openSideMenu=arguments[0]?"problem":""}}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:":fa fa-bars",size:"24"}})],1),i("mu-list-item-title",[t._v(t._s(t.$t("m.Problem_Admin")))]),i("mu-list-item-action",[i("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:":el-icon-arrow-down"}})],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/problems","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Problem_List")))])],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/problem/create","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Create_Problem")))])],1),t.isSuperAdmin||t.isProblemAdmin?i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/problem/tag","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Admin_Tag")))])],1):t._e(),t.isSuperAdmin||t.isProblemAdmin?i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/group-problem/apply","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Admin_Group_Apply_Problem")))])],1):t._e(),t.isSuperAdmin?i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/problem/batch-operation","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Export_Import_Problem")))])],1):t._e()],1),i("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"training"===t.openSideMenu},on:{"toggle-nested":function(e){t.openSideMenu=arguments[0]?"training":""}}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:":el-icon-s-claim fa-size",size:"24"}})],1),i("mu-list-item-title",[t._v(t._s(t.$t("m.Training_Admin")))]),i("mu-list-item-action",[i("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:":el-icon-arrow-down"}})],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/training","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Training_List")))])],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/training/create","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Create_Training")))])],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/training/category","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Admin_Category")))])],1)],1),i("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"contest"===t.openSideMenu},on:{"toggle-nested":function(e){t.openSideMenu=arguments[0]?"contest":""}}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:":fa fa-trophy fa-size",size:"24"}})],1),i("mu-list-item-title",[t._v(t._s(t.$t("m.Contest_Admin")))]),i("mu-list-item-action",[i("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:":el-icon-arrow-down"}})],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/contest","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Contest_List")))])],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/contest/create","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Create_Contest")))])],1)],1),i("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"discussion"===t.openSideMenu},on:{"toggle-nested":function(e){t.openSideMenu=arguments[0]?"discussion":""}}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:":fa fa-comments fa-size",size:"24"}})],1),i("mu-list-item-title",[t._v(t._s(t.$t("m.Discussion")))]),i("mu-list-item-action",[i("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:":el-icon-arrow-down"}})],1),i("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1,to:"/admin/discussion","active-class":"mobile-menu-active"},on:{click:function(e){t.opendrawer=!t.opendrawer}},slot:"nested"},[i("mu-list-item-title",[t._v(t._s(t.$t("m.Discussion_Admin")))])],1)],1)],1)],1)],1):i("div",[i("el-menu",{staticClass:"vertical_menu",attrs:{router:!0,"default-active":t.currentPath}},[i("el-tooltip",{attrs:{content:t.$t("m.Click_To_Change_Web_Language"),placement:"bottom",effect:"dark"}},[i("div",{staticClass:"logo",on:{click:function(e){return t.changeWebLanguage("zh-CN"==t.webLanguage?"en-US":"zh-CN")}}},[i("img",{attrs:{src:t.imgUrl,alt:"Online Judge Admin"}})])]),i("el-menu-item",{attrs:{index:"/admin/"}},[i("i",{staticClass:"fa fa-tachometer fa-size",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("m.Dashboard"))+" ")]),t.isSuperAdmin?i("el-submenu",{attrs:{index:"general"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-menu"}),t._v(t._s(t.$t("m.General")))]),i("el-menu-item",{attrs:{index:"/admin/user"}},[t._v(t._s(t.$t("m.User_Admin")))]),i("el-menu-item",{attrs:{index:"/admin/announcement"}},[t._v(t._s(t.$t("m.Announcement_Admin")))]),i("el-menu-item",{attrs:{index:"/admin/notice"}},[t._v(t._s(t.$t("m.SysNotice")))]),i("el-menu-item",{attrs:{index:"/admin/conf"}},[t._v(t._s(t.$t("m.System_Config")))]),i("el-menu-item",{attrs:{index:"/admin/switch"}},[t._v(t._s(t.$t("m.System_Switch")))])],2):t._e(),i("el-submenu",{attrs:{index:"problem"}},[i("template",{slot:"title"},[i("i",{staticClass:"fa fa-bars fa-size",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("m.Problem_Admin")))]),i("el-menu-item",{attrs:{index:"/admin/problems"}},[t._v(t._s(t.$t("m.Problem_List")))]),i("el-menu-item",{attrs:{index:"/admin/problem/create"}},[t._v(t._s(t.$t("m.Create_Problem")))]),i("el-menu-item",{attrs:{index:"/admin/problem/tag"}},[t._v(t._s(t.$t("m.Admin_Tag")))]),t.isSuperAdmin||t.isProblemAdmin?i("el-menu-item",{attrs:{index:"/admin/group-problem/apply"}},[t._v(t._s(t.$t("m.Admin_Group_Apply_Problem"))+" ")]):t._e(),t.isSuperAdmin||t.isProblemAdmin?i("el-menu-item",{attrs:{index:"/admin/problem/batch-operation"}},[t._v(t._s(t.$t("m.Export_Import_Problem")))]):t._e()],2),i("el-submenu",{attrs:{index:"training"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-s-claim",staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("m.Training_Admin")))]),i("el-menu-item",{attrs:{index:"/admin/training"}},[t._v(t._s(t.$t("m.Training_List")))]),i("el-menu-item",{attrs:{index:"/admin/training/create"}},[t._v(t._s(t.$t("m.Create_Training")))]),i("el-menu-item",{attrs:{index:"/admin/training/category"}},[t._v(t._s(t.$t("m.Admin_Category")))])],2),i("el-submenu",{attrs:{index:"contest"}},[i("template",{slot:"title"},[i("i",{staticClass:"fa fa-trophy fa-size",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("m.Contest_Admin")))]),i("el-menu-item",{attrs:{index:"/admin/contest"}},[t._v(t._s(t.$t("m.Contest_List")))]),i("el-menu-item",{attrs:{index:"/admin/contest/create"}},[t._v(t._s(t.$t("m.Create_Contest")))])],2),i("el-submenu",{attrs:{index:"discussion"}},[i("template",{slot:"title"},[i("i",{staticClass:"fa fa-comments fa-size",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("m.Discussion")))]),i("el-menu-item",{attrs:{index:"/admin/discussion"}},[t._v(t._s(t.$t("m.Discussion_Admin")))])],2)],1),i("div",{attrs:{id:"header"}},[i("el-row",[i("el-col",{attrs:{span:20}},[i("div",{staticClass:"breadcrumb-container"},[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/admin/"}}},[t._v(t._s(t.$t("m.Home_Page")))]),t._l(t.routeList,(function(e){return i("el-breadcrumb-item",{key:e.path},[t._v(" "+t._s(t.$t("m."+e.meta.title.replaceAll(" ","_")))+" ")])}))],2)],1)]),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.isAuthenticated,expression:"isAuthenticated"}],attrs:{span:4}},[i("i",{staticClass:"fa fa-font katex-editor fa-size",on:{click:function(e){t.katexVisible=!0}}}),i("avatar",{staticClass:"drop-avatar",attrs:{username:t.userInfo.username,inline:!0,size:30,color:"#FFF",src:t.userInfo.avatar}}),i("el-dropdown",{staticStyle:{"vertical-align":"middle"},on:{command:t.handleCommand}},[i("span",[t._v(t._s(t.userInfo.username)),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"logout"}},[t._v(t._s(t.$t("m.Logout")))])],1)],1)],1)],1)],1)],1),i("div",{staticClass:"content-app"},[i("transition",{attrs:{name:"fadeInUp",mode:"out-in"}},[i("router-view")],1),i("div",{staticClass:"footer"},[t._v(" Powered by "),i("a",{staticStyle:{color:"#1E9FFF"},attrs:{href:t.websiteConfig.projectUrl,target:"_blank"}},[t._v(t._s(t.websiteConfig.projectName))]),i("span",{staticStyle:{"margin-left":"10px"}},[i("el-dropdown",{attrs:{placement:"top"},on:{command:t.changeWebLanguage}},[i("span",{staticClass:"el-dropdown-link",staticStyle:{"font-size":"14px"}},[i("i",{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}},[t._v(" "+t._s("zh-CN"==this.webLanguage?"简体中文":"English"))]),i("i",{staticClass:"el-icon-arrow-up el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"zh-CN"}},[t._v("简体中文")]),i("el-dropdown-item",{attrs:{command:"en-US"}},[t._v("English")])],1)],1)],1)])],1),i("el-dialog",{attrs:{title:"Latex Editor",visible:t.katexVisible,width:"350px"},on:{"update:visible":function(e){t.katexVisible=e}}},[i("KatexEditor")],1)],1)},s=[],a=(i("4de4"),i("d3b7"),i("5530")),o=i("2f62"),m=i("3228"),r=i("7aa9"),l=i("4a89"),c=i.n(l),u=function(){return i.e("chunk-2d0afe0f").then(i.bind(null,"0fcf"))},d={name:"app",mounted:function(){var t=this;this.currentPath=this.$route.path,this.getBreadcrumb(),window.onresize=function(){t.page_width()},this.page_width()},data:function(){return{openusermenu:!1,openSideMenu:"",katexVisible:!1,opendrawer:!1,mobileNar:!1,currentPath:"",routeList:[],imgUrl:i("9e3d")}},components:{KatexEditor:u,Avatar:c.a},methods:{handleCommand:function(t){var e=this;"logout"===t&&m["a"].admin_logout().then((function(t){e.$router.push({path:"/admin/login"}),r["a"].success(e.$i18n.t("m.Log_Out_Successfully")),e.$store.commit("clearUserInfoAndToken")}))},page_width:function(){var t=window.screen.width;this.mobileNar=t<1150},getBreadcrumb:function(){var t=this.$route.matched.filter((function(t){return t.meta.title}));this.routeList=t},changeWebLanguage:function(t){this.$store.commit("changeWebLanguage",{language:t})}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["userInfo","isSuperAdmin","isProblemAdmin","isAuthenticated","websiteConfig","webLanguage"])),{},{"window.screen.width":function(t,e){this.mobileNar=t<1150}}),watch:{$route:function(){this.getBreadcrumb()}}},p=d,_=(i("5bbd"),i("2877")),b=Object(_["a"])(p,n,s,!1,null,"fa794b28",null);e["default"]=b.exports},"5bbd":function(t,e,i){"use strict";i("9c11")},"9c11":function(t,e,i){},"9e3d":function(t,e,i){t.exports=i.p+"assets/img/backstage.8bce8c6e.png"}}]);