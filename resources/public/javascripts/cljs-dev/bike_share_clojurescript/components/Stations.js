// Compiled by ClojureScript 0.0-3308 {}
goog.provide('bike_share_clojurescript.components.Stations');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bike_share_clojurescript.components.Station');
bike_share_clojurescript.components.Stations.stations = (function bike_share_clojurescript$components$Stations$stations(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"station-list"], null),(function (){var iter__5063__auto__ = (function bike_share_clojurescript$components$Stations$stations_$_iter__6185(s__6186){
return (new cljs.core.LazySeq(null,(function (){
var s__6186__$1 = s__6186;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6186__$1);
if(temp__4425__auto__){
var s__6186__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6186__$2)){
var c__5061__auto__ = cljs.core.chunk_first.call(null,s__6186__$2);
var size__5062__auto__ = cljs.core.count.call(null,c__5061__auto__);
var b__6188 = cljs.core.chunk_buffer.call(null,size__5062__auto__);
if((function (){var i__6187 = (0);
while(true){
if((i__6187 < size__5062__auto__)){
var item = cljs.core._nth.call(null,c__5061__auto__,i__6187);
cljs.core.chunk_append.call(null,b__6188,bike_share_clojurescript.components.Station.station.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"numberOfBikes","numberOfBikes",-991743298).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"numberOfEmptyDockers","numberOfEmptyDockers",476397933).cljs$core$IFn$_invoke$arity$1(item)));

var G__6189 = (i__6187 + (1));
i__6187 = G__6189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6188),bike_share_clojurescript$components$Stations$stations_$_iter__6185.call(null,cljs.core.chunk_rest.call(null,s__6186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6188),null);
}
} else {
var item = cljs.core.first.call(null,s__6186__$2);
return cljs.core.cons.call(null,bike_share_clojurescript.components.Station.station.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"numberOfBikes","numberOfBikes",-991743298).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"numberOfEmptyDockers","numberOfEmptyDockers",476397933).cljs$core$IFn$_invoke$arity$1(item)),bike_share_clojurescript$components$Stations$stations_$_iter__6185.call(null,cljs.core.rest.call(null,s__6186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5063__auto__.call(null,items);
})()], null);
});

//# sourceMappingURL=Stations.js.map