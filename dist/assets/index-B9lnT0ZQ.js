(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ha="170",kc=0,Ua=1,zc=2,Ds=1,$o=2,xn=3,Fn=0,Pe=1,Ne=2,Un=0,mi=1,Na=2,Fa=3,Oa=4,Gc=5,qn=100,Hc=101,Vc=102,Wc=103,Xc=104,Yc=200,qc=201,Kc=202,Zc=203,Er=204,br=205,Jc=206,$c=207,jc=208,Qc=209,tl=210,el=211,nl=212,il=213,sl=214,Tr=0,Ar=1,Cr=2,vi=3,Rr=4,Pr=5,Lr=6,Ir=7,jo=0,rl=1,al=2,Nn=0,ol=1,cl=2,ll=3,Qo=4,hl=5,ul=6,dl=7,tc=300,xi=301,Mi=302,Dr=303,Ur=304,Os=306,Hi=1e3,Ue=1001,Nr=1002,en=1003,fl=1004,ts=1005,Qe=1006,Gs=1007,Dn=1008,En=1009,ec=1010,nc=1011,Vi=1012,ua=1013,Zn=1014,Sn=1015,Yi=1016,da=1017,fa=1018,Si=1020,ic=35902,sc=1021,rc=1022,tn=1023,ac=1024,oc=1025,gi=1026,yi=1027,cc=1028,pa=1029,lc=1030,ma=1031,ga=1033,Ts=33776,As=33777,Cs=33778,Rs=33779,Fr=35840,Or=35841,Br=35842,kr=35843,zr=36196,Gr=37492,Hr=37496,Vr=37808,Wr=37809,Xr=37810,Yr=37811,qr=37812,Kr=37813,Zr=37814,Jr=37815,$r=37816,jr=37817,Qr=37818,ta=37819,ea=37820,na=37821,Ps=36492,ia=36494,sa=36495,hc=36283,ra=36284,aa=36285,oa=36286,pl=3200,ml=3201,uc=0,gl=1,Mn="",be="srgb",bi="srgb-linear",Bs="linear",re="srgb",jn=7680,Ba=519,_l=512,vl=513,xl=514,dc=515,Ml=516,Sl=517,yl=518,wl=519,ka=35044,za="300 es",yn=2e3,Us=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ga=1234567;const Bi=Math.PI/180,Wi=180/Math.PI;function Ai(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function _a(s,t){return(s%t+t)%t}function El(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function bl(s,t,e){return s!==t?(e-s)/(t-s):0}function ki(s,t,e){return(1-e)*s+e*t}function Tl(s,t,e,n){return ki(s,t,1-Math.exp(-e*n))}function Al(s,t=1){return t-Math.abs(_a(s,t*2)-t)}function Cl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Rl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Pl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ll(s,t){return s+Math.random()*(t-s)}function Il(s){return s*(.5-Math.random())}function Dl(s){s!==void 0&&(Ga=s);let t=Ga+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ul(s){return s*Bi}function Nl(s){return s*Wi}function Fl(s){return(s&s-1)===0&&s!==0}function Ol(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kl(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _t={DEG2RAD:Bi,RAD2DEG:Wi,generateUUID:Ai,clamp:ye,euclideanModulo:_a,mapLinear:El,inverseLerp:bl,lerp:ki,damp:Tl,pingpong:Al,smoothstep:Cl,smootherstep:Rl,randInt:Pl,randFloat:Ll,randFloatSpread:Il,seededRandom:Dl,degToRad:Ul,radToDeg:Nl,isPowerOfTwo:Fl,ceilPowerOfTwo:Ol,floorPowerOfTwo:Bl,setQuaternionFromProperEuler:kl,normalize:Ie,denormalize:fi};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,r,a,o,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],x=i[7],P=i[2],A=i[5],C=i[8];return r[0]=a*_+o*M+c*P,r[3]=a*m+o*S+c*A,r[6]=a*p+o*x+c*C,r[1]=l*_+h*M+u*P,r[4]=l*m+h*S+u*A,r[7]=l*p+h*x+u*C,r[2]=d*_+f*M+g*P,r[5]=d*m+f*S+g*A,r[8]=d*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Hs.makeScale(t,e)),this}rotate(t){return this.premultiply(Hs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Ht;function fc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zl(){const s=Ns("canvas");return s.style.display="block",s}const Ha={};function Fi(s){s in Ha||(Ha[s]=!0,console.warn(s))}function Gl(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mn?Bs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Va=[.64,.33,.3,.6,.15,.06],Wa=[.2126,.7152,.0722],Xa=[.3127,.329],Ya=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qa=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[bi]:{primaries:Va,whitePoint:Xa,transfer:Bs,toXYZ:Ya,fromXYZ:qa,luminanceCoefficients:Wa,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Va,whitePoint:Xa,transfer:re,toXYZ:Ya,fromXYZ:qa,luminanceCoefficients:Wa,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let Qn;class Wl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Ns("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xl=0;class pc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Vs(i[a].image)):r.push(Vs(i[a]))}else r=Vs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yl=0;class Fe extends Ti{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Ue,i=Ue,r=Qe,a=Dn,o=tn,c=En,l=Fe.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Ai(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=tc;Fe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(f+1)/2,P=(p+1)/2,A=(h+d)/4,C=(u+_)/4,R=(g+m)/4;return S>x&&S>P?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=C/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=R/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=R/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ql extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mc extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kl extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),A=Math.atan2(P,p*M);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const x=o*M;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new I,Ka=new qi;class Ki{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(t.matrixWorld),this.union(es)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),ns.subVectors(this.max,Li),ti.subVectors(t.a,Li),ei.subVectors(t.b,Li),ni.subVectors(t.c,Li),An.subVectors(ei,ti),Cn.subVectors(ni,ei),kn.subVectors(ti,ni);let e=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-kn.z,kn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,kn.z,0,-kn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-kn.y,kn.x,0];return!Xs(e,ti,ei,ni,ns)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,ti,ei,ni,ns))?!1:(is.crossVectors(An,Cn),e=[is.x,is.y,is.z],Xs(e,ti,ei,ni,ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new I,new I,new I,new I,new I,new I,new I,new I],Ze=new I,es=new Ki,ti=new I,ei=new I,ni=new I,An=new I,Cn=new I,kn=new I,Li=new I,ns=new I,is=new I,zn=new I;function Xs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zn.fromArray(s,r);const o=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),c=t.dot(zn),l=e.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Zl=new Ki,Ii=new I,Ys=new I;class va{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(Ys)),this.expandByPoint(Ii.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new I,qs=new I,ss=new I,Rn=new I,Ks=new I,rs=new I,Zs=new I;class Jl{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qs.copy(t).add(e).multiplyScalar(.5),ss.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ss),o=Rn.dot(this.direction),c=-Rn.dot(ss),l=Rn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qs).addScaledVector(ss,d),f}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,r){Ks.subVectors(e,t),rs.subVectors(n,t),Zs.crossVectors(Ks,rs);let a=this.direction.dot(Zs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const c=o*this.direction.dot(rs.crossVectors(Rn,rs));if(c<0)return null;const l=o*this.direction.dot(Ks.cross(Rn));if(l<0||c+l>a)return null;const h=-o*Rn.dot(Zs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,i,r,a,o,c,l,h,u,d,f,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($l,t,jl)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Pn.crossVectors(n,ze),Pn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Pn.crossVectors(n,ze)),Pn.normalize(),as.crossVectors(ze,Pn),i[0]=Pn.x,i[4]=as.x,i[8]=ze.x,i[1]=Pn.y,i[5]=as.y,i[9]=ze.y,i[2]=Pn.z,i[6]=as.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],P=n[15],A=i[0],C=i[4],R=i[8],w=i[12],v=i[1],L=i[5],O=i[9],B=i[13],G=i[2],W=i[6],Y=i[10],j=i[14],z=i[3],st=i[7],$=i[11],it=i[15];return r[0]=a*A+o*v+c*G+l*z,r[4]=a*C+o*L+c*W+l*st,r[8]=a*R+o*O+c*Y+l*$,r[12]=a*w+o*B+c*j+l*it,r[1]=h*A+u*v+d*G+f*z,r[5]=h*C+u*L+d*W+f*st,r[9]=h*R+u*O+d*Y+f*$,r[13]=h*w+u*B+d*j+f*it,r[2]=g*A+_*v+m*G+p*z,r[6]=g*C+_*L+m*W+p*st,r[10]=g*R+_*O+m*Y+p*$,r[14]=g*w+_*B+m*j+p*it,r[3]=M*A+S*v+x*G+P*z,r[7]=M*C+S*L+x*W+P*st,r[11]=M*R+S*O+x*Y+P*$,r[15]=M*w+S*B+x*j+P*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,S=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,x=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,P=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,A=e*M+n*S+i*x+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=M*C,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*C,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*C,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*C,t[4]=S*C,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*C,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*p-e*c*p)*C,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*f+e*c*f)*C,t[8]=x*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*C,t[12]=P*C,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,M=c*l,S=c*h,x=c*u,P=n.x,A=n.y,C=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+x)*P,i[2]=(g-S)*P,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+S)*C,i[9]=(m-M)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ii.set(i[0],i[1],i[2]).length();const a=ii.set(i[4],i[5],i[6]).length(),o=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const l=1/r,h=1/a,u=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=yn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===yn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Us)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=yn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*l,f=(n+i)*h;let g,_;if(o===yn)g=(a+r)*u,_=-2*u;else if(o===Us)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new I,Je=new pe,$l=new I(0,0,0),jl=new I(1,1,1),Pn=new I,as=new I,ze=new I,Za=new pe,Ja=new qi;class cn{constructor(t=0,e=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ql=0;const $a=new I,si=new qi,pn=new pe,os=new I,Di=new I,th=new I,eh=new qi,ja=new I(1,0,0),Qa=new I(0,1,0),to=new I(0,0,1),eo={type:"added"},nh={type:"removed"},ri={type:"childadded",child:null},Js={type:"childremoved",child:null};class Te extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new I,e=new cn,n=new qi,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ht}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(to,t)}translateOnAxis(t,e){return $a.copy(t).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(to,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?os.copy(t):os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Di,os,this.up):pn.lookAt(os,Di,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(pn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eo),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nh),Js.child=t,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,eh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new I(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new I,mn=new I,$s=new I,gn=new I,ai=new I,oi=new I,no=new I,js=new I,Qs=new I,tr=new I,er=new ge,nr=new ge,ir=new ge;class je{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),mn.subVectors(n,e),$s.subVectors(t,e);const a=$e.dot($e),o=$e.dot(mn),c=$e.dot($s),l=mn.dot(mn),h=mn.dot($s),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return er.setScalar(0),nr.setScalar(0),ir.setScalar(0),er.fromBufferAttribute(t,e),nr.fromBufferAttribute(t,n),ir.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(er,r.x),a.addScaledVector(nr,r.y),a.addScaledVector(ir,r.z),a}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),mn.subVectors(t,e),$e.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),$e.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ai.subVectors(i,n),oi.subVectors(r,n),js.subVectors(t,n);const c=ai.dot(js),l=oi.dot(js);if(c<=0&&l<=0)return e.copy(n);Qs.subVectors(t,i);const h=ai.dot(Qs),u=oi.dot(Qs);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ai,a);tr.subVectors(t,r);const f=ai.dot(tr),g=oi.dot(tr);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(oi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return no.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(no,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},cs={h:0,s:0,l:0};function sr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=_a(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=sr(a,r,t+1/3),this.g=sr(a,r,t),this.b=sr(a,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=_c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return $t.fromWorkingColorSpace(Re.copy(this),t),Math.round(ye(Re.r*255,0,255))*65536+Math.round(ye(Re.g*255,0,255))*256+Math.round(ye(Re.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,r=Re.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=be){$t.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(cs);const n=ki(Ln.h,cs.h,e),i=ki(Ln.s,cs.s,e),r=ki(Ln.l,cs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Zt;Zt.NAMES=_c;let ih=0;class Zi extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Ai(),this.name="",this.blending=mi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=br,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==br&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ye extends Zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new I,ls=new ot;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ka&&(t.usage=this.usage),t}}class vc extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xc extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sh=0;const Ve=new pe,rr=new Te,ci=new I,Ge=new Ki,Ui=new Ki,Se=new I;class Be extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fc(t)?xc:vc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ge.min,Ui.min),Ge.expandByPoint(Se),Se.addVectors(Ge.max,Ui.max),Ge.expandByPoint(Se)):(Ge.expandByPoint(Ui.min),Ge.expandByPoint(Ui.max))}Ge.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Se.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(t,l),Se.add(ci)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new I,c[R]=new I;const l=new I,h=new I,u=new I,d=new ot,f=new ot,g=new ot,_=new I,m=new I;function p(R,w,v){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[R].add(_),o[w].add(_),o[v].add(_),c[R].add(m),c[w].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,w=M.length;R<w;++R){const v=M[R],L=v.start,O=v.count;for(let B=L,G=L+O;B<G;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new I,x=new I,P=new I,A=new I;function C(R){P.fromBufferAttribute(i,R),A.copy(P);const w=o[R];S.copy(w),S.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(A,w);const L=x.dot(c[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,L)}for(let R=0,w=M.length;R<w;++R){const v=M[R],L=v.start,O=v.count;for(let B=L,G=L+O;B<G;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new pe,Gn=new Jl,hs=new va,so=new I,us=new I,ds=new I,fs=new I,ar=new I,ps=new I,ro=new I,ms=new I;class b extends Te{constructor(t=new Be,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ar.fromBufferAttribute(u,t),a?ps.addScaledVector(ar,h):ps.addScaledVector(ar.sub(e),h))}e.add(ps)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(hs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(hs,so)===null||Gn.origin.distanceToSquared(so)>(t.far-t.near)**2))&&(io.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(io),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,P=S;x<P;x+=3){const A=o.getX(x),C=o.getX(x+1),R=o.getX(x+2);i=gs(this,p,t,n,l,h,u,A,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);i=gs(this,a,t,n,l,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,P=S;x<P;x+=3){const A=x,C=x+1,R=x+2;i=gs(this,p,t,n,l,h,u,A,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,x=m+2;i=gs(this,a,t,n,l,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function rh(s,t,e,n,i,r,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Fn,o),c===null)return null;ms.copy(o),ms.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ms);return l<e.near||l>e.far?null:{distance:l,point:ms.clone(),object:s}}function gs(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,us),s.getVertexPosition(c,ds),s.getVertexPosition(l,fs);const h=rh(s,t,e,n,us,ds,fs,ro);if(h){const u=new I;je.getBarycoord(ro,us,ds,fs,u),i&&(h.uv=je.getInterpolatedAttribute(i,o,c,l,u,new ot)),r&&(h.uv1=je.getInterpolatedAttribute(r,o,c,l,u,new ot)),a&&(h.normal=je.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};je.getNormal(us,ds,fs,d.normal),h.face=d,h.barycoord=u}return h}class V extends Be{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(_,m,p,M,S,x,P,A,C,R,w){const v=x/C,L=P/R,O=x/2,B=P/2,G=A/2,W=C+1,Y=R+1;let j=0,z=0;const st=new I;for(let $=0;$<Y;$++){const it=$*L-B;for(let ft=0;ft<W;ft++){const mt=ft*v-O;st[_]=mt*M,st[m]=it*S,st[p]=G,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(ft/C),u.push(1-$/R),j+=1}}for(let $=0;$<R;$++)for(let it=0;it<C;it++){const ft=d+it+W*$,mt=d+it+W*($+1),H=d+(it+1)+W*($+1),J=d+(it+1)+W*$;c.push(ft,mt,J),c.push(mt,H,J),z+=6}o.addGroup(f,z,w),f+=z,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new V(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=wi(s[e]);for(const i in n)t[i]=n[i]}return t}function ah(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const oh={clone:wi,merge:De};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new I,ao=new ot,oo=new ot;class We extends Sc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,ao,oo),e.subVectors(oo,ao)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class hh extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(li,hi,t,e);i.layers=this.layers,this.add(i);const r=new We(li,hi,t,e);r.layers=this.layers,this.add(r);const a=new We(li,hi,t,e);a.layers=this.layers,this.add(a);const o=new We(li,hi,t,e);o.layers=this.layers,this.add(o);const c=new We(li,hi,t,e);c.layers=this.layers,this.add(c);const l=new We(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yc extends Fe{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uh extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new V(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Un});r.uniforms.tEquirect.value=e;const a=new b(i,r),o=e.minFilter;return e.minFilter===Dn&&(e.minFilter=Qe),new hh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const or=new I,dh=new I,fh=new Ht;class Xn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=or.subVectors(n,e).cross(dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(or),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fh.getNormalMatrix(t),i=this.coplanarPoint(or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new va,_s=new I;class xa{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+a,d+h,m+g,x+M).normalize(),n[3].setComponents(c-a,d-h,m-g,x-M).normalize(),n[4].setComponents(c-o,d-u,m-_,x-S).normalize(),e===yn)n[5].setComponents(c+o,d+u,m+_,x+S).normalize();else if(e===Us)n[5].setComponents(o,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_s.x=i.normal.x>0?t.max.x:t.min.x,_s.y=i.normal.y>0?t.max.y:t.min.y,_s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ph(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class ue extends Be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let S=0;S<l;S++){const x=S*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const S=M+l*p,x=M+l*(p+1),P=M+1+l*(p+1),A=M+1+l*p;f.push(S,x,A),f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.widthSegments,t.heightSegments)}}var mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,au=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Du=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ou=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,id=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,od=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,md=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:mh,alphahash_pars_fragment:gh,alphamap_fragment:_h,alphamap_pars_fragment:vh,alphatest_fragment:xh,alphatest_pars_fragment:Mh,aomap_fragment:Sh,aomap_pars_fragment:yh,batching_pars_vertex:wh,batching_vertex:Eh,begin_vertex:bh,beginnormal_vertex:Th,bsdfs:Ah,iridescence_fragment:Ch,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Dh,color_fragment:Uh,color_pars_fragment:Nh,color_pars_vertex:Fh,color_vertex:Oh,common:Bh,cube_uv_reflection_fragment:kh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Hh,emissivemap_fragment:Vh,emissivemap_pars_fragment:Wh,colorspace_fragment:Xh,colorspace_pars_fragment:Yh,envmap_fragment:qh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Zh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:ou,envmap_vertex:$h,fog_vertex:jh,fog_pars_vertex:Qh,fog_fragment:tu,fog_pars_fragment:eu,gradientmap_pars_fragment:nu,lightmap_pars_fragment:iu,lights_lambert_fragment:su,lights_lambert_pars_fragment:ru,lights_pars_begin:au,lights_toon_fragment:cu,lights_toon_pars_fragment:lu,lights_phong_fragment:hu,lights_phong_pars_fragment:uu,lights_physical_fragment:du,lights_physical_pars_fragment:fu,lights_fragment_begin:pu,lights_fragment_maps:mu,lights_fragment_end:gu,logdepthbuf_fragment:_u,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:Mu,map_fragment:Su,map_pars_fragment:yu,map_particle_fragment:wu,map_particle_pars_fragment:Eu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Tu,morphinstance_vertex:Au,morphcolor_vertex:Cu,morphnormal_vertex:Ru,morphtarget_pars_vertex:Pu,morphtarget_vertex:Lu,normal_fragment_begin:Iu,normal_fragment_maps:Du,normal_pars_fragment:Uu,normal_pars_vertex:Nu,normal_vertex:Fu,normalmap_pars_fragment:Ou,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Gu,opaque_fragment:Hu,packing:Vu,premultiplied_alpha_fragment:Wu,project_vertex:Xu,dithering_fragment:Yu,dithering_pars_fragment:qu,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:Zu,shadowmap_pars_fragment:Ju,shadowmap_pars_vertex:$u,shadowmap_vertex:ju,shadowmask_pars_fragment:Qu,skinbase_vertex:td,skinning_pars_vertex:ed,skinning_vertex:nd,skinnormal_vertex:id,specularmap_fragment:sd,specularmap_pars_fragment:rd,tonemapping_fragment:ad,tonemapping_pars_fragment:od,transmission_fragment:cd,transmission_pars_fragment:ld,uv_pars_fragment:hd,uv_pars_vertex:ud,uv_vertex:dd,worldpos_vertex:fd,background_vert:pd,background_frag:md,backgroundCube_vert:gd,backgroundCube_frag:_d,cube_vert:vd,cube_frag:xd,depth_vert:Md,depth_frag:Sd,distanceRGBA_vert:yd,distanceRGBA_frag:wd,equirect_vert:Ed,equirect_frag:bd,linedashed_vert:Td,linedashed_frag:Ad,meshbasic_vert:Cd,meshbasic_frag:Rd,meshlambert_vert:Pd,meshlambert_frag:Ld,meshmatcap_vert:Id,meshmatcap_frag:Dd,meshnormal_vert:Ud,meshnormal_frag:Nd,meshphong_vert:Fd,meshphong_frag:Od,meshphysical_vert:Bd,meshphysical_frag:kd,meshtoon_vert:zd,meshtoon_frag:Gd,points_vert:Hd,points_frag:Vd,shadow_vert:Wd,shadow_frag:Xd,sprite_vert:Yd,sprite_frag:qd},dt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},rn={basic:{uniforms:De([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:De([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:De([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:De([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:De([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:De([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:De([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:De([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:De([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:De([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:De([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:De([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:De([dt.lights,dt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};rn.physical={uniforms:De([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const vs={r:0,b:0,g:0},Vn=new cn,Kd=new pe;function Zd(s,t,e,n,i,r,a){const o=new Zt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const x=g(M);x===null?p(o,c):x&&x.isColor&&(p(x,1),S=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Os)?(h===void 0&&(h=new b(new V(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:wi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vn.copy(S.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kd.makeRotationFromEuler(Vn)),h.material.toneMapped=$t.getTransfer(x.colorSpace)!==re,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new b(new ue(2,2),new On({name:"BackgroundMaterial",uniforms:wi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=$t.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB(vs,Mc(s)),n.buffers.color.setClear(vs.r,vs.g,vs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m}}function Jd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,L,O,B,G){let W=!1;const Y=u(B,O,L);r!==Y&&(r=Y,l(r.object)),W=f(v,B,O,G),W&&g(v,B,O,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(v,L,O,B),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,L,O){const B=O.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let W=G[L.id];W===void 0&&(W={},G[L.id]=W);let Y=W[B];return Y===void 0&&(Y=d(c()),W[B]=Y),Y}function d(v){const L=[],O=[],B=[];for(let G=0;G<e;G++)L[G]=0,O[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,L,O,B){const G=r.attributes,W=L.attributes;let Y=0;const j=O.getAttributes();for(const z in j)if(j[z].location>=0){const $=G[z];let it=W[z];if(it===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),$===void 0||$.attribute!==it||it&&$.data!==it.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function g(v,L,O,B){const G={},W=L.attributes;let Y=0;const j=O.getAttributes();for(const z in j)if(j[z].location>=0){let $=W[z];$===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&($=v.instanceColor));const it={};it.attribute=$,$&&$.data&&(it.data=$.data),G[z]=it,Y++}r.attributes=G,r.attributesNum=Y,r.index=B}function _(){const v=r.newAttributes;for(let L=0,O=v.length;L<O;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){const O=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;O[v]=1,B[v]===0&&(s.enableVertexAttribArray(v),B[v]=1),G[v]!==L&&(s.vertexAttribDivisor(v,L),G[v]=L)}function M(){const v=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==v[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function S(v,L,O,B,G,W,Y){Y===!0?s.vertexAttribIPointer(v,L,O,G,W):s.vertexAttribPointer(v,L,O,B,G,W)}function x(v,L,O,B){_();const G=B.attributes,W=O.getAttributes(),Y=L.defaultAttributeValues;for(const j in W){const z=W[j];if(z.location>=0){let st=G[j];if(st===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const $=st.normalized,it=st.itemSize,ft=t.get(st);if(ft===void 0)continue;const mt=ft.buffer,H=ft.type,J=ft.bytesPerElement,ct=H===s.INT||H===s.UNSIGNED_INT||st.gpuType===ua;if(st.isInterleavedBufferAttribute){const rt=st.data,St=rt.stride,Pt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<z.locationSize;It++)p(z.location+It,rt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<z.locationSize;It++)m(z.location+It);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let It=0;It<z.locationSize;It++)S(z.location+It,it/z.locationSize,H,$,St*J,(Pt+it/z.locationSize*It)*J,ct)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<z.locationSize;rt++)p(z.location+rt,st.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<z.locationSize;rt++)m(z.location+rt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let rt=0;rt<z.locationSize;rt++)S(z.location+rt,it/z.locationSize,H,$,it*J,it/z.locationSize*rt*J,ct)}}else if(Y!==void 0){const $=Y[j];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(z.location,$);break;case 3:s.vertexAttrib3fv(z.location,$);break;case 4:s.vertexAttrib4fv(z.location,$);break;default:s.vertexAttrib1fv(z.location,$)}}}}M()}function P(){R();for(const v in n){const L=n[v];for(const O in L){const B=L[O];for(const G in B)h(B[G].object),delete B[G];delete L[O]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const L=n[v.id];for(const O in L){const B=L[O];for(const G in B)h(B[G].object),delete B[G];delete L[O]}delete n[v.id]}function C(v){for(const L in n){const O=n[L];if(O[v.id]===void 0)continue;const B=O[v.id];for(const G in B)h(B[G].object),delete B[G];delete O[v.id]}}function R(){w(),a=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function $d(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function jd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==tn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==En&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Sn&&!R)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function Qd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Xn,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,S=M*4;let x=p.clippingState||null;c.value=x,x=h(g,d,S,f);for(let P=0;P!==S;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function tf(s){let t=new WeakMap;function e(a,o){return o===Dr?a.mapping=xi:o===Ur&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Dr||o===Ur)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new uh(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ec extends Sc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const pi=4,co=[.125,.215,.35,.446,.526,.582],Kn=20,cr=new Ec,lo=new Zt;let lr=null,hr=0,ur=0,dr=!1;const Yn=(1+Math.sqrt(5))/2,ui=1/Yn,ho=[new I(-Yn,ui,0),new I(Yn,ui,0),new I(-ui,0,Yn),new I(ui,0,Yn),new I(0,Yn,-ui),new I(0,Yn,ui),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ca{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lr,hr,ur),this._renderer.xr.enabled=dr,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Yi,format:tn,colorSpace:bi,depthBuffer:!1},i=uo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(r)),this._blurMaterial=nf(r,t,e)}return i}_compileMaterial(t){const e=new b(this._lodPlanes[0],t);this._renderer.compile(e,cr)}_sceneToCubeUV(t,e,n,i){const o=new We(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lo),h.toneMapping=Nn,h.autoClear=!1;const f=new Ye({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new b(new V,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(lo),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const S=this._cubeSize;xs(i,M*S,p>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===xi||t.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new b(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;xs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ho[(i-r-1)%ho.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new b(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const p=[];let M=0;for(let C=0;C<Kn;++C){const R=C/_,w=Math.exp(-R*R/2);p.push(w),C===0?M+=w:C<m&&(M+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[i],P=3*x*(i>S-pi?i-S+pi:0),A=4*(this._cubeSize-x);xs(e,P,A,3*x,2*x),c.setRenderTarget(e),c.render(u,cr)}}function ef(s){const t=[],e=[],n=[];let i=s;const r=s-pi+1+co.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-pi?c=co[a-s+pi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,R=A>2?0:-1,w=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];M.set(w,_*g*A),S.set(d,m*g*A);const v=[A,A,A,A,A,A];x.set(v,p*g*A)}const P=new Be;P.setAttribute("position",new Xe(M,_)),P.setAttribute("uv",new Xe(S,m)),P.setAttribute("faceIndex",new Xe(x,p)),t.push(P),i>pi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uo(s,t,e){const n=new Jn(s,t,e);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function nf(s,t,e){const n=new Float32Array(Kn),i=new I(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function fo(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function po(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Dr||c===Ur,h=c===xi||c===Mi;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ca(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ca(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function af(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let S=0,x=M.length;S<x;S+=3){const P=M[S+0],A=M[S+1],C=M[S+2];d.push(P,A,A,C,C,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const P=S+0,A=S+1,C=S+2;d.push(P,A,A,C,C,P)}}else return;const m=new(fc(d)?xc:vc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function of(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function lf(s,t,e){const n=new WeakMap,i=new ge;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=o.attributes.position.count*x,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*A*4*u),R=new mc(C,P,A,u);R.type=Sn,R.needsUpdate=!0;const w=x*4;for(let L=0;L<u;L++){const O=p[L],B=M[L],G=S[L],W=P*A*4*L;for(let Y=0;Y<O.count;Y++){const j=Y*w;g===!0&&(i.fromBufferAttribute(O,Y),C[W+j+0]=i.x,C[W+j+1]=i.y,C[W+j+2]=i.z,C[W+j+3]=0),_===!0&&(i.fromBufferAttribute(B,Y),C[W+j+4]=i.x,C[W+j+5]=i.y,C[W+j+6]=i.z,C[W+j+7]=0),m===!0&&(i.fromBufferAttribute(G,Y),C[W+j+8]=i.x,C[W+j+9]=i.y,C[W+j+10]=i.z,C[W+j+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new ot(P,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function hf(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class bc extends Fe{constructor(t,e,n,i,r,a,o,c,l,h=gi){if(h!==gi&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=Zn),n===void 0&&h===yi&&(n=Si),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tc=new Fe,mo=new bc(1,1),Ac=new mc,Cc=new Kl,Rc=new yc,go=[],_o=[],vo=new Float32Array(16),xo=new Float32Array(9),Mo=new Float32Array(4);function Ci(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=go[i];if(r===void 0&&(r=new Float32Array(i),go[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ks(s,t){let e=_o[t];e===void 0&&(e=new Int32Array(t),_o[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function uf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Mo.set(n),s.uniformMatrix2fv(this.addr,!1,Mo),Me(e,n)}}function gf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;xo.set(n),s.uniformMatrix3fv(this.addr,!1,xo),Me(e,n)}}function _f(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;vo.set(n),s.uniformMatrix4fv(this.addr,!1,vo),Me(e,n)}}function vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function Tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mo.compareFunction=dc,r=mo):r=Tc,e.setTexture2D(t||r,i)}function Af(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cc,i)}function Cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rc,i)}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ac,i)}function Pf(s){switch(s){case 5126:return uf;case 35664:return df;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return yf;case 36294:return wf;case 36295:return Ef;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Rf}}function Lf(s,t){s.uniform1fv(this.addr,t)}function If(s,t){const e=Ci(t,this.size,2);s.uniform2fv(this.addr,e)}function Df(s,t){const e=Ci(t,this.size,3);s.uniform3fv(this.addr,e)}function Uf(s,t){const e=Ci(t,this.size,4);s.uniform4fv(this.addr,e)}function Nf(s,t){const e=Ci(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ff(s,t){const e=Ci(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Of(s,t){const e=Ci(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bf(s,t){s.uniform1iv(this.addr,t)}function kf(s,t){s.uniform2iv(this.addr,t)}function zf(s,t){s.uniform3iv(this.addr,t)}function Gf(s,t){s.uniform4iv(this.addr,t)}function Hf(s,t){s.uniform1uiv(this.addr,t)}function Vf(s,t){s.uniform2uiv(this.addr,t)}function Wf(s,t){s.uniform3uiv(this.addr,t)}function Xf(s,t){s.uniform4uiv(this.addr,t)}function Yf(s,t,e){const n=this.cache,i=t.length,r=ks(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Tc,r[a])}function qf(s,t,e){const n=this.cache,i=t.length,r=ks(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Cc,r[a])}function Kf(s,t,e){const n=this.cache,i=t.length,r=ks(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Rc,r[a])}function Zf(s,t,e){const n=this.cache,i=t.length,r=ks(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ac,r[a])}function Jf(s){switch(s){case 5126:return Lf;case 35664:return If;case 35665:return Df;case 35666:return Uf;case 35674:return Nf;case 35675:return Ff;case 35676:return Of;case 5124:case 35670:return Bf;case 35667:case 35671:return kf;case 35668:case 35672:return zf;case 35669:case 35673:return Gf;case 5125:return Hf;case 36294:return Vf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Zf}}class $f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pf(e.type)}}class jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jf(e.type)}}class Qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function So(s,t){s.seq.push(t),s.map[t.id]=t}function tp(s,t,e){const n=s.name,i=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),a=fr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){So(e,l===void 0?new $f(o,s,t):new jf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Qf(o),So(e,u)),e=u}}}class Ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);tp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function yo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ep=37297;let np=0;function ip(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wo=new Ht;function sp(s){$t._getMatrix(wo,$t.workingColorSpace,s);const t=`mat3( ${wo.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case Bs:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Eo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ip(s.getShaderSource(t),a)}else return i}function rp(s,t){const e=sp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ap(s,t){let e;switch(t){case ol:e="Linear";break;case cl:e="Reinhard";break;case ll:e="Cineon";break;case Qo:e="ACESFilmic";break;case ul:e="AgX";break;case dl:e="Neutral";break;case hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new I;function op(){$t.getLuminanceCoefficients(Ms);const s=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function lp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Oi(s){return s!==""}function bo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function To(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const up=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(s){return s.replace(up,fp)}const dp=new Map;function fp(s,t){let e=Wt[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return la(e)}const pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(s){return s.replace(pp,mp)}function mp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Co(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ds?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function _p(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case Mi:t="ENVMAP_TYPE_CUBE";break;case Os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vp(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Mi&&(t="ENVMAP_MODE_REFRACTION"),t}function xp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jo:t="ENVMAP_BLENDING_MULTIPLY";break;case rl:t="ENVMAP_BLENDING_MIX";break;case al:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=gp(e),l=_p(e),h=vp(e),u=xp(e),d=Mp(e),f=cp(e),g=lp(r),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),p.length>0&&(p+=`
`)):(m=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),p=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?ap("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,rp("linearToOutputTexel",e.outputColorSpace),op(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),a=la(a),a=bo(a,e),a=To(a,e),o=la(o),o=bo(o,e),o=To(o,e),a=Ao(a),o=Ao(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,x=M+p+o,P=yo(i,i.VERTEX_SHADER,S),A=yo(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(L){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(P).trim(),G=i.getShaderInfoLog(A).trim();let W=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,A);else{const j=Eo(i,P,"vertex"),z=Eo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+j+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||G==="")&&(Y=!1);Y&&(L.diagnostics={runnable:W,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(P),i.deleteShader(A),R=new Ls(i,_),w=hp(i,_)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,ep)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=np++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let yp=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ep(t),e.set(t,n)),n}}class Ep{constructor(t){this.id=yp++,this.code=t,this.usedTimes=0}}function bp(s,t,e,n,i,r,a){const o=new gc,c=new wp,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,v,L,O,B){const G=O.fog,W=B.geometry,Y=w.isMeshStandardMaterial?O.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),z=j&&j.mapping===Os?j.image.height:null,st=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const $=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=$!==void 0?$.length:0;let ft=0;W.morphAttributes.position!==void 0&&(ft=1),W.morphAttributes.normal!==void 0&&(ft=2),W.morphAttributes.color!==void 0&&(ft=3);let mt,H,J,ct;if(st){const ie=rn[st];mt=ie.vertexShader,H=ie.fragmentShader}else mt=w.vertexShader,H=w.fragmentShader,c.update(w),J=c.getVertexShaderID(w),ct=c.getFragmentShaderID(w);const rt=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,It=B.isBatchedMesh===!0,Xt=!!w.map,Ot=!!w.matcap,Qt=!!j,U=!!w.aoMap,we=!!w.lightMap,qt=!!w.bumpMap,Yt=!!w.normalMap,Dt=!!w.displacementMap,at=!!w.emissiveMap,ut=!!w.metalnessMap,T=!!w.roughnessMap,y=w.anisotropy>0,k=w.clearcoat>0,tt=w.dispersion>0,nt=w.iridescence>0,Q=w.sheen>0,Tt=w.transmission>0,gt=y&&!!w.anisotropyMap,wt=k&&!!w.clearcoatMap,Jt=k&&!!w.clearcoatNormalMap,lt=k&&!!w.clearcoatRoughnessMap,Et=nt&&!!w.iridescenceMap,Ut=nt&&!!w.iridescenceThicknessMap,Bt=Q&&!!w.sheenColorMap,bt=Q&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Vt=!!w.specularColorMap,ae=!!w.specularIntensityMap,D=Tt&&!!w.transmissionMap,pt=Tt&&!!w.thicknessMap,Z=!!w.gradientMap,et=!!w.alphaMap,Mt=w.alphaTest>0,vt=!!w.alphaHash,zt=!!w.extensions;let me=Nn;w.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(me=s.toneMapping);const Ae={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:mt,fragmentShader:H,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:It,batchingColor:It&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:bi,alphaToCoverage:!!w.alphaToCoverage,map:Xt,matcap:Ot,envMap:Qt,envMapMode:Qt&&j.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:we,bumpMap:qt,normalMap:Yt,displacementMap:d&&Dt,emissiveMap:at,normalMapObjectSpace:Yt&&w.normalMapType===gl,normalMapTangentSpace:Yt&&w.normalMapType===uc,metalnessMap:ut,roughnessMap:T,anisotropy:y,anisotropyMap:gt,clearcoat:k,clearcoatMap:wt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:lt,dispersion:tt,iridescence:nt,iridescenceMap:Et,iridescenceThicknessMap:Ut,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:bt,specularMap:Kt,specularColorMap:Vt,specularIntensityMap:ae,transmission:Tt,transmissionMap:D,thicknessMap:pt,gradientMap:Z,opaque:w.transparent===!1&&w.blending===mi&&w.alphaToCoverage===!1,alphaMap:et,alphaTest:Mt,alphaHash:vt,combine:w.combine,mapUv:Xt&&_(w.map.channel),aoMapUv:U&&_(w.aoMap.channel),lightMapUv:we&&_(w.lightMap.channel),bumpMapUv:qt&&_(w.bumpMap.channel),normalMapUv:Yt&&_(w.normalMap.channel),displacementMapUv:Dt&&_(w.displacementMap.channel),emissiveMapUv:at&&_(w.emissiveMap.channel),metalnessMapUv:ut&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:gt&&_(w.anisotropyMap.channel),clearcoatMapUv:wt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(w.sheenRoughnessMap.channel),specularMapUv:Kt&&_(w.specularMap.channel),specularColorMapUv:Vt&&_(w.specularColorMap.channel),specularIntensityMapUv:ae&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:pt&&_(w.thicknessMap.channel),alphaMapUv:et&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Yt||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Xt||et),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:Xt&&w.map.isVideoTexture===!0&&$t.getTransfer(w.map.colorSpace)===re,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&$t.getTransfer(w.emissiveMap.colorSpace)===re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ne,flipSided:w.side===Pe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&w.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)v.push(L),v.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(M(v,w),S(v,w),v.push(s.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function M(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function S(w,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const v=g[w.type];let L;if(v){const O=rn[v];L=oh.clone(O.uniforms)}else L=w.uniforms;return L}function P(w,v){let L;for(let O=0,B=h.length;O<B;O++){const G=h[O];if(G.cacheKey===v){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Sp(s,v,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){const v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:R}}function Tp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ap(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ro(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Po(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Ap),n.length>1&&n.sort(d||Ro),i.length>1&&i.sort(d||Ro)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Cp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Po,s.set(n,[a])):i>=r.length?(a=new Po,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Rp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Zt};break;case"SpotLight":e={position:new I,direction:new I,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Pp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Lp=0;function Ip(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Dp(s){const t=new Rp,e=Pp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new pe,a=new pe;function o(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,x=0,P=0,A=0,C=0;l.sort(Ip);for(let w=0,v=l.length;w<v;w++){const L=l[w],O=L.color,B=L.intensity,G=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],B);C++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,z=e.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=Y,f++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(B),Y.distance=G,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[_]=Y;const j=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,j.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=j.matrix,L.castShadow){const z=e.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=W,x++}_++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(O).multiplyScalar(B),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,z=e.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(B),Y.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=C,n.version=Lp++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Lo(s){const t=new Dp(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Up(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Lo(s),t.set(i,[o])):r>=a.length?(o=new Lo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Np extends Zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fp extends Zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kp(s,t,e){let n=new xa;const i=new ot,r=new ot,a=new ge,o=new Np({depthPacking:ml}),c=new Fp,l={},h=e.maxTextureSize,u={[Fn]:Pe,[Pe]:Fn,[Ne]:Ne},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Op,fragmentShader:Bp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new b(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let p=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),v=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Un),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==xn&&this.type===xn,G=p===xn&&this.type!==xn;for(let W=0,Y=A.length;W<Y;W++){const j=A[W],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const st=z.getFrameExtents();if(i.multiply(st),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,z.mapSize.y=r.y)),z.map===null||B===!0||G===!0){const it=this.type!==xn?{minFilter:en,magFilter:en}:{};z.map!==null&&z.map.dispose(),z.map=new Jn(i.x,i.y,it),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const $=z.getViewportCount();for(let it=0;it<$;it++){const ft=z.getViewport(it);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),O.viewport(a),z.updateMatrices(j,it),n=z.getFrustum(),x(C,R,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===xn&&M(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,v,L)};function M(A,C){const R=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,R,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,R,f,_,null)}function S(A,C,R,w){let v=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)v=L;else if(v=R.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=v.uuid,B=C.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let W=G[B];W===void 0&&(W=v.clone(),G[B]=W,C.addEventListener("dispose",P)),v=W}if(v.visible=C.visible,v.wireframe=C.wireframe,w===xn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=s.properties.get(v);O.light=R}return v}function x(A,C,R,w,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const B=t.update(A),G=A.material;if(Array.isArray(G)){const W=B.groups;for(let Y=0,j=W.length;Y<j;Y++){const z=W[Y],st=G[z.materialIndex];if(st&&st.visible){const $=S(A,st,w,v);A.onBeforeShadow(s,A,C,R,B,$,z),s.renderBufferDirect(R,null,B,$,A,z),A.onAfterShadow(s,A,C,R,B,$,z)}}}else if(G.visible){const W=S(A,G,w,v);A.onBeforeShadow(s,A,C,R,B,W,null),s.renderBufferDirect(R,null,B,W,A,null),A.onAfterShadow(s,A,C,R,B,W,null)}}const O=A.children;for(let B=0,G=O.length;B<G;B++)x(O[B],C,R,w,v)}function P(A){A.target.removeEventListener("dispose",P);for(const R in l){const w=l[R],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}const zp={[Tr]:Ar,[Cr]:Lr,[Rr]:Ir,[vi]:Pr,[Ar]:Tr,[Lr]:Cr,[Ir]:Rr,[Pr]:vi};function Gp(s,t){function e(){let D=!1;const pt=new ge;let Z=null;const et=new ge(0,0,0,0);return{setMask:function(Mt){Z!==Mt&&!D&&(s.colorMask(Mt,Mt,Mt,Mt),Z=Mt)},setLocked:function(Mt){D=Mt},setClear:function(Mt,vt,zt,me,Ae){Ae===!0&&(Mt*=me,vt*=me,zt*=me),pt.set(Mt,vt,zt,me),et.equals(pt)===!1&&(s.clearColor(Mt,vt,zt,me),et.copy(pt))},reset:function(){D=!1,Z=null,et.set(-1,0,0,0)}}}function n(){let D=!1,pt=!1,Z=null,et=null,Mt=null;return{setReversed:function(vt){if(pt!==vt){const zt=t.get("EXT_clip_control");pt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const me=Mt;Mt=null,this.setClear(me)}pt=vt},getReversed:function(){return pt},setTest:function(vt){vt?rt(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(vt){Z!==vt&&!D&&(s.depthMask(vt),Z=vt)},setFunc:function(vt){if(pt&&(vt=zp[vt]),et!==vt){switch(vt){case Tr:s.depthFunc(s.NEVER);break;case Ar:s.depthFunc(s.ALWAYS);break;case Cr:s.depthFunc(s.LESS);break;case vi:s.depthFunc(s.LEQUAL);break;case Rr:s.depthFunc(s.EQUAL);break;case Pr:s.depthFunc(s.GEQUAL);break;case Lr:s.depthFunc(s.GREATER);break;case Ir:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=vt}},setLocked:function(vt){D=vt},setClear:function(vt){Mt!==vt&&(pt&&(vt=1-vt),s.clearDepth(vt),Mt=vt)},reset:function(){D=!1,Z=null,et=null,Mt=null,pt=!1}}}function i(){let D=!1,pt=null,Z=null,et=null,Mt=null,vt=null,zt=null,me=null,Ae=null;return{setTest:function(ie){D||(ie?rt(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(ie){pt!==ie&&!D&&(s.stencilMask(ie),pt=ie)},setFunc:function(ie,qe,hn){(Z!==ie||et!==qe||Mt!==hn)&&(s.stencilFunc(ie,qe,hn),Z=ie,et=qe,Mt=hn)},setOp:function(ie,qe,hn){(vt!==ie||zt!==qe||me!==hn)&&(s.stencilOp(ie,qe,hn),vt=ie,zt=qe,me=hn)},setLocked:function(ie){D=ie},setClear:function(ie){Ae!==ie&&(s.clearStencil(ie),Ae=ie)},reset:function(){D=!1,pt=null,Z=null,et=null,Mt=null,vt=null,zt=null,me=null,Ae=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,P=null,A=null,C=new Zt(0,0,0),R=0,w=!1,v=null,L=null,O=null,B=null,G=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=j>=2);let st=null,$={};const it=s.getParameter(s.SCISSOR_BOX),ft=s.getParameter(s.VIEWPORT),mt=new ge().fromArray(it),H=new ge().fromArray(ft);function J(D,pt,Z,et){const Mt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(D,vt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<Z;zt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(pt+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return vt}const ct={};ct[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(vi),qt(!1),Yt(Ua),rt(s.CULL_FACE),U(Un);function rt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function St(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Pt(D,pt){return u[D]!==pt?(s.bindFramebuffer(D,pt),u[D]=pt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function It(D,pt){let Z=f,et=!1;if(D){Z=d.get(pt),Z===void 0&&(Z=[],d.set(pt,Z));const Mt=D.textures;if(Z.length!==Mt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,zt=Mt.length;vt<zt;vt++)Z[vt]=s.COLOR_ATTACHMENT0+vt;Z.length=Mt.length,et=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,et=!0);et&&s.drawBuffers(Z)}function Xt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Ot={[qn]:s.FUNC_ADD,[Hc]:s.FUNC_SUBTRACT,[Vc]:s.FUNC_REVERSE_SUBTRACT};Ot[Wc]=s.MIN,Ot[Xc]=s.MAX;const Qt={[Yc]:s.ZERO,[qc]:s.ONE,[Kc]:s.SRC_COLOR,[Er]:s.SRC_ALPHA,[tl]:s.SRC_ALPHA_SATURATE,[jc]:s.DST_COLOR,[Jc]:s.DST_ALPHA,[Zc]:s.ONE_MINUS_SRC_COLOR,[br]:s.ONE_MINUS_SRC_ALPHA,[Qc]:s.ONE_MINUS_DST_COLOR,[$c]:s.ONE_MINUS_DST_ALPHA,[el]:s.CONSTANT_COLOR,[nl]:s.ONE_MINUS_CONSTANT_COLOR,[il]:s.CONSTANT_ALPHA,[sl]:s.ONE_MINUS_CONSTANT_ALPHA};function U(D,pt,Z,et,Mt,vt,zt,me,Ae,ie){if(D===Un){_===!0&&(St(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),D!==Gc){if(D!==m||ie!==w){if((p!==qn||x!==qn)&&(s.blendEquation(s.FUNC_ADD),p=qn,x=qn),ie)switch(D){case mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Na:s.blendFunc(s.ONE,s.ONE);break;case Fa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Na:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,P=null,A=null,C.set(0,0,0),R=0,m=D,w=ie}return}Mt=Mt||pt,vt=vt||Z,zt=zt||et,(pt!==p||Mt!==x)&&(s.blendEquationSeparate(Ot[pt],Ot[Mt]),p=pt,x=Mt),(Z!==M||et!==S||vt!==P||zt!==A)&&(s.blendFuncSeparate(Qt[Z],Qt[et],Qt[vt],Qt[zt]),M=Z,S=et,P=vt,A=zt),(me.equals(C)===!1||Ae!==R)&&(s.blendColor(me.r,me.g,me.b,Ae),C.copy(me),R=Ae),m=D,w=!1}function we(D,pt){D.side===Ne?St(s.CULL_FACE):rt(s.CULL_FACE);let Z=D.side===Pe;pt&&(Z=!Z),qt(Z),D.blending===mi&&D.transparent===!1?U(Un):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const et=D.stencilWrite;o.setTest(et),et&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function Yt(D){D!==kc?(rt(s.CULL_FACE),D!==L&&(D===Ua?s.cullFace(s.BACK):D===zc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),L=D}function Dt(D){D!==O&&(Y&&s.lineWidth(D),O=D)}function at(D,pt,Z){D?(rt(s.POLYGON_OFFSET_FILL),(B!==pt||G!==Z)&&(s.polygonOffset(pt,Z),B=pt,G=Z)):St(s.POLYGON_OFFSET_FILL)}function ut(D){D?rt(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+W-1),st!==D&&(s.activeTexture(D),st=D)}function y(D,pt,Z){Z===void 0&&(st===null?Z=s.TEXTURE0+W-1:Z=st);let et=$[Z];et===void 0&&(et={type:void 0,texture:void 0},$[Z]=et),(et.type!==D||et.texture!==pt)&&(st!==Z&&(s.activeTexture(Z),st=Z),s.bindTexture(D,pt||ct[D]),et.type=D,et.texture=pt)}function k(){const D=$[st];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){mt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),mt.copy(D))}function bt(D){H.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),H.copy(D))}function Kt(D,pt){let Z=l.get(pt);Z===void 0&&(Z=new WeakMap,l.set(pt,Z));let et=Z.get(D);et===void 0&&(et=s.getUniformBlockIndex(pt,D.name),Z.set(D,et))}function Vt(D,pt){const et=l.get(pt).get(D);c.get(pt)!==et&&(s.uniformBlockBinding(pt,et,D.__bindingPointIndex),c.set(pt,et))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,$={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,P=null,A=null,C=new Zt(0,0,0),R=0,w=!1,v=null,L=null,O=null,B=null,G=null,mt.set(0,0,s.canvas.width,s.canvas.height),H.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:St,bindFramebuffer:Pt,drawBuffers:It,useProgram:Xt,setBlending:U,setMaterial:we,setFlipSided:qt,setCullFace:Yt,setLineWidth:Dt,setPolygonOffset:at,setScissorTest:ut,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:tt,compressedTexImage3D:nt,texImage2D:Et,texImage3D:Ut,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:Jt,texStorage3D:lt,texSubImage2D:Q,texSubImage3D:Tt,compressedTexSubImage2D:gt,compressedTexSubImage3D:wt,scissor:Bt,viewport:bt,reset:ae}}function Io(s,t,e,n){const i=Hp(n);switch(e){case sc:return s*t;case ac:return s*t;case oc:return s*t*2;case cc:return s*t/i.components*i.byteLength;case pa:return s*t/i.components*i.byteLength;case lc:return s*t*2/i.components*i.byteLength;case ma:return s*t*2/i.components*i.byteLength;case rc:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case ga:return s*t*4/i.components*i.byteLength;case Ts:case As:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Rs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Or:case kr:return Math.max(s,16)*Math.max(t,8)/4;case Fr:case Br:return Math.max(s,8)*Math.max(t,8)/2;case zr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $r:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case jr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ea:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ps:case ia:case sa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hc:case ra:return Math.ceil(s/4)*Math.ceil(t/4)*8;case aa:case oa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hp(s){switch(s){case En:case ec:return{byteLength:1,components:1};case Vi:case nc:case Yi:return{byteLength:2,components:1};case da:case fa:return{byteLength:2,components:4};case Zn:case ua:case Sn:return{byteLength:4,components:1};case ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Vp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):Ns("canvas")}function _(T,y,k){let tt=1;const nt=ut(T);if((nt.width>k||nt.height>k)&&(tt=k/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(tt*nt.width),Tt=Math.floor(tt*nt.height);u===void 0&&(u=g(Q,Tt));const gt=y?g(Q,Tt):u;return gt.width=Q,gt.height=Tt,gt.getContext("2d").drawImage(T,0,0,Q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+Tt+")."),gt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(T,y,k,tt,nt=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=y;if(y===s.RED&&(k===s.FLOAT&&(Q=s.R32F),k===s.HALF_FLOAT&&(Q=s.R16F),k===s.UNSIGNED_BYTE&&(Q=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.R8UI),k===s.UNSIGNED_SHORT&&(Q=s.R16UI),k===s.UNSIGNED_INT&&(Q=s.R32UI),k===s.BYTE&&(Q=s.R8I),k===s.SHORT&&(Q=s.R16I),k===s.INT&&(Q=s.R32I)),y===s.RG&&(k===s.FLOAT&&(Q=s.RG32F),k===s.HALF_FLOAT&&(Q=s.RG16F),k===s.UNSIGNED_BYTE&&(Q=s.RG8)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RG8UI),k===s.UNSIGNED_SHORT&&(Q=s.RG16UI),k===s.UNSIGNED_INT&&(Q=s.RG32UI),k===s.BYTE&&(Q=s.RG8I),k===s.SHORT&&(Q=s.RG16I),k===s.INT&&(Q=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),k===s.UNSIGNED_INT&&(Q=s.RGB32UI),k===s.BYTE&&(Q=s.RGB8I),k===s.SHORT&&(Q=s.RGB16I),k===s.INT&&(Q=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),k===s.UNSIGNED_INT&&(Q=s.RGBA32UI),k===s.BYTE&&(Q=s.RGBA8I),k===s.SHORT&&(Q=s.RGBA16I),k===s.INT&&(Q=s.RGBA32I)),y===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),y===s.RGBA){const Tt=nt?Bs:$t.getTransfer(tt);k===s.FLOAT&&(Q=s.RGBA32F),k===s.HALF_FLOAT&&(Q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Q=Tt===re?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(T,y){let k;return T?y===null||y===Zn||y===Si?k=s.DEPTH24_STENCIL8:y===Sn?k=s.DEPTH32F_STENCIL8:y===Vi&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Zn||y===Si?k=s.DEPTH_COMPONENT24:y===Sn?k=s.DEPTH_COMPONENT32F:y===Vi&&(k=s.DEPTH_COMPONENT16),k}function P(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==Qe?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&h.delete(y)}function C(T){const y=T.target;y.removeEventListener("dispose",C),v(y)}function R(T){const y=n.get(T);if(y.__webglInit===void 0)return;const k=T.source,tt=d.get(k);if(tt){const nt=tt[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(T),Object.keys(tt).length===0&&d.delete(k)}n.remove(T)}function w(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const k=T.source,tt=d.get(k);delete tt[y.__cacheKey],a.memory.textures--}function v(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let nt=0;nt<y.__webglFramebuffer[tt].length;nt++)s.deleteFramebuffer(y.__webglFramebuffer[tt][nt]);else s.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)s.deleteFramebuffer(y.__webglFramebuffer[tt]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let tt=0,nt=k.length;tt<nt;tt++){const Q=n.get(k[tt]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(k[tt])}n.remove(T)}let L=0;function O(){L=0}function B(){const T=L;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),L+=1,T}function G(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function W(T,y){const k=n.get(T);if(T.isVideoTexture&&Dt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const tt=T.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(k,T,y);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function Y(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){H(k,T,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function j(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){H(k,T,y);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function z(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){J(k,T,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const st={[Hi]:s.REPEAT,[Ue]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},$={[en]:s.NEAREST,[fl]:s.NEAREST_MIPMAP_NEAREST,[ts]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[Gs]:s.LINEAR_MIPMAP_NEAREST,[Dn]:s.LINEAR_MIPMAP_LINEAR},it={[_l]:s.NEVER,[wl]:s.ALWAYS,[vl]:s.LESS,[dc]:s.LEQUAL,[xl]:s.EQUAL,[yl]:s.GEQUAL,[Ml]:s.GREATER,[Sl]:s.NOTEQUAL};function ft(T,y){if(y.type===Sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Qe||y.magFilter===Gs||y.magFilter===ts||y.magFilter===Dn||y.minFilter===Qe||y.minFilter===Gs||y.minFilter===ts||y.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,st[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,st[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,st[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,$[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,$[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,it[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==ts&&y.minFilter!==Dn||y.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function mt(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const tt=y.source;let nt=d.get(tt);nt===void 0&&(nt={},d.set(tt,nt));const Q=G(y);if(Q!==T.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),nt[Q].usedTimes++;const Tt=nt[T.__cacheKey];Tt!==void 0&&(nt[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(y)),T.__cacheKey=Q,T.__webglTexture=nt[Q].texture}return k}function H(T,y,k){let tt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=s.TEXTURE_3D);const nt=mt(T,y),Q=y.source;e.bindTexture(tt,T.__webglTexture,s.TEXTURE0+k);const Tt=n.get(Q);if(Q.version!==Tt.__version||nt===!0){e.activeTexture(s.TEXTURE0+k);const gt=$t.getPrimaries($t.workingColorSpace),wt=y.colorSpace===Mn?null:$t.getPrimaries(y.colorSpace),Jt=y.colorSpace===Mn||gt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let lt=_(y.image,!1,i.maxTextureSize);lt=at(y,lt);const Et=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type);let Bt=S(y.internalFormat,Et,Ut,y.colorSpace,y.isVideoTexture);ft(tt,y);let bt;const Kt=y.mipmaps,Vt=y.isVideoTexture!==!0,ae=Tt.__version===void 0||nt===!0,D=Q.dataReady,pt=P(y,lt);if(y.isDepthTexture)Bt=x(y.format===yi,y.type),ae&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Bt,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Bt,lt.width,lt.height,0,Et,Ut,null));else if(y.isDataTexture)if(Kt.length>0){Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,pt,Bt,Kt[0].width,Kt[0].height);for(let Z=0,et=Kt.length;Z<et;Z++)bt=Kt[Z],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Et,Ut,bt.data):e.texImage2D(s.TEXTURE_2D,Z,Bt,bt.width,bt.height,0,Et,Ut,bt.data);y.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(s.TEXTURE_2D,pt,Bt,lt.width,lt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Et,Ut,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,lt.width,lt.height,0,Et,Ut,lt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Bt,Kt[0].width,Kt[0].height,lt.depth);for(let Z=0,et=Kt.length;Z<et;Z++)if(bt=Kt[Z],y.format!==tn)if(Et!==null)if(Vt){if(D)if(y.layerUpdates.size>0){const Mt=Io(bt.width,bt.height,y.format,y.type);for(const vt of y.layerUpdates){const zt=bt.data.subarray(vt*Mt/bt.data.BYTES_PER_ELEMENT,(vt+1)*Mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,vt,bt.width,bt.height,1,Et,zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,lt.depth,Et,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Bt,bt.width,bt.height,lt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,lt.depth,Et,Ut,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Bt,bt.width,bt.height,lt.depth,0,Et,Ut,bt.data)}else{Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,pt,Bt,Kt[0].width,Kt[0].height);for(let Z=0,et=Kt.length;Z<et;Z++)bt=Kt[Z],y.format!==tn?Et!==null?Vt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Bt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Et,Ut,bt.data):e.texImage2D(s.TEXTURE_2D,Z,Bt,bt.width,bt.height,0,Et,Ut,bt.data)}else if(y.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Bt,lt.width,lt.height,lt.depth),D)if(y.layerUpdates.size>0){const Z=Io(lt.width,lt.height,y.format,y.type);for(const et of y.layerUpdates){const Mt=lt.data.subarray(et*Z/lt.data.BYTES_PER_ELEMENT,(et+1)*Z/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,lt.width,lt.height,1,Et,Ut,Mt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,Ut,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,lt.width,lt.height,lt.depth,0,Et,Ut,lt.data);else if(y.isData3DTexture)Vt?(ae&&e.texStorage3D(s.TEXTURE_3D,pt,Bt,lt.width,lt.height,lt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,Ut,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,lt.width,lt.height,lt.depth,0,Et,Ut,lt.data);else if(y.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(s.TEXTURE_2D,pt,Bt,lt.width,lt.height);else{let Z=lt.width,et=lt.height;for(let Mt=0;Mt<pt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Bt,Z,et,0,Et,Ut,null),Z>>=1,et>>=1}}else if(Kt.length>0){if(Vt&&ae){const Z=ut(Kt[0]);e.texStorage2D(s.TEXTURE_2D,pt,Bt,Z.width,Z.height)}for(let Z=0,et=Kt.length;Z<et;Z++)bt=Kt[Z],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Et,Ut,bt):e.texImage2D(s.TEXTURE_2D,Z,Bt,Et,Ut,bt);y.generateMipmaps=!1}else if(Vt){if(ae){const Z=ut(lt);e.texStorage2D(s.TEXTURE_2D,pt,Bt,Z.width,Z.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Ut,lt)}else e.texImage2D(s.TEXTURE_2D,0,Bt,Et,Ut,lt);m(y)&&p(tt),Tt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function J(T,y,k){if(y.image.length!==6)return;const tt=mt(T,y),nt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const Q=n.get(nt);if(nt.version!==Q.__version||tt===!0){e.activeTexture(s.TEXTURE0+k);const Tt=$t.getPrimaries($t.workingColorSpace),gt=y.colorSpace===Mn?null:$t.getPrimaries(y.colorSpace),wt=y.colorSpace===Mn||Tt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Jt=y.isCompressedTexture||y.image[0].isCompressedTexture,lt=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let et=0;et<6;et++)!Jt&&!lt?Et[et]=_(y.image[et],!0,i.maxCubemapSize):Et[et]=lt?y.image[et].image:y.image[et],Et[et]=at(y,Et[et]);const Ut=Et[0],Bt=r.convert(y.format,y.colorSpace),bt=r.convert(y.type),Kt=S(y.internalFormat,Bt,bt,y.colorSpace),Vt=y.isVideoTexture!==!0,ae=Q.__version===void 0||tt===!0,D=nt.dataReady;let pt=P(y,Ut);ft(s.TEXTURE_CUBE_MAP,y);let Z;if(Jt){Vt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Kt,Ut.width,Ut.height);for(let et=0;et<6;et++){Z=Et[et].mipmaps;for(let Mt=0;Mt<Z.length;Mt++){const vt=Z[Mt];y.format!==tn?Bt!==null?Vt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,vt.width,vt.height,Bt,vt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,Kt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,vt.width,vt.height,Bt,bt,vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,Kt,vt.width,vt.height,0,Bt,bt,vt.data)}}}else{if(Z=y.mipmaps,Vt&&ae){Z.length>0&&pt++;const et=ut(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Kt,et.width,et.height)}for(let et=0;et<6;et++)if(lt){Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et[et].width,Et[et].height,Bt,bt,Et[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Et[et].width,Et[et].height,0,Bt,bt,Et[et].data);for(let Mt=0;Mt<Z.length;Mt++){const zt=Z[Mt].image[et].image;Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,zt.width,zt.height,Bt,bt,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,Kt,zt.width,zt.height,0,Bt,bt,zt.data)}}else{Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Bt,bt,Et[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Bt,bt,Et[et]);for(let Mt=0;Mt<Z.length;Mt++){const vt=Z[Mt];Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,Bt,bt,vt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,Kt,Bt,bt,vt.image[et])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),Q.__version=nt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ct(T,y,k,tt,nt,Q){const Tt=r.convert(k.format,k.colorSpace),gt=r.convert(k.type),wt=S(k.internalFormat,Tt,gt,k.colorSpace),Jt=n.get(y),lt=n.get(k);if(lt.__renderTarget=y,!Jt.__hasExternalTextures){const Et=Math.max(1,y.width>>Q),Ut=Math.max(1,y.height>>Q);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,wt,Et,Ut,y.depth,0,Tt,gt,null):e.texImage2D(nt,Q,wt,Et,Ut,0,Tt,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,nt,lt.__webglTexture,0,qt(y)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,nt,lt.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(T,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const tt=y.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,Q=x(y.stencilBuffer,nt),Tt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=qt(y);Yt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,Q,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Q,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,T)}else{const tt=y.textures;for(let nt=0;nt<tt.length;nt++){const Q=tt[nt],Tt=r.convert(Q.format,Q.colorSpace),gt=r.convert(Q.type),wt=S(Q.internalFormat,Tt,gt,Q.colorSpace),Jt=qt(y);k&&Yt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,wt,y.width,y.height):Yt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,wt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,wt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(y.depthTexture);tt.__renderTarget=y,(!tt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const nt=tt.__webglTexture,Q=qt(y);if(y.depthTexture.format===gi)Yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(y.depthTexture.format===yi)Yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Pt(T){const y=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const tt=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=tt}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");St(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=s.createRenderbuffer(),rt(y.__webglDepthbuffer[tt],T,!1);else{const nt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),rt(y.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(T,y,k){const tt=n.get(T);y!==void 0&&ct(tt.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Pt(T)}function Xt(T){const y=T.texture,k=n.get(T),tt=n.get(y);T.addEventListener("dispose",C);const nt=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Tt=nt.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=y.version,a.memory.textures++),Q){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let wt=0;wt<y.mipmaps.length;wt++)k.__webglFramebuffer[gt][wt]=s.createFramebuffer()}else k.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)k.__webglFramebuffer[gt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let gt=0,wt=nt.length;gt<wt;gt++){const Jt=n.get(nt[gt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Yt(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){const wt=nt[gt];k.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);const Jt=r.convert(wt.format,wt.colorSpace),lt=r.convert(wt.type),Et=S(wt.internalFormat,Jt,lt,wt.colorSpace,T.isXRRenderTarget===!0),Ut=qt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Et,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),ft(s.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)ct(k.__webglFramebuffer[gt][wt],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt);else ct(k.__webglFramebuffer[gt],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let gt=0,wt=nt.length;gt<wt;gt++){const Jt=nt[gt],lt=n.get(Jt);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),ft(s.TEXTURE_2D,Jt),ct(k.__webglFramebuffer,T,Jt,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(gt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,tt.__webglTexture),ft(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)ct(k.__webglFramebuffer[wt],T,y,s.COLOR_ATTACHMENT0,gt,wt);else ct(k.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,gt,0);m(y)&&p(gt),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Ot(T){const y=T.textures;for(let k=0,tt=y.length;k<tt;k++){const nt=y[k];if(m(nt)){const Q=M(T),Tt=n.get(nt).__webglTexture;e.bindTexture(Q,Tt),p(Q),e.unbindTexture()}}}const Qt=[],U=[];function we(T){if(T.samples>0){if(Yt(T)===!1){const y=T.textures,k=T.width,tt=T.height;let nt=s.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(T),gt=y.length>1;if(gt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[wt]);const Jt=n.get(y[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,k,tt,0,0,k,tt,nt,s.NEAREST),c===!0&&(Qt.length=0,U.length=0,Qt.push(s.COLOR_ATTACHMENT0+wt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Qt.push(Q),U.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[wt]);const Jt=n.get(y[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function qt(T){return Math.min(i.maxSamples,T.samples)}function Yt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Dt(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function at(T,y){const k=T.colorSpace,tt=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==bi&&k!==Mn&&($t.getTransfer(k)===re?(tt!==tn||nt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function ut(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=It,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Yt}function Wp(s,t){function e(n,i=Mn){let r;const a=$t.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===da)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ic)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return s.BYTE;if(n===nc)return s.SHORT;if(n===Vi)return s.UNSIGNED_SHORT;if(n===ua)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===Yi)return s.HALF_FLOAT;if(n===sc)return s.ALPHA;if(n===rc)return s.RGB;if(n===tn)return s.RGBA;if(n===ac)return s.LUMINANCE;if(n===oc)return s.LUMINANCE_ALPHA;if(n===gi)return s.DEPTH_COMPONENT;if(n===yi)return s.DEPTH_STENCIL;if(n===cc)return s.RED;if(n===pa)return s.RED_INTEGER;if(n===lc)return s.RG;if(n===ma)return s.RG_INTEGER;if(n===ga)return s.RGBA_INTEGER;if(n===Ts||n===As||n===Cs||n===Rs)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fr||n===Or||n===Br||n===kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zr||n===Gr||n===Hr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zr||n===Gr)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vr||n===Wr||n===Xr||n===Yr||n===qr||n===Kr||n===Zr||n===Jr||n===$r||n===jr||n===Qr||n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ea)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===ia||n===sa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ps)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===ra||n===aa||n===oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Xp extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Fe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:qp,fragmentShader:Kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new b(new ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jp extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new Zp,m=e.getContextAttributes();let p=null,M=null;const S=[],x=[],P=new ot;let A=null;const C=new We;C.viewport=new ge;const R=new We;R.viewport=new ge;const w=[C,R],v=new Xp;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=S[H];return J===void 0&&(J=new pr,S[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=S[H];return J===void 0&&(J=new pr,S[H]=J),J.getGripSpace()},this.getHand=function(H){let J=S[H];return J===void 0&&(J=new pr,S[H]=J),J.getHandSpace()};function B(H){const J=x.indexOf(H.inputSource);if(J===-1)return;const ct=S[J];ct!==void 0&&(ct.update(H.inputSource,H.frame,l||a),ct.dispatchEvent({type:H.type,data:H.inputSource}))}function G(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",W);for(let H=0;H<S.length;H++){const J=x[H];J!==null&&(x[H]=null,S[H].disconnect(J))}L=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",G),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Jn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ct=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?yi:gi,ct=m.stencil?Si:Zn);const St={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(St),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Jn(d.textureWidth,d.textureHeight,{format:tn,type:En,depthTexture:new bc(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(H){for(let J=0;J<H.removed.length;J++){const ct=H.removed[J],rt=x.indexOf(ct);rt>=0&&(x[rt]=null,S[rt].disconnect(ct))}for(let J=0;J<H.added.length;J++){const ct=H.added[J];let rt=x.indexOf(ct);if(rt===-1){for(let Pt=0;Pt<S.length;Pt++)if(Pt>=x.length){x.push(ct),rt=Pt;break}else if(x[Pt]===null){x[Pt]=ct,rt=Pt;break}if(rt===-1)break}const St=S[rt];St&&St.connect(ct)}}const Y=new I,j=new I;function z(H,J,ct){Y.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ct.matrixWorld);const rt=Y.distanceTo(j),St=J.projectionMatrix.elements,Pt=ct.projectionMatrix.elements,It=St[14]/(St[10]-1),Xt=St[14]/(St[10]+1),Ot=(St[9]+1)/St[5],Qt=(St[9]-1)/St[5],U=(St[8]-1)/St[0],we=(Pt[8]+1)/Pt[0],qt=It*U,Yt=It*we,Dt=rt/(-U+we),at=Dt*-U;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(at),H.translateZ(Dt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),St[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ut=It+Dt,T=Xt+Dt,y=qt-at,k=Yt+(rt-at),tt=Ot*Xt/T*ut,nt=Qt*Xt/T*ut;H.projectionMatrix.makePerspective(y,k,tt,nt,ut,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function st(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let J=H.near,ct=H.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),v.near=R.near=C.near=J,v.far=R.far=C.far=ct,(L!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,O=v.far),C.layers.mask=H.layers.mask|2,R.layers.mask=H.layers.mask|4,v.layers.mask=C.layers.mask|R.layers.mask;const rt=H.parent,St=v.cameras;st(v,rt);for(let Pt=0;Pt<St.length;Pt++)st(St[Pt],rt);St.length===2?z(v,C,R):v.projectionMatrix.copy(C.projectionMatrix),$(H,v,rt)};function $(H,J,ct){ct===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(ct.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Wi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let it=null;function ft(H,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let rt=!1;ct.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Pt=0;Pt<ct.length;Pt++){const It=ct[Pt];let Xt=null;if(f!==null)Xt=f.getViewport(It);else{const Qt=u.getViewSubImage(d,It);Xt=Qt.viewport,Pt===0&&(t.setRenderTargetTextures(M,Qt.colorTexture,d.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(M))}let Ot=w[Pt];Ot===void 0&&(Ot=new We,Ot.layers.enable(Pt),Ot.viewport=new ge,w[Pt]=Ot),Ot.matrix.fromArray(It.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(It.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Pt===0&&(v.matrix.copy(Ot.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Ot)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){const Pt=u.getDepthInformation(ct[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let ct=0;ct<S.length;ct++){const rt=x[ct],St=S[ct];rt!==null&&St!==void 0&&St.update(rt,J,l||a)}it&&it(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const mt=new wc;mt.setAnimationLoop(ft),this.setAnimationLoop=function(H){it=H},this.dispose=function(){}}}const Wn=new cn,$p=new pe;function jp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,Wn.copy(x),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),m.envMapRotation.value.setFromMatrix4($p.makeRotationFromEuler(Wn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function l(M,S){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(M,P);const A=t.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const S=u();M.__bindingPointIndex=S;const x=s.createBuffer(),P=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=i[M.id],x=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,C=x.length;A<C;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,v=R.length;w<v;w++){const L=R[w];if(f(L,A,w,P)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let W=0;W<B.length;W++){const Y=B[W],j=_(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,O+G,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,x,P){const A=M.value,C=S+"_"+x;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{const R=P[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const S=M.uniforms;let x=0;const P=16;for(let C=0,R=S.length;C<R;C++){const w=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,L=w.length;v<L;v++){const O=w[v],B=Array.isArray(O.value)?O.value:[O.value];for(let G=0,W=B.length;G<W;G++){const Y=B[G],j=_(Y),z=x%P,st=z%j.boundary,$=z+st;x+=st,$!==0&&P-$<j.storage&&(x+=P-$),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=j.storage}}}const A=x%P;return A>0&&(x+=P-A),M.__size=x,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class t0{constructor(t={}){const{canvas:e=zl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=Nn,this.toneMappingExposure=1;const x=this;let P=!1,A=0,C=0,R=null,w=-1,v=null;const L=new ge,O=new ge;let B=null;const G=new Zt(0);let W=0,Y=e.width,j=e.height,z=1,st=null,$=null;const it=new ge(0,0,Y,j),ft=new ge(0,0,Y,j);let mt=!1;const H=new xa;let J=!1,ct=!1;const rt=new pe,St=new pe,Pt=new I,It=new ge,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Qt(){return R===null?z:1}let U=n;function we(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ha}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),U===null){const N="webgl2";if(U=we(N,E),U===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let qt,Yt,Dt,at,ut,T,y,k,tt,nt,Q,Tt,gt,wt,Jt,lt,Et,Ut,Bt,bt,Kt,Vt,ae,D;function pt(){qt=new rf(U),qt.init(),Vt=new Wp(U,qt),Yt=new jd(U,qt,t,Vt),Dt=new Gp(U,qt),Yt.reverseDepthBuffer&&d&&Dt.buffers.depth.setReversed(!0),at=new cf(U),ut=new Tp,T=new Vp(U,qt,Dt,ut,Yt,Vt,at),y=new tf(x),k=new sf(x),tt=new ph(U),ae=new Jd(U,tt),nt=new af(U,tt,at,ae),Q=new hf(U,nt,tt,at),Bt=new lf(U,Yt,T),lt=new Qd(ut),Tt=new bp(x,y,k,qt,Yt,ae,lt),gt=new jp(x,ut),wt=new Cp,Jt=new Up(qt),Ut=new Zd(x,y,k,Dt,Q,f,c),Et=new kp(x,Q,Yt),D=new Qp(U,at,Yt,Dt),bt=new $d(U,qt,at),Kt=new of(U,qt,at),at.programs=Tt.programs,x.capabilities=Yt,x.extensions=qt,x.properties=ut,x.renderLists=wt,x.shadowMap=Et,x.state=Dt,x.info=at}pt();const Z=new Jp(x,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(Y,j,!1))},this.getSize=function(E){return E.set(Y,j)},this.setSize=function(E,N,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,j=N,e.width=Math.floor(E*z),e.height=Math.floor(N*z),X===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Y*z,j*z).floor()},this.setDrawingBufferSize=function(E,N,X){Y=E,j=N,z=X,e.width=Math.floor(E*X),e.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,N,X,q){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,N,X,q),Dt.viewport(L.copy(it).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(ft)},this.setScissor=function(E,N,X,q){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,N,X,q),Dt.scissor(O.copy(ft).multiplyScalar(z).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(E){Dt.setScissorTest(mt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(E=!0,N=!0,X=!0){let q=0;if(E){let F=!1;if(R!==null){const ht=R.texture.format;F=ht===ga||ht===ma||ht===pa}if(F){const ht=R.texture.type,xt=ht===En||ht===Zn||ht===Vi||ht===Si||ht===da||ht===fa,At=Ut.getClearColor(),Ct=Ut.getClearAlpha(),kt=At.r,Gt=At.g,Rt=At.b;xt?(g[0]=kt,g[1]=Gt,g[2]=Rt,g[3]=Ct,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=kt,_[1]=Gt,_[2]=Rt,_[3]=Ct,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}N&&(q|=U.DEPTH_BUFFER_BIT),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),wt.dispose(),Jt.dispose(),ut.dispose(),y.dispose(),k.dispose(),Q.dispose(),ae.dispose(),D.dispose(),Tt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ta),Z.removeEventListener("sessionend",Aa),Bn.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=at.autoReset,N=Et.enabled,X=Et.autoUpdate,q=Et.needsUpdate,F=Et.type;pt(),at.autoReset=E,Et.enabled=N,Et.autoUpdate=X,Et.needsUpdate=q,Et.type=F}function vt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zt(E){const N=E.target;N.removeEventListener("dispose",zt),me(N)}function me(E){Ae(E),ut.remove(E)}function Ae(E){const N=ut.get(E).programs;N!==void 0&&(N.forEach(function(X){Tt.releaseProgram(X)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,q,F,ht){N===null&&(N=Xt);const xt=F.isMesh&&F.matrixWorld.determinant()<0,At=Fc(E,N,X,q,F);Dt.setMaterial(q,xt);let Ct=X.index,kt=1;if(q.wireframe===!0){if(Ct=nt.getWireframeAttribute(X),Ct===void 0)return;kt=2}const Gt=X.drawRange,Rt=X.attributes.position;let jt=Gt.start*kt,oe=(Gt.start+Gt.count)*kt;ht!==null&&(jt=Math.max(jt,ht.start*kt),oe=Math.min(oe,(ht.start+ht.count)*kt)),Ct!==null?(jt=Math.max(jt,0),oe=Math.min(oe,Ct.count)):Rt!=null&&(jt=Math.max(jt,0),oe=Math.min(oe,Rt.count));const le=oe-jt;if(le<0||le===1/0)return;ae.setup(F,q,At,X,Ct);let Oe,te=bt;if(Ct!==null&&(Oe=tt.get(Ct),te=Kt,te.setIndex(Oe)),F.isMesh)q.wireframe===!0?(Dt.setLineWidth(q.wireframeLinewidth*Qt()),te.setMode(U.LINES)):te.setMode(U.TRIANGLES);else if(F.isLine){let Lt=q.linewidth;Lt===void 0&&(Lt=1),Dt.setLineWidth(Lt*Qt()),F.isLineSegments?te.setMode(U.LINES):F.isLineLoop?te.setMode(U.LINE_LOOP):te.setMode(U.LINE_STRIP)}else F.isPoints?te.setMode(U.POINTS):F.isSprite&&te.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)te.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Lt=F._multiDrawStarts,un=F._multiDrawCounts,ee=F._multiDrawCount,Ke=Ct?tt.get(Ct).bytesPerElement:1,$n=ut.get(q).currentProgram.getUniforms();for(let ke=0;ke<ee;ke++)$n.setValue(U,"_gl_DrawID",ke),te.render(Lt[ke]/Ke,un[ke])}else if(F.isInstancedMesh)te.renderInstances(jt,le,F.count);else if(X.isInstancedBufferGeometry){const Lt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,un=Math.min(X.instanceCount,Lt);te.renderInstances(jt,le,un)}else te.render(jt,le)};function ie(E,N,X){E.transparent===!0&&E.side===Ne&&E.forceSinglePass===!1?(E.side=Pe,E.needsUpdate=!0,Qi(E,N,X),E.side=Fn,E.needsUpdate=!0,Qi(E,N,X),E.side=Ne):Qi(E,N,X)}this.compile=function(E,N,X=null){X===null&&(X=E),p=Jt.get(X),p.init(N),S.push(p),X.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==X&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const q=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ht=F.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){const At=ht[xt];ie(At,X,F),q.add(At)}else ie(ht,X,F),q.add(ht)}),S.pop(),p=null,q},this.compileAsync=function(E,N,X=null){const q=this.compile(E,N,X);return new Promise(F=>{function ht(){if(q.forEach(function(xt){ut.get(xt).currentProgram.isReady()&&q.delete(xt)}),q.size===0){F(E);return}setTimeout(ht,10)}qt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let qe=null;function hn(E){qe&&qe(E)}function Ta(){Bn.stop()}function Aa(){Bn.start()}const Bn=new wc;Bn.setAnimationLoop(hn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(E){qe=E,Z.setAnimationLoop(E),E===null?Bn.stop():Bn.start()},Z.addEventListener("sessionstart",Ta),Z.addEventListener("sessionend",Aa),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,R),p=Jt.get(E,S.length),p.init(N),S.push(p),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H.setFromProjectionMatrix(St),ct=this.localClippingEnabled,J=lt.init(this.clippingPlanes,ct),m=wt.get(E,M.length),m.init(),M.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&zs(ht,N,-1/0,x.sortObjects)}zs(E,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,$),Ot=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ot&&Ut.addToRenderList(m,E),this.info.render.frame++,J===!0&&lt.beginShadows();const X=p.state.shadowsArray;Et.render(X,E,N),J===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ht=N.cameras;if(F.length>0)for(let xt=0,At=ht.length;xt<At;xt++){const Ct=ht[xt];Ra(q,F,E,Ct)}Ot&&Ut.render(E);for(let xt=0,At=ht.length;xt<At;xt++){const Ct=ht[xt];Ca(m,E,Ct,Ct.viewport)}}else F.length>0&&Ra(q,F,E,N),Ot&&Ut.render(E),Ca(m,E,N);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,N),ae.resetDefaultState(),w=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],J===!0&&lt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function zs(E,N,X,q){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){q&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);const xt=Q.update(E),At=E.material;At.visible&&m.push(E,xt,At,X,It.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){const xt=Q.update(E),At=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),It.copy(xt.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(At)){const Ct=xt.groups;for(let kt=0,Gt=Ct.length;kt<Gt;kt++){const Rt=Ct[kt],jt=At[Rt.materialIndex];jt&&jt.visible&&m.push(E,xt,jt,X,It.z,Rt)}}else At.visible&&m.push(E,xt,At,X,It.z,null)}}const ht=E.children;for(let xt=0,At=ht.length;xt<At;xt++)zs(ht[xt],N,X,q)}function Ca(E,N,X,q){const F=E.opaque,ht=E.transmissive,xt=E.transparent;p.setupLightsView(X),J===!0&&lt.setGlobalState(x.clippingPlanes,X),q&&Dt.viewport(L.copy(q)),F.length>0&&ji(F,N,X),ht.length>0&&ji(ht,N,X),xt.length>0&&ji(xt,N,X),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Ra(E,N,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Jn(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Yi:En,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const ht=p.state.transmissionRenderTarget[q.id],xt=q.viewport||L;ht.setSize(xt.z,xt.w);const At=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(G),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Ot&&Ut.render(X);const Ct=x.toneMapping;x.toneMapping=Nn;const kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),J===!0&&lt.setGlobalState(x.clippingPlanes,q),ji(E,X,q),T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Rt=0,jt=N.length;Rt<jt;Rt++){const oe=N[Rt],le=oe.object,Oe=oe.geometry,te=oe.material,Lt=oe.group;if(te.side===Ne&&le.layers.test(q.layers)){const un=te.side;te.side=Pe,te.needsUpdate=!0,Pa(le,X,q,Oe,te,Lt),te.side=un,te.needsUpdate=!0,Gt=!0}}Gt===!0&&(T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht))}x.setRenderTarget(At),x.setClearColor(G,W),kt!==void 0&&(q.viewport=kt),x.toneMapping=Ct}function ji(E,N,X){const q=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ht=E.length;F<ht;F++){const xt=E[F],At=xt.object,Ct=xt.geometry,kt=q===null?xt.material:q,Gt=xt.group;At.layers.test(X.layers)&&Pa(At,N,X,Ct,kt,Gt)}}function Pa(E,N,X,q,F,ht){E.onBeforeRender(x,N,X,q,F,ht),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,N,X,q,E,ht),F.transparent===!0&&F.side===Ne&&F.forceSinglePass===!1?(F.side=Pe,F.needsUpdate=!0,x.renderBufferDirect(X,N,q,F,E,ht),F.side=Fn,F.needsUpdate=!0,x.renderBufferDirect(X,N,q,F,E,ht),F.side=Ne):x.renderBufferDirect(X,N,q,F,E,ht),E.onAfterRender(x,N,X,q,F,ht)}function Qi(E,N,X){N.isScene!==!0&&(N=Xt);const q=ut.get(E),F=p.state.lights,ht=p.state.shadowsArray,xt=F.state.version,At=Tt.getParameters(E,F.state,ht,N,X),Ct=Tt.getProgramCacheKey(At);let kt=q.programs;q.environment=E.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",zt),kt=new Map,q.programs=kt);let Gt=kt.get(Ct);if(Gt!==void 0){if(q.currentProgram===Gt&&q.lightsStateVersion===xt)return Ia(E,At),Gt}else At.uniforms=Tt.getUniforms(E),E.onBeforeCompile(At,x),Gt=Tt.acquireProgram(At,Ct),kt.set(Ct,Gt),q.uniforms=At.uniforms;const Rt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=lt.uniform),Ia(E,At),q.needsLights=Bc(E),q.lightsStateVersion=xt,q.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=Gt,q.uniformsList=null,Gt}function La(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ls.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ia(E,N){const X=ut.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Fc(E,N,X,q,F){N.isScene!==!0&&(N=Xt),T.resetTextureUnits();const ht=N.fog,xt=q.isMeshStandardMaterial?N.environment:null,At=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:bi,Ct=(q.isMeshStandardMaterial?k:y).get(q.envMap||xt),kt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Rt=!!X.morphAttributes.position,jt=!!X.morphAttributes.normal,oe=!!X.morphAttributes.color;let le=Nn;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=x.toneMapping);const Oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=Oe!==void 0?Oe.length:0,Lt=ut.get(q),un=p.state.lights;if(J===!0&&(ct===!0||E!==v)){const He=E===v&&q.id===w;lt.setState(q,E,He)}let ee=!1;q.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==un.state.version||Lt.outputColorSpace!==At||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==Ct||q.fog===!0&&Lt.fog!==ht||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==lt.numPlanes||Lt.numIntersection!==lt.numIntersection)||Lt.vertexAlphas!==kt||Lt.vertexTangents!==Gt||Lt.morphTargets!==Rt||Lt.morphNormals!==jt||Lt.morphColors!==oe||Lt.toneMapping!==le||Lt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Lt.__version=q.version);let Ke=Lt.currentProgram;ee===!0&&(Ke=Qi(q,N,F));let $n=!1,ke=!1,Ri=!1;const he=Ke.getUniforms(),nn=Lt.uniforms;if(Dt.useProgram(Ke.program)&&($n=!0,ke=!0,Ri=!0),q.id!==w&&(w=q.id,ke=!0),$n||v!==E){Dt.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),Hl(rt),Vl(rt),he.setValue(U,"projectionMatrix",rt)):he.setValue(U,"projectionMatrix",E.projectionMatrix),he.setValue(U,"viewMatrix",E.matrixWorldInverse);const bn=he.map.cameraPosition;bn!==void 0&&bn.setValue(U,Pt.setFromMatrixPosition(E.matrixWorld)),Yt.logarithmicDepthBuffer&&he.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&he.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,ke=!0,Ri=!0)}if(F.isSkinnedMesh){he.setOptional(U,F,"bindMatrix"),he.setOptional(U,F,"bindMatrixInverse");const He=F.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),he.setValue(U,"boneTexture",He.boneTexture,T))}F.isBatchedMesh&&(he.setOptional(U,F,"batchingTexture"),he.setValue(U,"batchingTexture",F._matricesTexture,T),he.setOptional(U,F,"batchingIdTexture"),he.setValue(U,"batchingIdTexture",F._indirectTexture,T),he.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(U,"batchingColorTexture",F._colorsTexture,T));const Pi=X.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Bt.update(F,X,Ke),(ke||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,he.setValue(U,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(nn.envMap.value=Ct,nn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(nn.envMapIntensity.value=N.environmentIntensity),ke&&(he.setValue(U,"toneMappingExposure",x.toneMappingExposure),Lt.needsLights&&Oc(nn,Ri),ht&&q.fog===!0&&gt.refreshFogUniforms(nn,ht),gt.refreshMaterialUniforms(nn,q,z,j,p.state.transmissionRenderTarget[E.id]),Ls.upload(U,La(Lt),nn,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ls.upload(U,La(Lt),nn,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&he.setValue(U,"center",F.center),he.setValue(U,"modelViewMatrix",F.modelViewMatrix),he.setValue(U,"normalMatrix",F.normalMatrix),he.setValue(U,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const He=q.uniformsGroups;for(let bn=0,Tn=He.length;bn<Tn;bn++){const Da=He[bn];D.update(Da,Ke),D.bind(Da,Ke)}}return Ke}function Oc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Bc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,N,X){ut.get(E.texture).__webglTexture=N,ut.get(E.depthTexture).__webglTexture=X;const q=ut.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const X=ut.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){R=E,A=N,C=X;let q=!0,F=null,ht=!1,xt=!1;if(E){const Ct=ut.get(E);if(Ct.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Ct.__hasExternalTextures)T.rebindTextures(E,ut.get(E.texture).__webglTexture,ut.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Rt=E.depthTexture;if(Ct.__boundDepthTexture!==Rt){if(Rt!==null&&ut.has(Rt)&&(E.width!==Rt.image.width||E.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(xt=!0);const Gt=ut.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[N])?F=Gt[N][X]:F=Gt[N],ht=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?F=ut.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[X]:F=Gt,L.copy(E.viewport),O.copy(E.scissor),B=E.scissorTest}else L.copy(it).multiplyScalar(z).floor(),O.copy(ft).multiplyScalar(z).floor(),B=mt;if(Dt.bindFramebuffer(U.FRAMEBUFFER,F)&&q&&Dt.drawBuffers(E,F),Dt.viewport(L),Dt.scissor(O),Dt.setScissorTest(B),ht){const Ct=ut.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,X)}else if(xt){const Ct=ut.get(E.texture),kt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,X||0,kt)}w=-1},this.readRenderTargetPixels=function(E,N,X,q,F,ht,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){Dt.bindFramebuffer(U.FRAMEBUFFER,At);try{const Ct=E.texture,kt=Ct.format,Gt=Ct.type;if(!Yt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-q&&X>=0&&X<=E.height-F&&U.readPixels(N,X,q,F,Vt.convert(kt),Vt.convert(Gt),ht)}finally{const Ct=R!==null?ut.get(R).__webglFramebuffer:null;Dt.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(E,N,X,q,F,ht,xt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){const Ct=E.texture,kt=Ct.format,Gt=Ct.type;if(!Yt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-q&&X>=0&&X<=E.height-F){Dt.bindFramebuffer(U.FRAMEBUFFER,At);const Rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.bufferData(U.PIXEL_PACK_BUFFER,ht.byteLength,U.STREAM_READ),U.readPixels(N,X,q,F,Vt.convert(kt),Vt.convert(Gt),0);const jt=R!==null?ut.get(R).__webglFramebuffer:null;Dt.bindFramebuffer(U.FRAMEBUFFER,jt);const oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gl(U,oe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ht),U.deleteBuffer(Rt),U.deleteSync(oe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,X=0){E.isTexture!==!0&&(Fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-X),F=Math.floor(E.image.width*q),ht=Math.floor(E.image.height*q),xt=N!==null?N.x:0,At=N!==null?N.y:0;T.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,xt,At,F,ht),Dt.unbindTexture()},this.copyTextureToTexture=function(E,N,X=null,q=null,F=0){E.isTexture!==!0&&(Fi("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,X=null);let ht,xt,At,Ct,kt,Gt,Rt,jt,oe;const le=E.isCompressedTexture?E.mipmaps[F]:E.image;X!==null?(ht=X.max.x-X.min.x,xt=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,kt=X.min.y,Gt=X.isBox3?X.min.z:0):(ht=le.width,xt=le.height,At=le.depth||1,Ct=0,kt=0,Gt=0),q!==null?(Rt=q.x,jt=q.y,oe=q.z):(Rt=0,jt=0,oe=0);const Oe=Vt.convert(N.format),te=Vt.convert(N.type);let Lt;N.isData3DTexture?(T.setTexture3D(N,0),Lt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Lt=U.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Lt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const un=U.getParameter(U.UNPACK_ROW_LENGTH),ee=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ke=U.getParameter(U.UNPACK_SKIP_PIXELS),$n=U.getParameter(U.UNPACK_SKIP_ROWS),ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),U.pixelStorei(U.UNPACK_SKIP_ROWS,kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gt);const Ri=E.isDataArrayTexture||E.isData3DTexture,he=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const nn=ut.get(E),Pi=ut.get(N),He=ut.get(nn.__renderTarget),bn=ut.get(Pi.__renderTarget);Dt.bindFramebuffer(U.READ_FRAMEBUFFER,He.__webglFramebuffer),Dt.bindFramebuffer(U.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Tn=0;Tn<At;Tn++)Ri&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.get(E).__webglTexture,F,Gt+Tn),E.isDepthTexture?(he&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.get(N).__webglTexture,F,oe+Tn),U.blitFramebuffer(Ct,kt,ht,xt,Rt,jt,ht,xt,U.DEPTH_BUFFER_BIT,U.NEAREST)):he?U.copyTexSubImage3D(Lt,F,Rt,jt,oe+Tn,Ct,kt,ht,xt):U.copyTexSubImage2D(Lt,F,Rt,jt,oe+Tn,Ct,kt,ht,xt);Dt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else he?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Lt,F,Rt,jt,oe,ht,xt,At,Oe,te,le.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Lt,F,Rt,jt,oe,ht,xt,At,Oe,le.data):U.texSubImage3D(Lt,F,Rt,jt,oe,ht,xt,At,Oe,te,le):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,Rt,jt,ht,xt,Oe,te,le.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,Rt,jt,le.width,le.height,Oe,le.data):U.texSubImage2D(U.TEXTURE_2D,F,Rt,jt,ht,xt,Oe,te,le);U.pixelStorei(U.UNPACK_ROW_LENGTH,un),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,$n),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke),F===0&&N.generateMipmaps&&U.generateMipmap(Lt),Dt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,X=null,q=null,F=0){return E.isTexture!==!0&&(Fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0),Fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,X,q,F)},this.initRenderTarget=function(E){ut.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Dt.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,Dt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Sa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pc extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fs extends Fe{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new ot:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],r=[],a=[],o=new I,c=new pe;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ye(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ya extends ln{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ot){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class e0 extends ya{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wa(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ss=new I,mr=new wa,gr=new wa,_r=new wa;class n0 extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Ss.subVectors(i[0],i[1]).add(i[0]),l=Ss);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),mr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),gr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),_r.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(mr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),gr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),_r.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(mr.calc(c),gr.calc(c),_r.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Do(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function i0(s,t){const e=1-s;return e*e*t}function s0(s,t){return 2*(1-s)*s*t}function r0(s,t){return s*s*t}function zi(s,t,e,n){return i0(s,t)+s0(s,e)+r0(s,n)}function a0(s,t){const e=1-s;return e*e*e*t}function o0(s,t){const e=1-s;return 3*e*e*s*t}function c0(s,t){return 3*(1-s)*s*s*t}function l0(s,t){return s*s*s*t}function Gi(s,t,e,n,i){return a0(s,t)+o0(s,e)+c0(s,n)+l0(s,i)}class Lc extends ln{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,i.x,r.x,a.x,o.x),Gi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class h0 extends ln{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,i.x,r.x,a.x,o.x),Gi(t,i.y,r.y,a.y,o.y),Gi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ic extends ln{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class u0 extends ln{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dc extends ln{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(zi(t,i.x,r.x,a.x),zi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d0 extends ln{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(zi(t,i.x,r.x,a.x),zi(t,i.y,r.y,a.y),zi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uc extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Do(o,c.x,l.x,h.x,u.x),Do(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:e0,CatmullRomCurve3:n0,CubicBezierCurve:Lc,CubicBezierCurve3:h0,EllipseCurve:ya,LineCurve:Ic,LineCurve3:u0,QuadraticBezierCurve:Dc,QuadraticBezierCurve3:d0,SplineCurve:Uc});class f0 extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Uo[i.type]().fromJSON(i))}return this}}class p0 extends f0{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ic(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Dc(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Lc(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new ya(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ji extends Be{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ye(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new I,d=new ot,f=new I,g=new I,_=new I;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const S=n+M*h*i,x=Math.sin(S),P=Math.cos(S);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*x,u.y=t[A].y,u.z=t[A].x*P,a.push(u.x,u.y,u.z),d.x=M/e,d.y=A/(t.length-1),o.push(d.x,d.y);const C=c[3*A+0]*x,R=c[3*A+1],w=c[3*A+0]*P;l.push(C,R,w)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){const x=S+M*t.length,P=x,A=x+t.length,C=x+t.length+1,R=x+1;r.push(P,A,R),r.push(C,R,A)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.points,t.segments,t.phiStart,t.phiLength)}}class $i extends Ji{constructor(t=1,e=1,n=4,i=8){const r=new p0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new $i(t.radius,t.length,t.capSegments,t.radialSegments)}}class yt extends Be{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function M(){const x=new I,P=new I;let A=0;const C=(e-t)/n;for(let R=0;R<=r;R++){const w=[],v=R/r,L=v*(e-t)+t;for(let O=0;O<=i;O++){const B=O/i,G=B*c+o,W=Math.sin(G),Y=Math.cos(G);P.x=L*W,P.y=-v*n+m,P.z=L*Y,u.push(P.x,P.y,P.z),x.set(W,C,Y).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-v),w.push(g++)}_.push(w)}for(let R=0;R<i;R++)for(let w=0;w<r;w++){const v=_[w][R],L=_[w+1][R],O=_[w+1][R+1],B=_[w][R+1];(t>0||w!==0)&&(h.push(v,L,B),A+=3),(e>0||w!==r-1)&&(h.push(L,O,B),A+=3)}l.addGroup(p,A,0),p+=A}function S(x){const P=g,A=new ot,C=new I;let R=0;const w=x===!0?t:e,v=x===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const L=g;for(let O=0;O<=i;O++){const G=O/i*c+o,W=Math.cos(G),Y=Math.sin(G);C.x=w*Y,C.y=m*v,C.z=w*W,u.push(C.x,C.y,C.z),d.push(0,v,0),A.x=W*.5+.5,A.y=Y*.5*v+.5,f.push(A.x,A.y),g++}for(let O=0;O<i;O++){const B=P+O,G=L+O;x===!0?h.push(G,G+1,B):h.push(G+1,G,B),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ei extends yt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ei(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ea extends Be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new I,x=new I,P=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],x),f(e[A+2],P),c(S,x,P,M)}function c(M,S,x,P){const A=P+1,C=[];for(let R=0;R<=A;R++){C[R]=[];const w=M.clone().lerp(x,R/A),v=S.clone().lerp(x,R/A),L=A-R;for(let O=0;O<=L;O++)O===0&&R===A?C[R][O]=w:C[R][O]=w.clone().lerp(v,O/L)}for(let R=0;R<A;R++)for(let w=0;w<2*(A-R)-1;w++){const v=Math.floor(w/2);w%2===0?(d(C[R][v+1]),d(C[R+1][v]),d(C[R][v])):(d(C[R][v+1]),d(C[R+1][v+1]),d(C[R+1][v]))}}function l(M){const S=new I;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(M),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const M=new I;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const x=m(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;a.push(x,1-P)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const S=a[M+0],x=a[M+2],P=a[M+4],A=Math.max(S,x,P),C=Math.min(S,x,P);A>.9&&C<.1&&(S<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),P<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,S){const x=M*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const M=new I,S=new I,x=new I,P=new I,A=new ot,C=new ot,R=new ot;for(let w=0,v=0;w<r.length;w+=9,v+=6){M.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(a[v+0],a[v+1]),C.set(a[v+2],a[v+3]),R.set(a[v+4],a[v+5]),P.copy(M).add(S).add(x).divideScalar(3);const L=m(P);_(A,v+0,M,L),_(C,v+2,S,L),_(R,v+4,x,L)}}function _(M,S,x,P){P<0&&M.x===1&&(a[S]=M.x-1),x.x===0&&x.z===0&&(a[S]=P/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.vertices,t.indices,t.radius,t.details)}}class Xi extends Ea{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xi(t.radius,t.detail)}}class ba extends Be{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new I,g=new ot;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,x=M+n+1,P=M+n+2,A=M+1;o.push(S,x,A),o.push(x,P,A)}}this.setIndex(o),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ne extends Be{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-S),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const S=h[p][M+1],x=h[p][M],P=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&f.push(S,x,A),(p!==n-1||c<Math.PI)&&f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class on extends Be{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class K extends Zi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nc extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class m0 extends Nc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vr=new pe,No=new I,Fo=new I;class g0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;No.setFromMatrixPosition(t.matrixWorld),e.position.copy(No),Fo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fo),e.updateMatrixWorld(),vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _0 extends g0{constructor(){super(new Ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oo extends Nc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new _0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);const Bo="kpw_audio_muted";class v0{constructor(){this.ctx=null,this.muted=localStorage.getItem(Bo)==="true",this.unlocked=!1,this.stepTimer=0,this.bgmInterval=null,this.bgmBeat=0}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.unlocked=!0}setMuted(t){this.muted=!!t;try{localStorage.setItem(Bo,String(this.muted))}catch{}return this.muted&&(this.stopBGM(),this.stopSpeech()),this.muted}toggleMute(){return this.setMuted(!this.muted)}canPlay(){return this.muted||(this.ctx||this.initContext(),!this.ctx)?!1:(this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0)}playStep(t=!0){if(!this.canPlay())return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle";const r=t?135:155;n.frequency.setValueAtTime(r,e),n.frequency.exponentialRampToValueAtTime(55,e+.055),i.gain.setValueAtTime(.11,e),i.gain.exponentialRampToValueAtTime(.001,e+.06),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.065)}playJump(t=!1){if(!this.canPlay())return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(t?760:540,e+.18),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.001,e+.2),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.21)}playSlide(){if(!this.canPlay())return;const t=this.ctx.currentTime,e=this.ctx.sampleRate*.18,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(900,t),a.frequency.exponentialRampToValueAtTime(320,t+.18);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,t),o.gain.exponentialRampToValueAtTime(.01,t+.18),r.connect(a),a.connect(o),o.connect(this.ctx.destination),r.start(t)}playLaneSwitch(){if(!this.canPlay())return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(310,t),e.frequency.exponentialRampToValueAtTime(420,t+.07),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.075),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.08)}playCoin(){if(!this.canPlay())return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(987.77,t),e.frequency.setValueAtTime(1318.51,t+.06),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.23)}playPowerup(){if(!this.canPlay())return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,t+i*.055),a.gain.setValueAtTime(.2,t+i*.055),a.gain.exponentialRampToValueAtTime(.001,t+i*.055+.16),r.connect(a),a.connect(this.ctx.destination),r.start(t+i*.055),r.stop(t+i*.055+.17)})}playCrash(){if(!this.canPlay())return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(38,t+.28),n.gain.setValueAtTime(.32,t),n.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.31)}playSchoolBell(){if(!this.canPlay())return;const t=this.ctx.currentTime;[{f:659.25,t:0,d:.28},{f:523.25,t:.28,d:.28},{f:587.33,t:.56,d:.28},{f:392,t:.84,d:.45}].forEach(n=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(n.f,t+n.t),r.gain.setValueAtTime(.22,t+n.t),r.gain.exponentialRampToValueAtTime(.001,t+n.t+n.d),i.connect(r),r.connect(this.ctx.destination),i.start(t+n.t),i.stop(t+n.t+n.d+.02)})}playTeacherWhistle(){if(!this.canPlay())return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(2650,t),n.type="sine",n.frequency.setValueAtTime(42,t),i.gain.setValueAtTime(180,t),n.connect(i),i.connect(e.frequency),r.gain.setValueAtTime(.01,t),r.gain.linearRampToValueAtTime(.24,t+.03),r.gain.setValueAtTime(.24,t+.32),r.gain.exponentialRampToValueAtTime(.001,t+.42),e.connect(r),r.connect(this.ctx.destination),e.start(t),n.start(t),e.stop(t+.43),n.stop(t+.43)}playTeacherBark(){if(!this.canPlay())return;const t=this.ctx.currentTime;[190,240,175,260,150].forEach((n,i)=>{const r=t+i*.075,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(n,r),a.frequency.linearRampToValueAtTime(n*.85,r+.06),o.gain.setValueAtTime(.14,r),o.gain.exponentialRampToValueAtTime(.001,r+.065),a.connect(o),o.connect(this.ctx.destination),a.start(r),a.stop(r+.07)})}speakTeacher(t){if(!this.muted)try{if(!("speechSynthesis"in window)||typeof SpeechSynthesisUtterance>"u")return;const e=String(t).replace(/["“”]/g,"").trim();if(!e)return;window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(e);n.lang="id-ID",n.rate=1.08,n.pitch=.82,n.volume=.01;const r=(window.speechSynthesis.getVoices?window.speechSynthesis.getVoices():[]).find(a=>a.lang&&a.lang.toLowerCase().startsWith("id"))||null;r&&(n.voice=r),window.speechSynthesis.speak(n)}catch{}}stopSpeech(){try{"speechSynthesis"in window&&window.speechSynthesis.cancel()}catch{}}startBGM(){if(this.stopBGM(),this.muted)return;this.bgmBeat=0;const t=[110,110,130.81,146.83,110,110,164.81,146.83];this.bgmInterval=window.setInterval(()=>{if(this.muted||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx.currentTime,n=t[this.bgmBeat%t.length];this.bgmBeat++;const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(n,e),r.gain.setValueAtTime(.065,e),r.gain.exponentialRampToValueAtTime(.001,e+.16),i.connect(r),r.connect(this.ctx.destination),i.start(e),i.stop(e+.17)},210)}stopBGM(){this.bgmInterval&&(clearInterval(this.bgmInterval),this.bgmInterval=null)}}function fe(s,{srgb:t=!0,repeatX:e=1,repeatY:n=1,anisotropy:i=4}={}){const r=new Fs(s);return r.colorSpace=t?be:Mn,r.wrapS=Hi,r.wrapT=Hi,r.repeat.set(e,n),r.generateMipmaps=!0,r.minFilter=Dn,r.magFilter=Qe,r.anisotropy=i,r.needsUpdate=!0,r}function Ee(s,t=2){const e=s.width,n=s.height,r=s.getContext("2d").getImageData(0,0,e,n).data,a=document.createElement("canvas");a.width=e,a.height=n;const o=a.getContext("2d"),c=o.createImageData(e,n),l=c.data,h=(u,d)=>{const f=(u%e+e)%e,g=(d%n+n)%n;return r[(g*e+f)*4]/255};for(let u=0;u<n;u++)for(let d=0;d<e;d++){const f=h(d-1,u),g=h(d+1,u),_=h(d,u-1),m=h(d,u+1),p=(f-g)*t,M=(_-m)*t,S=1,x=Math.sqrt(p*p+M*M+S*S)||1,P=(u*e+d)*4;l[P]=Math.round((p/x*.5+.5)*255),l[P+1]=Math.round((M/x*.5+.5)*255),l[P+2]=Math.round((S/x*.5+.5)*255),l[P+3]=255}return o.putImageData(c,0,0),a}function se(s,t,e){let n=s*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n=n^n>>>16,(n>>>0)/4294967295}function sn(s,t,e,n=1){const i=s*e,r=t*e,a=Math.floor(i),o=Math.floor(r),c=i-a,l=r-o,h=c*c*(3-2*c),u=l*l*(3-2*l),d=(a%e+e)%e,f=(o%e+e)%e,g=(d+1)%e,_=(f+1)%e,m=se(d,f,n),p=se(g,f,n),M=se(d,_,n),S=se(g,_,n);return m+(p-m)*h+(M-m)*u+(m-p-M+S)*h*u}function ce(s,t,e=4,n=4,i=1){let r=.5,a=0,o=0,c=e;for(let l=0;l<n;l++)a+=sn(s,t,c,i+l*17)*r,o+=r,r*=.5,c*=2;return a/o}function Le(s,t,e=s){const n=document.createElement("canvas");n.width=s,n.height=e;const i=n.getContext("2d"),r=i.createImageData(s,e),a=r.data;for(let o=0;o<e;o++)for(let c=0;c<s;c++){const l=t(c/s,o/e,c,o),h=(o*s+c)*4;a[h]=l[0],a[h+1]=l[1],a[h+2]=l[2],a[h+3]=l.length>3?l[3]:255}return i.putImageData(r,0,0),n}function xr(s){const t=s.replace("#","");return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}const Ft=s=>s<0?0:s>255?255:s;class x0{constructor(t,e=4){this.renderer=t,this.anisotropy=e,this.cache={}}setAnisotropy(t){this.anisotropy=t,Object.values(this.cache).forEach(e=>{e&&e.isTexture?(e.anisotropy=t,e.needsUpdate=!0):e&&typeof e=="object"&&Object.values(e).forEach(n=>{n&&n.isTexture&&(n.anisotropy=t,n.needsUpdate=!0)})})}getDaylightEnvMap(){if(this.cache.envMap)return this.cache.envMap;if(!this.renderer)return null;const t=new ca(this.renderer);t.compileEquirectangularShader();const e=new Pc,n=new ne(40,24,16),i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),a=r.createLinearGradient(0,0,0,128);a.addColorStop(0,"#2563eb"),a.addColorStop(.45,"#93c5fd"),a.addColorStop(.52,"#fef9c3"),a.addColorStop(.6,"#4d7c5b"),a.addColorStop(1,"#d6d3cb"),r.fillStyle=a,r.fillRect(0,0,128,128);const o=new Fs(i);o.colorSpace=be;const c=new Ye({map:o,side:Pe});e.add(new b(n,c));const l=new b(new ne(3.2,12,12),new Ye({color:16776171}));l.position.set(-18,22,12),e.add(l);const h=t.fromScene(e,.035);return this.cache.envMap=h.texture,t.dispose(),n.dispose(),c.dispose(),o.dispose(),this.cache.envMap}getBatikMaroonSet(){if(this.cache.batik)return this.cache.batik;const t=512,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.fillStyle="#5e141f",n.fillRect(0,0,t,t);for(let c=0;c<t;c+=2)n.fillStyle=c%4===0?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.04)",n.fillRect(0,c,t,1);for(let c=0;c<t;c+=2)n.fillStyle=c%4===0?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.03)",n.fillRect(c,0,1,t);const i=64;for(let c=0;c<t;c+=i)for(let l=0;l<t;l+=i){const h=l+i/2,u=c+i/2;n.strokeStyle="#d49b35",n.lineWidth=2.2,n.beginPath(),n.moveTo(h,c+4),n.lineTo(l+i-4,u),n.lineTo(h,c+i-4),n.lineTo(l+4,u),n.closePath(),n.stroke(),[[-12,-12,-Math.PI/4],[12,-12,Math.PI/4],[-12,12,-Math.PI*.75],[12,12,Math.PI*.75]].forEach(([g,_,m])=>{n.save(),n.translate(h+g,u+_),n.rotate(m),n.fillStyle="#f8fafc",n.beginPath(),n.ellipse(0,0,9.5,5.2,0,0,Math.PI*2),n.fill(),n.fillStyle="#e5a93b",n.beginPath(),n.arc(0,0,2.3,0,Math.PI*2),n.fill(),n.restore()}),n.fillStyle="#eab308",n.beginPath(),n.arc(h,u,5.2,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(h,u,2.2,0,Math.PI*2),n.fill(),[[l,c],[l+i,c],[l,c+i],[l+i,c+i]].forEach(([g,_])=>{n.fillStyle="#d99b26",n.beginPath(),n.arc(g,_,4.5,0,Math.PI*2),n.fill(),n.fillStyle="#f1f5f9",n.beginPath(),n.arc(g,_,2,0,Math.PI*2),n.fill()})}const r=document.createElement("canvas");r.width=256,r.height=256;const a=r.getContext("2d");a.fillStyle="#808080",a.fillRect(0,0,256,256);for(let c=0;c<6;c++){const l=30+c*38,h=a.createLinearGradient(0,l-12,0,l+12);h.addColorStop(0,"#808080"),h.addColorStop(.5,c%2===0?"#a8a8a8":"#5c5c5c"),h.addColorStop(1,"#808080"),a.fillStyle=h,a.fillRect(0,l-12,256,24)}for(let c=0;c<256;c+=2)a.fillStyle=c%4===0?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",a.fillRect(0,c,256,1);const o=Ee(r,1.5);return this.cache.batik={map:fe(e,{srgb:!0,repeatX:2.2,repeatY:1.05,anisotropy:this.anisotropy}),normalMap:fe(o,{srgb:!1,repeatX:2.2,repeatY:1.05,anisotropy:this.anisotropy})},this.cache.batik}getWhiteShirtSet(){if(this.cache.whiteShirt)return this.cache.whiteShirt;const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#f5f7fa",e.fillRect(0,0,256,256);for(let a=0;a<5;a++){const o=36+a*44,c=e.createLinearGradient(0,o-16,0,o+16);c.addColorStop(0,"rgba(203,213,225,0)"),c.addColorStop(.5,"rgba(148,163,184,0.18)"),c.addColorStop(1,"rgba(203,213,225,0)"),e.fillStyle=c,e.fillRect(0,o-16,256,32)}const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle="#808080",i.fillRect(0,0,256,256);for(let a=0;a<6;a++){const o=24+a*40,c=i.createLinearGradient(0,o-14,0,o+14);c.addColorStop(0,"#808080"),c.addColorStop(.5,"#a2a2a2"),c.addColorStop(1,"#808080"),i.fillStyle=c,i.fillRect(0,o-14,256,28)}const r=Ee(n,1.35);return this.cache.whiteShirt={map:fe(t,{srgb:!0,repeatX:1,repeatY:1,anisotropy:this.anisotropy}),normalMap:fe(r,{srgb:!1,repeatX:1,repeatY:1,anisotropy:this.anisotropy})},this.cache.whiteShirt}getTrouserFabricSet(t="#5b6b82"){const e=`trouser_${t}`;if(this.cache[e])return this.cache[e];const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle="rgba(255,255,255,0.04)",i.lineWidth=1;for(let a=-256;a<512;a+=4)i.beginPath(),i.moveTo(a,0),i.lineTo(a+256,256),i.stroke();const r=i.createLinearGradient(0,100,0,156);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(.5,"rgba(0,0,0,0.16)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,100,256,56),this.cache[e]={map:fe(n,{srgb:!0,repeatX:1,repeatY:1,anisotropy:this.anisotropy})},this.cache[e]}getCeramicFloorSet(){if(this.cache.ceramic)return this.cache.ceramic;const t=512,e=4,n=t/e,i=document.createElement("canvas");i.width=t,i.height=t;const r=i.getContext("2d"),a=document.createElement("canvas");a.width=t,a.height=t;const o=a.getContext("2d"),c=document.createElement("canvas");c.width=t,c.height=t;const l=c.getContext("2d");r.fillStyle="#c4bfb6",r.fillRect(0,0,t,t),o.fillStyle="#e6e6e6",o.fillRect(0,0,t,t),l.fillStyle="#383838",l.fillRect(0,0,t,t);let h=17;const u=()=>(h=h*16807%2147483647,(h-1)/2147483646),d=1.5;for(let m=0;m<e;m++)for(let p=0;p<e;p++){const M=p*n+d,S=m*n+d,x=n-d*2,P=n-d*2,A=235+Math.floor((u()-.5)*7);r.fillStyle=`rgb(${A}, ${A-2}, ${A-6})`,r.fillRect(M,S,x,P);const C=r.createLinearGradient(M,S,M+x,S+P);C.addColorStop(0,"rgba(255,255,255,0.14)"),C.addColorStop(.5,"rgba(205,198,186,0.12)"),C.addColorStop(1,"rgba(255,255,255,0.08)"),r.fillStyle=C,r.fillRect(M,S,x,P);const R=64+Math.floor(u()*14);o.fillStyle=`rgb(${R},${R},${R})`,o.fillRect(M,S,x,P),l.fillStyle="#b8b8b8",l.fillRect(M,S,x,P),l.fillStyle="#e0e0e0",l.fillRect(M+2,S+2,x-4,P-4)}const f=Ee(c,2.2),g=4.2,_=11;return this.cache.ceramic={map:fe(i,{srgb:!0,repeatX:g,repeatY:_,anisotropy:this.anisotropy}),roughnessMap:fe(a,{srgb:!1,repeatX:g,repeatY:_,anisotropy:this.anisotropy}),normalMap:fe(f,{srgb:!1,repeatX:g,repeatY:_,anisotropy:this.anisotropy})},this.cache.ceramic}getParkingFloorSet(){if(this.cache.paving)return this.cache.paving;const t=512,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=document.createElement("canvas");i.width=t,i.height=t;const r=i.getContext("2d");n.fillStyle="#78756e",n.fillRect(0,0,t,t),r.fillStyle="#303030",r.fillRect(0,0,t,t);const a=8,o=4,c=t/o,l=t/a;let h=41;const u=()=>(h=h*16807%2147483647,(h-1)/2147483646);for(let f=0;f<a;f++){const g=f%2*(c*.5);for(let _=-1;_<=o;_++){const m=_*c+g+2,p=f*l+2,M=148+Math.floor((u()-.5)*24);n.fillStyle=`rgb(${M}, ${M-3}, ${M-7})`,n.fillRect(m,p,c-4,l-4),r.fillStyle="#d4d4d4",r.fillRect(m+1,p+1,c-6,l-6)}}const d=Ee(i,2.6);return this.cache.paving={map:fe(e,{srgb:!0,repeatX:5,repeatY:12,anisotropy:this.anisotropy}),normalMap:fe(d,{srgb:!1,repeatX:5,repeatY:12,anisotropy:this.anisotropy})},this.cache.paving}getPlasterWallTexture(t,e=!1){const n=`wall_${t}_${e}`;if(this.cache[n])return this.cache[n];const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");r.fillStyle=t,r.fillRect(0,0,256,256);let a=99;const o=()=>(a=a*16807%2147483647,(a-1)/2147483646);for(let l=0;l<220;l++){const h=o()*256,u=o()*256,d=6+o()*22;r.fillStyle=o()>.5?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.03)",r.beginPath(),r.arc(h,u,d,0,Math.PI*2),r.fill()}if(e){const l=r.createLinearGradient(0,200,0,256);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(.75,"rgba(30,25,20,0.12)"),l.addColorStop(1,"rgba(15,12,10,0.32)"),r.fillStyle=l,r.fillRect(0,200,256,56)}const c=r.createLinearGradient(0,0,0,28);return c.addColorStop(0,"rgba(0,0,0,0.18)"),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.fillRect(0,0,256,28),this.cache[n]=fe(i,{srgb:!0,repeatX:e?4:2,repeatY:1,anisotropy:this.anisotropy}),this.cache[n]}getPlasterNormalMap(){if(this.cache.plasterNorm)return this.cache.plasterNorm;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,128,128);let n=7;const i=()=>(n=n*16807%2147483647,(n-1)/2147483646);for(let a=0;a<128;a+=2)for(let o=0;o<128;o+=2){const c=116+Math.floor(i()*24);e.fillStyle=`rgb(${c},${c},${c})`,e.fillRect(o,a,2,2)}const r=Ee(t,1.1);return this.cache.plasterNorm=fe(r,{srgb:!1,repeatX:6,repeatY:2,anisotropy:this.anisotropy}),this.cache.plasterNorm}getCeilingGridTexture(){if(this.cache.ceiling)return this.cache.ceiling;const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#e5e7eb",e.fillRect(0,0,256,256),e.strokeStyle="#cbd5e1",e.lineWidth=3;for(let n=0;n<=256;n+=64)e.beginPath(),e.moveTo(n,0),e.lineTo(n,256),e.stroke(),e.beginPath(),e.moveTo(0,n),e.lineTo(256,n),e.stroke();return this.cache.ceiling=fe(t,{srgb:!0,repeatX:3,repeatY:8,anisotropy:this.anisotropy}),this.cache.ceiling}getWoodTexture(t="#7c431e"){const e=`wood_${t}`;if(this.cache[e])return this.cache[e];const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256);for(let r=0;r<256;r+=3)i.fillStyle=r%6===0?"rgba(0,0,0,0.08)":"rgba(255,220,180,0.04)",i.fillRect(0,r,256,2);return this.cache[e]=fe(n,{srgb:!0,repeatX:1,repeatY:1,anisotropy:this.anisotropy}),this.cache[e]}getContactShadowTexture(){if(this.cache.contactShadow)return this.cache.contactShadow;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,6,64,64,60);n.addColorStop(0,"rgba(15, 23, 42, 0.52)"),n.addColorStop(.55,"rgba(15, 23, 42, 0.22)"),n.addColorStop(1,"rgba(15, 23, 42, 0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const i=new Fs(t);return i.colorSpace=be,this.cache.contactShadow=i,i}createSignboardTexture({title:t,subtitle:e="",bg:n="#111827",fg:i="#f8fafc",border:r="#e2e8f0",accent:a="#fbbf24",width:o=512,height:c=192}){const l=`sign_${t}_${e}_${n}_${o}x${c}`;if(this.cache[l])return this.cache[l];const h=document.createElement("canvas");h.width=o,h.height=c;const u=h.getContext("2d");u.fillStyle=n,u.fillRect(0,0,o,c),u.strokeStyle=r,u.lineWidth=Math.max(6,Math.round(c*.042));const d=Math.round(c*.06);u.strokeRect(d,d,o-d*2,c-d*2);const f=o-d*5;u.fillStyle=i,u.textAlign="center",u.textBaseline="middle",e?(u.font=`900 ${Math.round(c*.31)}px system-ui, Segoe UI, Arial, sans-serif`,u.fillText(t,o/2,c*.34,f),u.strokeStyle="rgba(255,255,255,0.28)",u.lineWidth=Math.max(2,Math.round(c*.015)),u.beginPath(),u.moveTo(o*.16,c*.55),u.lineTo(o*.84,c*.55),u.stroke(),u.fillStyle=a,u.font=`800 ${Math.round(c*.23)}px system-ui, Segoe UI, Arial, sans-serif`,u.fillText(e,o/2,c*.74,f)):(u.font=`800 ${Math.round(c*.46)}px system-ui, Segoe UI, Arial, sans-serif`,u.fillText(t,o/2,c*.52,f));const g=fe(h,{srgb:!0,anisotropy:this.anisotropy});return g.wrapS=Ue,g.wrapT=Ue,this.cache[l]=g,g}_cached(t,e){return this.cache[t]||(this.cache[t]=e()),this.cache[t]}_t(t,e=!0){return fe(t,{srgb:e,anisotropy:this.anisotropy})}_grayCanvas(t,e,n=t){return Le(t,(i,r,a,o)=>{const c=Ft(Math.round(e(i,r,a,o)*255));return[c,c,c]},n)}getFloorTileSet(){return this._cached("g3_floorTile",()=>{const i=[];for(let l=0;l<4;l++)i.push(se(l,7,3)*6-3);const r=(l,h)=>{const u=Math.floor(l*2),d=Math.floor(h*2),f=l*2-u,g=h*2-d,_=Math.min(f,1-f,g,1-g);return{id:d*2+u,edge:_}},a=Le(256,(l,h)=>{const u=r(l,h);if(u.edge<.0125)return[196,192,184];const d=ce(l+u.id*.37,h,3,5,11),f=Math.max(0,1-Math.abs(d-.5)*22)*10,g=236+i[u.id]+(ce(l,h,8,3,5)-.5)*5-f;return[Ft(g),Ft(g-1.5),Ft(g-5)]}),o=this._grayCanvas(256,(l,h)=>{const u=r(l,h);return u.edge<.0125*1.4?.88:.11+ce(l,h,6,3,21)*.1+i[u.id]*.004}),c=this._grayCanvas(256,(l,h)=>{const u=r(l,h);return u.edge<.0125?.2:u.edge<.0125*2.2?.2+(u.edge-.0125)/(.0125*1.2)*.6:.8+(ce(l,h,16,2,9)-.5)*.02});return{map:this._t(a),roughnessMap:this._t(o,!1),normalMap:this._t(Ee(c,3.2),!1),meters:1.2}})}getWainscotTileSet(){return this._cached("g3_wainscot",()=>{const n=.01640625,i=(c,l)=>{const h=Math.floor(c*3),u=Math.floor(l*3),d=c*3-h,f=l*3-u;return{id:u*3+h,edge:Math.min(d,1-d,f,1-f)}},r=Le(256,(c,l)=>{const h=i(c,l);if(h.edge<n)return[176,164,140];const u=(se(h.id,3,9)-.5)*10+(ce(c,l,6,3,4)-.5)*8;return[Ft(228+u),Ft(208+u),Ft(166+u*.8)]}),a=this._grayCanvas(256,(c,l)=>i(c,l).edge<n*1.5?.9:.22),o=this._grayCanvas(256,(c,l)=>{const h=i(c,l).edge;return h<n?.15:h<n*2.5?.15+(h-n)/(n*1.5)*.7:.85});return{map:this._t(r),roughnessMap:this._t(a,!1),normalMap:this._t(Ee(o,2.6),!1),meters:.9}})}getPaintSet(t="#2f8f5b",e=1){return this._cached(`g3_paint_${t}_${e}`,()=>{const[i,r,a]=xr(t),o=Le(256,(h,u)=>{const d=(ce(h,u,3,4,e)-.5)*.09,f=Math.max(0,ce(h,u,5,3,e+40)-.62)*.35,g=1+d-f;return[Ft(i*g),Ft(r*g),Ft(a*g)]}),c=this._grayCanvas(256,(h,u)=>.72+ce(h,u,4,3,e+3)*.16),l=this._grayCanvas(256,(h,u)=>ce(h,u,32,2,e+7));return{map:this._t(o),roughnessMap:this._t(c,!1),normalMap:this._t(Ee(l,.9),!1),meters:2}})}getConcreteSet(t=5){return this._cached(`g3_concrete_${t}`,()=>{const n=Le(256,(a,o,c,l)=>{const h=ce(a,o,4,4,t),u=se(c,l,t)*12-6,d=Math.sin(a*Math.PI*64)*2.5,f=a<.007||o<.007||Math.abs(a-.5)<.004?22:0,g=166+(h-.5)*24+u+d-f;return[Ft(g),Ft(g-1),Ft(g-5)]}),i=this._grayCanvas(256,(a,o)=>.72+ce(a,o,6,3,t+2)*.16),r=this._grayCanvas(256,(a,o,c,l)=>{const h=a<.007||o<.007||Math.abs(a-.5)<.004?-.25:0;return .5+(ce(a,o,24,3,t+4)-.5)*.35+(se(c,l,3)-.5)*.12+h});return{map:this._t(n),roughnessMap:this._t(i,!1),normalMap:this._t(Ee(r,1.3),!1),meters:3}})}getCorrugatedSet(){return this._cached("g3_corrugated",()=>{const n=Le(256,(a,o,c)=>{const l=(sn(a,.5,64,4)-.5)*16+(ce(a,o,2,3,8)-.5)*14,h=Math.max(0,ce(a,o,6,3,31)-.7)*160,u=Math.cos(a*10*Math.PI*2)*6;return[Ft(186+l+u+h*.5),Ft(192+l+u-h*.1),Ft(196+l+u-h*.6)]}),i=this._grayCanvas(256,(a,o)=>.34+sn(a,.5,64,4)*.14+Math.max(0,ce(a,o,6,3,31)-.7)*1.2),r=this._grayCanvas(256,a=>.5+.5*Math.sin(a*10*Math.PI*2));return{map:this._t(n),roughnessMap:this._t(i,!1),normalMap:this._t(Ee(r,6.5),!1),meters:.76}})}getGalvanizedSet(){return this._cached("g3_galv",()=>{const e=Le(128,(i,r)=>{const a=sn(i,r,24,6)*18+sn(i,r,48,7)*8;return[Ft(170+a),Ft(176+a),Ft(182+a)]}),n=this._grayCanvas(128,(i,r)=>.3+sn(i,r,24,6)*.22);return{map:this._t(e),roughnessMap:this._t(n,!1),meters:1}})}getClayRoofSet(){return this._cached("g3_clayroof",()=>{const i=Le(256,(a,o)=>{const c=Math.floor(a*4),l=Math.floor(o*4),h=a*4-c,u=o*4-l,d=(se(c,l,2)-.5)*28,f=Math.sin(h*Math.PI)*18,g=u>.86?-40:0,_=Math.max(0,ce(a,o,4,3,12)-.64)*120;return[Ft(152+d+f+g-_*.7),Ft(64+d*.5+f*.5+g*.5+_*.15),Ft(40+d*.3+g*.3)]}),r=this._grayCanvas(256,(a,o)=>{const c=a*4-Math.floor(a*4),l=o*4-Math.floor(o*4);return Math.sin(c*Math.PI)*.7+(1-l)*.3});return{map:this._t(i),normalMap:this._t(Ee(r,3.5),!1),meters:1.2}})}getSoilSet(){return this._cached("g3_soil",()=>{const e=Le(256,(i,r,a,o)=>{const c=ce(i,r,4,5,3),l=se(a>>1,o>>1,77)>.985?40:0,h=ce(i,r,12,2,50)>.68?1:0,u=92+(c-.5)*50+l;return h?[Ft(u+30),Ft(u+10),Ft(u-20)]:[Ft(u+24),Ft(u),Ft(u-24)]}),n=this._grayCanvas(256,(i,r,a,o)=>ce(i,r,16,3,3)*.8+(se(a>>1,o>>1,77)>.985?.3:0));return{map:this._t(e),normalMap:this._t(Ee(n,2.4),!1),meters:2.5}})}getGrassSet(){return this._cached("g3_grass",()=>{const e=Le(256,(i,r,a,o)=>{const c=ce(i,r,4,4,9),l=se(a,o,13)*26-13,h=Math.max(0,ce(i,r,3,3,70)-.62)*140;return[Ft(62+(c-.5)*30+l*.6+h*.8),Ft(112+(c-.5)*46+l+h*.25),Ft(44+(c-.5)*20+l*.4)]}),n=this._grayCanvas(256,(i,r,a,o)=>se(a,o,13)*.7+ce(i,r,8,2,9)*.3);return{map:this._t(e),normalMap:this._t(Ee(n,1.8),!1),meters:2}})}getCeilingPanelSet(){return this._cached("g3_ceiling",()=>{const e=Le(256,(n,i)=>{const r=n%.5<.008||n%.5>.492||i<.006||i>.994?-28:0,a=(ce(n,i,4,3,2)-.5)*6;return[Ft(242+r+a),Ft(242+r+a),Ft(238+r+a)]});return{map:this._t(e),meters:1.2}})}getPalmTrunkSet(){return this._cached("g3_palmTrunk",()=>{const i=(o,c)=>{const l=o*6+c*6,h=o*6-c*6,u=l-Math.floor(l),d=h-Math.floor(h);return Math.min(u,1-u,d,1-d)},r=Le(256,(o,c,l,h)=>{const u=i(o,c),d=se(l,h>>2,4)*22,f=Math.max(0,ce(o,c,3,3,15)-.6)*160,g=u<.08?46:92+u*70;return[Ft(g+d-f*.5),Ft(g*.78+d*.8+f*.2),Ft(g*.55+d*.5-f*.2)]}),a=this._grayCanvas(256,(o,c,l,h)=>i(o,c)*1.6+se(l,h>>2,4)*.12);return{map:this._t(r),normalMap:this._t(Ee(a,4.5),!1),meters:1}})}getPalmFrondTexture(){return this._cached("g3_palmFrond",()=>{const n=document.createElement("canvas");n.width=256,n.height=512;const i=n.getContext("2d");i.clearRect(0,0,256,512);const r=256/2,a=46;for(let l=-1;l<=1;l+=2)for(let h=0;h<a;h++){const u=h/(a-1),d=494-u*472,f=Math.sin(Math.min(1,u*1.15+.08)*Math.PI)*.92+.08,g=(256/2-6)*f*(.85+se(h,l,3)*.15),_=.75+u*.35+(se(h,l,8)-.5)*.18,m=r+l*Math.sin(_)*g,p=d-Math.cos(_)*g,M=60+se(h,l,5)*40;i.fillStyle=`rgb(${Math.round(36+M*.25)}, ${Math.round(70+M*.6)}, ${Math.round(28+M*.15)})`,i.beginPath(),i.moveTo(r,d);const S=(r+m)/2,x=(d+p)/2;i.quadraticCurveTo(S+l*3,x-6,m,p),i.quadraticCurveTo(S-l*1,x+4,r,d+5),i.closePath(),i.fill(),se(h,l,21)>.7&&(i.strokeStyle="rgba(150,120,60,0.8)",i.lineWidth=1.2,i.beginPath(),i.moveTo(m-l*8*Math.sin(_),p+8*Math.cos(_)),i.lineTo(m,p),i.stroke())}const o=i.createLinearGradient(0,512,0,0);o.addColorStop(0,"#6b6a2a"),o.addColorStop(1,"#4d6b2a"),i.strokeStyle=o,i.lineCap="round";for(let l=0;l<6;l++){const h=512-l/6*512,u=512-(l+1)/6*512;i.lineWidth=8-l*1.1,i.beginPath(),i.moveTo(r,h),i.lineTo(r,u),i.stroke()}const c=fe(n,{srgb:!0,anisotropy:this.anisotropy});return c.wrapS=Ue,c.wrapT=Ue,c})}getLeafClusterTexture(t=1){return this._cached(`g3_leafCard_${t}`,()=>{const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");for(let a=0;a<140;a++){const o=se(a,1,t)*Math.PI*2,c=Math.sqrt(se(a,2,t))*256*.42,l=256/2+Math.cos(o)*c,h=256/2+Math.sin(o)*c,u=16+se(a,3,t)*14,d=se(a,4,t);i.save(),i.translate(l,h),i.rotate(se(a,5,t)*Math.PI*2),i.fillStyle=`rgb(${Math.round(30+d*50)}, ${Math.round(78+d*70)}, ${Math.round(26+d*30)})`,i.beginPath(),i.ellipse(0,0,u,u*.42,0,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(200,230,150,0.35)",i.lineWidth=1,i.beginPath(),i.moveTo(-u,0),i.lineTo(u,0),i.stroke(),i.restore()}const r=fe(n,{srgb:!0,anisotropy:this.anisotropy});return r.wrapS=Ue,r.wrapT=Ue,r})}getGarmentSet(t,e,n={}){const i=`g3_garment_${t}_${e}_${JSON.stringify(n)}`;return this._cached(i,()=>{const a=document.createElement("canvas");a.width=512,a.height=512;const o=a.getContext("2d");o.fillStyle=e,o.fillRect(0,0,512,512);for(let h=0;h<512;h+=4)o.fillStyle=h%8===0?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.03)",o.fillRect(0,h,512,2);const c=(h,u,d,f,g="rgba(0,0,0,0.22)")=>{o.strokeStyle=g,o.lineWidth=1.4,o.setLineDash([4,3]),o.beginPath(),o.moveTo(h,u),o.lineTo(d,f),o.stroke(),o.setLineDash([])},l=(h,u,d,f)=>{o.strokeStyle="rgba(0,0,0,0.12)",o.lineWidth=3,o.beginPath(),o.moveTo(h,u),o.lineTo(d,f),o.stroke()};if(t==="shirt"){[.25,.75].forEach(u=>{l(u*512,0,u*512,512),c(u*512+3,0,u*512+3,512)}),l(0,512*.12,512*.5-80,512*.12),l(512*.5+80,512*.12,512,512*.12),o.fillStyle="rgba(0,0,0,0.05)",o.fillRect(512*.5-9,0,18,512),c(512*.5-9,0,512*.5-9,512),c(512*.5+9,0,512*.5+9,512);for(let u=0;u<6;u++){const d=61.44+u*512*.15;o.fillStyle=n.buttonColor||"rgba(235,235,230,1)",o.beginPath(),o.arc(512*.5,d,5,0,Math.PI*2),o.fill(),o.strokeStyle="rgba(0,0,0,0.3)",o.lineWidth=1,o.stroke()}for(let u=0;u<5;u++){const d=512*(.84+u*.03),f=o.createLinearGradient(0,d-6,0,d+6);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.5,"rgba(0,0,0,0.08)"),f.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=f,o.fillRect(512*.3,d-6,512*.4,12)}const h=(u,d)=>{const f=u*512,g=512*.26;o.strokeStyle="rgba(0,0,0,0.25)",o.lineWidth=2,o.strokeRect(f-26,g,52,58),c(f-23,g+3,f+23,g+3),n.pocketFlap&&(o.fillStyle="rgba(0,0,0,0.08)",o.fillRect(f-28,g-4,56,18),o.strokeRect(f-28,g-4,56,18)),d==="osis"?(o.fillStyle="#b45309",o.beginPath(),o.moveTo(f,g+14),o.lineTo(f+14,g+24),o.lineTo(f+9,g+42),o.lineTo(f-9,g+42),o.lineTo(f-14,g+24),o.closePath(),o.fill(),o.fillStyle="#fde047",o.beginPath(),o.arc(f,g+29,6,0,Math.PI*2),o.fill()):d==="tunas"&&(o.fillStyle="#7c2d12",o.beginPath(),o.arc(f,g+30,13,0,Math.PI*2),o.fill(),o.fillStyle="#facc15",o.font="bold 14px sans-serif",o.textAlign="center",o.fillText("✦",f,g+35))};n.pockets===2?(h(.39,n.leftBadge),h(.61,n.rightBadge)):h(.62,n.leftBadge),n.nameTag&&(o.fillStyle="#111827",o.fillRect(512*.36-26,512*.27,52,14),o.fillStyle="#e5e7eb",o.font="bold 10px sans-serif",o.textAlign="center",o.fillText(n.nameTag,512*.36,512*.27+11))}else if(t==="pants"){[.25,.75].forEach(h=>{l(h*512,0,h*512,512),c(h*512-3,0,h*512-3,512)}),o.strokeStyle="rgba(255,255,255,0.07)",o.lineWidth=2,o.beginPath(),o.moveTo(512*.5,0),o.lineTo(512*.5,512),o.stroke();for(let h=0;h<4;h++){const u=512*(.44+h*.035);o.fillStyle="rgba(0,0,0,0.07)",o.fillRect(0,u,512,3)}}else t==="sleeve"&&(c(0,512*.08,512,512*.08),c(0,512*.92,512,512*.92,"rgba(0,0,0,0.3)"),n.patch&&(n.patch==="flag"?(o.fillStyle="#dc2626",o.fillRect(98,512*.3,60,20),o.fillStyle="#f8fafc",o.fillRect(98,512*.3+20,60,20)):(o.fillStyle="#1e3a8a",o.beginPath(),o.ellipse(128,512*.42,36,46,0,0,Math.PI*2),o.fill(),o.fillStyle="#fde047",o.font="bold 13px sans-serif",o.textAlign="center",o.fillText(n.patch,128,512*.44))));if(!this.cache.g3_garment_norm){const h=this._grayCanvas(128,(u,d,f,g)=>{const _=(f+g)%2*.12,m=ce(u,d*.35,4,3,33);return .4+_+m*.5});this.cache.g3_garment_norm=fe(Ee(h,2),{srgb:!1,anisotropy:this.anisotropy})}return{map:fe(a,{srgb:!0,anisotropy:this.anisotropy}),normalMap:this.cache.g3_garment_norm}})}getHairSet(){return this._cached("g3_hair",()=>{const e=Le(256,(i,r,a)=>{const o=sn(i,.5,96,3)*22+sn(i,r,8,9)*10;return[Ft(20+o),Ft(18+o*.9),Ft(17+o*.8)]}),n=this._grayCanvas(256,(i,r)=>sn(i,r*.1+.5,128,3));return{map:this._t(e),normalMap:this._t(Ee(n,3),!1)}})}getSkinSet(t="#c98c64"){return this._cached(`g3_skin_${t}`,()=>{const[n,i,r]=xr(t),a=Le(128,(c,l)=>{const h=(ce(c,l,4,4,61)-.5)*14;return[Ft(n+h+3),Ft(i+h*.8),Ft(r+h*.7)]}),o=this._grayCanvas(128,(c,l,h,u)=>se(h,u,44)*.5+.25);return{map:this._t(a),normalMap:this._t(Ee(o,.35),!1)}})}createPosterTexture(t=1){return this._cached(`g3_poster_${t}`,()=>{const i=document.createElement("canvas");i.width=192,i.height=256;const r=i.getContext("2d"),a=[["JADWAL PIKET","#0f766e","#ecfeff"],["STRUKTUR KELAS","#1d4ed8","#eff6ff"],["BUANG SAMPAH PADA TEMPATNYA","#15803d","#f0fdf4"],["5S: SENYUM SALAM SAPA SOPAN SANTUN","#b45309","#fffbeb"],["JUMAT BERSIH","#7c3aed","#f5f3ff"],["DILARANG MEROKOK","#b91c1c","#fef2f2"],["TATA TERTIB SISWA","#334155","#f8fafc"],["AYO MEMBACA!","#c2410c","#fff7ed"]],[o,c,l]=a[Math.abs(t)%a.length];r.fillStyle=l,r.fillRect(0,0,192,256),r.fillStyle=c,r.fillRect(0,0,192,54),r.fillStyle="#ffffff",r.font="bold 17px system-ui, sans-serif",r.textAlign="center";const h=o.split(" ");let u="",d=22;h.forEach(g=>{const _=u?`${u} ${g}`:g;r.measureText(_).width>176?(r.fillText(u,192/2,d),u=g,d+=20):u=_}),r.fillText(u,192/2,d),r.fillStyle="rgba(30,41,59,0.55)";for(let g=0;g<9;g++){const _=60+se(g,t,2)*90;r.fillRect(16,72+g*18,_,6)}r.fillStyle=c,r.globalAlpha=.25,r.beginPath(),r.arc(152,216,26,0,Math.PI*2),r.fill(),r.globalAlpha=1;const f=fe(i,{srgb:!0,anisotropy:this.anisotropy});return f.wrapS=Ue,f.wrapT=Ue,f})}getSnackShelfTexture(){return this._cached("g3_snacks",()=>{const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle="#3f2a1c",i.fillRect(0,0,256,256);const r=["#dc2626","#f59e0b","#16a34a","#2563eb","#db2777","#facc15","#7c3aed","#ea580c"];for(let a=0;a<4;a++){for(let o=0;o<9;o++){const c=4+o*28,l=6+a*64,h=r[Math.floor(se(o,a,4)*r.length)];i.fillStyle=h,i.fillRect(c,l,24,50),i.fillStyle="rgba(255,255,255,0.75)",i.fillRect(c+4,l+16,16,10),i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(c,l+44,24,6)}i.fillStyle="#8b5a2b",i.fillRect(0,a*64+58,256,6)}return fe(n,{srgb:!0,anisotropy:this.anisotropy})})}getFoodTrayTexture(t=0){return this._cached(`g3_food_${t}`,()=>{const n=[["#e8b04a","#c47a2c","#f2d388"],["#f8f5ec","#e9e2d0","#ffffff"],["#9a3412","#c2410c","#7c2d12"],["#4d7c0f","#65a30d","#3f6212"]],i=n[t%n.length],r=Le(128,(a,o,c,l)=>{const h=sn(a,o,12,t+3),u=xr(i[h<.4?0:h<.75?1:2]),d=(se(c,l,t)-.5)*20;return[Ft(u[0]+d),Ft(u[1]+d),Ft(u[2]+d)]});return fe(r,{srgb:!0,anisotropy:this.anisotropy})})}}const ko=2.2,an=[-ko,0,ko],zo="kpw_selected_character",Is=[{id:"WHITE_GREY",name:"Siswa SMA (Putih Abu-Abu)",badgeName:"SERAGAM OSIS PUTIH ABU-ABU",description:"Kemeja putih berkerah rapi dengan badge saku OSIS & lokasi SMAN 1 Pasir Sakti, celana panjang abu-abu bergaris setrika, kaos kaki putih, sepatu sekolah gelap, dan tas ransel.",primaryColor:"#f8fafc",secondaryColor:"#52637a"},{id:"PRAMUKA",name:"Siswa Pramuka (Cokelat Lengkap)",badgeName:"SERAGAM PRAMUKA PENEGAK",description:"Kemeja Pramuka cokelat muda dengan saku dada ganda 3D bertutup, lidah bahu, hasduk merah-putih bercincin rotan, sabuk Pramuka, celana cokelat tua, dan sepatu sekolah gelap.",primaryColor:"#c29b68",secondaryColor:"#3e2415"},{id:"BATIK",name:"Siswa Batik (Marun Emas)",badgeName:"SERAGAM BATIK KHAS SEKOLAH",description:"Seragam batik katun marun bermotif kawung emas-putih khas kebanggaan siswa SMAN 1 Pasir Sakti dengan celana abu-abu dan tas sekolah.",primaryColor:"#5e141f",secondaryColor:"#52637a"}];class M0{constructor(t,e){this.scene=t,this.texLib=e,this.group=new Nt,this.rigRoot=new Nt,this.group.add(this.rigRoot),this.currentLane=1,this.targetX=an[1],this.y=0,this.velocityY=0,this.gravity=-34,this.baseJumpForce=12.8,this.isJumping=!1,this.jumpElapsed=0,this.isSliding=!1,this.slideTimer=0,this.slideDuration=.68,this.landCompress=0,this.stumbleTimer=0,this.isCaught=!1,this.runCycle=0,this.stepPhase=0,this.jumpBlend=0,this.slideBlend=0,this.laneBank=0,this.laneVelX=0,this.dodgeTimer=0,this.dodgeDir=0,this.glanceClock=0,this.hasSuperJump=!1,this.hasTurbo=!1,this.hasMagnet=!1;const n=localStorage.getItem(zo);this.currentOutfitId=Is.some(i=>i.id===n)?n:"WHITE_GREY",this.outfitMaterials={},this.initOutfitMaterials(),this.buildHumanoidStudent(),this.applyOutfit(this.currentOutfitId),this.scene&&this.scene.add(this.group)}initOutfitMaterials(){const t=this.texLib&&this.texLib.getSkinSet?this.texLib.getSkinSet("#dca074"):null,e=this.texLib&&this.texLib.getHairSet?this.texLib.getHairSet():null;this.skinMat=new K({color:14458996,map:t?t.map:null,normalMap:t?t.normalMap:null,normalScale:new ot(.25,.25),roughness:.64,metalness:.02}),this.hairMat=new K({color:1447965,map:e?e.map:null,normalMap:e?e.normalMap:null,normalScale:new ot(.6,.6),roughness:.78,metalness:.04});const n=this.texLib&&this.texLib.getGarmentSet?this.texLib.getGarmentSet("shirt","#f4f6f9",{leftBadge:"osis",nameTag:"SISWA"}):null,i=this.texLib&&this.texLib.getGarmentSet?this.texLib.getGarmentSet("pants","#52637a"):null,r=this.texLib&&this.texLib.getGarmentSet?this.texLib.getGarmentSet("sleeve","#f4f6f9",{patch:"SMAN 1"}):null;this.outfitMaterials.WHITE_GREY={torso:new K({color:16777215,map:n?n.map:null,normalMap:n?n.normalMap:null,normalScale:new ot(.7,.7),roughness:.82,metalness:.02}),sleeve:new K({color:16777215,map:r?r.map:null,normalMap:r?r.normalMap:null,normalScale:new ot(.65,.65),roughness:.82,metalness:.02}),pants:new K({color:16777215,map:i?i.map:null,normalMap:i?i.normalMap:null,normalScale:new ot(.6,.6),roughness:.84,metalness:.02}),collar:new K({color:16317180,roughness:.78,metalness:.02}),sock:new K({color:16317180,roughness:.8}),buckle:new K({color:13358561,roughness:.28,metalness:.85}),hasduk:!1,pramuka3D:!1};const a=this.texLib&&this.texLib.getGarmentSet?this.texLib.getGarmentSet("shirt","#c49a68",{leftBadge:"tunas",pocketFlap:!0,pockets:2,buttonColor:"#4a2c16",nameTag:"PRAMUKA"}):null,o=this.texLib&&this.texLib.getGarmentSet?this.texLib.getGarmentSet("pants","#3e2415"):null,c=this.texLib&&this.texLib.getGarmentSet?this.texLib.getGarmentSet("sleeve","#c49a68",{patch:"flag"}):null;this.outfitMaterials.PRAMUKA={torso:new K({color:16777215,map:a?a.map:null,normalMap:a?a.normalMap:null,normalScale:new ot(.75,.75),roughness:.85,metalness:.02}),sleeve:new K({color:16777215,map:c?c.map:null,normalMap:c?c.normalMap:null,normalScale:new ot(.7,.7),roughness:.85,metalness:.02}),pants:new K({color:16777215,map:o?o.map:null,normalMap:o?o.normalMap:null,normalScale:new ot(.65,.65),roughness:.86,metalness:.02}),collar:new K({color:11568724,roughness:.8,metalness:.02}),sock:new K({color:1974308,roughness:.82}),buckle:new K({color:14251782,roughness:.25,metalness:.88}),hasduk:!0,pramuka3D:!0};const l=this.texLib&&this.texLib.getBatikMaroonSet?this.texLib.getBatikMaroonSet():null,h=this.texLib&&this.texLib.getTrouserFabricSet?this.texLib.getTrouserFabricSet("#52637a"):null;this.outfitMaterials.BATIK={torso:new K({color:l?16777215:7018532,map:l?l.map:null,normalMap:l?l.normalMap:null,normalScale:new ot(.6,.6),roughness:.85,metalness:.02}),sleeve:new K({color:l?16777215:7018532,map:l?l.map:null,normalMap:l?l.normalMap:null,roughness:.85,metalness:.02}),pants:new K({color:h?16777215:5399418,map:h?h.map:null,roughness:.82,metalness:.02}),collar:new K({color:7018532,roughness:.85,metalness:.02}),sock:new K({color:16317180,roughness:.8}),buckle:new K({color:13358561,roughness:.28,metalness:.85}),hasduk:!1,pramuka3D:!1}}buildHumanoidStudent(){const t=this.texLib?this.texLib.getContactShadowTexture():null,e=new K({color:11033932,roughness:.62}),n=new K({color:16317180,roughness:.22}),i=new K({color:1841431,roughness:.18}),r=new K({color:1579035,roughness:.44,metalness:.25}),a=new K({color:1842982,roughness:.82,metalness:.04}),o=new K({color:9741240,roughness:.32,metalness:.78}),c=new K({color:1447964,roughness:.84}),l=new K({color:15857145,roughness:.62}),h=new K({color:14427686,roughness:.72,metalness:.02}),u=new K({color:16317180,roughness:.72,metalness:.02}),d=new K({color:14251782,roughness:.34,metalness:.76}),f=new K({color:4860950,roughness:.75}),g=new K({color:7153881,roughness:.5});t&&(this.contactShadow=new b(new ue(.95,.95),new Ye({map:t,transparent:!0,depthWrite:!1})),this.contactShadow.rotation.x=-Math.PI/2,this.contactShadow.position.y=.012,this.group.add(this.contactShadow)),this.pelvis=new Nt,this.pelvis.position.y=.9,this.rigRoot.add(this.pelvis);const _=this.outfitMaterials.WHITE_GREY.pants;this.hipsMesh=new b(new yt(.165,.15,.16,14),_),this.hipsMesh.scale.set(1.08,1,.78),this.hipsMesh.castShadow=!0,this.pelvis.add(this.hipsMesh);const m=new b(new yt(.169,.169,.044,14),r);m.scale.set(1.09,1,.79),m.position.y=.065,this.pelvis.add(m),this.beltBuckleMesh=new b(new V(.056,.048,.022),this.outfitMaterials.WHITE_GREY.buckle),this.beltBuckleMesh.position.set(0,.065,-.135),this.pelvis.add(this.beltBuckleMesh),this.spine=new Nt,this.spine.position.y=.07,this.pelvis.add(this.spine);const p=[new ot(.172,-.035),new ot(.162,.06),new ot(.166,.2),new ot(.194,.36),new ot(.206,.46),new ot(.09,.51)],M=new Ji(p,18);this.chestMesh=new b(M,this.outfitMaterials.WHITE_GREY.torso),this.chestMesh.scale.set(1.06,1,.68),this.chestMesh.castShadow=!0,this.chestMesh.receiveShadow=!0,this.spine.add(this.chestMesh),this.frontPlacketMesh=new b(new V(.032,.42,.014),this.outfitMaterials.WHITE_GREY.collar),this.frontPlacketMesh.position.set(0,.25,-.122),this.spine.add(this.frontPlacketMesh),this.collarRing=new b(new on(.088,.023,8,14,Math.PI*1.48),this.outfitMaterials.WHITE_GREY.collar),this.collarRing.rotation.x=Math.PI/2+.15,this.collarRing.rotation.z=-Math.PI*.24,this.collarRing.position.set(0,.49,.01),this.spine.add(this.collarRing),this.pramukaDetailGroup=new Nt,[-.082,.082].forEach((mt,H)=>{const J=new b(new V(.068,.078,.016),this.outfitMaterials.PRAMUKA.collar);J.position.set(mt,.31,-.124);const ct=new b(new V(.072,.024,.02),f);ct.position.set(mt,.35,-.126);const rt=new b(new yt(.008,.008,.022,8),f);rt.rotation.x=Math.PI/2,rt.position.set(mt,.342,-.128);const St=new b(new yt(.016,.016,.018,10),H===0?g:d);St.rotation.x=Math.PI/2,St.position.set(mt,H===0?.4:.305,-.126),this.pramukaDetailGroup.add(J,ct,rt,St)}),[-.155,.155].forEach(mt=>{const H=new b(new V(.09,.018,.042),f);H.position.set(mt,.48,0),H.rotation.z=mt<0?.18:-.18,this.pramukaDetailGroup.add(H)}),this.pramukaDetailGroup.visible=!1,this.spine.add(this.pramukaDetailGroup),this.hasdukGroup=new Nt,this.hasdukGroup.position.set(0,.46,-.095);const S=new b(new on(.096,.018,8,16,Math.PI*1.55),h);S.rotation.x=Math.PI/2+.14,S.rotation.z=-Math.PI*.26,S.position.set(0,.032,.082);const x=new b(new on(.093,.012,6,14,Math.PI*1.45),u);x.rotation.x=Math.PI/2+.14,x.rotation.z=-Math.PI*.24,x.position.set(0,.022,.082);const P=new b(new yt(.026,.024,.036,12),d);P.position.set(0,-.042,-.032),P.rotation.x=.24;const A=new b(new V(.042,.24,.014),h);A.position.set(-.022,-.155,-.028),A.rotation.z=.13,A.rotation.x=.16;const C=new b(new V(.042,.24,.014),u);C.position.set(.022,-.155,-.028),C.rotation.z=-.13,C.rotation.x=.16,this.hasdukGroup.add(S,x,P,A,C),this.hasdukGroup.visible=!1,this.spine.add(this.hasdukGroup),this.backpack=new Nt,this.backpack.position.set(0,.27,.155);const R=new b(new V(.3,.4,.15),a);R.castShadow=!0;const w=new b(new yt(.15,.15,.15,12,1,!1,0,Math.PI),a);w.rotation.z=Math.PI/2,w.rotation.y=Math.PI/2,w.position.y=.2;const v=new b(new V(.25,.21,.055),a);v.position.set(0,-.07,.09),v.castShadow=!0;const L=new b(new V(.24,.014,.06),o);L.position.set(0,.03,.092);const O=new b(new yt(.032,.032,.15,8),new K({color:165063,roughness:.3}));O.position.set(.165,-.08,0),this.backpack.add(R,w,v,L,O),this.spine.add(this.backpack),[-.125,.125].forEach(mt=>{const H=new b(new V(.044,.03,.22),a);H.position.set(mt,.47,.01);const J=new b(new V(.04,.34,.025),a);J.position.set(mt,.3,-.118),J.rotation.x=.08,this.spine.add(H,J)}),this.neckPivot=new Nt,this.neckPivot.position.set(0,.49,-.01),this.spine.add(this.neckPivot);const B=new b(new yt(.058,.066,.1,12),this.skinMat);B.position.y=.04,this.neckPivot.add(B),this.head=new Nt,this.head.position.set(0,.165,0),this.neckPivot.add(this.head);const G=new b(new ne(.132,18,16),this.skinMat);G.scale.set(.92,1.08,.98),G.castShadow=!0,this.head.add(G),[-1,1].forEach(mt=>{const H=new b(new ne(.03,10,8),this.skinMat);H.scale.set(.45,.95,.65),H.position.set(mt*.122,-.005,.005),this.head.add(H)}),[-.046,.046].forEach(mt=>{const H=new b(new ne(.019,10,8),n);H.scale.set(1.15,.85,.55),H.position.set(mt,.015,-.118);const J=new b(new ne(.011,8,8),i);J.scale.set(1,1,.5),J.position.set(mt,.015,-.126);const ct=new b(new V(.038,.009,.012),this.hairMat);ct.position.set(mt,.042,-.122),ct.rotation.z=mt<0?.08:-.08,this.head.add(H,J,ct)});const W=new b(new Ei(.016,.042,6),this.skinMat);W.rotation.x=-Math.PI/2+.25,W.position.set(0,-.008,-.134),this.head.add(W);const Y=new b(new V(.042,.01,.01),e);Y.position.set(0,-.052,-.12),this.head.add(Y);const j=new b(new ne(.139,18,14,0,Math.PI*2,0,Math.PI*.62),this.hairMat);j.scale.set(.95,1.08,1.02),j.position.set(0,.012,.008),j.rotation.x=-.14,j.castShadow=!0,this.head.add(j);const z=new b(new ne(.11,12,10),this.hairMat);z.scale.set(1.02,.85,.7),z.position.set(0,-.025,.055),this.head.add(z),[-.045,0,.05].forEach((mt,H)=>{const J=new b(new Ei(.036,.085,6),this.hairMat);J.position.set(mt,.095,-.105),J.rotation.x=2.45,J.rotation.z=(H-1)*.25,this.head.add(J)}),this.sleeveMeshes=[];const st=mt=>{const H=new Nt;H.position.set(mt*.225,.435,0);const J=new b(new yt(.064,.058,.17,12),this.outfitMaterials.WHITE_GREY.sleeve);J.position.y=-.075,J.rotation.z=mt*.06,J.castShadow=!0,this.sleeveMeshes.push(J);const ct=new b(new ne(.064,10,10),this.outfitMaterials.WHITE_GREY.sleeve);this.sleeveMeshes.push(ct),H.add(ct,J);const rt=new Nt;rt.position.set(0,-.22,0);const St=new b(new yt(.046,.042,.09,10),this.skinMat);St.position.y=-.175,H.add(St,rt);const Pt=new b(new ne(.042,8,8),this.skinMat),It=new b(new yt(.041,.033,.21,10),this.skinMat);It.position.y=-.105,It.castShadow=!0;const Xt=new b(new ne(.038,10,8),this.skinMat);return Xt.scale.set(.78,1.15,.95),Xt.position.set(0,-.23,-.008),rt.add(Pt,It,Xt),this.spine.add(H),{shoulderPivot:H,elbowPivot:rt,baseY:.435,side:mt}};this.leftArm=st(-1),this.rightArm=st(1),this.pantsMeshes=[this.hipsMesh],this.sockMeshes=[];const $=mt=>{const H=new Nt;H.position.set(mt*.095,-.02,0);const J=new b(new yt(.082,.066,.39,12),_);J.position.y=-.195,J.castShadow=!0,this.pantsMeshes.push(J),H.add(J);const ct=new Nt;ct.position.set(0,-.39,0);const rt=new b(new ne(.065,10,8),_);this.pantsMeshes.push(rt),ct.add(rt);const St=new b(new yt(.064,.052,.38,12),_);St.position.y=-.19,St.castShadow=!0,this.pantsMeshes.push(St),ct.add(St);const Pt=new Nt;Pt.position.set(0,-.4,0);const It=new b(new yt(.055,.054,.095,10),this.outfitMaterials.WHITE_GREY.sock);It.position.set(0,-.015,0),this.sockMeshes.push(It);const Xt=new b(new V(.104,.034,.25),l);Xt.position.set(0,-.072,-.045),Xt.castShadow=!0;const Ot=new b(new $i(.048,.12,6,10),c);Ot.rotation.x=Math.PI/2,Ot.scale.set(1.02,1,.86),Ot.position.set(0,-.036,-.035),Ot.castShadow=!0;const Qt=new b(new ne(.049,10,8),l);return Qt.scale.set(1,.62,1.05),Qt.position.set(0,-.048,-.13),[-.03,-.06,-.09].forEach(U=>{const we=new b(new V(.055,.008,.012),l);we.position.set(0,-.002,U),Pt.add(we)}),Pt.add(It,Xt,Ot,Qt),ct.add(Pt),H.add(ct),this.pelvis.add(H),{hipPivot:H,kneePivot:ct,anklePivot:Pt}};this.leftLeg=$(-1),this.rightLeg=$(1);const it=new ba(.62,.8,28),ft=new Ye({color:3718648,side:Ne,transparent:!0,opacity:.6});this.auraRing=new b(it,ft),this.auraRing.rotation.x=-Math.PI/2,this.auraRing.position.y=.025,this.auraRing.visible=!1,this.group.add(this.auraRing)}setOutfit(t){if(this.outfitMaterials[t]){this.currentOutfitId=t;try{localStorage.setItem(zo,t)}catch{}this.applyOutfit(t)}}applyOutfit(t){const e=this.outfitMaterials[t]||this.outfitMaterials.WHITE_GREY;this.chestMesh&&(this.chestMesh.material=e.torso),this.collarRing&&(this.collarRing.material=e.collar),this.frontPlacketMesh&&(this.frontPlacketMesh.material=e.collar),this.beltBuckleMesh&&e.buckle&&(this.beltBuckleMesh.material=e.buckle),this.sleeveMeshes&&this.sleeveMeshes.forEach(n=>{n.material=e.sleeve}),this.pantsMeshes&&this.pantsMeshes.forEach(n=>{n.material=e.pants}),this.sockMeshes&&e.sock&&this.sockMeshes.forEach(n=>{n.material=e.sock}),this.hasdukGroup&&(this.hasdukGroup.visible=!!e.hasduk),this.pramukaDetailGroup&&(this.pramukaDetailGroup.visible=!!e.pramuka3D)}getOutfitInfo(){return Is.find(t=>t.id===this.currentOutfitId)||Is[0]}reset(){this.currentLane=1,this.targetX=an[1],this.group.position.set(0,0,0),this.group.rotation.set(0,0,0),this.y=0,this.velocityY=0,this.isJumping=!1,this.jumpElapsed=0,this.isSliding=!1,this.slideTimer=0,this.landCompress=0,this.stumbleTimer=0,this.isCaught=!1,this.runCycle=0,this.stepPhase=0,this.jumpBlend=0,this.slideBlend=0,this.laneBank=0,this.laneVelX=0,this.dodgeTimer=0,this.dodgeDir=0,this.glanceClock=0,this.hasSuperJump=!1,this.hasTurbo=!1,this.hasMagnet=!1,this.auraRing.visible=!1,this.applyOutfit(this.currentOutfitId),this.rigRoot.position.set(0,0,0),this.rigRoot.rotation.set(0,0,0),this.pelvis.position.set(0,.9,0),this.pelvis.rotation.set(0,0,0),this.spine.rotation.set(0,0,0),this.neckPivot.rotation.set(0,0,0),this.head.rotation.set(0,0,0),this.backpack.rotation.set(0,0,0)}moveLeft(t){return this.isCaught?!1:this.currentLane>0?(this.currentLane--,this.targetX=an[this.currentLane],this.dodgeTimer=.24,this.dodgeDir=-1,t&&t.playLaneSwitch(),!0):!1}moveRight(t){return this.isCaught?!1:this.currentLane<2?(this.currentLane++,this.targetX=an[this.currentLane],this.dodgeTimer=.24,this.dodgeDir=1,t&&t.playLaneSwitch(),!0):!1}jump(t){if(this.isCaught)return!1;if(!this.isJumping){this.isJumping=!0,this.jumpElapsed=0,this.isSliding=!1,this.slideTimer=0;const e=this.hasSuperJump?1.26:1;return this.velocityY=this.baseJumpForce*e,t&&t.playJump(this.hasSuperJump),!0}return!1}slide(t){return this.isCaught?!1:(this.isJumping&&(this.velocityY=-24),this.isSliding=!0,this.slideTimer=this.slideDuration,t&&t.playSlide(),!0)}triggerStumble(){this.stumbleTimer=.55}setCaught(){this.isCaught=!0,this.isSliding=!1}getHitbox(){const t=this.isSliding?.85:1.72,e=this.y+t*.5;return{minX:this.group.position.x-.32,maxX:this.group.position.x+.32,minY:this.y,maxY:this.y+t,minZ:this.group.position.z-.28,maxZ:this.group.position.z+.28,centerY:e}}computeLowestFootY(){const t=this.pelvis?this.pelvis.position.y:.91,e=n=>{const i=n.hipPivot.rotation.x,r=i+n.kneePivot.rotation.x,a=t-.02-.39*Math.cos(i),c=a-.4*Math.cos(r)-.088;return Math.min(a-.06,c)};return Math.min(e(this.leftLeg),e(this.rightLeg))}update(t,e,n,i=15,r=null){const o=23.5*t,c=1/(1+o+.48*o*o+.235*o*o*o),l=this.group.position.x-this.targetX,h=(this.laneVelX+23.5*l)*t;this.laneVelX=(this.laneVelX-23.5*h)*c,this.group.position.x=this.targetX+(l+h)*c;const u=r?r.minX:-2.62,d=r?r.maxX:2.62;this.group.position.x=_t.clamp(this.group.position.x,u,d);const f=this.targetX-this.group.position.x,g=_t.clamp(-this.laneVelX*.022-f*.04,-.22,.22);if(this.laneBank=_t.lerp(this.laneBank,g,Math.min(1,t*14)),this.rigRoot.rotation.z=this.laneBank,this.rigRoot.rotation.y=_t.clamp(-this.laneVelX*.014,-.14,.14),this.isCaught||this.group.rotation.set(0,0,0),this.dodgeTimer>0&&(this.dodgeTimer=Math.max(0,this.dodgeTimer-t)),this.isCaught){this.runCycle+=t*5.2,this.y=0,this.group.position.y=0,this.rigRoot.position.y=0;const at=Math.sin(this.runCycle*1.4)*.016;this.pelvis.position.set(0,.9+at,0),this.pelvis.rotation.set(0,Math.PI+Math.sin(this.runCycle*.7)*.06,0),this.spine.rotation.set(.09+at*.8,Math.sin(this.runCycle*.9)*.08,0);const ut=Math.sin(this.runCycle*2.2)*.06;this.leftArm.shoulderPivot.rotation.set(2.32+ut,.12,-.36),this.leftArm.elbowPivot.rotation.x=1.62,this.rightArm.shoulderPivot.rotation.set(2.32-ut,-.12,.36),this.rightArm.elbowPivot.rotation.x=1.62,this.leftLeg.hipPivot.rotation.x=.05,this.leftLeg.kneePivot.rotation.x=-.1,this.rightLeg.hipPivot.rotation.x=-.05,this.rightLeg.kneePivot.rotation.x=-.1,this.neckPivot.rotation.set(0,0,0),this.head.rotation.set(.05,Math.sin(this.runCycle*1.5)*.22,Math.sin(this.runCycle)*.05);return}const _=this.isJumping||this.y>.02;if(this.isJumping||this.y>0){this.jumpElapsed+=t,this.y+=this.velocityY*t,this.velocityY+=this.gravity*t;const at=r?r.ceilingY-1.72:2.05,ut=Math.min(2.1,at);this.y>ut&&(this.y=ut,this.velocityY=Math.min(0,this.velocityY)),this.y<=0&&(this.y=0,this.velocityY=0,this.isJumping=!1,this.jumpElapsed=0,_&&!this.isSliding&&(this.landCompress=.24,n&&n.playStep(!0)))}if(this.rigRoot.position.y=this.y,this.contactShadow){const at=Math.max(.42,1-this.y*.18);this.contactShadow.scale.set(at,at,1),this.contactShadow.material.opacity=Math.max(.18,.9-this.y*.25)}this.landCompress>0&&(this.landCompress=Math.max(0,this.landCompress-t*1.05)),this.isSliding&&(this.slideTimer-=t,this.slideTimer<=0&&(this.isSliding=!1)),this.stumbleTimer>0&&(this.stumbleTimer-=t);const m=this.isJumping?1:0,p=this.isSliding&&this.y<=.08?1:0;this.jumpBlend=_t.lerp(this.jumpBlend,m,Math.min(1,t*15)),this.slideBlend=_t.lerp(this.slideBlend,p,Math.min(1,t*15));const M=Math.max(6.4,e*.85);this.runCycle+=t*M;const S=this.runCycle,x=Math.sin(S),P=Math.cos(S);if(!this.isJumping&&!this.isSliding&&n){const at=Math.floor(S/Math.PI);at!==this.stepPhase&&(this.stepPhase=at,n.playStep(at%2===0))}const A=(1-Math.cos(2*S))*.032,C=this.dodgeTimer>0?Math.sin(this.dodgeTimer/.24*Math.PI):0,R=!this.isJumping&&!this.isSliding?C*.055:0,v=(this.landCompress>0?Math.sin(this.landCompress/.24*Math.PI):0)*.1;let L=-P*.025*(1-this.jumpBlend)*(1-this.slideBlend),O=.91+A+R-v,B=Math.sin(2*S)*.024,G=-x*.08,W=P*.05,Y=-.18-Math.sin(2*S-.3)*.028-v*.6,j=x*.08,z=-P*.05;const st=at=>{const ut=Math.sin(at),T=.5+.5*Math.cos(at+.15),y=.5+.5*Math.cos(at-Math.PI),k=ut*.76+.06+v*.85,nt=-(.14+1.24*(T*T)+.16*(y*y*y)+v*1.95),Q=.24*Math.sin(at+.42)-.12*T;return{hipX:k,kneeX:nt,ankleX:Q}},$=st(S),it=st(S+Math.PI),ft=-x,mt=x,H=-Math.sin(S-.35),J=Math.sin(S-.35);this.leftArm.shoulderPivot.position.y=this.leftArm.baseY+ft*.014*(1-this.slideBlend),this.rightArm.shoulderPivot.position.y=this.rightArm.baseY+mt*.014*(1-this.slideBlend);let ct=ft*.78+.06,rt=mt*.78+.06,St=-Math.max(0,ft)*.24,Pt=Math.max(0,mt)*.24,It=-.11-Math.max(0,ft)*.045-C*.12,Xt=.11+Math.max(0,mt)*.045+C*.12,Ot=.96+(H*.5+.5)*.54,Qt=.96+(J*.5+.5)*.54;if(this.jumpBlend>.01){const at=this.jumpBlend,ut=this.jumpElapsed<.11?1-this.jumpElapsed/.11:0,T=_t.clamp(this.velocityY/13,-1,1),y=Math.max(0,T),k=Math.max(0,-T);B=_t.lerp(B,.1*ut-.1*y+.07*k,at),G=_t.lerp(G,0,at),W=_t.lerp(W,0,at),Y=_t.lerp(Y,-.06*ut-.16+T*.15,at),j=_t.lerp(j,0,at),z=_t.lerp(z,0,at);const tt=_t.lerp(.96-k*.44,.25,ut),nt=_t.lerp(-1.12+k*.76,-.22,ut),Q=_t.lerp(-.44*y+.3*k,-.52,ut),Tt=_t.lerp(-.72-(1-k)*.46,-.18,ut);$.hipX=_t.lerp($.hipX,Q,at),$.kneeX=_t.lerp($.kneeX,Tt,at),$.ankleX=_t.lerp($.ankleX,-.24+k*.32,at),it.hipX=_t.lerp(it.hipX,tt,at),it.kneeX=_t.lerp(it.kneeX,nt,at),it.ankleX=_t.lerp(it.ankleX,.16-k*.24,at),ct=_t.lerp(ct,.65+T*.48+ut*.35,at),rt=_t.lerp(rt,.42+T*.48+ut*.35,at),St=_t.lerp(St,.1,at),Pt=_t.lerp(Pt,-.1,at),It=_t.lerp(It,-.34-(1-Math.abs(T))*.14,at),Xt=_t.lerp(Xt,.34+(1-Math.abs(T))*.14,at),Ot=_t.lerp(Ot,.92+k*.28,at),Qt=_t.lerp(Qt,1.02+k*.28,at)}if(this.slideBlend>.01){const at=this.slideBlend,ut=Math.sin(S*1.35)*.03;O=_t.lerp(O,.44+Math.abs(ut)*.2,at),B=_t.lerp(B,-.12,at),G=_t.lerp(G,0,at),W=_t.lerp(W,0,at),Y=_t.lerp(Y,.72+ut,at),j=_t.lerp(j,0,at),z=_t.lerp(z,0,at),it.hipX=_t.lerp(it.hipX,1.24+ut,at),it.kneeX=_t.lerp(it.kneeX,-.18,at),it.ankleX=_t.lerp(it.ankleX,-.18,at),$.hipX=_t.lerp($.hipX,.68,at),$.kneeX=_t.lerp($.kneeX,-1.48,at),$.ankleX=_t.lerp($.ankleX,-.15,at),ct=_t.lerp(ct,-.48+ut*1.2,at),rt=_t.lerp(rt,.52-ut*1.2,at),St=_t.lerp(St,.16,at),Pt=_t.lerp(Pt,-.14,at),It=_t.lerp(It,-.36,at),Xt=_t.lerp(Xt,.3,at),Ot=_t.lerp(Ot,.85,at),Qt=_t.lerp(Qt,1.12,at)}const U=(at,ut)=>{const T=ut.hipX,y=ut.hipX+ut.kneeX,k=at-.02-.39*Math.cos(T),nt=k-.4*Math.cos(y)-.088;return Math.min(k-.06,nt)},we=U(O,$),qt=U(O,it),Yt=Math.min(we,qt);Yt<.004&&(O+=.004-Yt),this.pelvis.position.set(L,O,0),this.pelvis.rotation.set(B,G,W),this.spine.rotation.x=Y,this.spine.rotation.y=j,this.leftLeg.hipPivot.rotation.x=$.hipX,this.leftLeg.kneePivot.rotation.x=$.kneeX,this.leftLeg.anklePivot.rotation.x=$.ankleX,this.rightLeg.hipPivot.rotation.x=it.hipX,this.rightLeg.kneePivot.rotation.x=it.kneeX,this.rightLeg.anklePivot.rotation.x=it.ankleX,this.leftArm.shoulderPivot.rotation.set(ct,St,It),this.leftArm.elbowPivot.rotation.x=Ot,this.rightArm.shoulderPivot.rotation.set(rt,Pt,Xt),this.rightArm.elbowPivot.rotation.x=Qt;const Dt=(1-Math.cos(2*S-.55))*.032*(1-this.slideBlend);if(this.backpack.rotation.x=Dt+v*.45,this.backpack.rotation.y=-Math.sin(S-.4)*.04*(1-this.slideBlend),this.backpack.rotation.z=Math.sin(S-.35)*.042,this.hasdukGroup&&this.hasdukGroup.visible&&(this.hasdukGroup.rotation.x=Math.sin(2*S)*.08+(this.isSliding?.32:0)+(this.isJumping?.15:0),this.hasdukGroup.rotation.y=Math.sin(S)*.07-this.laneVelX*.015),this.stumbleTimer>0){const at=Math.sin(this.stumbleTimer*28)*.18*(this.stumbleTimer/.55);this.neckPivot.rotation.set(.06,0,at*.35),this.head.rotation.set(.05,0,at),this.spine.rotation.z=z+at*.4}else{const at=Math.sin(2*S-.45)*.02*(1-this.jumpBlend)*(1-this.slideBlend);this.neckPivot.rotation.set(-Y*.28,0,-(W+z)*.35),this.head.rotation.x=-Y*.32+at,this.head.rotation.y=-this.laneVelX*.01,this.head.rotation.z=-(W+z)*.4-this.laneBank*.2,this.spine.rotation.z=z}this.hasTurbo||this.hasMagnet||this.hasSuperJump?(this.auraRing.visible=!0,this.auraRing.rotation.z+=t*4,this.hasTurbo?this.auraRing.material.color.setHex(3718648):this.hasMagnet?this.auraRing.material.color.setHex(16436245):this.auraRing.material.color.setHex(4906624)):this.auraRing.visible=!1}}const Go=['"Heh! Habis mengembalikan MBG kok malah nongkrong dan jalan-jalan?! Masukin bajunya, sini kamu!"','"PRIIIT! Pak Wahid lihat ya! Habis balikin MBG bukannya masuk kelas malah keluyuran, baju dikeluarin pula!"','"Heh berhenti! Izin ke kamar mandi kok berdua, mana sepatu berwarna dan rambut panjang lagi! Sini!"'],S0=['"Heh! Itu bajunya dimasukin dulu! Rapi sedikit kenapa, ini sekolah bukan tempat nongkrong!"','"Mata Pak Wahid masih awas ya! Sepatu tidak boleh berwarna, wajib hitam polos!"','"Heh gondrong! Rambut tidak boleh panjang sampai nyentuh kerah dan alis, besok wajib potong!"','"Alasan izin keluar ke kamar mandi kok berdua terus?! Tidak boleh ke kamar mandi berdua, balik kelas!"','"Habis mengembalikan MBG itu langsung masuk kelas! Tidak boleh nongkrong atau jalan-jalan di koridor!"','"Pak Wahid sudah hafal akal-akalanmu! Alasan balikin wadah MBG malah jalan-jalan lewat kantin!"','"Berhenti kamu! Baju dimasukin, sepatu jangan berwarna, jangan pura-pura tidak dengar Pak Wahid!"','"Sudah rambut panjang, keluar kamar mandi berdua, habis balikin MBG malah nongkrong pula! Sini kamu!"'],Ho=['"Ketangkap Pak Wahid kan! Sekarang masukin bajunya yang rapi, habis mengembalikan MBG itu dilarang nongkrong atau jalan-jalan!"','"Coba lihat ini: baju belum dimasukin, sepatu berwarna, rambut sudah panjang! Ikut Pak Wahid sekarang juga!"','"Pak Wahid sudah ingatkan berkali-kali: tidak boleh keluar ke kamar mandi berdua, dan habis balikin MBG langsung masuk kelas!"','"Napas Pak Wahid masih kuat ngejar kamu! Besok sepatu wajib hitam tidak boleh berwarna, rambut potong rapi, dan baju dimasukin!"'];class y0{constructor(t,e){this.scene=t,this.texLib=e,this.group=new Nt,this.rigRoot=new Nt,this.group.add(this.rigRoot),this.maxDistance=20,this.distance=12,this.runCycle=0,this.velX=0,this.bankZ=0,this.hopPhase=0,this.shoutGestureTimer=0,this.quoteBag=[],this.buildHumanoidTeacher(),this.scene.add(this.group)}buildHumanoidTeacher(){const t=this.texLib?this.texLib.getWhiteShirtSet():null,e=this.texLib?this.texLib.getTrouserFabricSet("#23272f"):null,n=this.texLib?this.texLib.getContactShadowTexture():null,i=new K({color:14063724,roughness:.68,metalness:.02}),r=new K({color:1579035,roughness:.8,metalness:.04}),a=new K({color:16317180,map:t?t.map:null,normalMap:t?t.normalMap:null,normalScale:new ot(.5,.5),roughness:.78,metalness:.02}),o=new K({color:e?16777215:2303791,map:e?e.map:null,roughness:.8,metalness:.03}),c=new K({color:1118999,roughness:.42,metalness:.2}),l=new K({color:14870768,roughness:.25,metalness:.85}),h=new K({color:1316120,roughness:.3,metalness:.15}),u=new K({color:988970,roughness:.35}),d=new K({color:16317180,roughness:.25});n&&(this.contactShadow=new b(new ue(1.1,1.1),new Ye({map:n,transparent:!0,depthWrite:!1})),this.contactShadow.rotation.x=-Math.PI/2,this.contactShadow.position.y=.012,this.group.add(this.contactShadow)),this.pelvis=new Nt,this.pelvis.position.y=.92,this.rigRoot.add(this.pelvis);const f=new b(new yt(.215,.19,.18,16),o);f.scale.set(1.08,1,.88),f.castShadow=!0,this.pelvis.add(f);const g=new b(new yt(.22,.22,.048,16),c);g.scale.set(1.09,1,.9),g.position.y=.075,this.pelvis.add(g);const _=new b(new V(.065,.052,.025),l);_.position.set(0,.075,-.2),this.pelvis.add(_),this.spine=new Nt,this.spine.position.set(0,.08,0),this.pelvis.add(this.spine);const m=[new ot(.04,0),new ot(.222,.05),new ot(.238,.19),new ot(.232,.34),new ot(.238,.45),new ot(.105,.53)],p=new b(new Ji(m,18),a);p.scale.set(1.06,1,.84),p.position.z=-.015,p.castShadow=!0,p.receiveShadow=!0,this.spine.add(p);const M=new b(new V(.036,.46,.015),a);M.position.set(0,.25,-.205),this.spine.add(M);const S=new b(new V(.085,.095,.014),a);S.position.set(.11,.34,-.195);const x=new b(new V(.032,.036,.018),new K({color:14251782,roughness:.4}));x.position.set(.11,.35,-.2);const P=new b(new V(.092,.034,.018),u);P.position.set(-.115,.36,-.195);const A=new b(new V(.08,.01,.02),l);A.position.set(-.115,.36,-.197);const C=new b(new on(.1,.026,8,16,Math.PI*1.5),a);C.rotation.x=Math.PI/2+.14,C.rotation.z=-Math.PI*.25,C.position.set(0,.51,-.01),this.spine.add(S,x,P,A,C),this.neckPivot=new Nt,this.neckPivot.position.set(0,.51,-.01),this.spine.add(this.neckPivot);const R=new b(new yt(.072,.082,.095,12),i);R.position.y=.035,this.neckPivot.add(R),this.head=new Nt,this.head.position.set(0,.165,0),this.neckPivot.add(this.head);const w=new b(new ne(.142,18,16),i);w.scale.set(.98,1.05,.96),w.castShadow=!0,this.head.add(w),[-1,1].forEach(st=>{const $=new b(new ne(.032,10,8),i);$.scale.set(.45,.95,.65),$.position.set(st*.136,-.005,.005),this.head.add($)}),[-.048,.048].forEach(st=>{const $=new b(new ne(.019,10,8),d);$.scale.set(1.15,.8,.55),$.position.set(st,.018,-.126);const it=new b(new ne(.011,8,8),r);it.position.set(st,.018,-.134);const ft=new b(new V(.046,.013,.015),r);ft.position.set(st,.046,-.13),ft.rotation.z=st<0?-.18:.18,this.head.add($,it,ft)});const v=new b(new ne(.022,10,8),i);v.scale.set(.95,1.15,1.15),v.position.set(0,-.006,-.14),this.head.add(v),this.mustache=new Nt,this.mustache.position.set(0,-.042,-.134);const L=new b(new V(.056,.022,.022),r),O=new b(new V(.042,.02,.02),r);O.position.set(-.036,-.006,.004),O.rotation.z=.28;const B=new b(new V(.042,.02,.02),r);B.position.set(.036,-.006,.004),B.rotation.z=-.28,this.mustache.add(L,O,B),this.head.add(this.mustache);const G=new b(new ne(.147,18,14,0,Math.PI*2,0,Math.PI*.58),r);G.scale.set(1,1.04,1),G.position.set(0,.015,.01),G.rotation.x=-.18,G.castShadow=!0;const W=new b(new ne(.125,12,10),r);W.scale.set(1.05,.85,.72),W.position.set(0,-.02,.055);const Y=new b(new V(.14,.035,.08),r);Y.position.set(.02,.125,-.065),Y.rotation.z=-.12,this.head.add(G,W,Y);const j=st=>{const $=new Nt;$.position.set(st*.265,.445,0);const it=new b(new ne(.075,10,10),a),ft=new b(new yt(.076,.068,.19,12),a);ft.position.y=-.085,ft.rotation.z=st*.07,ft.castShadow=!0,$.add(it,ft);const mt=new Nt;mt.position.set(0,-.23,0);const H=new b(new yt(.054,.05,.08,10),i);H.position.y=-.19,$.add(H,mt);const J=new b(new ne(.05,8,8),i),ct=new b(new yt(.05,.04,.22,10),i);ct.position.y=-.11,ct.castShadow=!0;const rt=new b(new ne(.044,10,8),i);return rt.scale.set(.85,1.12,.95),rt.position.set(0,-.235,-.01),mt.add(J,ct,rt),this.spine.add($),{shoulderPivot:$,elbowPivot:mt,baseX:st*.265,baseY:.445}};this.leftArm=j(-1),this.rightArm=j(1);const z=st=>{const $=new Nt;$.position.set(st*.115,-.02,0);const it=new b(new yt(.098,.08,.4,12),o);it.position.y=-.2,it.castShadow=!0,$.add(it);const ft=new Nt;ft.position.set(0,-.4,0);const mt=new b(new ne(.078,10,8),o),H=new b(new yt(.078,.066,.39,12),o);H.position.y=-.195,H.castShadow=!0,ft.add(mt,H);const J=new Nt;J.position.set(0,-.41,0);const ct=new b(new $i(.052,.13,6,10),h);ct.rotation.x=Math.PI/2,ct.scale.set(1.06,1,.82),ct.position.set(0,-.042,-.04),ct.castShadow=!0;const rt=new b(new V(.095,.032,.08),h);return rt.position.set(0,-.074,.03),J.add(ct,rt),ft.add(J),$.add(ft),this.pelvis.add($),{hipPivot:$,kneePivot:ft,anklePivot:J}};this.leftLeg=z(-1),this.rightLeg=z(1)}computeLowestFootY(){const t=this.pelvis.position.y,e=.4,n=.41,i=.09,r=a=>{const o=a.hipPivot.rotation.x,c=o+a.kneePivot.rotation.x,l=t-.02-Math.cos(o)*e,h=l-Math.cos(c)*n;return Math.min(l-.07,h-i)};return Math.min(r(this.leftLeg),r(this.rightLeg))}reset(){this.distance=8.5,this.runCycle=0,this.velX=0,this.bankZ=0,this.hopPhase=0,this.shoutGestureTimer=1.4,this.group.position.set(.28,0,3.6),this.group.rotation.set(0,0,0),this.rigRoot.rotation.set(0,0,0)}onPlayerStumble(){return this.distance=Math.max(0,this.distance-7.5),this.shoutGestureTimer=1.5,this.distance<=.5}onPlayerTurbo(){this.distance=Math.min(this.maxDistance,this.distance+6)}triggerShoutGesture(){this.shoutGestureTimer=1.5}getStartQuote(){return Go[Math.floor(Math.random()*Go.length)]}getRandomQuote(){if(this.quoteBag.length===0){this.quoteBag=[...S0];for(let t=this.quoteBag.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[this.quoteBag[t],this.quoteBag[e]]=[this.quoteBag[e],this.quoteBag[t]]}}return this.quoteBag.pop()}getRandomGameOverQuote(){return Ho[Math.floor(Math.random()*Ho.length)]}update(t,e,n,i=!1,r=[]){if(i){const z=_t.clamp(e+(e>.5?-.78:.78),-2.4,2.4);this.group.position.x=_t.lerp(this.group.position.x,z,t*7),this.group.position.y=_t.lerp(this.group.position.y,0,t*10),this.group.position.z=_t.lerp(this.group.position.z,.48,t*7),this.group.rotation.y=_t.lerp(this.group.rotation.y,z>e?-2.55:2.55,t*7),this.rigRoot.rotation.set(0,0,0),this.runCycle+=t*4.5;const st=Math.sin(this.runCycle)*.018;this.pelvis.position.set(0,.92+st,0),this.pelvis.rotation.set(0,0,.03),this.spine.rotation.set(.04+st*.5,Math.sin(this.runCycle*.7)*.08,-.03),this.leftArm.shoulderPivot.position.set(this.leftArm.baseX,this.leftArm.baseY,0),this.leftArm.shoulderPivot.rotation.set(-.22,.25,-.52),this.leftArm.elbowPivot.rotation.x=1.38;const $=Math.sin(this.runCycle*2.4);this.rightArm.shoulderPivot.position.set(this.rightArm.baseX,this.rightArm.baseY,0),this.rightArm.shoulderPivot.rotation.set(1.18+$*.22,-.12,.14),this.rightArm.elbowPivot.rotation.x=.55+$*.16,this.leftLeg.hipPivot.rotation.x=.05,this.leftLeg.kneePivot.rotation.x=-.07,this.leftLeg.anklePivot.rotation.x=0,this.rightLeg.hipPivot.rotation.x=-.05,this.rightLeg.kneePivot.rotation.x=-.07,this.rightLeg.anklePivot.rotation.x=0;const it=this.computeLowestFootY();it<.004&&(this.pelvis.position.y+=.004-it),this.head.rotation.y=Math.sin(this.runCycle*1.1)*.14,this.head.rotation.z=Math.sin(this.runCycle*1.6)*.07,this.mustache.rotation.z=Math.sin(this.runCycle*3.8)*.05;return}this.shoutGestureTimer>0&&(this.shoutGestureTimer=Math.max(0,this.shoutGestureTimer-t)),this.distance=Math.min(this.maxDistance,this.distance+t*.95);const a=1.35+this.distance/this.maxDistance*5,o=e>.2?-.34:.34;let c=e+o*(1-this.distance/28);const l=this.group.position.z;let h=!1;if(r&&r.length>0){const z=new Set;let st=!1;for(let $=0;$<r.length;$++){const it=r[$];if(!it||!it.group.visible)continue;const ft=it.group.position.z,mt=it.group.position.x;ft>l-5.2&&ft<l+1.15&&(it.isSolidWall||it.type==="HIGH_BANNER"?z.add(it.lane):!it.hit&&Math.abs(mt-this.group.position.x)<.85&&ft>l-2.6&&ft<l+.65&&(st=!0))}if(z.size>0){let $=c,it=1/0;for(let ft=0;ft<an.length;ft++)if(!z.has(ft)){const mt=Math.abs(an[ft]-c);mt<it&&(it=mt,$=an[ft])}c=$}st&&this.hopPhase<=0&&(h=!0)}h&&(this.hopPhase=.001);let u=0;this.hopPhase>0&&(this.hopPhase+=t*2.8,this.hopPhase>=1?this.hopPhase=0:u=Math.sin(this.hopPhase*Math.PI)*.72),c=_t.clamp(c,-2.42,2.42);const g=(c-this.group.position.x)*46-this.velX*12;if(this.velX+=g*t,this.group.position.x=_t.clamp(this.group.position.x+this.velX*t,-2.45,2.45),this.group.position.y=u,this.group.position.z=_t.lerp(this.group.position.z,a,Math.min(1,t*6)),this.group.rotation.y=0,this.bankZ=_t.lerp(this.bankZ,-this.velX*.03,Math.min(1,t*10)),this.rigRoot.rotation.z=this.bankZ,this.contactShadow){const z=Math.max(.55,1-u*.35);this.contactShadow.scale.set(z,z,1),this.contactShadow.position.y=.012-u}const _=Math.max(6,n*.82);this.runCycle+=t*_;const m=this.runCycle,p=Math.sin(m),M=Math.cos(m),S=(1-Math.cos(2*m))*.028;this.pelvis.position.set(-M*.025,.915+S,0),this.pelvis.rotation.set(Math.sin(2*m)*.02,-p*.08,M*.05);const x=Math.sin(m*.5)*.015;this.spine.rotation.x=-.19-Math.sin(2*m-.3)*.025+x,this.spine.rotation.y=p*.08,this.spine.rotation.z=-M*.05;const P=z=>{const st=Math.sin(z),$=.5+.5*Math.cos(z+.15),it=.5+.5*Math.cos(z-Math.PI),ft=st*.68+.06+(u>.1?.35:0),H=-(.11+1.12*($*$)+.14*(it*it*it)+(u>.1?.45:0)),J=.2*Math.sin(z+.4)-.08*$;return{hipX:ft,kneeX:H,ankleX:J}},A=P(m),C=P(m+Math.PI);this.leftLeg.hipPivot.rotation.x=A.hipX,this.leftLeg.kneePivot.rotation.x=A.kneeX,this.leftLeg.anklePivot.rotation.x=A.ankleX,this.rightLeg.hipPivot.rotation.x=C.hipX,this.rightLeg.kneePivot.rotation.x=C.kneeX,this.rightLeg.anklePivot.rotation.x=C.ankleX;const R=this.computeLowestFootY()+u;R<.004&&(this.pelvis.position.y+=.004-R);const w=-p,v=Math.max(0,w),L=-Math.sin(m-.35);this.leftArm.shoulderPivot.position.set(this.leftArm.baseX,this.leftArm.baseY+v*.015,-w*.018),this.leftArm.shoulderPivot.rotation.set(w*.72+.05,-v*.2,-.13-v*.04),this.leftArm.elbowPivot.rotation.x=.98+(L*.5+.5)*.46;const O=p,B=Math.max(0,O),G=Math.sin(m-.35),W=Math.min(1,this.shoutGestureTimer*2.2);this.rightArm.shoulderPivot.position.set(this.rightArm.baseX,this.rightArm.baseY+B*.015,-O*.018);const Y=O*.72+.08,j=1.42+Math.sin(m*1.5)*.18;this.rightArm.shoulderPivot.rotation.set(_t.lerp(Y,j,W),_t.lerp(B*.2,.14,W),_t.lerp(.13+B*.04,.1,W)),this.rightArm.elbowPivot.rotation.x=_t.lerp(1+(G*.5+.5)*.46,.45,W),this.head.rotation.x=.15+Math.sin(2*m-.4)*.025,this.head.rotation.y=0,this.head.rotation.z=-this.spine.rotation.z*.4,this.mustache.rotation.z=p*.035}}function w0(s){const t=s.getWoodTexture("#9a5b2d"),e=s.getWoodTexture("#5c3419"),n=s.getContactShadowTexture(),i=s.getPalmTrunkSet?s.getPalmTrunkSet():null,r=s.getPalmFrondTexture?s.getPalmFrondTexture():null,a=s.getCorrugatedSet?s.getCorrugatedSet():null,o=s.getGalvanizedSet?s.getGalvanizedSet():null,c=s.getWainscotTileSet?s.getWainscotTileSet():null;return{palmTrunk:i?new K({map:i.map,normalMap:i.normalMap,normalScale:new ot(1.6,1.6),roughness:.9,metalness:.02}):new K({color:5520683,roughness:.92}),palmFrond:r?new K({map:r,alphaTest:.26,transparent:!0,roughness:.58,metalness:.04,side:Ne}):new K({color:3042092,roughness:.72,side:Ne}),palmBunch:new K({color:7020811,roughness:.52,metalness:.08}),tireRubber:new K({color:1776928,roughness:.88,metalness:.04}),alloyRim:new K({color:13751771,roughness:.28,metalness:.85}),chrome:new K({color:15857145,roughness:.14,metalness:.94}),exhaustDark:new K({color:2565930,roughness:.45,metalness:.68}),mattePlastic:new K({color:2369067,roughness:.8,metalness:.05}),vinylSeat:new K({color:1579035,roughness:.62,metalness:.06}),headlampGlass:new K({color:14742270,emissive:12248829,emissiveIntensity:.28,roughness:.08,metalness:.12,transparent:!0,opacity:.9}),taillampRed:new K({color:14427686,emissive:10033947,emissiveIntensity:.28,roughness:.18,metalness:.1}),turnSignalAmber:new K({color:16096779,emissive:11817737,emissiveIntensity:.2,roughness:.22}),plateBlack:new K({color:988970,roughness:.48}),plateWhite:new K({color:16317180,roughness:.4}),woodLight:new K({map:t,roughness:.46,metalness:.04}),woodDark:new K({map:e,roughness:.54,metalness:.04}),ironFrame:new K({color:1976635,roughness:.42,metalness:.72}),galvSteel:new K({map:o?o.map:null,roughnessMap:o?o.roughnessMap:null,color:15659766,roughness:.38,metalness:.36}),corrugatedRoof:new K({map:a?a.map:null,normalMap:a?a.normalMap:null,roughnessMap:a?a.roughnessMap:null,color:15857145,roughness:.42,metalness:.32,side:Ne}),skylightSheet:new K({color:14742270,emissive:12248829,emissiveIntensity:.22,roughness:.2,metalness:.05,transparent:!0,opacity:.65,side:Ne}),wainscotTile:new K({map:c?c.map:null,normalMap:c?c.normalMap:null,roughnessMap:c?c.roughnessMap:null,color:c?16777215:15062453,roughness:.25,metalness:.03}),aluminum:new K({color:13751771,roughness:.25,metalness:.85}),glassClear:new K({color:14742270,roughness:.06,metalness:.15,transparent:!0,opacity:.38}),stoolRed:new K({color:12131356,roughness:.5}),stoolBlue:new K({color:1920728,roughness:.5}),trashGreen:new K({color:1409085,roughness:.48}),trashYellow:new K({color:15381256,roughness:.48}),ceramicPlate:new K({color:16317180,roughness:.2}),icedTea:new K({color:9584654,roughness:.16,transparent:!0,opacity:.84}),orangeDrink:new K({color:15357964,roughness:.18,transparent:!0,opacity:.86}),trunkBark:new K({color:5716774,roughness:.92}),leafDark:new K({color:1988145,roughness:.8}),leafMid:new K({color:3045181,roughness:.76}),leafBright:new K({color:5023308,roughness:.74}),leafRedTip:new K({color:12131356,roughness:.72}),terracottaPot:new K({color:10109986,roughness:.82}),concreteCurb:new K({color:9741240,roughness:.85}),soil:new K({color:3876888,roughness:.95}),whiteboard:new K({color:16317180,roughness:.18,metalness:.05}),contactShadow:new Ye({map:n,transparent:!0,depthWrite:!1})}}const Mr=new Map;function E0(s){return Mr.has(s)||Mr.set(s,new K({color:s,roughness:.2,metalness:.28,envMapIntensity:1.15})),Mr.get(s)}function Vo(s,t=12131356,e=!0,n=0){const i=new Nt,r=new b(new ue(.96,2.08),s.contactShadow);r.rotation.x=-Math.PI/2,r.position.set(0,.012,0),i.add(r);const a=new Nt;a.rotation.z=.11,i.add(a);const o=E0(t),c=()=>{const G=new Nt,W=new b(new on(.22,.068,8,14),s.tireRubber);W.rotation.y=Math.PI/2,G.add(W);const Y=new b(new yt(.14,.14,.05,8),s.alloyRim);return Y.rotation.z=Math.PI/2,G.add(Y),G},l=c();l.position.set(0,.285,-.58),a.add(l);const h=c();h.position.set(0,.285,.58),a.add(h),[-.085,.085].forEach(G=>{const W=new b(new yt(.022,.018,.66,8),s.chrome);W.position.set(G,.56,-.49),W.rotation.x=.28,a.add(W)});const u=new b(new V(.18,.065,.35),o);u.position.set(0,.53,-.58),u.rotation.x=.22,a.add(u);const d=new b(new V(.36,.52,.24),o);d.position.set(0,.72,-.42),d.rotation.x=.26,d.castShadow=e,a.add(d);const f=new b(new V(.33,.48,.09),s.mattePlastic);f.position.set(0,.68,-.32),f.rotation.x=.26,a.add(f);const g=new b(new V(.28,.12,.05),s.headlampGlass);g.position.set(0,.75,-.54),g.rotation.x=.26,a.add(g),[-.14,.14].forEach(G=>{const W=new b(new V(.045,.08,.04),s.turnSignalAmber);W.position.set(G,.83,-.51),W.rotation.x=.26,a.add(W)});const _=new b(new V(.2,.068,.015),s.plateBlack);_.position.set(0,.61,-.55),_.rotation.x=.24,a.add(_);const m=new b(new V(.34,.075,.48),s.mattePlastic);m.position.set(0,.34,-.04),a.add(m);const p=new b(new V(.36,.31,.72),o);p.position.set(0,.6,.36),p.rotation.x=.08,p.castShadow=e,a.add(p);const M=new b(new V(.31,.11,.38),s.vinylSeat);M.position.set(0,.77,.2);const S=new b(new V(.3,.12,.36),s.vinylSeat);S.position.set(0,.81,.52);const x=new b(new V(.32,.04,.14),s.exhaustDark);if(x.position.set(0,.84,.74),a.add(M,S,x),e&&n%3===1){const G=new b(new ne(.135,10,8,0,Math.PI*2,0,Math.PI*.72),n%2===0?s.stoolRed:s.plateBlack);G.position.set(0,.91,.24),G.rotation.x=-.15,a.add(G)}const P=new b(new V(.22,.09,.05),s.taillampRed);P.position.set(0,.72,.74);const A=new b(new V(.2,.26,.06),s.mattePlastic);A.position.set(0,.5,.78),A.rotation.x=-.32;const C=new b(new V(.22,.085,.015),s.plateBlack);C.position.set(0,.52,.82),C.rotation.x=-.32,a.add(P,A,C);const R=new b(new V(.28,.14,.18),o);R.position.set(0,1.03,-.36),a.add(R);const w=new b(new yt(.016,.016,.64,8),s.exhaustDark);w.rotation.z=Math.PI/2,w.position.set(0,1.03,-.35),a.add(w),e&&[-1,1].forEach(G=>{const W=new b(new yt(.022,.022,.12,8),s.tireRubber);W.rotation.z=Math.PI/2,W.position.set(G*.28,1.03,-.35);const Y=new b(new yt(.008,.008,.16,6),s.chrome);Y.position.set(G*.22,1.11,-.36),Y.rotation.z=-G*.35;const j=new b(new V(.11,.065,.025),s.mattePlastic);j.position.set(G*.26,1.18,-.36),a.add(W,Y,j)});const v=new b(new yt(.055,.048,.52,10),s.exhaustDark);v.rotation.x=Math.PI/2-.18,v.position.set(.21,.36,.48);const L=new b(new V(.02,.07,.3),s.chrome);L.position.set(.265,.37,.48),L.rotation.x=-.18;const O=new b(new yt(.024,.024,.28,8),s.stoolRed);O.position.set(-.14,.44,.52),O.rotation.x=.18,a.add(v,L,O);const B=new b(new yt(.012,.01,.32,6),s.ironFrame);return B.position.set(-.18,.15,.08),B.rotation.z=.42,i.add(B),i}function b0(s,t=12.6,e=28,n=4.35,i=5.35,r=4){const a=new Nt,o=t*.5,c=e/r,l=[];for(let P=0;P<r;P++)l.push(-e*.5+c*(P+.5));const h=Math.sqrt(o*o+(i-n)*(i-n)),u=Math.atan2(i-n,o),d=i-n;l.forEach(P=>{[-o,o].forEach(v=>{const L=new b(new V(.15,n,.15),s.galvSteel);L.position.set(v,n*.5,P),L.castShadow=!0,L.receiveShadow=!0;const O=new b(new V(.32,.22,.32),s.concreteCurb);O.position.set(v,.11,P),O.receiveShadow=!0,a.add(L,O)});const A=new b(new V(t+.3,.11,.09),s.galvSteel);A.position.set(0,n,P),A.castShadow=!0,a.add(A);const C=new b(new V(h+.4,.1,.09),s.galvSteel);C.position.set(-o*.5,(n+i)*.5,P),C.rotation.z=u,C.castShadow=!0;const R=new b(new V(h+.4,.1,.09),s.galvSteel);R.position.set(o*.5,(n+i)*.5,P),R.rotation.z=-u,R.castShadow=!0;const w=new b(new V(.08,d,.08),s.galvSteel);w.position.set(0,n+d*.5,P),[-1,1].forEach(v=>{const L=new b(new V(.065,d*.52,.065),s.galvSteel);L.position.set(v*o*.48,n+d*.26,P);const O=new b(new V(.065,d*1.35,.065),s.galvSteel);O.position.set(v*o*.24,n+d*.38,P),O.rotation.z=v*.85;const B=new b(new V(.06,d*.95,.06),s.galvSteel);B.position.set(v*o*.68,n+d*.18,P),B.rotation.z=-v*.92;const G=new b(new V(.075,1.15,.075),s.galvSteel);G.position.set(v*(o-.44),n-.38,P),G.rotation.z=v*.78,a.add(L,O,B,G)}),a.add(C,R,w)}),[-o,o].forEach(P=>{const A=new b(new V(.12,.14,e),s.galvSteel);A.position.set(P,n,0),a.add(A)});const f=new b(new V(.1,.12,e),s.galvSteel);f.position.set(0,i,0),a.add(f),[-.75,-.5,-.25,.25,.5,.75].forEach(P=>{const A=P*o,C=n+(1-Math.abs(P))*(i-n),R=new b(new V(.055,.075,e),s.galvSteel);R.position.set(A,C,0),a.add(R)});const g=h+.65,_=new b(new V(g,.05,e),s.corrugatedRoof);_.position.set(-o*.5,(n+i)*.5+.06,0),_.rotation.z=u,_.castShadow=!0;const m=new b(new V(g,.05,e),s.corrugatedRoof);m.position.set(o*.5,(n+i)*.5+.06,0),m.rotation.z=-u,m.castShadow=!0,a.add(_,m);const p=1.15,M=new b(new V(.2,.28,e),s.concreteCurb);M.position.set(-o,.14,0);const S=new b(new V(.05,.05,e),s.ironFrame);S.position.set(-o,p,0);const x=new b(new V(.04,.04,e),s.ironFrame);x.position.set(-o,.68,0),a.add(M,S,x);for(let P=-e*.5+1.5;P<=e*.5-1.5;P+=3.2){const A=new b(new yt(.018,.018,p-.26,6),s.ironFrame);A.position.set(-o,.28+(p-.26)*.5,P),a.add(A)}return a}function T0(s,t=1){const e=new Nt,n=new b(new ue(1.55,1.95),s.contactShadow);n.rotation.x=-Math.PI/2,n.position.y=.01,e.add(n);const i=new b(new V(.76,.048,1.6),s.woodLight);i.position.y=.75,i.castShadow=!0,i.receiveShadow=!0,e.add(i),[-.32,.32].forEach(d=>{[-.7,.7].forEach(f=>{const g=new b(new V(.04,.74,.04),s.ironFrame);g.position.set(d,.37,f),e.add(g)})});const r=new b(new V(.035,.035,1.38),s.ironFrame);r.position.set(0,.2,0),e.add(r),[-.58,.58].forEach(d=>{const f=new b(new V(.28,.038,1.5),s.woodDark);f.position.set(d,.45,0),f.castShadow=!0,f.receiveShadow=!0,e.add(f),[-.6,.6].forEach(g=>{const _=new b(new V(.24,.44,.035),s.ironFrame);_.position.set(d,.22,g),e.add(_)})});const a=new b(new yt(.11,.07,.025,12),s.ceramicPlate);a.position.set(-.14,.785,-.32);const o=new b(new yt(.085,.055,.065,12),s.ceramicPlate);o.position.set(.12,.805,.22);const c=new b(new yt(.042,.034,.13,10),s.icedTea);c.position.set(.15,.835,-.24);const l=new b(new yt(.026,.03,.16,8),s.stoolRed);l.position.set(.04,.85,.46);const h=new b(new yt(.026,.03,.15,8),s.plateBlack);h.position.set(-.04,.845,.48);const u=new b(new V(.11,.07,.16),s.stoolBlue);return u.position.set(-.02,.81,0),e.add(a,o,c,l,h,u),e}function A0(s,t=null,e=0){const n=new Nt,i=new b(new V(.88,.86,3.1),s.woodDark);i.position.y=.43,i.castShadow=!0,i.receiveShadow=!0;const r=new b(new V(.04,.78,2.98),s.wainscotTile);r.position.set(-.43,.43,0);const a=new b(new V(.96,.055,3.18),s.ceramicPlate);a.position.y=.885,n.add(i,r,a);const o=new Nt;o.position.set(-.08,1.26,-.52);const c=new b(new V(.54,.72,1.48),s.glassClear);o.add(c),[[-.27,-.74],[.27,-.74],[-.27,.74],[.27,.74]].forEach(([p,M])=>{const S=new b(new V(.032,.74,.032),s.aluminum);S.position.set(p,0,M),o.add(S)});const l=new b(new V(.5,.016,1.42),s.aluminum);o.add(l);const h=[14251782,11817737,13273604,1409085];[-.44,0,.44].forEach((p,M)=>{const S=new b(new V(.36,.045,.38),s.aluminum);S.position.set(0,-.28,p);const x=t&&t.getFoodTrayTexture?t.getFoodTrayTexture(e+M):null,P=new b(new V(.3,.085,.32),new K({map:x,color:x?16777215:h[(e+M)%h.length],roughness:.68}));P.position.set(0,-.22,p),o.add(S,P)}),n.add(o);const u=new b(new yt(.16,.15,.44,12),s.icedTea);u.position.set(-.08,1.13,.55);const d=new b(new yt(.17,.17,.05,12),s.stoolBlue);d.position.set(-.08,1.37,.55);const f=new b(new yt(.16,.15,.44,12),s.orangeDrink);f.position.set(-.08,1.13,.98);const g=new b(new yt(.17,.17,.05,12),s.stoolRed);g.position.set(-.08,1.37,.98);const _=new b(new yt(.18,.16,.46,12),s.stoolRed);_.position.set(.12,1.14,1.32);const m=new b(new yt(.185,.185,.04,12),s.plateWhite);return m.position.set(.12,1.38,1.32),n.add(u,d,f,g,_,m),n}function Ni(s,t=1){const e=new Nt,n=1.05,i=.36,r=1.28,a=new b(new V(.03,n,r),s.woodDark);return a.position.set(i*.5-.015,n*.5,0),[-r*.5+.02,r*.5-.02].forEach(o=>{const c=new b(new V(i,n,.04),s.woodLight);c.position.set(0,n*.5,o),c.castShadow=!0,c.receiveShadow=!0,e.add(c)}),[.12,.4,.68,.98].forEach((o,c)=>{const l=new b(new V(i-.02,.03,r-.04),s.woodLight);l.position.set(0,o,0),l.castShadow=!0,e.add(l),c<3&&[-.38,0,.38].forEach((h,u)=>{if((t+c+u)%3===0)return;const d=new b(new V(.18,.065,.08),s.plateBlack);d.position.set(-.03,o+.045,h-.05);const f=new b(new V(.18,.065,.08),s.plateBlack);f.position.set(-.03,o+.045,h+.05),e.add(d,f)})}),e.add(a),e}function C0(s,t=1.25,e=5.2,n=1){const i=new Nt,r=.36,a=new b(new V(t,r,e),s.wainscotTile);a.position.y=r*.5,a.castShadow=!0,a.receiveShadow=!0;const o=new b(new V(t-.16,.04,e-.16),s.soil);o.position.y=r-.01,i.add(a,o);const c=Math.max(3,Math.floor(e/1.1));for(let l=0;l<c;l++){const h=-e*.42+l/Math.max(1,c-1)*(e*.84),u=.42+(n+l)%3*.08,d=new b(new Xi(u,1),l%2===0?s.leafBright:s.leafMid);d.scale.set(.95,1.12,1.05),d.position.set(l%2===0?-.08:.08,r+u*.65,h),d.castShadow=!0,i.add(d)}return i}function Sr(s){const t=new Nt;return[[-.26,s.trashGreen],[.26,s.trashYellow]].forEach(([e,n])=>{const i=new b(new yt(.19,.15,.62,10),n);i.position.set(0,.31,e),i.castShadow=!0;const r=new b(new yt(.205,.2,.07,10),n);r.position.set(0,.65,e),t.add(i,r)}),t}function Wo(s){const t=new Nt,e=new b(new V(.42,.045,1.65),s.woodLight);return e.position.y=.45,e.castShadow=!0,e.receiveShadow=!0,t.add(e),[-.65,.65].forEach(n=>{const i=new b(new V(.38,.44,.05),s.ironFrame);i.position.set(0,.22,n),t.add(i)}),t}function yr(s,t=1,e=!1){const n=new Nt,i=t*37%100/100,r=t*73%100/100,a=3.4+i*1.9,o=new b(new yt(.17,.3,a,e?5:8),s.trunkBark);o.position.y=a*.5,o.rotation.z=(r-.5)*.1,o.castShadow=!e,n.add(o);const c=[s.leafDark,s.leafMid,s.leafBright];if(e){const h=new b(new Xi(1.75+i*.55,0),c[t%3]);return h.scale.set(1.18,.84,1.12),h.position.y=a+.72,n.add(h),n}return[-1,1].forEach((h,u)=>{const d=new b(new yt(.075,.13,1.35,6),s.trunkBark);d.position.set(h*.44,a-.35+u*.2,(i-.5)*.3),d.rotation.z=-h*.62,n.add(d)}),[[0,.9,0,1.52],[-.98,.38,.45,1.2],[.95,.44,-.35,1.22],[.25,.52,.88,1.1],[-.35,.46,-.84,1.12]].forEach(([h,u,d,f],g)=>{const _=new b(new Xi(f*(.9+r*.22),1),c[(t+g)%3]);_.scale.set(1.14,.8,1.08),_.position.set(h,a+u,d),_.castShadow=g<3,n.add(_)}),n}function wr(s){const t=new Nt,e=new b(new yt(.22,.16,.36,10),s.terracottaPot);e.position.y=.18,e.castShadow=!0;const n=new b(new yt(.24,.23,.05,10),s.terracottaPot);n.position.y=.35;const i=new b(new yt(.2,.2,.03,10),s.soil);i.position.y=.34,t.add(e,n,i);for(let r=0;r<7;r++){const a=r/7*Math.PI*2,o=.48+r%3*.11,c=new b(new Ei(.055,o,4),r%2===0?s.leafMid:s.leafBright);c.position.set(Math.cos(a)*.07,.35+o*.45,Math.sin(a)*.07),c.rotation.z=-Math.cos(a)*.22,c.rotation.x=Math.sin(a)*.22,t.add(c)}return t}let ys=null;function R0(){if(ys)return ys;const s=(t,e,n)=>{const r=new Float32Array(54),a=new Float32Array(36),o=[];for(let l=0;l<=8;l++){const h=l/8,u=h*t,d=-Math.pow(h,n)*(t*.46),f=Math.sin(h*Math.PI*.88+.12)*e*.5,g=l*2;r[g*3]=-f,r[g*3+1]=d,r[g*3+2]=u,r[(g+1)*3]=f,r[(g+1)*3+1]=d,r[(g+1)*3+2]=u,a[g*2]=0,a[g*2+1]=h,a[(g+1)*2]=1,a[(g+1)*2+1]=h,l<8&&(o.push(g,g+1,g+2),o.push(g+1,g+3,g+2))}const c=new Be;return c.setAttribute("position",new Xe(r,3)),c.setAttribute("uv",new Xe(a,2)),c.setIndex(o),c.computeVertexNormals(),c};return ys={upper:s(3.8,1.2,2.1),mid:s(4.4,1.4,1.85),lower:s(4.7,1.5,1.6)},ys}function P0(s,t=1,e=!1){const n=new Nt,i=t*43%100/100,r=t*67%100/100,a=5.2+i*1.6;if(s.contactShadow){const f=5.4+i*1.2,g=new b(new ue(f,f),s.contactShadow);g.rotation.x=-Math.PI/2,g.position.y=.02,n.add(g)}const o=new b(new yt(.39,.55,1,e?6:10),s.palmTrunk);o.position.y=.5,o.castShadow=!e,o.receiveShadow=!0,n.add(o);const c=new yt(.33,.4,a,e?6:12,e?1:5),l=new b(c,s.palmTrunk);if(l.position.y=a*.5+.45,l.rotation.z=(r-.5)*.06,l.castShadow=!e,l.receiveShadow=!0,n.add(l),!e)for(let f=1.2;f<a-.4;f+=.95){const g=new b(new on(.365,.042,4,8),s.palmTrunk);g.rotation.x=Math.PI/2+(i-.5)*.1,g.position.y=f,n.add(g)}const h=a+.38;for(let f=0;f<3;f++){const g=f/3*Math.PI*2+i*1.5,_=new b(new ne(.32,6,5),s.palmBunch);_.scale.set(1.05,1.25,.8),_.position.set(Math.cos(g)*.34,h-.34,Math.sin(g)*.34),n.add(_)}const u=R0();return(e?[{count:4,pitch:-.35,geo:u.upper},{count:5,pitch:-.72,geo:u.mid}]:[{count:4,pitch:-.28,geo:u.upper},{count:5,pitch:-.62,geo:u.mid},{count:5,pitch:-.96,geo:u.lower}]).forEach((f,g)=>{const _=Math.PI*2/f.count,m=g*.65+i*.5;for(let p=0;p<f.count;p++){const M=p*_+m+(r-.5)*.14,S=new b(f.geo,s.palmFrond);S.position.set(0,h+(2-g)*.18,0),S.rotation.y=M,S.rotation.x=f.pitch+(i-.5)*.08,S.rotation.z=p%2===0?.12:-.12,S.castShadow=!e&&g===1,n.add(S)}}),n}const _n=42,ws=7,vn=8.2,ve=3.95,Es=["CLASS_11A1","CLASS_11A2","CLASS_11A3","CLASS_11A4","PALM_GROVE","PARKING","CANTEEN"],Xo={CLASS_11A1:"Koridor Kelas 11 A1",CLASS_11A2:"Koridor Kelas 11 A2",CLASS_11A3:"Koridor Kelas 11 A3",CLASS_11A4:"Koridor Kelas 11 A4",PALM_GROVE:"Belakang Kelas (Kebun Sawit)",PARKING:"Parkiran Motor Baja Ringan",CANTEEN:"Kantin SMAN 1 Pasir Sakti"},bs=[12131356,1579035,1920728,16317180,3359061,10033947,1013358];class L0{constructor(t,e){this.scene=t,this.texLib=e,this.segments=[],this.bystanders=[],this.distantProps=[],this.highDetailProps=[],this.sequenceIndex=0,this.initMaterials(),this.initSegments()}initMaterials(){const t=this.texLib.getFloorTileSet?this.texLib.getFloorTileSet():this.texLib.getCeramicFloorSet(),e=this.texLib.getWainscotTileSet?this.texLib.getWainscotTileSet():null,n=this.texLib.getParkingFloorSet(),i=this.texLib.getConcreteSet?this.texLib.getConcreteSet(5):null,r=this.texLib.getCorrugatedSet?this.texLib.getCorrugatedSet():null,a=this.texLib.getClayRoofSet?this.texLib.getClayRoofSet():null,o=this.texLib.getSoilSet?this.texLib.getSoilSet():null,c=this.texLib.getGrassSet?this.texLib.getGrassSet():null,l=this.texLib.getPlasterNormalMap(),h=this.texLib.getPaintSet?this.texLib.getPaintSet("#24824e",3):null,u=this.texLib.getPaintSet?this.texLib.getPaintSet("#52b788",7):null;this.propMats=w0(this.texLib);const d=t.map.clone();d.repeat.set(6.5,32),d.needsUpdate=!0;const f=t.roughnessMap?t.roughnessMap.clone():null;f&&(f.repeat.set(6.5,32),f.needsUpdate=!0);const g=t.normalMap?t.normalMap.clone():null;g&&(g.repeat.set(6.5,32),g.needsUpdate=!0),this.ceramicFloorMat=new K({map:d,roughnessMap:f,normalMap:g,normalScale:new ot(.45,.45),roughness:.2,metalness:.05,envMapIntensity:1.05});const _=i?i.map.clone():n.map.clone();_.repeat.set(4,14),_.needsUpdate=!0;const m=i?i.normalMap.clone():n.normalMap.clone();m.repeat.set(4,14),m.needsUpdate=!0,this.concreteFloorMat=new K({map:_,roughnessMap:i?i.roughnessMap:null,normalMap:m,normalScale:new ot(.5,.5),roughness:.52,metalness:.04,envMapIntensity:.65}),this.pavingFloorMat=new K({map:n.map,normalMap:n.normalMap,normalScale:new ot(.7,.7),roughness:.85,metalness:.02}),o&&o.map&&(o.map.repeat.set(6,16),o.normalMap.repeat.set(6,16)),this.soilFloorMat=new K({map:o?o.map:null,color:o?16777215:5914152,normalMap:o?o.normalMap:null,roughness:.94,metalness:.01}),c&&c.map&&(c.map.repeat.set(8,18),c.normalMap.repeat.set(8,18)),this.grassMat=new K({map:c?c.map:null,color:c?16777215:4160056,normalMap:c?c.normalMap:null,roughness:.9}),this.pillarGreenMat=new K({map:h?h.map:this.texLib.getPlasterWallTexture("#1d7a46",!1),normalMap:h?h.normalMap:l,roughnessMap:h?h.roughnessMap:null,normalScale:new ot(.35,.35),roughness:.68,metalness:.03}),this.wallGreenUpperMat=new K({map:u?u.map:this.texLib.getPlasterWallTexture("#48a878",!1),normalMap:u?u.normalMap:l,roughnessMap:u?u.roughnessMap:null,normalScale:new ot(.32,.32),roughness:.74,metalness:.02});const p=e?e.map.clone():null;p&&(p.repeat.set(28,1.6),p.needsUpdate=!0);const M=e?e.normalMap.clone():l;e&&M&&(M.repeat.set(28,1.6),M.needsUpdate=!0),this.wallCreamLowerMat=new K({map:p||this.texLib.getPlasterWallTexture("#e7dec8",!0),normalMap:M,roughnessMap:e?e.roughnessMap:null,normalScale:new ot(.55,.55),roughness:.26,metalness:.04,envMapIntensity:.85});const S=e?e.map.clone():null;S&&(S.repeat.set(1,1.6),S.needsUpdate=!0);const x=e?e.normalMap.clone():l;e&&x&&(x.repeat.set(1,1.6),x.needsUpdate=!0),this.columnCreamTileMat=new K({map:S||this.texLib.getPlasterWallTexture("#e7dec8",!0),normalMap:x,normalScale:new ot(.6,.6),roughness:.24,metalness:.04,envMapIntensity:.9}),this.plinthDarkMat=new K({color:3359061,roughness:.78,metalness:.05}),this.whiteFrameMat=new K({color:16317180,roughness:.35,metalness:.06}),this.ceilingGridMat=new K({map:this.texLib.getCeilingGridTexture(),roughness:.82,metalness:.02}),a&&a.map&&(a.map.repeat.set(6,28),a.normalMap.repeat.set(6,28)),this.roofTileMat=new K({map:a?a.map:null,normalMap:a?a.normalMap:null,color:a?16777215:10105874,roughness:.74,metalness:.04}),this.canopyMetalMat=new K({map:r?r.map:null,normalMap:r?r.normalMap:null,color:15857145,roughness:.42,metalness:.32,side:Ne}),this.gutterMat=new K({color:9741240,roughness:.45,metalness:.45}),this.windowGlassMat=new K({color:1981023,roughness:.08,metalness:.25,transparent:!0,opacity:.56,envMapIntensity:1.45}),this.doormatMat=new K({color:1976635,roughness:.95}),this.patternedMatMat=new K({color:8138002,roughness:.92}),this.parkingLineMat=new K({color:16317180,roughness:.7}),this.classSigns={CLASS_11A1:this.createClassSignMat("11 A1"),CLASS_11A2:this.createClassSignMat("11 A2"),CLASS_11A3:this.createClassSignMat("11 A3"),CLASS_11A4:this.createClassSignMat("11 A4")},this.canteenTopSignMat=new K({map:this.texLib.createSignboardTexture({title:"KANTIN",subtitle:"SMA NEGERI 1 PASIR SAKTI",bg:"#fef3c7",fg:"#1e3a8a",border:"#15803d",accent:"#b91c1c",width:640,height:180}),roughness:.38}),this.stallSignMats=[new K({map:this.texLib.createSignboardTexture({title:"KANTIN SEHAT 1",subtitle:"MIE AYAM • BAKSO • ES TEH",bg:"#166534",fg:"#fef08a",border:"#86efac",accent:"#ffffff",width:512,height:160}),roughness:.42}),new K({map:this.texLib.createSignboardTexture({title:"WARUNG BU SITI",subtitle:"NASI UDUK • GORENGAN • SOTO",bg:"#9a3412",fg:"#ffffff",border:"#fde047",accent:"#fef08a",width:512,height:160}),roughness:.42}),new K({map:this.texLib.createSignboardTexture({title:"KOPERASI & JAJANAN",subtitle:"MINUMAN DINGIN • SNACK • ALAT TULIS",bg:"#1e3a8a",fg:"#ffffff",border:"#93c5fd",accent:"#fde047",width:512,height:160}),roughness:.42})],this.schoolLandmarkMat=new K({map:this.texLib.createSignboardTexture({title:"SMA NEGERI 1",subtitle:"PASIR SAKTI",bg:"#1e3a8a",fg:"#ffffff",border:"#93c5fd",accent:"#fde047",width:512,height:256}),roughness:.38})}createClassSignMat(t){return new K({map:this.texLib.createSignboardTexture({title:t,subtitle:"",bg:"#0f172a",fg:"#ffffff",border:"#475569",width:256,height:112}),roughness:.35})}initSegments(){this.sequenceIndex=0;for(let t=0;t<ws;t++){const e=Es[t%Es.length],n=this.createZoneSegment(e,t);n.group.position.z=-t*_n,this.scene.add(n.group),this.segments.push(n)}}createZoneSegment(t,e){const n=new Nt,i=vn/2,r=[];let a=null,o=ve-.25,c=-2.68,l=2.68;return t==="CLASS_11A1"||t==="CLASS_11A2"||t==="CLASS_11A3"||t==="CLASS_11A4"?(a=this.buildClassroomCorridorZone(n,i,t,e,r),o=ve-.25):t==="PALM_GROVE"?(this.buildPalmGroveZone(n,i,e,r),o=8):t==="PARKING"?(this.buildMotorcycleParkingZone(n,i,e,r),o=4.15):t==="CANTEEN"&&(this.buildCanteenZone(n,i,e,r),o=4.15),{zoneType:t,index:e,group:n,signMesh:a,colliders:r,ceilingClearance:o,leftWallX:c,rightWallX:l}}buildClassroomCorridorZone(t,e,n,i,r){const a=_n,o=new b(new ue(vn,a),this.ceramicFloorMat);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,t.add(o);const c=new b(new V(.45,.16,a),this.wallCreamLowerMat);c.position.set(-e-.15,-.05,0),c.receiveShadow=!0,t.add(c);const l=new b(new ue(28,a),this.grassMat);l.rotation.x=-Math.PI/2,l.position.set(-e-14,-.14,0),l.receiveShadow=!0,t.add(l);const h=new b(new ue(3.2,a),this.pavingFloorMat);h.rotation.x=-Math.PI/2,h.position.set(-e-8.5,-.12,0),h.receiveShadow=!0,t.add(h);const u=new b(new ue(vn+1,a),this.ceilingGridMat);u.rotation.x=Math.PI/2,u.position.set(-.15,ve,0),t.add(u);const d=new b(new V(vn+2.2,.14,a),this.roofTileMat);d.position.set(.1,ve+.72,0),d.rotation.z=.17,d.castShadow=!0,t.add(d);const f=new b(new V(.18,.16,a),this.gutterMat);f.position.set(-e-.58,ve+.04,0),t.add(f);const g=new b(new V(.44,.54,a),this.pillarGreenMat);g.position.set(-e+.12,ve-.27,0),g.castShadow=!0,t.add(g);const _=new b(new V(.34,.42,a),this.pillarGreenMat);_.position.set(e-.05,ve-.21,0),t.add(_);const m=new b(new V(.28,.12,a),this.plinthDarkMat);m.position.set(e,.06,0);const p=new b(new V(.24,1.34,a),this.wallCreamLowerMat);p.position.set(e,.12+.67,0),p.receiveShadow=!0;const M=new b(new V(.3,.09,a),this.pillarGreenMat);M.position.set(e,1.5,0);const S=new b(new V(.24,ve-1.54,a),this.wallGreenUpperMat);S.position.set(e,1.54+(ve-1.54)*.5,0),S.receiveShadow=!0,t.add(m,p,M,S),[-17.5,-10.5,-3.5,3.5,10.5,17.5].forEach(R=>{const w=new b(new V(.52,1.46,.52),this.columnCreamTileMat);w.position.set(-e+.12,.73,R),w.castShadow=!0,w.receiveShadow=!0;const v=new b(new V(.58,.09,.58),this.pillarGreenMat);v.position.set(-e+.12,1.5,R),v.castShadow=!0;const L=new b(new V(.46,ve-1.54,.46),this.pillarGreenMat);L.position.set(-e+.12,1.54+(ve-1.54)*.5,R),L.castShadow=!0,L.receiveShadow=!0;const O=new b(new V(vn,.34,.38),this.pillarGreenMat);O.position.set(0,ve-.17,R);const B=new b(new V(.18,.05,1.5),new Ye({color:16777215}));B.position.set(0,ve-.03,R+3.5);const G=new b(new V(.36,1.46,.44),this.columnCreamTileMat);G.position.set(e-.04,.73,R);const W=new b(new V(.4,.09,.48),this.pillarGreenMat);W.position.set(e-.04,1.5,R);const Y=new b(new V(.34,ve-1.54,.42),this.pillarGreenMat);Y.position.set(e-.04,1.54+(ve-1.54)*.5,R),t.add(w,v,L,O,B,G,W,Y),r.push({type:"pillar",minX:-e-.16,maxX:-e+.4,minY:0,maxY:ve,minZ:R-.28,maxZ:R+.28})}),[-14,0,14].forEach((R,w)=>{const v=C0(this.propMats,1.25,5.4,i+w);v.position.set(-e-.85,-.14,R),t.add(v)}),[-12.5,12.5].forEach((R,w)=>{const v=yr(this.propMats,i*7+w+1,!0);v.position.set(-e-4.2-w%2*1.4,-.14,R),t.add(v)});const P=[-14,0,14];this.addClassroomDoorAndCasement(t,e,P[0]),this.addClassroomWindowsBay(t,e,P[1]),this.addClassroomDoorAndCasement(t,e,P[2]);const A=this.classSigns[n]||this.classSigns.CLASS_11A1;let C=null;if([10.5,-3.5].forEach((R,w)=>{const v=new b(new V(.96,.42,.06),[this.plinthDarkMat,this.plinthDarkMat,this.plinthDarkMat,this.plinthDarkMat,A,A]);v.position.set(e-.68,2.76,R);const L=new b(new V(.72,.04,.04),this.propMats.ironFrame);L.position.set(e-.52,2.98,R),t.add(v,L),w===0&&(C=v)}),n==="CLASS_11A1"){const R=Ni(this.propMats,1);R.position.set(e-.32,0,5.2);const w=Ni(this.propMats,2);w.position.set(e-.32,0,-8.8),t.add(R,w);const v=new b(new V(.12,1.35,2.7),[this.schoolLandmarkMat,this.schoolLandmarkMat,this.whiteFrameMat,this.whiteFrameMat,this.whiteFrameMat,this.whiteFrameMat]);v.position.set(-e-3.6,1.65,7.5),v.rotation.y=.38,t.add(v)}else if(n==="CLASS_11A2"){const R=Wo(this.propMats);R.position.set(e-.36,0,-2);const w=Ni(this.propMats,3);w.position.set(e-.32,0,6.2);const v=wr(this.propMats);v.position.set(-e+.45,0,-6.8),t.add(R,w,v)}else if(n==="CLASS_11A3"){const R=Sr(this.propMats);R.position.set(e-.35,0,4.8);const w=Ni(this.propMats,4);w.position.set(e-.32,0,-8.5);const v=wr(this.propMats);v.position.set(-e+.45,0,6.8),t.add(R,w,v)}else{const R=Ni(this.propMats,5);R.position.set(e-.32,0,5.5);const w=Wo(this.propMats);w.position.set(e-.36,0,-7.8);const v=Sr(this.propMats);v.position.set(-e+.45,0,-14.2),t.add(R,w,v)}return this.texLib.createPosterTexture&&[-6.2,7.8].forEach((R,w)=>{const v=this.texLib.createPosterTexture(i*3+w+1),L=new b(new ue(.95,1.25),new K({map:v,roughness:.55}));L.rotation.y=-Math.PI/2,L.position.set(e-.13,2.15,R),t.add(L)}),C}addClassroomDoorAndCasement(t,e,n){const i=e-.12,r=new b(new V(.14,2.75,1.38),this.whiteFrameMat);r.position.set(i,1.375,n-1.25);const a=new b(new V(.16,2.24,.6),this.whiteFrameMat);a.position.set(i-.02,1.12,n-1.56);const o=new b(new V(.16,2.24,.6),this.whiteFrameMat);o.position.set(i-.02,1.12,n-.94);const c=new b(new V(.06,.16,.04),this.propMats.chrome);c.position.set(i-.11,1.05,n-1.25);const l=new b(new V(.16,.36,1.22),this.windowGlassMat);l.position.set(i-.01,2.5,n-1.25);const h=new b(new V(.58,.018,.95),this.doormatMat);h.position.set(e-.48,.01,n-1.25),h.receiveShadow=!0;const u=new b(new V(.46,.02,.72),this.patternedMatMat);u.position.set(e-.46,.011,n-2.45),u.rotation.y=.08,u.receiveShadow=!0,t.add(r,a,o,c,l,h,u);const d=new b(new V(.14,1.85,2.15),this.whiteFrameMat);d.position.set(i,1.88,n+.95),[-.52,.52].forEach((f,g)=>{const _=new b(new V(.05,1.18,.88),this.windowGlassMat);_.position.set(i-.16,1.62,n+.95+f),_.rotation.z=-.28,_.rotation.y=g===0?-.18:.12;const m=new b(new V(.06,1.22,.92),this.whiteFrameMat);m.position.copy(_.position),m.rotation.copy(_.rotation);const p=new b(new V(.06,.38,.88),this.windowGlassMat);p.position.set(i-.02,2.48,n+.95+f),t.add(_,p)}),t.add(d)}addClassroomWindowsBay(t,e,n){const i=e-.12,r=new b(new V(.14,1.85,4.2),this.whiteFrameMat);r.position.set(i,1.88,n),[-1.35,0,1.35].forEach((a,o)=>{const c=new b(new V(.05,1.22,1.18),this.windowGlassMat),l=o!==1;c.position.set(i-(l?.15:.02),1.64,n+a),l&&(c.rotation.z=-.26,c.rotation.y=o===0?-.22:.22);const h=new b(new V(.06,.38,1.18),this.windowGlassMat);h.position.set(i-.02,2.48,n+a),t.add(c,h)}),t.add(r)}buildPalmGroveZone(t,e,n,i){const r=_n,a=new b(new ue(vn,r),this.concreteFloorMat);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,t.add(a),[-1,1].forEach(c=>{const l=new b(new V(.32,.14,r),this.plinthDarkMat);l.position.set(c*(e-.12),.05,0),l.receiveShadow=!0,t.add(l);const h=new b(new ue(22,r),this.soilFloorMat);h.rotation.x=-Math.PI/2,h.position.set(c*(e+11),-.03,0),h.receiveShadow=!0;const u=new b(new ue(4.5,r),this.grassMat);u.rotation.x=-Math.PI/2,u.position.set(c*(e+2.2),-.015,0),u.receiveShadow=!0,t.add(h,u)}),[{x:-e-2.5,z:-15.5,seed:1},{x:e+2.6,z:-14,seed:2},{x:-e-2.9,z:-5,seed:3},{x:e+2.5,z:-4,seed:4},{x:-e-2.5,z:5.5,seed:5},{x:e+2.9,z:6.5,seed:6},{x:-e-2.7,z:15.5,seed:7},{x:e+2.6,z:16.5,seed:8}].forEach(c=>{const l=P0(this.propMats,c.seed+n,!0);l.position.set(c.x,0,c.z),t.add(l),i.push({type:"palm_tree",minX:c.x-.55,maxX:c.x+.55,minY:0,maxY:6.5,minZ:c.z-.55,maxZ:c.z+.55})}),[-1,1].forEach(c=>{for(let l=-16;l<=16;l+=8){const h=new b(new yt(.045,.045,1.45,6),this.propMats.exhaustDark);h.position.set(c*(e+.55),.725,l),t.add(h)}[.65,1.25].forEach(l=>{const h=new b(new V(.02,.025,r),this.propMats.exhaustDark);h.position.set(c*(e+.55),l,0),t.add(h)})})}buildMotorcycleParkingZone(t,e,n,i){const r=_n,a=vn+6.4,o=new b(new ue(a,r),this.concreteFloorMat);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,t.add(o),[-1,1].forEach(h=>{const u=new b(new ue(18,r),this.grassMat);u.rotation.x=-Math.PI/2,u.position.set(h*(a*.5+9),-.03,0),u.receiveShadow=!0,t.add(u)}),[-12,12].forEach((h,u)=>{const d=yr(this.propMats,n*5+u+2,!0);d.position.set(-a*.5-3.2,-.03,h),t.add(d)});const c=b0(this.propMats,a-.6,r,4.35,5.45,4);t.add(c),[-1,1].forEach(h=>{const u=new b(new ue(.08,r-.8),this.parkingLineMat);u.rotation.x=-Math.PI/2,u.position.set(h*(e-.32),.008,0),t.add(u);for(let d=-16.5;d<=16.5;d+=5.5){const f=new b(new ue(2.1,.065),this.parkingLineMat);f.rotation.x=-Math.PI/2,f.rotation.z=h*.45,f.position.set(h*(e+.95),.008,d),t.add(f)}}),[-16.5,-10,-3.5,3.5,10,16.5].forEach((h,u)=>{const d=bs[(n*3+u)%bs.length],f=Vo(this.propMats,d,u%2===0,u);f.position.set(e+1.2,0,h),f.rotation.y=-.58,t.add(f),u%2===1&&this.highDetailProps.push(f);const g=bs[(n*5+u+2)%bs.length],_=Vo(this.propMats,g,u%2===1,u+7);_.position.set(-e-1.2,0,h+.2),_.rotation.y=Math.PI+.55,t.add(_),u%2===1&&this.highDetailProps.push(_)}),i.push({type:"motorcycle_row_right",minX:e+.35,maxX:e+2.4,minY:0,maxY:1.35,minZ:-r*.5,maxZ:r*.5},{type:"motorcycle_row_left",minX:-e-2.4,maxX:-e-.35,minY:0,maxY:1.35,minZ:-r*.5,maxZ:r*.5})}buildCanteenZone(t,e,n,i){const r=_n,a=vn+9.2,o=4.35,c=new b(new ue(a,r),this.ceramicFloorMat);c.rotation.x=-Math.PI/2,c.position.x=2.2,c.receiveShadow=!0,t.add(c);const l=new b(new ue(16,r),this.grassMat);l.rotation.x=-Math.PI/2,l.position.set(-e-8.5,-.03,0),l.receiveShadow=!0,t.add(l),[-12,6].forEach((M,S)=>{const x=yr(this.propMats,n*3+S+5,!1);x.position.set(-e-3.8,-.03,M),t.add(x)});const h=new b(new V(a+1.2,.08,r),this.canopyMetalMat);h.position.set(2.2,o+.32,0),h.rotation.z=-.04,h.castShadow=!0,t.add(h),[-17.5,-10.5,-3.5,3.5,10.5,17.5].forEach(M=>{const S=new b(new V(a+.6,.18,.12),this.propMats.galvSteel);S.position.set(2.2,o,M),t.add(S),[-e+.12,e+.35,e+6.4].forEach(x=>{const P=new b(new V(.44,.85,.44),this.columnCreamTileMat);P.position.set(x,.425,M),P.castShadow=!0;const A=new b(new V(.28,o-.85,.28),this.pillarGreenMat);A.position.set(x,.85+(o-.85)*.5,M),A.castShadow=!0,t.add(P,A)})});const d=new b(new V(vn+1.6,.46,.3),this.pillarGreenMat);d.position.set(0,o-.15,17.5);const f=this.propMats.ironFrame,g=new b(new V(3.8,.78,.09),[f,f,f,f,this.canteenTopSignMat,this.canteenTopSignMat]);g.position.set(0,o-.28,17.7),t.add(d,g);const _=new b(new V(.26,o,r),this.wallCreamLowerMat);_.position.set(e+6.6,o*.5,0),t.add(_),[-10,10].forEach((M,S)=>{const x=A0(this.propMats,this.texLib,S);x.position.set(e+4.9,0,M),t.add(x);const P=new b(new V(.08,.62,2.5),[this.stallSignMats[S%this.stallSignMats.length],this.stallSignMats[S%this.stallSignMats.length],f,f,f,f]);if(P.position.set(e+4.65,2.85,M),t.add(P),this.texLib.getSnackShelfTexture){const A=this.texLib.getSnackShelfTexture(),C=new b(new ue(1.9,1.75),new K({map:A,roughness:.6}));C.position.set(e+6.42,2.05,M),C.rotation.y=-Math.PI/2,t.add(C)}}),[-13.5,-4.5,4.5,13.5].forEach((M,S)=>{const x=T0(this.propMats,S);x.position.set(e+1.9+S%2*.45,0,M),t.add(x)}),[-12.5,2.5,14.5].forEach((M,S)=>{if(S%2===0){const x=Sr(this.propMats);x.position.set(-e+.42,0,M),t.add(x)}else{const x=wr(this.propMats);x.position.set(-e+.42,0,M),t.add(x)}}),i.push({type:"canteen_seating_zone",minX:e+.4,maxX:e+6.6,minY:0,maxY:3,minZ:-r*.5,maxZ:r*.5})}getActiveSegmentAtZ(t=0){let e=this.segments[0]||null,n=1/0;for(let i=0;i<this.segments.length;i++){const r=this.segments[i],a=Math.abs(t-r.group.position.z);a<n&&(n=a,e=r)}return e}getZoneAt(t=0){const e=this.getActiveSegmentAtZ(t);return e?e.zoneType:"CLASS_11A1"}getCurrentZoneName(t=0){const e=this.getActiveSegmentAtZ(t);return e?Xo[e.zoneType]||e.zoneType:Xo.CLASS_11A1}getSafetyBoundsAt(t=0){const e=this.getActiveSegmentAtZ(t);if(!e)return{floorY:0,ceilingY:ve-.25,ceilingClearance:ve-.25,minX:-2.65,maxX:2.65};const n=e.ceilingClearance||ve-.25;return{floorY:0,ceilingY:n,ceilingClearance:n,minX:e.leftWallX||-2.65,maxX:e.rightWallX||2.65}}applyQualityPreset(t){const e=t!=="low",n=t==="medium"||t==="high"||t==="ultra";this.highDetailProps.forEach(i=>{i.visible=e}),this.distantProps.forEach(i=>{i.visible=n})}reset(){if(this.sequenceIndex=0,this.segments.length===ws){for(let t=0;t<ws;t++)this.segments[t].group.position.z=-t*_n;return}for(let t=0;t<this.segments.length;t++)this.scene.remove(this.segments[t].group);this.segments=[],this.bystanders=[],this.distantProps=[],this.highDetailProps=[];for(let t=0;t<ws;t++){const e=Es[t%Es.length],n=this.createZoneSegment(e,t);n.group.position.z=-t*_n,this.scene.add(n.group),this.segments.push(n)}}update(t,e){const n=e*t;for(let i=0;i<this.segments.length;i++){const r=this.segments[i];if(r.group.position.z+=n,r.group.position.z>_n){let a=1/0;for(let o=0;o<this.segments.length;o++)this.segments[o].group.position.z<a&&(a=this.segments[o].group.position.z);r.group.position.z=a-_n,this.sequenceIndex++}}}}class I0{constructor(t,e){this.scene=t,this.texLib=e,this.activeObstacles=[],this.pool=[],this.spawnTimer=0,this.initMaterials()}initMaterials(){const t=this.texLib?this.texLib.getWoodTexture("#9c5d30"):null,e=this.texLib?this.texLib.getWoodTexture("#693b1c"):null,n=this.texLib?this.texLib.getContactShadowTexture():null;this.woodDeskMat=new K({color:t?16777215:10247472,map:t,roughness:.48,metalness:.04}),this.woodDarkMat=new K({color:e?16777215:6896412,map:e,roughness:.58,metalness:.04}),this.ironPipeMat=new K({color:3359061,roughness:.42,metalness:.72}),this.bagCanvasMat=new K({color:10033947,roughness:.86}),this.binPlasticMat=new K({color:1409085,roughness:.52}),this.wetConeYellowMat=new K({color:16436245,roughness:.44}),this.bookBlueMat=new K({color:1920728,roughness:.68}),this.paperMat=new K({color:16317180,roughness:.8}),this.cabinetSteelMat=new K({color:4674921,roughness:.38,metalness:.62}),this.glassMat=new K({color:14412542,roughness:.1,metalness:.18,transparent:!0,opacity:.45}),this.goldTrophyMat=new K({color:16096779,roughness:.25,metalness:.85}),this.bannerSignMat=this.texLib?new K({map:this.texLib.createSignboardTexture({title:"AWAS LANTAI DIPEL",subtitle:"PIKET KEBERSIHAN • MERUNDUK LEWAT BAWAH",bg:"#b45309",fg:"#ffffff",border:"#fef08a",accent:"#fef08a",width:512,height:192}),roughness:.55}):new K({color:15357964,roughness:.6}),this.contactShadowMat=n?new Ye({map:n,transparent:!0,depthWrite:!1}):null}addGroundShadow(t,e,n){if(!this.contactShadowMat)return;const i=new b(new ue(e,n),this.contactShadowMat);i.rotation.x=-Math.PI/2,i.position.y=.01,t.add(i)}createObstacleMesh(t){const e=new Nt;let n=0,i=1,r=.65,a=.45,o=!1;if(t==="DESK_CHAIR"){this.addGroundShadow(e,1.75,1.25);const c=new b(new V(1.42,.055,.72),this.woodDeskMat);c.position.set(0,.78,-.08),c.castShadow=!0,c.receiveShadow=!0;const l=new b(new V(1.26,.14,.58),this.woodDarkMat);l.position.set(0,.68,-.08),e.add(c,l),[-.62,.62].forEach(g=>{[-.36,.2].forEach(_=>{const m=new b(new yt(.028,.025,.76,8),this.ironPipeMat);m.position.set(g,.38,_),m.castShadow=!0,e.add(m)})});const h=new b(new V(.46,.04,.44),this.woodDarkMat);h.position.set(.22,.46,.36);const u=new b(new V(.46,.38,.04),this.woodDarkMat);u.position.set(.22,.72,.56),u.castShadow=!0,[-.2,.2].forEach(g=>{[-.18,.18].forEach(_=>{const m=new b(new V(.038,.46,.038),this.woodDarkMat);m.position.set(.22+g,.23,.36+_),e.add(m)})});const d=new b(new V(.3,.05,.22),this.bookBlueMat);d.position.set(-.28,.83,-.08);const f=new b(new V(.28,.04,.2),this.paperMat);f.position.set(-.27,.83,-.08),e.add(h,u,d,f),n=0,i=.94,r=.66,a=.48}else if(t==="BAG_BOOKS"){this.addGroundShadow(e,1.65,1.05);const c=new b(new yt(.22,.17,.62,12),this.binPlasticMat);c.position.set(.38,.31,-.06),c.castShadow=!0;const l=new b(new yt(.235,.23,.09,12),this.wetConeYellowMat);l.position.set(.38,.66,-.06);const h=new b(new V(.42,.48,.28),this.bagCanvasMat);h.position.set(-.34,.24,.05),h.rotation.z=.14,h.castShadow=!0;const u=new b(new Ei(.18,.62,4),this.wetConeYellowMat);u.position.set(-.02,.31,-.12),u.rotation.y=Math.PI/4,u.castShadow=!0,e.add(c,l,h,u),n=0,i=.8,r=.62,a=.38}else if(t==="HIGH_BANNER"){this.addGroundShadow(e,1.9,.65),[-.82,.82].forEach(h=>{const u=new b(new yt(.045,.045,2.32,10),this.ironPipeMat);u.position.set(h,1.16,0),u.castShadow=!0;const d=new b(new V(.22,.05,.46),this.ironPipeMat);d.position.set(h,.025,0),e.add(u,d)});const c=new b(new yt(.04,.04,1.74,10),this.ironPipeMat);c.rotation.z=Math.PI/2,c.position.set(0,2.26,0);const l=new b(new V(1.62,.92,.1),this.bannerSignMat);l.position.set(0,1.68,0),l.castShadow=!0,e.add(c,l),n=1.12,i=2.3,r=.72,a=.25}else if(t==="TALL_LOCKER"){this.addGroundShadow(e,1.65,1.05);const c=new b(new V(1.38,2.28,.72),this.cabinetSteelMat);c.position.y=1.14,c.castShadow=!0,c.receiveShadow=!0;const l=new b(new V(1.22,1.25,.75),this.glassMat);l.position.y=1.52;const h=new b(new yt(.14,.07,.34,10),this.goldTrophyMat);h.position.set(-.25,1.42,0);const u=h.clone();u.position.x=.25,e.add(c,l,h,u),n=0,i=2.32,r=.66,a=.42,o=!0}return{type:t,group:e,minY:n,maxY:i,halfWidth:r,halfDepth:a,isSolidWall:o,lane:1,hit:!1,knockbackActive:!1,hitVelX:0,hitVelY:0,hitVelZ:0,hitRotX:0,hitRotZ:0}}acquireObstacle(t){const e=this.pool.findIndex(i=>i.type===t);if(e!==-1){const i=this.pool.splice(e,1)[0];return i.hit=!1,i.knockbackActive=!1,i.hitVelX=0,i.hitVelY=0,i.hitVelZ=0,i.hitRotX=0,i.hitRotZ=0,i.group.visible=!0,i.group.position.y=0,i.group.rotation.set(0,0,0),i}const n=this.createObstacleMesh(t);return this.scene.add(n.group),n}releaseObstacle(t){t.group.visible=!1,this.pool.push(t)}reset(){for(;this.activeObstacles.length>0;){const t=this.activeObstacles.pop();this.releaseObstacle(t)}this.spawnTimer=.6}spawnPattern(t,e){const n=[["DESK_CHAIR",null,null],[null,"DESK_CHAIR",null],[null,null,"BAG_BOOKS"],[null,"HIGH_BANNER",null],["HIGH_BANNER",null,"DESK_CHAIR"],["TALL_LOCKER","DESK_CHAIR",null],[null,"HIGH_BANNER","TALL_LOCKER"],["BAG_BOOKS",null,"HIGH_BANNER"],["TALL_LOCKER",null,"TALL_LOCKER"],["DESK_CHAIR","HIGH_BANNER","BAG_BOOKS"]],i=n[Math.floor(Math.random()*n.length)];i.forEach((r,a)=>{if(!r)return;const o=this.acquireObstacle(r);o.lane=a,o.group.position.set(an[a],0,t),this.activeObstacles.push(o)}),e&&e.spawnForPattern(i,t)}update(t,e,n,i,r){if(this.spawnTimer-=t,this.spawnTimer<=0){const c=Math.max(.78,1.58-(e-13)*.035);this.spawnTimer=c,this.spawnPattern(-82,i)}const a=n.getHitbox(),o=e*t;for(let c=this.activeObstacles.length-1;c>=0;c--){const l=this.activeObstacles[c],h=l.group.position.z;l.group.position.z+=o;const u=l.group.position.z;if(l.knockbackActive&&(l.group.position.x+=l.hitVelX*t,l.group.position.y=Math.max(0,l.group.position.y+l.hitVelY*t),l.group.position.z+=l.hitVelZ*t,l.hitVelY-=22*t,l.group.rotation.x+=l.hitRotX*t,l.group.rotation.z+=l.hitRotZ*t),!l.hit){const d=l.group.position.x,f=Math.min(h,u)-l.halfDepth,_=Math.max(h,u)+l.halfDepth>=a.minZ&&f<=a.maxZ,m=d+l.halfWidth>=a.minX&&d-l.halfWidth<=a.maxX,p=l.maxY>a.minY+.07&&l.minY<a.maxY-.04;if(_&&m&&p)if(l.hit=!0,n.hasTurbo)l.knockbackActive=!0,l.hitVelX=(d>=n.group.position.x?1:-1)*4.5,l.hitVelY=7.5,l.hitVelZ=-e*1.45,l.hitRotX=-9.5,l.hitRotZ=4.2;else if(l.isSolidWall)l.group.position.z=a.minZ-l.halfDepth-.06,r(l);else{l.knockbackActive=!0;const M=d>=n.group.position.x?1:-1;l.hitVelX=M*3.8,l.hitVelY=3.6,l.hitVelZ=-e*1.15,l.hitRotX=-5.5,l.hitRotZ=M*4.5,r(l)}}(l.group.position.z>10||l.group.position.z<-115)&&(this.activeObstacles.splice(c,1),this.releaseObstacle(l))}}}const di={MAGNET:{id:"MAGNET",label:"🧲 Magnet Koin Kantin",duration:9,color:16436245},SUPER_JUMP:{id:"SUPER_JUMP",label:"👟 Sepatu Kecepatan",duration:9,color:3718648},TURBO:{id:"TURBO",label:"🔔 Mode Kabur Turbo",duration:5.5,color:16347926}};class D0{constructor(t){this.scene=t,this.activeCoins=[],this.coinPool=[],this.activePowerups=[],this.activeBuffs={MAGNET:0,SUPER_JUMP:0,TURBO:0},this.coinOuterGeo=new yt(.3,.3,.075,18),this.coinInnerGeo=new yt(.21,.21,.088,14),this.coinGoldMat=new K({color:16498468,emissive:7877903,emissiveIntensity:.18,roughness:.26,metalness:.86}),this.coinInnerMat=new K({color:16638023,roughness:.34,metalness:.78})}acquireCoin(){if(this.coinPool.length>0){const i=this.coinPool.pop();return i.mesh.visible=!0,i.collected=!1,i}const t=new Nt,e=new b(this.coinOuterGeo,this.coinGoldMat);e.rotation.z=Math.PI/2;const n=new b(this.coinInnerGeo,this.coinInnerMat);return n.rotation.z=Math.PI/2,t.add(e,n),this.scene.add(t),{mesh:t,collected:!1}}releaseCoin(t){t.mesh.visible=!1,this.coinPool.push(t)}acquirePowerup(t){const e=new Nt,n=di[t],i=new b(new on(.42,.03,8,20),new Ye({color:n.color}));if(e.add(i),t==="SUPER_JUMP"){const r=new b(new V(.2,.07,.44),new K({color:16317180,roughness:.5}));r.position.y=-.1;const a=new b(new $i(.1,.2,6,10),new K({color:165063,roughness:.42}));a.rotation.x=Math.PI/2,a.position.y=-.02,e.add(r,a)}else if(t==="MAGNET"){const r=new b(new on(.18,.065,8,16,Math.PI),new K({color:14427686,roughness:.35,metalness:.35}));r.rotation.z=Math.PI,r.position.y=.06;const a=new b(new yt(.065,.065,.12,8),new K({color:14870768,roughness:.25,metalness:.85}));a.position.set(-.18,.12,0);const o=a.clone();o.position.x=.18,e.add(r,a,o)}else{const r=new b(new yt(.09,.24,.32,14),this.coinGoldMat);r.position.y=.03;const a=new b(new ne(.065,8,8),new K({color:11817737,metalness:.8,roughness:.3}));a.position.y=-.14,e.add(r,a)}return this.scene.add(e),{typeKey:t,mesh:e,collected:!1}}reset(){for(;this.activeCoins.length>0;)this.releaseCoin(this.activeCoins.pop());for(;this.activePowerups.length>0;){const t=this.activePowerups.pop();t.mesh.visible=!1,this.scene.remove(t.mesh)}this.activeBuffs.MAGNET=0,this.activeBuffs.SUPER_JUMP=0,this.activeBuffs.TURBO=0}spawnForPattern(t,e){const n=[0,1,2].filter(c=>t[c]!=="TALL_LOCKER");if(n.length===0)return;const i=n[Math.floor(Math.random()*n.length)],r=t[i],a=5;for(let c=0;c<a;c++){const l=this.acquireCoin(),h=(c-2)*1.9;let u=.65;r==="DESK_CHAIR"||r==="BAG_BOOKS"?u=.65+Math.cos((c-2)/2.2*(Math.PI/2))*1.45:r==="HIGH_BANNER"&&(u=.48),l.mesh.position.set(an[i],u,e+h),this.activeCoins.push(l)}const o=[0,1,2].filter(c=>t[c]===null&&c!==i);if(o.length>0&&Math.random()<.18){const c=o[Math.floor(Math.random()*o.length)],l=Object.keys(di),h=l[Math.floor(Math.random()*l.length)],u=this.acquirePowerup(h);u.mesh.position.set(an[c],.92,e),this.activePowerups.push(u)}}activateBuff(t,e,n){const i=di[t];i&&(this.activeBuffs[t]=i.duration,t==="TURBO"&&n&&n.onPlayerTurbo(),this.syncPlayerFlags(e))}syncPlayerFlags(t){t.hasMagnet=this.activeBuffs.MAGNET>0,t.hasSuperJump=this.activeBuffs.SUPER_JUMP>0,t.hasTurbo=this.activeBuffs.TURBO>0}getActiveBuffList(){const t=[];return Object.keys(di).forEach(e=>{this.activeBuffs[e]>0&&t.push({label:di[e].label,remaining:Math.ceil(this.activeBuffs[e])})}),t}update(t,e,n,i,r,a,o){Object.keys(this.activeBuffs).forEach(h=>{this.activeBuffs[h]>0&&(this.activeBuffs[h]=Math.max(0,this.activeBuffs[h]-t))}),this.syncPlayerFlags(n);const c=e*t,l=n.group.position;for(let h=this.activeCoins.length-1;h>=0;h--){const u=this.activeCoins[h];u.mesh.position.z+=c,u.mesh.rotation.y+=t*4.2,n.hasMagnet&&u.mesh.position.z>-16&&u.mesh.position.z<3&&(u.mesh.position.x=_t.lerp(u.mesh.position.x,l.x,t*11),u.mesh.position.y=_t.lerp(u.mesh.position.y,l.y+.9,t*11));const d=Math.abs(u.mesh.position.x-l.x),f=Math.abs(u.mesh.position.y-(l.y+.8)),g=Math.abs(u.mesh.position.z-l.z);if(d<.78&&f<1.05&&g<.78){this.activeCoins.splice(h,1),this.releaseCoin(u),r&&r.playCoin(),a&&a();continue}u.mesh.position.z>8&&(this.activeCoins.splice(h,1),this.releaseCoin(u))}for(let h=this.activePowerups.length-1;h>=0;h--){const u=this.activePowerups[h];u.mesh.position.z+=c,u.mesh.rotation.y+=t*3;const d=Math.abs(u.mesh.position.x-l.x),f=Math.abs(u.mesh.position.y-(l.y+.85)),g=Math.abs(u.mesh.position.z-l.z);if(d<.85&&f<1.15&&g<.85){const _=u.typeKey;this.activePowerups.splice(h,1),this.scene.remove(u.mesh),this.activateBuff(_,n,i),r&&r.playPowerup(),o&&o(di[_]);continue}u.mesh.position.z>8&&(this.activePowerups.splice(h,1),this.scene.remove(u.mesh))}}}const Yo="kpw_seen_controls_v1",qo="kpw_show_vcontrols";class U0{constructor(t){this.callbacks=t,this.bubbleTimeout=null,this.showVirtualControls=localStorage.getItem(qo)!=="false",this.cacheElements(),this.bindUIEvents(),this.bindInputControls(),this.syncSettingsUI()}cacheElements(){this.canvasContainer=document.getElementById("canvas-container"),this.webglFallback=document.getElementById("webgl-fallback"),this.orientationToast=document.getElementById("orientation-toast"),this.btnDismissToast=document.getElementById("btn-dismiss-toast"),this.hud=document.getElementById("hud"),this.hudScore=document.getElementById("hud-score"),this.hudCoins=document.getElementById("hud-coins"),this.hudHighscore=document.getElementById("hud-highscore"),this.hudFps=document.getElementById("hud-fps"),this.hudZone=document.getElementById("hud-zone"),this.btnHudHelp=document.getElementById("btn-hud-help"),this.btnHudMute=document.getElementById("btn-hud-mute"),this.btnHudPause=document.getElementById("btn-hud-pause"),this.chaseStatusText=document.getElementById("chase-status-text"),this.chaseDistanceText=document.getElementById("chase-distance-text"),this.chaseBarFill=document.getElementById("chase-bar-fill"),this.chaseTeacherHead=document.getElementById("chase-teacher-head"),this.hudPowerups=document.getElementById("hud-powerups"),this.comicBubble=document.getElementById("comic-bubble"),this.comicBubbleText=document.getElementById("comic-bubble-text"),this.virtualControls=document.getElementById("virtual-controls"),this.btnVcLeft=document.getElementById("btn-vc-left"),this.btnVcRight=document.getElementById("btn-vc-right"),this.btnVcJump=document.getElementById("btn-vc-jump"),this.btnVcSlide=document.getElementById("btn-vc-slide"),this.menuScreen=document.getElementById("menu-screen"),this.menuBestScore=document.getElementById("menu-best-score"),this.menuTotalCoins=document.getElementById("menu-total-coins"),this.selectQuality=document.getElementById("select-quality"),this.toggleVControls=document.getElementById("toggle-vcontrols"),this.btnStartGame=document.getElementById("btn-start-game"),this.btnOpenHelp=document.getElementById("btn-open-help"),this.btnMenuMute=document.getElementById("btn-menu-mute"),this.btnPrevChar=document.getElementById("btn-prev-char"),this.btnNextChar=document.getElementById("btn-next-char"),this.charName=document.getElementById("char-name"),this.charBadge=document.getElementById("char-badge"),this.charDesc=document.getElementById("char-desc"),this.btnSelectChar=document.getElementById("btn-select-char"),this.charSelectedIndicator=document.getElementById("char-selected-indicator"),this.pauseScreen=document.getElementById("pause-screen"),this.selectQualityPause=document.getElementById("select-quality-pause"),this.toggleVControlsPause=document.getElementById("toggle-vcontrols-pause"),this.btnResumeGame=document.getElementById("btn-resume-game"),this.btnPauseHelp=document.getElementById("btn-pause-help"),this.btnRestartFromPause=document.getElementById("btn-restart-from-pause"),this.btnQuitToMenu=document.getElementById("btn-quit-to-menu"),this.gameoverScreen=document.getElementById("gameover-screen"),this.gameoverQuote=document.getElementById("gameover-quote"),this.goScore=document.getElementById("go-score"),this.goCoins=document.getElementById("go-coins"),this.goBest=document.getElementById("go-best"),this.newRecordBanner=document.getElementById("new-record-banner"),this.btnPlayAgain=document.getElementById("btn-play-again"),this.btnGameoverMenu=document.getElementById("btn-gameover-menu"),this.helpModal=document.getElementById("help-modal"),this.btnCloseHelp=document.getElementById("btn-close-help")}bindUIEvents(){this.btnStartGame.addEventListener("click",()=>{if(localStorage.getItem(Yo))this.callbacks.onStartGame();else{try{localStorage.setItem(Yo,"true")}catch{}this.openHelp(!0)}}),this.btnOpenHelp.addEventListener("click",()=>this.openHelp(!1)),this.btnPauseHelp.addEventListener("click",()=>this.openHelp(!1)),this.btnHudHelp.addEventListener("click",()=>{this.callbacks.onPauseGame(),this.openHelp(!1)}),this.btnCloseHelp.addEventListener("click",()=>{const e=this.helpModal.dataset.startAfterClose==="true";this.helpModal.dataset.startAfterClose="false",this.helpModal.classList.add("hidden"),e&&this.callbacks.onStartGame()}),this.btnHudPause.addEventListener("click",()=>this.callbacks.onPauseGame()),this.btnResumeGame.addEventListener("click",()=>this.callbacks.onResumeGame()),this.btnRestartFromPause.addEventListener("click",()=>this.callbacks.onStartGame()),this.btnQuitToMenu.addEventListener("click",()=>this.callbacks.onQuitToMenu()),this.btnPlayAgain.addEventListener("click",()=>this.callbacks.onStartGame()),this.btnGameoverMenu.addEventListener("click",()=>this.callbacks.onQuitToMenu()),this.btnHudMute.addEventListener("click",()=>this.callbacks.onToggleMute()),this.btnMenuMute.addEventListener("click",()=>this.callbacks.onToggleMute()),this.selectQuality.addEventListener("change",e=>{this.selectQualityPause.value=e.target.value,this.callbacks.onChangeQuality(e.target.value)}),this.selectQualityPause.addEventListener("change",e=>{this.selectQuality.value=e.target.value,this.callbacks.onChangeQuality(e.target.value)});const t=e=>{this.showVirtualControls=e,this.toggleVControls.checked=e,this.toggleVControlsPause.checked=e;try{localStorage.setItem(qo,String(e))}catch{}this.updateVirtualControlsVisibility(this.callbacks.isPlaying())};this.toggleVControls.addEventListener("change",e=>t(e.target.checked)),this.toggleVControlsPause.addEventListener("change",e=>t(e.target.checked)),this.btnDismissToast.addEventListener("click",()=>{this.orientationToast.classList.add("hidden"),this.orientationToast.dataset.dismissed="true"})}bindInputControls(){window.addEventListener("keydown",h=>{if(!this.helpModal.classList.contains("hidden")){(h.key==="Escape"||h.key==="Enter"||h.key===" ")&&(h.preventDefault(),this.btnCloseHelp.click());return}if(h.key==="Escape"||h.key==="p"||h.key==="P"){this.callbacks.isPlaying()?this.callbacks.onPauseGame():this.callbacks.isPaused()&&this.callbacks.onResumeGame();return}if(this.callbacks.isPlaying())switch(h.key){case"ArrowLeft":case"a":case"A":h.preventDefault(),this.callbacks.onAction("LEFT");break;case"ArrowRight":case"d":case"D":h.preventDefault(),this.callbacks.onAction("RIGHT");break;case"ArrowUp":case"w":case"W":case" ":h.preventDefault(),this.callbacks.onAction("JUMP");break;case"ArrowDown":case"s":case"S":h.preventDefault(),this.callbacks.onAction("SLIDE");break}});const t=(h,u)=>{h.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),h.classList.add("active-press"),this.callbacks.isPlaying()&&this.callbacks.onAction(u)});const d=()=>h.classList.remove("active-press");h.addEventListener("pointerup",d),h.addEventListener("pointercancel",d),h.addEventListener("pointerleave",d)};t(this.btnVcLeft,"LEFT"),t(this.btnVcRight,"RIGHT"),t(this.btnVcJump,"JUMP"),t(this.btnVcSlide,"SLIDE");const e=30;let n=0,i=0,r=!1,a=!1;const o=(h,u)=>{this.callbacks.isPlaying()&&(n=h,i=u,r=!0,a=!1)},c=(h,u)=>{if(!r||a||!this.callbacks.isPlaying())return;const d=h-n,f=u-i;Math.abs(d)<e&&Math.abs(f)<e||(a=!0,Math.abs(d)>Math.abs(f)?d>0?this.callbacks.onAction("RIGHT"):this.callbacks.onAction("LEFT"):f<0?this.callbacks.onAction("JUMP"):this.callbacks.onAction("SLIDE"))},l=()=>{r=!1,a=!1};this.canvasContainer.addEventListener("touchstart",h=>{h.touches.length===1&&o(h.touches[0].clientX,h.touches[0].clientY)},{passive:!0}),this.canvasContainer.addEventListener("touchmove",h=>{h.touches.length===1&&c(h.touches[0].clientX,h.touches[0].clientY)},{passive:!0}),this.canvasContainer.addEventListener("touchend",l,{passive:!0}),this.canvasContainer.addEventListener("touchcancel",l,{passive:!0}),this.canvasContainer.addEventListener("pointerdown",h=>{h.pointerType!=="touch"&&o(h.clientX,h.clientY)}),this.canvasContainer.addEventListener("pointermove",h=>{h.pointerType!=="touch"&&c(h.clientX,h.clientY)}),this.canvasContainer.addEventListener("pointerup",l),this.canvasContainer.addEventListener("pointercancel",l)}syncSettingsUI(){this.toggleVControls.checked=this.showVirtualControls,this.toggleVControlsPause.checked=this.showVirtualControls}setQualitySelect(t){this.selectQuality.value=t,this.selectQualityPause.value=t}updateMuteButtons(t){this.btnHudMute.textContent=t?"🔇":"🔊",this.btnMenuMute.textContent=t?"🔇 Suara: OFF":"🔊 Suara: ON"}updateVirtualControlsVisibility(t){t&&this.showVirtualControls?this.virtualControls.classList.remove("hidden"):this.virtualControls.classList.add("hidden")}checkOrientationHint(){if(this.orientationToast.dataset.dismissed==="true")return;window.innerHeight>window.innerWidth&&window.innerWidth<768?this.orientationToast.classList.remove("hidden"):this.orientationToast.classList.add("hidden")}openHelp(t=!1){this.helpModal.dataset.startAfterClose=String(t),this.helpModal.classList.remove("hidden")}showMenu(t,e){this.menuBestScore.textContent=`${Math.floor(t)} m`,this.menuTotalCoins.textContent=`${e}`,this.menuScreen.classList.remove("hidden"),this.pauseScreen.classList.add("hidden"),this.gameoverScreen.classList.add("hidden"),this.hud.classList.add("hidden"),this.updateVirtualControlsVisibility(!1)}showPlaying(t){this.hudHighscore.textContent=`${Math.floor(t)} m`,this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameoverScreen.classList.add("hidden"),this.hud.classList.remove("hidden"),this.updateVirtualControlsVisibility(!0)}showPause(){this.pauseScreen.classList.remove("hidden"),this.updateVirtualControlsVisibility(!1)}showGameOver(t,e,n,i,r){this.goScore.textContent=`${Math.floor(t)} m`,this.goCoins.textContent=`${e}`,this.goBest.textContent=`${Math.floor(n)} m`,this.gameoverQuote.textContent=r,i?this.newRecordBanner.classList.remove("hidden"):this.newRecordBanner.classList.add("hidden"),this.gameoverScreen.classList.remove("hidden"),this.updateVirtualControlsVisibility(!1)}showWebGLFallback(){this.webglFallback.classList.remove("hidden"),this.menuScreen.classList.add("hidden")}showComicBubble(t,e=3e3){this.comicBubbleText.textContent=t,this.comicBubble.classList.remove("hidden"),this.bubbleTimeout&&clearTimeout(this.bubbleTimeout),this.bubbleTimeout=setTimeout(()=>{this.comicBubble.classList.add("hidden")},e)}updateHUD(t,e,n,i,r,a,o=60,c=""){this.hudScore.textContent=`${Math.floor(t)} m`,this.hudCoins.textContent=`${e}`,this.hudHighscore.textContent=`${Math.floor(Math.max(t,n))} m`,this.hudFps&&(this.hudFps.textContent=`${Math.round(o)} FPS`),this.hudZone&&c&&(this.hudZone.textContent=c);const l=Math.max(0,Math.round(i));this.chaseDistanceText.textContent=`${l} m di belakang`;const h=Math.max(0,Math.min(1,i/r)),u=Math.round(h*100);this.chaseBarFill.style.width=`${u}%`;const d=Math.round(92-h*84);this.chaseTeacherHead.style.left=`${d}%`,i<=6.5?(this.chaseStatusText.textContent="🚨 Pak Wahid: DEKAT SEKALI!",this.chaseStatusText.classList.add("danger")):i<=12?(this.chaseStatusText.textContent="⚠️ Pak Wahid: Mengejar!",this.chaseStatusText.classList.remove("danger")):(this.chaseStatusText.textContent="👨‍🏫 Pak Wahid: Jarak Aman",this.chaseStatusText.classList.remove("danger")),a.length===0?this.hudPowerups.innerHTML!==""&&(this.hudPowerups.innerHTML=""):this.hudPowerups.innerHTML=a.map(f=>`<div class="powerup-badge"><span>${f.label}</span> <strong>${f.remaining}d</strong></div>`).join("")}setupCharacterSelector(t,e,n,i){this.charPresets=t,this.equippedOutfitId=e,this.currentCharIndex=Math.max(0,t.findIndex(a=>a.id===e));const r=()=>{const a=this.charPresets[this.currentCharIndex];if(!a)return;this.charName&&(this.charName.textContent=a.name),this.charBadge&&(this.charBadge.textContent=a.badgeName),this.charDesc&&(this.charDesc.textContent=a.description);const o=a.id===this.equippedOutfitId;this.charSelectedIndicator&&(o?this.charSelectedIndicator.classList.remove("hidden"):this.charSelectedIndicator.classList.add("hidden")),this.btnSelectChar&&(o?(this.btnSelectChar.textContent="✓ Sedang Dipakai",this.btnSelectChar.classList.add("equipped")):(this.btnSelectChar.textContent="✅ Gunakan Seragam Ini",this.btnSelectChar.classList.remove("equipped"))),i&&i(a.id)};this.btnPrevChar&&this.btnPrevChar.addEventListener("click",()=>{this.currentCharIndex=(this.currentCharIndex-1+this.charPresets.length)%this.charPresets.length,r()}),this.btnNextChar&&this.btnNextChar.addEventListener("click",()=>{this.currentCharIndex=(this.currentCharIndex+1)%this.charPresets.length,r()}),this.btnSelectChar&&this.btnSelectChar.addEventListener("click",()=>{const a=this.charPresets[this.currentCharIndex];a&&(this.equippedOutfitId=a.id,r(),n&&n(a.id))}),r()}}const Ko="kpw_highscore",Zo="kpw_total_coins",Jo="kpw_graphics_quality",N0={CLASS_11A1:"Kelas 11 A1",CLASS_11A2:"Kelas 11 A2",CLASS_11A3:"Kelas 11 A3",CLASS_11A4:"Kelas 11 A4",PALM_GROVE:"Kebun Sawit Belakang",PARKING:"Parkiran Motor Baja",CANTEEN:"Kantin Sekolah"};class F0{constructor(){if(this.state="MENU",this.score=0,this.runCoins=0,this.highScore=Number(localStorage.getItem(Ko)||0),this.totalCoins=Number(localStorage.getItem(Zo)||0),this.baseSpeed=13.5,this.maxSpeed=27,this.currentSpeed=this.baseSpeed,this.cameraShake=0,this.chaseShoutTimer=7.5,this.fpsAccumTime=0,this.fpsFrames=0,this.measuredFps=60,this.audio=new v0,this.quality=this.detectInitialQuality(),this.ui=new U0({onStartGame:()=>this.startGame(),onPauseGame:()=>this.pauseGame(),onResumeGame:()=>this.resumeGame(),onQuitToMenu:()=>this.quitToMenu(),onToggleMute:()=>{const t=this.audio.toggleMute();this.ui.updateMuteButtons(t),!t&&this.state==="PLAYING"&&this.audio.startBGM()},onChangeQuality:t=>this.applyGraphicsQuality(t),onAction:t=>this.handlePlayerAction(t),isPlaying:()=>this.state==="PLAYING",isPaused:()=>this.state==="PAUSED"}),this.ui.setQualitySelect(this.quality),this.ui.updateMuteButtons(this.audio.muted),this.ui.checkOrientationHint(),!this.isWebGLAvailable()){this.ui.showWebGLFallback();return}this.initThreeScene(),this.applyGraphicsQuality(this.quality),this.bindLifecycleEvents(),this.ui.setupCharacterSelector(Is,this.player.currentOutfitId,t=>{this.player.setOutfit(t),this.audio.playLaneSwitch()},t=>{this.player.applyOutfit(t)}),this.ui.showMenu(this.highScore,this.totalCoins),this.lastTime=performance.now(),requestAnimationFrame(t=>this.animate(t))}detectInitialQuality(){const t=localStorage.getItem(Jo);if(t==="low"||t==="medium"||t==="high"||t==="ultra")return t;const e=navigator.deviceMemory||4,n=navigator.hardwareConcurrency||4;return e<=2||n<=4?"low":"medium"}isWebGLAvailable(){try{const t=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(t.getContext("webgl2")||t.getContext("webgl")||t.getContext("experimental-webgl")))}catch{return!1}}initThreeScene(){const t=document.getElementById("canvas-container");this.scene=new Pc,this.scene.background=new Zt(13362425),this.scene.fog=new Sa(14412542,44,118),this.camera=new We(54,window.innerWidth/window.innerHeight,.15,165),this.renderer=new t0({antialias:this.quality!=="low",powerPreference:"high-performance"}),this.renderer.outputColorSpace=be,this.renderer.toneMapping=Qo,this.renderer.toneMappingExposure=1.04,this.renderer.setSize(window.innerWidth,window.innerHeight),t.appendChild(this.renderer.domElement);const e=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()||4);this.texLib=new x0(this.renderer,e),this.daylightEnvMap=this.texLib.getDaylightEnvMap(),this.buildSkyDome(),this.hemiLight=new m0(14742270,12103070,.92),this.hemiLight.position.set(0,20,0),this.scene.add(this.hemiLight),this.sunLight=new Oo(16775399,1.85),this.sunLight.position.set(-16,23,10),this.sunLight.target.position.set(0,0,-12),this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const n=this.sunLight.shadow.camera;n.left=-16,n.right=14,n.top=24,n.bottom=-22,n.near=2,n.far=56,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.normalBias=.022,this.fillLight=new Oo(15660799,.42),this.fillLight.position.set(4,6,12),this.scene.add(this.fillLight),this.corridor=new L0(this.scene,this.texLib),this.player=new M0(this.scene,this.texLib),this.teacher=new y0(this.scene,this.texLib),this.obstacles=new I0(this.scene,this.texLib),this.collectibles=new D0(this.scene),this.updateCameraProjection()}buildSkyDome(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#1d4ed8"),n.addColorStop(.38,"#60a5fa"),n.addColorStop(.62,"#bae6fd"),n.addColorStop(.76,"#f1f5f9"),n.addColorStop(1,"#dbeafe"),e.fillStyle=n,e.fillRect(0,0,256,256),e.fillStyle="rgba(255,255,255,0.45)",[[48,92,34,12],[140,78,42,14],[210,102,30,10]].forEach(([a,o,c,l])=>{e.beginPath(),e.ellipse(a,o,c,l,0,0,Math.PI*2),e.fill()});const i=new Fs(t);i.colorSpace=be;const r=new b(new ne(115,24,16),new Ye({map:i,side:Pe,fog:!1}));this.scene.add(r)}applyGraphicsQuality(t){this.quality=t;try{localStorage.setItem(Jo,t)}catch{}if(!this.renderer||!this.scene)return;const e=window.devicePixelRatio||1,n=this.renderer.capabilities.getMaxAnisotropy()||4;t==="low"?(this.renderer.setPixelRatio(Math.min(e,1)),this.renderer.shadowMap.enabled=!1,this.sunLight.castShadow=!1,this.scene.environment=null,this.texLib.setAnisotropy(1)):t==="medium"?(this.renderer.setPixelRatio(Math.min(e,1.15)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ds,this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(1024,1024),this.scene.environment=this.daylightEnvMap,this.texLib.setAnisotropy(Math.min(2,n))):t==="high"?(this.renderer.setPixelRatio(Math.min(e,1.25)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ds,this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(1024,1024),this.scene.environment=this.daylightEnvMap,this.texLib.setAnisotropy(Math.min(4,n))):(this.renderer.setPixelRatio(Math.min(e,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$o,this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(1536,1536),this.scene.environment=this.daylightEnvMap,this.texLib.setAnisotropy(n)),this.sunLight.shadow.map&&(this.sunLight.shadow.map.dispose(),this.sunLight.shadow.map=null),this.renderer.shadowMap.needsUpdate=!0,this.corridor&&this.corridor.applyQualityPreset(t)}updateCameraProjection(){if(!this.camera||!this.renderer)return;const t=window.innerWidth,e=window.innerHeight,n=t/e;this.camera.aspect=n,n<.78?(this.camera.fov=68,this.cameraBaseZ=6.75,this.cameraBaseY=3.15):n<1.15?(this.camera.fov=60,this.cameraBaseZ=6.15,this.cameraBaseY=2.95):(this.camera.fov=52,this.cameraBaseZ=5.65,this.cameraBaseY=2.75),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}bindLifecycleEvents(){window.addEventListener("resize",()=>{this.updateCameraProjection(),this.ui.checkOrientationHint()}),window.addEventListener("orientationchange",()=>{setTimeout(()=>{this.updateCameraProjection(),this.ui.checkOrientationHint()},120)}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="PLAYING"&&this.pauseGame()})}startGame(){this.audio.initContext(),this.audio.playSchoolBell(),this.state="PLAYING",this.score=0,this.runCoins=0,this.currentSpeed=this.baseSpeed,this.cameraShake=0,this.chaseShoutTimer=7.5,this.player.reset(),this.teacher.reset(),this.corridor.reset(),this.obstacles.reset(),this.collectibles.reset();const t=this.teacher.getStartQuote();this.ui.showPlaying(this.highScore),this.ui.showComicBubble(t,4400),this.audio.startBGM(),setTimeout(()=>{this.state==="PLAYING"&&(this.audio.playTeacherWhistle(),this.audio.speakTeacher(t))},350)}pauseGame(){this.state==="PLAYING"&&(this.state="PAUSED",this.audio.stopBGM(),this.audio.stopSpeech(),this.ui.showPause())}resumeGame(){this.state==="PAUSED"&&(this.state="PLAYING",this.lastTime=performance.now(),this.ui.showPlaying(this.highScore),this.audio.startBGM())}quitToMenu(){this.state="MENU",this.audio.stopBGM(),this.audio.stopSpeech(),this.player.reset(),this.teacher.reset(),this.obstacles.reset(),this.collectibles.reset(),this.ui.showMenu(this.highScore,this.totalCoins)}handlePlayerAction(t){if(this.state==="PLAYING")switch(t){case"LEFT":this.player.moveLeft(this.audio);break;case"RIGHT":this.player.moveRight(this.audio);break;case"JUMP":this.player.jump(this.audio);break;case"SLIDE":this.player.slide(this.audio);break}}handleObstacleCollision(t){if(this.audio.playCrash(),this.cameraShake=.42,t.isSolidWall){this.teacher.distance=0,this.triggerGameOver();return}if(this.player.triggerStumble(),this.currentSpeed=Math.max(this.baseSpeed,this.currentSpeed-2.2),this.teacher.onPlayerStumble())this.triggerGameOver();else{const n=this.teacher.getRandomQuote();this.chaseShoutTimer=8.5,this.audio.playTeacherWhistle(),this.audio.playTeacherBark(),this.audio.speakTeacher(n),this.ui.showComicBubble(n,3800)}}triggerGameOver(){this.state="GAMEOVER",this.audio.stopBGM(),this.audio.playTeacherWhistle(),this.audio.playTeacherBark(),this.player.setCaught();const t=Math.floor(this.score);let e=!1;if(t>this.highScore){this.highScore=t,e=!0;try{localStorage.setItem(Ko,String(this.highScore))}catch{}}this.totalCoins+=this.runCoins;try{localStorage.setItem(Zo,String(this.totalCoins))}catch{}const n=this.teacher.getRandomGameOverQuote();this.audio.speakTeacher(n),this.ui.showGameOver(t,this.runCoins,this.highScore,e,n)}animate(t){requestAnimationFrame(i=>this.animate(i));const e=(t-this.lastTime)/1e3,n=Math.min(.05,Math.max(.001,e));if(this.lastTime=t,e>0&&e<.5&&(this.fpsAccumTime+=e,this.fpsFrames+=1,this.fpsAccumTime>=.5&&(this.measuredFps=this.fpsFrames/this.fpsAccumTime,this.fpsAccumTime=0,this.fpsFrames=0)),this.state==="PLAYING"){const i=Math.min(this.maxSpeed,this.baseSpeed+this.score*.012),r=this.player.hasTurbo?i*1.38:i;this.currentSpeed=_t.lerp(this.currentSpeed,r,n*3),this.score+=this.currentSpeed*n*.85,this.corridor.update(n,this.currentSpeed);const a=this.corridor.getSafetyBoundsAt(0);if(this.player.update(n,this.currentSpeed,this.audio,this.teacher.distance,a),this.teacher.update(n,this.player.group.position.x,this.currentSpeed,!1,this.obstacles.activeObstacles),this.chaseShoutTimer-=n,this.chaseShoutTimer<=0){this.chaseShoutTimer=8.5+Math.random()*3.5;const l=this.teacher.getRandomQuote();this.teacher.triggerShoutGesture(),this.audio.playTeacherBark(),this.audio.speakTeacher(l),this.ui.showComicBubble(l,4e3)}this.obstacles.update(n,this.currentSpeed,this.player,this.collectibles,l=>this.handleObstacleCollision(l)),this.collectibles.update(n,this.currentSpeed,this.player,this.teacher,this.audio,()=>{this.runCoins+=1,this.score+=5},l=>{this.chaseShoutTimer=Math.max(this.chaseShoutTimer,2.5),this.ui.showComicBubble(`⚡ Dapat ${l.label}!`,2e3)});const o=this.corridor.getZoneAt(0),c=N0[o]||"Kelas 11 A1";this.ui.updateHUD(this.score,this.runCoins,this.highScore,this.teacher.distance,this.teacher.maxDistance,this.collectibles.getActiveBuffList(),this.measuredFps,c)}else this.state==="MENU"?(this.corridor.update(n,4.2),this.player.update(n,7.6,null,20,this.corridor.getSafetyBoundsAt(0)),this.player.group.rotation.set(0,0,0),this.teacher.update(n,0,7.6,!1)):this.state==="GAMEOVER"&&(this.player.update(n,0,null,0,this.corridor.getSafetyBoundsAt(0)),this.teacher.update(n,this.player.group.position.x,0,!0));if(this.camera&&this.player){let i=0,r=0;this.cameraShake>0&&(this.cameraShake=Math.max(0,this.cameraShake-n*2),i=(Math.random()-.5)*this.cameraShake*.5,r=(Math.random()-.5)*this.cameraShake*.5);const a=this.state==="PLAYING"&&!this.player.isJumping&&!this.player.isSliding?Math.sin(this.player.runCycle*2)*.025:0,o=-(this.player.landCompress||0)*.09,c=this.player.group.position.x*.48+i,l=this.cameraBaseY+this.player.y*.28+a+o+r;this.camera.position.x=_t.lerp(this.camera.position.x,c,Math.min(1,n*11)),this.camera.position.y=_t.lerp(this.camera.position.y,l,Math.min(1,n*11)),this.camera.position.z=_t.lerp(this.camera.position.z,this.cameraBaseZ,Math.min(1,n*8)),this.camera.lookAt(this.player.group.position.x*.34,1.32+this.player.y*.16+o*.5,-7.2)}this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{window.__game=new F0,"serviceWorker"in navigator&&window.location.protocol.startsWith("http")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})})});
