!function(){function t(t,n){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){a&&(t=a);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==a.return||a.return()}finally{if(l)throw r}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Afwt:function(e,a,r){"use strict";r.r(a),r.d(a,"AboutModule",function(){return vt}),r.d(a,"createTranslateLoader",function(){return mt});var c=r("IheW"),l=r("SVse"),s=r("iInd"),f=r("hUVe"),p=i(function t(e,n,a){o(this,t),this.propName=e,this.propValue=n,this.tooltip=a}),d=i(function t(e,n,a){o(this,t),this.companyName=e,this.productName=n,this.privacyPolicyLink=a}),b=r("D3+B"),u=r("Iab2"),g=r("wd/R"),h=r("8Y7J"),v=r("TSSN"),m=r("/dUA"),y=r("cUpR"),w=r("GX/v"),S=r("s7LF"),A=r("ZRSf"),C=r("hhfa"),I=["zebraStripes"];function L(t,e){1&t&&(h.fc(0,"td",11),h.fc(1,"h1"),h.bd(2),h.uc(3,"translate"),h.ec(),h.ec()),2&t&&(h.Lb(2),h.cd(h.vc(3,1,"about.msr.title")))}function M(t,e){1&t&&(h.fc(0,"td",11),h.fc(1,"h1"),h.bd(2),h.uc(3,"translate"),h.ec(),h.ec()),2&t&&(h.Lb(2),h.cd(h.vc(3,1,"about.is.title")))}function T(t,e){if(1&t&&(h.fc(0,"tr"),h.fc(1,"th",31),h.bd(2),h.ec(),h.ec()),2&t){var n=e.ngIf;h.Lb(2),h.cd(n.productName)}}var x=function(t,e,n,a){return{width:t,"text-align":e,"font-family":n,"font-size":a}};function F(t,e){if(1&t&&(h.dc(0),h.fc(1,"th",37),h.bd(2),h.ac(3,"p-sortIcon",38),h.ec(),h.cc()),2&t){var n=e.$implicit,a=h.tc(4);h.Lb(1),h.Bc("pTooltip",n.header),h.Ac("pSortableColumn",n.field)("ngStyle",h.Jc(5,x,n.width,n.hdrAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",n.header," "),h.Lb(1),h.Ac("field",n.field)}}function P(t,e){if(1&t&&(h.fc(0,"tr"),h.Zc(1,F,4,10,"ng-container",36),h.ec()),2&t){var n=e.$implicit;h.Lb(1),h.Ac("ngForOf",n)}}var O=function(t,e,a,i){var o;return n(o={width:t,"text-align":e,"max-height":"200px"},"width","100%"),n(o,"border","none"),n(o,"overflow","auto"),n(o,"text-overflow","clip"),n(o,"font-family",a),n(o,"font-size",i),o};function _(t,e){if(1&t&&(h.fc(0,"tr"),h.fc(1,"td",39),h.bd(2),h.ec(),h.fc(3,"td",39),h.bd(4),h.ec(),h.ec()),2&t){var n=e.$implicit,a=h.tc(3);h.Lb(1),h.Bc("pTooltip",a.getTransSystemAttr(n.propName)),h.Ac("ngStyle",h.Jc(6,x,a.tableCols[0].width,a.tableCols[0].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",a.getTransSystemInfo(n.propName)," "),h.Lb(1),h.Bc("pTooltip",n.propValue),h.Ac("ngStyle",h.Jc(11,O,a.tableCols[1].width,a.tableCols[1].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",n.propValue," ")}}var R=function(t){return{zebrastripes:t}};function z(t,e){if(1&t&&(h.fc(0,"div",32),h.ac(1,"p"),h.ac(2,"p"),h.ac(3,"p"),h.fc(4,"table"),h.fc(5,"tr"),h.fc(6,"th"),h.bd(7),h.uc(8,"translate"),h.ec(),h.ec(),h.ec(),h.fc(9,"p-table",33),h.Zc(10,P,2,1,"ng-template",34),h.Zc(11,_,5,16,"ng-template",35),h.ec(),h.ec()),2&t){var n=h.tc(2);h.Lb(7),h.cd(h.vc(8,6,"about.system.section")),h.Lb(2),h.Ac("ngClass",h.Gc(8,R,n.tableInfo.showZebraStripes))("resizableColumns",!0)("responsive",!1)("columns",n.tableCols)("value",n.systemInfo)}}function k(t,e){if(1&t&&(h.dc(0),h.fc(1,"th",40),h.bd(2),h.ac(3,"p-sortIcon",38),h.ec(),h.cc()),2&t){var n=e.$implicit,a=h.tc(4);h.Lb(1),h.Bc("pTooltip",n.header),h.Ac("pSortableColumn",n.field)("ngStyle",h.Jc(5,x,n.width,n.hdrAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",n.header," "),h.Lb(1),h.Ac("field",n.field)}}function Z(t,e){if(1&t&&(h.fc(0,"tr"),h.Zc(1,k,4,10,"ng-container",36),h.ec()),2&t){var n=e.$implicit;h.Lb(1),h.Ac("ngForOf",n)}}function N(t,e){1&t&&h.bc(0)}function V(t,e){if(1&t&&(h.fc(0,"td",39),h.bd(1),h.ec()),2&t){var n=h.tc().$implicit,a=h.tc(3);h.Bc("pTooltip",n.propName),h.Ac("ngStyle",h.Jc(3,x,a.tableCols[0].width,a.tableCols[0].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",n.propName," ")}}function E(t,e){if(1&t&&h.ac(0,"td",20),2&t){var n=h.tc(4);h.Ac("ngStyle",h.Jc(1,x,n.tableCols[0].width,n.tableCols[0].cellAlign,n.tableFontFamily,n.tableFontSize))}}function H(t,e){1&t&&h.bc(0)}function j(t,e){if(1&t&&h.ac(0,"td",46),2&t){var n=h.tc().$implicit,a=h.tc(3);h.Bc("pTooltip",n.propValue),h.Ac("ngStyle",h.Jc(3,O,a.tableCols[1].width,a.tableCols[1].cellAlign,a.tableFontFamily,a.tableFontSize))("innerHTML",n.propValue,h.Sc)}}function D(t,e){if(1&t){var n=h.gc();h.fc(0,"td",39),h.uc(1,"translate"),h.fc(2,"button",47),h.pc("click",function(){return h.Rc(n),h.tc(4).getDiagnostics()}),h.uc(3,"translate"),h.bd(4),h.uc(5,"translate"),h.ec(),h.ec()}if(2&t){var a=h.tc(4);h.Bc("pTooltip",h.vc(1,4,"about.diagnostics.tooltip")),h.Ac("ngStyle",h.Jc(10,O,a.tableCols[1].width,a.tableCols[1].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(2),h.Mb("aria-label",h.vc(3,6,"about.software.get.diagnostics.button")),h.Lb(2),h.dd(" ",h.vc(5,8,"about.software.get.diagnostics.button")," ")}}function B(t,e){if(1&t&&(h.fc(0,"tr"),h.Zc(1,N,1,0,"ng-container",41),h.Zc(2,V,2,8,"ng-template",null,42,h.ad),h.Zc(4,E,1,6,"ng-template",null,43,h.ad),h.Zc(6,H,1,0,"ng-container",41),h.Zc(7,j,1,8,"ng-template",null,44,h.ad),h.Zc(9,D,6,15,"ng-template",null,45,h.ad),h.ec()),2&t){var n=e.$implicit,a=h.Pc(3),i=h.Pc(5),o=h.Pc(8),r=h.Pc(10);h.Lb(1),h.Ac("ngIf","_diagnostics"!=n.propName)("ngIfThen",a)("ngIfElse",i),h.Lb(5),h.Ac("ngIf","_diagnostics"!=n.propName)("ngIfThen",o)("ngIfElse",r)}}function J(t,e){if(1&t&&(h.fc(0,"div",32),h.ac(1,"p"),h.ac(2,"p"),h.ac(3,"p"),h.fc(4,"table"),h.fc(5,"tr"),h.fc(6,"th"),h.bd(7),h.uc(8,"translate"),h.ec(),h.ec(),h.ec(),h.fc(9,"p-table",33),h.Zc(10,Z,2,1,"ng-template",34),h.Zc(11,B,11,6,"ng-template",35),h.ec(),h.ec()),2&t){var n=h.tc(2);h.Lb(7),h.cd(h.vc(8,6,"about.software.section")),h.Lb(2),h.Ac("ngClass",h.Gc(8,R,n.tableInfo.showZebraStripes))("resizableColumns",!0)("responsive",!1)("columns",n.tableCols)("value",n.software)}}function U(t,e){if(1&t&&(h.dc(0),h.fc(1,"th",40),h.bd(2),h.ac(3,"p-sortIcon",38),h.ec(),h.cc()),2&t){var n=e.$implicit,a=h.tc(4);h.Lb(1),h.Bc("pTooltip",n.header),h.Ac("pSortableColumn",n.field)("ngStyle",h.Jc(5,x,n.width,n.hdrAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",n.header," "),h.Lb(1),h.Ac("field",n.field)}}function $(t,e){if(1&t&&(h.fc(0,"tr"),h.Zc(1,U,4,10,"ng-container",36),h.ec()),2&t){var n=e.$implicit;h.Lb(1),h.Ac("ngForOf",n)}}var W=function(t,e,a,i){var o;return n(o={width:t,"text-align":e,"max-height":"200px"},"width","100%"),n(o,"border","none"),n(o,"text-overflow","clip"),n(o,"font-family",a),n(o,"font-size",i),o},G=function(){return{overflow:"auto",width:"100%","max-height":"200px"}};function Y(t,e){if(1&t&&(h.fc(0,"td",39),h.ac(1,"div",50),h.ec()),2&t){var n=h.tc().$implicit,a=h.tc(3);h.Bc("pTooltip",n.propValue),h.Ac("ngStyle",h.Jc(4,W,a.tableCols[1].width,a.tableCols[1].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.Ac("ngStyle",h.Fc(9,G))("innerHTML",n.propValue,h.Sc)}}function q(t,e){if(1&t&&(h.fc(0,"td",39),h.ac(1,"div",50),h.ec()),2&t){var n=h.tc().$implicit,a=h.tc(3);h.Bc("pTooltip",n.tooltip),h.Ac("ngStyle",h.Jc(4,W,a.tableCols[1].width,a.tableCols[1].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.Ac("ngStyle",h.Fc(9,G))("innerHTML",n.propValue,h.Sc)}}function X(t,e){if(1&t&&(h.fc(0,"td",20),h.ac(1,"div",50),h.ec()),2&t){var n=h.tc().$implicit,a=h.tc(3);h.Ac("ngStyle",h.Jc(3,W,a.tableCols[1].width,a.tableCols[1].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.Ac("ngStyle",h.Fc(8,G))("innerHTML",n.propValue,h.Sc)}}function K(t,e){if(1&t&&(h.fc(0,"tr"),h.fc(1,"td",39),h.bd(2),h.ec(),h.Zc(3,Y,2,10,"td",48),h.Zc(4,q,2,10,"td",48),h.Zc(5,X,2,9,"td",49),h.ec()),2&t){var n=e.$implicit,a=h.tc(3);h.Lb(1),h.Bc("pTooltip",a.getTransSystemAttr(n.propName)),h.Ac("ngStyle",h.Jc(6,x,a.tableCols[0].width,a.tableCols[0].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",a.getTransSystemAttr(n.propName)," "),h.Lb(1),h.Ac("ngIf","javaClasspath"!=n.propName&&"serverClasspath"!=n.propName&&"updates"!=n.propName),h.Lb(1),h.Ac("ngIf","updates"==n.propName),h.Lb(1),h.Ac("ngIf","javaClasspath"==n.propName||"serverClasspath"==n.propName)}}function Q(t,e){if(1&t&&(h.fc(0,"div",32),h.ac(1,"p"),h.ac(2,"p"),h.ac(3,"p"),h.fc(4,"table"),h.fc(5,"tr"),h.fc(6,"th"),h.bd(7),h.uc(8,"translate"),h.ec(),h.ec(),h.ec(),h.fc(9,"p-table",33),h.Zc(10,$,2,1,"ng-template",34),h.Zc(11,K,6,11,"ng-template",35),h.ec(),h.ec()),2&t){var n=h.tc(2);h.Lb(7),h.cd(h.vc(8,6,"about.server.environment.section")),h.Lb(2),h.Ac("ngClass",h.Gc(8,R,n.tableInfo.showZebraStripes))("resizableColumns",!0)("responsive",!1)("columns",n.tableCols)("value",n.systemAttrs)}}function tt(t,e){if(1&t&&(h.dc(0),h.fc(1,"th",40),h.bd(2),h.ac(3,"p-sortIcon",38),h.ec(),h.cc()),2&t){var n=e.$implicit,a=h.tc(4);h.Lb(1),h.Bc("pTooltip",n.header),h.Ac("pSortableColumn",n.field)("ngStyle",h.Jc(5,x,n.width,n.hdrAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",n.header," "),h.Lb(1),h.Ac("field",n.field)}}function et(t,e){if(1&t&&(h.fc(0,"tr"),h.Zc(1,tt,4,10,"ng-container",36),h.ec()),2&t){var n=e.$implicit;h.Lb(1),h.Ac("ngForOf",n)}}function nt(t,e){if(1&t&&(h.fc(0,"tr"),h.fc(1,"td",39),h.bd(2),h.ec(),h.fc(3,"td",39),h.uc(4,"translate"),h.bd(5),h.ec(),h.ec()),2&t){var n=e.$implicit,a=h.tc(3);h.Lb(1),h.Bc("pTooltip",n.propName),h.Ac("ngStyle",h.Jc(8,x,a.secProvTableCols[0].width,a.secProvTableCols[0].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",n.propName," "),h.Lb(1),h.Bc("pTooltip",h.vc(4,6,n.propValue)),h.Ac("ngStyle",h.Jc(13,O,a.secProvTableCols[1].width,a.secProvTableCols[1].cellAlign,a.tableFontFamily,a.tableFontSize)),h.Lb(2),h.dd(" ",n.propValue," ")}}function at(t,e){if(1&t&&(h.fc(0,"div",32),h.ac(1,"p"),h.ac(2,"p"),h.ac(3,"p"),h.fc(4,"table"),h.fc(5,"tr"),h.fc(6,"th"),h.bd(7),h.uc(8,"translate"),h.ec(),h.ec(),h.ec(),h.fc(9,"p-table",33),h.Zc(10,et,2,1,"ng-template",34),h.Zc(11,nt,6,18,"ng-template",35),h.ec(),h.ec()),2&t){var n=h.tc(2);h.Lb(7),h.cd(h.vc(8,6,"about.security.providers.section")),h.Lb(2),h.Ac("ngClass",h.Gc(8,R,n.tableInfo.showZebraStripes))("resizableColumns",!0)("responsive",!1)("columns",n.secProvTableCols)("value",n.securityProviders)}}var it=function(){return{"border-spacing":"0px",border:"0px"}},ot=function(){return{padding:"0px"}},rt=function(t,e){return{"padding-top":"1.0rem","text-align":"center","font-family":t,"font-size":e}},ct=function(t,e){return{"font-family":t,"font-size":e,"font-weight":"500",color:"#333"}},lt=function(){return{"text-align":"center"}};function st(t,e){if(1&t){var n=h.gc();h.fc(0,"div",12),h.fc(1,"div",13),h.fc(2,"table"),h.fc(3,"tr"),h.fc(4,"th",14),h.bd(5),h.uc(6,"translate"),h.ec(),h.ec(),h.fc(7,"tr"),h.fc(8,"td",15),h.ac(9,"img",16),h.uc(10,"translate"),h.uc(11,"translate"),h.uc(12,"translate"),h.uc(13,"translate"),h.ec(),h.fc(14,"td"),h.fc(15,"table",17),h.fc(16,"thead"),h.Zc(17,T,3,1,"tr",18),h.uc(18,"async"),h.ec(),h.fc(19,"tbody"),h.fc(20,"tr"),h.ac(21,"td",19),h.ec(),h.ec(),h.ec(),h.ec(),h.ec(),h.ec(),h.fc(22,"table",20),h.ac(23,"col",21),h.ac(24,"col",22),h.fc(25,"tr"),h.ac(26,"td",20),h.fc(27,"td",20),h.fc(28,"span",20),h.bd(29),h.uc(30,"translate"),h.ec(),h.fc(31,"div",23),h.fc(32,"input",24,25),h.pc("click",function(t){return h.Rc(n),h.tc().toggleZebraStripes(t)}),h.ec(),h.fc(34,"label",26),h.ac(35,"span",27),h.fc(36,"span",28),h.bd(37),h.uc(38,"translate"),h.ec(),h.fc(39,"span",29),h.bd(40),h.uc(41,"translate"),h.ec(),h.ec(),h.ec(),h.ec(),h.ec(),h.ec(),h.Zc(42,z,12,10,"div",30),h.Zc(43,J,12,10,"div",30),h.Zc(44,Q,12,10,"div",30),h.Zc(45,at,12,10,"div",30),h.ec(),h.ec()}if(2&t){var a=h.tc();h.Lb(5),h.cd(h.vc(6,20,"about.copyright.section")),h.Lb(4),h.Bc("alt",a.isMSRInstalled?h.vc(10,22,"MICROSERVICES_RUNTIME"):h.vc(11,24,"INTEGRATION_SERVER")),h.Bc("pTooltip",a.isMSRInstalled?h.vc(12,26,"MICROSERVICES_RUNTIME"):h.vc(13,28,"INTEGRATION_SERVER")),h.Ac("src",a.isMSRInstalled?"./assets/images/prod/MSRLogoAbout.svg":"./assets/images/prod/ISLogoAbout.svg",h.Uc),h.Lb(8),h.Ac("ngIf",h.vc(18,30,a.productInfo$)),h.Lb(4),h.Ac("innerHTML",a.copyrightInfo,h.Sc),h.Lb(1),h.Ac("ngStyle",h.Fc(38,it)),h.Lb(4),h.Ac("ngStyle",h.Fc(39,ot)),h.Lb(1),h.Ac("ngStyle",h.Hc(40,rt,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.Ac("ngStyle",h.Hc(43,ct,a.tableFontFamily,a.tableFontSize)),h.Lb(1),h.dd(" ",h.vc(30,32,"preferences.tables.zebra.stripes")," "),h.Lb(2),h.Ac("ngStyle",h.Fc(46,lt)),h.Lb(1),h.Ac("ngModel",a.tableInfo.showZebraStripes)("ngStyle",h.Fc(47,lt)),h.Lb(5),h.cd(h.vc(38,34,"preferences.tables.zebra.stripes.on")),h.Lb(3),h.cd(h.vc(41,36,"preferences.tables.zebra.stripes.off")),h.Lb(2),h.Ac("ngIf",a.tableCols&&a.systemInfo),h.Lb(1),h.Ac("ngIf",a.tableCols&&a.software),h.Lb(1),h.Ac("ngIf",a.tableCols&&a.systemAttrs&&a.systemAttrs.length>0),h.Lb(1),h.Ac("ngIf",a.tableCols&&a.securityProviders)}}var ft,pt,dt,bt=[{path:"",component:(ft=function(){function e(t,n,a,i,r,c,l){var s=this;o(this,e),this.aboutInfoService=t,this.location=n,this.translate=a,this.sharedMessageService=i,this.sanitized=c,this.authService=l,this.JAVA_CLASSPATH="javaClasspath",this.SERVER_CLASSPATH="serverClasspath",this.aboutHelp="WmRoot/doc/OnlineHelp/index.html#page/is-onlinehelp%2FIS_AboutISAdmin.html%23",this.tableFontFamily="Roboto,Helvetica,Arial,sans-serif",this.tableFontSize="14px",this.systemSequences={architecture:0,cpuType:1,hostname:2,osServicePack:3,"hwMemory[gb]":4,osName:5,osRelease:6,cpuCores:7},this.serverEnvSequences={javaVersion:0,javaVmName:1,javaBuildInfo:2,javaVendor:3,javaHome:4,javaEntrustToolkitVersion:5,dataDirectVersion:6,serverProcessId:7,serverInstanceName:8,javaClasspath:9,serverClasspath:10,currentUser:11,workingDir:12,updates:13,javaDataModel:14},this.tableInfo=new b.J("",[]),this.isMSRInstalled=!1,this.fixNr=".0.",this.serverUpdates="",this.clientInfo=new Array(1),this.software=new Array(6),this.translate.setDefaultLang("en"),this.subscription=this.sharedMessageService.getMessage().subscribe(function(t){t&&"change-locale"===t.data.action&&s.translate.use(t.data.data.locale)}),this.tableSettingsService=r}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.isMSRInstalled=this.authService.getIsMSRInstalled(),this.tableSubscr=this.tableSettingsService.getTableInfo("about.title").subscribe(function(e){t.tableInfo=e,t.tableSettingsService.changeShowHideInfo(t.tableInfo)}),this.getUpdates()}},{key:"ngAfterViewInit",value:function(){var t=this;setTimeout(function(){var e=document.getElementById("serverEnvRows");if(e){var n=e.children,a=0;for(a=0;a<n.length;a++){var i=n[a];if(i.innerText&&i.innerText.endsWith("admin/server/updates/")){var o=i.lastChild;o.removeChild(o.childNodes[0]);var r=document.createElement("a"),c=t.translate.instant("about.server.packages.updates.view"),l=t.translate.instant("about.server.packages.updates.view.tooltip"),s=document.createTextNode(c);r.appendChild(s),r.title=l,r.href="#/packages-updates",o.appendChild(r);break}}}},100)}},{key:"configTableColumns",value:function(){this.tableCols=[{field:"propName",header:this.translate.instant("about.column.prop.name"),width:"15%",hdrAlign:"right",cellAlign:"right"},{field:"propValue",header:this.translate.instant("about.column.prop.value"),width:"85%",hdrAlign:"left",cellAlign:"left"}],this.secProvTableCols=[{field:"propName",header:this.translate.instant("about.security.providers.number"),width:"15%",hdrAlign:"right",cellAlign:"right"},{field:"propValue",header:this.translate.instant("about.security.providers.provider"),width:"85%",hdrAlign:"left",cellAlign:"left"}]}},{key:"toggleZebraStripes",value:function(t){this.tableInfo.showZebraStripes=t.target.checked,this.tableSettingsService.setTableInfo(this.tableInfo)}},{key:"setFocus",value:function(){var t=this;setTimeout(function(){t.zebraStripes&&t.zebraStripes.length>0&&t.zebraStripes.first.nativeElement.focus()},10)}},{key:"getAboutInfo",value:function(){var e=this;this.aboutInfoService.getServerInfo().subscribe(function(n){e.aboutInfo=n;var a=n.systemAttrs[e.JAVA_CLASSPATH],i=";";a.startsWith("/")&&(i=":"),a=(a=a.split(i).join("<br/>")).substring(0,a.length-5),n.systemAttrs[e.JAVA_CLASSPATH]=a;var o=n.systemAttrs[e.SERVER_CLASSPATH];o=(o=o.split(i).join("<br/>")).substring(0,o.length-5),n.systemAttrs[e.SERVER_CLASSPATH]=o,e.getVersion(),e.copyrightInfo=e.translate.instant("about.copyright.info"),e.systemInfo=new Array(n.systemInfo.length),e.systemAttrs=new Array(n.systemAttrs.length),e.securityProviders=new Array(n.securityProviders.length);var r,c=0,l="";for(r in n.systemInfo)if(r){l=n.systemInfo[r];var s=new p(r,l),f=e.systemSequences[r];f>-1?e.systemInfo[f]=s:e.systemInfo.push(s)}for(r in e.systemInfo=e.systemInfo.filter(e.isDefined),n.systemAttrs)if("diagnostics"!==r){l=n.systemAttrs[r];var d=new p(r,l);if("updates"===r){var b=e.sanitized.bypassSecurityTrustHtml('<a " href="#/packages-updates">'+e.translate.instant("about.server.packages.updates.view")+"</a>");d=new p(r,b,e.translate.instant("about.server.packages.updates.view.tooltip"))}var u=e.serverEnvSequences[r];u>-1?e.systemAttrs[u]=d:e.systemAttrs.push(d)}e.systemAttrs=e.systemAttrs.filter(e.isDefined),r=e.translate.instant("about.software.product");var g,h=new p(r,e.aboutInfo.productname);e.software[0]=h,r=e.translate.instant("about.software.version"),h=new p(r,e.aboutInfo.version),e.software[1]=h,r=e.translate.instant("about.software.updates"),h=new p(r,e.serverUpdates),e.software[2]=h,r=e.translate.instant("about.software.build.number"),h=new p(r,e.aboutInfo.build),e.software[3]=h,r=e.translate.instant("about.software.ssl"),h=new p(r,e.aboutInfo.ssl),e.software[4]=h,e.translate.instant("about.software.get.diagnostics.button"),h=new p(r="_diagnostics",l),e.software[5]=h,c=0;var v,m=t(n.securityProviders);try{for(m.s();!(v=m.n()).done;){var y=v.value;r=(g=c+1)<10?"0"+g:""+g,l=y.name+" "+y.version,h=new p(r,l),e.securityProviders[c]=h,c++}}catch(w){m.e(w)}finally{m.f()}e.setFocus()})}},{key:"isDefined",value:function(t,e,n){return void 0!==t&&null!=t}},{key:"getVersion",value:function(){var t=this;this.aboutInfoService.getVersion().subscribe(function(e){if(e){var n=e.indexOf("VERSION=")+8;t.version=e.substring(n),t.version=t.version.replace("-v",t.fixNr),t.version=t.version.replace(/(\r\n|\n|\r)/gm,"")}})}},{key:"getTransSystemInfo",value:function(t){return this.translate.instant("about.systeminfo."+t)}},{key:"getTransSystemAttr",value:function(t){return this.translate.instant("about.systemattr."+t)}},{key:"getDiagnostics",value:function(){var t=this;this.aboutInfoService.getDiagnostics().subscribe(function(e){var n=g().format("YYYYMMDDHHmmss"),a=b.K.getISHostPort("_"),i=t.translate.instant("about.diagnostics.zip.file.name");u.saveAs(e,i+"_"+a+"_"+n+".zip")})}},{key:"getUpdates",value:function(){var t=this;this.aboutInfoService.getUpdates().subscribe(function(e){if(e&&e.serverUpdates&&e.serverUpdates.length>0)for(var n=0;n<e.serverUpdates.length;n++)t.serverUpdates+=e.serverUpdates[n],n<e.serverUpdates.length-1&&(t.serverUpdates+="<BR>");else t.serverUpdates=t.translate.instant("about.software.updates.none");t.configTableColumns();var a=t.translate.instant("INTEGRATION_SERVER");t.isMSRInstalled&&(a=t.translate.instant("MICROSERVICES_RUNTIME")),t.productInfo=new d(t.translate.instant("COMPANY_NAME"),a,"https://www.softwareag.com/in/privacy"),t.getAboutInfo()})}},{key:"ok1",value:function(){this.ok(null)}},{key:"ok",value:function(t){t&&(t.stopPropagation(),t.preventDefault()),this.location.back()}},{key:"showHelp",value:function(){var t=b.K.getISBaseUrl()+"/"+this.aboutHelp;window.open(t,t)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe(),this.tableSubscr.unsubscribe()}}]),e}(),ft.\u0275fac=function(t){return new(t||ft)(h.Zb(f.a),h.Zb(l.k),h.Zb(v.d),h.Zb(b.B),h.Zb(m.TableSettingsService),h.Zb(y.b),h.Zb(b.d))},ft.\u0275cmp=h.Tb({type:ft,selectors:[["app-software-info"]],viewQuery:function(t,e){var n;1&t&&h.hd(I,1),2&t&&h.Oc(n=h.qc())&&(e.zebraStripes=n)},inputs:{aboutInfo:"aboutInfo"},decls:22,vars:15,consts:[[1,"breadcrumbs-container"],["aria-label","breadcrumb",1,"dlt-breadcrumbs"],["routerLink","/integration/dashboard/overview","tabindex","0",1,"dlt-links"],["aria-current","page",1,"dlt-links"],[1,"titleContainer"],[1,"dlg-title-wrapper"],["role","presentation",1,"inner"],["class","page-title",4,"ngIf"],["tabindex","0","showDelay","250",1,"help1",3,"pTooltip","click"],["src","assets/images/dlt-icon-help.svg","width","22","height","22",3,"alt"],["class","aboutWrapper",4,"ngIf"],[1,"page-title"],[1,"aboutWrapper"],[1,"pg"],["colspan","2"],[1,"img"],["id","aboutProductImage","showDelay","250",3,"src","alt","pTooltip"],[1,"inner"],[4,"ngIf"],[1,"tdcopyrightinfo",3,"innerHTML"],[3,"ngStyle"],["width","90%"],["width","10%"],[1,"dlt-switch-item",3,"ngStyle"],["id","toggle1","type","checkbox","name","tableZebraStripes","value","zebraStripes","autofocus","","tabindex","0",1,"dlt-switch-input",3,"ngModel","ngStyle","click"],["zebraStripes",""],["for","toggle1",1,"dlt-switch-text"],[1,"dlt-switch-appearance","dlt-on-off"],[1,"on"],[1,"off"],["class","tblVals",4,"ngIf"],[1,"tdcopyrightproduct"],[1,"tblVals"],["columnResizeMode","fit",3,"ngClass","resizableColumns","responsive","columns","value"],["pTemplate","header"],["pTemplate","body"],[4,"ngFor","ngForOf"],["id","","pResizableColumn","","tooltipPosition","top",3,"pSortableColumn","ngStyle","pTooltip"],["ariaLabel","'common.table.column.sort'|translate","ariaLabelDesc","'common.table.column.sort.descending'|translate","ariaLabelAsc","'common.table.column.sort.ascending'|translate",3,"field"],["showDelay","250",3,"pTooltip","ngStyle"],["pResizableColumn","","tooltipPosition","top",3,"pSortableColumn","ngStyle","pTooltip"],[4,"ngIf","ngIfThen","ngIfElse"],["noDiagnostics1",""],["yesDiagnostics1",""],["noDiagnostics2",""],["yesDiagnostics2",""],["showDelay","250",3,"pTooltip","ngStyle","innerHTML"],["type","button",1,"dlt-button","dlt-button-secondary",3,"click"],["showDelay","250",3,"pTooltip","ngStyle",4,"ngIf"],[3,"ngStyle",4,"ngIf"],[3,"ngStyle","innerHTML"]],template:function(t,e){1&t&&(h.fc(0,"div",0),h.fc(1,"ol",1),h.fc(2,"li"),h.fc(3,"a",2),h.bd(4),h.uc(5,"translate"),h.ec(),h.ec(),h.fc(6,"li"),h.fc(7,"a",3),h.bd(8),h.uc(9,"translate"),h.ec(),h.ec(),h.ec(),h.ec(),h.fc(10,"div",4),h.fc(11,"div",5),h.fc(12,"table",6),h.fc(13,"tr"),h.Zc(14,L,4,3,"td",7),h.Zc(15,M,4,3,"td",7),h.fc(16,"td"),h.fc(17,"button",8),h.pc("click",function(){return e.showHelp()}),h.uc(18,"translate"),h.ac(19,"img",9),h.uc(20,"translate"),h.ec(),h.ec(),h.ec(),h.ec(),h.ec(),h.ec(),h.Zc(21,st,46,48,"div",10)),2&t&&(h.Lb(4),h.cd(h.vc(5,7,"masthead.administration")),h.Lb(4),h.cd(h.vc(9,9,"about.text")),h.Lb(6),h.Ac("ngIf",e.isMSRInstalled),h.Lb(1),h.Ac("ngIf",!e.isMSRInstalled),h.Lb(2),h.Bc("pTooltip",h.vc(18,11,"about.help")),h.Lb(2),h.Bc("alt",h.vc(20,13,"about.help.help")),h.Lb(2),h.Ac("ngIf",e.aboutInfo))},directives:[s.i,l.o,w.a,l.p,S.a,S.n,S.q,A.h,l.m,C.j,l.n,A.d,A.g,A.f],pipes:[v.c,l.b],styles:['@charset "UTF-8";.titleContainer[_ngcontent-%COMP%]{width:100%;height:100%;padding:.48rem .8rem .9rem 1.1rem;overflow:auto}.page-title[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.5rem;font-weight:500;width:100%;margin-left:-.36rem;margin-right:-.2rem;padding-top:.68rem}.breadcrumbs-container[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]{font-family:Roboto,Helvetica,Arial,sans-serif}.breadcrumbs-container[_ngcontent-%COMP%]{padding-top:.74rem;padding-left:.08rem}.rightSideFixedcontainer[_ngcontent-%COMP%]{padding-top:.74rem;margin-right:25px}div.aboutWrapper[_ngcontent-%COMP%]{height:81vh;overflow:auto;padding-bottom:0;margin-bottom:0}div.pg[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}div.ok[_ngcontent-%COMP%]{text-align:center;margin-top:50px;margin-bottom:10px}div.tblVals[_ngcontent-%COMP%]{font-family:Roboto,Helvetica,Arial,sans-serif;outline:1px solid #14629f;margin-left:1px;margin-right:1px}table[_ngcontent-%COMP%]{width:100%;border:1px solid #14629f}table.inner[_ngcontent-%COMP%]{width:100%;border:0}th[_ngcontent-%COMP%]{color:#fff;background-color:#14629f;font-size:14px;padding:8px;font-weight:700}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-family:\ufffdRoboto\ufffd,Arial,sans-serif;text-align:left}td[_ngcontent-%COMP%]{color:#000;font-size:18px;padding:4px}td.img[_ngcontent-%COMP%]{padding:20px;width:13.6rem}.propstable[_ngcontent-%COMP%]{margin:0}.propstable[_ngcontent-%COMP%], table.props-row[_ngcontent-%COMP%]{height:100%;width:100%;display:table}table.props-row[_ngcontent-%COMP%]{table-layout:fixed}.cell[_ngcontent-%COMP%], .row[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]{vertical-align:top;text-align:left;width:100%}.table[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th.tdcopyrightproduct[_ngcontent-%COMP%]{color:#000;background-color:#fff;padding:4px;font-weight:700}div.copyrightinfo[_ngcontent-%COMP%], th.tdcopyrightproduct[_ngcontent-%COMP%]{font-family:\ufffdRoboto\ufffd,Arial,sans-serif;font-size:18px;vertical-align:top;text-align:left}div.copyrightinfo[_ngcontent-%COMP%]{padding:8px;line-height:40px;word-wrap:break-word;overflow-wrap:break-word;width:100%}td.tdcopyrightinfo[_ngcontent-%COMP%], tdcopyrightinfo[_ngcontent-%COMP%]{padding:4px;color:#000;font-family:\ufffdRoboto\ufffd,Arial,sans-serif;font-size:18px;text-align:left}.tdpropname[_ngcontent-%COMP%]{vertical-align:top;text-align:right;width:20%}.tdpropname[_ngcontent-%COMP%], .tdpropvalue[_ngcontent-%COMP%]{border:1px solid #14629f;padding:4px;white-space:nowrap;color:#000;font-family:\ufffdRoboto\ufffd,Arial,sans-serif;font-size:18px}.tdpropvalue[_ngcontent-%COMP%]{width:80%;height:100%}.tdIndex[_ngcontent-%COMP%]{vertical-align:top;text-align:left;border:1px solid #14629f;padding:4px;width:2%;white-space:nowrap;color:#000;font-family:\ufffdRoboto\ufffd,Arial,sans-serif;font-size:18px}.propname[_ngcontent-%COMP%]{vertical-align:top;text-align:right;border:1px solid #14629f;width:8%;border-top:0;border-right:0}.propname[_ngcontent-%COMP%], .propvalue[_ngcontent-%COMP%]{display:table-cell;padding:4px;white-space:nowrap;color:#000;font-family:\ufffdRoboto\ufffd,Arial,sans-serif;font-size:18px}.propvalue[_ngcontent-%COMP%]{border:1px solid #14629f;width:25%;height:100%;border-top:0}div.valouter[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}div.valinner[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;top:0;right:0;bottom:0;left:0;max-height:200px;width:100%}.dlt-switch-item[_ngcontent-%COMP%]{align-items:center}']}),ft)}],ut=((pt=i(function t(){o(this,t)})).\u0275fac=function(t){return new(t||pt)},pt.\u0275mod=h.Xb({type:pt}),pt.\u0275inj=h.Wb({imports:[[s.j.forChild(bt)],s.j]}),pt),gt=r("YHJu"),ht=r("nWvw"),vt=((dt=i(function t(){o(this,t)})).\u0275fac=function(t){return new(t||dt)},dt.\u0275mod=h.Xb({type:dt}),dt.\u0275inj=h.Wb({providers:[ht.a],imports:[[l.c,A.k,m.TablesModule,S.j,ut,S.v,w.b,gt.b,ht.c,b.t,v.b.forChild({loader:{provide:v.a,useFactory:mt,deps:[c.b]},extend:!0})]]}),dt);function mt(t){return new b.r(t,[])}}}])}();