webpackJsonp([16],{vGzp:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("gyMJ"),o={data:function(){return{visible:!1,dataForm:{id:0,beanName:"",methodName:"",params:"",cronExpression:"",remark:"",status:0},dataRule:{beanName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],methodName:[{required:!0,message:"方法名称不能为空",trigger:"blur"}],cronExpression:[{required:!0,message:"cron表达式不能为空",trigger:"blur"}]}}},methods:{init:function(a){var e=this;this.dataForm.id=a||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&r.a.schedule.info(e.dataForm.id).then(function(a){var t=a.data;t&&0===t.code&&(e.dataForm.beanName=t.schedule.beanName,e.dataForm.methodName=t.schedule.methodName,e.dataForm.params=t.schedule.params,e.dataForm.cronExpression=t.schedule.cronExpression,e.dataForm.remark=t.schedule.remark,e.dataForm.status=t.schedule.status)})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(e){if(e){var t={jobId:a.dataForm.id||void 0,beanName:a.dataForm.beanName,methodName:a.dataForm.methodName,params:a.dataForm.params,cronExpression:a.dataForm.cronExpression,remark:a.dataForm.remark,status:a.dataForm.id?a.dataForm.status:void 0};(a.dataForm.id?r.a.schedule.update(t):r.a.schedule.add(t)).then(function(e){var t=e.data;t&&0===t.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(t.msg)})}})}}},s={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-dialog",{attrs:{title:a.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:a.visible},on:{"update:visible":function(e){a.visible=e}}},[t("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"100px"},nativeOn:{keyup:function(e){if(!("button"in e)&&a._k(e.keyCode,"enter",13,e.key))return null;a.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"bean名称",prop:"beanName"}},[t("el-input",{attrs:{placeholder:"spring bean名称, 如: testTask"},model:{value:a.dataForm.beanName,callback:function(e){a.$set(a.dataForm,"beanName",e)},expression:"dataForm.beanName"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"方法名称",prop:"methodName"}},[t("el-input",{attrs:{placeholder:"方法名称"},model:{value:a.dataForm.methodName,callback:function(e){a.$set(a.dataForm,"methodName",e)},expression:"dataForm.methodName"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"参数",prop:"params"}},[t("el-input",{attrs:{placeholder:"参数"},model:{value:a.dataForm.params,callback:function(e){a.$set(a.dataForm,"params",e)},expression:"dataForm.params"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"cron表达式",prop:"cronExpression"}},[t("el-input",{attrs:{placeholder:"如: 0 0 12 * * ?"},model:{value:a.dataForm.cronExpression,callback:function(e){a.$set(a.dataForm,"cronExpression",e)},expression:"dataForm.cronExpression"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{placeholder:"备注"},model:{value:a.dataForm.remark,callback:function(e){a.$set(a.dataForm,"remark",e)},expression:"dataForm.remark"}})],1)],1),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.visible=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(e){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},m=t("VU/8")(o,s,!1,null,null,null);e.default=m.exports}});