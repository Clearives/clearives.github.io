webpackJsonp([1],{116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to cc-admin"}}}},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{ccName:"Cc-Admin",collapsed:!1,ccUserName:"",ccUserAvatar:""}},methods:{collapse:function(){console.log("collapse"),this.collapsed=!this.collapsed},handleopen:function(){console.log("handleopen")},handleclose:function(){console.log("handleclose")},handleselect:function(e,t){},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),this.ccUserName=e.username||"",this.ccUserAvatar=e.avatar||"")}}},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(46),s=n.n(a),o=n(45);t.default={data:function(){return{logining:!1,ruleForm:{account:"clearives",checkPass:"123456"},rules:{account:[{required:!0,message:"Please enter username",trigger:"blur"}],checkPass:[{required:!0,message:"Please enter password",trigger:"blur"}]},checked:!0}},methods:{handleReset:function(){this.$refs.ruleForm.resetFields()},handleSubmit:function(e){var t=this;t.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.logining=!0;var a={username:t.ruleForm.account,password:t.ruleForm.checkPass};n.i(o.b)(a).then(function(e){t.logining=!1;var n=e.msg,a=e.code,o=e.user;200!==a?t.$message({message:n,type:"error"}):(sessionStorage.setItem("user",s()(o)),t.$router.push({path:"/table"}))})})}}}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(124),s=n.n(a),o=n(45);t.default={data:function(){return{loading:!1,editFormVisible:!1,editFormRules:{name:[{required:!0,message:"please enter username",trigger:"blur"}]},filters:{name:""},users:[],editForm:{id:0,name:"",sex:-1,age:0,birth:"",addr:""}}},methods:{formatSex:function(e,t){return 1==e.sex?"男":0==e.sex?"女":"未知"},getUser:function(){var e=this,t={name:this.filters.name};this.loading=!0,n.i(o.a)(t).then(function(t){e.users=t.data.users,e.loading=!1})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=s()({},t)},editSubmit:function(e){var t=e.id,n=e.name,a=e.addr,s=e.age,o=e.birth,r=e.sex;this.users.some(function(e){e.id===t&&(e.name=n,e.addr=a,e.age=s,e.birth=o,e.sex=r)}),this.editFormVisible=!1},handleDelete:function(e,t){var n=this;n.$confirm("此操作将删除该行信息, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.loading=!0,n.users.splice(e,1),n.loading=!1,n.$message({type:"success",message:"删除成功!"})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})}},mounted:function(){this.getUser()}}},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=n(14),o=(n.n(s),n(73)),r=n.n(o),l=n(70),i=n.n(l),c=n(71),u=(n.n(c),n(72)),d=(n.n(u),n(69)),m=n(68);location.search.indexOf("mock")>-1&&m.a.bootstrap(),a.default.config.productionTip=!1,a.default.use(i.a),d.a.beforeEach(function(e,t,n){"/login"==e.path&&sessionStorage.removeItem("user"),JSON.parse(sessionStorage.getItem("user"))||"/login"==e.path?n():n({path:"/login"})}),new a.default({el:"#app",router:d.a,template:"<App/>",components:{App:r.a}})},122:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});for(var a=n(191),s=n.n(a),o=[{id:1,username:"clearives",password:"123456",avatar:"https://avatars1.githubusercontent.com/u/8925862?v=3&s=460",name:"曾祥辉"}],r=[],l=0;l<12;l++)r.push(s.a.mock({id:s.a.Random.guid(),name:s.a.Random.cname(),addr:s.a.mock("@county(true)"),"age|18-60":1,birth:s.a.Random.date(),sex:s.a.Random.integer(0,1)}))},123:function(e,t,n){"use strict";var a=n(46),s=n.n(a),o=n(125),r=n.n(o),l=n(14),i=n.n(l),c=n(96),u=n.n(c),d=n(122),m=d.a;t.a={bootstrap:function(){var e=new u.a(i.a);e.onGet("/success").reply(200,{msg:"success"}),e.onGet("/error").reply(500,{msg:"failure"}),e.onPost("/login").reply(function(e){var t=JSON.parse(e.data),n=t.username,a=t.password;return new r.a(function(e,t){var o=null;setTimeout(function(){var t=d.b.some(function(e){if(e.username===n&&e.password===a)return o=JSON.parse(s()(e)),o.password=void 0,!0});e(t?[200,{code:200,msg:"success",user:o}]:[200,{code:500,msg:"username password error"}])},500)})}),e.onGet("/user/list").reply(function(e){var t=e.params.name,n=m.filter(function(e){return!t||-1!=e.name.indexOf(t)});return new r.a(function(e,t){setTimeout(function(){e([200,{users:n}])},1e3)})})}}},184:function(e,t){},185:function(e,t){},186:function(e,t){},187:function(e,t){},188:function(e,t){},193:function(e,t,n){n(187);var a=n(13)(n(117),n(200),"data-v-c908631a",null);e.exports=a.exports},194:function(e,t,n){n(185);var a=n(13)(n(118),n(198),null,null);e.exports=a.exports},195:function(e,t,n){n(188);var a=n(13)(n(119),n(201),"data-v-e3c1d098",null);e.exports=a.exports},196:function(e,t,n){n(186);var a=n(13)(n(120),n(199),null,null);e.exports=a.exports},197:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},198:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:e.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[e._v("\n      "+e._s(e.collapsed?"C":e.ccName)+"\n    ")]),e._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"tools",on:{click:function(t){t.preventDefault(),e.collapse(t)}}},[n("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:4}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{attrs:{src:this.ccUserAvatar}}),e._v(" "+e._s(e.ccUserName))])])],1),e._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":"",router:""},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.$router.options.routes,function(t,a){return t.hidden?e._e():[t.leaf?e._e():n("el-submenu",{attrs:{index:a+""}},[n("template",{slot:"title"},[n("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():n("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v(e._s(t.name))])})],2),e._v(" "),t.leaf&&t.children.length>0?n("el-menu-item",{attrs:{index:t.children[0].path}},[n("i",{class:t.iconCls}),e._v(e._s(t.children[0].name))]):e._e()]})],2),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed"},e._l(e.$router.options.routes,function(t,a){return t.hidden?e._e():n("li",{staticClass:"el-submenu item"},[t.leaf?[n("li",{staticClass:"el-submenu"},[n("div",{staticClass:"el-submenu__title el-menu-item",class:e.$route.path==t.children[0].path?"is-active":"",staticStyle:{"padding-left":"20px",height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(n){e.$router.push(t.children[0].path)}}},[n("i",{class:t.iconCls})])])]:[n("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"20px"},on:{mouseover:function(t){e.showMenu(a,!0)},mouseout:function(t){e.showMenu(a,!1)}}},[n("i",{class:t.iconCls})]),e._v(" "),n("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+a,on:{mouseover:function(t){e.showMenu(a,!0)},mouseout:function(t){e.showMenu(a,!1)}}},e._l(t.children,function(t){return t.hidden?e._e():n("li",{key:t.path,staticClass:"el-menu-item",class:e.$route.path==t.path?"is-active":"",staticStyle:{"padding-left":"40px"},on:{click:function(n){e.$router.push(t.path)}}},[e._v(e._s(t.name))])}))]],2)}))],1),e._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return n("el-breadcrumb-item",{key:t.path},[e._v("\n              "+e._s(t.name)+"\n            ")])}))],1),e._v(" "),n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},199:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.users,"highlight-current-row":""}},[n("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"Name",width:"120",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"sex",label:"Sex",width:"100",formatter:e.formatSex,sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"age",label:"Age",width:"100",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"birth",label:"Birthday",width:"120",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"addr",label:"Address","min-width":"180",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("Edit")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("Delete")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑","close-on-click-modal":!1},model:{value:e.editFormVisible,callback:function(t){e.editFormVisible=t},expression:"editFormVisible"}},[n("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.editForm.name=t},expression:"editForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"性别"}},[n("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.editForm.sex=t},expression:"editForm.sex"}},[n("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("男")]),e._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"年龄"}},[n("el-input-number",{attrs:{min:0,max:200},model:{value:e.editForm.age,callback:function(t){e.editForm.age=t},expression:"editForm.age"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"生日"}},[n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.editForm.birth,callback:function(t){e.editForm.birth=t},expression:"editForm.birth"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"地址"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.editForm.addr,callback:function(t){e.editForm.addr=t},expression:"editForm.addr"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.editSubmit(e.editForm)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}},200:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test"},[n("a",{attrs:{href:"#/login"}},[e._v("点我")])])}]}},201:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("cc-admin")]),e._v(" "),n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"username"},model:{value:e.ruleForm.account,callback:function(t){e.ruleForm.account=t},expression:"ruleForm.account"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"checkPass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"password"},model:{value:e.ruleForm.checkPass,callback:function(t){e.ruleForm.checkPass=t},expression:"ruleForm.checkPass"}})],1),e._v(" "),n("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("Remember")]),e._v(" "),n("el-form-item",{staticStyle:{width:"100%","text-align":"center"}},[n("el-button",{attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("Login")]),e._v(" "),n("el-button",{on:{click:e.handleReset}},[e._v("Reset")])],1)],1)},staticRenderFns:[]}},45:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});var a=n(14),s=n.n(a),o=function(e){return s.a.post("/login",e).then(function(e){return e.data})},r=function(e){return s.a.get("/user/list",{params:e})}},68:function(e,t,n){"use strict";var a=n(123);t.a=a.a},69:function(e,t,n){"use strict";var a=n(3),s=n(202),o=n(195),r=n.n(o),l=n(193),i=n.n(l),c=n(194),u=n.n(c),d=n(196),m=n.n(d);a.default.use(s.a),t.a=new s.a({routes:[{path:"/login",component:r.a,name:"",hidden:!0},{path:"/",component:u.a,name:"Component",iconCls:"el-icon-message",children:[{path:"/table",component:m.a,name:"Table"},{path:"/form",component:i.a,name:"Form"}]},{path:"/",component:u.a,name:"Collection",iconCls:"el-icon-star-on",children:[{path:"/table1",component:i.a,name:"Table"},{path:"/form1",component:i.a,name:"Form"}]},{path:"/",component:u.a,name:"Setting",iconCls:"el-icon-setting",children:[{path:"/table2",component:i.a,name:"Table"},{path:"/form2",component:i.a,name:"Form"}]}]})},71:function(e,t){},72:function(e,t){},73:function(e,t,n){n(184);var a=n(13)(n(116),n(197),null,null);e.exports=a.exports}},[121]);
//# sourceMappingURL=app.6c0b8aa5569e3321273f.js.map