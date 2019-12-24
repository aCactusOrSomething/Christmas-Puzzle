{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.dF(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.c0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.c0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.c0(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={bP:function bP(){},aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},ad:function ad(){},
a9:function(a){var u,t=H.n(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
dr:function(a){return v.types[H.k(a)]},
dZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.u(a).$ibQ},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.f(H.cr(a))
return u},
Z:function(a){return H.cZ(a)+H.bX(H.R(a),0,null)},
cZ:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.u(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.o||!!l.$ian){r=C.e(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.f.R(t,0)===36){if(1>n)H.at(P.bS(1,m))
if(n>n)H.at(P.bS(n,m))
t=t.substring(1,n)}return H.a9(t)},
ds:function(a){throw H.f(H.cr(a))},
a6:function(a,b){if(a==null)J.cT(a)
throw H.f(H.c1(a,b))},
c1:function(a,b){var u,t,s,r="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.H(!0,b,r,null)
u=J.cx(a)
t=H.k(u.gi(a))
if(!(b<0)){if(typeof t!=="number")return H.ds(t)
s=b>=t}else s=!0
if(s){u=H.k(t==null?u.gi(a):t)
return new P.aF(u,!0,b,r,"Index out of range")}return P.bS(b,r)},
cr:function(a){return new P.H(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.ak()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cF})
u.name=""}else u.toString=H.cF
return u},
cF:function(){return J.au(this.dartException)},
at:function(a){throw H.f(a)},
dE:function(a){throw H.f(P.ce(a))},
B:function(a){var u,t,s,r,q,p
a=H.dC(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.S([],[P.w])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
aY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ci:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ch:function(a,b){return new H.aM(a,b==null?null:b.method)},
bR:function(a,b){var u=b==null,t=u?null:b.method
return new H.aK(a,t,u?null:b.receiver)},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.bK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.p.T(t,16)&8191)===10)switch(s){case 438:return f.$1(H.bR(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ch(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.cH()
q=$.cI()
p=$.cJ()
o=$.cK()
n=$.cN()
m=$.cO()
l=$.cM()
$.cL()
k=$.cQ()
j=$.cP()
i=r.j(u)
if(i!=null)return f.$1(H.bR(H.n(u),i))
else{i=q.j(u)
if(i!=null){i.method="call"
return f.$1(H.bR(H.n(u),i))}else{i=p.j(u)
if(i==null){i=o.j(u)
if(i==null){i=n.j(u)
if(i==null){i=m.j(u)
if(i==null){i=l.j(u)
if(i==null){i=o.j(u)
if(i==null){i=k.j(u)
if(i==null){i=j.j(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ch(H.n(u),i))}}return f.$1(new H.b0(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.al()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.H(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.al()
return a},
a5:function(a){var u
if(a==null)return new H.ap(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ap(a)},
dw:function(a,b,c,d,e,f){H.h(a,"$ibM")
switch(H.k(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.bb("Unsupported number of arguments for wrapped closure"))},
ar:function(a,b){var u
H.k(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.dw)
a.$identity=u
return u},
cX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.aR().constructor.prototype):Object.create(new H.ab(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.A
if(typeof t!=="number")return t.k()
$.A=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.cd(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.dr,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.cc:H.bL
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cd(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
cU:function(a,b,c,d){var u=H.bL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
cd:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cW(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cU(t,!r,u,b)
if(t===0){r=$.A
if(typeof r!=="number")return r.k()
$.A=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.T
return new Function(r+H.e(q==null?$.T=H.az("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.A
if(typeof r!=="number")return r.k()
$.A=r+1
o+=r
r="return function("+o+"){return this."
q=$.T
return new Function(r+H.e(q==null?$.T=H.az("self"):q)+"."+H.e(u)+"("+o+");}")()},
cV:function(a,b,c,d){var u=H.bL,t=H.cc
switch(b?-1:a){case 0:throw H.f(new H.aP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cW:function(a,b){var u,t,s,r,q,p,o,n=$.T
if(n==null)n=$.T=H.az("self")
u=$.cb
if(u==null)u=$.cb=H.az("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.cV(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.A
if(typeof u!=="number")return u.k()
$.A=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.A
if(typeof u!=="number")return u.k()
$.A=u+1
return new Function(n+u+"}")()},
c0:function(a,b,c,d,e,f,g){return H.cX(a,b,H.k(c),d,!!e,!!f,g)},
bL:function(a){return a.a},
cc:function(a){return a.c},
az:function(a){var u,t,s,r=new H.ab("self","target","receiver","name"),q=J.cg(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
dj:function(a){if(a==null)H.df("boolean expression must not be null")
return a},
n:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.F(a,"String"))},
dV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.F(a,"bool"))},
k:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.F(a,"int"))},
dB:function(a,b){throw H.f(H.F(a,H.a9(H.n(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.dB(a,b)},
c5:function(a){if(a==null)return a
if(!!J.u(a).$ip)return a
throw H.f(H.F(a,"List<dynamic>"))},
cw:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.k(u)]
else return a.$S()}return},
as:function(a,b){var u
if(typeof a=="function")return!0
u=H.cw(J.u(a))
if(u==null)return!1
return H.cl(u,null,b,null)},
d:function(a,b){var u,t
if(a==null)return a
if($.bV)return a
$.bV=!0
try{if(H.as(a,b))return a
u=H.bI(b)
t=H.F(a,u)
throw H.f(t)}finally{$.bV=!1}},
c2:function(a,b){if(a!=null&&!H.c_(a,b))H.at(H.F(a,H.bI(b)))
return a},
F:function(a,b){return new H.aZ("TypeError: "+P.aD(a)+": type '"+H.dd(a)+"' is not a subtype of type '"+b+"'")},
dd:function(a){var u,t=J.u(a)
if(!!t.$iU){u=H.cw(t)
if(u!=null)return H.bI(u)
return"Closure"}return H.Z(a)},
df:function(a){throw H.f(new H.b2(a))},
dF:function(a){throw H.f(new P.aB(H.n(a)))},
cz:function(a){return v.getIsolateTag(a)},
S:function(a,b){a.$ti=b
return a},
R:function(a){if(a==null)return
return a.$ti},
dY:function(a,b,c){return H.a8(a["$a"+H.e(c)],H.R(b))},
dq:function(a,b,c,d){var u
H.n(c)
H.k(d)
u=H.a8(a["$a"+H.e(c)],H.R(b))
return u==null?null:u[d]},
v:function(a,b){var u
H.k(b)
u=H.R(a)
return u==null?null:u[b]},
bI:function(a){return H.M(a,null)},
M:function(a,b){var u,t
H.bY(b,"$ip",[P.w],"$ap")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.a9(a[0].name)+H.bX(a,1,b)
if(typeof a=="function")return H.a9(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.k(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a6(b,t)
return H.e(b[t])}if('func' in a)return H.d6(a,b)
if('futureOr' in a)return"FutureOr<"+H.M("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
d6:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.w]
H.bY(a0,"$ip",b,"$ap")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.S([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.b.H(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.a6(a0,n)
p=C.f.k(p,a0[n])
m=u[q]
if(m!=null&&m!==P.i)p+=" extends "+H.M(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.M(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.M(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.M(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.dn(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.n(b[h])
j=j+i+H.M(e[d],a0)+(" "+H.e(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
bX:function(a,b,c){var u,t,s,r,q,p
H.bY(c,"$ip",[P.w],"$ap")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.M(p,c)}return"<"+u.h(0)+">"},
a8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bZ:function(a,b,c,d){var u,t
H.n(b)
H.c5(c)
H.n(d)
if(a==null)return!1
u=H.R(a)
t=J.u(a)
if(t[b]==null)return!1
return H.cq(H.a8(t[d],u),null,c,null)},
bY:function(a,b,c,d){H.n(b)
H.c5(c)
H.n(d)
if(a==null)return a
if(H.bZ(a,b,c,d))return a
throw H.f(H.F(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.a9(b.substring(2))+H.bX(c,0,null),v.mangledGlobalNames)))},
cq:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.z(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.z(a[t],b,c[t],d))return!1
return!0},
dW:function(a,b,c){return a.apply(b,H.a8(J.u(b)["$a"+H.e(c)],H.R(b)))},
cB:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="i"||a.name==="l"||a===-1||a===-2||H.cB(u)}return!1},
c_:function(a,b){var u,t
if(a==null)return b==null||b.name==="i"||b.name==="l"||b===-1||b===-2||H.cB(b)
if(b==null||b===-1||b.name==="i"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.c_(a,"type" in b?b.type:null))return!0
if('func' in b)return H.as(a,b)}u=J.u(a).constructor
t=H.R(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.z(u,null,b,null)},
m:function(a,b){if(a!=null&&!H.c_(a,b))throw H.f(H.F(a,H.bI(b)))
return a},
z:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="i"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="i"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.z(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="l")return!0
if('func' in c)return H.cl(a,b,c,d)
if('func' in a)return c.name==="bM"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.z("type" in a?a.type:l,b,s,d)
else if(H.z(a,b,s,d))return!0
else{if(!('$i'+"W" in t.prototype))return!1
r=t.prototype["$a"+"W"]
q=H.a8(r,u?a.slice(1):l)
return H.z(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.cq(H.a8(m,u),b,p,d)},
cl:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.z(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.z(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.z(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.z(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.dz(h,b,g,d)},
dz:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.z(c[s],d,a[s],b))return!1}return!0},
dX:function(a,b,c){Object.defineProperty(a,H.n(b),{value:c,enumerable:false,writable:true,configurable:true})},
dx:function(a){var u,t,s,r,q=H.n($.cA.$1(a)),p=$.bx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.n($.cp.$2(a,q))
if(q!=null){p=$.bx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bH(u)
$.bx[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bD[q]=u
return u}if(s==="-"){r=H.bH(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.cD(a,u)
if(s==="*")throw H.f(P.cj(q))
if(v.leafTags[q]===true){r=H.bH(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.cD(a,u)},
cD:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.c6(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bH:function(a){return J.c6(a,!1,null,!!a.$ibQ)},
dy:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bH(u)
else return J.c6(u,c,null,null)},
du:function(){if(!0===$.c3)return
$.c3=!0
H.dv()},
dv:function(){var u,t,s,r,q,p,o,n
$.bx=Object.create(null)
$.bD=Object.create(null)
H.dt()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cE.$1(q)
if(p!=null){o=H.dy(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
dt:function(){var u,t,s,r,q,p,o=C.i()
o=H.Q(C.j,H.Q(C.k,H.Q(C.d,H.Q(C.d,H.Q(C.l,H.Q(C.m,H.Q(C.n(C.e),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.cA=new H.bA(r)
$.cp=new H.bB(q)
$.cE=new H.bC(p)},
Q:function(a,b){return a(b)||b},
dC:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aX:function aX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aM:function aM(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a},
bK:function bK(a){this.a=a},
ap:function ap(a){this.a=a
this.b=null},
U:function U(){},
aW:function aW(){},
aR:function aR(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(a){this.a=a},
aP:function aP(a){this.a=a},
b2:function b2(a){this.a=a},
bA:function bA(a){this.a=a},
bB:function bB(a){this.a=a},
bC:function bC(a){this.a=a},
ai:function ai(){},
ag:function ag(){},
ah:function ah(){},
aj:function aj(){},
a0:function a0(){},
a1:function a1(){},
dn:function(a){return J.cg(H.S(a?Object.keys(a):[],[null]))},
dA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
c6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bz:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.c3==null){H.du()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.cj("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.c8()]
if(r!=null)return r
r=H.dx(a)
if(r!=null)return r
if(typeof a=="function")return C.q
u=Object.getPrototypeOf(a)
if(u==null)return C.h
if(u===Object.prototype)return C.h
if(typeof s=="function"){Object.defineProperty(s,$.c8(),{value:C.c,enumerable:false,writable:true,configurable:true})
return C.c}return C.c},
cg:function(a){H.c5(a)
a.fixed$length=Array
return a},
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ae.prototype
return J.aH.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.aI.prototype
if(typeof a=="boolean")return J.aG.prototype
if(a.constructor==Array)return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.i)return a
return J.bz(a)},
cx:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.i)return a
return J.bz(a)},
dp:function(a){if(a==null)return a
if(a.constructor==Array)return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.i)return a
return J.bz(a)},
cy:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.i)return a
return J.bz(a)},
cR:function(a,b,c,d){return J.cy(a).P(a,b,c,d)},
cS:function(a){return J.dp(a).gJ(a)},
cT:function(a){return J.cx(a).gi(a)},
au:function(a){return J.u(a).h(a)},
q:function q(){},
aG:function aG(){},
aI:function aI(){},
af:function af(){},
aN:function aN(){},
an:function an(){},
L:function L(){},
K:function K(a){this.$ti=a},
bO:function bO(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aJ:function aJ(){},
ae:function ae(){},
aH:function aH(){},
X:function X(){}},P={
d0:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.dg()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ar(new P.b4(s),1)).observe(u,{childList:true})
return new P.b3(s,u,t)}else if(self.setImmediate!=null)return P.dh()
return P.di()},
d1:function(a){self.scheduleImmediate(H.ar(new P.b5(H.d(a,{func:1,ret:-1})),0))},
d2:function(a){self.setImmediate(H.ar(new P.b6(H.d(a,{func:1,ret:-1})),0))},
d3:function(a){H.d(a,{func:1,ret:-1})
P.d5(0,a)},
d5:function(a,b){var u=new P.bp()
u.O(a,b)
return u},
d4:function(a,b){var u,t,s
b.a=1
try{a.L(new P.bd(b),new P.be(b),null)}catch(s){u=H.aa(s)
t=H.a5(s)
P.dD(new P.bf(b,u,t))}},
ck:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iy")
if(u>=4){t=b.t()
b.a=a.a
b.c=a.c
P.a_(b,t)}else{t=H.h(b.c,"$iD")
b.a=2
b.c=a
a.G(t)}},
a_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$io")
g=g.b
r=s.a
q=s.b
g.toString
P.bt(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.a_(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.h(o,"$io")
g=g.b
r=o.a
q=o.b
g.toString
P.bt(i,i,g,r,q)
return}l=$.j
if(l!=n)$.j=n
else l=i
g=b.c
if(g===8)new P.bj(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.bi(u,b,o).$0()}else if((g&2)!==0)new P.bh(h,u,b).$0()
if(l!=null)$.j=l
g=u.b
if(!!J.u(g).$iW){if(g.a>=4){k=H.h(q.c,"$iD")
q.c=null
b=q.l(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.ck(g,q)
return}}j=b.b
k=H.h(j.c,"$iD")
j.c=null
b=j.l(k)
g=u.a
r=u.b
if(!g){H.m(r,H.v(j,0))
j.a=4
j.c=r}else{H.h(r,"$io")
j.a=8
j.c=r}h.a=j
g=j}},
d9:function(a,b){if(H.as(a,{func:1,args:[P.i,P.t]}))return H.d(a,{func:1,ret:null,args:[P.i,P.t]})
if(H.as(a,{func:1,args:[P.i]}))return H.d(a,{func:1,ret:null,args:[P.i]})
throw H.f(P.ca(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
d8:function(){var u,t
for(;u=$.P,u!=null;){$.a3=null
t=u.b
$.P=t
if(t==null)$.a2=null
u.a.$0()}},
dc:function(){$.bW=!0
try{P.d8()}finally{$.a3=null
$.bW=!1
if($.P!=null)$.c9().$1(P.cs())}},
co:function(a){var u=new P.ao(H.d(a,{func:1,ret:-1}))
if($.P==null){$.P=$.a2=u
if(!$.bW)$.c9().$1(P.cs())}else $.a2=$.a2.b=u},
db:function(a){var u,t,s
H.d(a,{func:1,ret:-1})
u=$.P
if(u==null){P.co(a)
$.a3=$.a2
return}t=new P.ao(a)
s=$.a3
if(s==null){t.b=u
$.P=$.a3=t}else{t.b=s.b
$.a3=s.b=t
if(t.b==null)$.a2=t}},
dD:function(a){var u,t=null,s={func:1,ret:-1}
H.d(a,s)
u=$.j
if(C.a===u){P.bv(t,t,C.a,a)
return}u.toString
P.bv(t,t,u,H.d(u.I(a),s))},
bt:function(a,b,c,d,e){var u={}
u.a=d
P.db(new P.bu(u,e))},
cm:function(a,b,c,d,e){var u,t
H.d(d,{func:1,ret:e})
t=$.j
if(t===c)return d.$0()
$.j=c
u=t
try{t=d.$0()
return t}finally{$.j=u}},
cn:function(a,b,c,d,e,f,g){var u,t
H.d(d,{func:1,ret:f,args:[g]})
H.m(e,g)
t=$.j
if(t===c)return d.$1(e)
$.j=c
u=t
try{t=d.$1(e)
return t}finally{$.j=u}},
da:function(a,b,c,d,e,f,g,h,i){var u,t
H.d(d,{func:1,ret:g,args:[h,i]})
H.m(e,h)
H.m(f,i)
t=$.j
if(t===c)return d.$2(e,f)
$.j=c
u=t
try{t=d.$2(e,f)
return t}finally{$.j=u}},
bv:function(a,b,c,d){var u
H.d(d,{func:1,ret:-1})
u=C.a!==c
if(u)d=!(!u||!1)?c.I(d):c.U(d,-1)
P.co(d)},
b4:function b4(a){this.a=a},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a){this.a=a},
b6:function b6(a){this.a=a},
bp:function bp(){},
bq:function bq(a,b){this.a=a
this.b=b},
D:function D(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
y:function y(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bc:function bc(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
bd:function bd(a){this.a=a},
be:function be(a){this.a=a},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a){this.a=a},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a){this.a=a
this.b=null},
aS:function aS(){},
aU:function aU(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
aT:function aT(){},
o:function o(a,b){this.a=a
this.b=b},
bs:function bs(){},
bu:function bu(a,b){this.a=a
this.b=b},
bl:function bl(){},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function(a,b,c){var u,t
if(P.d7(a))return b+"..."+c
u=new P.am(b)
C.b.H($.a4,a)
try{t=u
t.a=P.d_(t.a,a,", ")}finally{if(0>=$.a4.length)return H.a6($.a4,-1)
$.a4.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
d7:function(a){var u,t
for(u=$.a4.length,t=0;t<u;++t)if(a===$.a4[t])return!0
return!1},
Y:function Y(){},
cY:function(a){if(a instanceof H.U)return a.h(0)
return"Instance of '"+H.Z(a)+"'"},
d_:function(a,b,c){var u=J.cS(b)
if(!u.n())return a
if(c.length===0){do a+=H.e(u.gm())
while(u.n())}else{a+=H.e(u.gm())
for(;u.n();)a=a+c+H.e(u.gm())}return a},
aD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cY(a)},
ca:function(a,b,c){return new P.H(!0,a,b,c)},
bS:function(a,b){return new P.aO(!0,a,b,"Value not in range")},
bT:function(a){return new P.b1(a)},
cj:function(a){return new P.b_(a)},
ce:function(a){return new P.aA(a)},
c7:function(a){H.dA(H.e(a))},
G:function G(){},
by:function by(){},
N:function N(){},
ay:function ay(){},
ak:function ak(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b1:function b1(a){this.a=a},
b_:function b_(a){this.a=a},
aA:function aA(a){this.a=a},
al:function al(){},
aB:function aB(a){this.a=a},
bb:function bb(a){this.a=a},
E:function E(){},
p:function p(){},
l:function l(){},
a7:function a7(){},
i:function i(){},
t:function t(){},
w:function w(){},
am:function am(a){this.a=a},
dl:function(a){var u,t=J.u(a)
if(!!t.$iO){u=t.gu(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}t=a.data
a.width
return new P.br(t)},
br:function br(a){this.a=a}},W={
b9:function(a,b,c,d,e){var u=W.de(new W.ba(c),W.a),t=u!=null
if(t&&!0){H.d(u,{func:1,args:[W.a]})
if(t)J.cR(a,b,u,!1)}return new W.b8(a,b,u,!1,[e])},
de:function(a,b){var u
H.d(a,{func:1,ret:-1,args:[b]})
u=$.j
if(u===C.a)return a
return u.V(a,b)},
c:function c(){},
av:function av(){},
aw:function aw(){},
ac:function ac(){},
I:function I(){},
V:function V(){},
aC:function aC(){},
b:function b(){},
a:function a(){},
J:function J(){},
aE:function aE(){},
O:function O(){},
r:function r(){},
x:function x(){},
aQ:function aQ(){},
C:function C(){},
b7:function b7(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b8:function b8(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ba:function ba(a){this.a=a}},F={
cC:function(){var u,t,s,r,q=[P.G]
$.bw=H.S([H.S([!1,!1,!1],q),H.S([!1,!1,!1],q),H.S([!1,!1,!1],q)],[[P.p,P.G]])
q=document
$.cv=H.h(q.querySelector("#output"),"$iV")
u=q.createElement("canvas")
u.width=1200
u.height=800
$.aq=u
t=u.getContext("2d")
t.fillStyle="rgba(255, 255, 255, 255)"
t.fillRect(0,0,1200,800)
t.fillStyle="rgba(61, 163, 90, 1)"
t.fillRect(171.42857142857142,160,171.42857142857142,160)
t.fillStyle="rgba(46, 122, 67, 1)"
t.fillRect(514.2857142857143,160,171.42857142857142,160)
t.fillStyle="rgba(4, 168, 133, 1)"
t.fillRect(857.1428571428571,160,171.42857142857142,160)
t.fillStyle="rgba(29, 87, 46, 1)"
t.fillRect(171.42857142857142,480,171.42857142857142,160)
t.fillStyle="rgba(22, 69, 36, 1)"
t.fillRect(514.2857142857143,480,171.42857142857142,160)
t.fillStyle="rgba(6, 255, 201, 1)"
t.fillRect(857.1428571428571,480,171.42857142857142,160)
$.cv.appendChild($.aq)
q=$.aq
q.toString
s=W.r
r={func:1,ret:-1,args:[s]}
W.b9(q,"mousedown",H.d(new F.bE(t),r),!1,s)
q=$.aq
q.toString
W.b9(q,"mousemove",H.d(new F.bF(t),r),!1,s)
q=$.aq
q.toString
W.b9(q,"mouseup",H.d(new F.bG(t),r),!1,s)},
dm:function(a,b){var u,t,s,r,q
if($.c4){u=b.clientX
t=b.clientY
s=P.dl(a.getImageData(H.k(u),H.k(t),1,1))
for(u=J.cy(s),r=0,q=0;q<3;++q){t=u.gu(s)
if(q>=t.length)return H.a6(t,q)
if(t[q]===0)++r}if(r>=3){P.c7("collision detected!!!")
window.alert("It seems you crossed the lines. please restart to try again.")
$.cu=!0}a.lineTo(b.clientX,b.clientY)
a.stroke()}},
ct:function(a,b,c){if(typeof b!=="number")return b.w()
if(b>=160&&b<320){if(typeof a!=="number")return a.w()
if(a>=171.42857142857142&&a<342.85714285714283)return 1
else if(a>=514.2857142857143&&a<685.7142857142857)return 2
else if(a>=857.1428571428571&&a<1028.5714285714287)return 3}else if(b>=480&&b<640){if(typeof a!=="number")return a.w()
if(a>=171.42857142857142&&a<342.85714285714283)return 4
else if(a>=514.2857142857143&&a<685.7142857142857)return 5
else if(a>=857.1428571428571&&a<1028.5714285714287)return 6}return 0},
dk:function(){var u,t,s
P.c7($.bw)
if($.cu)return!1
for(u=$.bw,t=0;t<3;++t)for(s=0;s<3;++s)if(!u[t][s])return!1
return!0},
bE:function bE(a){this.a=a},
bF:function bF(a){this.a=a},
bG:function bG(a){this.a=a}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bP.prototype={}
J.q.prototype={
h:function(a){return"Instance of '"+H.Z(a)+"'"}}
J.aG.prototype={
h:function(a){return String(a)},
$iG:1}
J.aI.prototype={
h:function(a){return"null"}}
J.af.prototype={
h:function(a){return String(a)}}
J.aN.prototype={}
J.an.prototype={}
J.L.prototype={
h:function(a){var u=a[$.cG()]
if(u==null)return this.N(a)
return"JavaScript function for "+H.e(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibM:1}
J.K.prototype={
H:function(a,b){H.m(b,H.v(a,0))
if(!!a.fixed$length)H.at(P.bT("add"))
a.push(b)},
h:function(a){return P.cf(a,"[","]")},
gJ:function(a){return new J.ax(a,a.length,[H.v(a,0)])},
gi:function(a){return a.length},
A:function(a,b,c){H.m(!0,H.v(a,0))
if(!!a.immutable$list)H.at(P.bT("indexed set"))
if(b<a.length?b<0:!0)throw H.f(H.c1(a,b))
a[b]=!0},
$ibN:1,
$ip:1}
J.bO.prototype={}
J.ax.prototype={
gm:function(){return this.d},
n:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.dE(s))
u=t.c
if(u>=r){t.sF(null)
return!1}t.sF(s[u]);++t.c
return!0},
sF:function(a){this.d=H.m(a,H.v(this,0))}}
J.aJ.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
T:function(a,b){var u
if(a>0)u=this.S(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
S:function(a,b){return b>31?0:a>>>b},
$ia7:1}
J.ae.prototype={$iE:1}
J.aH.prototype={}
J.X.prototype={
R:function(a,b){if(b>=a.length)throw H.f(H.c1(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.f(P.ca(b,null,null))
return a+b},
h:function(a){return a},
gi:function(a){return a.length},
$iw:1}
H.aL.prototype={
gm:function(){return this.d},
n:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(P.ce(s))
u=t.c
if(u>=r){t.sB(null)
return!1}t.sB(s[u]);++t.c
return!0},
sB:function(a){this.d=H.m(a,H.v(this,0))}}
H.ad.prototype={}
H.aX.prototype={
j:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.aM.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aK.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.b0.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bK.prototype={
$1:function(a){if(!!J.u(a).$iN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:4}
H.ap.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$it:1}
H.U.prototype={
h:function(a){return"Closure '"+H.Z(this).trim()+"'"},
$ibM:1,
ga1:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aW.prototype={}
H.aR.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.a9(u)+"'"}}
H.ab.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.Z(u)+"'")}}
H.aZ.prototype={
h:function(a){return this.a}}
H.aP.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.b2.prototype={
h:function(a){return"Assertion failed: "+P.aD(this.a)}}
H.bA.prototype={
$1:function(a){return this.a(a)},
$S:4}
H.bB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.bC.prototype={
$1:function(a){return this.a(H.n(a))},
$S:7}
H.ai.prototype={}
H.ag.prototype={
gi:function(a){return a.length},
$ibQ:1,
$abQ:function(){}}
H.ah.prototype={
$aad:function(){return[P.E]},
$aY:function(){return[P.E]},
$ibN:1,
$abN:function(){return[P.E]},
$ip:1,
$ap:function(){return[P.E]}}
H.aj.prototype={
gi:function(a){return a.length},
$idS:1}
H.a0.prototype={}
H.a1.prototype={}
P.b4.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:5}
P.b3.prototype={
$1:function(a){var u,t
this.a.a=H.d(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:8}
P.b5.prototype={
$0:function(){this.a.$0()},
$S:0}
P.b6.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bp.prototype={
O:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ar(new P.bq(this,b),0),a)
else throw H.f(P.bT("`setTimeout()` not found."))}}
P.bq.prototype={
$0:function(){this.b.$0()},
$S:1}
P.D.prototype={
X:function(a){if(this.c!==6)return!0
return this.b.b.v(H.d(this.d,{func:1,ret:P.G,args:[P.i]}),a.a,P.G,P.i)},
W:function(a){var u=this.e,t=P.i,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.as(u,{func:1,args:[P.i,P.t]}))return H.c2(r.Y(u,a.a,a.b,null,t,P.t),s)
else return H.c2(r.v(H.d(u,{func:1,args:[P.i]}),a.a,null,t),s)}}
P.y.prototype={
L:function(a,b,c){var u,t,s,r=H.v(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.j
if(u!==C.a){u.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.d9(b,u)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.y($.j,[c])
s=b==null?1:3
this.C(new P.D(t,s,a,b,[r,c]))
return t},
a0:function(a,b){return this.L(a,null,b)},
C:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$iD")
t.c=a}else{if(s===2){u=H.h(t.c,"$iy")
s=u.a
if(s<4){u.C(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.bv(null,null,s,H.d(new P.bc(t,a),{func:1,ret:-1}))}},
G:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$iD")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iy")
u=q.a
if(u<4){q.G(a)
return}p.a=u
p.c=q.c}o.a=p.l(a)
u=p.b
u.toString
P.bv(null,null,u,H.d(new P.bg(o,p),{func:1,ret:-1}))}},
t:function(){var u=H.h(this.c,"$iD")
this.c=null
return this.l(u)},
l:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
D:function(a){var u,t,s=this,r=H.v(s,0)
H.c2(a,{futureOr:1,type:r})
u=s.$ti
if(H.bZ(a,"$iW",u,"$aW"))if(H.bZ(a,"$iy",u,null))P.ck(a,s)
else P.d4(a,s)
else{t=s.t()
H.m(a,r)
s.a=4
s.c=a
P.a_(s,t)}},
E:function(a,b){var u,t=this
H.h(b,"$it")
u=t.t()
t.a=8
t.c=new P.o(a,b)
P.a_(t,u)},
$iW:1}
P.bc.prototype={
$0:function(){P.a_(this.a,this.b)},
$S:0}
P.bg.prototype={
$0:function(){P.a_(this.b,this.a.a)},
$S:0}
P.bd.prototype={
$1:function(a){var u=this.a
u.a=0
u.D(a)},
$S:5}
P.be.prototype={
$2:function(a,b){H.h(b,"$it")
this.a.E(a,b)},
$1:function(a){return this.$2(a,null)},
$S:9}
P.bf.prototype={
$0:function(){this.a.E(this.b,this.c)},
$S:0}
P.bj.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.K(H.d(s.d,{func:1}),null)}catch(r){u=H.aa(r)
t=H.a5(r)
if(o.d){s=H.h(o.a.a.c,"$io").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$io")
else q.b=new P.o(u,t)
q.a=!0
return}if(!!J.u(n).$iW){if(n instanceof P.y&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$io")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.a0(new P.bk(p),null)
s.a=!1}},
$S:1}
P.bk.prototype={
$1:function(a){return this.a},
$S:10}
P.bi.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.m(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.v(H.d(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aa(o)
t=H.a5(o)
s=n.a
s.b=new P.o(u,t)
s.a=!0}},
$S:1}
P.bh.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$io")
r=m.c
if(H.dj(r.X(u))&&r.e!=null){q=m.b
q.b=r.W(u)
q.a=!1}}catch(p){t=H.aa(p)
s=H.a5(p)
r=H.h(m.a.a.c,"$io")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.o(t,s)
n.a=!0}},
$S:1}
P.ao.prototype={}
P.aS.prototype={
gi:function(a){var u,t,s=this,r={},q=new P.y($.j,[P.E])
r.a=0
u=H.v(s,0)
t=H.d(new P.aU(r,s),{func:1,ret:-1,args:[u]})
H.d(new P.aV(r,q),{func:1,ret:-1})
W.b9(s.a,s.b,t,!1,u)
return q}}
P.aU.prototype={
$1:function(a){H.m(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.l,args:[H.v(this.b,0)]}}}
P.aV.prototype={
$0:function(){this.b.D(this.a.a)},
$S:0}
P.aT.prototype={}
P.o.prototype={
h:function(a){return H.e(this.a)},
$iN:1}
P.bs.prototype={$idT:1}
P.bu.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.ak():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u},
$S:0}
P.bl.prototype={
Z:function(a){var u,t,s,r=null
H.d(a,{func:1,ret:-1})
try{if(C.a===$.j){a.$0()
return}P.cm(r,r,this,a,-1)}catch(s){u=H.aa(s)
t=H.a5(s)
P.bt(r,r,this,u,H.h(t,"$it"))}},
a_:function(a,b,c){var u,t,s,r=null
H.d(a,{func:1,ret:-1,args:[c]})
H.m(b,c)
try{if(C.a===$.j){a.$1(b)
return}P.cn(r,r,this,a,b,-1,c)}catch(s){u=H.aa(s)
t=H.a5(s)
P.bt(r,r,this,u,H.h(t,"$it"))}},
U:function(a,b){return new P.bn(this,H.d(a,{func:1,ret:b}),b)},
I:function(a){return new P.bm(this,H.d(a,{func:1,ret:-1}))},
V:function(a,b){return new P.bo(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
K:function(a,b){H.d(a,{func:1,ret:b})
if($.j===C.a)return a.$0()
return P.cm(null,null,this,a,b)},
v:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.m(b,d)
if($.j===C.a)return a.$1(b)
return P.cn(null,null,this,a,b,c,d)},
Y:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.m(b,e)
H.m(c,f)
if($.j===C.a)return a.$2(b,c)
return P.da(null,null,this,a,b,c,d,e,f)}}
P.bn.prototype={
$0:function(){return this.a.K(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.bm.prototype={
$0:function(){return this.a.Z(this.b)},
$S:1}
P.bo.prototype={
$1:function(a){var u=this.c
return this.a.a_(this.b,H.m(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.Y.prototype={
gJ:function(a){return new H.aL(a,a.length,[H.dq(this,a,"Y",0)])},
h:function(a){return P.cf(a,"[","]")}}
P.G.prototype={}
P.by.prototype={}
P.N.prototype={}
P.ay.prototype={
h:function(a){return"Assertion failed"}}
P.ak.prototype={
h:function(a){return"Throw of null."}}
P.H.prototype={
gq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gp:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gq()+o+u
if(!q.a)return t
s=q.gp()
r=P.aD(q.b)
return t+s+": "+r}}
P.aO.prototype={
gq:function(){return"RangeError"},
gp:function(){return""}}
P.aF.prototype={
gq:function(){return"RangeError"},
gp:function(){var u,t=H.k(this.b)
if(typeof t!=="number")return t.a2()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gi:function(a){return this.f}}
P.b1.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b_.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aA.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aD(u)+"."}}
P.al.prototype={
h:function(a){return"Stack Overflow"},
$iN:1}
P.aB.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bb.prototype={
h:function(a){return"Exception: "+this.a}}
P.E.prototype={}
P.p.prototype={$ibN:1}
P.l.prototype={
h:function(a){return"null"}}
P.a7.prototype={}
P.i.prototype={constructor:P.i,$ii:1,
h:function(a){return"Instance of '"+H.Z(this)+"'"},
toString:function(){return this.h(this)}}
P.t.prototype={}
P.w.prototype={}
P.am.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.av.prototype={
h:function(a){return String(a)}}
W.aw.prototype={
h:function(a){return String(a)}}
W.ac.prototype={$iac:1}
W.I.prototype={
gi:function(a){return a.length}}
W.V.prototype={$iV:1}
W.aC.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName},
$ib:1}
W.a.prototype={$ia:1}
W.J.prototype={
P:function(a,b,c,d){return a.addEventListener(b,H.ar(H.d(c,{func:1,args:[W.a]}),1),!1)},
$iJ:1}
W.aE.prototype={
gi:function(a){return a.length}}
W.O.prototype={$iO:1,
gu:function(a){return a.data}}
W.r.prototype={$ir:1}
W.x.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.M(a):u}}
W.aQ.prototype={
gi:function(a){return a.length}}
W.C.prototype={}
W.b7.prototype={}
W.bU.prototype={}
W.b8.prototype={}
W.ba.prototype={
$1:function(a){return this.a.$1(H.h(a,"$ia"))},
$S:11}
P.br.prototype={$iO:1,
gu:function(a){return this.a}}
F.bE.prototype={
$1:function(a){var u,t,s
H.h(a,"$ir")
u=this.a
t=a.clientX
s=a.clientY
s=$.bJ=F.ct(H.k(t),H.k(s),u)
u.strokeStyle="rgba(0, 0, 0, 1)"
if(s>0&&s<=6){u.moveTo(a.clientX,a.clientY)
u.beginPath()
$.c4=!0}return},
$S:2}
F.bF.prototype={
$1:function(a){return F.dm(this.a,H.h(a,"$ir"))},
$S:2}
F.bG.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$ir")
u=$.c4=!1
t=a.clientX
s=a.clientY
r=F.ct(H.k(t),H.k(s),this.a)
if(r!==0?$.bJ!==0:u){u=$.bJ
t=$.bw
if(u<=3){--u
t.length
if(u<0)return H.a6(t,u)
C.b.A(t[u],r-4,!0)}else{u-=4
t.length
if(u>=3)return H.a6(t,u)
C.b.A(t[u],r-1,!0)}}$.bJ=0
if(F.dk()){P.c7("you win!!!")
window.alert("You Win!!!")}return},
$S:2};(function aliases(){var u=J.q.prototype
u.M=u.h
u=J.af.prototype
u.N=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"dg","d1",3)
u(P,"dh","d2",3)
u(P,"di","d3",3)
t(P,"cs","dc",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.i,null)
s(P.i,[H.bP,J.q,J.ax,H.aL,H.ad,H.aX,P.N,H.U,H.ap,P.bp,P.D,P.y,P.ao,P.aS,P.aT,P.o,P.bs,P.Y,P.G,P.a7,P.al,P.bb,P.p,P.l,P.t,P.w,P.am,P.br])
s(J.q,[J.aG,J.aI,J.af,J.K,J.aJ,J.X,H.ai,W.J,W.ac,W.aC,W.a,W.O])
s(J.af,[J.aN,J.an,J.L])
t(J.bO,J.K)
s(J.aJ,[J.ae,J.aH])
s(P.N,[H.aM,H.aK,H.b0,H.aZ,H.aP,P.ay,P.ak,P.H,P.b1,P.b_,P.aA,P.aB])
s(H.U,[H.bK,H.aW,H.bA,H.bB,H.bC,P.b4,P.b3,P.b5,P.b6,P.bq,P.bc,P.bg,P.bd,P.be,P.bf,P.bj,P.bk,P.bi,P.bh,P.aU,P.aV,P.bu,P.bn,P.bm,P.bo,W.ba,F.bE,F.bF,F.bG])
s(H.aW,[H.aR,H.ab])
t(H.b2,P.ay)
t(H.ag,H.ai)
t(H.a0,H.ag)
t(H.a1,H.a0)
t(H.ah,H.a1)
t(H.aj,H.ah)
t(P.bl,P.bs)
s(P.a7,[P.by,P.E])
s(P.H,[P.aO,P.aF])
t(W.x,W.J)
s(W.x,[W.b,W.I])
t(W.c,W.b)
s(W.c,[W.av,W.aw,W.V,W.aE,W.aQ])
t(W.C,W.a)
t(W.r,W.C)
t(W.b7,P.aS)
t(W.bU,W.b7)
t(W.b8,P.aT)
u(H.a0,P.Y)
u(H.a1,H.ad)})();(function constants(){C.o=J.q.prototype
C.b=J.K.prototype
C.p=J.ae.prototype
C.f=J.X.prototype
C.q=J.L.prototype
C.h=J.aN.prototype
C.c=J.an.prototype
C.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.i=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.n=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.k=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.l=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.d=function(hooks) { return hooks; }

C.a=new P.bl()})()
var v={mangledGlobalNames:{E:"int",by:"double",a7:"num",w:"String",G:"bool",l:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.l},{func:1,ret:-1},{func:1,ret:-1,args:[W.r]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.l,args:[,]},{func:1,args:[,P.w]},{func:1,args:[P.w]},{func:1,ret:P.l,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[,],opt:[P.t]},{func:1,ret:[P.y,,],args:[,]},{func:1,args:[W.a]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.A=0
$.T=null
$.cb=null
$.bV=!1
$.cA=null
$.cp=null
$.cE=null
$.bx=null
$.bD=null
$.c3=null
$.P=null
$.a2=null
$.a3=null
$.bW=!1
$.j=C.a
$.a4=[]
$.aq=null
$.cv=null
$.bw=null
$.c4=!1
$.bJ=0
$.cu=!1})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"dG","cG",function(){return H.cz("_$dart_dartClosure")})
u($,"dH","c8",function(){return H.cz("_$dart_js")})
u($,"dI","cH",function(){return H.B(H.aY({
toString:function(){return"$receiver$"}}))})
u($,"dJ","cI",function(){return H.B(H.aY({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"dK","cJ",function(){return H.B(H.aY(null))})
u($,"dL","cK",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dO","cN",function(){return H.B(H.aY(void 0))})
u($,"dP","cO",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dN","cM",function(){return H.B(H.ci(null))})
u($,"dM","cL",function(){return H.B(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dR","cQ",function(){return H.B(H.ci(void 0))})
u($,"dQ","cP",function(){return H.B(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"dU","c9",function(){return P.d0()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.q,CanvasPattern:J.q,DOMError:J.q,MediaError:J.q,NavigatorUserMediaError:J.q,OverconstrainedError:J.q,PositionError:J.q,SQLError:J.q,ArrayBufferView:H.ai,Uint8ClampedArray:H.aj,CanvasPixelArray:H.aj,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.av,HTMLAreaElement:W.aw,CanvasRenderingContext2D:W.ac,CDATASection:W.I,CharacterData:W.I,Comment:W.I,ProcessingInstruction:W.I,Text:W.I,HTMLDivElement:W.V,DOMException:W.aC,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,Window:W.J,DOMWindow:W.J,EventTarget:W.J,HTMLFormElement:W.aE,ImageData:W.O,MouseEvent:W.r,DragEvent:W.r,PointerEvent:W.r,WheelEvent:W.r,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,Attr:W.x,DocumentType:W.x,Node:W.x,HTMLSelectElement:W.aQ,CompositionEvent:W.C,FocusEvent:W.C,KeyboardEvent:W.C,TextEvent:W.C,TouchEvent:W.C,UIEvent:W.C})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Uint8ClampedArray:true,CanvasPixelArray:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,HTMLDivElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,ImageData:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false})
H.ag.$nativeSuperclassTag="ArrayBufferView"
H.a0.$nativeSuperclassTag="ArrayBufferView"
H.a1.$nativeSuperclassTag="ArrayBufferView"
H.ah.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.cC,[])
else F.cC([])})})()
//# sourceMappingURL=main.dart.js.map
