// Compiled by ClojureScript 0.0-3308 {}
goog.provide('bike_share_clojurescript.components.App');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bike_share_clojurescript.components.Header');
goog.require('bike_share_clojurescript.components.Stations');
if(typeof bike_share_clojurescript.components.App.app_props !== 'undefined'){
} else {
bike_share_clojurescript.components.App.app_props = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"bike share",new cljs.core.Keyword(null,"stations","stations",-19744730),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"station 1",new cljs.core.Keyword(null,"numberOfBikes","numberOfBikes",-991743298),(1),new cljs.core.Keyword(null,"numberOfEmptyDockers","numberOfEmptyDockers",476397933),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"station 2",new cljs.core.Keyword(null,"numberOfBikes","numberOfBikes",-991743298),(2),new cljs.core.Keyword(null,"numberOfEmptyDockers","numberOfEmptyDockers",476397933),(4)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"station 3",new cljs.core.Keyword(null,"numberOfBikes","numberOfBikes",-991743298),(4),new cljs.core.Keyword(null,"numberOfEmptyDockers","numberOfEmptyDockers",476397933),(5)], null)], null)], null));
}
bike_share_clojurescript.components.App.app = (function bike_share_clojurescript$components$App$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bike_share_clojurescript.components.Header.header,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bike_share_clojurescript.components.App.app_props))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bike_share_clojurescript.components.Stations.stations,new cljs.core.Keyword(null,"stations","stations",-19744730).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bike_share_clojurescript.components.App.app_props))], null)], null);
});

//# sourceMappingURL=App.js.map