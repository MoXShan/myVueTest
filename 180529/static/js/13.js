webpackJsonp([13],{PVfy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),n=a.n(i),o=a("gyMJ"),s=a("zfz+"),l=a("0xDb"),r={data:function(){return{activityId:"",activityType:1,activityInfo:"",couponForm:"",dataForm:{shopId:"",itemName:"",goodsId:"",itemCode:"",auditResult:""},auditResult:[{value:0,label:"不通过"},{value:1,label:"通过"},{value:2,label:"待审核"}],dataList:[],shopList:"",shopLimits:[],dataListSelections:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,shopListVisible:!1}},activated:function(){this.activityId=this.$route.params.activityId||13,this.activityType=this.$route.params.activityType||1,this.activityId?(this.inits(parseInt(this.activityId)),"2"==this.activityType&&this.fullCoupon(parseInt(this.activityId))):this.$router.push({name:"activity"}),this.getDataList()},watch:{activityId:function(t,e){t||this.$router.push({name:"activity"})}},filters:{formatDate:function(t){var e=new Date(t);return Object(l.a)(e,"yyyy-MM-dd hh:mm:ss")},currency:function(t){return"￥"+(t/100).toFixed(2)}},components:{ShopList:s.default},methods:{inits:function(t){var e=this;this.$nextTick(function(){o.a.activity.info(t).then(function(t){var a=t.data;a&&0===a.code?e.activityInfo=a.data:e.$alert(a.msg,"提示",{confirmButtonText:"确定",type:"warning",showClose:!1,callback:function(t){e.$router.push({name:"activity"})}})}).catch(function(){})})},fullCoupon:function(t){var e=this;o.a.activity.fullCoupon(t).then(function(t){var a=t.data;a&&0===a.code&&(e.couponForm=a.data)}).catch(function(){})},getDataList:function(){var t=this;this.dataListLoading=!0;var e={activityId:this.activityId,auditResult:this.dataForm.auditResult,goodsId:this.dataForm.goodsId,shopId:this.dataForm.shopId,itemCode:this.dataForm.itemCode,itemName:this.dataForm.itemName,page:this.pageIndex+"",limit:this.pageSize+""};o.a.goods.list(e).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1}).catch(function(){})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},getShopId:function(){var t=this;this.shopListVisible=!0,this.$nextTick(function(){t.$refs.ShopList.checkdataList=t.shopLimits,t.$refs.ShopList.init()})},getShopLimits:function(t){this.shopLimits=t,this.dataForm.shopId=t.map(function(t){return t.shopId}).join(),console.log(this.dataForm.shopId)},verifyHandle:function(t,e){var a=this,i={id:parseInt(t),result:parseInt(e)};o.a.goods.audit(i).then(function(t){var e=t.data;e&&0===e.code?a.$alert("审核成功","提示",{confirmButtonText:"确定",type:"success",showClose:!1,callback:function(t){a.getDataList()}}):a.$alert(e.msg,"提示",{confirmButtonText:"确定",type:"warning",showClose:!1})}).catch(function(){})},batchAudit:function(t){var e=this,a=this.dataListSelections.map(function(t){return parseInt(t.goodsReportId)}),i={ids:n()(a),result:parseInt(t)};o.a.goods.batchAudit(i).then(function(t){var a=t.data;a&&0===a.code?e.$alert("审核成功","提示",{confirmButtonText:"确定",type:"success",showClose:!1,callback:function(t){e.getDataList()}}):e.$alert(a.msg,"提示",{confirmButtonText:"确定",type:"warning",showClose:!1})}).catch(function(){})},resetForm:function(t){this.$nextTick(function(){this.$refs[t].resetFields(),this.dataForm.shopId="",this.shopLimits=[]})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-info"},[a("div",{staticClass:"el-cardheader"},[a("span",[t._v("商品管理")]),t._v(" "),a("router-link",{staticClass:"el-button el-button--primary el-button--small",attrs:{to:{name:"activity"}}},[t._v("返回活动管理")])],1),t._v(" "),a("el-row",{staticClass:"pt_20",attrs:{gutter:20}},[a("el-col",{attrs:{span:13}},[a("ul",{staticClass:"activity-list"},[a("li",[a("span",[t._v("活动名称：")]),t._v(t._s(t.activityInfo.activityName))]),t._v(" "),a("li",[a("span",[t._v("提报时间：")]),t._v(t._s(t._f("formatDate")(t.activityInfo.reportStartTime))+"—"+t._s(t._f("formatDate")(t.activityInfo.reportEndTime)))]),t._v(" "),a("li",[a("span",[t._v("活动时间：")]),t._v(t._s(t._f("formatDate")(t.activityInfo.activityStartTime))+"—"+t._s(t._f("formatDate")(t.activityInfo.activityEndTime)))]),t._v(" "),"2"==t.activityType?[a("li",[a("span",[t._v("促销类型：")]),t._v("全场优惠券")]),t._v(" "),t.couponForm?a("li",[a("span",[t._v("优惠力度：")]),t._v(" "),"1"==t.couponForm.type?[t._v("\n              订单价格优惠"+t._s(t.couponForm.amount/100)+"元\n            ")]:[t._v("\n              订单价格"+t._s(t.couponForm.discount)+"折扣优惠\n            ")]],2):a("li",[a("span",[t._v("优惠力度：")]),t._v(" "),a("span",{staticClass:"tips_gray"},[t._v("该活动暂无促销信息，请进行优惠券配置")])])]:t._e()],2)])],1),t._v(" "),a("el-tabs",{staticClass:"card-box mt_20",attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"商品列表（待审核：213）"}},[a("el-form",{ref:"dataForm",staticClass:"pt_5",attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getDataList()}}},[a("el-row",[a("el-form-item",{attrs:{label:"商品名称",prop:"itemName"}},[a("el-input",{attrs:{clearable:"",size:"medium"},model:{value:t.dataForm.itemName,callback:function(e){t.$set(t.dataForm,"itemName",e)},expression:"dataForm.itemName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品ID",prop:"goodsId"}},[a("el-input",{attrs:{clearable:"",size:"medium"},model:{value:t.dataForm.goodsId,callback:function(e){t.$set(t.dataForm,"goodsId",e)},expression:"dataForm.goodsId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"货品编号",prop:"itemCode"}},[a("el-input",{attrs:{clearable:"",size:"medium"},model:{value:t.dataForm.itemCode,callback:function(e){t.$set(t.dataForm,"itemCode",e)},expression:"dataForm.itemCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"auditResult"}},[a("el-select",{attrs:{placeholder:"请选择",size:"medium"},model:{value:t.dataForm.auditResult,callback:function(e){t.$set(t.dataForm,"auditResult",e)},expression:"dataForm.auditResult"}},t._l(t.auditResult,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"选择店铺",prop:"shopId"}},[a("el-input",{staticClass:"shop_input",attrs:{size:"medium",clearable:""},model:{value:t.dataForm.shopId,callback:function(e){t.$set(t.dataForm,"shopId",e)},expression:"dataForm.shopId"}},[a("el-button",{attrs:{slot:"append",type:"primary"},on:{click:function(e){t.getShopId()}},slot:"append"},[t._v("点击选择店铺")])],1),t._v(" "),t.shopListVisible?a("shop-list",{ref:"ShopList",attrs:{defaultData:t.shopLimits},on:{refreshDataList:t.getShopLimits}}):t._e()],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:function(e){t.resetForm("dataForm")}}},[t._v("重置")])],1)],1)],1),t._v(" "),a("el-row",{staticClass:"pb_20"},[a("el-button",{attrs:{type:"success",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.batchAudit(1)}}},[t._v("批量通过")]),t._v(" "),a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.batchAudit(0)}}},[t._v("批量不通过")]),t._v(" "),a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0}},[t._v("移除商品")]),t._v(" "),a("el-button",{staticClass:"fr",attrs:{type:"primary"}},[t._v("导出")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"","reserve-selection":!0},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemCode","header-align":"center",align:"center",label:"货品编号",width:"130"}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemName","header-align":"center",align:"center",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"brandName","header-align":"center",align:"center",label:"品牌",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"activityGoodsNum","header-align":"center",align:"center",label:"活动商品数量",width:"130"}}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"价格",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("成本价："+t._s(t._f("currency")(e.row.goodsCostPrice)))]),t._v(" "),a("p",[t._v("划线价："+t._s(t._f("currency")(e.row.drawLinePrice)))]),t._v(" "),a("p",[t._v("活动价："+t._s(t._f("currency")(e.row.activityPrice)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"shopId","header-align":"center",align:"center",label:"店铺",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.shopName)+"("+t._s(e.row.shopId)+")\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.auditResult[e.row.auditResult].label))]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",label:"操作",fit:"true","class-name":"el-button-op",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.isAuth("activity:activity:all")&&"1"!=e.row.auditResult?a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){t.verifyHandle(e.row.goodsReportId,1)}}},[t._v("审核通过")]):t._e(),t._v(" "),t.isAuth("activity:activity:all")&&"0"!=e.row.auditResult?a("el-button",{staticClass:"mt_5",attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){t.verifyHandle(e.row.goodsReportId,0)}}},[t._v("审核不通过")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"商品调整申请（待处理：12）"}})],1)],1)},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(t){a("j7Uu")},"data-v-238a5846",null);e.default=d.exports},j7Uu:function(t,e,a){var i=a("vHkW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("9c771884",i,!0)},vHkW:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.el-cardheader[data-v-238a5846] {\n  position: relative;\n}\n.el-cardheader .el-button[data-v-238a5846] {\n    position: absolute;\n    right: 0;\n    top: -8px;\n}\n.shop_input[data-v-238a5846] {\n  width: 500px;\n}\n",""])}});