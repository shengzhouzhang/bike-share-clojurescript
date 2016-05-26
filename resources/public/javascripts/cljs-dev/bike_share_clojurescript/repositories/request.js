// Compiled by ClojureScript 0.0-3308 {}
goog.provide('bike_share_clojurescript.repositories.request');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
bike_share_clojurescript.repositories.request.fetchStationsHandler = (function bike_share_clojurescript$repositories$request$fetchStationsHandler(response){
return cljs.core.get.call(null,response,"data");
});
bike_share_clojurescript.repositories.request.fetchStations = (function bike_share_clojurescript$repositories$request$fetchStations(){
return ajax.core.GET.call(null,"http://localhost:8000/data.json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),bike_share_clojurescript.repositories.request.fetchStationsHandler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});

//# sourceMappingURL=request.js.map