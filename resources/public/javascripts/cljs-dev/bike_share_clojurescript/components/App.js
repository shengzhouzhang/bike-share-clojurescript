// Compiled by ClojureScript 0.0-3308 {}
goog.provide('bike_share_clojurescript.components.App');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bike_share_clojurescript.components.Header');
if(typeof bike_share_clojurescript.components.App.app_props !== 'undefined'){
} else {
bike_share_clojurescript.components.App.app_props = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"bike share"], null));
}
bike_share_clojurescript.components.App.app = (function bike_share_clojurescript$components$App$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bike_share_clojurescript.components.Header.header,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bike_share_clojurescript.components.App.app_props))], null)], null);
});

//# sourceMappingURL=App.js.map