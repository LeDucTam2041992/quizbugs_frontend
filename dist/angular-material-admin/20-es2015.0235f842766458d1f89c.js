(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"9Ggk":function(t,e,c){"use strict";c.r(e),c.d(e,"ExamHistoryModule",(function(){return ot}));var n=c("wZkO"),a=c("PCNd"),o=c("tyNb"),i=c("M9IT"),r=c("Dh3D"),s=c("+0xr"),l=c("fXoL"),b=c("JNBd"),m=c("kmnG"),u=c("qFsG"),d=c("3Pt+"),f=c("ofXK"),h=c("bTqV"),p=c("NFeN"),g=c("Qu3c"),A=c("znSr");function w(t,e){if(1&t){const t=l.Sb();l.Rb(0,"button",22),l.Zb("click",(function(){return l.rc(t),l.dc().onSearchClear()})),l.Rb(1,"mat-icon"),l.Ac(2,"close"),l.Qb(),l.Qb()}}function y(t,e){1&t&&(l.Rb(0,"mat-header-cell",23),l.Ac(1," Id"),l.Qb())}function k(t,e){if(1&t&&(l.Rb(0,"mat-cell"),l.Ac(1),l.Qb()),2&t){const t=e.index;l.Ab(1),l.Cc(" ",t+1," ")}}function R(t,e){1&t&&(l.Rb(0,"mat-header-cell",23),l.Ac(1," Test Name"),l.Qb())}function C(t,e){if(1&t&&(l.Rb(0,"mat-cell"),l.Ac(1),l.Qb()),2&t){const t=e.$implicit;l.Ab(1),l.Cc(" ",t.exam.name," ")}}function Q(t,e){1&t&&(l.Rb(0,"mat-header-cell"),l.Ac(1," Mark "),l.Qb())}function x(t,e){if(1&t&&(l.Rb(0,"mat-cell"),l.Ac(1),l.Qb()),2&t){const t=e.$implicit;l.Ab(1),l.Cc(" ",t.mark?t.mark:"null"," ")}}function z(t,e){1&t&&(l.Rb(0,"mat-header-cell"),l.Ac(1,"Date of Test "),l.Qb())}function I(t,e){if(1&t&&(l.Rb(0,"mat-cell"),l.Ac(1),l.ec(2,"date"),l.Qb()),2&t){const t=e.$implicit;l.Ab(1),l.Cc("",l.gc(2,1,t.date,"HH:mm dd-MM-yyyy ")," ")}}function O(t,e){1&t&&(l.Rb(0,"mat-header-cell"),l.Ac(1,"Action "),l.Qb())}function v(t,e){if(1&t){const t=l.Sb();l.Rb(0,"mat-cell"),l.Rb(1,"button",24),l.Zb("click",(function(){l.rc(t);const c=e.$implicit;return l.dc().clickDetail(c.id)})),l.Ac(2,"Detail"),l.Qb(),l.Qb()}}function D(t,e){1&t&&(l.Rb(0,"mat-footer-cell",25),l.Ac(1," Loading data... "),l.Qb())}function M(t,e){1&t&&(l.Rb(0,"mat-footer-cell",25),l.Ac(1," No data. "),l.Qb())}function j(t,e){1&t&&l.Mb(0,"mat-header-row")}function P(t,e){1&t&&l.Mb(0,"mat-row")}const S=function(t){return{hide:t}};function F(t,e){if(1&t&&l.Mb(0,"mat-footer-row",26),2&t){const t=l.dc();l.jc("ngClass",l.mc(1,S,null!=t.listHistory))}}function E(t,e){if(1&t&&l.Mb(0,"mat-footer-row",26),2&t){const t=l.dc();l.jc("ngClass",l.mc(1,S,!(null!=t.listHistory&&0==t.listHistory.data.length)))}}const L=function(){return["loading"]},_=function(){return["noData"]},H=function(){return[5,10,20]};let $=(()=>{class t{constructor(t,e){this.userExamService=t,this.router=e,this.displayedColumns=["id","test-name","score","date of test","action"]}ngOnInit(){this.getAll()}onSearchClear(){this.searchKey="",this.applyFilter()}applyFilter(){this.listHistory.filter=this.searchKey.trim().toLowerCase()}getAll(){this.userExamService.getAllExamOfUser().subscribe(t=>{let e=t.map(t=>({id:t.id,user:t.user,exam:t.exam,date:new Date(t.date),mark:t.mark,userAnswers:t.userAnswers}));this.listHistory=new s.o(e),this.listHistory.paginator=this.paginator,this.listHistory.sort=this.sort})}clickDetail(t){this.router.navigate(["history/detail/"+t]).then(t=>t)}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(b.a),l.Lb(o.c))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-history-list"]],viewQuery:function(t,e){var c;1&t&&(l.Ec(i.a,!0),l.Ec(r.a,!0)),2&t&&(l.oc(c=l.ac())&&(e.paginator=c.first),l.oc(c=l.ac())&&(e.sort=c.first))},decls:32,vars:12,consts:[[2,"text-align","center"],[1,"search-div"],["floatLabel","never",1,"search-form-field"],["matInput","","placeholder","Search","autocomplete","off",3,"ngModel","ngModelChange","keyup"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"example-container","mat-elevation-z8"],["matSort","",3,"dataSource"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","test-name"],["matColumnDef","score"],[4,"matHeaderCellDef"],["matColumnDef","date of test"],["matColumnDef","action"],["matColumnDef","loading"],["colspan","6",4,"matFooterCellDef"],["matColumnDef","noData"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"ngClass",4,"matFooterRowDef"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-sort-header",""],["matTooltip","Click to Details","mat-stroked-button","",3,"click"],["colspan","6"],[3,"ngClass"]],template:function(t,e){1&t&&(l.Rb(0,"h2",0),l.Ac(1,"List history "),l.Qb(),l.Rb(2,"div",1),l.Rb(3,"mat-form-field",2),l.Rb(4,"input",3),l.Zb("ngModelChange",(function(t){return e.searchKey=t}))("keyup",(function(){return e.applyFilter()})),l.Qb(),l.zc(5,w,3,0,"button",4),l.Qb(),l.Qb(),l.Rb(6,"div",5),l.Rb(7,"mat-table",6),l.Pb(8,7),l.zc(9,y,2,0,"mat-header-cell",8),l.zc(10,k,2,1,"mat-cell",9),l.Ob(),l.Pb(11,10),l.zc(12,R,2,0,"mat-header-cell",8),l.zc(13,C,2,1,"mat-cell",9),l.Ob(),l.Pb(14,11),l.zc(15,Q,2,0,"mat-header-cell",12),l.zc(16,x,2,1,"mat-cell",9),l.Ob(),l.Pb(17,13),l.zc(18,z,2,0,"mat-header-cell",12),l.zc(19,I,3,4,"mat-cell",9),l.Ob(),l.Pb(20,14),l.zc(21,O,2,0,"mat-header-cell",12),l.zc(22,v,3,0,"mat-cell",9),l.Ob(),l.Pb(23,15),l.zc(24,D,2,0,"mat-footer-cell",16),l.Ob(),l.Pb(25,17),l.zc(26,M,2,0,"mat-footer-cell",16),l.Ob(),l.zc(27,j,1,0,"mat-header-row",18),l.zc(28,P,1,0,"mat-row",19),l.zc(29,F,1,3,"mat-footer-row",20),l.zc(30,E,1,3,"mat-footer-row",20),l.Qb(),l.Mb(31,"mat-paginator",21),l.Qb()),2&t&&(l.Ab(4),l.jc("ngModel",e.searchKey),l.Ab(1),l.jc("ngIf",e.searchKey),l.Ab(2),l.jc("dataSource",e.listHistory),l.Ab(20),l.jc("matHeaderRowDef",e.displayedColumns),l.Ab(1),l.jc("matRowDefColumns",e.displayedColumns),l.Ab(1),l.jc("matFooterRowDef",l.lc(9,L)),l.Ab(1),l.jc("matFooterRowDef",l.lc(10,_)),l.Ab(1),l.jc("pageSizeOptions",l.lc(11,H))("pageSize",5))},directives:[m.c,u.a,d.b,d.l,d.o,f.l,s.n,r.a,s.c,s.i,s.b,s.e,s.k,s.m,s.g,i.a,h.b,m.g,p.a,s.h,r.b,s.a,g.a,s.d,s.j,s.l,s.f,f.j,A.a],pipes:[f.e],styles:["table[_ngcontent-%COMP%]{width:100%}.example-container[_ngcontent-%COMP%]{max-height:500px;overflow:auto}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}.hide[_ngcontent-%COMP%]{display:none}mat-footer-row[_ngcontent-%COMP%]   mat-footer-cell[_ngcontent-%COMP%]{-ms-flex-pack:center;justify-content:center;font-style:italic}.search-div[_ngcontent-%COMP%]{margin:10px}"]}),t})();var T=c("94Cw"),N=c("Wp6s"),q=c("QibW"),K=c("bSwM");function J(t,e){if(1&t&&(l.Rb(0,"h5"),l.Ac(1),l.Qb()),2&t){const t=l.dc();l.Ab(1),l.Cc("Mark: ",t.userExam.mark,"")}}function Z(t,e){1&t&&(l.Rb(0,"mat-icon",13),l.Ac(1," check_circle "),l.Qb())}function B(t,e){1&t&&(l.Rb(0,"mat-icon",14),l.Ac(1," check_circle "),l.Qb())}function G(t,e){if(1&t&&(l.Rb(0,"section"),l.Rb(1,"mat-radio-button",10),l.Ac(2),l.zc(3,Z,2,0,"mat-icon",11),l.zc(4,B,2,0,"mat-icon",12),l.Qb(),l.Qb()),2&t){const t=e.$implicit,c=l.dc(2).$implicit,n=l.dc();l.Db("example-section",!n.checkInclude(t.id)&&1==t.status),l.Ab(1),l.kc("name",c.id),l.jc("checked",n.checkInclude(t.id)),l.Ab(1),l.Cc(" ",t.answer," "),l.Ab(1),l.jc("ngIf",n.checkInclude(t.id)&&1==t.status),l.Ab(1),l.jc("ngIf",!n.checkInclude(t.id)&&1==t.status)}}function U(t,e){if(1&t&&(l.Pb(0),l.Rb(1,"mat-card"),l.Rb(2,"mat-card-content",1),l.Rb(3,"h5"),l.Ac(4),l.Qb(),l.zc(5,G,5,7,"section",9),l.Qb(),l.Qb(),l.Ob()),2&t){const t=l.dc(),e=t.index,c=t.$implicit;l.Ab(4),l.Dc("Question ",e+1,": ",c.question,""),l.Ab(1),l.jc("ngForOf",c.answers)}}function W(t,e){1&t&&(l.Rb(0,"mat-icon",13),l.Ac(1," check_circle "),l.Qb())}function X(t,e){1&t&&(l.Rb(0,"mat-icon",14),l.Ac(1," check_circle "),l.Qb())}function V(t,e){if(1&t&&(l.Rb(0,"section",8),l.Rb(1,"mat-checkbox",15),l.Ac(2),l.zc(3,W,2,0,"mat-icon",11),l.zc(4,X,2,0,"mat-icon",12),l.Qb(),l.Qb()),2&t){const t=e.$implicit,c=l.dc(2).$implicit,n=l.dc();l.Ab(1),l.kc("name",c.id),l.jc("checked",n.checkInclude(t.id)),l.Ab(1),l.Cc(" ",t.answer," "),l.Ab(1),l.jc("ngIf",n.checkInclude(t.id)&&1==t.status),l.Ab(1),l.jc("ngIf",!n.checkInclude(t.id)&&1==t.status)}}function Y(t,e){if(1&t&&(l.Pb(0),l.Rb(1,"mat-card"),l.Rb(2,"mat-card-content",1),l.Rb(3,"h5"),l.Ac(4),l.Qb(),l.Rb(5,"mat-radio-group"),l.zc(6,V,5,5,"section",4),l.Qb(),l.Qb(),l.Qb(),l.Ob()),2&t){const t=l.dc(),e=t.index,c=t.$implicit;l.Ab(4),l.Dc("Question ",e+1,": ",c.question,""),l.Ab(2),l.jc("ngForOf",c.answers)}}function tt(t,e){if(1&t&&(l.Rb(0,"div",8),l.zc(1,U,6,3,"ng-container",3),l.zc(2,Y,7,3,"ng-container",3),l.Qb()),2&t){const t=e.$implicit;l.Ab(1),l.jc("ngIf",0==t.type||2==t.type),l.Ab(1),l.jc("ngIf",1==t.type)}}const et=function(){return["/history/list"]};let ct=(()=>{class t{constructor(t,e,c,n,a){this.examService=t,this.route=e,this.router=c,this.fb=n,this.userExamsService=a,this.userAnswers=[],this.userAnswerIdArr=[]}ngOnInit(){const t=Number.parseInt(this.router.snapshot.paramMap.get("id"));this.userExamsService.getUserExamById(t).subscribe(t=>{this.userExam=t,this.currentExam=t.exam,this.userAnswers=t.userAnswers,console.log(this.userAnswers);for(const e of this.userAnswers)this.userAnswerIdArr.push(e.answer.id);for(const e of this.currentExam.questionSet);console.log(this.userAnswerIdArr)})}checkInclude(t){return this.userAnswerIdArr.includes(t)}reTest(t){this.route.navigate(["examination/detail/"+t]).then(t=>t)}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(T.a),l.Lb(o.c),l.Lb(o.a),l.Lb(d.c),l.Lb(b.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-history-detail"]],decls:12,vars:5,consts:[[1,"example-form"],[1,"box-card-custom"],[1,"header"],[4,"ngIf"],["class","example-section",4,"ngFor","ngForOf"],[1,"button-sub"],["mat-raised-button","","color","basic",1,"example-margin",3,"routerLink"],["mat-raised-button","","color","warn",1,"example-margin",3,"click"],[1,"example-section"],[3,"example-section",4,"ngFor","ngForOf"],["color","primary",3,"checked","name"],["class","sidenav-icon","style","color: #43a047",4,"ngIf"],["class","sidenav-icon","style","color: #ffaa00",4,"ngIf"],[1,"sidenav-icon",2,"color","#43a047"],[1,"sidenav-icon",2,"color","#ffaa00"],["color","primary",1,"example-margin",3,"checked","name"]],template:function(t,e){1&t&&(l.Rb(0,"form",0),l.Rb(1,"mat-card"),l.Rb(2,"mat-card-content",1),l.Rb(3,"h4",2),l.Ac(4),l.zc(5,J,2,1,"h5",3),l.Qb(),l.zc(6,tt,3,2,"div",4),l.Qb(),l.Rb(7,"div",5),l.Rb(8,"button",6),l.Ac(9,"Back "),l.Qb(),l.Rb(10,"button",7),l.Zb("click",(function(){return e.reTest(e.currentExam.id)})),l.Ac(11,"Test again "),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.Ab(4),l.Cc("Exam Title: ",e.currentExam.name," "),l.Ab(1),l.jc("ngIf",null!=e.userExam.mark),l.Ab(1),l.jc("ngForOf",e.currentExam.questionSet),l.Ab(2),l.jc("routerLink",l.lc(4,et)))},directives:[d.r,d.m,d.n,N.a,N.d,f.l,f.k,h.b,o.d,q.a,p.a,q.b,K.a],styles:[".button-sub[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{text-align:center}.button-sub[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}"]}),t})();const nt=[{path:"",component:(()=>{class t{constructor(){this.navLinks=[]}ngOnInit(){this.navLinks=[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Fb({type:t,selectors:[["app-home"]],decls:1,vars:0,consts:[[2,"padding","12px"]],template:function(t,e){1&t&&l.Mb(0,"router-outlet",0)},directives:[o.h],styles:[""]}),t})(),children:[{path:"list",component:$},{path:"detail/:id",component:ct},{path:"**",redirectTo:"list"}]}];let at=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[o.g.forChild(nt)],o.g]}),t})(),ot=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[at,n.c,a.a,p.b,m.e,d.h,s.p,i.b,r.c,u.b,h.c,g.b,N.g,q.c,K.b,d.p]]}),t})()}}]);