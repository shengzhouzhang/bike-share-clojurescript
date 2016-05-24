// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t8835 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8835 = (function (fn_handler,f,meta8836){
this.fn_handler = fn_handler;
this.f = f;
this.meta8836 = meta8836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8837,meta8836__$1){
var self__ = this;
var _8837__$1 = this;
return (new cljs.core.async.t8835(self__.fn_handler,self__.f,meta8836__$1));
});

cljs.core.async.t8835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8837){
var self__ = this;
var _8837__$1 = this;
return self__.meta8836;
});

cljs.core.async.t8835.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t8835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t8835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t8835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta8836","meta8836",241006553,null)], null);
});

cljs.core.async.t8835.cljs$lang$type = true;

cljs.core.async.t8835.cljs$lang$ctorStr = "cljs.core.async/t8835";

cljs.core.async.t8835.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8835");
});

cljs.core.async.__GT_t8835 = (function cljs$core$async$fn_handler_$___GT_t8835(fn_handler__$1,f__$1,meta8836){
return (new cljs.core.async.t8835(fn_handler__$1,f__$1,meta8836));
});

}

return (new cljs.core.async.t8835(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__8839 = buff;
if(G__8839){
var bit__4996__auto__ = null;
if(cljs.core.truth_((function (){var or__4322__auto__ = bit__4996__auto__;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return G__8839.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__8839.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8839);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8839);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__8841 = arguments.length;
switch (G__8841) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__8844 = arguments.length;
switch (G__8844) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8846 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8846);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8846,ret){
return (function (){
return fn1.call(null,val_8846);
});})(val_8846,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__8848 = arguments.length;
switch (G__8848) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5207__auto___8850 = n;
var x_8851 = (0);
while(true){
if((x_8851 < n__5207__auto___8850)){
(a[x_8851] = (0));

var G__8852 = (x_8851 + (1));
x_8851 = G__8852;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__8853 = (i + (1));
i = G__8853;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t8857 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8857 = (function (alt_flag,flag,meta8858){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8858 = meta8858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8859,meta8858__$1){
var self__ = this;
var _8859__$1 = this;
return (new cljs.core.async.t8857(self__.alt_flag,self__.flag,meta8858__$1));
});})(flag))
;

cljs.core.async.t8857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8859){
var self__ = this;
var _8859__$1 = this;
return self__.meta8858;
});})(flag))
;

cljs.core.async.t8857.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t8857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t8857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t8857.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8858","meta8858",-1683939887,null)], null);
});})(flag))
;

cljs.core.async.t8857.cljs$lang$type = true;

cljs.core.async.t8857.cljs$lang$ctorStr = "cljs.core.async/t8857";

cljs.core.async.t8857.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8857");
});})(flag))
;

cljs.core.async.__GT_t8857 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t8857(alt_flag__$1,flag__$1,meta8858){
return (new cljs.core.async.t8857(alt_flag__$1,flag__$1,meta8858));
});})(flag))
;

}

return (new cljs.core.async.t8857(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t8863 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8863 = (function (alt_handler,flag,cb,meta8864){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8864 = meta8864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8865,meta8864__$1){
var self__ = this;
var _8865__$1 = this;
return (new cljs.core.async.t8863(self__.alt_handler,self__.flag,self__.cb,meta8864__$1));
});

cljs.core.async.t8863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8865){
var self__ = this;
var _8865__$1 = this;
return self__.meta8864;
});

cljs.core.async.t8863.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t8863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t8863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t8863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8864","meta8864",-324585114,null)], null);
});

cljs.core.async.t8863.cljs$lang$type = true;

cljs.core.async.t8863.cljs$lang$ctorStr = "cljs.core.async/t8863";

cljs.core.async.t8863.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8863");
});

cljs.core.async.__GT_t8863 = (function cljs$core$async$alt_handler_$___GT_t8863(alt_handler__$1,flag__$1,cb__$1,meta8864){
return (new cljs.core.async.t8863(alt_handler__$1,flag__$1,cb__$1,meta8864));
});

}

