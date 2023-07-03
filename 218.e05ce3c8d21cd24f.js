"use strict";(self.webpackChunkangular_conduit=self.webpackChunkangular_conduit||[]).push([[218],{4218:(X,_,r)=>{r.r(_),r.d(_,{ArticleComponent:()=>P});var a=r(433),d=r(2605),C=r(540),m=r(6895),T=r(1322),J=r(4929);function h(n,s,e,o,i,c,l){try{var u=n[c](l),p=u.value}catch(R){return void e(R)}u.done?s(p):Promise.resolve(p).then(o,i)}var t=r(4650);let y=(()=>{class n{transform(e){return function U(n){return function(){var s=this,e=arguments;return new Promise(function(o,i){var c=n.apply(s,e);function l(p){h(c,o,i,l,u,"next",p)}function u(p){h(c,o,i,l,u,"throw",p)}l(void 0)})}}(function*(){const{marked:o}=yield r.e(645).then(r.bind(r,8645));return o(e,{sanitize:!0})})()}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275pipe=t.Yjl({name:"markdown",type:n,pure:!0,standalone:!0})}return n})();var F=r(6860),v=r(8386),g=r(4004);function b(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",9)(1,"i",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.delete.emit(!0))}),t.qZA()()}}const x=function(n){return["/profile",n]};function Q(n,s){if(1&n&&(t.TgZ(0,"div",1)(1,"div",2)(2,"p",3),t._uU(3),t.qZA()(),t.TgZ(4,"div",4)(5,"a",5),t._UZ(6,"img",6),t.qZA(),t._uU(7," \xa0 "),t.TgZ(8,"a",5),t._uU(9),t.qZA(),t.TgZ(10,"span",7),t._uU(11),t.ALo(12,"date"),t.qZA(),t.YNc(13,b,2,0,"span",8),t.ALo(14,"async"),t.qZA()()),2&n){const e=t.oxw();t.xp6(3),t.hij(" ",e.comment.body," "),t.xp6(2),t.Q6J("routerLink",t.VKq(12,x,e.comment.author.username)),t.xp6(1),t.Q6J("src",e.comment.author.image,t.LSH),t.xp6(2),t.Q6J("routerLink",t.VKq(14,x,e.comment.author.username)),t.xp6(1),t.hij(" ",e.comment.author.username," "),t.xp6(2),t.hij(" ",t.xi3(12,7,e.comment.createdAt,"longDate")," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(14,10,e.canModify$))}}let w=(()=>{class n{constructor(){this.delete=new t.vpe,this.canModify$=(0,t.f3M)(v.K).currentUser.pipe((0,g.U)(e=>e?.username===this.comment.author.username))}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-article-comment"]],inputs:{comment:"comment"},outputs:{delete:"delete"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","card",4,"ngIf"],[1,"card"],[1,"card-block"],[1,"card-text"],[1,"card-footer"],[1,"comment-author",3,"routerLink"],[1,"comment-author-img",3,"src"],[1,"date-posted"],["class","mod-options",4,"ngIf"],[1,"mod-options"],[1,"ion-trash-a",3,"click"]],template:function(o,i){1&o&&t.YNc(0,Q,15,16,"div",0),2&o&&t.Q6J("ngIf",i.comment)},dependencies:[d.rH,m.uU,m.O5,m.Ov],encapsulation:2})}return n})();var S=r(262),f=r(2722),M=r(7579),N=r(9841),L=r(2843),Y=r(893),K=r(9921),I=r(529);let H=(()=>{class n{constructor(e){this.http=e}getAll(e){return this.http.get(`/articles/${e}/comments`).pipe((0,g.U)(o=>o.comments))}add(e,o){return this.http.post(`/articles/${e}/comments`,{comment:{body:o}}).pipe((0,g.U)(i=>i.comment))}delete(e,o){return this.http.delete(`/articles/${o}/comments/${e}`)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(I.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const A=function(n){return["/editor",n]},Z=function(n){return{disabled:n}};function E(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span")(1,"a",17),t._UZ(2,"i",18),t._uU(3," Edit Article "),t.qZA(),t.TgZ(4,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.deleteArticle())}),t._UZ(5,"i",20),t._uU(6," Delete Article "),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("routerLink",t.VKq(2,A,e.article.slug)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,Z,e.isDeleting))}}function $(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span")(1,"app-follow-button",21),t.NdJ("toggle",function(i){t.CHM(e);const c=t.oxw(2);return t.KtG(c.toggleFollowing(i))}),t.qZA(),t.TgZ(2,"app-favorite-button",22),t.NdJ("toggle",function(i){t.CHM(e);const c=t.oxw(2);return t.KtG(c.onToggleFavorite(i))}),t._uU(3),t.TgZ(4,"span",23),t._uU(5),t.qZA()()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("profile",e.article.author),t.xp6(1),t.Q6J("article",e.article),t.xp6(1),t.hij(" ",e.article.favorited?"Unfavorite":"Favorite"," Article "),t.xp6(2),t.hij("(",e.article.favoritesCount,")")}}function D(n,s){if(1&n&&(t.TgZ(0,"li",24),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.hij(" ",e," ")}}function j(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span")(1,"a",17),t._UZ(2,"i",18),t._uU(3," Edit Article "),t.qZA(),t.TgZ(4,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.deleteArticle())}),t._UZ(5,"i",20),t._uU(6," Delete Article "),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("routerLink",t.VKq(2,A,e.article.slug)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,Z,e.isDeleting))}}function k(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span")(1,"app-follow-button",21),t.NdJ("toggle",function(i){t.CHM(e);const c=t.oxw(2);return t.KtG(c.toggleFollowing(i))}),t.qZA(),t.TgZ(2,"app-favorite-button",22),t.NdJ("toggle",function(i){t.CHM(e);const c=t.oxw(2);return t.KtG(c.onToggleFavorite(i))}),t._uU(3),t.TgZ(4,"span",23),t._uU(5),t.qZA()()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("profile",e.article.author),t.xp6(1),t.Q6J("article",e.article),t.xp6(1),t.hij(" ",e.article.favorited?"Unfavorite":"Favorite"," Article "),t.xp6(2),t.hij("(",e.article.favoritesCount,")")}}function G(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._UZ(1,"app-list-errors",25),t.TgZ(2,"form",26),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.addComment())}),t.TgZ(3,"fieldset",27)(4,"div",28),t._UZ(5,"textarea",29),t.qZA(),t.TgZ(6,"div",30),t._UZ(7,"img",31),t.TgZ(8,"button",32),t._uU(9," Post Comment "),t.qZA()()()()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("errors",e.commentFormErrors),t.xp6(2),t.Q6J("disabled",e.isSubmitting),t.xp6(2),t.Q6J("formControl",e.commentControl),t.xp6(2),t.Q6J("src",null===(null==e.currentUser?null:e.currentUser.image)?"":null==e.currentUser?null:e.currentUser.image,t.LSH)}}const q=function(){return["/login"]},O=function(){return["/register"]};function V(n,s){1&n&&(t.TgZ(0,"div")(1,"a",33),t._uU(2,"Sign in"),t.qZA(),t._uU(3," or "),t.TgZ(4,"a",33),t._uU(5,"sign up"),t.qZA(),t._uU(6," to add comments on this article. "),t.qZA()),2&n&&(t.xp6(1),t.Q6J("routerLink",t.DdM(2,q)),t.xp6(3),t.Q6J("routerLink",t.DdM(3,O)))}function z(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"app-article-comment",34),t.NdJ("delete",function(){const c=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.deleteComment(c))}),t.qZA()}2&n&&t.Q6J("comment",s.$implicit)}function B(n,s){if(1&n&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"app-article-meta",4),t.YNc(6,E,7,6,"span",5),t.YNc(7,$,6,4,"span",5),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8),t._UZ(11,"div",9),t.ALo(12,"async"),t.ALo(13,"markdown"),t.TgZ(14,"ul",10),t.YNc(15,D,2,1,"li",11),t.qZA()()(),t._UZ(16,"hr"),t.TgZ(17,"div",12)(18,"app-article-meta",4),t.YNc(19,j,7,6,"span",5),t.YNc(20,k,6,4,"span",5),t.qZA()(),t.TgZ(21,"div",13)(22,"div",14),t.YNc(23,G,10,4,"div",15),t.YNc(24,V,7,4,"div",15),t.YNc(25,z,1,1,"app-article-comment",16),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(4),t.Oqu(e.article.title),t.xp6(1),t.Q6J("article",e.article),t.xp6(1),t.Q6J("ngIf",e.canModify),t.xp6(1),t.Q6J("ngIf",!e.canModify),t.xp6(4),t.Q6J("innerHTML",t.lcZ(12,13,t.lcZ(13,15,e.article.body)),t.oJD),t.xp6(4),t.Q6J("ngForOf",e.article.tagList),t.xp6(3),t.Q6J("article",e.article),t.xp6(1),t.Q6J("ngIf",e.canModify),t.xp6(1),t.Q6J("ngIf",!e.canModify),t.xp6(3),t.Q6J("appShowAuthed",!0),t.xp6(1),t.Q6J("appShowAuthed",!1),t.xp6(1),t.Q6J("ngForOf",e.comments)("ngForTrackBy",e.trackById)}}let P=(()=>{class n{constructor(e,o,i,c,l){this.route=e,this.articleService=o,this.commentsService=i,this.router=c,this.userService=l,this.comments=[],this.canModify=!1,this.commentControl=new a.NI("",{nonNullable:!0}),this.commentFormErrors=null,this.isSubmitting=!1,this.isDeleting=!1,this.destroy$=new M.x}ngOnInit(){const e=this.route.snapshot.params.slug;(0,N.a)([this.articleService.get(e),this.commentsService.getAll(e),this.userService.currentUser]).pipe((0,S.K)(o=>(this.router.navigate(["/"]),(0,L._)(o)))).subscribe(([o,i,c])=>{this.article=o,this.comments=i,this.currentUser=c,this.canModify=c?.username===o.author.username})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onToggleFavorite(e){this.article.favorited=e,e?this.article.favoritesCount++:this.article.favoritesCount--}toggleFollowing(e){this.article.author.following=e.following}deleteArticle(){this.isDeleting=!0,this.articleService.delete(this.article.slug).pipe((0,f.R)(this.destroy$)).subscribe(()=>{this.router.navigate(["/"])})}addComment(){this.isSubmitting=!0,this.commentFormErrors=null,this.commentsService.add(this.article.slug,this.commentControl.value).pipe((0,f.R)(this.destroy$)).subscribe({next:e=>{this.comments.unshift(e),this.commentControl.reset(""),this.isSubmitting=!1},error:e=>{this.isSubmitting=!1,this.commentFormErrors=e}})}deleteComment(e){this.commentsService.delete(e.id,this.article.slug).pipe((0,f.R)(this.destroy$)).subscribe(()=>{this.comments=this.comments.filter(o=>o!==e)})}trackById(e,o){return o.id}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(d.gz),t.Y36(K.J),t.Y36(H),t.Y36(d.F0),t.Y36(v.K))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-article-page"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","article-page",4,"ngIf"],[1,"article-page"],[1,"banner"],[1,"container"],[3,"article"],[4,"ngIf"],[1,"container","page"],[1,"row","article-content"],[1,"col-md-12"],[3,"innerHTML"],[1,"tag-list"],["class","tag-default tag-pill tag-outline",4,"ngFor","ngForOf"],[1,"article-actions"],[1,"row"],[1,"col-xs-12","col-md-8","offset-md-2"],[4,"appShowAuthed"],[3,"comment","delete",4,"ngFor","ngForOf","ngForTrackBy"],[1,"btn","btn-sm","btn-outline-secondary",3,"routerLink"],[1,"ion-edit"],[1,"btn","btn-sm","btn-outline-danger",3,"ngClass","click"],[1,"ion-trash-a"],[3,"profile","toggle"],[3,"article","toggle"],[1,"counter"],[1,"tag-default","tag-pill","tag-outline"],[3,"errors"],[1,"card","comment-form",3,"ngSubmit"],[3,"disabled"],[1,"card-block"],["placeholder","Write a comment...","rows","3",1,"form-control",3,"formControl"],[1,"card-footer"],[1,"comment-author-img",3,"src"],["type","submit",1,"btn","btn-sm","btn-primary"],[3,"routerLink"],[3,"comment","delete"]],template:function(o,i){1&o&&t.YNc(0,B,26,17,"div",0),2&o&&t.Q6J("ngIf",i.article)},dependencies:[C.h,d.rH,m.mk,T.I,J.t,m.sg,y,m.Ov,F.S,a.u5,a._Y,a.Fj,a.JJ,a.JL,a.F,w,a.UX,a.oH,Y.v,m.O5],encapsulation:2})}return n})()}}]);