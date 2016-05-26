// Compiled by ClojureScript 0.0-3308 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6183,handler){
var map__6184 = p__6183;
var map__6184__$1 = ((cljs.core.seq_QMARK_.call(null,map__6184))?cljs.core.apply.call(null,cljs.core.hash_map,map__6184):map__6184);
var uri = cljs.core.get.call(null,map__6184__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__6184__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__6184__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__6184__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__6184__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__6184__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__6184__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__6184,map__6184__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__6182_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__6182_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__6184,map__6184__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___6191 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___6191)){
var response_type_6192 = temp__4425__auto___6191;
this$__$1.responseType = cljs.core.name.call(null,response_type_6192);
} else {
}

var seq__6185_6193 = cljs.core.seq.call(null,headers);
var chunk__6186_6194 = null;
var count__6187_6195 = (0);
var i__6188_6196 = (0);
while(true){
if((i__6188_6196 < count__6187_6195)){
var vec__6189_6197 = cljs.core._nth.call(null,chunk__6186_6194,i__6188_6196);
var k_6198 = cljs.core.nth.call(null,vec__6189_6197,(0),null);
var v_6199 = cljs.core.nth.call(null,vec__6189_6197,(1),null);
this$__$1.setRequestHeader(k_6198,v_6199);

var G__6200 = seq__6185_6193;
var G__6201 = chunk__6186_6194;
var G__6202 = count__6187_6195;
var G__6203 = (i__6188_6196 + (1));
seq__6185_6193 = G__6200;
chunk__6186_6194 = G__6201;
count__6187_6195 = G__6202;
i__6188_6196 = G__6203;
continue;
} else {
var temp__4425__auto___6204 = cljs.core.seq.call(null,seq__6185_6193);
if(temp__4425__auto___6204){
var seq__6185_6205__$1 = temp__4425__auto___6204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6185_6205__$1)){
var c__5094__auto___6206 = cljs.core.chunk_first.call(null,seq__6185_6205__$1);
var G__6207 = cljs.core.chunk_rest.call(null,seq__6185_6205__$1);
var G__6208 = c__5094__auto___6206;
var G__6209 = cljs.core.count.call(null,c__5094__auto___6206);
var G__6210 = (0);
seq__6185_6193 = G__6207;
chunk__6186_6194 = G__6208;
count__6187_6195 = G__6209;
i__6188_6196 = G__6210;
continue;
} else {
var vec__6190_6211 = cljs.core.first.call(null,seq__6185_6205__$1);
var k_6212 = cljs.core.nth.call(null,vec__6190_6211,(0),null);
var v_6213 = cljs.core.nth.call(null,vec__6190_6211,(1),null);
this$__$1.setRequestHeader(k_6212,v_6213);

var G__6214 = cljs.core.next.call(null,seq__6185_6205__$1);
var G__6215 = null;
var G__6216 = (0);
var G__6217 = (0);
seq__6185_6193 = G__6214;
chunk__6186_6194 = G__6215;
count__6187_6195 = G__6216;
i__6188_6196 = G__6217;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4309__auto__ = body;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map