return (new cljs.core.async.t8863(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8866_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8866_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8867_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8867_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4322__auto__ = wport;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8868 = (i + (1));
i = G__8868;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4322__auto__ = ret;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__4310__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4310__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4310__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5362__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5362__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8871){
var map__8872 = p__8871;
var map__8872__$1 = ((cljs.core.seq_QMARK_.call(null,map__8872))?cljs.core.apply.call(null,cljs.core.hash_map,map__8872):map__8872);
var opts = map__8872__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8869){
var G__8870 = cljs.core.first.call(null,seq8869);
var seq8869__$1 = cljs.core.next.call(null,seq8869);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8870,seq8869__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__8874 = arguments.length;
switch (G__8874) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6680__auto___8923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___8923){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___8923){
return (function (state_8898){
var state_val_8899 = (state_8898[(1)]);
if((state_val_8899 === (7))){
var inst_8894 = (state_8898[(2)]);
var state_8898__$1 = state_8898;
var statearr_8900_8924 = state_8898__$1;
(statearr_8900_8924[(2)] = inst_8894);

(statearr_8900_8924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (1))){
var state_8898__$1 = state_8898;
var statearr_8901_8925 = state_8898__$1;
(statearr_8901_8925[(2)] = null);

(statearr_8901_8925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (4))){
var inst_8877 = (state_8898[(7)]);
var inst_8877__$1 = (state_8898[(2)]);
var inst_8878 = (inst_8877__$1 == null);
var state_8898__$1 = (function (){var statearr_8902 = state_8898;
(statearr_8902[(7)] = inst_8877__$1);

return statearr_8902;
})();
if(cljs.core.truth_(inst_8878)){
var statearr_8903_8926 = state_8898__$1;
(statearr_8903_8926[(1)] = (5));

} else {
var statearr_8904_8927 = state_8898__$1;
(statearr_8904_8927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (13))){
var state_8898__$1 = state_8898;
var statearr_8905_8928 = state_8898__$1;
(statearr_8905_8928[(2)] = null);

(statearr_8905_8928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (6))){
var inst_8877 = (state_8898[(7)]);
var state_8898__$1 = state_8898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8898__$1,(11),to,inst_8877);
} else {
if((state_val_8899 === (3))){
var inst_8896 = (state_8898[(2)]);
var state_8898__$1 = state_8898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8898__$1,inst_8896);
} else {
if((state_val_8899 === (12))){
var state_8898__$1 = state_8898;
var statearr_8906_8929 = state_8898__$1;
(statearr_8906_8929[(2)] = null);

(statearr_8906_8929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (2))){
var state_8898__$1 = state_8898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8898__$1,(4),from);
} else {
if((state_val_8899 === (11))){
var inst_8887 = (state_8898[(2)]);
var state_8898__$1 = state_8898;
if(cljs.core.truth_(inst_8887)){
var statearr_8907_8930 = state_8898__$1;
(statearr_8907_8930[(1)] = (12));

} else {
var statearr_8908_8931 = state_8898__$1;
(statearr_8908_8931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (9))){
var state_8898__$1 = state_8898;
var statearr_8909_8932 = state_8898__$1;
(statearr_8909_8932[(2)] = null);

(statearr_8909_8932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (5))){
var state_8898__$1 = state_8898;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8910_8933 = state_8898__$1;
(statearr_8910_8933[(1)] = (8));

} else {
var statearr_8911_8934 = state_8898__$1;
(statearr_8911_8934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (14))){
var inst_8892 = (state_8898[(2)]);
var state_8898__$1 = state_8898;
var statearr_8912_8935 = state_8898__$1;
(statearr_8912_8935[(2)] = inst_8892);

(statearr_8912_8935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (10))){
var inst_8884 = (state_8898[(2)]);
var state_8898__$1 = state_8898;
var statearr_8913_8936 = state_8898__$1;
(statearr_8913_8936[(2)] = inst_8884);

(statearr_8913_8936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8899 === (8))){
var inst_8881 = cljs.core.async.close_BANG_.call(null,to);
var state_8898__$1 = state_8898;
var statearr_8914_8937 = state_8898__$1;
(statearr_8914_8937[(2)] = inst_8881);

(statearr_8914_8937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___8923))
;
return ((function (switch__6618__auto__,c__6680__auto___8923){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_8918 = [null,null,null,null,null,null,null,null];
(statearr_8918[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_8918[(1)] = (1));

return statearr_8918;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_8898){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_8898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e8919){if((e8919 instanceof Object)){
var ex__6622__auto__ = e8919;
var statearr_8920_8938 = state_8898;
(statearr_8920_8938[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8939 = state_8898;
state_8898 = G__8939;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_8898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_8898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___8923))
})();
var state__6682__auto__ = (function (){var statearr_8921 = f__6681__auto__.call(null);
(statearr_8921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___8923);

return statearr_8921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___8923))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9123){
var vec__9124 = p__9123;
var v = cljs.core.nth.call(null,vec__9124,(0),null);
var p = cljs.core.nth.call(null,vec__9124,(1),null);
var job = vec__9124;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6680__auto___9306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___9306,res,vec__9124,v,p,job,jobs,results){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___9306,res,vec__9124,v,p,job,jobs,results){
return (function (state_9129){
var state_val_9130 = (state_9129[(1)]);
if((state_val_9130 === (1))){
var state_9129__$1 = state_9129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9129__$1,(2),res,v);
} else {
if((state_val_9130 === (2))){
var inst_9126 = (state_9129[(2)]);
var inst_9127 = cljs.core.async.close_BANG_.call(null,res);
var state_9129__$1 = (function (){var statearr_9131 = state_9129;
(statearr_9131[(7)] = inst_9126);

return statearr_9131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9129__$1,inst_9127);
} else {
return null;
}
}
});})(c__6680__auto___9306,res,vec__9124,v,p,job,jobs,results))
;
return ((function (switch__6618__auto__,c__6680__auto___9306,res,vec__9124,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0 = (function (){
var statearr_9135 = [null,null,null,null,null,null,null,null];
(statearr_9135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__);

(statearr_9135[(1)] = (1));

return statearr_9135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1 = (function (state_9129){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e9136){if((e9136 instanceof Object)){
var ex__6622__auto__ = e9136;
var statearr_9137_9307 = state_9129;
(statearr_9137_9307[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9308 = state_9129;
state_9129 = G__9308;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = function(state_9129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1.call(this,state_9129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___9306,res,vec__9124,v,p,job,jobs,results))
})();
var state__6682__auto__ = (function (){var statearr_9138 = f__6681__auto__.call(null);
(statearr_9138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___9306);

return statearr_9138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___9306,res,vec__9124,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9139){
var vec__9140 = p__9139;
var v = cljs.core.nth.call(null,vec__9140,(0),null);
var p = cljs.core.nth.call(null,vec__9140,(1),null);
var job = vec__9140;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5207__auto___9309 = n;
var __9310 = (0);
while(true){
if((__9310 < n__5207__auto___9309)){
var G__9141_9311 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9141_9311) {
case "compute":
var c__6680__auto___9313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9310,c__6680__auto___9313,G__9141_9311,n__5207__auto___9309,jobs,results,process,async){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (__9310,c__6680__auto___9313,G__9141_9311,n__5207__auto___9309,jobs,results,process,async){
return (function (state_9154){
var state_val_9155 = (state_9154[(1)]);
if((state_val_9155 === (1))){
var state_9154__$1 = state_9154;
var statearr_9156_9314 = state_9154__$1;
(statearr_9156_9314[(2)] = null);

(statearr_9156_9314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9155 === (2))){
var state_9154__$1 = state_9154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9154__$1,(4),jobs);
} else {
if((state_val_9155 === (3))){
var inst_9152 = (state_9154[(2)]);
var state_9154__$1 = state_9154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9154__$1,inst_9152);
} else {
if((state_val_9155 === (4))){
var inst_9144 = (state_9154[(2)]);
var inst_9145 = process.call(null,inst_9144);
var state_9154__$1 = state_9154;
if(cljs.core.truth_(inst_9145)){
var statearr_9157_9315 = state_9154__$1;
(statearr_9157_9315[(1)] = (5));

} else {
var statearr_9158_9316 = state_9154__$1;
(statearr_9158_9316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9155 === (5))){
var state_9154__$1 = state_9154;
var statearr_9159_9317 = state_9154__$1;
(statearr_9159_9317[(2)] = null);

(statearr_9159_9317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9155 === (6))){
var state_9154__$1 = state_9154;
var statearr_9160_9318 = state_9154__$1;
(statearr_9160_9318[(2)] = null);

(statearr_9160_9318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9155 === (7))){
var inst_9150 = (state_9154[(2)]);
var state_9154__$1 = state_9154;
var statearr_9161_9319 = state_9154__$1;
(statearr_9161_9319[(2)] = inst_9150);

(statearr_9161_9319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9310,c__6680__auto___9313,G__9141_9311,n__5207__auto___9309,jobs,results,process,async))
;
return ((function (__9310,switch__6618__auto__,c__6680__auto___9313,G__9141_9311,n__5207__auto___9309,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0 = (function (){
var statearr_9165 = [null,null,null,null,null,null,null];
(statearr_9165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__);

(statearr_9165[(1)] = (1));

return statearr_9165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1 = (function (state_9154){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e9166){if((e9166 instanceof Object)){
var ex__6622__auto__ = e9166;
var statearr_9167_9320 = state_9154;
(statearr_9167_9320[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9321 = state_9154;
state_9154 = G__9321;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = function(state_9154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1.call(this,state_9154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__;
})()
;})(__9310,switch__6618__auto__,c__6680__auto___9313,G__9141_9311,n__5207__auto___9309,jobs,results,process,async))
})();
var state__6682__auto__ = (function (){var statearr_9168 = f__6681__auto__.call(null);
(statearr_9168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___9313);

return statearr_9168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(__9310,c__6680__auto___9313,G__9141_9311,n__5207__auto___9309,jobs,results,process,async))
);


break;
case "async":
var c__6680__auto___9322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9310,c__6680__auto___9322,G__9141_9311,n__5207__auto___9309,jobs,results,process,async){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (__9310,c__6680__auto___9322,G__9141_9311,n__5207__auto___9309,jobs,results,process,async){
return (function (state_9181){
var state_val_9182 = (state_9181[(1)]);
if((state_val_9182 === (1))){
var state_9181__$1 = state_9181;
var statearr_9183_9323 = state_9181__$1;
(statearr_9183_9323[(2)] = null);

(statearr_9183_9323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9182 === (2))){
var state_9181__$1 = state_9181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9181__$1,(4),jobs);
} else {
if((state_val_9182 === (3))){
var inst_9179 = (state_9181[(2)]);
var state_9181__$1 = state_9181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9181__$1,inst_9179);
} else {
if((state_val_9182 === (4))){
var inst_9171 = (state_9181[(2)]);
var inst_9172 = async.call(null,inst_9171);
var state_9181__$1 = state_9181;
if(cljs.core.truth_(inst_9172)){
var statearr_9184_9324 = state_9181__$1;
(statearr_9184_9324[(1)] = (5));

} else {
var statearr_9185_9325 = state_9181__$1;
(statearr_9185_9325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9182 === (5))){
var state_9181__$1 = state_9181;
var statearr_9186_9326 = state_9181__$1;
(statearr_9186_9326[(2)] = null);

(statearr_9186_9326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9182 === (6))){
var state_9181__$1 = state_9181;
var statearr_9187_9327 = state_9181__$1;
(statearr_9187_9327[(2)] = null);

(statearr_9187_9327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9182 === (7))){
var inst_9177 = (state_9181[(2)]);
var state_9181__$1 = state_9181;
var statearr_9188_9328 = state_9181__$1;
(statearr_9188_9328[(2)] = inst_9177);

(statearr_9188_9328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9310,c__6680__auto___9322,G__9141_9311,n__5207__auto___9309,jobs,results,process,async))
;
return ((function (__9310,switch__6618__auto__,c__6680__auto___9322,G__9141_9311,n__5207__auto___9309,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0 = (function (){
var statearr_9192 = [null,null,null,null,null,null,null];
(statearr_9192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__);

(statearr_9192[(1)] = (1));

return statearr_9192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1 = (function (state_9181){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e9193){if((e9193 instanceof Object)){
var ex__6622__auto__ = e9193;
var statearr_9194_9329 = state_9181;
(statearr_9194_9329[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9330 = state_9181;
state_9181 = G__9330;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = function(state_9181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1.call(this,state_9181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__;
})()
;})(__9310,switch__6618__auto__,c__6680__auto___9322,G__9141_9311,n__5207__auto___9309,jobs,results,process,async))
})();
var state__6682__auto__ = (function (){var statearr_9195 = f__6681__auto__.call(null);
(statearr_9195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___9322);

return statearr_9195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(__9310,c__6680__auto___9322,G__9141_9311,n__5207__auto___9309,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9331 = (__9310 + (1));
__9310 = G__9331;
continue;
} else {
}
break;
}

var c__6680__auto___9332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___9332,jobs,results,process,async){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___9332,jobs,results,process,async){
return (function (state_9217){
var state_val_9218 = (state_9217[(1)]);
if((state_val_9218 === (1))){
var state_9217__$1 = state_9217;
var statearr_9219_9333 = state_9217__$1;
(statearr_9219_9333[(2)] = null);

(statearr_9219_9333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9218 === (2))){
var state_9217__$1 = state_9217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9217__$1,(4),from);
} else {
if((state_val_9218 === (3))){
var inst_9215 = (state_9217[(2)]);
var state_9217__$1 = state_9217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9217__$1,inst_9215);
} else {
if((state_val_9218 === (4))){
var inst_9198 = (state_9217[(7)]);
var inst_9198__$1 = (state_9217[(2)]);
var inst_9199 = (inst_9198__$1 == null);
var state_9217__$1 = (function (){var statearr_9220 = state_9217;
(statearr_9220[(7)] = inst_9198__$1);

return statearr_9220;
})();
if(cljs.core.truth_(inst_9199)){
var statearr_9221_9334 = state_9217__$1;
(statearr_9221_9334[(1)] = (5));

} else {
var statearr_9222_9335 = state_9217__$1;
(statearr_9222_9335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9218 === (5))){
var inst_9201 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9217__$1 = state_9217;
var statearr_9223_9336 = state_9217__$1;
(statearr_9223_9336[(2)] = inst_9201);

(statearr_9223_9336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9218 === (6))){
var inst_9198 = (state_9217[(7)]);
var inst_9203 = (state_9217[(8)]);
var inst_9203__$1 = cljs.core.async.chan.call(null,(1));
var inst_9204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9205 = [inst_9198,inst_9203__$1];
var inst_9206 = (new cljs.core.PersistentVector(null,2,(5),inst_9204,inst_9205,null));
var state_9217__$1 = (function (){var statearr_9224 = state_9217;
(statearr_9224[(8)] = inst_9203__$1);

return statearr_9224;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9217__$1,(8),jobs,inst_9206);
} else {
if((state_val_9218 === (7))){
var inst_9213 = (state_9217[(2)]);
var state_9217__$1 = state_9217;
var statearr_9225_9337 = state_9217__$1;
(statearr_9225_9337[(2)] = inst_9213);

(statearr_9225_9337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9218 === (8))){
var inst_9203 = (state_9217[(8)]);
var inst_9208 = (state_9217[(2)]);
var state_9217__$1 = (function (){var statearr_9226 = state_9217;
(statearr_9226[(9)] = inst_9208);

return statearr_9226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9217__$1,(9),results,inst_9203);
} else {
if((state_val_9218 === (9))){
var inst_9210 = (state_9217[(2)]);
var state_9217__$1 = (function (){var statearr_9227 = state_9217;
(statearr_9227[(10)] = inst_9210);

return statearr_9227;
})();
var statearr_9228_9338 = state_9217__$1;
(statearr_9228_9338[(2)] = null);

(statearr_9228_9338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___9332,jobs,results,process,async))
;
return ((function (switch__6618__auto__,c__6680__auto___9332,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0 = (function (){
var statearr_9232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__);

(statearr_9232[(1)] = (1));

return statearr_9232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1 = (function (state_9217){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e9233){if((e9233 instanceof Object)){
var ex__6622__auto__ = e9233;
var statearr_9234_9339 = state_9217;
(statearr_9234_9339[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9340 = state_9217;
state_9217 = G__9340;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = function(state_9217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1.call(this,state_9217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___9332,jobs,results,process,async))
})();
var state__6682__auto__ = (function (){var statearr_9235 = f__6681__auto__.call(null);
(statearr_9235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___9332);

return statearr_9235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___9332,jobs,results,process,async))
);


var c__6680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto__,jobs,results,process,async){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto__,jobs,results,process,async){
return (function (state_9273){
var state_val_9274 = (state_9273[(1)]);
if((state_val_9274 === (7))){
var inst_9269 = (state_9273[(2)]);
var state_9273__$1 = state_9273;
var statearr_9275_9341 = state_9273__$1;
(statearr_9275_9341[(2)] = inst_9269);

(statearr_9275_9341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (20))){
var state_9273__$1 = state_9273;
var statearr_9276_9342 = state_9273__$1;
(statearr_9276_9342[(2)] = null);

(statearr_9276_9342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (1))){
var state_9273__$1 = state_9273;
var statearr_9277_9343 = state_9273__$1;
(statearr_9277_9343[(2)] = null);

(statearr_9277_9343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (4))){
var inst_9238 = (state_9273[(7)]);
var inst_9238__$1 = (state_9273[(2)]);
var inst_9239 = (inst_9238__$1 == null);
var state_9273__$1 = (function (){var statearr_9278 = state_9273;
(statearr_9278[(7)] = inst_9238__$1);

return statearr_9278;
})();
if(cljs.core.truth_(inst_9239)){
var statearr_9279_9344 = state_9273__$1;
(statearr_9279_9344[(1)] = (5));

} else {
var statearr_9280_9345 = state_9273__$1;
(statearr_9280_9345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (15))){
var inst_9251 = (state_9273[(8)]);
var state_9273__$1 = state_9273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9273__$1,(18),to,inst_9251);
} else {
if((state_val_9274 === (21))){
var inst_9264 = (state_9273[(2)]);
var state_9273__$1 = state_9273;
var statearr_9281_9346 = state_9273__$1;
(statearr_9281_9346[(2)] = inst_9264);

(statearr_9281_9346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (13))){
var inst_9266 = (state_9273[(2)]);
var state_9273__$1 = (function (){var statearr_9282 = state_9273;
(statearr_9282[(9)] = inst_9266);

return statearr_9282;
})();
var statearr_9283_9347 = state_9273__$1;
(statearr_9283_9347[(2)] = null);

(statearr_9283_9347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (6))){
var inst_9238 = (state_9273[(7)]);
var state_9273__$1 = state_9273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9273__$1,(11),inst_9238);
} else {
if((state_val_9274 === (17))){
var inst_9259 = (state_9273[(2)]);
var state_9273__$1 = state_9273;
if(cljs.core.truth_(inst_9259)){
var statearr_9284_9348 = state_9273__$1;
(statearr_9284_9348[(1)] = (19));

} else {
var statearr_9285_9349 = state_9273__$1;
(statearr_9285_9349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (3))){
var inst_9271 = (state_9273[(2)]);
var state_9273__$1 = state_9273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9273__$1,inst_9271);
} else {
if((state_val_9274 === (12))){
var inst_9248 = (state_9273[(10)]);
var state_9273__$1 = state_9273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9273__$1,(14),inst_9248);
} else {
if((state_val_9274 === (2))){
var state_9273__$1 = state_9273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9273__$1,(4),results);
} else {
if((state_val_9274 === (19))){
var state_9273__$1 = state_9273;
var statearr_9286_9350 = state_9273__$1;
(statearr_9286_9350[(2)] = null);

(statearr_9286_9350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (11))){
var inst_9248 = (state_9273[(2)]);
var state_9273__$1 = (function (){var statearr_9287 = state_9273;
(statearr_9287[(10)] = inst_9248);

return statearr_9287;
})();
var statearr_9288_9351 = state_9273__$1;
(statearr_9288_9351[(2)] = null);

(statearr_9288_9351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (9))){
var state_9273__$1 = state_9273;
var statearr_9289_9352 = state_9273__$1;
(statearr_9289_9352[(2)] = null);

(statearr_9289_9352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (5))){
var state_9273__$1 = state_9273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9290_9353 = state_9273__$1;
(statearr_9290_9353[(1)] = (8));

} else {
var statearr_9291_9354 = state_9273__$1;
(statearr_9291_9354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (14))){
var inst_9251 = (state_9273[(8)]);
var inst_9253 = (state_9273[(11)]);
var inst_9251__$1 = (state_9273[(2)]);
var inst_9252 = (inst_9251__$1 == null);
var inst_9253__$1 = cljs.core.not.call(null,inst_9252);
var state_9273__$1 = (function (){var statearr_9292 = state_9273;
(statearr_9292[(8)] = inst_9251__$1);

(statearr_9292[(11)] = inst_9253__$1);

return statearr_9292;
})();
if(inst_9253__$1){
var statearr_9293_9355 = state_9273__$1;
(statearr_9293_9355[(1)] = (15));

} else {
var statearr_9294_9356 = state_9273__$1;
(statearr_9294_9356[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (16))){
var inst_9253 = (state_9273[(11)]);
var state_9273__$1 = state_9273;
var statearr_9295_9357 = state_9273__$1;
(statearr_9295_9357[(2)] = inst_9253);

(statearr_9295_9357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (10))){
var inst_9245 = (state_9273[(2)]);
var state_9273__$1 = state_9273;
var statearr_9296_9358 = state_9273__$1;
(statearr_9296_9358[(2)] = inst_9245);

(statearr_9296_9358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (18))){
var inst_9256 = (state_9273[(2)]);
var state_9273__$1 = state_9273;
var statearr_9297_9359 = state_9273__$1;
(statearr_9297_9359[(2)] = inst_9256);

(statearr_9297_9359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9274 === (8))){
var inst_9242 = cljs.core.async.close_BANG_.call(null,to);
var state_9273__$1 = state_9273;
var statearr_9298_9360 = state_9273__$1;
(statearr_9298_9360[(2)] = inst_9242);

(statearr_9298_9360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto__,jobs,results,process,async))
;
return ((function (switch__6618__auto__,c__6680__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0 = (function (){
var statearr_9302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__);

(statearr_9302[(1)] = (1));

return statearr_9302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1 = (function (state_9273){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e9303){if((e9303 instanceof Object)){
var ex__6622__auto__ = e9303;
var statearr_9304_9361 = state_9273;
(statearr_9304_9361[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9362 = state_9273;
state_9273 = G__9362;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__ = function(state_9273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1.call(this,state_9273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto__,jobs,results,process,async))
})();
var state__6682__auto__ = (function (){var statearr_9305 = f__6681__auto__.call(null);
(statearr_9305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto__);

return statearr_9305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto__,jobs,results,process,async))
);

return c__6680__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__9364 = arguments.length;
switch (G__9364) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__9367 = arguments.length;
switch (G__9367) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__9370 = arguments.length;
switch (G__9370) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6680__auto___9422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___9422,tc,fc){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___9422,tc,fc){
return (function (state_9396){
var state_val_9397 = (state_9396[(1)]);
if((state_val_9397 === (7))){
var inst_9392 = (state_9396[(2)]);
var state_9396__$1 = state_9396;
var statearr_9398_9423 = state_9396__$1;
(statearr_9398_9423[(2)] = inst_9392);

(statearr_9398_9423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (1))){
var state_9396__$1 = state_9396;
var statearr_9399_9424 = state_9396__$1;
(statearr_9399_9424[(2)] = null);

(statearr_9399_9424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (4))){
var inst_9373 = (state_9396[(7)]);
var inst_9373__$1 = (state_9396[(2)]);
var inst_9374 = (inst_9373__$1 == null);
var state_9396__$1 = (function (){var statearr_9400 = state_9396;
(statearr_9400[(7)] = inst_9373__$1);

return statearr_9400;
})();
if(cljs.core.truth_(inst_9374)){
var statearr_9401_9425 = state_9396__$1;
(statearr_9401_9425[(1)] = (5));

} else {
var statearr_9402_9426 = state_9396__$1;
(statearr_9402_9426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (13))){
var state_9396__$1 = state_9396;
var statearr_9403_9427 = state_9396__$1;
(statearr_9403_9427[(2)] = null);

(statearr_9403_9427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (6))){
var inst_9373 = (state_9396[(7)]);
var inst_9379 = p.call(null,inst_9373);
var state_9396__$1 = state_9396;
if(cljs.core.truth_(inst_9379)){
var statearr_9404_9428 = state_9396__$1;
(statearr_9404_9428[(1)] = (9));

} else {
var statearr_9405_9429 = state_9396__$1;
(statearr_9405_9429[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (3))){
var inst_9394 = (state_9396[(2)]);
var state_9396__$1 = state_9396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9396__$1,inst_9394);
} else {
if((state_val_9397 === (12))){
var state_9396__$1 = state_9396;
var statearr_9406_9430 = state_9396__$1;
(statearr_9406_9430[(2)] = null);

(statearr_9406_9430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (2))){
var state_9396__$1 = state_9396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9396__$1,(4),ch);
} else {
if((state_val_9397 === (11))){
var inst_9373 = (state_9396[(7)]);
var inst_9383 = (state_9396[(2)]);
var state_9396__$1 = state_9396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9396__$1,(8),inst_9383,inst_9373);
} else {
if((state_val_9397 === (9))){
var state_9396__$1 = state_9396;
var statearr_9407_9431 = state_9396__$1;
(statearr_9407_9431[(2)] = tc);

(statearr_9407_9431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (5))){
var inst_9376 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9377 = cljs.core.async.close_BANG_.call(null,fc);
var state_9396__$1 = (function (){var statearr_9408 = state_9396;
(statearr_9408[(8)] = inst_9376);

return statearr_9408;
})();
var statearr_9409_9432 = state_9396__$1;
(statearr_9409_9432[(2)] = inst_9377);

(statearr_9409_9432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (14))){
var inst_9390 = (state_9396[(2)]);
var state_9396__$1 = state_9396;
var statearr_9410_9433 = state_9396__$1;
(statearr_9410_9433[(2)] = inst_9390);

(statearr_9410_9433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (10))){
var state_9396__$1 = state_9396;
var statearr_9411_9434 = state_9396__$1;
(statearr_9411_9434[(2)] = fc);

(statearr_9411_9434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9397 === (8))){
var inst_9385 = (state_9396[(2)]);
var state_9396__$1 = state_9396;
if(cljs.core.truth_(inst_9385)){
var statearr_9412_9435 = state_9396__$1;
(statearr_9412_9435[(1)] = (12));

} else {
var statearr_9413_9436 = state_9396__$1;
(statearr_9413_9436[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___9422,tc,fc))
;
return ((function (switch__6618__auto__,c__6680__auto___9422,tc,fc){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_9417 = [null,null,null,null,null,null,null,null,null];
(statearr_9417[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_9417[(1)] = (1));

return statearr_9417;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_9396){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e9418){if((e9418 instanceof Object)){
var ex__6622__auto__ = e9418;
var statearr_9419_9437 = state_9396;
(statearr_9419_9437[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9438 = state_9396;
state_9396 = G__9438;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_9396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_9396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___9422,tc,fc))
})();
var state__6682__auto__ = (function (){var statearr_9420 = f__6681__auto__.call(null);
(statearr_9420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___9422);

return statearr_9420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___9422,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto__){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto__){
return (function (state_9485){
var state_val_9486 = (state_9485[(1)]);
if((state_val_9486 === (1))){
var inst_9471 = init;
var state_9485__$1 = (function (){var statearr_9487 = state_9485;
(statearr_9487[(7)] = inst_9471);

return statearr_9487;
})();
var statearr_9488_9503 = state_9485__$1;
(statearr_9488_9503[(2)] = null);

(statearr_9488_9503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9486 === (2))){
var state_9485__$1 = state_9485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9485__$1,(4),ch);
} else {
if((state_val_9486 === (3))){
var inst_9483 = (state_9485[(2)]);
var state_9485__$1 = state_9485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9485__$1,inst_9483);
} else {
if((state_val_9486 === (4))){
var inst_9474 = (state_9485[(8)]);
var inst_9474__$1 = (state_9485[(2)]);
var inst_9475 = (inst_9474__$1 == null);
var state_9485__$1 = (function (){var statearr_9489 = state_9485;
(statearr_9489[(8)] = inst_9474__$1);

return statearr_9489;
})();
if(cljs.core.truth_(inst_9475)){
var statearr_9490_9504 = state_9485__$1;
(statearr_9490_9504[(1)] = (5));

} else {
var statearr_9491_9505 = state_9485__$1;
(statearr_9491_9505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9486 === (5))){
var inst_9471 = (state_9485[(7)]);
var state_9485__$1 = state_9485;
var statearr_9492_9506 = state_9485__$1;
(statearr_9492_9506[(2)] = inst_9471);

(statearr_9492_9506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9486 === (6))){
var inst_9471 = (state_9485[(7)]);
var inst_9474 = (state_9485[(8)]);
var inst_9478 = f.call(null,inst_9471,inst_9474);
var inst_9471__$1 = inst_9478;
var state_9485__$1 = (function (){var statearr_9493 = state_9485;
(statearr_9493[(7)] = inst_9471__$1);

return statearr_9493;
})();
var statearr_9494_9507 = state_9485__$1;
(statearr_9494_9507[(2)] = null);

(statearr_9494_9507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9486 === (7))){
var inst_9481 = (state_9485[(2)]);
var state_9485__$1 = state_9485;
var statearr_9495_9508 = state_9485__$1;
(statearr_9495_9508[(2)] = inst_9481);

(statearr_9495_9508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6680__auto__))
;
return ((function (switch__6618__auto__,c__6680__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6619__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6619__auto____0 = (function (){
var statearr_9499 = [null,null,null,null,null,null,null,null,null];
(statearr_9499[(0)] = cljs$core$async$reduce_$_state_machine__6619__auto__);

(statearr_9499[(1)] = (1));

return statearr_9499;
});
var cljs$core$async$reduce_$_state_machine__6619__auto____1 = (function (state_9485){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e9500){if((e9500 instanceof Object)){
var ex__6622__auto__ = e9500;
var statearr_9501_9509 = state_9485;
(statearr_9501_9509[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9510 = state_9485;
state_9485 = G__9510;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6619__auto__ = function(state_9485){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6619__auto____1.call(this,state_9485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6619__auto____0;
cljs$core$async$reduce_$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6619__auto____1;
return cljs$core$async$reduce_$_state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto__))
})();
var state__6682__auto__ = (function (){var statearr_9502 = f__6681__auto__.call(null);
(statearr_9502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto__);

return statearr_9502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto__))
);

return c__6680__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__9512 = arguments.length;
switch (G__9512) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto__){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto__){
return (function (state_9537){
var state_val_9538 = (state_9537[(1)]);
if((state_val_9538 === (7))){
var inst_9519 = (state_9537[(2)]);
var state_9537__$1 = state_9537;
var statearr_9539_9563 = state_9537__$1;
(statearr_9539_9563[(2)] = inst_9519);

(statearr_9539_9563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (1))){
var inst_9513 = cljs.core.seq.call(null,coll);
var inst_9514 = inst_9513;
var state_9537__$1 = (function (){var statearr_9540 = state_9537;
(statearr_9540[(7)] = inst_9514);

return statearr_9540;
})();
var statearr_9541_9564 = state_9537__$1;
(statearr_9541_9564[(2)] = null);

(statearr_9541_9564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (4))){
var inst_9514 = (state_9537[(7)]);
var inst_9517 = cljs.core.first.call(null,inst_9514);
var state_9537__$1 = state_9537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9537__$1,(7),ch,inst_9517);
} else {
if((state_val_9538 === (13))){
var inst_9531 = (state_9537[(2)]);
var state_9537__$1 = state_9537;
var statearr_9542_9565 = state_9537__$1;
(statearr_9542_9565[(2)] = inst_9531);

(statearr_9542_9565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (6))){
var inst_9522 = (state_9537[(2)]);
var state_9537__$1 = state_9537;
if(cljs.core.truth_(inst_9522)){
var statearr_9543_9566 = state_9537__$1;
(statearr_9543_9566[(1)] = (8));

} else {
var statearr_9544_9567 = state_9537__$1;
(statearr_9544_9567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (3))){
var inst_9535 = (state_9537[(2)]);
var state_9537__$1 = state_9537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9537__$1,inst_9535);
} else {
if((state_val_9538 === (12))){
var state_9537__$1 = state_9537;
var statearr_9545_9568 = state_9537__$1;
(statearr_9545_9568[(2)] = null);

(statearr_9545_9568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (2))){
var inst_9514 = (state_9537[(7)]);
var state_9537__$1 = state_9537;
if(cljs.core.truth_(inst_9514)){
var statearr_9546_9569 = state_9537__$1;
(statearr_9546_9569[(1)] = (4));

} else {
var statearr_9547_9570 = state_9537__$1;
(statearr_9547_9570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (11))){
var inst_9528 = cljs.core.async.close_BANG_.call(null,ch);
var state_9537__$1 = state_9537;
var statearr_9548_9571 = state_9537__$1;
(statearr_9548_9571[(2)] = inst_9528);

(statearr_9548_9571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (9))){
var state_9537__$1 = state_9537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9549_9572 = state_9537__$1;
(statearr_9549_9572[(1)] = (11));

} else {
var statearr_9550_9573 = state_9537__$1;
(statearr_9550_9573[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (5))){
var inst_9514 = (state_9537[(7)]);
var state_9537__$1 = state_9537;
var statearr_9551_9574 = state_9537__$1;
(statearr_9551_9574[(2)] = inst_9514);

(statearr_9551_9574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (10))){
var inst_9533 = (state_9537[(2)]);
var state_9537__$1 = state_9537;
var statearr_9552_9575 = state_9537__$1;
(statearr_9552_9575[(2)] = inst_9533);

(statearr_9552_9575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9538 === (8))){
var inst_9514 = (state_9537[(7)]);
var inst_9524 = cljs.core.next.call(null,inst_9514);
var inst_9514__$1 = inst_9524;
var state_9537__$1 = (function (){var statearr_9553 = state_9537;
(statearr_9553[(7)] = inst_9514__$1);

return statearr_9553;
})();
var statearr_9554_9576 = state_9537__$1;
(statearr_9554_9576[(2)] = null);

(statearr_9554_9576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto__))
;
return ((function (switch__6618__auto__,c__6680__auto__){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_9558 = [null,null,null,null,null,null,null,null];
(statearr_9558[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_9558[(1)] = (1));

return statearr_9558;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_9537){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e9559){if((e9559 instanceof Object)){
var ex__6622__auto__ = e9559;
var statearr_9560_9577 = state_9537;
(statearr_9560_9577[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9578 = state_9537;
state_9537 = G__9578;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_9537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_9537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto__))
})();
var state__6682__auto__ = (function (){var statearr_9561 = f__6681__auto__.call(null);
(statearr_9561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto__);

return statearr_9561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto__))
);

return c__6680__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj9580 = {};
return obj9580;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4310__auto__ = _;
if(and__4310__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4958__auto__ = (((_ == null))?null:_);
return (function (){var or__4322__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj9582 = {};
return obj9582;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t9804 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9804 = (function (mult,ch,cs,meta9805){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9805 = meta9805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9806,meta9805__$1){
var self__ = this;
var _9806__$1 = this;
return (new cljs.core.async.t9804(self__.mult,self__.ch,self__.cs,meta9805__$1));
});})(cs))
;

cljs.core.async.t9804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9806){
var self__ = this;
var _9806__$1 = this;
return self__.meta9805;
});})(cs))
;

cljs.core.async.t9804.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t9804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t9804.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t9804.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t9804.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t9804.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t9804.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9805","meta9805",1423932765,null)], null);
});})(cs))
;

cljs.core.async.t9804.cljs$lang$type = true;

cljs.core.async.t9804.cljs$lang$ctorStr = "cljs.core.async/t9804";

cljs.core.async.t9804.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t9804");
});})(cs))
;

cljs.core.async.__GT_t9804 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t9804(mult__$1,ch__$1,cs__$1,meta9805){
return (new cljs.core.async.t9804(mult__$1,ch__$1,cs__$1,meta9805));
});})(cs))
;

}

return (new cljs.core.async.t9804(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6680__auto___10025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___10025,cs,m,dchan,dctr,done){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___10025,cs,m,dchan,dctr,done){
return (function (state_9937){
var state_val_9938 = (state_9937[(1)]);
if((state_val_9938 === (7))){
var inst_9933 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_9939_10026 = state_9937__$1;
(statearr_9939_10026[(2)] = inst_9933);

(statearr_9939_10026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (20))){
var inst_9838 = (state_9937[(7)]);
var inst_9848 = cljs.core.first.call(null,inst_9838);
var inst_9849 = cljs.core.nth.call(null,inst_9848,(0),null);
var inst_9850 = cljs.core.nth.call(null,inst_9848,(1),null);
var state_9937__$1 = (function (){var statearr_9940 = state_9937;
(statearr_9940[(8)] = inst_9849);

return statearr_9940;
})();
if(cljs.core.truth_(inst_9850)){
var statearr_9941_10027 = state_9937__$1;
(statearr_9941_10027[(1)] = (22));

} else {
var statearr_9942_10028 = state_9937__$1;
(statearr_9942_10028[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (27))){
var inst_9880 = (state_9937[(9)]);
var inst_9878 = (state_9937[(10)]);
var inst_9809 = (state_9937[(11)]);
var inst_9885 = (state_9937[(12)]);
var inst_9885__$1 = cljs.core._nth.call(null,inst_9878,inst_9880);
var inst_9886 = cljs.core.async.put_BANG_.call(null,inst_9885__$1,inst_9809,done);
var state_9937__$1 = (function (){var statearr_9943 = state_9937;
(statearr_9943[(12)] = inst_9885__$1);

return statearr_9943;
})();
if(cljs.core.truth_(inst_9886)){
var statearr_9944_10029 = state_9937__$1;
(statearr_9944_10029[(1)] = (30));

} else {
var statearr_9945_10030 = state_9937__$1;
(statearr_9945_10030[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (1))){
var state_9937__$1 = state_9937;
var statearr_9946_10031 = state_9937__$1;
(statearr_9946_10031[(2)] = null);

(statearr_9946_10031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (24))){
var inst_9838 = (state_9937[(7)]);
var inst_9855 = (state_9937[(2)]);
var inst_9856 = cljs.core.next.call(null,inst_9838);
var inst_9818 = inst_9856;
var inst_9819 = null;
var inst_9820 = (0);
var inst_9821 = (0);
var state_9937__$1 = (function (){var statearr_9947 = state_9937;
(statearr_9947[(13)] = inst_9820);

(statearr_9947[(14)] = inst_9819);

(statearr_9947[(15)] = inst_9855);

(statearr_9947[(16)] = inst_9821);

(statearr_9947[(17)] = inst_9818);

return statearr_9947;
})();
var statearr_9948_10032 = state_9937__$1;
(statearr_9948_10032[(2)] = null);

(statearr_9948_10032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (39))){
var state_9937__$1 = state_9937;
var statearr_9952_10033 = state_9937__$1;
(statearr_9952_10033[(2)] = null);

(statearr_9952_10033[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (4))){
var inst_9809 = (state_9937[(11)]);
var inst_9809__$1 = (state_9937[(2)]);
var inst_9810 = (inst_9809__$1 == null);
var state_9937__$1 = (function (){var statearr_9953 = state_9937;
(statearr_9953[(11)] = inst_9809__$1);

return statearr_9953;
})();
if(cljs.core.truth_(inst_9810)){
var statearr_9954_10034 = state_9937__$1;
(statearr_9954_10034[(1)] = (5));

} else {
var statearr_9955_10035 = state_9937__$1;
(statearr_9955_10035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (15))){
var inst_9820 = (state_9937[(13)]);
var inst_9819 = (state_9937[(14)]);
var inst_9821 = (state_9937[(16)]);
var inst_9818 = (state_9937[(17)]);
var inst_9834 = (state_9937[(2)]);
var inst_9835 = (inst_9821 + (1));
var tmp9949 = inst_9820;
var tmp9950 = inst_9819;
var tmp9951 = inst_9818;
var inst_9818__$1 = tmp9951;
var inst_9819__$1 = tmp9950;
var inst_9820__$1 = tmp9949;
var inst_9821__$1 = inst_9835;
var state_9937__$1 = (function (){var statearr_9956 = state_9937;
(statearr_9956[(18)] = inst_9834);

(statearr_9956[(13)] = inst_9820__$1);

(statearr_9956[(14)] = inst_9819__$1);

(statearr_9956[(16)] = inst_9821__$1);

(statearr_9956[(17)] = inst_9818__$1);

return statearr_9956;
})();
var statearr_9957_10036 = state_9937__$1;
(statearr_9957_10036[(2)] = null);

(statearr_9957_10036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (21))){
var inst_9859 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_9961_10037 = state_9937__$1;
(statearr_9961_10037[(2)] = inst_9859);

(statearr_9961_10037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (31))){
var inst_9885 = (state_9937[(12)]);
var inst_9889 = done.call(null,null);
var inst_9890 = cljs.core.async.untap_STAR_.call(null,m,inst_9885);
var state_9937__$1 = (function (){var statearr_9962 = state_9937;
(statearr_9962[(19)] = inst_9889);

return statearr_9962;
})();
var statearr_9963_10038 = state_9937__$1;
(statearr_9963_10038[(2)] = inst_9890);

(statearr_9963_10038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (32))){
var inst_9879 = (state_9937[(20)]);
var inst_9877 = (state_9937[(21)]);
var inst_9880 = (state_9937[(9)]);
var inst_9878 = (state_9937[(10)]);
var inst_9892 = (state_9937[(2)]);
var inst_9893 = (inst_9880 + (1));
var tmp9958 = inst_9879;
var tmp9959 = inst_9877;
var tmp9960 = inst_9878;
var inst_9877__$1 = tmp9959;
var inst_9878__$1 = tmp9960;
var inst_9879__$1 = tmp9958;
var inst_9880__$1 = inst_9893;
var state_9937__$1 = (function (){var statearr_9964 = state_9937;
(statearr_9964[(20)] = inst_9879__$1);

(statearr_9964[(22)] = inst_9892);

(statearr_9964[(21)] = inst_9877__$1);

(statearr_9964[(9)] = inst_9880__$1);

(statearr_9964[(10)] = inst_9878__$1);

return statearr_9964;
})();
var statearr_9965_10039 = state_9937__$1;
(statearr_9965_10039[(2)] = null);

(statearr_9965_10039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (40))){
var inst_9905 = (state_9937[(23)]);
var inst_9909 = done.call(null,null);
var inst_9910 = cljs.core.async.untap_STAR_.call(null,m,inst_9905);
var state_9937__$1 = (function (){var statearr_9966 = state_9937;
(statearr_9966[(24)] = inst_9909);

return statearr_9966;
})();
var statearr_9967_10040 = state_9937__$1;
(statearr_9967_10040[(2)] = inst_9910);

(statearr_9967_10040[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (33))){
var inst_9896 = (state_9937[(25)]);
var inst_9898 = cljs.core.chunked_seq_QMARK_.call(null,inst_9896);
var state_9937__$1 = state_9937;
if(inst_9898){
var statearr_9968_10041 = state_9937__$1;
(statearr_9968_10041[(1)] = (36));

} else {
var statearr_9969_10042 = state_9937__$1;
(statearr_9969_10042[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (13))){
var inst_9828 = (state_9937[(26)]);
var inst_9831 = cljs.core.async.close_BANG_.call(null,inst_9828);
var state_9937__$1 = state_9937;
var statearr_9970_10043 = state_9937__$1;
(statearr_9970_10043[(2)] = inst_9831);

(statearr_9970_10043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (22))){
var inst_9849 = (state_9937[(8)]);
var inst_9852 = cljs.core.async.close_BANG_.call(null,inst_9849);
var state_9937__$1 = state_9937;
var statearr_9971_10044 = state_9937__$1;
(statearr_9971_10044[(2)] = inst_9852);

(statearr_9971_10044[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (36))){
var inst_9896 = (state_9937[(25)]);
var inst_9900 = cljs.core.chunk_first.call(null,inst_9896);
var inst_9901 = cljs.core.chunk_rest.call(null,inst_9896);
var inst_9902 = cljs.core.count.call(null,inst_9900);
var inst_9877 = inst_9901;
var inst_9878 = inst_9900;
var inst_9879 = inst_9902;
var inst_9880 = (0);
var state_9937__$1 = (function (){var statearr_9972 = state_9937;
(statearr_9972[(20)] = inst_9879);

(statearr_9972[(21)] = inst_9877);

(statearr_9972[(9)] = inst_9880);

(statearr_9972[(10)] = inst_9878);

return statearr_9972;
})();
var statearr_9973_10045 = state_9937__$1;
(statearr_9973_10045[(2)] = null);

(statearr_9973_10045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (41))){
var inst_9896 = (state_9937[(25)]);
var inst_9912 = (state_9937[(2)]);
var inst_9913 = cljs.core.next.call(null,inst_9896);
var inst_9877 = inst_9913;
var inst_9878 = null;
var inst_9879 = (0);
var inst_9880 = (0);
var state_9937__$1 = (function (){var statearr_9974 = state_9937;
(statearr_9974[(20)] = inst_9879);

(statearr_9974[(27)] = inst_9912);

(statearr_9974[(21)] = inst_9877);

(statearr_9974[(9)] = inst_9880);

(statearr_9974[(10)] = inst_9878);

return statearr_9974;
})();
var statearr_9975_10046 = state_9937__$1;
(statearr_9975_10046[(2)] = null);

(statearr_9975_10046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (43))){
var state_9937__$1 = state_9937;
var statearr_9976_10047 = state_9937__$1;
(statearr_9976_10047[(2)] = null);

(statearr_9976_10047[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (29))){
var inst_9921 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_9977_10048 = state_9937__$1;
(statearr_9977_10048[(2)] = inst_9921);

(statearr_9977_10048[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (44))){
var inst_9930 = (state_9937[(2)]);
var state_9937__$1 = (function (){var statearr_9978 = state_9937;
(statearr_9978[(28)] = inst_9930);

return statearr_9978;
})();
var statearr_9979_10049 = state_9937__$1;
(statearr_9979_10049[(2)] = null);

(statearr_9979_10049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (6))){
var inst_9869 = (state_9937[(29)]);
var inst_9868 = cljs.core.deref.call(null,cs);
var inst_9869__$1 = cljs.core.keys.call(null,inst_9868);
var inst_9870 = cljs.core.count.call(null,inst_9869__$1);
var inst_9871 = cljs.core.reset_BANG_.call(null,dctr,inst_9870);
var inst_9876 = cljs.core.seq.call(null,inst_9869__$1);
var inst_9877 = inst_9876;
var inst_9878 = null;
var inst_9879 = (0);
var inst_9880 = (0);
var state_9937__$1 = (function (){var statearr_9980 = state_9937;
(statearr_9980[(20)] = inst_9879);

(statearr_9980[(29)] = inst_9869__$1);

(statearr_9980[(21)] = inst_9877);

(statearr_9980[(9)] = inst_9880);

(statearr_9980[(30)] = inst_9871);

(statearr_9980[(10)] = inst_9878);

return statearr_9980;
})();
var statearr_9981_10050 = state_9937__$1;
(statearr_9981_10050[(2)] = null);

(statearr_9981_10050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (28))){
var inst_9896 = (state_9937[(25)]);
var inst_9877 = (state_9937[(21)]);
var inst_9896__$1 = cljs.core.seq.call(null,inst_9877);
var state_9937__$1 = (function (){var statearr_9982 = state_9937;
(statearr_9982[(25)] = inst_9896__$1);

return statearr_9982;
})();
if(inst_9896__$1){
var statearr_9983_10051 = state_9937__$1;
(statearr_9983_10051[(1)] = (33));

} else {
var statearr_9984_10052 = state_9937__$1;
(statearr_9984_10052[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (25))){
var inst_9879 = (state_9937[(20)]);
var inst_9880 = (state_9937[(9)]);
var inst_9882 = (inst_9880 < inst_9879);
var inst_9883 = inst_9882;
var state_9937__$1 = state_9937;
if(cljs.core.truth_(inst_9883)){
var statearr_9985_10053 = state_9937__$1;
(statearr_9985_10053[(1)] = (27));

} else {
var statearr_9986_10054 = state_9937__$1;
(statearr_9986_10054[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (34))){
var state_9937__$1 = state_9937;
var statearr_9987_10055 = state_9937__$1;
(statearr_9987_10055[(2)] = null);

(statearr_9987_10055[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (17))){
var state_9937__$1 = state_9937;
var statearr_9988_10056 = state_9937__$1;
(statearr_9988_10056[(2)] = null);

(statearr_9988_10056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (3))){
var inst_9935 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9937__$1,inst_9935);
} else {
if((state_val_9938 === (12))){
var inst_9864 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_9989_10057 = state_9937__$1;
(statearr_9989_10057[(2)] = inst_9864);

(statearr_9989_10057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (2))){
var state_9937__$1 = state_9937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9937__$1,(4),ch);
} else {
if((state_val_9938 === (23))){
var state_9937__$1 = state_9937;
var statearr_9990_10058 = state_9937__$1;
(statearr_9990_10058[(2)] = null);

(statearr_9990_10058[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (35))){
var inst_9919 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_9991_10059 = state_9937__$1;
(statearr_9991_10059[(2)] = inst_9919);

(statearr_9991_10059[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (19))){
var inst_9838 = (state_9937[(7)]);
var inst_9842 = cljs.core.chunk_first.call(null,inst_9838);
var inst_9843 = cljs.core.chunk_rest.call(null,inst_9838);
var inst_9844 = cljs.core.count.call(null,inst_9842);
var inst_9818 = inst_9843;
var inst_9819 = inst_9842;
var inst_9820 = inst_9844;
var inst_9821 = (0);
var state_9937__$1 = (function (){var statearr_9992 = state_9937;
(statearr_9992[(13)] = inst_9820);

(statearr_9992[(14)] = inst_9819);

(statearr_9992[(16)] = inst_9821);

(statearr_9992[(17)] = inst_9818);

return statearr_9992;
})();
var statearr_9993_10060 = state_9937__$1;
(statearr_9993_10060[(2)] = null);

(statearr_9993_10060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (11))){
var inst_9838 = (state_9937[(7)]);
var inst_9818 = (state_9937[(17)]);
var inst_9838__$1 = cljs.core.seq.call(null,inst_9818);
var state_9937__$1 = (function (){var statearr_9994 = state_9937;
(statearr_9994[(7)] = inst_9838__$1);

return statearr_9994;
})();
if(inst_9838__$1){
var statearr_9995_10061 = state_9937__$1;
(statearr_9995_10061[(1)] = (16));

} else {
var statearr_9996_10062 = state_9937__$1;
(statearr_9996_10062[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (9))){
var inst_9866 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_9997_10063 = state_9937__$1;
(statearr_9997_10063[(2)] = inst_9866);

(statearr_9997_10063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (5))){
var inst_9816 = cljs.core.deref.call(null,cs);
var inst_9817 = cljs.core.seq.call(null,inst_9816);
var inst_9818 = inst_9817;
var inst_9819 = null;
var inst_9820 = (0);
var inst_9821 = (0);
var state_9937__$1 = (function (){var statearr_9998 = state_9937;
(statearr_9998[(13)] = inst_9820);

(statearr_9998[(14)] = inst_9819);

(statearr_9998[(16)] = inst_9821);

(statearr_9998[(17)] = inst_9818);

return statearr_9998;
})();
var statearr_9999_10064 = state_9937__$1;
(statearr_9999_10064[(2)] = null);

(statearr_9999_10064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (14))){
var state_9937__$1 = state_9937;
var statearr_10000_10065 = state_9937__$1;
(statearr_10000_10065[(2)] = null);

(statearr_10000_10065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (45))){
var inst_9927 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_10001_10066 = state_9937__$1;
(statearr_10001_10066[(2)] = inst_9927);

(statearr_10001_10066[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (26))){
var inst_9869 = (state_9937[(29)]);
var inst_9923 = (state_9937[(2)]);
var inst_9924 = cljs.core.seq.call(null,inst_9869);
var state_9937__$1 = (function (){var statearr_10002 = state_9937;
(statearr_10002[(31)] = inst_9923);

return statearr_10002;
})();
if(inst_9924){
var statearr_10003_10067 = state_9937__$1;
(statearr_10003_10067[(1)] = (42));

} else {
var statearr_10004_10068 = state_9937__$1;
(statearr_10004_10068[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (16))){
var inst_9838 = (state_9937[(7)]);
var inst_9840 = cljs.core.chunked_seq_QMARK_.call(null,inst_9838);
var state_9937__$1 = state_9937;
if(inst_9840){
var statearr_10005_10069 = state_9937__$1;
(statearr_10005_10069[(1)] = (19));

} else {
var statearr_10006_10070 = state_9937__$1;
(statearr_10006_10070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (38))){
var inst_9916 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_10007_10071 = state_9937__$1;
(statearr_10007_10071[(2)] = inst_9916);

(statearr_10007_10071[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (30))){
var state_9937__$1 = state_9937;
var statearr_10008_10072 = state_9937__$1;
(statearr_10008_10072[(2)] = null);

(statearr_10008_10072[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (10))){
var inst_9819 = (state_9937[(14)]);
var inst_9821 = (state_9937[(16)]);
var inst_9827 = cljs.core._nth.call(null,inst_9819,inst_9821);
var inst_9828 = cljs.core.nth.call(null,inst_9827,(0),null);
var inst_9829 = cljs.core.nth.call(null,inst_9827,(1),null);
var state_9937__$1 = (function (){var statearr_10009 = state_9937;
(statearr_10009[(26)] = inst_9828);

return statearr_10009;
})();
if(cljs.core.truth_(inst_9829)){
var statearr_10010_10073 = state_9937__$1;
(statearr_10010_10073[(1)] = (13));

} else {
var statearr_10011_10074 = state_9937__$1;
(statearr_10011_10074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (18))){
var inst_9862 = (state_9937[(2)]);
var state_9937__$1 = state_9937;
var statearr_10012_10075 = state_9937__$1;
(statearr_10012_10075[(2)] = inst_9862);

(statearr_10012_10075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (42))){
var state_9937__$1 = state_9937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9937__$1,(45),dchan);
} else {
if((state_val_9938 === (37))){
var inst_9896 = (state_9937[(25)]);
var inst_9809 = (state_9937[(11)]);
var inst_9905 = (state_9937[(23)]);
var inst_9905__$1 = cljs.core.first.call(null,inst_9896);
var inst_9906 = cljs.core.async.put_BANG_.call(null,inst_9905__$1,inst_9809,done);
var state_9937__$1 = (function (){var statearr_10013 = state_9937;
(statearr_10013[(23)] = inst_9905__$1);

return statearr_10013;
})();
if(cljs.core.truth_(inst_9906)){
var statearr_10014_10076 = state_9937__$1;
(statearr_10014_10076[(1)] = (39));

} else {
var statearr_10015_10077 = state_9937__$1;
(statearr_10015_10077[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9938 === (8))){
var inst_9820 = (state_9937[(13)]);
var inst_9821 = (state_9937[(16)]);
var inst_9823 = (inst_9821 < inst_9820);
var inst_9824 = inst_9823;
var state_9937__$1 = state_9937;
if(cljs.core.truth_(inst_9824)){
var statearr_10016_10078 = state_9937__$1;
(statearr_10016_10078[(1)] = (10));

} else {
var statearr_10017_10079 = state_9937__$1;
(statearr_10017_10079[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___10025,cs,m,dchan,dctr,done))
;
return ((function (switch__6618__auto__,c__6680__auto___10025,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6619__auto__ = null;
var cljs$core$async$mult_$_state_machine__6619__auto____0 = (function (){
var statearr_10021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10021[(0)] = cljs$core$async$mult_$_state_machine__6619__auto__);

(statearr_10021[(1)] = (1));

return statearr_10021;
});
var cljs$core$async$mult_$_state_machine__6619__auto____1 = (function (state_9937){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_9937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e10022){if((e10022 instanceof Object)){
var ex__6622__auto__ = e10022;
var statearr_10023_10080 = state_9937;
(statearr_10023_10080[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10081 = state_9937;
state_9937 = G__10081;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6619__auto__ = function(state_9937){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6619__auto____1.call(this,state_9937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6619__auto____0;
cljs$core$async$mult_$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6619__auto____1;
return cljs$core$async$mult_$_state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___10025,cs,m,dchan,dctr,done))
})();
var state__6682__auto__ = (function (){var statearr_10024 = f__6681__auto__.call(null);
(statearr_10024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___10025);

return statearr_10024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___10025,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__10083 = arguments.length;
switch (G__10083) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj10086 = {};
return obj10086;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5362__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5362__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10091){
var map__10092 = p__10091;
var map__10092__$1 = ((cljs.core.seq_QMARK_.call(null,map__10092))?cljs.core.apply.call(null,cljs.core.hash_map,map__10092):map__10092);
var opts = map__10092__$1;
var statearr_10093_10096 = state;
(statearr_10093_10096[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10092,map__10092__$1,opts){
return (function (val){
var statearr_10094_10097 = state;
(statearr_10094_10097[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10092,map__10092__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10095_10098 = state;
(statearr_10095_10098[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10087){
var G__10088 = cljs.core.first.call(null,seq10087);
var seq10087__$1 = cljs.core.next.call(null,seq10087);
var G__10089 = cljs.core.first.call(null,seq10087__$1);
var seq10087__$2 = cljs.core.next.call(null,seq10087__$1);
var G__10090 = cljs.core.first.call(null,seq10087__$2);
var seq10087__$3 = cljs.core.next.call(null,seq10087__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10088,G__10089,G__10090,seq10087__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t10218 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10218 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10219){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10219 = meta10219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10220,meta10219__$1){
var self__ = this;
var _10220__$1 = this;
return (new cljs.core.async.t10218(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10219__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10220){
var self__ = this;
var _10220__$1 = this;
return self__.meta10219;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t10218.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10219","meta10219",831453013,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10218.cljs$lang$type = true;

cljs.core.async.t10218.cljs$lang$ctorStr = "cljs.core.async/t10218";

cljs.core.async.t10218.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t10218");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t10218 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t10218(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10219){
return (new cljs.core.async.t10218(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10219));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t10218(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6680__auto___10337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___10337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___10337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10290){
var state_val_10291 = (state_10290[(1)]);
if((state_val_10291 === (7))){
var inst_10234 = (state_10290[(7)]);
var inst_10239 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10234);
var state_10290__$1 = state_10290;
var statearr_10292_10338 = state_10290__$1;
(statearr_10292_10338[(2)] = inst_10239);

(statearr_10292_10338[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (20))){
var inst_10249 = (state_10290[(8)]);
var state_10290__$1 = state_10290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10290__$1,(23),out,inst_10249);
} else {
if((state_val_10291 === (1))){
var inst_10224 = (state_10290[(9)]);
var inst_10224__$1 = calc_state.call(null);
var inst_10225 = cljs.core.seq_QMARK_.call(null,inst_10224__$1);
var state_10290__$1 = (function (){var statearr_10293 = state_10290;
(statearr_10293[(9)] = inst_10224__$1);

return statearr_10293;
})();
if(inst_10225){
var statearr_10294_10339 = state_10290__$1;
(statearr_10294_10339[(1)] = (2));

} else {
var statearr_10295_10340 = state_10290__$1;
(statearr_10295_10340[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (24))){
var inst_10242 = (state_10290[(10)]);
var inst_10234 = inst_10242;
var state_10290__$1 = (function (){var statearr_10296 = state_10290;
(statearr_10296[(7)] = inst_10234);

return statearr_10296;
})();
var statearr_10297_10341 = state_10290__$1;
(statearr_10297_10341[(2)] = null);

(statearr_10297_10341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (4))){
var inst_10224 = (state_10290[(9)]);
var inst_10230 = (state_10290[(2)]);
var inst_10231 = cljs.core.get.call(null,inst_10230,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10232 = cljs.core.get.call(null,inst_10230,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10233 = cljs.core.get.call(null,inst_10230,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10234 = inst_10224;
var state_10290__$1 = (function (){var statearr_10298 = state_10290;
(statearr_10298[(11)] = inst_10231);

(statearr_10298[(12)] = inst_10233);

(statearr_10298[(13)] = inst_10232);

(statearr_10298[(7)] = inst_10234);

return statearr_10298;
})();
var statearr_10299_10342 = state_10290__$1;
(statearr_10299_10342[(2)] = null);

(statearr_10299_10342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (15))){
var state_10290__$1 = state_10290;
var statearr_10300_10343 = state_10290__$1;
(statearr_10300_10343[(2)] = null);

(statearr_10300_10343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (21))){
var inst_10242 = (state_10290[(10)]);
var inst_10234 = inst_10242;
var state_10290__$1 = (function (){var statearr_10301 = state_10290;
(statearr_10301[(7)] = inst_10234);

return statearr_10301;
})();
var statearr_10302_10344 = state_10290__$1;
(statearr_10302_10344[(2)] = null);

(statearr_10302_10344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (13))){
var inst_10286 = (state_10290[(2)]);
var state_10290__$1 = state_10290;
var statearr_10303_10345 = state_10290__$1;
(statearr_10303_10345[(2)] = inst_10286);

(statearr_10303_10345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (22))){
var inst_10284 = (state_10290[(2)]);
var state_10290__$1 = state_10290;
var statearr_10304_10346 = state_10290__$1;
(statearr_10304_10346[(2)] = inst_10284);

(statearr_10304_10346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (6))){
var inst_10288 = (state_10290[(2)]);
var state_10290__$1 = state_10290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10290__$1,inst_10288);
} else {
if((state_val_10291 === (25))){
var state_10290__$1 = state_10290;
var statearr_10305_10347 = state_10290__$1;
(statearr_10305_10347[(2)] = null);

(statearr_10305_10347[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (17))){
var inst_10264 = (state_10290[(14)]);
var state_10290__$1 = state_10290;
var statearr_10306_10348 = state_10290__$1;
(statearr_10306_10348[(2)] = inst_10264);

(statearr_10306_10348[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (3))){
var inst_10224 = (state_10290[(9)]);
var state_10290__$1 = state_10290;
var statearr_10307_10349 = state_10290__$1;
(statearr_10307_10349[(2)] = inst_10224);

(statearr_10307_10349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (12))){
var inst_10243 = (state_10290[(15)]);
var inst_10264 = (state_10290[(14)]);
var inst_10250 = (state_10290[(16)]);
var inst_10264__$1 = inst_10243.call(null,inst_10250);
var state_10290__$1 = (function (){var statearr_10308 = state_10290;
(statearr_10308[(14)] = inst_10264__$1);

return statearr_10308;
})();
if(cljs.core.truth_(inst_10264__$1)){
var statearr_10309_10350 = state_10290__$1;
(statearr_10309_10350[(1)] = (17));

} else {
var statearr_10310_10351 = state_10290__$1;
(statearr_10310_10351[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (2))){
var inst_10224 = (state_10290[(9)]);
var inst_10227 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10224);
var state_10290__$1 = state_10290;
var statearr_10311_10352 = state_10290__$1;
(statearr_10311_10352[(2)] = inst_10227);

(statearr_10311_10352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (23))){
var inst_10275 = (state_10290[(2)]);
var state_10290__$1 = state_10290;
if(cljs.core.truth_(inst_10275)){
var statearr_10312_10353 = state_10290__$1;
(statearr_10312_10353[(1)] = (24));

} else {
var statearr_10313_10354 = state_10290__$1;
(statearr_10313_10354[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (19))){
var inst_10272 = (state_10290[(2)]);
var state_10290__$1 = state_10290;
if(cljs.core.truth_(inst_10272)){
var statearr_10314_10355 = state_10290__$1;
(statearr_10314_10355[(1)] = (20));

} else {
var statearr_10315_10356 = state_10290__$1;
(statearr_10315_10356[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (11))){
var inst_10249 = (state_10290[(8)]);
var inst_10255 = (inst_10249 == null);
var state_10290__$1 = state_10290;
if(cljs.core.truth_(inst_10255)){
var statearr_10316_10357 = state_10290__$1;
(statearr_10316_10357[(1)] = (14));

} else {
var statearr_10317_10358 = state_10290__$1;
(statearr_10317_10358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (9))){
var inst_10242 = (state_10290[(10)]);
var inst_10242__$1 = (state_10290[(2)]);
var inst_10243 = cljs.core.get.call(null,inst_10242__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10244 = cljs.core.get.call(null,inst_10242__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10245 = cljs.core.get.call(null,inst_10242__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10290__$1 = (function (){var statearr_10318 = state_10290;
(statearr_10318[(15)] = inst_10243);

(statearr_10318[(10)] = inst_10242__$1);

(statearr_10318[(17)] = inst_10244);

return statearr_10318;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10290__$1,(10),inst_10245);
} else {
if((state_val_10291 === (5))){
var inst_10234 = (state_10290[(7)]);
var inst_10237 = cljs.core.seq_QMARK_.call(null,inst_10234);
var state_10290__$1 = state_10290;
if(inst_10237){
var statearr_10319_10359 = state_10290__$1;
(statearr_10319_10359[(1)] = (7));

} else {
var statearr_10320_10360 = state_10290__$1;
(statearr_10320_10360[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (14))){
var inst_10250 = (state_10290[(16)]);
var inst_10257 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10250);
var state_10290__$1 = state_10290;
var statearr_10321_10361 = state_10290__$1;
(statearr_10321_10361[(2)] = inst_10257);

(statearr_10321_10361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (26))){
var inst_10280 = (state_10290[(2)]);
var state_10290__$1 = state_10290;
var statearr_10322_10362 = state_10290__$1;
(statearr_10322_10362[(2)] = inst_10280);

(statearr_10322_10362[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (16))){
var inst_10260 = (state_10290[(2)]);
var inst_10261 = calc_state.call(null);
var inst_10234 = inst_10261;
var state_10290__$1 = (function (){var statearr_10323 = state_10290;
(statearr_10323[(18)] = inst_10260);

(statearr_10323[(7)] = inst_10234);

return statearr_10323;
})();
var statearr_10324_10363 = state_10290__$1;
(statearr_10324_10363[(2)] = null);

(statearr_10324_10363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (10))){
var inst_10249 = (state_10290[(8)]);
var inst_10250 = (state_10290[(16)]);
var inst_10248 = (state_10290[(2)]);
var inst_10249__$1 = cljs.core.nth.call(null,inst_10248,(0),null);
var inst_10250__$1 = cljs.core.nth.call(null,inst_10248,(1),null);
var inst_10251 = (inst_10249__$1 == null);
var inst_10252 = cljs.core._EQ_.call(null,inst_10250__$1,change);
var inst_10253 = (inst_10251) || (inst_10252);
var state_10290__$1 = (function (){var statearr_10325 = state_10290;
(statearr_10325[(8)] = inst_10249__$1);

(statearr_10325[(16)] = inst_10250__$1);

return statearr_10325;
})();
if(cljs.core.truth_(inst_10253)){
var statearr_10326_10364 = state_10290__$1;
(statearr_10326_10364[(1)] = (11));

} else {
var statearr_10327_10365 = state_10290__$1;
(statearr_10327_10365[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (18))){
var inst_10243 = (state_10290[(15)]);
var inst_10250 = (state_10290[(16)]);
var inst_10244 = (state_10290[(17)]);
var inst_10267 = cljs.core.empty_QMARK_.call(null,inst_10243);
var inst_10268 = inst_10244.call(null,inst_10250);
var inst_10269 = cljs.core.not.call(null,inst_10268);
var inst_10270 = (inst_10267) && (inst_10269);
var state_10290__$1 = state_10290;
var statearr_10328_10366 = state_10290__$1;
(statearr_10328_10366[(2)] = inst_10270);

(statearr_10328_10366[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (8))){
var inst_10234 = (state_10290[(7)]);
var state_10290__$1 = state_10290;
var statearr_10329_10367 = state_10290__$1;
(statearr_10329_10367[(2)] = inst_10234);

(statearr_10329_10367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___10337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6618__auto__,c__6680__auto___10337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6619__auto__ = null;
var cljs$core$async$mix_$_state_machine__6619__auto____0 = (function (){
var statearr_10333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10333[(0)] = cljs$core$async$mix_$_state_machine__6619__auto__);

(statearr_10333[(1)] = (1));

return statearr_10333;
});
var cljs$core$async$mix_$_state_machine__6619__auto____1 = (function (state_10290){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_10290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e10334){if((e10334 instanceof Object)){
var ex__6622__auto__ = e10334;
var statearr_10335_10368 = state_10290;
(statearr_10335_10368[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10369 = state_10290;
state_10290 = G__10369;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6619__auto__ = function(state_10290){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6619__auto____1.call(this,state_10290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6619__auto____0;
cljs$core$async$mix_$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6619__auto____1;
return cljs$core$async$mix_$_state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___10337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6682__auto__ = (function (){var statearr_10336 = f__6681__auto__.call(null);
(statearr_10336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___10337);

return statearr_10336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___10337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj10371 = {};
return obj10371;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4310__auto__ = p;
if(and__4310__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4310__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4958__auto__ = (((p == null))?null:p);
return (function (){var or__4322__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4310__auto__ = p;
if(and__4310__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4310__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4958__auto__ = (((p == null))?null:p);
return (function (){var or__4322__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__10373 = arguments.length;
switch (G__10373) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4310__auto__ = p;
if(and__4310__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4958__auto__ = (((p == null))?null:p);
return (function (){var or__4322__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4310__auto__ = p;
if(and__4310__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4958__auto__ = (((p == null))?null:p);
return (function (){var or__4322__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__10377 = arguments.length;
switch (G__10377) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4322__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4322__auto__,mults){
return (function (p1__10375_SHARP_){
if(cljs.core.truth_(p1__10375_SHARP_.call(null,topic))){
return p1__10375_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10375_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4322__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t10378 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10378 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10379){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10379 = meta10379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10380,meta10379__$1){
var self__ = this;
var _10380__$1 = this;
return (new cljs.core.async.t10378(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10379__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t10378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10380){
var self__ = this;
var _10380__$1 = this;
return self__.meta10379;
});})(mults,ensure_mult))
;

cljs.core.async.t10378.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t10378.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t10378.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t10378.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t10378.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t10378.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t10378.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10379","meta10379",523006791,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t10378.cljs$lang$type = true;

cljs.core.async.t10378.cljs$lang$ctorStr = "cljs.core.async/t10378";

cljs.core.async.t10378.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t10378");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t10378 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t10378(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10379){
return (new cljs.core.async.t10378(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10379));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t10378(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6680__auto___10501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___10501,mults,ensure_mult,p){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___10501,mults,ensure_mult,p){
return (function (state_10452){
var state_val_10453 = (state_10452[(1)]);
if((state_val_10453 === (7))){
var inst_10448 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
var statearr_10454_10502 = state_10452__$1;
(statearr_10454_10502[(2)] = inst_10448);

(statearr_10454_10502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (20))){
var state_10452__$1 = state_10452;
var statearr_10455_10503 = state_10452__$1;
(statearr_10455_10503[(2)] = null);

(statearr_10455_10503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (1))){
var state_10452__$1 = state_10452;
var statearr_10456_10504 = state_10452__$1;
(statearr_10456_10504[(2)] = null);

(statearr_10456_10504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (24))){
var inst_10431 = (state_10452[(7)]);
var inst_10440 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10431);
var state_10452__$1 = state_10452;
var statearr_10457_10505 = state_10452__$1;
(statearr_10457_10505[(2)] = inst_10440);

(statearr_10457_10505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (4))){
var inst_10383 = (state_10452[(8)]);
var inst_10383__$1 = (state_10452[(2)]);
var inst_10384 = (inst_10383__$1 == null);
var state_10452__$1 = (function (){var statearr_10458 = state_10452;
(statearr_10458[(8)] = inst_10383__$1);

return statearr_10458;
})();
if(cljs.core.truth_(inst_10384)){
var statearr_10459_10506 = state_10452__$1;
(statearr_10459_10506[(1)] = (5));

} else {
var statearr_10460_10507 = state_10452__$1;
(statearr_10460_10507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (15))){
var inst_10425 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
var statearr_10461_10508 = state_10452__$1;
(statearr_10461_10508[(2)] = inst_10425);

(statearr_10461_10508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (21))){
var inst_10445 = (state_10452[(2)]);
var state_10452__$1 = (function (){var statearr_10462 = state_10452;
(statearr_10462[(9)] = inst_10445);

return statearr_10462;
})();
var statearr_10463_10509 = state_10452__$1;
(statearr_10463_10509[(2)] = null);

(statearr_10463_10509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (13))){
var inst_10407 = (state_10452[(10)]);
var inst_10409 = cljs.core.chunked_seq_QMARK_.call(null,inst_10407);
var state_10452__$1 = state_10452;
if(inst_10409){
var statearr_10464_10510 = state_10452__$1;
(statearr_10464_10510[(1)] = (16));

} else {
var statearr_10465_10511 = state_10452__$1;
(statearr_10465_10511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (22))){
var inst_10437 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
if(cljs.core.truth_(inst_10437)){
var statearr_10466_10512 = state_10452__$1;
(statearr_10466_10512[(1)] = (23));

} else {
var statearr_10467_10513 = state_10452__$1;
(statearr_10467_10513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (6))){
var inst_10433 = (state_10452[(11)]);
var inst_10431 = (state_10452[(7)]);
var inst_10383 = (state_10452[(8)]);
var inst_10431__$1 = topic_fn.call(null,inst_10383);
var inst_10432 = cljs.core.deref.call(null,mults);
var inst_10433__$1 = cljs.core.get.call(null,inst_10432,inst_10431__$1);
var state_10452__$1 = (function (){var statearr_10468 = state_10452;
(statearr_10468[(11)] = inst_10433__$1);

(statearr_10468[(7)] = inst_10431__$1);

return statearr_10468;
})();
if(cljs.core.truth_(inst_10433__$1)){
var statearr_10469_10514 = state_10452__$1;
(statearr_10469_10514[(1)] = (19));

} else {
var statearr_10470_10515 = state_10452__$1;
(statearr_10470_10515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (25))){
var inst_10442 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
var statearr_10471_10516 = state_10452__$1;
(statearr_10471_10516[(2)] = inst_10442);

(statearr_10471_10516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (17))){
var inst_10407 = (state_10452[(10)]);
var inst_10416 = cljs.core.first.call(null,inst_10407);
var inst_10417 = cljs.core.async.muxch_STAR_.call(null,inst_10416);
var inst_10418 = cljs.core.async.close_BANG_.call(null,inst_10417);
var inst_10419 = cljs.core.next.call(null,inst_10407);
var inst_10393 = inst_10419;
var inst_10394 = null;
var inst_10395 = (0);
var inst_10396 = (0);
var state_10452__$1 = (function (){var statearr_10472 = state_10452;
(statearr_10472[(12)] = inst_10393);

(statearr_10472[(13)] = inst_10395);

(statearr_10472[(14)] = inst_10394);

(statearr_10472[(15)] = inst_10418);

(statearr_10472[(16)] = inst_10396);

return statearr_10472;
})();
var statearr_10473_10517 = state_10452__$1;
(statearr_10473_10517[(2)] = null);

(statearr_10473_10517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (3))){
var inst_10450 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10452__$1,inst_10450);
} else {
if((state_val_10453 === (12))){
var inst_10427 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
var statearr_10474_10518 = state_10452__$1;
(statearr_10474_10518[(2)] = inst_10427);

(statearr_10474_10518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (2))){
var state_10452__$1 = state_10452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10452__$1,(4),ch);
} else {
if((state_val_10453 === (23))){
var state_10452__$1 = state_10452;
var statearr_10475_10519 = state_10452__$1;
(statearr_10475_10519[(2)] = null);

(statearr_10475_10519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (19))){
var inst_10433 = (state_10452[(11)]);
var inst_10383 = (state_10452[(8)]);
var inst_10435 = cljs.core.async.muxch_STAR_.call(null,inst_10433);
var state_10452__$1 = state_10452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10452__$1,(22),inst_10435,inst_10383);
} else {
if((state_val_10453 === (11))){
var inst_10393 = (state_10452[(12)]);
var inst_10407 = (state_10452[(10)]);
var inst_10407__$1 = cljs.core.seq.call(null,inst_10393);
var state_10452__$1 = (function (){var statearr_10476 = state_10452;
(statearr_10476[(10)] = inst_10407__$1);

return statearr_10476;
})();
if(inst_10407__$1){
var statearr_10477_10520 = state_10452__$1;
(statearr_10477_10520[(1)] = (13));

} else {
var statearr_10478_10521 = state_10452__$1;
(statearr_10478_10521[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (9))){
var inst_10429 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
var statearr_10479_10522 = state_10452__$1;
(statearr_10479_10522[(2)] = inst_10429);

(statearr_10479_10522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (5))){
var inst_10390 = cljs.core.deref.call(null,mults);
var inst_10391 = cljs.core.vals.call(null,inst_10390);
var inst_10392 = cljs.core.seq.call(null,inst_10391);
var inst_10393 = inst_10392;
var inst_10394 = null;
var inst_10395 = (0);
var inst_10396 = (0);
var state_10452__$1 = (function (){var statearr_10480 = state_10452;
(statearr_10480[(12)] = inst_10393);

(statearr_10480[(13)] = inst_10395);

(statearr_10480[(14)] = inst_10394);

(statearr_10480[(16)] = inst_10396);

return statearr_10480;
})();
var statearr_10481_10523 = state_10452__$1;
(statearr_10481_10523[(2)] = null);

(statearr_10481_10523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (14))){
var state_10452__$1 = state_10452;
var statearr_10485_10524 = state_10452__$1;
(statearr_10485_10524[(2)] = null);

(statearr_10485_10524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (16))){
var inst_10407 = (state_10452[(10)]);
var inst_10411 = cljs.core.chunk_first.call(null,inst_10407);
var inst_10412 = cljs.core.chunk_rest.call(null,inst_10407);
var inst_10413 = cljs.core.count.call(null,inst_10411);
var inst_10393 = inst_10412;
var inst_10394 = inst_10411;
var inst_10395 = inst_10413;
var inst_10396 = (0);
var state_10452__$1 = (function (){var statearr_10486 = state_10452;
(statearr_10486[(12)] = inst_10393);

(statearr_10486[(13)] = inst_10395);

(statearr_10486[(14)] = inst_10394);

(statearr_10486[(16)] = inst_10396);

return statearr_10486;
})();
var statearr_10487_10525 = state_10452__$1;
(statearr_10487_10525[(2)] = null);

(statearr_10487_10525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (10))){
var inst_10393 = (state_10452[(12)]);
var inst_10395 = (state_10452[(13)]);
var inst_10394 = (state_10452[(14)]);
var inst_10396 = (state_10452[(16)]);
var inst_10401 = cljs.core._nth.call(null,inst_10394,inst_10396);
var inst_10402 = cljs.core.async.muxch_STAR_.call(null,inst_10401);
var inst_10403 = cljs.core.async.close_BANG_.call(null,inst_10402);
var inst_10404 = (inst_10396 + (1));
var tmp10482 = inst_10393;
var tmp10483 = inst_10395;
var tmp10484 = inst_10394;
var inst_10393__$1 = tmp10482;
var inst_10394__$1 = tmp10484;
var inst_10395__$1 = tmp10483;
var inst_10396__$1 = inst_10404;
var state_10452__$1 = (function (){var statearr_10488 = state_10452;
(statearr_10488[(12)] = inst_10393__$1);

(statearr_10488[(13)] = inst_10395__$1);

(statearr_10488[(14)] = inst_10394__$1);

(statearr_10488[(16)] = inst_10396__$1);

(statearr_10488[(17)] = inst_10403);

return statearr_10488;
})();
var statearr_10489_10526 = state_10452__$1;
(statearr_10489_10526[(2)] = null);

(statearr_10489_10526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (18))){
var inst_10422 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
var statearr_10490_10527 = state_10452__$1;
(statearr_10490_10527[(2)] = inst_10422);

(statearr_10490_10527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (8))){
var inst_10395 = (state_10452[(13)]);
var inst_10396 = (state_10452[(16)]);
var inst_10398 = (inst_10396 < inst_10395);
var inst_10399 = inst_10398;
var state_10452__$1 = state_10452;
if(cljs.core.truth_(inst_10399)){
var statearr_10491_10528 = state_10452__$1;
(statearr_10491_10528[(1)] = (10));

} else {
var statearr_10492_10529 = state_10452__$1;
(statearr_10492_10529[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___10501,mults,ensure_mult,p))
;
return ((function (switch__6618__auto__,c__6680__auto___10501,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_10496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10496[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_10496[(1)] = (1));

return statearr_10496;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_10452){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_10452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e10497){if((e10497 instanceof Object)){
var ex__6622__auto__ = e10497;
var statearr_10498_10530 = state_10452;
(statearr_10498_10530[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10531 = state_10452;
state_10452 = G__10531;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_10452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_10452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___10501,mults,ensure_mult,p))
})();
var state__6682__auto__ = (function (){var statearr_10499 = f__6681__auto__.call(null);
(statearr_10499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___10501);

return statearr_10499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___10501,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__10533 = arguments.length;
switch (G__10533) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__10536 = arguments.length;
switch (G__10536) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__10539 = arguments.length;
switch (G__10539) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6680__auto___10609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___10609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___10609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10578){
var state_val_10579 = (state_10578[(1)]);
if((state_val_10579 === (7))){
var state_10578__$1 = state_10578;
var statearr_10580_10610 = state_10578__$1;
(statearr_10580_10610[(2)] = null);

(statearr_10580_10610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (1))){
var state_10578__$1 = state_10578;
var statearr_10581_10611 = state_10578__$1;
(statearr_10581_10611[(2)] = null);

(statearr_10581_10611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (4))){
var inst_10542 = (state_10578[(7)]);
var inst_10544 = (inst_10542 < cnt);
var state_10578__$1 = state_10578;
if(cljs.core.truth_(inst_10544)){
var statearr_10582_10612 = state_10578__$1;
(statearr_10582_10612[(1)] = (6));

} else {
var statearr_10583_10613 = state_10578__$1;
(statearr_10583_10613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (15))){
var inst_10574 = (state_10578[(2)]);
var state_10578__$1 = state_10578;
var statearr_10584_10614 = state_10578__$1;
(statearr_10584_10614[(2)] = inst_10574);

(statearr_10584_10614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (13))){
var inst_10567 = cljs.core.async.close_BANG_.call(null,out);
var state_10578__$1 = state_10578;
var statearr_10585_10615 = state_10578__$1;
(statearr_10585_10615[(2)] = inst_10567);

(statearr_10585_10615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (6))){
var state_10578__$1 = state_10578;
var statearr_10586_10616 = state_10578__$1;
(statearr_10586_10616[(2)] = null);

(statearr_10586_10616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (3))){
var inst_10576 = (state_10578[(2)]);
var state_10578__$1 = state_10578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10578__$1,inst_10576);
} else {
if((state_val_10579 === (12))){
var inst_10564 = (state_10578[(8)]);
var inst_10564__$1 = (state_10578[(2)]);
var inst_10565 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10564__$1);
var state_10578__$1 = (function (){var statearr_10587 = state_10578;
(statearr_10587[(8)] = inst_10564__$1);

return statearr_10587;
})();
if(cljs.core.truth_(inst_10565)){
var statearr_10588_10617 = state_10578__$1;
(statearr_10588_10617[(1)] = (13));

} else {
var statearr_10589_10618 = state_10578__$1;
(statearr_10589_10618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (2))){
var inst_10541 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10542 = (0);
var state_10578__$1 = (function (){var statearr_10590 = state_10578;
(statearr_10590[(9)] = inst_10541);

(statearr_10590[(7)] = inst_10542);

return statearr_10590;
})();
var statearr_10591_10619 = state_10578__$1;
(statearr_10591_10619[(2)] = null);

(statearr_10591_10619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (11))){
var inst_10542 = (state_10578[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10578,(10),Object,null,(9));
var inst_10551 = chs__$1.call(null,inst_10542);
var inst_10552 = done.call(null,inst_10542);
var inst_10553 = cljs.core.async.take_BANG_.call(null,inst_10551,inst_10552);
var state_10578__$1 = state_10578;
var statearr_10592_10620 = state_10578__$1;
(statearr_10592_10620[(2)] = inst_10553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (9))){
var inst_10542 = (state_10578[(7)]);
var inst_10555 = (state_10578[(2)]);
var inst_10556 = (inst_10542 + (1));
var inst_10542__$1 = inst_10556;
var state_10578__$1 = (function (){var statearr_10593 = state_10578;
(statearr_10593[(7)] = inst_10542__$1);

(statearr_10593[(10)] = inst_10555);

return statearr_10593;
})();
var statearr_10594_10621 = state_10578__$1;
(statearr_10594_10621[(2)] = null);

(statearr_10594_10621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (5))){
var inst_10562 = (state_10578[(2)]);
var state_10578__$1 = (function (){var statearr_10595 = state_10578;
(statearr_10595[(11)] = inst_10562);

return statearr_10595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10578__$1,(12),dchan);
} else {
if((state_val_10579 === (14))){
var inst_10564 = (state_10578[(8)]);
var inst_10569 = cljs.core.apply.call(null,f,inst_10564);
var state_10578__$1 = state_10578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10578__$1,(16),out,inst_10569);
} else {
if((state_val_10579 === (16))){
var inst_10571 = (state_10578[(2)]);
var state_10578__$1 = (function (){var statearr_10596 = state_10578;
(statearr_10596[(12)] = inst_10571);

return statearr_10596;
})();
var statearr_10597_10622 = state_10578__$1;
(statearr_10597_10622[(2)] = null);

(statearr_10597_10622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (10))){
var inst_10546 = (state_10578[(2)]);
var inst_10547 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10578__$1 = (function (){var statearr_10598 = state_10578;
(statearr_10598[(13)] = inst_10546);

return statearr_10598;
})();
var statearr_10599_10623 = state_10578__$1;
(statearr_10599_10623[(2)] = inst_10547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10579 === (8))){
var inst_10560 = (state_10578[(2)]);
var state_10578__$1 = state_10578;
var statearr_10600_10624 = state_10578__$1;
(statearr_10600_10624[(2)] = inst_10560);

(statearr_10600_10624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___10609,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6618__auto__,c__6680__auto___10609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_10604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10604[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_10604[(1)] = (1));

return statearr_10604;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_10578){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_10578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e10605){if((e10605 instanceof Object)){
var ex__6622__auto__ = e10605;
var statearr_10606_10625 = state_10578;
(statearr_10606_10625[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10626 = state_10578;
state_10578 = G__10626;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_10578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_10578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___10609,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6682__auto__ = (function (){var statearr_10607 = f__6681__auto__.call(null);
(statearr_10607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___10609);

return statearr_10607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___10609,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__10629 = arguments.length;
switch (G__10629) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6680__auto___10684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___10684,out){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___10684,out){
return (function (state_10659){
var state_val_10660 = (state_10659[(1)]);
if((state_val_10660 === (7))){
var inst_10638 = (state_10659[(7)]);
var inst_10639 = (state_10659[(8)]);
var inst_10638__$1 = (state_10659[(2)]);
var inst_10639__$1 = cljs.core.nth.call(null,inst_10638__$1,(0),null);
var inst_10640 = cljs.core.nth.call(null,inst_10638__$1,(1),null);
var inst_10641 = (inst_10639__$1 == null);
var state_10659__$1 = (function (){var statearr_10661 = state_10659;
(statearr_10661[(7)] = inst_10638__$1);

(statearr_10661[(8)] = inst_10639__$1);

(statearr_10661[(9)] = inst_10640);

return statearr_10661;
})();
if(cljs.core.truth_(inst_10641)){
var statearr_10662_10685 = state_10659__$1;
(statearr_10662_10685[(1)] = (8));

} else {
var statearr_10663_10686 = state_10659__$1;
(statearr_10663_10686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (1))){
var inst_10630 = cljs.core.vec.call(null,chs);
var inst_10631 = inst_10630;
var state_10659__$1 = (function (){var statearr_10664 = state_10659;
(statearr_10664[(10)] = inst_10631);

return statearr_10664;
})();
var statearr_10665_10687 = state_10659__$1;
(statearr_10665_10687[(2)] = null);

(statearr_10665_10687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (4))){
var inst_10631 = (state_10659[(10)]);
var state_10659__$1 = state_10659;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10659__$1,(7),inst_10631);
} else {
if((state_val_10660 === (6))){
var inst_10655 = (state_10659[(2)]);
var state_10659__$1 = state_10659;
var statearr_10666_10688 = state_10659__$1;
(statearr_10666_10688[(2)] = inst_10655);

(statearr_10666_10688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (3))){
var inst_10657 = (state_10659[(2)]);
var state_10659__$1 = state_10659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10659__$1,inst_10657);
} else {
if((state_val_10660 === (2))){
var inst_10631 = (state_10659[(10)]);
var inst_10633 = cljs.core.count.call(null,inst_10631);
var inst_10634 = (inst_10633 > (0));
var state_10659__$1 = state_10659;
if(cljs.core.truth_(inst_10634)){
var statearr_10668_10689 = state_10659__$1;
(statearr_10668_10689[(1)] = (4));

} else {
var statearr_10669_10690 = state_10659__$1;
(statearr_10669_10690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (11))){
var inst_10631 = (state_10659[(10)]);
var inst_10648 = (state_10659[(2)]);
var tmp10667 = inst_10631;
var inst_10631__$1 = tmp10667;
var state_10659__$1 = (function (){var statearr_10670 = state_10659;
(statearr_10670[(10)] = inst_10631__$1);

(statearr_10670[(11)] = inst_10648);

return statearr_10670;
})();
var statearr_10671_10691 = state_10659__$1;
(statearr_10671_10691[(2)] = null);

(statearr_10671_10691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (9))){
var inst_10639 = (state_10659[(8)]);
var state_10659__$1 = state_10659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10659__$1,(11),out,inst_10639);
} else {
if((state_val_10660 === (5))){
var inst_10653 = cljs.core.async.close_BANG_.call(null,out);
var state_10659__$1 = state_10659;
var statearr_10672_10692 = state_10659__$1;
(statearr_10672_10692[(2)] = inst_10653);

(statearr_10672_10692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (10))){
var inst_10651 = (state_10659[(2)]);
var state_10659__$1 = state_10659;
var statearr_10673_10693 = state_10659__$1;
(statearr_10673_10693[(2)] = inst_10651);

(statearr_10673_10693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (8))){
var inst_10631 = (state_10659[(10)]);
var inst_10638 = (state_10659[(7)]);
var inst_10639 = (state_10659[(8)]);
var inst_10640 = (state_10659[(9)]);
var inst_10643 = (function (){var cs = inst_10631;
var vec__10636 = inst_10638;
var v = inst_10639;
var c = inst_10640;
return ((function (cs,vec__10636,v,c,inst_10631,inst_10638,inst_10639,inst_10640,state_val_10660,c__6680__auto___10684,out){
return (function (p1__10627_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10627_SHARP_);
});
;})(cs,vec__10636,v,c,inst_10631,inst_10638,inst_10639,inst_10640,state_val_10660,c__6680__auto___10684,out))
})();
var inst_10644 = cljs.core.filterv.call(null,inst_10643,inst_10631);
var inst_10631__$1 = inst_10644;
var state_10659__$1 = (function (){var statearr_10674 = state_10659;
(statearr_10674[(10)] = inst_10631__$1);

return statearr_10674;
})();
var statearr_10675_10694 = state_10659__$1;
(statearr_10675_10694[(2)] = null);

(statearr_10675_10694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___10684,out))
;
return ((function (switch__6618__auto__,c__6680__auto___10684,out){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_10679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10679[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_10679[(1)] = (1));

return statearr_10679;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_10659){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_10659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e10680){if((e10680 instanceof Object)){
var ex__6622__auto__ = e10680;
var statearr_10681_10695 = state_10659;
(statearr_10681_10695[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10696 = state_10659;
state_10659 = G__10696;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_10659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_10659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___10684,out))
})();
var state__6682__auto__ = (function (){var statearr_10682 = f__6681__auto__.call(null);
(statearr_10682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___10684);

return statearr_10682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___10684,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__10698 = arguments.length;
switch (G__10698) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6680__auto___10746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___10746,out){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___10746,out){
return (function (state_10722){
var state_val_10723 = (state_10722[(1)]);
if((state_val_10723 === (7))){
var inst_10704 = (state_10722[(7)]);
var inst_10704__$1 = (state_10722[(2)]);
var inst_10705 = (inst_10704__$1 == null);
var inst_10706 = cljs.core.not.call(null,inst_10705);
var state_10722__$1 = (function (){var statearr_10724 = state_10722;
(statearr_10724[(7)] = inst_10704__$1);

return statearr_10724;
})();
if(inst_10706){
var statearr_10725_10747 = state_10722__$1;
(statearr_10725_10747[(1)] = (8));

} else {
var statearr_10726_10748 = state_10722__$1;
(statearr_10726_10748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10723 === (1))){
var inst_10699 = (0);
var state_10722__$1 = (function (){var statearr_10727 = state_10722;
(statearr_10727[(8)] = inst_10699);

return statearr_10727;
})();
var statearr_10728_10749 = state_10722__$1;
(statearr_10728_10749[(2)] = null);

(statearr_10728_10749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10723 === (4))){
var state_10722__$1 = state_10722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10722__$1,(7),ch);
} else {
if((state_val_10723 === (6))){
var inst_10717 = (state_10722[(2)]);
var state_10722__$1 = state_10722;
var statearr_10729_10750 = state_10722__$1;
(statearr_10729_10750[(2)] = inst_10717);

(statearr_10729_10750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10723 === (3))){
var inst_10719 = (state_10722[(2)]);
var inst_10720 = cljs.core.async.close_BANG_.call(null,out);
var state_10722__$1 = (function (){var statearr_10730 = state_10722;
(statearr_10730[(9)] = inst_10719);

return statearr_10730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10722__$1,inst_10720);
} else {
if((state_val_10723 === (2))){
var inst_10699 = (state_10722[(8)]);
var inst_10701 = (inst_10699 < n);
var state_10722__$1 = state_10722;
if(cljs.core.truth_(inst_10701)){
var statearr_10731_10751 = state_10722__$1;
(statearr_10731_10751[(1)] = (4));

} else {
var statearr_10732_10752 = state_10722__$1;
(statearr_10732_10752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10723 === (11))){
var inst_10699 = (state_10722[(8)]);
var inst_10709 = (state_10722[(2)]);
var inst_10710 = (inst_10699 + (1));
var inst_10699__$1 = inst_10710;
var state_10722__$1 = (function (){var statearr_10733 = state_10722;
(statearr_10733[(8)] = inst_10699__$1);

(statearr_10733[(10)] = inst_10709);

return statearr_10733;
})();
var statearr_10734_10753 = state_10722__$1;
(statearr_10734_10753[(2)] = null);

(statearr_10734_10753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10723 === (9))){
var state_10722__$1 = state_10722;
var statearr_10735_10754 = state_10722__$1;
(statearr_10735_10754[(2)] = null);

(statearr_10735_10754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10723 === (5))){
var state_10722__$1 = state_10722;
var statearr_10736_10755 = state_10722__$1;
(statearr_10736_10755[(2)] = null);

(statearr_10736_10755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10723 === (10))){
var inst_10714 = (state_10722[(2)]);
var state_10722__$1 = state_10722;
var statearr_10737_10756 = state_10722__$1;
(statearr_10737_10756[(2)] = inst_10714);

(statearr_10737_10756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10723 === (8))){
var inst_10704 = (state_10722[(7)]);
var state_10722__$1 = state_10722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10722__$1,(11),out,inst_10704);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___10746,out))
;
return ((function (switch__6618__auto__,c__6680__auto___10746,out){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_10741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10741[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_10741[(1)] = (1));

return statearr_10741;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_10722){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_10722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e10742){if((e10742 instanceof Object)){
var ex__6622__auto__ = e10742;
var statearr_10743_10757 = state_10722;
(statearr_10743_10757[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10758 = state_10722;
state_10722 = G__10758;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_10722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_10722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___10746,out))
})();
var state__6682__auto__ = (function (){var statearr_10744 = f__6681__auto__.call(null);
(statearr_10744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___10746);

return statearr_10744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___10746,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t10766 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10766 = (function (map_LT_,f,ch,meta10767){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10767 = meta10767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10768,meta10767__$1){
var self__ = this;
var _10768__$1 = this;
return (new cljs.core.async.t10766(self__.map_LT_,self__.f,self__.ch,meta10767__$1));
});

cljs.core.async.t10766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10768){
var self__ = this;
var _10768__$1 = this;
return self__.meta10767;
});

cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t10769 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10769 = (function (map_LT_,f,ch,meta10767,_,fn1,meta10770){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10767 = meta10767;
this._ = _;
this.fn1 = fn1;
this.meta10770 = meta10770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10771,meta10770__$1){
var self__ = this;
var _10771__$1 = this;
return (new cljs.core.async.t10769(self__.map_LT_,self__.f,self__.ch,self__.meta10767,self__._,self__.fn1,meta10770__$1));
});})(___$1))
;

cljs.core.async.t10769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10771){
var self__ = this;
var _10771__$1 = this;
return self__.meta10770;
});})(___$1))
;

cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10759_SHARP_){
return f1.call(null,(((p1__10759_SHARP_ == null))?null:self__.f.call(null,p1__10759_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t10769.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10767","meta10767",326070438,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10770","meta10770",879652679,null)], null);
});})(___$1))
;

cljs.core.async.t10769.cljs$lang$type = true;

cljs.core.async.t10769.cljs$lang$ctorStr = "cljs.core.async/t10769";

cljs.core.async.t10769.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t10769");
});})(___$1))
;

cljs.core.async.__GT_t10769 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t10769(map_LT___$1,f__$1,ch__$1,meta10767__$1,___$2,fn1__$1,meta10770){
return (new cljs.core.async.t10769(map_LT___$1,f__$1,ch__$1,meta10767__$1,___$2,fn1__$1,meta10770));
});})(___$1))
;

}

return (new cljs.core.async.t10769(self__.map_LT_,self__.f,self__.ch,self__.meta10767,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4310__auto__ = ret;
if(cljs.core.truth_(and__4310__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4310__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t10766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10767","meta10767",326070438,null)], null);
});

cljs.core.async.t10766.cljs$lang$type = true;

cljs.core.async.t10766.cljs$lang$ctorStr = "cljs.core.async/t10766";

cljs.core.async.t10766.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t10766");
});

cljs.core.async.__GT_t10766 = (function cljs$core$async$map_LT__$___GT_t10766(map_LT___$1,f__$1,ch__$1,meta10767){
return (new cljs.core.async.t10766(map_LT___$1,f__$1,ch__$1,meta10767));
});

}

return (new cljs.core.async.t10766(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t10775 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10775 = (function (map_GT_,f,ch,meta10776){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10776 = meta10776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10777,meta10776__$1){
var self__ = this;
var _10777__$1 = this;
return (new cljs.core.async.t10775(self__.map_GT_,self__.f,self__.ch,meta10776__$1));
});

cljs.core.async.t10775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10777){
var self__ = this;
var _10777__$1 = this;
return self__.meta10776;
});

cljs.core.async.t10775.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10775.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10775.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10775.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10775.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10775.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t10775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10776","meta10776",1567093058,null)], null);
});

cljs.core.async.t10775.cljs$lang$type = true;

cljs.core.async.t10775.cljs$lang$ctorStr = "cljs.core.async/t10775";

cljs.core.async.t10775.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t10775");
});

cljs.core.async.__GT_t10775 = (function cljs$core$async$map_GT__$___GT_t10775(map_GT___$1,f__$1,ch__$1,meta10776){
return (new cljs.core.async.t10775(map_GT___$1,f__$1,ch__$1,meta10776));
});

}

return (new cljs.core.async.t10775(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t10781 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10781 = (function (filter_GT_,p,ch,meta10782){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10782 = meta10782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10783,meta10782__$1){
var self__ = this;
var _10783__$1 = this;
return (new cljs.core.async.t10781(self__.filter_GT_,self__.p,self__.ch,meta10782__$1));
});

cljs.core.async.t10781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10783){
var self__ = this;
var _10783__$1 = this;
return self__.meta10782;
});

cljs.core.async.t10781.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10781.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10781.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10781.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t10781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10782","meta10782",-1291984573,null)], null);
});

cljs.core.async.t10781.cljs$lang$type = true;

cljs.core.async.t10781.cljs$lang$ctorStr = "cljs.core.async/t10781";

cljs.core.async.t10781.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t10781");
});

cljs.core.async.__GT_t10781 = (function cljs$core$async$filter_GT__$___GT_t10781(filter_GT___$1,p__$1,ch__$1,meta10782){
return (new cljs.core.async.t10781(filter_GT___$1,p__$1,ch__$1,meta10782));
});

}

return (new cljs.core.async.t10781(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__10785 = arguments.length;
switch (G__10785) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6680__auto___10828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___10828,out){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___10828,out){
return (function (state_10806){
var state_val_10807 = (state_10806[(1)]);
if((state_val_10807 === (7))){
var inst_10802 = (state_10806[(2)]);
var state_10806__$1 = state_10806;
var statearr_10808_10829 = state_10806__$1;
(statearr_10808_10829[(2)] = inst_10802);

(statearr_10808_10829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (1))){
var state_10806__$1 = state_10806;
var statearr_10809_10830 = state_10806__$1;
(statearr_10809_10830[(2)] = null);

(statearr_10809_10830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (4))){
var inst_10788 = (state_10806[(7)]);
var inst_10788__$1 = (state_10806[(2)]);
var inst_10789 = (inst_10788__$1 == null);
var state_10806__$1 = (function (){var statearr_10810 = state_10806;
(statearr_10810[(7)] = inst_10788__$1);

return statearr_10810;
})();
if(cljs.core.truth_(inst_10789)){
var statearr_10811_10831 = state_10806__$1;
(statearr_10811_10831[(1)] = (5));

} else {
var statearr_10812_10832 = state_10806__$1;
(statearr_10812_10832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (6))){
var inst_10788 = (state_10806[(7)]);
var inst_10793 = p.call(null,inst_10788);
var state_10806__$1 = state_10806;
if(cljs.core.truth_(inst_10793)){
var statearr_10813_10833 = state_10806__$1;
(statearr_10813_10833[(1)] = (8));

} else {
var statearr_10814_10834 = state_10806__$1;
(statearr_10814_10834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (3))){
var inst_10804 = (state_10806[(2)]);
var state_10806__$1 = state_10806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10806__$1,inst_10804);
} else {
if((state_val_10807 === (2))){
var state_10806__$1 = state_10806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10806__$1,(4),ch);
} else {
if((state_val_10807 === (11))){
var inst_10796 = (state_10806[(2)]);
var state_10806__$1 = state_10806;
var statearr_10815_10835 = state_10806__$1;
(statearr_10815_10835[(2)] = inst_10796);

(statearr_10815_10835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (9))){
var state_10806__$1 = state_10806;
var statearr_10816_10836 = state_10806__$1;
(statearr_10816_10836[(2)] = null);

(statearr_10816_10836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (5))){
var inst_10791 = cljs.core.async.close_BANG_.call(null,out);
var state_10806__$1 = state_10806;
var statearr_10817_10837 = state_10806__$1;
(statearr_10817_10837[(2)] = inst_10791);

(statearr_10817_10837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (10))){
var inst_10799 = (state_10806[(2)]);
var state_10806__$1 = (function (){var statearr_10818 = state_10806;
(statearr_10818[(8)] = inst_10799);

return statearr_10818;
})();
var statearr_10819_10838 = state_10806__$1;
(statearr_10819_10838[(2)] = null);

(statearr_10819_10838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (8))){
var inst_10788 = (state_10806[(7)]);
var state_10806__$1 = state_10806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10806__$1,(11),out,inst_10788);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___10828,out))
;
return ((function (switch__6618__auto__,c__6680__auto___10828,out){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_10823 = [null,null,null,null,null,null,null,null,null];
(statearr_10823[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_10823[(1)] = (1));

return statearr_10823;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_10806){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_10806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e10824){if((e10824 instanceof Object)){
var ex__6622__auto__ = e10824;
var statearr_10825_10839 = state_10806;
(statearr_10825_10839[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10840 = state_10806;
state_10806 = G__10840;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_10806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_10806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___10828,out))
})();
var state__6682__auto__ = (function (){var statearr_10826 = f__6681__auto__.call(null);
(statearr_10826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___10828);

return statearr_10826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___10828,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__10842 = arguments.length;
switch (G__10842) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto__){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto__){
return (function (state_11009){
var state_val_11010 = (state_11009[(1)]);
if((state_val_11010 === (7))){
var inst_11005 = (state_11009[(2)]);
var state_11009__$1 = state_11009;
var statearr_11011_11052 = state_11009__$1;
(statearr_11011_11052[(2)] = inst_11005);

(statearr_11011_11052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (20))){
var inst_10975 = (state_11009[(7)]);
var inst_10986 = (state_11009[(2)]);
var inst_10987 = cljs.core.next.call(null,inst_10975);
var inst_10961 = inst_10987;
var inst_10962 = null;
var inst_10963 = (0);
var inst_10964 = (0);
var state_11009__$1 = (function (){var statearr_11012 = state_11009;
(statearr_11012[(8)] = inst_10961);

(statearr_11012[(9)] = inst_10986);

(statearr_11012[(10)] = inst_10962);

(statearr_11012[(11)] = inst_10964);

(statearr_11012[(12)] = inst_10963);

return statearr_11012;
})();
var statearr_11013_11053 = state_11009__$1;
(statearr_11013_11053[(2)] = null);

(statearr_11013_11053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (1))){
var state_11009__$1 = state_11009;
var statearr_11014_11054 = state_11009__$1;
(statearr_11014_11054[(2)] = null);

(statearr_11014_11054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (4))){
var inst_10950 = (state_11009[(13)]);
var inst_10950__$1 = (state_11009[(2)]);
var inst_10951 = (inst_10950__$1 == null);
var state_11009__$1 = (function (){var statearr_11015 = state_11009;
(statearr_11015[(13)] = inst_10950__$1);

return statearr_11015;
})();
if(cljs.core.truth_(inst_10951)){
var statearr_11016_11055 = state_11009__$1;
(statearr_11016_11055[(1)] = (5));

} else {
var statearr_11017_11056 = state_11009__$1;
(statearr_11017_11056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (15))){
var state_11009__$1 = state_11009;
var statearr_11021_11057 = state_11009__$1;
(statearr_11021_11057[(2)] = null);

(statearr_11021_11057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (21))){
var state_11009__$1 = state_11009;
var statearr_11022_11058 = state_11009__$1;
(statearr_11022_11058[(2)] = null);

(statearr_11022_11058[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (13))){
var inst_10961 = (state_11009[(8)]);
var inst_10962 = (state_11009[(10)]);
var inst_10964 = (state_11009[(11)]);
var inst_10963 = (state_11009[(12)]);
var inst_10971 = (state_11009[(2)]);
var inst_10972 = (inst_10964 + (1));
var tmp11018 = inst_10961;
var tmp11019 = inst_10962;
var tmp11020 = inst_10963;
var inst_10961__$1 = tmp11018;
var inst_10962__$1 = tmp11019;
var inst_10963__$1 = tmp11020;
var inst_10964__$1 = inst_10972;
var state_11009__$1 = (function (){var statearr_11023 = state_11009;
(statearr_11023[(8)] = inst_10961__$1);

(statearr_11023[(10)] = inst_10962__$1);

(statearr_11023[(11)] = inst_10964__$1);

(statearr_11023[(14)] = inst_10971);

(statearr_11023[(12)] = inst_10963__$1);

return statearr_11023;
})();
var statearr_11024_11059 = state_11009__$1;
(statearr_11024_11059[(2)] = null);

(statearr_11024_11059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (22))){
var state_11009__$1 = state_11009;
var statearr_11025_11060 = state_11009__$1;
(statearr_11025_11060[(2)] = null);

(statearr_11025_11060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (6))){
var inst_10950 = (state_11009[(13)]);
var inst_10959 = f.call(null,inst_10950);
var inst_10960 = cljs.core.seq.call(null,inst_10959);
var inst_10961 = inst_10960;
var inst_10962 = null;
var inst_10963 = (0);
var inst_10964 = (0);
var state_11009__$1 = (function (){var statearr_11026 = state_11009;
(statearr_11026[(8)] = inst_10961);

(statearr_11026[(10)] = inst_10962);

(statearr_11026[(11)] = inst_10964);

(statearr_11026[(12)] = inst_10963);

return statearr_11026;
})();
var statearr_11027_11061 = state_11009__$1;
(statearr_11027_11061[(2)] = null);

(statearr_11027_11061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (17))){
var inst_10975 = (state_11009[(7)]);
var inst_10979 = cljs.core.chunk_first.call(null,inst_10975);
var inst_10980 = cljs.core.chunk_rest.call(null,inst_10975);
var inst_10981 = cljs.core.count.call(null,inst_10979);
var inst_10961 = inst_10980;
var inst_10962 = inst_10979;
var inst_10963 = inst_10981;
var inst_10964 = (0);
var state_11009__$1 = (function (){var statearr_11028 = state_11009;
(statearr_11028[(8)] = inst_10961);

(statearr_11028[(10)] = inst_10962);

(statearr_11028[(11)] = inst_10964);

(statearr_11028[(12)] = inst_10963);

return statearr_11028;
})();
var statearr_11029_11062 = state_11009__$1;
(statearr_11029_11062[(2)] = null);

(statearr_11029_11062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (3))){
var inst_11007 = (state_11009[(2)]);
var state_11009__$1 = state_11009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11009__$1,inst_11007);
} else {
if((state_val_11010 === (12))){
var inst_10995 = (state_11009[(2)]);
var state_11009__$1 = state_11009;
var statearr_11030_11063 = state_11009__$1;
(statearr_11030_11063[(2)] = inst_10995);

(statearr_11030_11063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (2))){
var state_11009__$1 = state_11009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11009__$1,(4),in$);
} else {
if((state_val_11010 === (23))){
var inst_11003 = (state_11009[(2)]);
var state_11009__$1 = state_11009;
var statearr_11031_11064 = state_11009__$1;
(statearr_11031_11064[(2)] = inst_11003);

(statearr_11031_11064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (19))){
var inst_10990 = (state_11009[(2)]);
var state_11009__$1 = state_11009;
var statearr_11032_11065 = state_11009__$1;
(statearr_11032_11065[(2)] = inst_10990);

(statearr_11032_11065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (11))){
var inst_10961 = (state_11009[(8)]);
var inst_10975 = (state_11009[(7)]);
var inst_10975__$1 = cljs.core.seq.call(null,inst_10961);
var state_11009__$1 = (function (){var statearr_11033 = state_11009;
(statearr_11033[(7)] = inst_10975__$1);

return statearr_11033;
})();
if(inst_10975__$1){
var statearr_11034_11066 = state_11009__$1;
(statearr_11034_11066[(1)] = (14));

} else {
var statearr_11035_11067 = state_11009__$1;
(statearr_11035_11067[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (9))){
var inst_10997 = (state_11009[(2)]);
var inst_10998 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11009__$1 = (function (){var statearr_11036 = state_11009;
(statearr_11036[(15)] = inst_10997);

return statearr_11036;
})();
if(cljs.core.truth_(inst_10998)){
var statearr_11037_11068 = state_11009__$1;
(statearr_11037_11068[(1)] = (21));

} else {
var statearr_11038_11069 = state_11009__$1;
(statearr_11038_11069[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (5))){
var inst_10953 = cljs.core.async.close_BANG_.call(null,out);
var state_11009__$1 = state_11009;
var statearr_11039_11070 = state_11009__$1;
(statearr_11039_11070[(2)] = inst_10953);

(statearr_11039_11070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (14))){
var inst_10975 = (state_11009[(7)]);
var inst_10977 = cljs.core.chunked_seq_QMARK_.call(null,inst_10975);
var state_11009__$1 = state_11009;
if(inst_10977){
var statearr_11040_11071 = state_11009__$1;
(statearr_11040_11071[(1)] = (17));

} else {
var statearr_11041_11072 = state_11009__$1;
(statearr_11041_11072[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (16))){
var inst_10993 = (state_11009[(2)]);
var state_11009__$1 = state_11009;
var statearr_11042_11073 = state_11009__$1;
(statearr_11042_11073[(2)] = inst_10993);

(statearr_11042_11073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11010 === (10))){
var inst_10962 = (state_11009[(10)]);
var inst_10964 = (state_11009[(11)]);
var inst_10969 = cljs.core._nth.call(null,inst_10962,inst_10964);
var state_11009__$1 = state_11009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11009__$1,(13),out,inst_10969);
} else {
if((state_val_11010 === (18))){
var inst_10975 = (state_11009[(7)]);
var inst_10984 = cljs.core.first.call(null,inst_10975);
var state_11009__$1 = state_11009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11009__$1,(20),out,inst_10984);
} else {
if((state_val_11010 === (8))){
var inst_10964 = (state_11009[(11)]);
var inst_10963 = (state_11009[(12)]);
var inst_10966 = (inst_10964 < inst_10963);
var inst_10967 = inst_10966;
var state_11009__$1 = state_11009;
if(cljs.core.truth_(inst_10967)){
var statearr_11043_11074 = state_11009__$1;
(statearr_11043_11074[(1)] = (10));

} else {
var statearr_11044_11075 = state_11009__$1;
(statearr_11044_11075[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto__))
;
return ((function (switch__6618__auto__,c__6680__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6619__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6619__auto____0 = (function (){
var statearr_11048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11048[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6619__auto__);

(statearr_11048[(1)] = (1));

return statearr_11048;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6619__auto____1 = (function (state_11009){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_11009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e11049){if((e11049 instanceof Object)){
var ex__6622__auto__ = e11049;
var statearr_11050_11076 = state_11009;
(statearr_11050_11076[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11077 = state_11009;
state_11009 = G__11077;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6619__auto__ = function(state_11009){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6619__auto____1.call(this,state_11009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6619__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6619__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto__))
})();
var state__6682__auto__ = (function (){var statearr_11051 = f__6681__auto__.call(null);
(statearr_11051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto__);

return statearr_11051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto__))
);

return c__6680__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__11079 = arguments.length;
switch (G__11079) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__11082 = arguments.length;
switch (G__11082) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__11085 = arguments.length;
switch (G__11085) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6680__auto___11135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___11135,out){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___11135,out){
return (function (state_11109){
var state_val_11110 = (state_11109[(1)]);
if((state_val_11110 === (7))){
var inst_11104 = (state_11109[(2)]);
var state_11109__$1 = state_11109;
var statearr_11111_11136 = state_11109__$1;
(statearr_11111_11136[(2)] = inst_11104);

(statearr_11111_11136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (1))){
var inst_11086 = null;
var state_11109__$1 = (function (){var statearr_11112 = state_11109;
(statearr_11112[(7)] = inst_11086);

return statearr_11112;
})();
var statearr_11113_11137 = state_11109__$1;
(statearr_11113_11137[(2)] = null);

(statearr_11113_11137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (4))){
var inst_11089 = (state_11109[(8)]);
var inst_11089__$1 = (state_11109[(2)]);
var inst_11090 = (inst_11089__$1 == null);
var inst_11091 = cljs.core.not.call(null,inst_11090);
var state_11109__$1 = (function (){var statearr_11114 = state_11109;
(statearr_11114[(8)] = inst_11089__$1);

return statearr_11114;
})();
if(inst_11091){
var statearr_11115_11138 = state_11109__$1;
(statearr_11115_11138[(1)] = (5));

} else {
var statearr_11116_11139 = state_11109__$1;
(statearr_11116_11139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (6))){
var state_11109__$1 = state_11109;
var statearr_11117_11140 = state_11109__$1;
(statearr_11117_11140[(2)] = null);

(statearr_11117_11140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (3))){
var inst_11106 = (state_11109[(2)]);
var inst_11107 = cljs.core.async.close_BANG_.call(null,out);
var state_11109__$1 = (function (){var statearr_11118 = state_11109;
(statearr_11118[(9)] = inst_11106);

return statearr_11118;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11109__$1,inst_11107);
} else {
if((state_val_11110 === (2))){
var state_11109__$1 = state_11109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11109__$1,(4),ch);
} else {
if((state_val_11110 === (11))){
var inst_11089 = (state_11109[(8)]);
var inst_11098 = (state_11109[(2)]);
var inst_11086 = inst_11089;
var state_11109__$1 = (function (){var statearr_11119 = state_11109;
(statearr_11119[(7)] = inst_11086);

(statearr_11119[(10)] = inst_11098);

return statearr_11119;
})();
var statearr_11120_11141 = state_11109__$1;
(statearr_11120_11141[(2)] = null);

(statearr_11120_11141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (9))){
var inst_11089 = (state_11109[(8)]);
var state_11109__$1 = state_11109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11109__$1,(11),out,inst_11089);
} else {
if((state_val_11110 === (5))){
var inst_11086 = (state_11109[(7)]);
var inst_11089 = (state_11109[(8)]);
var inst_11093 = cljs.core._EQ_.call(null,inst_11089,inst_11086);
var state_11109__$1 = state_11109;
if(inst_11093){
var statearr_11122_11142 = state_11109__$1;
(statearr_11122_11142[(1)] = (8));

} else {
var statearr_11123_11143 = state_11109__$1;
(statearr_11123_11143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (10))){
var inst_11101 = (state_11109[(2)]);
var state_11109__$1 = state_11109;
var statearr_11124_11144 = state_11109__$1;
(statearr_11124_11144[(2)] = inst_11101);

(statearr_11124_11144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (8))){
var inst_11086 = (state_11109[(7)]);
var tmp11121 = inst_11086;
var inst_11086__$1 = tmp11121;
var state_11109__$1 = (function (){var statearr_11125 = state_11109;
(statearr_11125[(7)] = inst_11086__$1);

return statearr_11125;
})();
var statearr_11126_11145 = state_11109__$1;
(statearr_11126_11145[(2)] = null);

(statearr_11126_11145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___11135,out))
;
return ((function (switch__6618__auto__,c__6680__auto___11135,out){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_11130 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11130[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_11130[(1)] = (1));

return statearr_11130;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_11109){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_11109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e11131){if((e11131 instanceof Object)){
var ex__6622__auto__ = e11131;
var statearr_11132_11146 = state_11109;
(statearr_11132_11146[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11147 = state_11109;
state_11109 = G__11147;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_11109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_11109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___11135,out))
})();
var state__6682__auto__ = (function (){var statearr_11133 = f__6681__auto__.call(null);
(statearr_11133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___11135);

return statearr_11133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___11135,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__11149 = arguments.length;
switch (G__11149) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6680__auto___11218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___11218,out){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___11218,out){
return (function (state_11187){
var state_val_11188 = (state_11187[(1)]);
if((state_val_11188 === (7))){
var inst_11183 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11189_11219 = state_11187__$1;
(statearr_11189_11219[(2)] = inst_11183);

(statearr_11189_11219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (1))){
var inst_11150 = (new Array(n));
var inst_11151 = inst_11150;
var inst_11152 = (0);
var state_11187__$1 = (function (){var statearr_11190 = state_11187;
(statearr_11190[(7)] = inst_11152);

(statearr_11190[(8)] = inst_11151);

return statearr_11190;
})();
var statearr_11191_11220 = state_11187__$1;
(statearr_11191_11220[(2)] = null);

(statearr_11191_11220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (4))){
var inst_11155 = (state_11187[(9)]);
var inst_11155__$1 = (state_11187[(2)]);
var inst_11156 = (inst_11155__$1 == null);
var inst_11157 = cljs.core.not.call(null,inst_11156);
var state_11187__$1 = (function (){var statearr_11192 = state_11187;
(statearr_11192[(9)] = inst_11155__$1);

return statearr_11192;
})();
if(inst_11157){
var statearr_11193_11221 = state_11187__$1;
(statearr_11193_11221[(1)] = (5));

} else {
var statearr_11194_11222 = state_11187__$1;
(statearr_11194_11222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (15))){
var inst_11177 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11195_11223 = state_11187__$1;
(statearr_11195_11223[(2)] = inst_11177);

(statearr_11195_11223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (13))){
var state_11187__$1 = state_11187;
var statearr_11196_11224 = state_11187__$1;
(statearr_11196_11224[(2)] = null);

(statearr_11196_11224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (6))){
var inst_11152 = (state_11187[(7)]);
var inst_11173 = (inst_11152 > (0));
var state_11187__$1 = state_11187;
if(cljs.core.truth_(inst_11173)){
var statearr_11197_11225 = state_11187__$1;
(statearr_11197_11225[(1)] = (12));

} else {
var statearr_11198_11226 = state_11187__$1;
(statearr_11198_11226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (3))){
var inst_11185 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11187__$1,inst_11185);
} else {
if((state_val_11188 === (12))){
var inst_11151 = (state_11187[(8)]);
var inst_11175 = cljs.core.vec.call(null,inst_11151);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11187__$1,(15),out,inst_11175);
} else {
if((state_val_11188 === (2))){
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11187__$1,(4),ch);
} else {
if((state_val_11188 === (11))){
var inst_11167 = (state_11187[(2)]);
var inst_11168 = (new Array(n));
var inst_11151 = inst_11168;
var inst_11152 = (0);
var state_11187__$1 = (function (){var statearr_11199 = state_11187;
(statearr_11199[(7)] = inst_11152);

(statearr_11199[(8)] = inst_11151);

(statearr_11199[(10)] = inst_11167);

return statearr_11199;
})();
var statearr_11200_11227 = state_11187__$1;
(statearr_11200_11227[(2)] = null);

(statearr_11200_11227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (9))){
var inst_11151 = (state_11187[(8)]);
var inst_11165 = cljs.core.vec.call(null,inst_11151);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11187__$1,(11),out,inst_11165);
} else {
if((state_val_11188 === (5))){
var inst_11160 = (state_11187[(11)]);
var inst_11152 = (state_11187[(7)]);
var inst_11151 = (state_11187[(8)]);
var inst_11155 = (state_11187[(9)]);
var inst_11159 = (inst_11151[inst_11152] = inst_11155);
var inst_11160__$1 = (inst_11152 + (1));
var inst_11161 = (inst_11160__$1 < n);
var state_11187__$1 = (function (){var statearr_11201 = state_11187;
(statearr_11201[(11)] = inst_11160__$1);

(statearr_11201[(12)] = inst_11159);

return statearr_11201;
})();
if(cljs.core.truth_(inst_11161)){
var statearr_11202_11228 = state_11187__$1;
(statearr_11202_11228[(1)] = (8));

} else {
var statearr_11203_11229 = state_11187__$1;
(statearr_11203_11229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (14))){
var inst_11180 = (state_11187[(2)]);
var inst_11181 = cljs.core.async.close_BANG_.call(null,out);
var state_11187__$1 = (function (){var statearr_11205 = state_11187;
(statearr_11205[(13)] = inst_11180);

return statearr_11205;
})();
var statearr_11206_11230 = state_11187__$1;
(statearr_11206_11230[(2)] = inst_11181);

(statearr_11206_11230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (10))){
var inst_11171 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11207_11231 = state_11187__$1;
(statearr_11207_11231[(2)] = inst_11171);

(statearr_11207_11231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (8))){
var inst_11160 = (state_11187[(11)]);
var inst_11151 = (state_11187[(8)]);
var tmp11204 = inst_11151;
var inst_11151__$1 = tmp11204;
var inst_11152 = inst_11160;
var state_11187__$1 = (function (){var statearr_11208 = state_11187;
(statearr_11208[(7)] = inst_11152);

(statearr_11208[(8)] = inst_11151__$1);

return statearr_11208;
})();
var statearr_11209_11232 = state_11187__$1;
(statearr_11209_11232[(2)] = null);

(statearr_11209_11232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___11218,out))
;
return ((function (switch__6618__auto__,c__6680__auto___11218,out){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_11213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11213[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_11213[(1)] = (1));

return statearr_11213;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_11187){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_11187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e11214){if((e11214 instanceof Object)){
var ex__6622__auto__ = e11214;
var statearr_11215_11233 = state_11187;
(statearr_11215_11233[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11234 = state_11187;
state_11187 = G__11234;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_11187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_11187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___11218,out))
})();
var state__6682__auto__ = (function (){var statearr_11216 = f__6681__auto__.call(null);
(statearr_11216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___11218);

return statearr_11216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___11218,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__11236 = arguments.length;
switch (G__11236) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6680__auto___11309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6680__auto___11309,out){
return (function (){
var f__6681__auto__ = (function (){var switch__6618__auto__ = ((function (c__6680__auto___11309,out){
return (function (state_11278){
var state_val_11279 = (state_11278[(1)]);
if((state_val_11279 === (7))){
var inst_11274 = (state_11278[(2)]);
var state_11278__$1 = state_11278;
var statearr_11280_11310 = state_11278__$1;
(statearr_11280_11310[(2)] = inst_11274);

(statearr_11280_11310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (1))){
var inst_11237 = [];
var inst_11238 = inst_11237;
var inst_11239 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11278__$1 = (function (){var statearr_11281 = state_11278;
(statearr_11281[(7)] = inst_11239);

(statearr_11281[(8)] = inst_11238);

return statearr_11281;
})();
var statearr_11282_11311 = state_11278__$1;
(statearr_11282_11311[(2)] = null);

(statearr_11282_11311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (4))){
var inst_11242 = (state_11278[(9)]);
var inst_11242__$1 = (state_11278[(2)]);
var inst_11243 = (inst_11242__$1 == null);
var inst_11244 = cljs.core.not.call(null,inst_11243);
var state_11278__$1 = (function (){var statearr_11283 = state_11278;
(statearr_11283[(9)] = inst_11242__$1);

return statearr_11283;
})();
if(inst_11244){
var statearr_11284_11312 = state_11278__$1;
(statearr_11284_11312[(1)] = (5));

} else {
var statearr_11285_11313 = state_11278__$1;
(statearr_11285_11313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (15))){
var inst_11268 = (state_11278[(2)]);
var state_11278__$1 = state_11278;
var statearr_11286_11314 = state_11278__$1;
(statearr_11286_11314[(2)] = inst_11268);

(statearr_11286_11314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (13))){
var state_11278__$1 = state_11278;
var statearr_11287_11315 = state_11278__$1;
(statearr_11287_11315[(2)] = null);

(statearr_11287_11315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (6))){
var inst_11238 = (state_11278[(8)]);
var inst_11263 = inst_11238.length;
var inst_11264 = (inst_11263 > (0));
var state_11278__$1 = state_11278;
if(cljs.core.truth_(inst_11264)){
var statearr_11288_11316 = state_11278__$1;
(statearr_11288_11316[(1)] = (12));

} else {
var statearr_11289_11317 = state_11278__$1;
(statearr_11289_11317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (3))){
var inst_11276 = (state_11278[(2)]);
var state_11278__$1 = state_11278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11278__$1,inst_11276);
} else {
if((state_val_11279 === (12))){
var inst_11238 = (state_11278[(8)]);
var inst_11266 = cljs.core.vec.call(null,inst_11238);
var state_11278__$1 = state_11278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11278__$1,(15),out,inst_11266);
} else {
if((state_val_11279 === (2))){
var state_11278__$1 = state_11278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11278__$1,(4),ch);
} else {
if((state_val_11279 === (11))){
var inst_11246 = (state_11278[(10)]);
var inst_11242 = (state_11278[(9)]);
var inst_11256 = (state_11278[(2)]);
var inst_11257 = [];
var inst_11258 = inst_11257.push(inst_11242);
var inst_11238 = inst_11257;
var inst_11239 = inst_11246;
var state_11278__$1 = (function (){var statearr_11290 = state_11278;
(statearr_11290[(7)] = inst_11239);

(statearr_11290[(11)] = inst_11258);

(statearr_11290[(12)] = inst_11256);

(statearr_11290[(8)] = inst_11238);

return statearr_11290;
})();
var statearr_11291_11318 = state_11278__$1;
(statearr_11291_11318[(2)] = null);

(statearr_11291_11318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (9))){
var inst_11238 = (state_11278[(8)]);
var inst_11254 = cljs.core.vec.call(null,inst_11238);
var state_11278__$1 = state_11278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11278__$1,(11),out,inst_11254);
} else {
if((state_val_11279 === (5))){
var inst_11239 = (state_11278[(7)]);
var inst_11246 = (state_11278[(10)]);
var inst_11242 = (state_11278[(9)]);
var inst_11246__$1 = f.call(null,inst_11242);
var inst_11247 = cljs.core._EQ_.call(null,inst_11246__$1,inst_11239);
var inst_11248 = cljs.core.keyword_identical_QMARK_.call(null,inst_11239,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11249 = (inst_11247) || (inst_11248);
var state_11278__$1 = (function (){var statearr_11292 = state_11278;
(statearr_11292[(10)] = inst_11246__$1);

return statearr_11292;
})();
if(cljs.core.truth_(inst_11249)){
var statearr_11293_11319 = state_11278__$1;
(statearr_11293_11319[(1)] = (8));

} else {
var statearr_11294_11320 = state_11278__$1;
(statearr_11294_11320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (14))){
var inst_11271 = (state_11278[(2)]);
var inst_11272 = cljs.core.async.close_BANG_.call(null,out);
var state_11278__$1 = (function (){var statearr_11296 = state_11278;
(statearr_11296[(13)] = inst_11271);

return statearr_11296;
})();
var statearr_11297_11321 = state_11278__$1;
(statearr_11297_11321[(2)] = inst_11272);

(statearr_11297_11321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (10))){
var inst_11261 = (state_11278[(2)]);
var state_11278__$1 = state_11278;
var statearr_11298_11322 = state_11278__$1;
(statearr_11298_11322[(2)] = inst_11261);

(statearr_11298_11322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (8))){
var inst_11246 = (state_11278[(10)]);
var inst_11242 = (state_11278[(9)]);
var inst_11238 = (state_11278[(8)]);
var inst_11251 = inst_11238.push(inst_11242);
var tmp11295 = inst_11238;
var inst_11238__$1 = tmp11295;
var inst_11239 = inst_11246;
var state_11278__$1 = (function (){var statearr_11299 = state_11278;
(statearr_11299[(14)] = inst_11251);

(statearr_11299[(7)] = inst_11239);

(statearr_11299[(8)] = inst_11238__$1);

return statearr_11299;
})();
var statearr_11300_11323 = state_11278__$1;
(statearr_11300_11323[(2)] = null);

(statearr_11300_11323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6680__auto___11309,out))
;
return ((function (switch__6618__auto__,c__6680__auto___11309,out){
return (function() {
var cljs$core$async$state_machine__6619__auto__ = null;
var cljs$core$async$state_machine__6619__auto____0 = (function (){
var statearr_11304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11304[(0)] = cljs$core$async$state_machine__6619__auto__);

(statearr_11304[(1)] = (1));

return statearr_11304;
});
var cljs$core$async$state_machine__6619__auto____1 = (function (state_11278){
while(true){
var ret_value__6620__auto__ = (function (){try{while(true){
var result__6621__auto__ = switch__6618__auto__.call(null,state_11278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6621__auto__;
}
break;
}
}catch (e11305){if((e11305 instanceof Object)){
var ex__6622__auto__ = e11305;
var statearr_11306_11324 = state_11278;
(statearr_11306_11324[(5)] = ex__6622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11325 = state_11278;
state_11278 = G__11325;
continue;
} else {
return ret_value__6620__auto__;
}
break;
}
});
cljs$core$async$state_machine__6619__auto__ = function(state_11278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6619__auto____1.call(this,state_11278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6619__auto____0;
cljs$core$async$state_machine__6619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6619__auto____1;
return cljs$core$async$state_machine__6619__auto__;
})()
;})(switch__6618__auto__,c__6680__auto___11309,out))
})();
var state__6682__auto__ = (function (){var statearr_11307 = f__6681__auto__.call(null);
(statearr_11307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6680__auto___11309);

return statearr_11307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6682__auto__);
});})(c__6680__auto___11309,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map