webpackJsonp([3],{"+JU0":function(t,n,e){"use strict";var a=e("D0oR"),s={name:"jongmok-search",props:["jongmok"],data:function(){return{items:{},selectItems:[],terms:""}},created:function(){this.getAllJongmok()},methods:{setNaviPage:function(t,n){a.a.setNaviPage(t,n)},syncFunc:function(t,n){if("getAllJongmok"===t&&n){for(var e=0;e<this.items.totalList.length;++e){var a={value:"",label:"",krtoen:""};a.value=this.items.totalList[e].code,a.label=this.items.totalList[e].name+"("+this.items.totalList[e].code+")",a.krtoen=u(this.items.totalList[e].name).toUpperCase()+"("+this.items.totalList[e].code+")",this.selectItems.push(a)}!0===this.jongmok.paramStart&&this.runAutoJongmok(this.jongmok.code)}},runAutoJongmok:function(t){if(this.terms=t,this.selectItems.length>0){var n=this.selectItems.filter(this.searchJongmok);1===n.length&&this.selected(n[0])}},searchOrgJongmok:function(t){for(var n=this.terms.trim().split(" "),e=0;e<n.length;e++)if(-1===t.label.indexOf(n[e].toUpperCase()))return!1;return!0},searchKrtoEnJongmok:function(t){for(var n=this.terms.trim().split(" "),e=0;e<n.length;e++){var a=u(n[e]).toUpperCase();if(-1===t.krtoen.indexOf(a))return!1}return!0},search:function(t,n){var e=this;setTimeout(function(){var t=e.selectItems.filter(e.searchOrgJongmok);if(t.length>0)n(t);else{var a=e.selectItems.filter(e.searchKrtoEnJongmok);if(a.length>0)n(a);else{var s=[];s.push({value:"0",label:"검색 결과 없음"}),n(s)}}},50)},selected:function(t){if("0"!==t.value){for(var n=0;n<this.items.totalList.length;n++)if(this.items.totalList[n].code===t.value){this.jongmok.code=this.items.totalList[n].code,this.jongmok.name=this.items.totalList[n].name,this.jongmok.sosok=this.items.totalList[n].sosok,this.jongmok.ranking=this.items.totalList[n].ranking,this.$emit("input");break}this.terms=""}else this.terms=""},getAllJongmok:function(){var t={totalList:[],lenTotalList:0,pageList:[],pageNo:0,pageSize:100,pageTotal:0},n={func:this.syncFunc,param:"getAllJongmok"};a.a.getJsonData(t,101,{param:""},1,n),this.items=t}}},i="rRseEfaqQtTdwWczxvgkoiOjpuPhynbml",o="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ",r="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ",l="ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ",c="ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";function u(t){var n="";if(0==t.length)return n;for(var e=0;e<t.length;e++){var a=t.charAt(e),s=a.charCodeAt(0),u=r.indexOf(a),d=l.indexOf(a),m=c.indexOf(a),h=[-1,-1,-1,-1,-1];44032<=s&&s<=55203?(s-=44032,h[0]=Math.floor(s/588),h[1]=Math.floor(s/28)%21,h[3]=s%28-1):-1!=u?h[0]=u:-1!=d?h[1]=d:-1!=m?h[3]=m:n+=a,-1!=h[1]&&(9==h[1]?(h[1]=27,h[2]=19):10==h[1]?(h[1]=27,h[2]=20):11==h[1]?(h[1]=27,h[2]=32):14==h[1]?(h[1]=29,h[2]=23):15==h[1]?(h[1]=29,h[2]=24):16==h[1]?(h[1]=29,h[2]=32):19==h[1]?(h[1]=31,h[2]=32):(h[1]=o.indexOf(l.charAt(h[1])),h[2]=-1)),-1!=h[3]&&(2==h[3]?(h[3]=0,h[4]=9):4==h[3]?(h[3]=2,h[4]=12):5==h[3]?(h[3]=2,h[4]=18):8==h[3]?(h[3]=5,h[4]=0):9==h[3]?(h[3]=5,h[4]=6):10==h[3]?(h[3]=5,h[4]=7):11==h[3]?(h[3]=5,h[4]=9):12==h[3]?(h[3]=5,h[4]=16):13==h[3]?(h[3]=5,h[4]=17):14==h[3]?(h[3]=5,h[4]=18):17==h[3]?(h[3]=7,h[4]=9):(h[3]=o.indexOf(c.charAt(h[3])),h[4]=-1));for(var g=0;g<5;g++)-1!=h[g]&&(n+=i.charAt(h[g]))}return n}var d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-search",{attrs:{autofocus:"",placeholder:"종목 검색"},model:{value:t.terms,callback:function(n){t.terms=n},expression:"terms"}},[e("q-autocomplete",{attrs:{"max-results":10},on:{search:t.search,selected:t.selected}})],1)},m=[];d._withStripped=!0;var h=e("XyMi"),g=Object(h.a)(s,d,m,!1,null,null,null);g.options.__file="src\\components\\jongmok-search.vue";n.a=g.exports},COu3:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},D0oR:function(t,n,e){"use strict";e.d(n,"a",function(){return d});var a=e("mvHQ"),s=e.n(a),i=e("/5sW"),o=e("mtWM"),r=e.n(o),l=e("YaEn"),c=(e("7109"),"http://222.121.104.28:47232/web"),u={data:function(){return{user:{authenticated:!1,nickname:"",token:"",permission:10}}},methods:{checkAuth:function(t){return localStorage.getItem("id_token")?(this.user.authenticated=!0,this.user.nickname=localStorage.getItem("nickname_token"),this.user.token="Bearer "+localStorage.getItem("id_token"),this.user.permission=localStorage.getItem("permission_token")):(this.user.authenticated=!1,this.user.nickname="",this.user.token="",this.user.permission=10,t&&this.errorNotify("로그인후 사용하시기 바랍니다."),l.a.push("/account")),this.user.authenticated},signup:function(t){var n=this,e=s()({code:1,data:t}),a={async:!0,crossDomain:!0,url:c,method:"POST",headers:{"Content-Type":"application/json",Authorization:"","Cache-Control":"no-cache"},processData:!1,data:e};r()(a).then(function(t){n.successNotify("정상적으로 등록되었습니다."),l.a.push("/account")}).catch(function(t){n.errorHandling(t,!0)})},login:function(t){var n=this,e=s()({code:2,data:t}),a={async:!0,crossDomain:!0,url:c,method:"POST",headers:{"Content-Type":"application/json",Authorization:"","Cache-Control":"no-cache"},processData:!1,data:e};r()(a).then(function(t){var e;e=t.data,n.logout(),n.user.authenticated=!0,n.user.nickname=e.data.nickname,n.user.token="Bearer "+e.data.token,n.user.permission=e.data.permission,localStorage.setItem("id_token",e.data.token),localStorage.setItem("nickname_token",e.data.nickname),localStorage.setItem("permission_token",e.data.permission),n.successNotify("로그인 되었습니다."),l.a.push("/")}).catch(function(t){n.errorHandling(t,!0)})},logout:function(){this.user.authenticated=!1,this.user.nickname="",this.user.token="",this.user.permission=10,localStorage.removeItem("id_token"),localStorage.removeItem("nickname_token"),localStorage.removeItem("permission_token")},setNaviTotalPage:function(t){t.pageTotal=parseInt(t.lenTotalList/t.pageSize),t.lenTotalList>t.pageTotal*t.pageSize&&(t.pageTotal+=1)},setNaviPage:function(t,n){t.pageNo=n,t.pageTotal<n&&(t.pageNo=t.pageTotal),n<1&&(t.pageNo=1),t.pageList=t.totalList.slice(t.pageSize*(t.pageNo-1),t.pageSize*t.pageNo)},getJsonData:function(t,n,e,a,i){var o=this,l=s()({code:n,data:e});if(this.checkAuth(!0)){var u={async:!0,crossDomain:!0,url:c,method:"POST",headers:{"Content-Type":"application/json",Authorization:this.user.token,"Cache-Control":"no-cache"},processData:!1,data:l};r()(u).then(function(n){var e;if(e=n.data,0===a)t.data=e.data;else if(1===a)t.lenTotalList=e.len,t.totalList=e.data;else{if(2!==a)return;t.lenConsList=e.len1,t.consList=e.data1,t.lenTotalList=e.len2,t.totalList=e.data2}void 0!==t&&void 0!==t.lenTotalList&&t.lenTotalList>=1&&(o.setNaviTotalPage(t),o.setNaviPage(t,1)),void 0!==i.func&&i.func(i.param,!0)}).catch(function(t){void 0!==i.func&&i.func(i.param,!1),o.errorHandling(t,!1)})}},setJsonData:function(t,n,e){var a=this;if(this.checkAuth(!0)){var i=s()({code:n,data:t}),o={async:!0,crossDomain:!0,url:c,method:"POST",headers:{"Content-Type":"application/json",Authorization:this.user.token,"Cache-Control":"no-cache"},processData:!1,data:i};r()(o).then(function(t){void 0!==e.func&&e.func(e.param,!0)}).catch(function(t){void 0!==e.func&&e.func(e.param,!1),a.errorHandling(t,!1)})}},errorHandling:function(t,n){var e={status:0,message:""};"Network Error"===t.message?(e.status=0,e.message="서버 연결 실패 !!! "):void 0!==t.response&&void 0!==t.response.status?(e.status=t.response.status,e.message=t.response.data):(e.status=0,e.message="Undefined Error !!! ");var a="Error status : "+e.status+", "+e.message;this.errorNotify(a),401===e.status&&!1===n&&(this.logout(),l.a.push("/account"))},successNotify:function(t){this.$q.notify({color:"info",icon:"info",message:t,position:"top",actions:null,timeout:3e3})},errorNotify:function(t){this.$q.notify({color:"negative",icon:"report_problem",message:t,position:"top",actions:null,timeout:5e3})},alertMsg:function(t){this.$q.dialog({title:"Alert",message:t})},comfirmMsg:function(t){var n=this;this.$q.dialog({title:"Confirm",message:t,ok:"확인",cancel:"취소"}).then(function(){n.$q.notify("Agreed!")}).catch(function(){n.$q.notify("Disagreed...")})}}},d=new(i.a.extend({mixins:[u]}))},Ipqd:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("+JU0"),s=(e("D0oR"),e("7109")),i=new Date,o={name:"PageIndex",components:{JongmokSearch:a.a},data:function(){return{jongmok:{paramStart:!1,code:"",name:"",sosok:0,ranking:0},settings:{startDay:s.G.startOfDate(i,"year"),endDay:i,money:"100",susuryo:"0.35"},candlestick:{}}},methods:{setNaviPage:function(t,n){HTTP_CALL.setNaviPage(t,n)},syncFunc:function(t,n){},setYearDate:function(t){if(11===t)return this.settings.startDay=s.G.startOfDate(i,"year"),void(this.settings.endDay=i);var n=s.G.subtractFromDate(i,{year:t});this.settings.startDay=s.G.addToDate(n,{days:1}),this.settings.endDay=i},runCandlestick:function(){}}},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"row items-start",attrs:{padding:""}},[e("q-card",{staticClass:"q-ma-sm",attrs:{inline:""}},[e("q-card-title",[e("q-icon",{attrs:{name:"settings",color:"info"}}),t._v("\n      종목 설정\n    ")],1),t._v(" "),e("q-card-main",[e("div",{staticClass:"tablewrapper"},[e("div",{staticClass:"table"},[e("div",{staticClass:"tablecontent"},[e("div",{staticClass:"tablecell"},[e("jongmok-search",{attrs:{jongmok:t.jongmok}}),t._v(" "),e("q-field",{attrs:{label:"종목코드"}},[e("q-input",{attrs:{disabled:"","hide-underline":""},model:{value:t.jongmok.code,callback:function(n){t.$set(t.jongmok,"code","string"==typeof n?n.trim():n)},expression:"jongmok.code"}})],1),t._v(" "),e("q-field",{attrs:{label:"종목명"}},[e("q-input",{attrs:{disabled:"","hide-underline":""},model:{value:t.jongmok.name,callback:function(n){t.$set(t.jongmok,"name","string"==typeof n?n.trim():n)},expression:"jongmok.name"}})],1),t._v(" "),e("q-field",{attrs:{label:"종목순위"}},[0==t.jongmok.sosok?e("q-input",{attrs:{disabled:"",value:"KOSPI : "+t.jongmok.ranking,"hide-underline":""}}):e("q-input",{attrs:{disabled:"",value:"KOSDAQ : "+t.jongmok.ranking,"hide-underline":""}})],1)],1)])]),t._v(" "),e("div",{staticClass:"table"},[e("div",{staticClass:"tablecontent"},[e("div",{staticClass:"tablecell"},[e("div",{staticClass:"tablecontent"},[e("div",{staticClass:"tablecell"},[e("q-icon",{attrs:{name:"access time",color:"info"}}),t._v(" 기간 설정\n                ")],1)]),t._v(" "),e("div",{staticClass:"tablecontent"},[e("div",{staticClass:"tablecell"},[e("q-btn",{attrs:{color:"info",label:"1년"},on:{click:function(n){t.setYearDate(1)}}}),t._v(" "),e("q-btn",{attrs:{color:"info",label:"2년"},on:{click:function(n){t.setYearDate(2)}}}),t._v(" "),e("q-btn",{attrs:{color:"info",label:"3년"},on:{click:function(n){t.setYearDate(3)}}}),t._v(" "),e("q-btn",{attrs:{color:"info",label:"올해"},on:{click:function(n){t.setYearDate(11)}}})],1)]),t._v(" "),e("div",{staticClass:"tablecontent"},[e("div",{staticClass:"tablecell"},[e("q-datetime",{attrs:{color:"light-blue","first-day-of-week":6,"stack-label":"시작일자"},model:{value:t.settings.startDay,callback:function(n){t.$set(t.settings,"startDay",n)},expression:"settings.startDay"}}),t._v(" "),e("q-datetime",{attrs:{color:"light-blue","first-day-of-week":6,"stack-label":"종료일자"},model:{value:t.settings.endDay,callback:function(n){t.$set(t.settings,"endDay",n)},expression:"settings.endDay"}})],1)])])])]),t._v(" "),e("div",{staticClass:"table"},[e("div",{staticClass:"tablecontent"},[e("div",{staticClass:"tablecell"},[e("div",{staticClass:"tablecontent"},[e("div",{staticClass:"tablecell"},[e("q-icon",{attrs:{name:"attach money",color:"info"}}),t._v(" 투입자금( 단위:백만원 )\n                ")],1)]),t._v(" "),e("div",{staticClass:"tablecontent"},[e("div",{staticClass:"tablecell"},[e("q-field",{attrs:{label:"투입금액"}},[e("q-input",{model:{value:t.settings.money,callback:function(n){t.$set(t.settings,"money","string"==typeof n?n.trim():n)},expression:"settings.money"}})],1),t._v(" "),e("q-field",{attrs:{label:"수수료율"}},[e("q-input",{attrs:{disabled:"","hide-underline":""},model:{value:t.settings.susuryo,callback:function(n){t.$set(t.settings,"susuryo","string"==typeof n?n.trim():n)},expression:"settings.susuryo"}})],1)],1)])])])])])])],1),t._v(" "),e("q-card",{staticClass:"q-ma-sm",attrs:{inline:""}},[e("q-card-title",[e("q-icon",{attrs:{name:"star",color:"red"}}),t._v("\n      일봉 분석( Candlestick Patterns )\n    ")],1),t._v(" "),e("q-card-main",[e("div",{staticClass:"tablewrapper"},[e("div",{staticClass:"table"},[e("div",{staticStyle:{padding:"5px"},attrs:{align:"right"}},[e("q-btn",{attrs:{color:"red",label:"시뮬레이션"},on:{click:t.runCandlestick}})],1)])])])],1),t._v(" "),e("q-card",{staticClass:"q-ma-sm",attrs:{inline:""}},[e("q-card-title",[t._v("\n      이평선 분석( Moving Averages )\n    ")]),t._v(" "),e("q-card-main")],1),t._v(" "),e("q-card",{staticClass:"q-ma-sm",attrs:{inline:""}},[e("q-card-title",[t._v("\n      보조지표 분석( Technical Indicators )\n    ")]),t._v(" "),e("q-card-main")],1),t._v(" "),e("q-card",{staticClass:"q-ma-sm",attrs:{inline:""}},[e("q-card-title",[t._v("\n      거래량 분석\n    ")]),t._v(" "),e("q-card-main")],1),t._v(" "),e("q-card",{staticClass:"q-ma-sm",attrs:{inline:""}},[e("q-card-title",[t._v("\n      가격 분석( Pivot Points )\n    ")]),t._v(" "),e("q-card-main")],1),t._v(" "),e("div",[e("b",[t._v("* 기술적 분석 개요 ")]),e("br"),t._v("\n    이평선 : 추세 확인 "),e("br"),t._v("\n    볼린저 밴드 : 변동성 확인 "),e("br"),t._v("\n    피봇포인트 : 지지/저항, 매수/매도 활용 "),e("br")]),t._v(" "),e("div",[t._v("\n    시뮬레이션 : 종목분석과 동일하나, 과거 데이터를 가지고 기술적분석을 통한 수익률 계산. "),e("br"),t._v(" 실제 투자 패턴 만들기가 목표 "),e("br"),t._v(" 자동 트레이딩을 가기 전 단계로 고려 "),e("br"),t._v(" "),e("br"),e("br"),t._v(" "),e("b",[t._v("* 기술적 지표 평가")]),t._v(" "),e("br"),t._v(" 이동평균 시뮬레이션"),e("br"),t._v(" 보조지표 시뮬레이션"),e("br"),t._v(" MACD, Slow STC, RSI 등, 단일/복합 시뮬레이션\n\n    "),e("b",[t._v("* 기본적 분석에 의한 평가")])])],1)},l=[];r._withStripped=!0;var c=e("XyMi"),u=!1;var d=function(t){u||e("ZU1j")},m=Object(c.a)(o,r,l,!1,d,null,null);m.options.__file="src\\pages\\simulation\\index.vue";n.default=m.exports},ZU1j:function(t,n,e){var a=e("COu3");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e("rjj0").default)("1e11d3c9",a,!1,{})},mvHQ:function(t,n,e){t.exports={default:e("qkKv"),__esModule:!0}},qkKv:function(t,n,e){var a=e("FeBl"),s=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}}});