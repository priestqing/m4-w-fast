import{$ as e,At as t,Dn as n,Dt as r,J as i,Jt as a,On as o,Pt as s,Tn as c,fn as l,it as u,lt as d,pt as f,q as p,rn as m,st as h,tn as g,ut as _,wt as v,z as y}from"./framework.e5juw6ia.js";import{a as ee,c as te,i as ne,n as re,o as ie,r as ae,s as oe,t as se}from"./verticalSectionDemoData.B242MJ2f.js";import{a as ce,r as le}from"./volume-section.CV6ti_8N.js";var b=x;function x(e,t){let n=wt();return x=function(e,t){return e-=254,n[e]},x(e,t)}(function(e,t){let n=x,r=e();for(;;)try{if(parseInt(n(307))/1*(parseInt(n(928))/2)+parseInt(n(752))/3+parseInt(n(581))/4+-parseInt(n(467))/5+-parseInt(n(534))/6+parseInt(n(903))/7+parseInt(n(772))/8*(-parseInt(n(720))/9)===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(wt,757312);var S=(e,t)=>{let n=x;if(!Number.isInteger(e)||e<=0)throw Error(t+n(342)+t+` 必须是正整数。`)},C=(e,t)=>{let n=x;if(S(e[n(541)],t+n(405)),!Number[n(406)](e[n(763)])||!Number[n(406)](e.end))throw Error(t+n(445)+t+n(576));if(e[n(541)]===1&&e.start!==e[n(325)])throw Error(t+` with one sample must use equal endpoints. `+t+n(594));if(e[n(541)]>1&&e[n(763)]===e.end)throw Error(t+n(690)+t+n(1013))},ue=(e,t)=>{let n=x;if(e!==void 0&&!Number[n(406)](e)&&!Number[n(533)](e))throw Error(t+n(683)+t+n(425))},de=(e,t)=>e[b(1016)]===t[b(1016)]&&e[b(441)]===t.xCount&&e.levelStart===t[b(857)]&&e[b(736)]===t[b(736)]&&e[b(783)]===t[b(783)]&&e[b(375)]===t[b(375)],w=e=>{let t=b;if(C(e.xAxis,t(620)),C(e[t(958)],t(364)),C(e[t(982)],t(508)),S(e[t(841)],t(718)),ue(e[t(538)],t(721)),e[t(473)]!==void 0&&!Number.isFinite(e[t(473)]))throw Error(`Volume valueScale must be finite. 体积 valueScale 必须是有限数值。`);if(e[t(1025)]!==void 0&&(!Number[t(551)](e[t(1025)])||e[t(1025)]<0))throw Error(t(282))},T=(e,t)=>{let n=b;if(!Number[n(551)](t)||t<0||t>=e[n(841)])throw Error(n(261)+t+n(291))},fe=(e,t)=>{let n=b,r=[[t[n(1016)],n(1016)],[t.xCount,`xCount`],[t[n(857)],`levelStart`],[t[n(736)],`levelCount`],[t[n(783)],n(783)],[t[n(375)],`sourceYCount`]];for(let[e,t]of r)if(!Number[n(551)](e)||e<0||t[n(660)](`Count`)&&e===0)throw Error(n(743)+t+` is invalid: `+e+n(711)+t+n(933));if(t[n(1016)]+t[n(441)]>e[n(960)][n(541)]||t[n(857)]+t.levelCount>e.yAxis[n(541)]||t.sourceYStart+t[n(375)]>e[n(982)][n(541)])throw Error(`Volume chunk range exceeds source dimensions. 体积分块范围超出源数据尺寸。`)},E=(e,t,n,r)=>{let i=b;if(T(e,t[i(388)]),fe(e,t[i(738)]),r!==void 0&&t[i(388)]!==r)throw Error(i(549));if(n&&!de(t.range,n))throw Error(i(947));if(t.width!==t.range[i(441)]||t[i(257)]!==t[i(738)][i(736)]||t[i(583)]!==t[i(738)][i(375)])throw Error(i(359));let a=t.width*t[i(257)]*t[i(583)];if(!Number.isSafeInteger(a)||t[i(363)][i(642)]!==a)throw Error(i(1029)+a+` values but received `+t[i(363)].length+`. 体积分块数值数量与尺寸不一致。`)},D=e=>{let t=b;if(!e||typeof e[t(1033)]!=t(645))throw Error(t(456));w(e[t(627)])},O=e=>{let t=b;for(let[n,r]of[[e[t(340)],`width`],[e[t(257)],t(257)],[e[t(583)],t(583)]])if(!Number[t(551)](n)||n<=0)throw Error(t(566)+r+t(898)+r+t(477));if(!Number[t(551)](e[t(260)])||e.halo<1)throw Error(t(1048))},pe=(e={})=>{let t=b,n={width:e[t(340)]??256,height:e.height??8,depth:e[t(583)]??256,halo:e[t(260)]??1};return O(n),n},me=(e,t={})=>{let n=b;w(e);let r=pe(t),i=Math[n(373)](e[n(960)].count/r[n(340)]),a=Math[n(373)](e[n(958)][n(541)]/r[n(257)]),o=Math[n(373)](e.zAxis[n(541)]/r[n(583)]);return{shape:r,countX:i,countY:a,countZ:o,brickCount:i*a*o}},he=e=>e.x+`:`+e.y+`:`+e.z,k=(e,t,n)=>{let r=b;if(!Number[r(551)](n.x)||!Number[r(551)](n.y)||!Number[r(551)](n.z)||n.x<0||n.x>=t[r(374)]||n.y<0||n.y>=t[r(689)]||n.z<0||n.z>=t.countZ)throw Error(r(305));let i=n.x*t.shape[r(340)],a=n.y*t.shape[r(257)],o=n.z*t[r(503)][r(583)],s=Math.min(t[r(503)][r(340)],e[r(960)][r(541)]-i),c=Math[r(809)](t.shape.height,e[r(958)][r(541)]-a),l=Math[r(809)](t[r(503)][r(583)],e[r(982)][r(541)]-o),u=t[r(503)][r(260)],d=Math[r(407)](0,i-u),f=Math[r(407)](0,a-u),p=Math[r(407)](0,o-u),m=Math[r(809)](e[r(960)][r(541)],i+s+u),h=Math.min(e.yAxis[r(541)],a+c+u),g=Math[r(809)](e.zAxis.count,o+l+u),_=t.shape[r(340)]+u*2,v=t.shape[r(257)]+u*2,y=t.shape.depth+u*2;return{key:he(n),coordinate:n,coreRange:{xStart:i,xCount:s,levelStart:a,levelCount:c,sourceYStart:o,sourceYCount:l},readRange:{xStart:d,xCount:m-d,levelStart:f,levelCount:h-f,sourceYStart:p,sourceYCount:g-p},physicalWidth:_,physicalHeight:v,physicalDepth:y,byteLength:_*v*y*Float32Array[r(726)]}},A=(e,t)=>{let n=b,r=[];for(let i=0;i<t[n(754)];i+=1)for(let a=0;a<t[n(689)];a+=1)for(let o=0;o<t[n(374)];o+=1)r[n(906)](k(e,t,{x:o,y:a,z:i}));return r},j=1e-8,M=()=>new Float32Array(16),N=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],ge=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],_e=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],ve=e=>{let t=b,n=Math[t(416)](e[0],e[1],e[2]);if(n<=j)throw Error(t(595));return[e[0]/n,e[1]/n,e[2]/n]},P=()=>{let e=M();return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e},F=(e,t)=>{let n=M();for(let r=0;r<4;r+=1)for(let i=0;i<4;i+=1){let a=0;for(let n=0;n<4;n+=1)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n},I=e=>{let t=b,n=Array[t(875)]({length:4},(t,n)=>{let r=new Float64Array(8);for(let t=0;t<4;t+=1)r[t]=e[t*4+n];return r[n+4]=1,r});for(let e=0;e<4;e+=1){let r=e;for(let i=e+1;i<4;i+=1)Math[t(715)](n[i][e])>Math[t(715)](n[r][e])&&(r=i);if(Math[t(715)](n[r][e])<=j)throw Error(t(485));r!==e&&([n[e],n[r]]=[n[r],n[e]]);let i=n[e][e];for(let t=0;t<8;t+=1)n[e][t]/=i;for(let t=0;t<4;t+=1){if(t===e)continue;let r=n[t][e];for(let i=0;i<8;i+=1)n[t][i]-=r*n[e][i]}}let r=M();for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1)r[t*4+e]=n[e][t+4];return r},L=(e,t,n)=>{let r=ve(ge(e,t)),i=ve(_e(n,r)),a=_e(r,i),o=P();return o[0]=i[0],o[1]=a[0],o[2]=r[0],o[4]=i[1],o[5]=a[1],o[6]=r[1],o[8]=i[2],o[9]=a[2],o[10]=r[2],o[12]=-N(i,e),o[13]=-N(a,e),o[14]=-N(r,e),o},ye=(e,t,n,r)=>{let i=b;if(!(e>0&&e<Math.PI))throw Error(i(934));if(!(t>0))throw Error(`相机宽高比必须大于 0。`);if(!(n>0&&r>n))throw Error(i(886));let a=1/Math.tan(e/2),o=M();return o[0]=a/t,o[5]=a,o[10]=r/(n-r),o[11]=-1,o[14]=n*r/(n-r),o},be=(e,t,n,r)=>{let i=b;if(!(e>0&&t>0))throw Error(i(486));if(!(n>=0&&r>n))throw Error(i(751));let a=e*t,o=P();return o[0]=2/a,o[5]=2/e,o[10]=1/(n-r),o[14]=n/(n-r),o},xe=(e,t,n)=>{let r=P();return r[0]=e,r[5]=t,r[10]=n,r},R=(e,t)=>{let n=b;if(!(t>0)||!Number[n(406)](t))throw Error(n(948));let r=xe(1,t,1);return e?F(e,r):r},z=(e,t,n=1)=>[e[0]*t[0]+e[4]*t[1]+e[8]*t[2]+e[12]*n,e[1]*t[0]+e[5]*t[1]+e[9]*t[2]+e[13]*n,e[2]*t[0]+e[6]*t[1]+e[10]*t[2]+e[14]*n,e[3]*t[0]+e[7]*t[1]+e[11]*t[2]+e[15]*n],B=(e,t,n,r)=>{let i=z(e,t);if(i[3]<=j)return null;let a=1/i[3];return[(i[0]*a*.5+.5)*n,(.5-i[1]*a*.5)*r,i[2]*a]},V=[0,1,2],H=[0,0,0],U=[0,1,0],Se={type:b(821),fovYDegrees:45,near:.01,far:1e4},W=Math.PI/180,G=e=>[e[0],e[1],e[2]],Ce=e=>(e.type,{...e}),we=e=>({position:G(e[b(323)]),target:G(e.target),up:G(e.up),projection:Ce(e.projection)}),K=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],q=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],J=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Te=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Y=e=>{let t=Math[b(416)](e[0],e[1],e[2]);return t===0?[0,0,0]:J(e,1/t)},Ee=(e,t,n)=>Math.min(n,Math[b(407)](t,e)),De=e=>{let t=b;if(!(e[t(434)]>=0&&e[t(591)]>e[t(434)]))throw Error(t(751));if(e.type===t(821)&&!(e[t(434)]>0&&e[t(702)]>0&&e[t(702)]<180))throw Error(t(892));if(e[t(316)]===t(540)&&!(e[t(257)]>0))throw Error(t(421))},Oe=e=>{let t=b,n={position:e.state?.position?G(e[t(466)][t(323)]):G(V),target:e[t(466)]?.target?G(e[t(466)][t(861)]):G(H),up:e.state?.up?G(e[t(466)].up):G(U),projection:e[t(466)]?.[t(564)]?Ce(e[t(466)].projection):Ce(Se)};return De(n.projection),n},ke=class{[b(748)];[b(548)];[b(347)];panSpeed;[b(963)];minimumDistance;[b(644)];[b(432)];[b(531)];constructor(e={}){let t=b;if(this[t(748)]=Oe(e),this[t(548)]=e[t(548)]??1,this.rotateSpeed=e[t(347)]??.005,this[t(964)]=e.panSpeed??1,this[t(963)]=e.zoomSpeed??.0015,this[t(863)]=e[t(863)]??.001,this[t(644)]=e[t(644)]??1/0,this[t(432)]=(e.minimumPitchDegrees??-89)*W,this.maximumPitch=(e[t(559)]??89)*W,!(this[t(548)]>0))throw Error(t(397))}get[b(466)](){let e=b;return we(this[e(748)])}get[b(792)](){let e=b,t=L(this[e(748)][e(323)],this.cameraState[e(861)],this[e(748)].up),n=this[e(843)](),r=F(n,t);return{view:t,projection:n,viewProjection:r,inverseViewProjection:I(r)}}[b(1014)](e){let t=b;De(e[t(564)]),this[t(748)]=we(e)}setAspect(e){let t=b;if(!(e>0)||!Number[t(406)](e))throw Error(`相机宽高比必须是大于 0 的有限数。`);this[t(548)]=e}setProjectionType(e){let t=b;if(e===this[t(748)].projection[t(316)])return;let n=Math[t(416)](...K(this[t(748)][t(323)],this[t(748)][t(861)]));if(e===t(540)){let r=this.cameraState[t(564)],i=r[t(316)]===t(821)?r[t(702)]*W:45*W;this.cameraState.projection={type:e,height:2*n*Math[t(992)](i/2),near:r[t(434)],far:r[t(591)]};return}let r=this[t(748)].projection,i=r[t(316)]===t(540)?r[t(257)]/(2*Math[t(992)](45*W/2)):n,a=Y(K(this[t(748)][t(323)],this[t(748)][t(861)]));this.cameraState[t(323)]=q(this[t(748)][t(861)],J(a,i)),this[t(748)][t(564)]={type:e,fovYDegrees:45,near:r[t(434)],far:r[t(591)]}}[b(1010)](e,t){let n=b,r=K(this[n(748)][n(323)],this[n(748)][n(861)]),i=Math[n(416)](...r);if(i===0)return;let a=Math[n(986)](r[0],r[2])-e*this[n(347)],o=Ee(Math[n(707)](r[1]/i)+t*this[n(347)],this[n(432)],this[n(531)]),s=Math[n(614)](o)*i;this[n(748)][n(323)]=q(this.cameraState[n(861)],[Math[n(1045)](a)*s,Math[n(1045)](o)*i,Math[n(614)](a)*s])}pan(e,t,n){let r=b;if(!(n>0))return;let i=Y(K(this[r(748)][r(861)],this.cameraState[r(323)])),a=Y(Te(i,this[r(748)].up)),o=Y(Te(a,i)),s=Math[r(416)](...K(this[r(748)].position,this[r(748)][r(861)])),c=(this[r(748)][r(564)][r(316)]===`orthographic`?this[r(748)].projection[r(257)]:2*s*Math[r(992)](this[r(748)].projection[r(702)]*W/2))/n*this[r(964)],l=q(J(a,-e*c),J(o,t*c));this[r(748)][r(323)]=q(this.cameraState[r(323)],l),this[r(748)][r(861)]=q(this[r(748)].target,l)}[b(361)](e){let t=b,n=Math[t(412)](e*this.zoomSpeed);if(this[t(748)][t(564)][t(316)]===`orthographic`){this[t(748)][t(564)]={...this[t(748)].projection,height:Math[t(407)](this.minimumDistance,this[t(748)][t(564)][t(257)]*n)};return}let r=K(this.cameraState[t(323)],this[t(748)][t(861)]),i=Ee(Math[t(416)](...r)*n,this[t(863)],this.maximumDistance);this[t(748)][t(323)]=q(this[t(748)].target,J(Y(r),i))}createProjectionMatrix(){let e=b,t=this[e(748)][e(564)];return t[e(316)]===e(821)?ye(t[e(702)]*W,this[e(548)],t[e(434)],t.far):be(t[e(257)],this.aspect,t[e(434)],t.far)}},X=6378137,Ae=X*(1-1/298.257223563),je=1-Ae**2/X**2,Me=e=>e*Math.PI/180,Ne=(e,t,n)=>{let r=b,i=Math[r(1045)](t),a=Math[r(614)](t),o=Math[r(1045)](e),s=Math.cos(e),c=X/Math[r(299)](1-je*i*i);return[(c+n)*a*s,(c+n)*a*o,(c*(1-je)+n)*i]},Pe=(e,t,n)=>{let r=b;if(!Number[r(406)](e)||!Number.isFinite(t)||e===t)throw Error(n+r(957)+n+r(887))},Fe=(e,t=1)=>{let n=b,r=Me(e.xAxis[n(763)]),i=Me(e[n(960)][n(325)]),a=Me(e[n(982)][n(763)]),o=Me(e[n(982)][n(325)]);Pe(r,i,n(484)),Pe(a,o,n(820));let s=e[n(958)].start,c=e[n(958)][n(325)];if(Pe(s,c,n(320)),!(t>0)||!Number[n(406)](t))throw Error(n(439));let l=s+(c-s)*t,u=(r+i)/2,d=(a+o)/2,f=Ne(u,d,0),p=Math[n(715)](i-r)*X*Math.max(.01,Math[n(614)](d)),m=Math[n(715)](o-a)*X,h=Math[n(407)](p,m);if(!(h>0)||!Number[n(406)](h))throw Error(n(907));let g=[1/0,1/0,1/0],_=[-1/0,-1/0,-1/0];for(let e=0;e<=8;e+=1){let t=a+(o-a)*e/8;for(let e=0;e<=8;e+=1){let a=r+(i-r)*e/8;for(let e of[s,l]){let r=Ne(a,t,e);for(let e=0;e<3;e+=1){let t=(r[e]-f[e])/h;g[e]=Math[n(809)](g[e],t),_[e]=Math[n(407)](_[e],t)}}}}let v=_.map((e,t)=>e-g[t]);if(v[n(804)](e=>!(e>0)||!Number.isFinite(e)))throw Error(n(842));return{centerEcef:f,normalizationMeters:h,proxyModelMatrix:[v[0],0,0,0,0,v[1],0,0,0,0,v[2],0,g[0],g[1],g[2],1],transform:{mode:`wgs84`,centerEcefScaled:[f[0]/h,f[1]/h,f[2]/h],semiMajorAxisScaled:X/h,semiMinorAxisScaled:Ae/h,longitudeRadians:[r,i],latitudeRadians:[a,o],heightScaled:[s/h,l/h]}}},Ie=(e,t)=>Number[b(533)](e)||t!==void 0&&e===t,Le=(e,t)=>e[b(763)]===e[b(325)]?0:(t-e.start)/(e[b(325)]-e[b(763)]),Re=e=>{let t=b;if(!e.id)throw Error(t(1002));if(e[t(669)][t(642)]<4||e[t(669)][t(642)]%2!=0)throw Error(t(640)+e.id+` 的 path 必须包含至少两个 [x, z] 点。`);if(e.heights.length<2)throw Error(t(640)+e.id+t(605));let n=e[t(669)][t(642)]/2;if(e[t(363)][t(642)]!==n*e[t(877)].length)throw Error(t(640)+e.id+t(255));if(e.opacity!==void 0&&(!(e[t(451)]>=0&&e[t(451)]<=1)||!Number[t(406)](e[t(451)])))throw Error(`路线剖面 `+e.id+` 的 opacity 必须位于 0 到 1。`);for(let n of e[t(669)])if(!Number.isFinite(n))throw Error(t(640)+e.id+t(427));for(let n of e.heights)if(!Number[t(406)](n))throw Error(t(640)+e.id+` 的 heights 包含非有限高度。`);return n},ze=(e,t,n)=>{let r=b,i=new Float32Array(t*e.heights.length*3);for(let a=0;a<e[r(877)][r(642)];a+=1)for(let o=0;o<t;o+=1){let s=(a*t+o)*3;i[s]=Le(n[r(960)],e.path[o*2]),i[s+1]=Le(n[r(958)],e.heights[a]),i[s+2]=Le(n.zAxis,e[r(669)][o*2+1])}return i},Be=e=>{let t=b,n=new Float32Array(e[t(363)][t(642)]);for(let r=0;r<e[t(363)][t(642)];r+=1){let i=e[t(363)][r];n[r]=Ie(i,e[t(538)])?NaN:i}return n},Ve=(e,t)=>{let n=new Uint32Array((e-1)*(t-1)*6),r=0;for(let i=0;i<t-1;i+=1)for(let t=0;t<e-1;t+=1){let a=i*e+t,o=a+1,s=a+e,c=s+1;n[r]=a,n[r+1]=o,n[r+2]=s,n[r+3]=s,n[r+4]=o,n[r+5]=c,r+=6}return n},He=(e,t)=>{let n=b,r=Re(e);return{id:e.id,positions:ze(e,r,t),values:Be(e),indices:Ve(r,e.heights[n(642)]),opacity:e[n(451)]??1,depthMode:e[n(256)]??n(254),revision:e.revision}},Ue=b(615),We=b(370),Ge=b(765),Ke=e=>{let t=b;if([e[t(960)].count,e[t(958)][t(541)],e.zAxis.count,e[t(884)],e[t(803)],e[t(682)]][t(804)](e=>!Number[t(551)](e)||e<=0))throw Error(t(779));if(e.halo!==1)throw Error(`WebGPU volume bricks require halo 1. WebGPU 体积砖块要求 halo 为 1。`)},qe=e=>[Math[b(373)](e[b(960)][b(541)]/e[b(884)]),Math[b(373)](e[b(958)][b(541)]/e[b(803)]),Math[b(373)](e.zAxis[b(541)]/e[b(682)])],Je=(e,t)=>{let n=t[0]*t[1],r=Math.floor(e/n),i=e-r*n,a=Math.floor(i/t[0]);return[i-a*t[0],a,r]},Ye=(e,t,n)=>{let r=b,i=t[r(884)]+2,a=t[r(803)]+2,o=Je(e.logicalIndex,n),s=Math.min(t[r(884)],t[r(960)].count-o[0]*t[r(884)]),c=Math[r(809)](t[r(803)],t[r(958)][r(541)]-o[1]*t[r(803)]),l=Math[r(809)](t[r(682)],t.zAxis[r(541)]-o[2]*t.brickDepth);for(let n=0;n<l;n+=1)for(let o=0;o<c;o+=1){let u=((n+1)*a+o+1)*i+1;for(let n=0;n<s;n+=1){let i=e[r(363)][u+n];if(i===i&&(t[r(538)]===void 0||i!==t.noData))return{occupied:!0,coreSampleCount:s*c*l}}}return{occupied:!1,coreSampleCount:s*c*l}},Xe=(e,t,n,r,i)=>{let a=b;if(e<=0)return null;let o=Math[a(826)](i/t),s=Math.floor(i/n),c=Math[a(826)](i/r),l=null;for(let t=1;t<=o;t+=1)for(let n=1;n<=s;n+=1){let r=Math[a(809)](c,Math[a(826)](e/(t*n))),i=t*n*r;r<=0||i<=(l?.[a(1020)]??0)||(l={slotCountX:t,slotCountY:n,slotCountZ:r,slotCount:i,textureCount:1,capacity:i})}return l},Ze=(e,t)=>{let n=b,r=t[n(523)]*t[n(448)],i=Math[n(826)](e/r),a=e-i*r,o=Math[n(826)](a/t[n(523)]);return[a-o*t.slotCountX,o,i]},Qe=(e,t)=>{let n=b,r=null;for(let i of e)i[n(489)]!==t&&(!r||i[n(489)]<r[n(489)])&&(r=i);return r},$e=(e,t,n,r)=>{let i=b,a=t*Float32Array[i(726)],o=Math.ceil(a/256)*256;if(a===o)return{values:e,bytesPerRow:o};let s=o/Float32Array[i(726)],c=new Float32Array(s*n*r);for(let a=0;a<r;a+=1)for(let r=0;r<n;r+=1){let o=(a*n+r)*t,l=(a*n+r)*s;c[i(654)](e[i(401)](o,o+t),l)}return{values:c,bytesPerRow:o}},et=class{[b(966)];[b(849)];memoryHardLimitBytes;[b(627)]=null;[b(270)]=null;[b(287)]=[];atlasViews=[];pageTableBuffer=null;pageTableValues=new Uint32Array;[b(980)]=new Map;residentBySlotIndex=new Map;[b(609)]=0;constructor(e,t=536870912,n=t){let r=b;if(!Number[r(406)](t)||!Number.isFinite(n)||t<=0||n<=0)throw Error(r(411));this[r(966)]=e,this[r(849)]=Math[r(809)](t,n),this[r(450)]=n}get volumeMetadata(){let e=b;if(!this[e(627)])throw Error(e(277));return this[e(627)]}get[b(429)](){let e=b;if(!this[e(270)])throw Error(e(264));return this[e(270)]}get[b(936)](){let e=b;return this[e(980)][e(391)]}get[b(469)](){let e=b;if(!this[e(627)]||!this[e(270)])return{logicalBrickCount:0,atlasCapacity:0,gpuBytes:0,memoryLimitBytes:this[e(450)],budgetLimited:!1,skippedSamples:0,skippedCells:0};let t=qe(this[e(627)]),n=t[0]*t[1]*t[2],r=this[e(627)][e(884)]+2,i=this[e(627)][e(803)]+2,a=this.metadata[e(682)]+2,o=r*i*a*this[e(270)][e(840)]*Float32Array[e(726)],s=n*4*Uint32Array[e(726)],c=0,l=0;for(let t of this[e(980)][e(363)]())t.occupied||(l+=1,c+=t[e(590)]);return{logicalBrickCount:n,atlasCapacity:this.layout[e(840)],gpuBytes:o+s,memoryLimitBytes:this.memoryHardLimitBytes,budgetLimited:this[e(270)][e(840)]<n,skippedSamples:c,skippedCells:l}}configure(e){let t=b;Ke(e);let n=e.brickWidth+2,r=e[t(803)]+2,i=e.brickDepth+2,a=qe(e),o=a[0]*a[1]*a[2],s=o*4*Uint32Array[t(726)],c=Math[t(809)](this[t(849)],this[t(450)])-s;if(c<=0)throw Error(t(768));let l=n*r*i*Float32Array[t(726)],u=Math[t(809)](o,Math[t(826)](c/l)),d=Math[t(407)](1,Math[t(826)](67108864/l)),f=Math[t(809)](8,Math[t(407)](1,Math[t(373)](u/d))),p=Xe(Math[t(407)](1,Math.floor(u/f)),n,r,i,this[t(966)].limits.maxTextureDimension3D);if(!p)throw Error(`Unable to allocate a WebGPU R32F volume atlas within device limits. 无法在设备限制内分配 WebGPU R32F 体积图集。`);let m={...p,textureCount:f,capacity:p[t(1020)]*f},h=n*m[t(523)],g=r*m[t(448)],_=i*m[t(788)],v=Array[t(875)]({length:f},(e,n)=>this[t(966)].createTexture({label:`volume brick atlas `+n,size:[h,g,_],dimension:`3d`,format:`r32float`,usage:GPUTextureUsage[t(867)]|GPUTextureUsage[t(585)]|GPUTextureUsage.STORAGE_BINDING})),y=this.device[t(539)]({label:`volume brick page table`,size:Math[t(407)](16,s),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this[t(589)](),this[t(627)]={...e},this.layout=m,this.atlasTextures=v,this[t(831)]=v.map(e=>e[t(797)]({dimension:`3d`})),this.pageTableBuffer=y,this.pageTableValues=new Uint32Array(o*4),this.device[t(677)][t(930)](y,0,this[t(941)]);for(let e of v)this[t(853)](e,h,g,_);this.generation+=1}[b(524)](e,t){let n=b,r=this[n(911)],i=this[n(429)],a=qe(r),o=a[0]*a[1]*a[2];if(!Number[n(551)](e[n(554)])||e.logicalIndex<0||e.logicalIndex>=o)throw Error(n(509)+e[n(554)]+`. 体积逻辑砖块索引无效。`);let s=r[n(884)]+2,c=r[n(803)]+2,l=r[n(682)]+2,u=s*c*l;if(e.values.length!==u)throw Error(n(566)+e[n(554)]+n(506)+u+` values but received `+e[n(363)][n(642)]+n(528));let d=this[n(980)][n(828)](e[n(554)])??this.acquireSlot(e.logicalIndex,t),f=Ye(e,r,a),p=Math[n(826)](d[n(494)]/i[n(1020)]),m=Ze(d[n(494)]%i[n(1020)],i),h=$e(new Float32Array(e[n(363)]),s,c,l);return d.lastUsedFrame=t,d[n(609)]=this[n(609)],d[n(914)]=f[n(914)],d[n(590)]=f[n(879)],this.writePageEntry(d),{values:h[n(363)],bytesPerRow:h[n(899)],rowsPerImage:c,origin:{x:m[0]*s,y:m[1]*c,z:m[2]*l},extent:[s,c,l],atlasIndex:p}}[b(430)](e,t,n,r){let i=b;e[i(543)]({buffer:t,offset:n,bytesPerRow:r[i(899)],rowsPerImage:r[i(483)]},{texture:this[i(653)](r[i(844)]),origin:r.origin},r[i(758)])}[b(410)](e,t){let n=b;for(let r of e){let e=this[n(980)][n(828)](r);e&&(e[n(489)]=t)}}[b(369)](e,t){let n=b;if(this.atlasViews[n(642)]===0||!this[n(781)])throw Error(n(455));return this.device[n(369)]({label:n(498),layout:e,entries:[...Array[n(875)]({length:8},(e,t)=>({binding:t,resource:this[n(831)][t]??this[n(831)][0]})),{binding:8,resource:{buffer:this[n(781)]}},{binding:9,resource:{buffer:t}}]})}destroy(){let e=b;this[e(589)](),this.metadata=null,this[e(270)]=null,this[e(941)]=new Uint32Array}acquireSlot(e,t){let n=b,r=this[n(429)],i=this[n(777)][n(391)];if(i>=r.capacity){let e=Qe(this[n(777)][n(363)](),t);if(!e)throw Error(n(776));i=e[n(494)],this.clearPageEntry(e[n(554)]),this[n(980)][n(661)](e[n(554)]),this[n(777)][n(661)](i)}let a={logicalIndex:e,slotIndex:i,lastUsedFrame:t,generation:this[n(609)],occupied:!1,skippedSampleCount:0};return this[n(980)][n(654)](e,a),this[n(777)][n(654)](i,a),a}[b(993)](e){let t=b,n=e[t(554)]*4;this.pageTableValues[n]=e[t(494)]%this[t(429)][t(1020)]+1,this[t(941)][n+1]=e[t(609)],this[t(941)][n+2]=+!!e.occupied,this[t(941)][n+3]=Math[t(826)](e[t(494)]/this.atlasLayout[t(1020)]),this[t(966)].queue[t(930)](this.getPageTableBuffer(),n*Uint32Array.BYTES_PER_ELEMENT,this[t(941)],n,4)}[b(942)](e){let t=b,n=e*4;this[t(941)][t(514)](0,n,n+4),this[t(966)][t(677)][t(930)](this.getPageTableBuffer(),n*Uint32Array[t(726)],this[t(941)],n,4)}getAtlasTexture(e){let t=b,n=this[t(287)][e];if(!n)throw Error(t(773));return n}[b(853)](e,t,n,r){let i=b,a=this[i(966)].createShaderModule({label:`volume atlas clear shader`,code:i(722)}),o=this.device[i(706)]({label:i(435),layout:i(846),compute:{module:a,entryPoint:i(275)}}),s=this[i(966)][i(369)]({label:i(372),layout:o[i(276)](0),entries:[{binding:0,resource:e.createView({dimension:`3d`})}]}),c=this[i(966)][i(424)]({label:i(994)}),l=c[i(521)]({label:i(755)});l[i(959)](o),l.setBindGroup(0,s),l[i(709)](Math.ceil(t/4),Math[i(373)](n/4),Math[i(373)](r/4)),l[i(325)](),this.device.queue[i(808)]([c[i(746)]()])}[b(442)](){let e=b;if(!this.pageTableBuffer)throw Error(e(674));return this.pageTableBuffer}[b(589)](){let e=b;for(let t of this[e(287)])t[e(492)]();this[e(781)]?.destroy(),this[e(287)]=[],this.atlasViews=[],this.pageTableBuffer=null,this[e(980)][e(1007)](),this[e(777)][e(1007)]()}},tt=class{[b(966)];[b(1023)]=null;depthView=null;[b(340)]=0;height=0;constructor(e){this.device=e}get[b(319)](){let e=b;if(!this[e(335)])throw Error(e(459));return this.depthView}resize(e,t){let n=b;if(this.width===e&&this[n(257)]===t)return;let r=this[n(966)].createTexture({label:n(728),size:[e,t],format:n(272),usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage[n(867)]}),i=this.depthTexture;this[n(1023)]=r,this.depthView=r[n(797)](),this[n(340)]=e,this[n(257)]=t,i?.[n(492)]()}[b(492)](){let e=b;this[e(1023)]?.[e(492)](),this.depthTexture=null,this[e(335)]=null,this[e(340)]=0,this.height=0}},nt=class{[b(966)];[b(313)]=[];constructor(e){this.device=e}get[b(541)](){let e=b;return this[e(313)][e(642)]}[b(266)](e){let t=b,n=[];try{for(let r of e)n[t(906)](this.createResource(r))}catch(e){for(let e of n)e.buffer.destroy();throw e}this[t(589)](),this[t(313)]=n}[b(806)](e,t,n){let r=b;for(let i of this[r(313)])i[r(603)]!==t||i.depthMode!==n||(e[r(687)](0,i[r(1018)]),e[r(806)](i[r(458)]))}destroy(){let e=b;this[e(589)]()}[b(739)](e){let t=b;if(e.vertices[t(642)]===0||e[t(929)].length%7!=0)throw Error(`Scene mesh `+e.id+` must contain position and RGBA values for every vertex. 场景网格顶点必须包含位置和 RGBA。`);let n=new Float32Array(e[t(929)]),r=this[t(966)][t(539)]({label:`volume scene mesh `+e.id,size:n[t(1040)],usage:GPUBufferUsage.VERTEX|GPUBufferUsage[t(585)]});return this[t(966)].queue.writeBuffer(r,0,n),{id:e.id,topology:e[t(603)],depthMode:e.depthMode,buffer:r,vertexCount:e.vertices.length/7}}[b(589)](){let e=b;for(let t of this[e(313)])t[e(1018)][e(492)]();this.resources=[]}},rt=class{[b(966)];[b(270)];[b(313)]=[];[b(729)]=0;[b(600)]=0;constructor(e,t){let n=b;this.device=e,this[n(270)]=t}get[b(541)](){let e=b;return this.resources[e(642)]}get[b(469)](){let e=b;return{uniformUpdateCount:this[e(729)],resourceRebuildCount:this[e(600)]}}[b(266)](e){let t=b,n=new Map(this[t(313)].map(e=>[e.id,e])),r=[],i=new Set;try{for(let a of e){if(!a.visible)continue;if(i.has(a.id))throw Error(t(415)+a.id+t(303));i[t(983)](a.id);let e=this.createValues(a),o=n[t(828)](a.id);if(!o){r.push(this.createResource(a,e));continue}n[t(661)](a.id),o.depthMode=a[t(256)],this.valuesEqual(o[t(363)],e)||(this.device[t(677)][t(930)](o[t(1018)],0,e),o[t(363)]=e,this[t(729)]+=1),r[t(906)](o)}}catch(e){for(let e of r)this[t(313)][t(937)](e)||e.buffer[t(492)]();throw e}for(let e of n[t(363)]())e.buffer[t(492)]();this[t(313)]=r}[b(806)](e,t,n){let r=b;e[r(959)](t);for(let t of this[r(313)])t[r(256)]===n&&(e[r(904)](3,t.bindGroup),e[r(806)](6144))}[b(492)](){let e=b;this[e(589)]()}[b(874)](e){let t=b;if(!Number[t(406)](e[t(323)])||e.position<0||e.position>1)throw Error(t(832)+e.id+` position must be normalized to zero through one. 体积切面位置必须归一化到零至一。`);let n=e.axis===`x`?0:e[t(961)]===`y`?1:2,r=e[t(633)]??[0,0,0,0];if(r.some(e=>!Number[t(406)](e)||e<0||e>1))throw Error(t(832)+e.id+t(643));return new Float32Array([n,e[t(323)],e.opacity??1,0,...r])}[b(739)](e,t){let n=b,r=this.device[n(539)]({label:n(970)+e.id,size:32,usage:GPUBufferUsage[n(288)]|GPUBufferUsage[n(585)]});this[n(966)].queue[n(930)](r,0,t);let i=this[n(966)][n(369)]({layout:this[n(270)],entries:[{binding:0,resource:{buffer:r}}]});return this[n(600)]+=1,{id:e.id,depthMode:e[n(256)],buffer:r,bindGroup:i,values:t}}[b(852)](e,t){let n=b;for(let r=0;r<e[n(642)];r+=1)if(e[r]!==t[r])return!1;return!0}destroyResources(){let e=b;for(let t of this[e(313)])t.buffer[e(492)]();this[e(313)]=[]}},it=(e,t,n)=>{let r=b,i=e.createBuffer({label:n,size:Math[r(407)](4,t[r(1040)]),usage:GPUBufferUsage[r(334)]|GPUBufferUsage.COPY_DST});return t[r(1040)]>0&&e[r(677)].writeBuffer(i,0,t),i},at=(e,t)=>{let n=b;if(e[n(642)]===0||t.length===0)throw Error(`Volume color and opacity stops cannot be empty. 体积颜色和透明度色标不能为空。`);for(let t=1;t<e[n(642)];t+=1)if(e[t].value<e[t-1][n(265)])throw Error(`Volume color stops must be sorted by value. 体积颜色色标必须按数值升序排列。`);for(let e=0;e<t.length;e+=1){if(t[e].opacity<0||t[e][n(451)]>1)throw Error(n(838));if(e>0&&t[e].value<t[e-1][n(265)])throw Error(n(845))}},ot=class{[b(966)];[b(975)]=null;colorBuffer=null;[b(816)]=null;opacityBuffer=null;[b(631)]=0;[b(900)]=0;constructor(e){let t=b;this[t(966)]=e}get counts(){let e=b;return[this[e(631)],this[e(900)]]}[b(740)](e,t){let n=b;at(e,t);let r=new Float32Array(e[n(642)]),i=new Float32Array(e[n(642)]*4),a=new Float32Array(t.length),o=new Float32Array(t[n(642)]);for(let t=0;t<e[n(642)];t+=1)r[t]=e[t][n(265)],i[n(654)](e[t][n(495)],t*4);for(let e=0;e<t[n(642)];e+=1)a[e]=t[e][n(265)],o[e]=t[e][n(451)];let s=[it(this[n(966)],r,n(612)),it(this[n(966)],i,n(699)),it(this[n(966)],a,n(562)),it(this[n(966)],o,`volume opacity stop alphas`)];this[n(371)](),this[n(975)]=s[0],this.colorBuffer=s[1],this[n(816)]=s[2],this[n(750)]=s[3],this[n(631)]=e[n(642)],this[n(900)]=t[n(642)]}[b(369)](e){let t=b;if(!this[t(975)]||!this[t(1030)]||!this[t(816)]||!this[t(750)])throw Error(t(634));return this[t(966)].createBindGroup({label:`volume transfer bind group`,layout:e,entries:[{binding:0,resource:{buffer:this[t(975)]}},{binding:1,resource:{buffer:this[t(1030)]}},{binding:2,resource:{buffer:this[t(816)]}},{binding:3,resource:{buffer:this[t(750)]}}]})}[b(492)](){let e=b;this.destroyBuffers(),this.colorStopCount=0,this[e(900)]=0}[b(371)](){let e=b;this[e(975)]?.[e(492)](),this[e(1030)]?.destroy(),this.opacityValuesBuffer?.[e(492)](),this[e(750)]?.[e(492)](),this[e(975)]=null,this[e(1030)]=null,this[e(816)]=null,this[e(750)]=null}},st=536870912,ct=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],lt=[{value:0,color:[0,0,1,1]},{value:1,color:[1,0,0,1]}],ut=[{value:0,opacity:0},{value:1,opacity:1}],dt=()=>({color:{srcFactor:b(918),dstFactor:`one-minus-src-alpha`,operation:b(983)},alpha:{srcFactor:b(918),dstFactor:`one-minus-src-alpha`,operation:b(983)}}),ft=(e,t)=>{let n=b;if(e[n(642)]!==16||e.some(e=>!Number[n(406)](e)))throw Error(t+n(414)+t+n(865))},pt=(e,t)=>{if(!Number[b(406)](e)||e<0)throw Error(t+` must be a non-negative finite value. `+t+` 必须是非负有限数值。`);return e},mt=(e,t)=>{let n=b;if(!Number.isFinite(e)||e<=0)throw Error(t+n(1037)+t+` 必须是正有限数值。`);return e},ht=e=>e[b(569)](e=>({...e,vertices:new Float32Array(e.vertices)})),gt=e=>{let t=b,n=e[t(884)]+e.halo*2,r=e[t(803)]+e[t(260)]*2,i=e[t(682)]+e.halo*2;return Math[t(373)](n*Float32Array[t(726)]/256)*256*r*i+16},_t=class{[b(649)];[b(333)]=`idle`;[b(301)]=null;[b(400)]=null;[b(966)]=null;[b(356)]=null;format=null;[b(679)]=null;[b(676)]=null;geometryBindGroupLayout=null;[b(943)]=null;[b(775)]=null;[b(604)]=null;[b(339)]=null;[b(630)]=null;[b(1003)]=null;[b(938)]=null;[b(657)]=null;volumePipeline=null;[b(694)]=null;[b(318)]=null;[b(310)]=null;[b(999)]=null;[b(302)]=null;[b(637)]=null;[b(386)]=null;atlas=null;transferResources=null;[b(873)]=null;[b(537)]=null;[b(731)]=null;[b(627)]=null;camera={viewProjection:ct,inverseViewProjection:ct,cameraPosition:[0,0,2]};modelMatrix=ct;inverseModelMatrix=ct;[b(552)]=[0,0,0];[b(710)]=[1,1,1];[b(518)]=b(452);[b(451)]=.3;densityScale=1;[b(362)]=.005;[b(1042)]=1;colorMode=b(701);[b(856)]=null;[b(544)]=lt;[b(782)]=ut;frameIndex=0;submittedFrameCount=0;[b(340)]=0;[b(257)]=0;[b(346)]=0;lastFrameTimeMilliseconds=0;[b(285)]=[];cachedSlices=[];[b(786)]=[];[b(360)]=new Map;[b(1005)]=[];[b(698)]=null;uploadGeneration=0;[b(1038)]=null;[b(341)]=0;[b(584)]=0;[b(267)]=0;[b(321)]=0;[b(295)]=!1;frameAvailableCallback=null;constructor(e={}){this.options={...e}}get[b(466)](){let e=b;return this[e(333)]}get[b(469)](){let e=b,t=this[e(331)]?.[e(469)]??{logicalBrickCount:0,atlasCapacity:0,gpuBytes:0,memoryLimitBytes:this[e(649)][e(450)]??this.options.memoryTargetBytes??st,budgetLimited:!1,skippedSamples:0,skippedCells:0},n=this[e(537)]?.[e(469)]??{uniformUpdateCount:0,resourceRebuildCount:0};return{logicalBrickCount:t[e(613)],residentBrickCount:this[e(331)]?.[e(936)]??0,pendingBrickCount:0,atlasCapacity:t.atlasCapacity,gpuBytes:t[e(1044)],memoryLimitBytes:t[e(998)],budgetLimited:t.budgetLimited,frameTimeMilliseconds:this[e(565)],submittedFrameCount:this[e(1031)],uploadedBrickCount:this[e(584)],uploadBatchCount:this[e(267)],maximumUploadBatchBytes:this[e(321)],sliceUniformUpdateCount:n.uniformUpdateCount,sliceResourceRebuildCount:n[e(600)],skippedSamples:t[e(470)],skippedCells:t.skippedCells}}[b(263)](e){this.frameAvailableCallback=e}async[b(819)](e){let t=b;if(this[t(333)]===t(578))throw Error(t(293));let n=++this[t(346)];this[t(616)](),this[t(301)]=e,this.lifecycleState=t(409);let r=navigator.gpu;if(!r)throw this[t(333)]=t(444),Error(`WebGPU is required for the volume scene but is unavailable. 体积场景需要 WebGPU，但当前环境不可用。`);let i=await r[t(672)]({powerPreference:this[t(649)].powerPreference??t(944)});if(n!==this[t(346)])return;if(!i)throw this[t(333)]=t(444),Error(t(723));let a=await i[t(536)]();if(n!==this.initializationGeneration){a[t(492)]();return}let o=e.getContext(t(704));if(!o)throw a[t(492)](),this[t(333)]=`idle`,Error(t(278));let s=r[t(268)]();o[t(350)]({device:a,format:s,alphaMode:t(880),usage:GPUTextureUsage[t(876)]|GPUTextureUsage[t(525)]}),this.adapter=i,this[t(966)]=a,this[t(356)]=o,this[t(309)]=s,a[t(697)](t(894)),this[t(611)]();let c=await a[t(465)]();if(c)throw this.releaseGpuResources(),this[t(333)]=t(444),Error(t(618)+c.message+t(502));if(this[t(332)](a),this.lifecycleState=t(262),this[t(627)]){this[t(851)](this[t(627)]);let e=Array.from(this.cachedBricks[t(379)]());await Promise[t(423)](e[t(569)](([e,n])=>this[t(462)]({logicalIndex:e,values:n},!1)))}this.updateTransferResources(),this[t(652)]()[t(266)](this.cachedProfiles),this[t(329)]()[t(266)](this[t(771)]),this[t(1006)]()[t(266)](this[t(786)]),this[t(1015)](e[t(340)]||e[t(570)]||1,e.height||e[t(516)]||1)}setSource(e){let t=b;this[t(1e3)]+=1,this[t(761)](new DOMException(`Volume brick upload was superseded by a new source. 体积砖上传已被新数据源替代。`,t(818))),this.metadata={...e},this[t(360)].clear(),this[t(584)]=0,this[t(267)]=0,this[t(321)]=0,this.lifecycleState===t(262)&&this.configureSourceResources(e)}[b(719)](e){let t=b;return this[t(462)](e,!0)}[b(354)](e){let t=b;this[t(297)]()[t(410)](e,this[t(919)]);for(let n of e){let e=this.cachedBricks[t(828)](n);e&&(this.cachedBricks[t(661)](n),this[t(360)].set(n,e))}}[b(837)](e){let t=b;ft(e[t(668)],t(668)),ft(e[t(621)],`inverseViewProjection`),this[t(932)]={viewProjection:[...e.viewProjection],inverseViewProjection:[...e[t(621)]],cameraPosition:[...e[t(353)]]}}[b(304)](e){let t=b;this[t(285)]=ht(e),this[t(652)]()[t(266)](e)}[b(905)](e){let t=b;this[t(771)]=e[t(569)](e=>({...e})),this[t(329)]()[t(266)](e)}[b(366)](e){let t=b;this[t(786)]=ht(e),this[t(1006)]()[t(266)](e)}[b(629)](e,t,n){let r=b;this[r(544)]=e.map(e=>({value:e[r(265)],color:[...e[r(495)]]})),this[r(782)]=t[r(569)](e=>({...e})),n&&(this[r(563)]=n),this[r(333)]===r(262)&&this[r(885)]()}[b(740)](e){let t=b;e[t(326)]&&(ft(e.modelMatrix,t(326)),this[t(326)]=[...e.modelMatrix]),e[t(901)]&&(ft(e[t(901)],t(901)),this[t(901)]=[...e[t(901)]]),e[t(552)]&&(this[t(552)]=[...e[t(552)]]),e[t(710)]&&(this.clipMaximum=[...e[t(710)]]),e.renderMode&&(this[t(518)]=e[t(518)]),e.opacity!==void 0&&(this[t(451)]=pt(e[t(451)],`opacity`)),e[t(716)]!==void 0&&(this[t(716)]=pt(e[t(716)],t(716))),e[t(362)]!==void 0&&(this[t(362)]=mt(e.stepLength,t(362))),e[t(1042)]!==void 0&&(this.volumeDimFactor=pt(e[t(1042)],t(1042))),e.colorMode&&(this[t(563)]=e.colorMode),e[t(856)]!==void 0&&(this[t(856)]=e[t(856)]?{...e[t(856)]}:null)}[b(1015)](e,t){let n=b;if(!Number.isInteger(e)||!Number[n(551)](t)||e<=0||t<=0)throw Error(n(343));let r=this[n(712)]();r[n(340)]=e,r[n(257)]=t,this[n(340)]=e,this[n(257)]=t,this.getAttachments()[n(1015)](e,t),this.recreateSceneBindGroup()}[b(413)](){let e=b;if(this[e(333)]!==e(262)||!this.metadata||this[e(340)]<=0||this[e(257)]<=0||this[e(295)])return!1;let t=performance[e(855)]();this[e(919)]+=1,this.writeParams();let n=this[e(555)](),r=n.createCommandEncoder({label:e(978)}),i=this.getContext()[e(997)]().createView();return this.encodeScenePass(r,i),this[e(976)](r,i),this[e(847)](r,i),n.queue[e(808)]([r.finish()]),this[e(295)]=!0,this.submittedFrameCount+=1,this[e(565)]=Math[e(407)](1e-6,performance[e(855)]()-t),n[e(677)][e(280)]()[e(766)](()=>{let t=e;this.device!==n||this[t(333)]!==t(262)||(this[t(295)]=!1,this[t(753)]?.())})[e(482)](()=>{let t=e;this[t(966)]===n&&(this[t(295)]=!1)}),!0}async[b(575)](){let e=b;if(this.lifecycleState!==e(262)||!this[e(627)]||this[e(340)]<=0||this[e(257)]<=0)throw Error(`WebGPU volume renderer is not ready for frame capture. WebGPU 体积渲染器尚不能读取帧。`);let t=this[e(555)](),n=this[e(340)]*4,r=Math[e(373)](n/256)*256,i=t.createBuffer({label:e(420),size:r*this[e(257)],usage:GPUBufferUsage[e(585)]|GPUBufferUsage[e(592)]});t[e(697)](e(894)),this[e(919)]+=1,this[e(862)]();let a=t[e(424)]({label:`volume frame capture`}),o=this[e(511)]().getCurrentTexture(),s=o.createView();this[e(641)](a,s),this.encodeVolumePass(a,s),this[e(847)](a,s),a[e(560)]({texture:o},{buffer:i,bytesPerRow:r,rowsPerImage:this[e(257)]},[this[e(340)],this[e(257)]]),t[e(677)].submit([a[e(746)]()]);let c=await t[e(465)]();if(c)throw i[e(492)](),Error(e(955)+c[e(453)]+e(1036));await i.mapAsync(GPUMapMode[e(490)]);let l=new Uint8Array(i[e(1028)]()),u=new Uint8Array(n*this[e(257)]),d=this.getFormat()===e(664);for(let t=0;t<this[e(257)];t+=1){let i=l[e(401)](t*r,t*r+n),a=t*n;if(!d){u[e(654)](i,a);continue}for(let e=0;e<this.width;e+=1){let t=e*4,n=a+t;u[n]=i[t+2],u[n+1]=i[t+1],u[n+2]=i[t],u[n+3]=i[t+3]}}return i[e(328)](),i[e(492)](),this[e(1031)]+=1,{width:this.width,height:this[e(257)],pixels:u}}[b(492)](){let e=b;this[e(333)]!==`destroyed`&&(++this[e(346)],this[e(616)](),this[e(301)]=null,this[e(627)]=null,this[e(753)]=null,this[e(333)]=e(578))}[b(611)](){let e=b,t=this[e(555)]();this[e(679)]=t.createBuffer({label:e(673),size:400,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage[e(585)]}),this[e(676)]=t[e(539)]({label:e(298),size:96,usage:GPUBufferUsage[e(288)]|GPUBufferUsage[e(585)]}),this[e(387)]=t[e(968)]({label:e(848),entries:[{binding:0,visibility:GPUShaderStage[e(684)]|GPUShaderStage.FRAGMENT,buffer:{type:e(756)}}]}),this[e(943)]=t.createBindGroupLayout({label:e(593),entries:[{binding:0,visibility:GPUShaderStage[e(684)]|GPUShaderStage.FRAGMENT,buffer:{type:e(756)}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:`depth`}}]}),this.volumeBindGroupLayout=t[e(968)]({label:e(696),entries:[...Array[e(875)]({length:8},(t,n)=>({binding:n,visibility:GPUShaderStage[e(446)],texture:{sampleType:`unfilterable-float`,viewDimension:`3d`}})),{binding:8,visibility:GPUShaderStage[e(446)],buffer:{type:`read-only-storage`}},{binding:9,visibility:GPUShaderStage[e(446)],buffer:{type:e(756)}}]}),this[e(604)]=t.createBindGroupLayout({label:`volume transfer bind group layout`,entries:[0,1,2,3][e(569)](t=>({binding:t,visibility:GPUShaderStage[e(446)],buffer:{type:e(351)}}))}),this[e(339)]=t[e(968)]({label:e(557),entries:[{binding:0,visibility:GPUShaderStage[e(684)]|GPUShaderStage[e(446)],buffer:{type:e(756)}}]}),this[e(386)]=new tt(t),this[e(727)]=new ot(t),this[e(873)]=new nt(t),this.sliceResources=new rt(t,this[e(315)]()),this[e(731)]=new nt(t),this.createPipelines()}createPipelines(){let e=b,t=this[e(555)](),n=this[e(984)](),r=this[e(358)](),i=this[e(474)](),a=t[e(638)]({label:`volume scene mesh shader`,code:We}),o={module:a,entryPoint:e(349),buffers:[{arrayStride:28,attributes:[{shaderLocation:0,offset:0,format:`float32x3`},{shaderLocation:1,offset:12,format:e(708)}]}]},s={module:a,entryPoint:e(925),targets:[{format:n,blend:dt()}]},c=(n,i)=>t.createRenderPipeline({layout:t.createPipelineLayout({bindGroupLayouts:[r]}),vertex:o,fragment:s,primitive:{topology:n},depthStencil:i?{format:e(272),depthWriteEnabled:!0,depthCompare:e(582)}:void 0});this[e(694)]=c(e(273),!0),this[e(318)]=c(e(989),!0),this.overlayTrianglePipeline=c(e(273),!1),this[e(999)]=c(e(989),!1);let l=t[e(638)]({label:`volume raymarch shader`,code:Ue});this[e(355)]=t[e(1001)]({layout:t[e(891)]({bindGroupLayouts:[i,this.getVolumeBindGroupLayout(),this[e(408)]()]}),vertex:{module:l,entryPoint:e(349)},fragment:{module:l,entryPoint:`fragmentMain`,targets:[{format:n,blend:dt()}]},primitive:{topology:e(273)}});let u=t[e(638)]({label:e(921),code:Ge}),d=i=>t.createRenderPipeline({layout:t.createPipelineLayout({bindGroupLayouts:[r,this[e(658)](),this.getTransferBindGroupLayout(),this[e(315)]()]}),vertex:{module:u,entryPoint:e(349)},fragment:{module:u,entryPoint:e(925),targets:[{format:n,blend:dt()}]},primitive:{topology:`triangle-list`},depthStencil:i?{format:e(272),depthWriteEnabled:!0,depthCompare:e(582)}:void 0});this[e(302)]=d(!0),this.overlaySlicePipeline=d(!1)}[b(851)](e){let t=b;this[t(331)]?.[t(492)](),this[t(331)]=new et(this[t(555)](),this.options[t(849)]??st,this[t(649)].memoryHardLimitBytes??this[t(649)][t(849)]??st),this.atlas[t(350)](e),this.writeVolumeParams(),this[t(938)]=this[t(331)][t(369)](this[t(658)](),this[t(951)]())}[b(462)](e,t){return new Promise((n,r)=>{let i=x;this[i(1005)].push({upload:e,generation:this.uploadGeneration,cacheOnSuccess:t,resolve:n,reject:r}),this[i(915)]()})}[b(915)](){let e=b;this.uploadPump||=Promise[e(463)]()[e(766)](()=>this[e(550)]())[e(655)](()=>{let t=e;this.uploadPump=null,this.pendingBrickUploads[t(642)]>0&&this[t(333)]===t(262)&&this[t(915)]()})}async[b(550)](){let e=b;for(;this.pendingBrickUploads.length>0&&this[e(333)]===e(262)&&this[e(627)];){let t=this[e(555)](),n=gt(this[e(627)]),r=Math.min(67108864,Math[e(407)](n,Math.floor(t[e(794)][e(881)]/4))),i=[],a=0;for(;this[e(1005)].length>0&&i[e(642)]<16;){let t=this[e(1005)][0];if(i[e(642)]>0&&a+n>r)break;if(this[e(1005)][e(725)](),t[e(609)]!==this[e(1e3)]){t[e(580)](new DOMException(e(1022),e(818)));continue}i[e(906)](t),a+=n}if(i.length!==0)try{let n=[],r=0;for(let t of i){let i=this[e(297)]()[e(524)](t[e(461)],this[e(919)]),a=Math.ceil(r/256)*256;n[e(906)]({item:t,prepared:i,bufferOffset:a}),r=a+i.values[e(1040)]}let o=this[e(398)](r);await o[e(922)](GPUMapMode[e(517)]);let s=new Uint8Array(o[e(1028)]());for(let t of n){let n=t[e(383)].values;s[e(654)](new Uint8Array(n[e(1018)],n[e(454)],n[e(1040)]),t[e(601)])}o[e(328)]();let c=t[e(424)]({label:e(733)});for(let t of n)this[e(297)]().encodePreparedBrickUpload(c,o,t[e(601)],t.prepared);t[e(677)].submit([c.finish()]),await t[e(677)][e(280)](),await new Promise(e=>setTimeout(e,0)),this.uploadedBrickCount+=i[e(642)],this[e(267)]+=1,this[e(321)]=Math[e(407)](this[e(321)],a);for(let t of i){if(t[e(609)]!==this[e(1e3)]){t[e(580)](new DOMException(e(1022),e(818)));continue}t.cacheOnSuccess&&this[e(991)](t[e(461)]),t[e(463)]()}}catch(t){for(let n of i)n[e(580)](t)}}}getUploadStagingBuffer(e){let t=b,n=Math[t(407)](256,Math[t(373)](e/256)*256);return this.uploadStagingBuffer&&this.uploadStagingBufferSize>=n?this[t(1038)]:(this[t(1038)]?.[t(492)](),this[t(1038)]=this[t(555)]()[t(539)]({label:t(916),size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage[t(525)]}),this[t(341)]=n,this[t(1038)])}[b(991)](e){let t=b;for(this[t(360)].delete(e[t(554)]),this[t(360)][t(654)](e[t(554)],new Float32Array(e[t(363)]));this[t(360)][t(391)]>this[t(469)][t(745)];){let e=this.cachedBricks[t(512)]().next()[t(265)];if(e===void 0)break;this[t(360)][t(661)](e)}}[b(761)](e){let t=b;for(let n of this.pendingBrickUploads[t(981)](0))n[t(580)](e)}[b(885)](){let e=b,t=this[e(487)]();t[e(740)](this.colorStops,this.opacityStops),this.transferBindGroup=t[e(369)](this.getTransferBindGroupLayout())}[b(822)](){let e=b;!this[e(679)]||!this[e(386)]||!this[e(387)]||!this[e(943)]||(this[e(630)]=this[e(555)]()[e(369)]({label:e(597),layout:this[e(387)],entries:[{binding:0,resource:{buffer:this[e(679)]}}]}),this.sceneBindGroup=this[e(555)]().createBindGroup({label:`volume scene bind group`,layout:this[e(943)],entries:[{binding:0,resource:{buffer:this[e(679)]}},{binding:1,resource:this.attachments[e(319)]}]}))}[b(862)](){let e=b,t=new Float32Array(100);t.set(this[e(932)][e(668)],0),t[e(654)](this[e(932)][e(621)],16),t[e(654)](this.modelMatrix,32),t[e(654)](this.inverseModelMatrix,48),t[e(654)]([...this.camera[e(353)],1],64),t[e(654)]([this[e(340)],this[e(257)],1/this.width,1/this[e(257)]],68),t[e(654)]([...this[e(552)],0],72),t[e(654)]([...this[e(710)],0],76),t[e(654)]([+(this[e(518)]===e(479)),this.opacity,this[e(716)],this[e(362)]],80),t[e(654)]([this.colorStops[e(642)],this[e(782)].length,this[e(1042)],+(this[e(563)]===e(811))],84);let n=this[e(856)];n&&(t.set([1,...n[e(404)]],88),t[e(654)]([n[e(827)],n.semiMinorAxisScaled,...n.longitudeRadians],92),t[e(654)]([...n[e(1047)],...n[e(330)]],96)),this[e(555)]()[e(677)][e(930)](this[e(418)](),0,t)}[b(787)](){let e=b,t=this[e(627)],n=this[e(331)];if(!t||!n)return;let r=n.atlasLayout,i=new Uint32Array(96/4),a=Math[e(373)](t.xAxis[e(541)]/t.brickWidth),o=Math[e(373)](t[e(958)][e(541)]/t[e(803)]),s=Math.ceil(t[e(982)][e(541)]/t[e(682)]);i.set([t[e(960)][e(541)],t[e(958)].count,t[e(982)][e(541)],0],0),i[e(654)]([t.brickWidth,t[e(803)],t[e(682)],1],4),i[e(654)]([a,o,s,0],8),i[e(654)]([r[e(523)],r[e(448)],r.slotCountZ,r[e(1020)]],12),i[e(654)]([(t.brickWidth+2)*r.slotCountX,(t.brickHeight+2)*r[e(448)],(t[e(682)]+2)*r[e(788)],0],16),new Float32Array(i[e(1018)]).set([t[e(538)]??0,t[e(538)]===void 0?0:1,0,0],20),this[e(555)]()[e(677)][e(930)](this[e(951)](),0,i)}[b(641)](e,t){let n=b,r=e[n(527)]({label:n(1009),colorAttachments:[{view:t,clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:n(695)}],depthStencilAttachment:{view:this.getAttachments()[n(319)],depthClearValue:1,depthLoadOp:`clear`,depthStoreOp:n(695)}});this[n(977)](r,n(254)),this.drawSlices(r,n(254)),r.end()}[b(976)](e,t){let n=b;if(!this.volumeBindGroup||!this[n(657)]||!this[n(1003)]||!this[n(355)])return;let r=e[n(527)]({label:n(985),colorAttachments:[{view:t,loadOp:`load`,storeOp:n(695)}]});r.setPipeline(this[n(355)]),r[n(904)](0,this[n(1003)]),r[n(904)](1,this[n(938)]),r.setBindGroup(2,this.transferBindGroup),r.draw(3),r.end()}[b(847)](e,t){let n=b,r=e[n(527)]({label:n(799),colorAttachments:[{view:t,loadOp:n(780),storeOp:`store`}]});this.drawMeshes(r,n(1017)),this[n(950)](r,`always-visible`),r[n(325)]()}[b(977)](e,t){let n=b,r=this[n(630)];if(!r)return;let i=t===n(254)?this[n(694)]:this.overlayTrianglePipeline,a=t===`scene`?this[n(318)]:this[n(999)];i&&(e[n(959)](i),e.setBindGroup(0,r),this[n(873)]?.draw(e,n(273),t),this[n(731)]?.[n(806)](e,n(273),t)),a&&(e[n(959)](a),e.setBindGroup(0,r),this[n(873)]?.[n(806)](e,n(989),t),this[n(731)]?.[n(806)](e,n(989),t))}[b(950)](e,t){let n=b,r=t===n(254)?this[n(302)]:this[n(637)];!r||!this.geometryBindGroup||!this.volumeBindGroup||!this.transferBindGroup||(e[n(904)](0,this[n(630)]),e[n(904)](1,this[n(938)]),e[n(904)](2,this[n(657)]),this[n(537)]?.[n(806)](e,r,t))}watchDeviceLost(e){let t=b;e[t(542)].then(n=>{let r=t;if(this.device!==e||this[r(333)]===r(578))return;this.lifecycleState=r(542),console[r(337)](r(491)+n[r(453)]+r(622));let i=this[r(301)];this[r(616)](),i&&this[r(819)](i)[r(482)](e=>{console.error(`WebGPU volume device restoration failed. WebGPU 体积设备恢复失败。`,e)})})}releaseGpuResources(){let e=b;this[e(1e3)]+=1,this[e(761)](new DOMException(e(939),`AbortError`)),this[e(331)]?.[e(492)](),this.transferResources?.[e(492)](),this[e(873)]?.destroy(),this[e(537)]?.destroy(),this.axisResources?.[e(492)](),this[e(386)]?.destroy(),this.sceneParamsBuffer?.[e(492)](),this[e(676)]?.[e(492)](),this[e(1038)]?.[e(492)]();try{this[e(356)]?.unconfigure()}catch{}this.device?.[e(492)](),this[e(400)]=null,this[e(966)]=null,this[e(356)]=null,this[e(309)]=null,this[e(679)]=null,this.volumeParamsBuffer=null,this[e(1038)]=null,this.uploadStagingBufferSize=0,this[e(387)]=null,this[e(943)]=null,this[e(775)]=null,this[e(604)]=null,this[e(339)]=null,this[e(630)]=null,this.sceneBindGroup=null,this[e(938)]=null,this[e(657)]=null,this.volumePipeline=null,this[e(694)]=null,this[e(318)]=null,this[e(310)]=null,this[e(999)]=null,this[e(302)]=null,this.overlaySlicePipeline=null,this[e(386)]=null,this[e(331)]=null,this[e(727)]=null,this.profileResources=null,this[e(537)]=null,this[e(731)]=null,this[e(295)]=!1,this[e(340)]=0,this[e(257)]=0}[b(555)](){let e=b;if(!this[e(966)])throw Error(e(464));return this.device}[b(511)](){let e=b;if(!this[e(356)])throw Error(`WebGPU volume context is not initialized. WebGPU 体积 context 尚未初始化。`);return this.context}[b(984)](){let e=b;if(!this[e(309)])throw Error(e(908));return this[e(309)]}getCanvas(){let e=b;if(!this[e(301)])throw Error(e(815));return this[e(301)]}[b(281)](){let e=b;if(!this[e(386)])throw Error(e(749));return this[e(386)]}[b(297)](){let e=b;if(!this.atlas)throw Error(e(824));return this[e(331)]}[b(487)](){let e=b;if(!this[e(727)])throw Error(e(598));return this[e(727)]}[b(652)](){let e=b;if(!this[e(873)])throw Error(e(996));return this[e(873)]}[b(329)](){let e=b;if(!this.sliceResources)throw Error(`WebGPU slice resources are unavailable. WebGPU 切面资源不可用。`);return this[e(537)]}[b(1006)](){let e=b;if(!this[e(731)])throw Error(`WebGPU axis resources are unavailable. WebGPU 轴线资源不可用。`);return this[e(731)]}[b(474)](){let e=b;if(!this.sceneBindGroupLayout)throw Error(`WebGPU scene bind group layout is unavailable. WebGPU 场景绑定布局不可用。`);return this[e(943)]}getGeometryBindGroupLayout(){let e=b;if(!this[e(387)])throw Error(e(504));return this[e(387)]}[b(658)](){let e=b;if(!this.volumeBindGroupLayout)throw Error(e(730));return this.volumeBindGroupLayout}getTransferBindGroupLayout(){let e=b;if(!this[e(604)])throw Error(e(747));return this[e(604)]}[b(315)](){let e=b;if(!this.sliceBindGroupLayout)throw Error(e(403));return this[e(339)]}[b(418)](){let e=b;if(!this[e(679)])throw Error(e(952));return this[e(679)]}[b(951)](){if(!this.volumeParamsBuffer)throw Error(`WebGPU volume params buffer is unavailable. WebGPU 体积参数 Buffer 不可用。`);return this.volumeParamsBuffer}},vt=(e,t)=>t===`x`?e[b(960)]:t===`y`?e[b(958)]:e[b(982)],yt=(e,t,n)=>{let r=b;if(!Number.isFinite(n))throw Error(r(839));let i=vt(e,t),a=Math[r(809)](i.start,i[r(325)]),o=Math[r(407)](i.start,i[r(325)]);return Math[r(809)](o,Math[r(407)](a,n))},bt=e=>e?{...e}:null,xt=e=>({...e}),St=e=>{let t=b;for(let n of[e.xAxis,e[t(958)],e[t(982)]]){if(!Number[t(406)](n.start)||!Number.isFinite(n[t(325)]))throw Error(t(547));if(!(Number[t(551)](n[t(541)])&&n[t(541)]>0))throw Error(t(438));if(n[t(541)]>1&&n[t(763)]===n[t(325)])throw Error(t(476))}},Z=(e,t)=>e.start===e[b(325)]?0:(t-e[b(763)])/(e[b(325)]-e[b(763)]),Ct=(e,t)=>e[b(763)]+t*(e[b(325)]-e.start);function wt(){let e=[`float32x4`,`dispatchWorkgroups`,`clipMaximum`,`. 体积分块 `,`getCanvas`,`removeSlice`,`centerEcef`,`abs`,`densityScale`,`preventDefault`,`Volume timeCount`,`uploadBrick`,`17901IFObWx`,`Volume`,`
@group(0) @binding(0) var atlas: texture_storage_3d<r32float, write>;

@compute @workgroup_size(4, 4, 4)
fn main(@builtin(global_invocation_id) invocation: vec3u) {
    let dimensions = textureDimensions(atlas);
    if (all(invocation < dimensions)) {
        textureStore(atlas, vec3i(invocation), vec4f(0.0));
    }
}
`,`Failed to acquire a WebGPU adapter for the volume scene. 无法为体积场景获取 WebGPU adapter。`,`unsubscribe`,`shift`,`BYTES_PER_ELEMENT`,`transferResources`,`volume scene depth`,`uniformUpdateCount`,`WebGPU volume bind group layout is unavailable. WebGPU 体积绑定布局不可用。`,`axisResources`,`performance`,`volume brick upload batch flush`,`volume-bounds`,`nowrap`,`levelCount`,`endInteraction`,`range`,`createResource`,`update`,`Volume opacity stop values must be finite and strictly increasing. 体积透明度节点值必须有限且严格递增。`,`button`,`Volume chunk `,`lastSubmittedFrameTimestamp`,`atlasCapacity`,`finish`,`WebGPU transfer bind group layout is unavailable. WebGPU 传递函数绑定布局不可用。`,`cameraState`,`WebGPU scene attachments are unavailable. WebGPU 场景附件不可用。`,`opacityBuffer`,`相机裁剪距离必须满足 0 <= near < far。`,`2252904ojEuYf`,`frameAvailableCallback`,`countZ`,`volume atlas clear pass`,`uniform`,`chunk`,`extent`,`navigationMode`,`axisHysteresis`,`rejectPendingBrickUploads`,`create`,`start`,`isInteracting`,`struct SceneParams {
    viewProjection: mat4x4f,
    inverseViewProjection: mat4x4f,
    modelMatrix: mat4x4f,
    inverseModelMatrix: mat4x4f,
    cameraPosition: vec4f,
    viewport: vec4f,
    clipMinimum: vec4f,
    clipMaximum: vec4f,
    render: vec4f,
    transfer: vec4f,
    geographic0: vec4f,
    geographic1: vec4f,
    geographic2: vec4f,
}

struct VolumeParams {
    dimensions: vec4u,
    brickInterior: vec4u,
    brickCount: vec4u,
    atlasSlots: vec4u,
    atlasDimensions: vec4u,
    valueMeta: vec4f,
}

struct PageTable { values: array<vec4u> }
struct FloatValues { values: array<f32> }
struct Colors { values: array<vec4f> }
struct SliceParams {
    data: vec4f,
    plateColor: vec4f,
}
struct VolumeSample { value: f32, valid: bool }

struct SliceVertexOutput {
    @builtin(position) position: vec4f,
    @location(0) modelPosition: vec3f,
}

@group(0) @binding(0) var<uniform> scene: SceneParams;
@group(1) @binding(0) var volumeAtlas0: texture_3d<f32>;
@group(1) @binding(1) var volumeAtlas1: texture_3d<f32>;
@group(1) @binding(2) var volumeAtlas2: texture_3d<f32>;
@group(1) @binding(3) var volumeAtlas3: texture_3d<f32>;
@group(1) @binding(4) var volumeAtlas4: texture_3d<f32>;
@group(1) @binding(5) var volumeAtlas5: texture_3d<f32>;
@group(1) @binding(6) var volumeAtlas6: texture_3d<f32>;
@group(1) @binding(7) var volumeAtlas7: texture_3d<f32>;
@group(1) @binding(8) var<storage, read> pageTable: PageTable;
@group(1) @binding(9) var<uniform> volume: VolumeParams;
@group(2) @binding(0) var<storage, read> colorStopValues: FloatValues;
@group(2) @binding(1) var<storage, read> colorStopColors: Colors;
@group(2) @binding(2) var<storage, read> opacityStopValues: FloatValues;
@group(2) @binding(3) var<storage, read> opacityStopAlphas: FloatValues;
@group(3) @binding(0) var<uniform> slice: SliceParams;

fn invalidVolumeSample() -> VolumeSample {
    return VolumeSample(0.0, false);
}

fn validVolumeSample(value: f32) -> VolumeSample {
    return VolumeSample(value, true);
}

fn getPageIndex(brick: vec3u) -> u32 {
    return brick.x + brick.y * volume.brickCount.x + brick.z * volume.brickCount.x * volume.brickCount.y;
}

fn getSlotCoordinate(slotIndex: u32) -> vec3u {
    let layerSize = volume.atlasSlots.x * volume.atlasSlots.y;
    let z = slotIndex / layerSize;
    let remainder = slotIndex - z * layerSize;
    let y = remainder / volume.atlasSlots.x;
    return vec3u(remainder - y * volume.atlasSlots.x, y, z);
}

fn loadAtlasValue(atlasIndex: u32, coordinate: vec3i) -> f32 {
    if (atlasIndex == 0u) { return textureLoad(volumeAtlas0, coordinate, 0).r; }
    if (atlasIndex == 1u) { return textureLoad(volumeAtlas1, coordinate, 0).r; }
    if (atlasIndex == 2u) { return textureLoad(volumeAtlas2, coordinate, 0).r; }
    if (atlasIndex == 3u) { return textureLoad(volumeAtlas3, coordinate, 0).r; }
    if (atlasIndex == 4u) { return textureLoad(volumeAtlas4, coordinate, 0).r; }
    if (atlasIndex == 5u) { return textureLoad(volumeAtlas5, coordinate, 0).r; }
    if (atlasIndex == 6u) { return textureLoad(volumeAtlas6, coordinate, 0).r; }
    return textureLoad(volumeAtlas7, coordinate, 0).r;
}

fn loadAtlasVoxel(voxel: vec3i, owningBrick: vec3u) -> VolumeSample {
    let page = pageTable.values[getPageIndex(owningBrick)];

    if (page.x == 0u || page.z == 0u) {
        return invalidVolumeSample();
    }

    let physicalBrick = volume.brickInterior.xyz + vec3u(2u);
    let slot = getSlotCoordinate(page.x - 1u);
    let local = voxel - vec3i(owningBrick * volume.brickInterior.xyz) + vec3i(1);
    let value = loadAtlasValue(page.w, vec3i(slot * physicalBrick) + local);

    if (value != value || (volume.valueMeta.y > 0.5 && value == volume.valueMeta.x)) {
        return invalidVolumeSample();
    }
    return validVolumeSample(value);
}

fn sampleVolume(modelPosition: vec3f) -> VolumeSample {
    let normalized = clamp(modelPosition, vec3f(0.0), vec3f(1.0));
    let voxel = normalized * vec3f(volume.dimensions.xyz - vec3u(1u));
    let baseVoxel = vec3i(floor(voxel));
    let nextVoxel = min(baseVoxel + vec3i(1), vec3i(volume.dimensions.xyz - vec3u(1u)));
    let fraction = voxel - vec3f(baseVoxel);
    let owningBrick = min(vec3u(baseVoxel) / volume.brickInterior.xyz, volume.brickCount.xyz - vec3u(1u));
    let c000 = loadAtlasVoxel(baseVoxel, owningBrick);
    let c100 = loadAtlasVoxel(vec3i(nextVoxel.x, baseVoxel.y, baseVoxel.z), owningBrick);
    let c010 = loadAtlasVoxel(vec3i(baseVoxel.x, nextVoxel.y, baseVoxel.z), owningBrick);
    let c110 = loadAtlasVoxel(vec3i(nextVoxel.x, nextVoxel.y, baseVoxel.z), owningBrick);
    let c001 = loadAtlasVoxel(vec3i(baseVoxel.x, baseVoxel.y, nextVoxel.z), owningBrick);
    let c101 = loadAtlasVoxel(vec3i(nextVoxel.x, baseVoxel.y, nextVoxel.z), owningBrick);
    let c011 = loadAtlasVoxel(vec3i(baseVoxel.x, nextVoxel.y, nextVoxel.z), owningBrick);
    let c111 = loadAtlasVoxel(nextVoxel, owningBrick);

    if (!c000.valid || !c100.valid || !c010.valid || !c110.valid || !c001.valid || !c101.valid || !c011.valid || !c111.valid) {
        return invalidVolumeSample();
    }

    let bottom = mix(mix(c000.value, c100.value, fraction.x), mix(c010.value, c110.value, fraction.x), fraction.y);
    let top = mix(mix(c001.value, c101.value, fraction.x), mix(c011.value, c111.value, fraction.x), fraction.y);
    return validVolumeSample(mix(bottom, top, fraction.z));
}

fn sampleColor(value: f32) -> vec4f {
    let count = u32(scene.transfer.x);

    if (count == 1u || value <= colorStopValues.values[0u]) {
        return colorStopColors.values[0u];
    }

    for (var index = 0u; index + 1u < count; index = index + 1u) {
        let start = colorStopValues.values[index];
        let end = colorStopValues.values[index + 1u];

        if (value < end) {
            if (scene.transfer.w > 0.5) {
                return colorStopColors.values[index];
            }
            return mix(colorStopColors.values[index], colorStopColors.values[index + 1u], clamp((value - start) / max(end - start, 0.000001), 0.0, 1.0));
        }
    }

    return colorStopColors.values[count - 1u];
}

fn sampleOpacity(value: f32) -> f32 {
    let count = u32(scene.transfer.y);

    if (count == 1u || value <= opacityStopValues.values[0u]) {
        return opacityStopAlphas.values[0u];
    }

    for (var index = 0u; index + 1u < count; index = index + 1u) {
        let start = opacityStopValues.values[index];
        let end = opacityStopValues.values[index + 1u];

        if (value < end) {
            if (scene.transfer.w > 0.5) {
                return opacityStopAlphas.values[index];
            }
            return mix(opacityStopAlphas.values[index], opacityStopAlphas.values[index + 1u], clamp((value - start) / max(end - start, 0.000001), 0.0, 1.0));
        }
    }

    return opacityStopAlphas.values[count - 1u];
}

fn getPlanePosition(axis: u32, planePosition: f32, corner: vec2f) -> vec3f {
    if (axis == 0u) {
        return vec3f(planePosition, corner.x, corner.y);
    }
    if (axis == 1u) {
        return vec3f(corner.x, planePosition, corner.y);
    }
    return vec3f(corner.x, corner.y, planePosition);
}

fn getCorner(vertexIndex: u32) -> vec2f {
    let corners = array<vec2f, 6>(
        vec2f(0.0, 0.0), vec2f(1.0, 0.0), vec2f(0.0, 1.0),
        vec2f(0.0, 1.0), vec2f(1.0, 0.0), vec2f(1.0, 1.0)
    );
    return corners[vertexIndex];
}

fn getTessellatedCorner(vertexIndex: u32) -> vec2f {
    let gridSize = 32u;
    let cellIndex = vertexIndex / 6u;
    let cellX = cellIndex % gridSize;
    let cellY = cellIndex / gridSize;
    return (vec2f(f32(cellX), f32(cellY)) + getCorner(vertexIndex % 6u)) / f32(gridSize);
}

fn volumeToWorld(position: vec3f) -> vec3f {
    if (scene.geographic0.x < 0.5) {
        let transformed = scene.modelMatrix * vec4f(position, 1.0);
        return transformed.xyz / transformed.w;
    }

    let longitude = mix(scene.geographic1.z, scene.geographic1.w, position.x);
    let latitude = mix(scene.geographic2.x, scene.geographic2.y, position.z);
    let height = mix(scene.geographic2.z, scene.geographic2.w, position.y);
    let latitudeSin = sin(latitude);
    let latitudeCos = cos(latitude);
    let semiMajor = scene.geographic1.x;
    let semiMinor = scene.geographic1.y;
    let eccentricitySquared = 1.0 - semiMinor * semiMinor / (semiMajor * semiMajor);
    let primeVerticalRadius = semiMajor / sqrt(1.0 - eccentricitySquared * latitudeSin * latitudeSin);
    let ecef = vec3f(
        (primeVerticalRadius + height) * latitudeCos * cos(longitude),
        (primeVerticalRadius + height) * latitudeCos * sin(longitude),
        (primeVerticalRadius * (1.0 - eccentricitySquared) + height) * latitudeSin
    );
    return ecef - scene.geographic0.yzw;
}

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> SliceVertexOutput {
    let modelPosition = getPlanePosition(u32(slice.data.x), slice.data.y, getTessellatedCorner(vertexIndex));
    let clipPosition = scene.viewProjection * vec4f(volumeToWorld(modelPosition), 1.0);
    return SliceVertexOutput(clipPosition, modelPosition);
}

@fragment
fn fragmentMain(input: SliceVertexOutput) -> @location(0) vec4f {
    let sample = sampleVolume(input.modelPosition);
    let plateAlpha = slice.plateColor.a;
    let platePremultiplied = slice.plateColor.rgb * plateAlpha;

    if (!sample.valid) {
        if (plateAlpha <= 0.0) {
            discard;
        }
        return vec4f(platePremultiplied, plateAlpha);
    }

    let color = sampleColor(sample.value);
    let alpha = color.a * sampleOpacity(sample.value) * slice.data.z;
    // 彩色数据覆盖白色透明底板，二者在同一 fragment 中合成以避免重合面的深度冲突。
    // Colored data is composited over the translucent white plate in one fragment to avoid coplanar depth conflicts.
    let outputAlpha = alpha + plateAlpha * (1.0 - alpha);
    let outputColor = color.rgb * alpha + platePremultiplied * (1.0 - alpha);
    return vec4f(outputColor, outputAlpha);
}
`,`then`,`pointer`,`WebGPU volume page table exceeds the configured memory limit. WebGPU 体积页表超过显存限制。`,`baseModelMatrix`,`volumeCamera`,`cachedSlices`,`1456upgMcn`,`WebGPU volume atlas texture is unavailable. WebGPU 体积图集纹理不可用。`,`removeEventListener`,`volumeBindGroupLayout`,`WebGPU volume atlas has no evictable slot. WebGPU 体积图集没有可驱逐的槽位。`,`residentBySlotIndex`,` 范围无效。`,`WebGPU volume dimensions must be positive integers. WebGPU 体积尺寸必须是正整数。`,`load`,`pageTableBuffer`,`opacityStops`,`sourceYStart`,`handleWindowPointerMove`,`frameRequest`,`cachedAxes`,`writeVolumeParams`,`slotCountZ`,`relative`,`updateAutoQuality`,`#fff`,`matrices`,`rebuildProfiles`,`limits`,`volume-axes`,`wheel`,`createView`,`startsWith`,`volume always visible pass`,`listeners`,`padding`,`balanced`,`brickHeight`,`some`,`axisHysteresisPixels`,`draw`,`sliceState`,`submit`,`min`,`handlePointerMove`,`step`,`markers`,`onInteractionEnd`,`signal`,`WebGPU volume canvas is not initialized. WebGPU 体积 Canvas 尚未初始化。`,`opacityValuesBuffer`,`flushBrickSchedule`,`AbortError`,`initialize`,`Latitude / 纬度`,`perspective`,`recreateSceneBindGroup`,`border`,`WebGPU volume source must be configured before uploading bricks. 上传砖块前必须配置 WebGPU 体积数据源。`,`coreRange`,`floor`,`semiMajorAxisScaled`,`get`,`1px solid rgb(255 255 255 / 65%)`,`requestControllers`,`atlasViews`,`Volume slice `,`autoQuality`,`axes`,`bindControls`,`切面深度模式无效 / Slice depth mode is invalid`,`setCamera`,`Volume opacity stops must be between zero and one. 体积透明度色标必须位于零到一之间。`,`切面位置必须是有限数。`,`capacity`,`timeCount`,`Geographic volume proxy bounds are invalid. 地理体积代理范围无效。`,`createProjectionMatrix`,`atlasIndex`,`Volume opacity stops must be sorted by value. 体积透明度色标必须按数值升序排列。`,`auto`,`encodeOverlayPass`,`volume geometry bind group layout`,`memoryTargetBytes`,`beginInteraction`,`configureSourceResources`,`valuesEqual`,`clearAtlasTexture`,`Alpha 颜色通道必须在0 ~ 1之间`,`now`,`geographicTransform`,`levelStart`,`pan`,`syncLockedMarkers`,`loadedKeys`,`target`,`writeParams`,`minimumDistance`,`transform`,` 必须包含十六个有限数值。`,`contextmenu`,`TEXTURE_BINDING`,`pixelRatioCap`,`absolute`,`snapshot`,`stopPropagation`,`loadBrick`,`profileResources`,`createValues`,`from`,`RENDER_ATTACHMENT`,`heights`,` values but received `,`coreSampleCount`,`premultiplied`,`maxBufferSize`,`profiles`,`lastTimingFrameTimestamp`,`brickWidth`,`updateTransferResources`,`相机裁剪距离必须满足 0 < near < far。`,` 轴必须包含两个不同的有限端点。`,`rgb 颜色通道数量不正确: `,`transparent`,`slicePlateColor`,`createPipelineLayout`,`透视相机参数无效。`,`desiredKeys`,`validation`,`flex`,`updatePreview`,`source`,` must be a positive integer. 体积分块 `,`bytesPerRow`,`opacityStopCount`,`inverseModelMatrix`,`setTimeIndex`,`9003246NRLyPS`,`setBindGroup`,`setSlices`,`push`,`Geographic volume normalization must be a positive finite distance. 地理体积归一化尺度必须是正有限距离。`,`WebGPU volume format is not initialized. WebGPU 体积格式尚未初始化。`,`pendingKeys`,`colorStops 不能为空`,`volumeMetadata`,`append`,`normalizationMeters`,`occupied`,`scheduleUploadPump`,`volume brick reusable upload staging`,`. 最大锁定切面数量为 `,`one`,`frameIndex`,`个色标范围不能是NaN`,`volume slice shader`,`mapAsync`,`aria-label`,`renderDirty`,`fragmentMain`,`. 体积 timeIndex 越界。`,`zIndex`,`161722lITDMn`,`vertices`,`writeBuffer`,`positionMarker`,`camera`,` 无效。`,`透视相机视场角必须位于 0 到 180 度之间。`,`abort`,`residentBrickCount`,`includes`,`volumeBindGroup`,`WebGPU volume resources were released. WebGPU 体积资源已释放。`,`toLowerCase`,`pageTableValues`,`clearPageEntry`,`sceneBindGroupLayout`,`high-performance`,`lockSlice`,`pointerup`,`Returned volume chunk range does not match the request. 返回体积分块范围与请求不一致。`,`verticalScale 必须是大于 0 的有限数。`,`findAxisHit`,`drawSlices`,`getVolumeParamsBuffer`,`WebGPU scene params buffer is unavailable. WebGPU 场景参数 Buffer 不可用。`,`cartesian`,`applyHit`,`WebGPU volume frame capture failed: `,`sliceInteraction`,` axis must contain two different finite endpoints. `,`yAxis`,`setPipeline`,`xAxis`,`axis`,`toUpperCase`,`zoomSpeed`,`panSpeed`,` 必须是大于 0 的有限数。`,`device`,`getFrame`,`createBindGroupLayout`,`handlePointerUp`,`volume slice `,`Volume opacity must be within [0, 1]. 体积透明度必须位于 [0, 1]。`,`volume-slice-preview`,`onSliceError`,`devicePixelRatio`,`colorValuesBuffer`,`encodeVolumePass`,`drawMeshes`,`volume scene frame`,`slice`,`residentByLogicalIndex`,`splice`,`zAxis`,`add`,`getFormat`,`volume raymarch pass`,`atan2`,`configureSource`,`clientY`,`line-list`,`normalizedPosition`,`cacheBrickUpload`,`tan`,`writePageEntry`,`volume atlas clear`,`createLayout`,`WebGPU profile resources are unavailable. WebGPU 剖面资源不可用。`,`getCurrentTexture`,`memoryLimitBytes`,`overlayLinePipeline`,`uploadGeneration`,`createRenderPipeline`,`路线剖面 id 不能为空。`,`sceneBindGroup`,`clearPreview`,`pendingBrickUploads`,`getAxisResources`,`clear`,`aborted`,`volume scene geometry pass`,`orbit`,`rgb(17 24 39 / 82%)`,`Volume opacity stops cannot be empty. 体积透明度节点不能为空。`,` 包含多个采样点时步长不能为零。`,`setState`,`resize`,`xStart`,`always-visible`,`buffer`,`configureModel`,`slotCount`,`maxLockedSlices`,`Volume brick upload became stale. 体积砖上传已过期。`,`depthTexture`,`sourceGeneration`,`revision`,`split`,`startY`,`getMappedRange`,`Volume chunk requires `,`colorBuffer`,`submittedFrameCount`,`clientX`,`readChunk`,`sort`,`indices`,`. WebGPU 体积帧读取失败。`,` must be a positive finite value. `,`uploadStagingBuffer`,`interactionRenderScale`,`byteLength`,`previewMarker`,`volumeDimFactor`,`renderer`,`gpuBytes`,`sin`,`notify`,`latitudeRadians`,`Volume brick halo must be a positive integer. 体积分块 halo 必须是正整数。`,`style`,`scene`,` 的 values 长度与 path、heights 不匹配。`,`depthMode`,`height`,`hideAllMarkers`,`flushSliceState`,`halo`,`Volume timeIndex is out of range: `,`ready`,`setFrameAvailableCallback`,`WebGPU volume atlas layout is unavailable. WebGPU 体积图集布局不可用。`,`value`,`replace`,`uploadBatchCount`,`getPreferredCanvasFormat`,`clearLockedSlices`,`layout`,`handlePointerLeave`,`depth32float`,`triangle-list`,`3px 6px`,`main`,`getBindGroupLayout`,`WebGPU volume atlas is not configured. WebGPU 体积图集尚未配置。`,`Failed to create a WebGPU canvas context for the volume scene. 无法为体积场景创建 WebGPU Canvas 上下文。`,`whiteSpace`,`onSubmittedWorkDone`,`getAttachments`,`Volume revision must be a non-negative integer. 体积 revision 必须是非负整数。`,`volumeDimFactor 必须位于 0 到 1。`,`lockPreview`,`cachedProfiles`,`element`,`atlasTextures`,`UNIFORM`,`setAspect`,`bindSliceInteraction`,`. 体积时间索引越界。`,`getInteractionKind`,`A destroyed WebGPU volume renderer cannot be initialized again. 已销毁的 WebGPU 体积渲染器不能再次初始化。`,`mode`,`frameInFlight`,`pointercancel`,`getAtlas`,`volume metadata params`,`sqrt`,`Geographic WGS84 volume scenes manage their own model transform. WGS84 地理体积场景自行管理模型变换。`,`canvas`,`sceneSlicePipeline`,` is duplicated. 体积切面 ID 重复。`,`setProfiles`,`Volume brick coordinate is out of range. 体积分块坐标越界。`,`alignItems`,`11BgnqII`,`firstChild`,`format`,`overlayTrianglePipeline`,`onLimitReached`,`interactionController`,`resources`,`markerOverlay`,`getSliceBindGroupLayout`,`type`,`container`,`sceneLinePipeline`,`sceneDepthView`,`Height / 高度`,`maximumUploadBatchBytes`,`setSource`,`position`,`external`,`end`,`modelMatrix`,`maxLockedSlices 必须是正整数。`,`unmap`,`getSliceResources`,`heightScaled`,`atlas`,`watchDeviceLost`,`lifecycleState`,`STORAGE`,`depthView`,`toolMode`,`error`,`actualFrameIntervalMilliseconds`,`sliceBindGroupLayout`,`width`,`uploadStagingBufferSize`,` must be a positive integer. `,`WebGPU volume scene dimensions must be positive integers. WebGPU 体积场景尺寸必须是正整数。`,`不支持的 hex 颜色格式: `,`minimum`,`initializationGeneration`,`rotateSpeed`,`none`,`vertexMain`,`configure`,`read-only-storage`,`currentPreview`,`cameraPosition`,`touchBricks`,`volumePipeline`,`context`,`colorInputs`,`getGeometryBindGroupLayout`,`Returned volume chunk dimensions do not match its range. 返回体积分块尺寸与范围不一致。`,`cachedBricks`,`dolly`,`stepLength`,`values`,`Volume Y axis`,`interactionElement`,`setAxes`,`top`,`brickScheduleDirty`,`createBindGroup`,`struct SceneParams {
    viewProjection: mat4x4f,
    inverseViewProjection: mat4x4f,
    modelMatrix: mat4x4f,
    inverseModelMatrix: mat4x4f,
    cameraPosition: vec4f,
    viewport: vec4f,
    clipMinimum: vec4f,
    clipMaximum: vec4f,
    render: vec4f,
    transfer: vec4f,
    geographic0: vec4f,
    geographic1: vec4f,
    geographic2: vec4f,
}

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) color: vec4f,
}

@group(0) @binding(0) var<uniform> scene: SceneParams;

fn transformScenePosition(position: vec3f) -> vec4f {
    if (scene.geographic0.x < 0.5) {
        return scene.viewProjection * scene.modelMatrix * vec4f(position, 1.0);
    }

    let longitude = mix(scene.geographic1.z, scene.geographic1.w, position.x);
    let latitude = mix(scene.geographic2.x, scene.geographic2.y, position.z);
    let height = mix(scene.geographic2.z, scene.geographic2.w, position.y);
    let latitudeSin = sin(latitude);
    let latitudeCos = cos(latitude);
    let semiMajor = scene.geographic1.x;
    let semiMinor = scene.geographic1.y;
    let eccentricitySquared = 1.0 - semiMinor * semiMinor / (semiMajor * semiMajor);
    let primeVerticalRadius = semiMajor / sqrt(1.0 - eccentricitySquared * latitudeSin * latitudeSin);
    let ecef = vec3f(
        (primeVerticalRadius + height) * latitudeCos * cos(longitude),
        (primeVerticalRadius + height) * latitudeCos * sin(longitude),
        (primeVerticalRadius * (1.0 - eccentricitySquared) + height) * latitudeSin
    );
    return scene.viewProjection * vec4f(ecef - scene.geographic0.yzw, 1.0);
}

@vertex
fn vertexMain(@location(0) position: vec3f, @location(1) color: vec4f) -> VertexOutput {
    return VertexOutput(transformScenePosition(position), color);
}

@fragment
fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
    return vec4f(input.color.rgb * input.color.a, input.color.a);
}
`,`destroyBuffers`,`volume atlas clear bind group`,`ceil`,`countX`,`sourceYCount`,`mixed`,`pendingSliceSnapshot`,`createElement`,`entries`,`center`,`autoFrameCount`,`coordinateSystem`,`prepared`,`clipBox`,`left`,`attachments`,`geometryBindGroupLayout`,`timeIndex`,`releasePointerCapture`,`interactionStepScale`,`size`,`proxyModelMatrix`,`createLockedMarker`,`showDebugGeometry`,`setPointerCapture`,`startX`,`相机宽高比必须大于 0。`,`getUploadStagingBuffer`,`geographic-wgs84`,`adapter`,`subarray`,`key`,`WebGPU slice bind group layout is unavailable. WebGPU 切面绑定布局不可用。`,`centerEcefScaled`,` count`,`isFinite`,`max`,`getTransferBindGroupLayout`,`initializing`,`touch`,`WebGPU volume memory limits must be positive. WebGPU 体积显存限制必须大于零。`,`exp`,`render`,` must contain sixteen finite values. `,`Volume slice ID `,`hypot`,`activePointer`,`getSceneParamsBuffer`,`remove`,`volume frame readback`,`正交相机高度必须大于 0。`,`sliceDepthMode`,`all`,`createCommandEncoder`,` noData 必须是有限数值或 NaN。`,`renderScale`,` 的 path 包含非有限坐标。`,`hitTolerance`,`atlasLayout`,`encodePreparedBrickUpload`,`name`,`minimumPitch`,`background`,`near`,`volume atlas clear pipeline`,`userSelect`,`12px/1.2 sans-serif`,`切面轴采样数必须是正整数。`,`verticalScale must be a positive finite value. verticalScale 必须是大于 0 的有限数。`,`positions`,`xCount`,`getPageTableBuffer`,`syncPreview`,`idle`,` endpoints must be finite. `,`FRAGMENT`,`round`,`slotCountY`,`slices`,`memoryHardLimitBytes`,`opacity`,`composite`,`message`,`byteOffset`,`WebGPU volume atlas resources are incomplete. WebGPU 体积图集资源不完整。`,`Volume source must provide readChunk(). 体积数据源必须提供 readChunk()。`,`4px`,`vertexCount`,`WebGPU scene depth attachment is not initialized. WebGPU 场景深度附件尚未初始化。`,`quality`,`upload`,`enqueueBrickUpload`,`resolve`,`WebGPU volume device is not initialized. WebGPU 体积 device 尚未初始化。`,`popErrorScope`,`state`,`7269195fByGVL`,`descriptors`,`statistics`,`skippedSamples`,`getStepLength`,`minZ`,`valueScale`,`getSceneBindGroupLayout`,`verticalScale`,`多采样点切面轴的起止值不能相等。`,` 必须是正整数。`,`sliceId`,`maximum`,`handlePointerDown`,`initialized`,`catch`,`rowsPerImage`,`Longitude / 经度`,`矩阵不可逆。`,`正交相机高度和宽高比必须大于 0。`,`getTransferResources`,`div`,`lastUsedFrame`,`READ`,`WebGPU volume device was lost: `,`destroy`,`The maximum locked slice count has been reached. 已达到最大锁定切面数量。`,`slotIndex`,`color`,`scheduleBricks`,`pointerId`,`volume atlas bind group`,`getEffectiveQuality`,`display`,`getBoundingClientRect`,`. 创建 WebGPU 体积管线失败。`,`shape`,`WebGPU geometry bind group layout is unavailable. WebGPU 几何绑定布局不可用。`,`0 2px`,` requires `,`volume-slice-`,`Volume Z axis`,`Invalid logical volume brick index: `,`coordinate`,`getContext`,`keys`,`bindSliceState`,`fill`,`setToolMode`,`clientHeight`,`WRITE`,`renderMode`,`updateLockedSlice`,`previousContainerPosition`,`beginComputePass`,`updateSlice`,`slotCountX`,`prepareBrickUpload`,`COPY_SRC`,`deltaY`,`beginRenderPass`,`. 体积砖块数据长度不正确。`,`minY`,`requestBrickSchedule`,`maximumPitch`,`cursor`,`isNaN`,`5018448fCKxwD`,`maxY`,`requestDevice`,`sliceResources`,`noData`,`createBuffer`,`orthographic`,`count`,`lost`,`copyBufferToTexture`,`colorStops`,`hasPointerCapture`,`moved`,`切面轴端点必须是有限数。`,`aspect`,`Returned volume chunk timeIndex does not match the request. 返回体积分块的时间索引与请求不一致。`,`processBrickUploads`,`isInteger`,`clipMinimum`,`kind`,`logicalIndex`,`getDevice`,`activeInteractions`,`volume slice bind group layout`,`find`,`maximumPitchDegrees`,`copyTextureToBuffer`,`resetBrickRequests`,`volume opacity stop values`,`colorMode`,`projection`,`lastFrameTimeMilliseconds`,`Volume brick `,`setSliceTool`,`hitRadius`,`map`,`clientWidth`,`addEventListener`,`删除切面`,`textContent`,`eventDisposers`,`captureFrame`,` 端点必须是有限数值。`,`autoFrameIntervalTotal`,`destroyed`,`translate(-50%, -100%)`,`reject`,`1931760ddcXeH`,`less`,`depth`,`uploadedBrickCount`,`COPY_DST`,`trim`,`managed`,`pointerdown`,`destroyResources`,`skippedSampleCount`,`far`,`MAP_READ`,`volume scene bind group layout`,` 只有一个采样点时端点必须相等。`,`无法归一化长度为零的三维向量。`,`match`,`volume geometry bind group`,`WebGPU transfer resources are unavailable. WebGPU 传递函数资源不可用。`,`axisDefinitions`,`resourceRebuildCount`,`bufferOffset`,`nextId`,`topology`,`transferBindGroupLayout`,` 至少需要两个高度层。`,`previousAxis`,`formatPosition`,`不支持的颜色格式: `,`generation`,`readRange`,`createGpuResources`,`volume color stop values`,`logicalBrickCount`,`cos`,`struct SceneParams {
    viewProjection: mat4x4f,
    inverseViewProjection: mat4x4f,
    modelMatrix: mat4x4f,
    inverseModelMatrix: mat4x4f,
    cameraPosition: vec4f,
    viewport: vec4f,
    clipMinimum: vec4f,
    clipMaximum: vec4f,
    render: vec4f,
    transfer: vec4f,
    geographic0: vec4f,
    geographic1: vec4f,
    geographic2: vec4f,
}

struct VolumeParams {
    dimensions: vec4u,
    brickInterior: vec4u,
    brickCount: vec4u,
    atlasSlots: vec4u,
    atlasDimensions: vec4u,
    valueMeta: vec4f,
}

struct PageTable {
    values: array<vec4u>,
}

struct FloatValues {
    values: array<f32>,
}

struct Colors {
    values: array<vec4f>,
}

struct VolumeSample {
    value: f32,
    valid: bool,
}

struct RayInterval {
    minimum: f32,
    maximum: f32,
    valid: bool,
}

@group(0) @binding(0) var<uniform> scene: SceneParams;
@group(0) @binding(1) var sceneDepth: texture_depth_2d;
@group(1) @binding(0) var volumeAtlas0: texture_3d<f32>;
@group(1) @binding(1) var volumeAtlas1: texture_3d<f32>;
@group(1) @binding(2) var volumeAtlas2: texture_3d<f32>;
@group(1) @binding(3) var volumeAtlas3: texture_3d<f32>;
@group(1) @binding(4) var volumeAtlas4: texture_3d<f32>;
@group(1) @binding(5) var volumeAtlas5: texture_3d<f32>;
@group(1) @binding(6) var volumeAtlas6: texture_3d<f32>;
@group(1) @binding(7) var volumeAtlas7: texture_3d<f32>;
@group(1) @binding(8) var<storage, read> pageTable: PageTable;
@group(1) @binding(9) var<uniform> volume: VolumeParams;
@group(2) @binding(0) var<storage, read> colorStopValues: FloatValues;
@group(2) @binding(1) var<storage, read> colorStopColors: Colors;
@group(2) @binding(2) var<storage, read> opacityStopValues: FloatValues;
@group(2) @binding(3) var<storage, read> opacityStopAlphas: FloatValues;

fn invalidVolumeSample() -> VolumeSample {
    return VolumeSample(0.0, false);
}

fn validVolumeSample(value: f32) -> VolumeSample {
    return VolumeSample(value, true);
}

fn transformPoint(matrix: mat4x4f, point: vec3f) -> vec3f {
    let transformed = matrix * vec4f(point, 1.0);
    return transformed.xyz / transformed.w;
}

fn reconstructWorldPosition(ndc: vec3f) -> vec3f {
    return transformPoint(scene.inverseViewProjection, ndc);
}

// 地理模式将局部 ECEF 采样点反算为经纬高归一化坐标；代理盒仅限制射线范围，不决定体积形状。
// Geographic mode converts each local ECEF sample back to normalized longitude, latitude, and altitude; the proxy box only limits the ray interval and does not define the volume shape.
fn worldToVolume(worldPosition: vec3f) -> vec3f {
    if (scene.geographic0.x < 0.5) {
        return transformPoint(scene.inverseModelMatrix, worldPosition);
    }

    let ecef = worldPosition + scene.geographic0.yzw;
    let semiMajor = scene.geographic1.x;
    let semiMinor = scene.geographic1.y;
    let eccentricitySquared = 1.0 - semiMinor * semiMinor / (semiMajor * semiMajor);
    let secondEccentricitySquared = (semiMajor * semiMajor - semiMinor * semiMinor) / (semiMinor * semiMinor);
    let horizontal = length(ecef.xy);
    let theta = atan2(ecef.z * semiMajor, horizontal * semiMinor);
    let thetaSin = sin(theta);
    let thetaCos = cos(theta);
    let latitude = atan2(
        ecef.z + secondEccentricitySquared * semiMinor * thetaSin * thetaSin * thetaSin,
        horizontal - eccentricitySquared * semiMajor * thetaCos * thetaCos * thetaCos
    );
    let latitudeSin = sin(latitude);
    let primeVerticalRadius = semiMajor / sqrt(1.0 - eccentricitySquared * latitudeSin * latitudeSin);
    let height = horizontal / max(0.000001, abs(cos(latitude))) - primeVerticalRadius;
    let longitude = atan2(ecef.y, ecef.x);
    return vec3f(
        (longitude - scene.geographic1.z) / (scene.geographic1.w - scene.geographic1.z),
        (height - scene.geographic2.z) / (scene.geographic2.w - scene.geographic2.z),
        (latitude - scene.geographic2.x) / (scene.geographic2.y - scene.geographic2.x)
    );
}

fn proxyToVolume(proxyPosition: vec3f) -> vec3f {
    if (scene.geographic0.x < 0.5) {
        return proxyPosition;
    }
    return worldToVolume(transformPoint(scene.modelMatrix, proxyPosition));
}

fn isInsideVolume(position: vec3f) -> bool {
    return all(position >= scene.clipMinimum.xyz) && all(position <= scene.clipMaximum.xyz);
}

fn intersectAxis(origin: f32, direction: f32, minimumValue: f32, maximumValue: f32) -> vec2f {
    if (abs(direction) < 0.000001) {
        if (origin < minimumValue || origin > maximumValue) {
            return vec2f(1.0, -1.0);
        }

        return vec2f(-1e20, 1e20);
    }

    let first = (minimumValue - origin) / direction;
    let second = (maximumValue - origin) / direction;
    return vec2f(min(first, second), max(first, second));
}

fn intersectClipBox(origin: vec3f, direction: vec3f) -> RayInterval {
    let x = intersectAxis(origin.x, direction.x, scene.clipMinimum.x, scene.clipMaximum.x);
    let y = intersectAxis(origin.y, direction.y, scene.clipMinimum.y, scene.clipMaximum.y);
    let z = intersectAxis(origin.z, direction.z, scene.clipMinimum.z, scene.clipMaximum.z);
    let minimumDistance = max(max(x.x, y.x), z.x);
    let maximumDistance = min(min(x.y, y.y), z.y);
    return RayInterval(max(0.0, minimumDistance), maximumDistance, maximumDistance >= max(0.0, minimumDistance));
}

fn getPageIndex(brick: vec3u) -> u32 {
    return brick.x + brick.y * volume.brickCount.x + brick.z * volume.brickCount.x * volume.brickCount.y;
}

fn getSlotCoordinate(slotIndex: u32) -> vec3u {
    let layerSize = volume.atlasSlots.x * volume.atlasSlots.y;
    let z = slotIndex / layerSize;
    let remainder = slotIndex - z * layerSize;
    let y = remainder / volume.atlasSlots.x;
    let x = remainder - y * volume.atlasSlots.x;
    return vec3u(x, y, z);
}

fn loadAtlasValue(atlasIndex: u32, coordinate: vec3i) -> f32 {
    if (atlasIndex == 0u) { return textureLoad(volumeAtlas0, coordinate, 0).r; }
    if (atlasIndex == 1u) { return textureLoad(volumeAtlas1, coordinate, 0).r; }
    if (atlasIndex == 2u) { return textureLoad(volumeAtlas2, coordinate, 0).r; }
    if (atlasIndex == 3u) { return textureLoad(volumeAtlas3, coordinate, 0).r; }
    if (atlasIndex == 4u) { return textureLoad(volumeAtlas4, coordinate, 0).r; }
    if (atlasIndex == 5u) { return textureLoad(volumeAtlas5, coordinate, 0).r; }
    if (atlasIndex == 6u) { return textureLoad(volumeAtlas6, coordinate, 0).r; }
    return textureLoad(volumeAtlas7, coordinate, 0).r;
}

fn loadAtlasVoxel(voxel: vec3i, owningBrick: vec3u) -> VolumeSample {
    let page = pageTable.values[getPageIndex(owningBrick)];

    if (page.x == 0u || page.z == 0u) {
        return invalidVolumeSample();
    }

    let slot = getSlotCoordinate(page.x - 1u);
    let physicalBrick = volume.brickInterior.xyz + vec3u(2u);
    let brickStart = vec3i(owningBrick * volume.brickInterior.xyz);
    let local = voxel - brickStart + vec3i(1);
    let atlasCoordinate = vec3i(slot * physicalBrick) + local;
    let value = loadAtlasValue(page.w, atlasCoordinate);

    if (value != value || (volume.valueMeta.y > 0.5 && value == volume.valueMeta.x)) {
        return invalidVolumeSample();
    }

    return validVolumeSample(value);
}

fn sampleVolume(modelPosition: vec3f) -> VolumeSample {
    let normalized = clamp(modelPosition, vec3f(0.0), vec3f(1.0));
    let voxel = normalized * vec3f(volume.dimensions.xyz - vec3u(1u));
    let baseVoxel = vec3i(floor(voxel));
    let maximumVoxel = vec3i(volume.dimensions.xyz - vec3u(1u));
    let nextVoxel = min(baseVoxel + vec3i(1), maximumVoxel);
    let fraction = voxel - vec3f(baseVoxel);
    let owningBrick = min(vec3u(max(baseVoxel, vec3i(0))) / volume.brickInterior.xyz, volume.brickCount.xyz - vec3u(1u));
    let c000 = loadAtlasVoxel(vec3i(baseVoxel.x, baseVoxel.y, baseVoxel.z), owningBrick);
    let c100 = loadAtlasVoxel(vec3i(nextVoxel.x, baseVoxel.y, baseVoxel.z), owningBrick);
    let c010 = loadAtlasVoxel(vec3i(baseVoxel.x, nextVoxel.y, baseVoxel.z), owningBrick);
    let c110 = loadAtlasVoxel(vec3i(nextVoxel.x, nextVoxel.y, baseVoxel.z), owningBrick);
    let c001 = loadAtlasVoxel(vec3i(baseVoxel.x, baseVoxel.y, nextVoxel.z), owningBrick);
    let c101 = loadAtlasVoxel(vec3i(nextVoxel.x, baseVoxel.y, nextVoxel.z), owningBrick);
    let c011 = loadAtlasVoxel(vec3i(baseVoxel.x, nextVoxel.y, nextVoxel.z), owningBrick);
    let c111 = loadAtlasVoxel(nextVoxel, owningBrick);

    if (!c000.valid || !c100.valid || !c010.valid || !c110.valid || !c001.valid || !c101.valid || !c011.valid || !c111.valid) {
        return invalidVolumeSample();
    }

    let bottom0 = mix(c000.value, c100.value, fraction.x);
    let bottom1 = mix(c010.value, c110.value, fraction.x);
    let top0 = mix(c001.value, c101.value, fraction.x);
    let top1 = mix(c011.value, c111.value, fraction.x);
    return validVolumeSample(mix(mix(bottom0, bottom1, fraction.y), mix(top0, top1, fraction.y), fraction.z));
}

// 体积分步只读取当前最近体素，避免对最终透明的样本执行八次纹理读取；高精度切面仍使用独立的三线性采样。
// Raymarch steps read the nearest voxel so transparent samples avoid eight texture loads; high-detail slices keep their separate trilinear sampling.
fn sampleVolumeNearest(modelPosition: vec3f) -> VolumeSample {
    let normalized = clamp(modelPosition, vec3f(0.0), vec3f(1.0));
    let maximumVoxel = volume.dimensions.xyz - vec3u(1u);
    let voxel = vec3i(round(normalized * vec3f(maximumVoxel)));
    let owningBrick = min(vec3u(max(voxel, vec3i(0))) / volume.brickInterior.xyz, volume.brickCount.xyz - vec3u(1u));
    return loadAtlasVoxel(voxel, owningBrick);
}

fn sampleColor(value: f32) -> vec4f {
    let count = u32(scene.transfer.x);

    if (count == 1u || value <= colorStopValues.values[0u]) {
        return colorStopColors.values[0u];
    }

    for (var index = 0u; index + 1u < count; index = index + 1u) {
        let start = colorStopValues.values[index];
        let end = colorStopValues.values[index + 1u];

        if (value < end) {
            if (scene.transfer.w > 0.5) {
                return colorStopColors.values[index];
            }

            let ratio = clamp((value - start) / max(end - start, 0.000001), 0.0, 1.0);
            return mix(colorStopColors.values[index], colorStopColors.values[index + 1u], ratio);
        }
    }

    return colorStopColors.values[count - 1u];
}

fn sampleOpacity(value: f32) -> f32 {
    let count = u32(scene.transfer.y);

    if (count == 1u || value <= opacityStopValues.values[0u]) {
        return opacityStopAlphas.values[0u];
    }

    for (var index = 0u; index + 1u < count; index = index + 1u) {
        let start = opacityStopValues.values[index];
        let end = opacityStopValues.values[index + 1u];

        if (value < end) {
            if (scene.transfer.w > 0.5) {
                return opacityStopAlphas.values[index];
            }

            let ratio = clamp((value - start) / max(end - start, 0.000001), 0.0, 1.0);
            return mix(opacityStopAlphas.values[index], opacityStopAlphas.values[index + 1u], ratio);
        }
    }

    return opacityStopAlphas.values[count - 1u];
}

fn nextBrickAxisDistance(position: f32, direction: f32, minimumValue: f32, maximumValue: f32) -> f32 {
    if (direction > 0.000001) {
        return max(scene.render.w, (maximumValue - position) / direction + scene.render.w * 0.25);
    }
    if (direction < -0.000001) {
        return max(scene.render.w, (minimumValue - position) / direction + scene.render.w * 0.25);
    }
    return 1e20;
}

fn getEmptyBrickSkipDistance(position: vec3f, direction: vec3f) -> f32 {
    let normalized = clamp(position, vec3f(0.0), vec3f(1.0));
    let maximumVoxel = volume.dimensions.xyz - vec3u(1u);
    let safeMaximumVoxel = max(maximumVoxel, vec3u(1u));
    let voxel = vec3u(floor(normalized * vec3f(maximumVoxel)));
    let brick = min(voxel / volume.brickInterior.xyz, volume.brickCount.xyz - vec3u(1u));
    let page = pageTable.values[getPageIndex(brick)];

    if (page.x != 0u && page.z != 0u) {
        return 0.0;
    }

    let minimumPosition = vec3f(brick * volume.brickInterior.xyz) / vec3f(safeMaximumVoxel);
    let maximumPosition = vec3f(min((brick + vec3u(1u)) * volume.brickInterior.xyz, maximumVoxel)) / vec3f(safeMaximumVoxel);
    return min(
        nextBrickAxisDistance(normalized.x, direction.x, minimumPosition.x, maximumPosition.x),
        min(
            nextBrickAxisDistance(normalized.y, direction.y, minimumPosition.y, maximumPosition.y),
            nextBrickAxisDistance(normalized.z, direction.z, minimumPosition.z, maximumPosition.z)
        )
    );
}

fn getDepthDistance(pixel: vec2i, ndcXY: vec2f, rayOrigin: vec3f, rayDirection: vec3f) -> f32 {
    let depth = textureLoad(sceneDepth, pixel, 0);

    if (depth >= 1.0) {
        return 1e20;
    }

    let depthWorld = reconstructWorldPosition(vec3f(ndcXY, depth));
    let depthModel = transformPoint(scene.inverseModelMatrix, depthWorld);
    return max(0.0, dot(depthModel - rayOrigin, rayDirection));
}

fn raymarchComposite(origin: vec3f, direction: vec3f, interval: RayInterval) -> vec4f {
    var accumulated = vec4f(0.0);
    var distance = interval.minimum;

    for (var index = 0u; index < 4096u && distance <= interval.maximum && accumulated.a < 0.985; index = index + 1u) {
        let proxyPosition = origin + direction * distance;
        let skipDistance = select(0.0, getEmptyBrickSkipDistance(proxyPosition, direction), scene.geographic0.x < 0.5);

        if (skipDistance > 0.0) {
            distance = distance + skipDistance;
            continue;
        }

        let volumePosition = proxyToVolume(proxyPosition);
        if (!isInsideVolume(volumePosition)) {
            distance = distance + scene.render.w;
            continue;
        }
        let sample = sampleVolumeNearest(volumePosition);

        if (sample.valid) {
            let sampleAlpha = sampleOpacity(sample.value);

            if (sampleAlpha > 0.0) {
                let color = sampleColor(sample.value);
                let alpha = 1.0 - exp(-sampleAlpha * scene.render.z * scene.render.w);
                let contribution = (1.0 - accumulated.a) * alpha;
                accumulated = vec4f(accumulated.rgb + color.rgb * contribution, accumulated.a + contribution);
            }
        }

        distance = distance + scene.render.w;
    }

    let finalAlpha = accumulated.a * scene.render.y * scene.transfer.z;
    return vec4f(accumulated.rgb * scene.render.y * scene.transfer.z, finalAlpha);
}

fn raymarchMaximum(origin: vec3f, direction: vec3f, interval: RayInterval) -> vec4f {
    var maximumValue = -1e30;
    var found = false;
    var distance = interval.minimum;

    for (var index = 0u; index < 4096u && distance <= interval.maximum; index = index + 1u) {
        let proxyPosition = origin + direction * distance;
        let skipDistance = select(0.0, getEmptyBrickSkipDistance(proxyPosition, direction), scene.geographic0.x < 0.5);

        if (skipDistance > 0.0) {
            distance = distance + skipDistance;
            continue;
        }

        let volumePosition = proxyToVolume(proxyPosition);
        if (!isInsideVolume(volumePosition)) {
            distance = distance + scene.render.w;
            continue;
        }
        let sample = sampleVolumeNearest(volumePosition);

        if (sample.valid) {
            maximumValue = max(maximumValue, sample.value);
            found = true;
        }

        distance = distance + scene.render.w;
    }

    if (!found) {
        return vec4f(0.0);
    }

    let color = sampleColor(maximumValue);
    let alpha = sampleOpacity(maximumValue) * scene.render.y * scene.transfer.z;
    return vec4f(color.rgb * alpha, alpha);
}

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4f {
    let x = f32(i32(vertexIndex & 1u) * 4 - 1);
    let y = f32(i32(vertexIndex >> 1u) * 4 - 1);
    return vec4f(x, y, 0.0, 1.0);
}

@fragment
fn fragmentMain(@builtin(position) fragmentPosition: vec4f) -> @location(0) vec4f {
    let ndcXY = vec2f(fragmentPosition.x / scene.viewport.x * 2.0 - 1.0, 1.0 - fragmentPosition.y / scene.viewport.y * 2.0);
    let nearWorld = reconstructWorldPosition(vec3f(ndcXY, 0.0));
    let farWorld = reconstructWorldPosition(vec3f(ndcXY, 1.0));
    let nearModel = transformPoint(scene.inverseModelMatrix, nearWorld);
    let farModel = transformPoint(scene.inverseModelMatrix, farWorld);
    let direction = normalize(farModel - nearModel);
    var interval = intersectClipBox(nearModel, direction);

    if (!interval.valid) {
        discard;
    }

    interval.maximum = min(interval.maximum, getDepthDistance(vec2i(fragmentPosition.xy), ndcXY, nearModel, direction));

    if (interval.maximum < interval.minimum) {
        discard;
    }

    if (scene.render.x > 0.5) {
        return raymarchMaximum(nearModel, direction, interval);
    }
    return raymarchComposite(nearModel, direction, interval);
}
`,`releaseGpuResources`,`requestRender`,`Failed to create WebGPU volume pipelines: `,`minX`,`Volume X axis`,`inverseViewProjection`,`. WebGPU 体积设备已丢失。`,`viewProjectionMatrix`,`beginLockedSliceDrag`,`viewportWidth`,`backend`,`metadata`,`onSlicesChange`,`setTransfer`,`geometryBindGroup`,`colorStopCount`,`, count=`,`plateColor`,`WebGPU volume transfer resources are incomplete. WebGPU 体积传递函数资源不完整。`,`grab`,`brickScheduleCount`,`overlaySlicePipeline`,`createShaderModule`,`createSliceState`,`路线剖面 `,`encodeScenePass`,`length`,` plate color must use values from zero through one. 体积切面底板颜色必须位于零至一。`,`maximumDistance`,`function`,`brickSortCount`,`getEffectiveRenderScale`,`rgb(`,`options`,`setRouteProfiles`,`parseInt`,`getProfileResources`,`getAtlasTexture`,`set`,`finally`,`pointerEvents`,`transferBindGroup`,`getVolumeBindGroupLayout`,`distance`,`endsWith`,`delete`,`filter`,`viewportHeight`,`bgra8unorm`,`next`,`recordFrameInterval`,`Volume chunk request was aborted. 体积块请求已取消。`,`viewProjection`,`path`,`click`,`subscribe`,`requestAdapter`,`volume scene params`,`WebGPU volume page table is unavailable. WebGPU 体积页表不可用。`,`has`,`volumeParamsBuffer`,`queue`,`handleFrameAvailable`,`sceneParamsBuffer`,`maxX`,`pointermove`,`brickDepth`,` noData must be finite or NaN. `,`VERTEX`,` must be a positive finite number. `,`createTextNode`,`setVertexBuffer`,`lockedSlices`,`countY`,` with multiple samples must have a non-zero step. `,`onInteractionStart`,`, size=`,`level`,`sceneTrianglePipeline`,`store`,`volume atlas bind group layout`,`pushErrorScope`,`uploadPump`,`volume color stop colors`,`Maximum locked slice count is `,`smooth`,`fovYDegrees`,`static`,`webgpu`,`preview`,`createComputePipeline`,`asin`];return wt=function(){return e},wt()}var Tt=class{axes;[b(800)]=new Set;[b(311)];[b(1021)];[b(256)];[b(602)]=1;[b(352)]=null;[b(449)]=[];[b(294)]=b(846);[b(1042)];constructor(e,t={}){let n=b;if(St(e),this[n(834)]={xAxis:{...e[n(960)]},yAxis:{...e[n(958)]},zAxis:{...e[n(982)]}},this[n(1042)]=t[n(1042)]??.25,this[n(256)]=t[n(256)]??n(254),this[n(1021)]=t[n(1021)]??12,this.onLimitReached=t.onLimitReached,!(this[n(1042)]>=0&&this[n(1042)]<=1))throw Error(n(283));if(this[n(256)]!==n(254)&&this.depthMode!==n(1017))throw Error(n(836));if(!(Number.isInteger(this[n(1021)])&&this.maxLockedSlices>0))throw Error(n(327))}get[b(705)](){return bt(this.currentPreview)}get[b(688)](){let e=b;return this[e(449)].map(xt)}get[b(336)](){let e=b;return this[e(294)]}get[b(870)](){let e=b;return{preview:this.preview,lockedSlices:this[e(688)],toolMode:this[e(294)],volumeDimFactor:this[e(1042)]}}[b(671)](e){let t=b;return this.listeners.add(e),e(this[t(870)]),()=>this[t(800)][t(661)](e)}get axisDefinitions(){let e=b;return{xAxis:{...this[e(834)].xAxis},yAxis:{...this[e(834)].yAxis},zAxis:{...this.axes.zAxis}}}[b(366)](e){let t=b;St(e),this[t(834)]={xAxis:{...e[t(960)]},yAxis:{...e[t(958)]},zAxis:{...e[t(982)]}},this[t(352)]&&(this[t(352)].position=yt(this[t(834)],this[t(352)].axis,this[t(352)][t(323)])),this[t(449)]=this[t(449)][t(569)](e=>({...e,position:yt(this[t(834)],e.axis,e[t(323)])})),this[t(1046)]()}[b(515)](e){let t=b;this[t(294)]!==e&&(this[t(294)]=e,(e===null||e!==t(846)&&this[t(352)]?.[t(961)]!==e)&&(this[t(352)]=null),this[t(1046)]())}updatePreview(e,t){let n=b;if(this.mode===null||this[n(294)]!==n(846)&&this[n(294)]!==e)return;let r=yt(this[n(834)],e,t);this[n(352)]?.[n(961)]===e&&this[n(352)].position===r||(this.currentPreview={axis:e,position:r},this.notify())}clearPreview(){let e=b;this[e(352)]&&(this[e(352)]=null,this[e(1046)]())}[b(284)](e=this[b(256)]){let t=b;return this[t(352)]?this[t(945)](this.currentPreview[t(961)],this[t(352)][t(323)],e):null}[b(945)](e,t,n=this[b(256)]){let r=b;if(this.slices[r(642)]>=this[r(1021)])return this[r(311)]?.(this[r(1021)]),null;let i={id:r(507)+this[r(602)],axis:e,position:yt(this[r(834)],e,t),depthMode:n,visible:!0};return this[r(602)]+=1,this[r(449)]=[...this[r(449)],i],this[r(1046)](),xt(i)}[b(519)](e,t){let n=b,r=this.slices.findIndex(t=>t.id===e);if(r<0)return;let i=this[n(449)][r],a=yt(this[n(834)],i[n(961)],t);a!==i[n(323)]&&(this[n(449)]=this[n(449)].map(t=>t.id===e?{...t,position:a}:t),this[n(1046)]())}[b(713)](e){let t=b,n=this[t(449)][t(662)](t=>t.id!==e);n[t(642)]!==this[t(449)].length&&(this.slices=n,this[t(1046)]())}clearLockedSlices(){let e=b;this.slices[e(642)]!==0&&(this[e(449)]=[],this.notify())}[b(1046)](){let e=b,t=this[e(870)];for(let e of this.listeners)e(t)}},Et=e=>e===`x`?[[0,0,0],[1,0,0]]:e===`y`?[[0,0,0],[0,1,0]]:[[0,0,0],[0,0,1]],Dt=(e,t)=>{let n=b,r=F(t[n(623)],t[n(326)]),[i,a]=Et(e),o=B(r,i,t[n(625)],t[n(663)]),s=B(r,a,t[n(625)],t.viewportHeight);return!o||!s?null:{axis:e,startX:o[0],startY:o[1],endX:s[0],endY:s[1]}},Ot=(e,t,n)=>{let r=b,i=e.endX-e[r(396)],a=e.endY-e[r(1027)],o=i*i+a*a,s=o===0?0:((t-e[r(396)])*i+(n-e[r(1027)])*a)/o,c=Math[r(809)](1,Math.max(0,s)),l=e[r(396)]+c*i,u=e[r(1027)]+c*a;return{axis:e[r(961)],distance:Math.hypot(t-l,n-u),normalizedPosition:c}},kt=(e,t,n)=>{let r=b,i=t[r(501)]();return[i[r(340)]===0?0:(e[r(1032)]-i[r(385)])*n[r(625)]/i.width,i[r(257)]===0?0:(e[r(988)]-i[r(367)])*n[r(663)]/i.height]},At=(e,t,n)=>{let r=b,i=e[r(599)];return Ct(t===`x`?i.xAxis:t===`y`?i.yAxis:i[r(982)],n)},jt=class{[b(286)];[b(466)];[b(967)];hitTolerance;[b(760)];onInteractionStart;[b(813)];[b(417)]=null;previousAxis=null;[b(481)]=!1;constructor(e,t,n,r={}){let i=b;this[i(286)]=e,this[i(466)]=t,this[i(967)]=n,this[i(428)]=r.hitTolerancePixels??10,this[i(760)]=r[i(805)]??4,this.onInteractionStart=r[i(691)],this.onInteractionEnd=r[i(813)]}[b(819)](){let e=b;this[e(481)]||(this[e(481)]=!0,this[e(286)][e(571)](e(588),this[e(480)],!0),this.element.addEventListener(e(681),this[e(810)],!0),this[e(286)][e(571)](`pointerleave`,this[e(271)],!0),window[e(571)](e(681),this[e(784)],!0),window[e(571)](e(946),this.handlePointerUp,!0),window[e(571)](e(296),this[e(969)],!0))}[b(624)](e,t){let n=b,r=this[n(466)][n(688)][n(558)](t=>t.id===e);r&&(this[n(417)]={kind:`locked`,axis:r[n(961)],pointerId:t[n(497)],sliceId:e,startX:t[n(1032)],startY:t[n(988)],moved:!1},this[n(691)]?.(),t.preventDefault(),t[n(871)]())}[b(492)](){let e=b;this[e(481)]&&(this[e(481)]=!1,this[e(286)][e(774)](`pointerdown`,this.handlePointerDown,!0),this[e(286)][e(774)](`pointermove`,this[e(810)],!0),this[e(286)][e(774)](`pointerleave`,this[e(271)],!0),window[e(774)](e(681),this[e(784)],!0),window.removeEventListener(e(946),this[e(969)],!0),window[e(774)](`pointercancel`,this[e(969)],!0),this.activePointer&&this[e(813)]?.(),this[e(417)]=null,this[e(606)]=null,this[e(466)][e(1004)]())}findAxisHit(e,t){let n=b,r=this.getFrame();if(!r)return null;let[i,a]=kt(e,this.element,r),o=this[n(466)][n(336)];if(o===null)return null;let s=(t?[t]:o===n(846)?[`x`,`y`,`z`]:[o])[n(569)](e=>Dt(e,r))[n(662)](e=>e!==null)[n(569)](e=>Ot(e,i,a));if(s[n(642)]===0)return null;s[n(1034)]((e,t)=>e.distance-t[n(659)]);let c=s[0];if(!t&&this[n(606)]){let e=s[n(558)](e=>e[n(961)]===this[n(606)]);e&&e.distance<=c.distance+this[n(760)]&&(c=e)}return!t&&c[n(659)]>this[n(428)]?null:c}[b(954)](e,t){let n=b,r=At(this.state,e[n(961)],e[n(990)]);t?this[n(466)][n(519)](t,r):this.state[n(896)](e.axis,r),this.previousAxis=e[n(961)]}handlePointerDown=e=>{let t=b;if(e[t(742)]!==0||this[t(417)])return;let n=this.findAxisHit(e);n&&(this[t(954)](n),this[t(417)]={kind:t(705),axis:n.axis,pointerId:e[t(497)],startX:e[t(1032)],startY:e.clientY,moved:!1},this[t(691)]?.(),this[t(286)][t(395)]?.(e[t(497)]),e[t(717)](),e[t(871)]())};[b(810)]=e=>{let t=b;if(this[t(417)])return;let n=this[t(949)](e);if(!n){this[t(606)]=null,this[t(466)][t(1004)]();return}this[t(954)](n)};handleWindowPointerMove=e=>{let t=b,n=this[t(417)];if(!n||n[t(497)]!==e[t(497)])return;let r=this.findAxisHit(e,n[t(961)]);r&&(Math[t(416)](e[t(1032)]-n.startX,e[t(988)]-n[t(1027)])>4&&(n[t(546)]=!0),this[t(954)](r,n[t(478)]),e[t(717)](),e[t(871)]())};[b(969)]=e=>{let t=b,n=this[t(417)];!n||n[t(497)]!==e[t(497)]||(n[t(553)]===t(705)&&!n[t(546)]&&this[t(466)][t(284)](),this[t(286)][t(545)]?.(e[t(497)])&&this[t(286)][t(389)](e[t(497)]),this[t(417)]=null,this.onInteractionEnd?.(),e[t(717)](),e[t(871)]())};[b(271)]=()=>{let e=b;this.activePointer||this[e(466)][e(1004)]()}},Mt=e=>e[b(962)](),Nt=(e,t)=>Mt(e)+` `+Number(t.toFixed(4)),Pt=(e,t)=>{let n=b,r=e[n(599)];return t===`x`?r[n(960)]:t===`y`?r[n(958)]:r.zAxis},Ft=(e,t)=>{let n=b,r=Z(Pt(e,t.axis),t.position);return t.axis===`x`?[r,0,0]:t[n(961)]===`y`?[0,r,0]:[0,0,r]},It=e=>{let t=b;e.style[t(323)]=t(869),e.style[t(927)]=`1`,e[t(1049)][t(500)]=t(895),e[t(1049)][t(306)]=t(380),e.style.gap=t(457),e[t(1049)][t(801)]=t(274),e[t(1049)].border=t(829),e[t(1049)].borderRadius=t(457),e[t(1049)].color=t(791),e[t(1049)][t(433)]=t(1011),e.style.font=t(437),e[t(1049)][t(279)]=t(735),e[t(1049)][t(864)]=t(579),e.style[t(436)]=t(348),e.style.touchAction=t(348)},Lt=()=>{let e=b,t=document[e(378)](e(742));return t[e(316)]=e(742),t[e(573)]=`×`,t.setAttribute(e(923),e(572)),t[e(1049)][e(801)]=e(505),t[e(1049)][e(823)]=`0`,t[e(1049)][e(495)]=`inherit`,t.style[e(433)]=e(889),t[e(1049)][e(532)]=e(767),t},Rt=class{[b(317)];[b(466)];[b(967)];interactionController;[b(607)];[b(812)]=new Map;previousContainerPosition;[b(724)];[b(1041)]=null;constructor(e,t,n,r={}){let i=b;this[i(317)]=e,this.state=t,this.getFrame=n,this[i(312)]=r[i(312)],this[i(607)]=r[i(607)]??Nt,this.previousContainerPosition=e[i(1049)][i(323)],getComputedStyle(e)[i(323)]===i(703)&&(e[i(1049)][i(323)]=i(789)),this[i(724)]=t[i(671)](()=>this[i(740)]())}update(){let e=b,t=this[e(466)][e(870)];this[e(443)](t[e(705)]),this[e(859)](t.lockedSlices);let n=this.getFrame();if(!n){this[e(258)]();return}t[e(705)]&&this[e(1041)]&&this.positionMarker(this[e(1041)],t[e(705)],n);for(let r of t[e(688)]){let t=this[e(812)][e(828)](r.id);t&&this[e(931)](t,r,n)}}[b(492)](){let e=b;this[e(724)](),this[e(1041)]?.[e(419)](),this[e(1041)]=null;for(let t of this[e(812)][e(363)]())t[e(419)]();this[e(812)][e(1007)](),this[e(317)][e(1049)][e(323)]=this[e(520)]}[b(443)](e){let t=b;if(!e){this[t(1041)]?.[t(419)](),this[t(1041)]=null;return}this[t(1041)]||(this[t(1041)]=document[t(378)](`div`),It(this[t(1041)]),this.previewMarker[t(1049)][t(656)]=t(348),this.previewMarker[t(1049)][t(451)]=`0.72`,this[t(317)].append(this.previewMarker)),this[t(1041)][t(573)]=this[t(607)](e[t(961)],e.position)}[b(859)](e){let t=b,n=new Set(e[t(569)](e=>e.id));for(let[e,r]of this[t(812)])n[t(675)](e)||(r[t(419)](),this[t(812)][t(661)](e));for(let n of e){let e=this[t(812)][t(828)](n.id);e||(e=this[t(393)](n.id),this[t(812)][t(654)](n.id,e),this.container[t(912)](e));let r=e[t(308)];r&&(r.textContent=this.formatPosition(n.axis,n.position))}}[b(393)](e){let t=b,n=document[t(378)](t(488));It(n),n.style[t(532)]=t(635),n[t(912)](document[t(686)](``));let r=Lt();return r[t(571)](t(588),e=>e[t(871)]()),r.addEventListener(t(670),n=>{let r=t;n[r(871)](),this[r(466)].removeSlice(e)}),n[t(571)](`pointerdown`,n=>this[t(312)]?.[t(624)](e,n)),n.append(r),n}[b(931)](e,t,n){let r=b,i=B(F(n.viewProjectionMatrix,n[r(326)]),Ft(this[r(466)],t),n[r(625)],n[r(663)]);if(!i||i[2]<0||i[2]>1){e[r(1049)][r(500)]=r(348);return}e[r(1049)][r(500)]=r(895),e[r(1049)].left=i[0]+`px`,e.style[r(367)]=i[1]+`px`}[b(258)](){let e=b;this[e(1041)]&&(this[e(1041)][e(1049)][e(500)]=`none`);for(let t of this[e(812)].values())t[e(1049)].display=`none`}},zt=(e,t)=>Math[b(809)](t-1,Math[b(407)](0,e)),Bt=(e,t,n,r)=>{let i=b;E(e,r,n.readRange);let a=t[i(340)]+t[i(260)]*2,o=t[i(257)]+t.halo*2,s=t[i(583)]+t.halo*2,c=new Float32Array(a*o*s);for(let l=0;l<s;l+=1){let s=zt(n.coreRange[i(783)]+l-t[i(260)],e[i(982)].count)-r.range.sourceYStart;for(let u=0;u<o;u+=1){let d=zt(n[i(825)][i(857)]+u-t.halo,e[i(958)][i(541)])-r[i(738)][i(857)];for(let f=0;f<a;f+=1){let p=zt(n[i(825)][i(1016)]+f-t[i(260)],e[i(960)][i(541)])-r[i(738)][i(1016)];c[(l*o+u)*a+f]=r[i(363)][(s*r.height+d)*r[i(340)]+p]}}}return c},Vt=e=>{let t=b;if(e[t(642)]===0)throw Error(t(910));return e[t(569)]((e,n)=>{let r=t;if(Number.isNaN(e[r(809)])||Number[r(533)](e[r(407)]))throw TypeError(`第`+(n+1)+r(920));if(e[r(809)]>=e.max)throw Error(`第`+(n+1)+`个色标范围的 min 必须小于 max`);return{min:e.min,max:e[r(407)],color:Ht(e[r(495)])}})[t(1034)]((e,n)=>e[t(809)]-n[t(809)])},Ht=e=>{let t=b,n=e[t(586)]()[t(940)]();if(n[t(798)](`#`))return Ut(n);if(n[t(798)](`rgba(`))return Wt(n,!0);if(n[t(798)](t(648)))return Wt(n,!1);throw Error(t(608)+e)},Ut=e=>{let t=b;if(e.length===4)return Gt(Number[t(651)](``+e[1]+e[1],16),Number[t(651)](``+e[2]+e[2],16),Number[t(651)](``+e[3]+e[3],16),1);if(e.length===7)return Gt(Number[t(651)](e.slice(1,3),16),Number[t(651)](e[t(979)](3,5),16),Number[t(651)](e[t(979)](5,7),16),1);throw Error(t(344)+e)},Wt=(e,t)=>{let n=b,r=e[n(596)](/^rgba?\(([^)]+)\)$/);if(!r)throw Error(`不支持的 rgb 颜色格式: `+e);let i=r[1][n(1026)](`,`)[n(569)](e=>e[n(586)]()),a=t?4:3;if(i[n(642)]!==a)throw Error(n(888)+e);return Gt(Number(i[0]),Number(i[1]),Number(i[2]),t?Number(i[3]):1)},Gt=(e,t,n,r)=>{let i=b;if(!Kt(e)||!Kt(t)||!Kt(n))throw Error(`RGB 颜色通道必须在 0 ~ 255 之间`);if(!Number.isFinite(r)||r<0||r>1)throw Error(i(854));return[e/255,t/255,n/255,r]},Kt=e=>Number.isFinite(e)&&e>=0&&e<=255,qt=e=>{let t=b;if(e[t(642)]===0)throw Error(t(1012));let n=-1/0;for(let r of e){if(!Number[t(406)](r[t(265)])||r[t(265)]<=n)throw Error(t(741));if(!Number.isFinite(r[t(451)])||r[t(451)]<0||r[t(451)]>1)throw Error(t(971));n=r[t(265)]}},Jt=(e,t)=>{let n=b;if(e<=t[0])return[0,0,0];for(let r=1;r<t.length;r+=1)if(e<=t[r]){let i=t[r]-t[r-1];return[r-1,r,i===0?0:Math[n(809)](1,Math[n(407)](0,(e-t[r-1])/i))]}let r=t[n(642)]-1;return[r,r,0]},Yt=(e,t)=>{let n=b;qt(t);let r=Vt([...e]);return{colorStops:r.flatMap((e,t)=>{let n=x,i=r[Math[n(809)](t+1,r[n(642)]-1)][n(495)];return[{value:e[n(809)],color:e.color},{value:e[n(407)],color:i}]}),opacityStops:t[n(569)](e=>({...e}))}},Xt=(e,t,n,r)=>{let i=b;if(!Number[i(406)](e))return[0,0,0,0];let[a,o,s]=Jt(e,t.map(e=>e.value)),c=t[a],l=t[o],u=r===`step`?0:s;return[c[i(495)][0]+(l[i(495)][0]-c.color[0])*u,c.color[1]+(l[i(495)][1]-c.color[1])*u,c[i(495)][2]+(l[i(495)][2]-c[i(495)][2])*u,(c[i(495)][3]+(l[i(495)][3]-c[i(495)][3])*u)*n]},Zt=(e,t,n)=>{let r=b;if(!Number.isFinite(e))return 0;let[i,a,o]=Jt(e,t.map(e=>e.value)),s=n===r(811)?0:o;return t[i][r(451)]+(t[a][r(451)]-t[i][r(451)])*s},Qt={position:[1.4,1.2,2.1],target:[.5,.5,.5],up:[0,1,0],projection:{type:b(821),fovYDegrees:45,near:.01,far:100}},$t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Q=e=>Math[b(809)](1,Math[b(407)](0,e)),en=e=>e===b(732)?.012:e===b(460)?.0025:e===b(802)?.005:.006,tn=e=>e===b(732)?8:e===`quality`?2:4,nn=(e,t)=>t>24?e===b(460)?b(802):b(732):t<14?e===b(732)?b(802):`quality`:e,$=(e,t)=>{let n=b;if(!Number[n(406)](e)||e<=0)throw Error(t+n(685)+t+n(965));return e},rn=(e,t)=>{let n=b;if(!t)return{minimum:[0,0,0],maximum:[1,1,1]};let r=Q(Z(e.metadata[n(960)],t[n(619)])),i=Q(Z(e[n(627)].xAxis,t[n(680)])),a=Q(Z(e.metadata[n(958)],t[n(529)])),o=Q(Z(e.metadata[n(958)],t[n(535)])),s=Q(Z(e[n(627)][n(982)],t[n(472)])),c=Q(Z(e[n(627)].zAxis,t.maxZ));return{minimum:[Math[n(809)](r,i),Math[n(809)](a,o),Math[n(809)](s,c)],maximum:[Math[n(407)](r,i),Math[n(407)](a,o),Math.max(s,c)]}},an=()=>({id:b(795),topology:b(989),depthMode:b(1017),vertices:new Float32Array([0,0,0,1,.2,.2,1,1,0,0,1,.2,.2,1,0,0,0,.2,1,.2,1,0,1,0,.2,1,.2,1,0,0,0,.2,.5,1,1,0,0,1,.2,.5,1,1])}),on=()=>{let e=b,t=[.1,.53,.56,.62],n=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],r=[[0,1],[0,2],[1,3],[2,3],[4,5],[4,6],[5,7],[6,7],[0,4],[1,5],[2,6],[3,7]],i=new Float32Array(r[e(642)]*2*7),a=0;for(let o of r)for(let r of o)i[e(654)]([...n[r],...t],a),a+=7;return{id:e(734),topology:e(989),depthMode:e(254),vertices:i}},sn=(e,t,n,r)=>{let i=b,a=new Float32Array(e[i(1035)].length*7);for(let o=0;o<e.indices[i(642)];o+=1){let s=e[i(1035)][o],c=s*3,l=Zt(e[i(363)][s],n,r),u=Xt(e.values[s],t,e[i(451)]*l,r);a.set([e[i(440)][c],e[i(440)][c+1],e[i(440)][c+2],u[0]*u[3],u[1]*u[3],u[2]*u[3],u[3]],o*7)}return{id:e.id,topology:i(273),depthMode:e[i(256)],vertices:a}},cn=(e,t,n)=>{let r=b,i=(e[r(510)].x+.5)/t[r(374)],a=(e.coordinate.y+.5)/t[r(689)],o=(e.coordinate.z+.5)/t[r(754)];return Math[r(416)](i-n[r(323)][0],a-n.position[1],o-n[r(323)][2])},ln=(e,t)=>(e[b(510)].z*t[b(689)]+e[b(510)].y)*t.countX+e.coordinate.x,un=(e,t,n,r)=>{let i=b,a=n===`x`?{start:e[i(825)].xStart,count:e[i(825)][i(441)],size:t.metadata[i(960)][i(541)]}:n===`y`?{start:e[i(825)][i(857)],count:e[i(825)].levelCount,size:t.metadata.yAxis[i(541)]}:{start:e[i(825)].sourceYStart,count:e[i(825)][i(375)],size:t[i(627)][i(982)].count};return r>=a[i(763)]/a[i(391)]&&r<=(a[i(763)]+a[i(541)])/a[i(391)]},dn=(e,t,n)=>{let r=b,i=e[r(825)][r(1016)]/t[r(627)].xAxis[r(541)],a=(e[r(825)][r(1016)]+e[r(825)][r(441)])/t[r(627)][r(960)][r(541)],o=e[r(825)][r(857)]/t[r(627)][r(958)][r(541)],s=(e[r(825)][r(857)]+e[r(825)].levelCount)/t.metadata[r(958)].count,c=e[r(825)][r(783)]/t.metadata[r(982)][r(541)],l=(e[r(825)].sourceYStart+e[r(825)][r(375)])/t[r(627)][r(982)][r(541)];return n.some(e=>{let n=r,u=Z(t[n(627)].yAxis,e[n(877)][0]),d=Z(t.metadata[n(958)],e[n(877)][e[n(877)][n(642)]-1]);if(Math[n(407)](u,d)<o||Math[n(809)](u,d)>s)return!1;for(let r=0;r<e[n(669)][n(642)];r+=2){let o=Z(t[n(627)][n(960)],e.path[r]),s=Z(t[n(627)].zAxis,e.path[r+1]);if(o>=i&&o<=a&&s>=c&&s<=l)return!0}return!1})},fn=(e,t,n,r)=>{let i=b,a=n[i(705)];if(a){let n=a[i(961)]===`x`?t.metadata[i(960)]:a[i(961)]===`y`?t[i(627)][i(958)]:t[i(627)].zAxis;if(un(e,t,a[i(961)],Z(n,a[i(323)])))return 0}for(let r of n[i(688)]){let n=r.axis===`x`?t[i(627)].xAxis:r[i(961)]===`y`?t[i(627)][i(958)]:t.metadata[i(982)];if(r.visible&&un(e,t,r[i(961)],Z(n,r[i(323)])))return 1}return dn(e,t,r)?2:3},pn=class e{[b(626)]=b(704);renderer;[b(770)];[b(301)];renderMode;[b(365)];[b(574)]=[];[b(897)];[b(270)];descriptors;[b(807)];[b(544)];[b(357)];opacityStops;[b(882)]=[];[b(388)];[b(1024)]=0;[b(860)]=new Set;[b(909)]=new Map;[b(893)]=new Set;[b(785)]=0;destroyed=!1;[b(769)];[b(475)];[b(382)];[b(384)];quality;autoQuality=`balanced`;[b(381)]=0;[b(577)]=0;[b(563)];[b(767)]=null;navigationMode;[b(868)];renderScale;[b(1039)];[b(390)];activeInteractions=new Set;[b(924)]=!0;[b(368)]=!1;[b(636)]=0;brickSortCount=0;[b(377)]=null;[b(422)];[b(890)];onSlicesChange;[b(744)]=0;[b(883)]=0;actualFrameIntervalMilliseconds=0;requestControllers=new Set;[b(956)]=null;markerOverlay=null;constructor(e,t){let n=b;this[n(1043)]=t,this[n(301)]=e[n(301)],this[n(365)]=e[n(365)]??e[n(301)],this.renderMode=e[n(518)]??`managed`,this[n(897)]=e[n(897)],this[n(388)]=e.timeIndex??0,this[n(270)]=this[n(995)](e),this[n(468)]=A(this[n(897)][n(627)],this.layout),this.volumeCamera=new ke({state:e[n(932)]??Qt}),this[n(807)]=this.createSliceState(e);let r=Yt(e.colorStops,e[n(782)]);if(this[n(544)]=r[n(544)],this[n(357)]=e.colorStops,this[n(782)]=e[n(782)],this.baseModelMatrix=e[n(326)]??$t,this[n(475)]=$(e[n(475)]??1,n(475)),this[n(382)]=e[n(382)]??`cartesian`,this[n(382)]===`geographic-wgs84`&&e[n(326)])throw Error(n(300));this.clipBox=e[n(384)]??null,this.quality=e.quality??n(846),this[n(759)]=e[n(759)]??n(1010),this[n(868)]=$(e[n(868)]??2,`pixelRatioCap`),this[n(426)]=$(e[n(426)]??1,n(426)),this[n(1039)]=$(e[n(1039)]??.6,n(1039)),this[n(390)]=$(e[n(390)]??1,`interactionStepScale`),this.colorMode=e[n(563)]??n(701),this[n(422)]=e.sliceInteraction?.[n(256)]??n(254),this[n(890)]=e.sliceInteraction?.plateColor,this[n(628)]=e[n(956)]?.onSlicesChange,this[n(1043)].setFrameAvailableCallback(()=>this[n(678)]()),this[n(1043)].setTransfer(r[n(544)],r.opacityStops);let i=e[n(394)]??this.coordinateSystem===n(953);this.renderer[n(366)](i?[on(),an()]:[]),this[n(1043)][n(740)]({renderMode:e[n(294)]??n(452),colorMode:this[n(563)],opacity:e[n(451)]??.3,densityScale:e[n(716)]??1,stepLength:this[n(471)](),volumeDimFactor:this[n(807)][n(1042)]}),this[n(987)](),this[n(1019)](),this[n(513)](),this[n(290)](e),this.bindControls()}static async create(t){let n=b;if(D(t[n(897)]),T(t.source[n(627)],t[n(388)]??0),(t[n(757)]?.[n(260)]??1)!==1)throw Error(`The current WebGPU volume atlas requires halo: 1. 当前 WebGPU 体积图集要求 halo 为 1。`);let r=t[n(757)]?.memoryTargetBytes??536870912,i=new _t({memoryTargetBytes:r,memoryHardLimitBytes:t[n(757)]?.[n(998)]??r});await i.initialize(t[n(301)]);let a=new e(t,i);return a[n(1015)](),a.scheduleBricks(),a[n(518)]===n(587)&&a[n(617)](),a}get[b(932)](){let e=b;return this[e(770)][e(466)]}get[b(688)](){let e=b;return this[e(807)][e(688)]}get[b(469)](){let e=b,t=this[e(518)]===e(324)||this.isInteracting()||performance[e(855)]()-this.lastSubmittedFrameTimestamp<=250?this[e(338)]:0;return{...this.renderer[e(469)],pendingBrickCount:this[e(909)][e(391)],brickScheduleCount:this.brickScheduleCount,brickSortCount:this[e(646)],actualFrameIntervalMilliseconds:t,estimatedFps:t>0?1e3/t:0,effectiveQuality:this[e(499)](),effectiveRenderScale:this[e(647)](),interactionKind:this[e(292)]()}}[b(740)](e){let t=b;e[t(932)]&&this.setCamera(e[t(932)]),e[t(326)]&&(this[t(769)]=[...e.modelMatrix]),e[t(475)]!==void 0&&(this[t(475)]=$(e.verticalScale,t(475))),e.clipBox!==void 0&&(this.clipBox=e[t(384)]),e[t(460)]&&(this.quality=e[t(460)]),e[t(759)]&&(this[t(759)]=e[t(759)]);let n=!1;if(e[t(868)]!==void 0&&(this[t(868)]=$(e.pixelRatioCap,t(868)),n=!0),e.renderScale!==void 0&&(this[t(426)]=$(e.renderScale,t(426)),n=!0),e[t(1039)]!==void 0&&(this[t(1039)]=$(e.interactionRenderScale,t(1039)),n=this[t(764)]()),e[t(390)]!==void 0&&(this.interactionStepScale=$(e[t(390)],t(390))),e[t(563)]&&(this[t(563)]=e[t(563)]),e[t(544)]||e[t(782)]){let n=Yt(e[t(544)]??this.colorInputs,e[t(782)]??this.opacityStops);this[t(544)]=n[t(544)],this[t(357)]=e[t(544)]??this[t(357)],this[t(782)]=e[t(782)]??this[t(782)],this[t(1043)][t(629)](n[t(544)],n[t(782)]),this.rebuildProfiles()}e.colorMode&&!e.colorStops&&!e[t(782)]&&this[t(793)](),this[t(1043)][t(740)]({renderMode:e.mode,colorMode:e[t(563)],opacity:e.opacity,densityScale:e.densityScale,stepLength:this[t(471)]()}),this[t(1019)](),n&&this[t(1015)](),this[t(617)]()}[b(837)](e){let t=b;this[t(770)].setState(e),this[t(530)](),this[t(617)]()}[b(902)](e){let t=b;T(this[t(897)][t(627)],e),e!==this[t(388)]&&(this[t(388)]=e,this[t(561)]())}setSource(e){let t=b;D(e),this.source=e,this[t(388)]=Math[t(809)](this[t(388)],e[t(627)][t(841)]-1),this[t(270)]=me(e.metadata,this[t(270)][t(503)]),this[t(468)]=A(e.metadata,this[t(270)]),this[t(807)][t(366)](e.metadata),this[t(987)](),this[t(1019)](),this[t(561)](),this[t(793)](),this[t(617)]()}[b(650)](e){let t=b;this.profiles=e,this[t(793)](),this[t(530)](),this.requestRender()}[b(567)](e){this.sliceState.setToolMode(e)}[b(850)](e){let t=b;if(this.destroyed||this[t(556)].has(e))return;let n=!this[t(764)]();this.activeInteractions[t(983)](e),n&&(this[t(883)]=0,this[t(1015)]())}[b(737)](e){let t=b;this.destroyed||!this[t(556)][t(661)](e)||this.isInteracting()||(this[t(883)]=0,this[t(1015)]())}[b(945)](e,t){let n=b;this[n(807)][n(896)](e,t);let r=this.sliceState.lockPreview();if(!r)throw Error(n(493));return r}[b(522)](e,t){let n=b;this.sliceState[n(519)](e,t)}[b(713)](e){let t=b;this[t(807)][t(713)](e)}[b(269)](){let e=b;this.sliceState[e(269)]()}[b(1015)](){let e=b,t=Math[e(809)](window[e(974)]||1,this[e(868)])*this[e(647)](),n=Math[e(407)](1,Math[e(447)](this[e(301)][e(570)]*t||this[e(301)][e(340)]||1)),r=Math.max(1,Math[e(447)](this[e(301)].clientHeight*t||this.canvas[e(257)]||1));this[e(770)][e(289)](n/r),(this[e(301)].width!==n||this[e(301)][e(257)]!==r)&&this[e(1043)][e(1015)](n,r),this[e(617)]()}[b(413)](){let e=b;if(this[e(578)])return;this[e(259)](),this[e(817)]();let t=this[e(770)].matrices;if(this.renderer[e(837)]({viewProjection:Array[e(875)](t[e(668)]),inverseViewProjection:Array.from(t[e(621)]),cameraPosition:this[e(770)].state.position}),this[e(1043)][e(740)]({stepLength:this[e(471)]()}),!this[e(1043)][e(413)]()){this[e(924)]=!0;return}this.renderDirty=!1,this.recordFrameInterval(performance[e(855)]()),this[e(314)]?.[e(740)]()}[b(575)](){let e=b;if(this[e(578)])return Promise[e(580)](Error(`A destroyed volume scene cannot capture a frame. 已销毁的体积场景不能读取帧。`));this[e(259)](),this[e(817)]();let t=this.volumeCamera[e(792)];return this[e(1043)].setCamera({viewProjection:Array[e(875)](t.viewProjection),inverseViewProjection:Array.from(t[e(621)]),cameraPosition:this[e(770)].state[e(323)]}),this[e(1043)][e(575)]()}[b(492)](){let e=b;if(!this[e(578)]){this[e(578)]=!0,this[e(1024)]+=1;for(let t of this[e(830)])t.abort();this.requestControllers[e(1007)](),cancelAnimationFrame(this.frameRequest),this[e(1043)][e(263)](null),this[e(574)][e(981)](0).forEach(e=>e()),this[e(1043)][e(492)](),this.sliceInteraction?.[e(492)](),this.markerOverlay?.destroy(),this[e(860)][e(1007)](),this[e(909)][e(1007)](),this[e(893)][e(1007)](),this[e(556)].clear(),this[e(377)]=null}}createLayout(e){let t=b;return me(e[t(897)][t(627)],{width:e[t(757)]?.[t(340)],height:e.chunk?.[t(257)],depth:e[t(757)]?.[t(583)],halo:e[t(757)]?.[t(260)]})}[b(499)](){let e=b;return this.quality===`auto`?this[e(833)]:this[e(460)]}[b(471)](){let e=b,t=en(this.getEffectiveQuality());return(this[e(382)]===e(399)?t*.05:t)*(this.isInteracting()?this[e(390)]:1)}[b(764)](){let e=b;return this[e(556)][e(391)]>0}getInteractionKind(){let e=b;return this[e(556)][e(391)]===0?e(444):this[e(556)][e(391)]>1?e(376):this[e(556)][e(363)]()[e(665)]().value??e(444)}[b(647)](){let e=b;return this[e(426)]*(this[e(764)]()?this[e(1039)]:1)}[b(666)](e){let t=b;if(this[t(744)]=e,!(this.renderMode===t(324)||this[t(764)]())){this[t(883)]=0;return}if(this.lastTimingFrameTimestamp>0){let n=e-this.lastTimingFrameTimestamp;n>0&&n<=250&&(this[t(338)]=this[t(338)]===0?n:this[t(338)]*.8+n*.2,this[t(790)](n))}this[t(883)]=e}updateAutoQuality(e){let t=b;if(this.quality!==t(846)||(this[t(381)]+=1,this[t(577)]+=e,this[t(381)]<30))return;let n=this[t(577)]/this[t(381)];if(this[t(381)]=0,this.autoFrameIntervalTotal=0,this[t(764)]()&&n<14)return;let r=nn(this[t(833)],n);r!==this[t(833)]&&(this.autoQuality=r,this[t(530)](),this[t(617)]())}[b(639)](e){let t=b;return new Tt(e[t(897)][t(627)],{volumeDimFactor:e[t(956)]?.volumeDimFactor,depthMode:e[t(956)]?.depthMode,maxLockedSlices:e[t(956)]?.[t(1021)],onLimitReached:n=>e.sliceInteraction?.[t(973)]?.(Error(t(700)+n+t(917)+n+`。`))})}bindSliceState(){let e=b,t=this.sliceState[e(671)](t=>{let n=e;this.pendingSliceSnapshot=t,this[n(617)]()});this[e(574)][e(906)](t)}[b(259)](){let e=b,t=this[e(377)];if(!t)return;this[e(377)]=null;let n=[];if(t[e(705)]){let r=t[e(705)][e(961)]===`x`?this[e(897)][e(627)][e(960)]:t[e(705)][e(961)]===`y`?this[e(897)][e(627)].yAxis:this[e(897)].metadata[e(982)];n[e(906)]({id:e(972),axis:t.preview[e(961)],position:Q(Z(r,t[e(705)].position)),depthMode:this[e(422)],visible:!0,opacity:.72,plateColor:this[e(890)]})}for(let r of t[e(688)]){let t=r[e(961)]===`x`?this[e(897)][e(627)][e(960)]:r[e(961)]===`y`?this[e(897)].metadata[e(958)]:this.source[e(627)][e(982)];n[e(906)]({...r,position:Q(Z(t,r[e(323)])),opacity:1,plateColor:this.slicePlateColor})}this[e(1043)][e(905)](n),this.renderer[e(740)]({volumeDimFactor:t[e(705)]||t[e(688)][e(804)](e=>e.visible)?t[e(1042)]:1}),this.onSlicesChange?.(t[e(688)]),this[e(368)]=!0}[b(290)](e){let t=b,n=()=>({viewProjectionMatrix:this.volumeCamera[t(792)][t(668)],modelMatrix:R(this.baseModelMatrix,this[t(475)]),viewportWidth:Math[t(407)](1,this.canvas[t(570)]),viewportHeight:Math.max(1,this[t(301)][t(516)])});this[t(956)]=new jt(this[t(365)],this[t(807)],n,{hitTolerancePixels:e.sliceInteraction?.[t(568)],onInteractionStart:()=>this[t(850)](t(979)),onInteractionEnd:()=>this[t(737)](t(979))}),this[t(956)][t(819)](),e.overlayContainer&&(this[t(314)]=new Rt(e.overlayContainer,this[t(807)],n,{interactionController:this[t(956)]}))}[b(835)](){let e=b,t=e=>{let t=x;e[t(742)]!==0&&e[t(742)]!==2||(this[t(767)]={id:e[t(497)],x:e[t(1032)],y:e[t(988)],pan:e.button===2||e.pointerType!==`mouse`&&this[t(759)]===`pan`},this[t(850)](t(932)),this.interactionElement.setPointerCapture?.(e[t(497)]),e[t(717)]())},n=e=>{let t=x;if(!this[t(767)]||this[t(767)].id!==e[t(497)])return;let n=e.clientX-this[t(767)].x,r=e[t(988)]-this[t(767)].y;this.pointer.x=e[t(1032)],this.pointer.y=e[t(988)],this.pointer[t(858)]?this[t(770)].pan(n,r,this[t(301)].clientHeight):this[t(770)][t(1010)](n,r),this.requestBrickSchedule(),this.requestRender()},r=e=>{let t=x;this[t(767)]?.id===e[t(497)]&&(this.pointer=null,this[t(737)](`camera`))},i=e=>{let t=x;e.preventDefault(),this[t(770)].dolly(e[t(526)]),this[t(530)](),this.requestRender()},a=t=>t[e(717)]();this[e(365)][e(571)](`pointerdown`,t),this[e(365)][e(571)](e(681),n),this[e(365)].addEventListener(`pointerup`,r),this[e(365)].addEventListener(`pointercancel`,r),this[e(365)][e(571)](e(796),i,{passive:!1}),this.interactionElement[e(571)](`contextmenu`,a),this[e(574)][e(906)](()=>this[e(365)][e(774)](`pointerdown`,t),()=>this.interactionElement[e(774)](e(681),n),()=>this.interactionElement[e(774)](`pointerup`,r),()=>this[e(365)][e(774)](e(296),r),()=>this.interactionElement.removeEventListener(e(796),i),()=>this.interactionElement[e(774)](e(866),a))}[b(987)](){let e=b;this[e(1043)][e(322)]({xAxis:this.source[e(627)][e(960)],yAxis:this[e(897)].metadata[e(958)],zAxis:this[e(897)].metadata[e(982)],brickWidth:this[e(270)][e(503)][e(340)],brickHeight:this[e(270)].shape[e(257)],brickDepth:this[e(270)][e(503)][e(583)],halo:1,noData:this.source.metadata[e(538)]})}[b(1019)](){let e=b;if(this[e(382)]===e(399)){let t=Fe(this[e(897)][e(627)],this.verticalScale);this[e(1043)][e(740)]({modelMatrix:t[e(392)],inverseModelMatrix:Array[e(875)](I(t[e(392)])),geographicTransform:t[e(864)],clipMinimum:[0,0,0],clipMaximum:[1,1,1]}),this[e(617)]();return}let t=R(this.baseModelMatrix,this[e(475)]),n=rn(this[e(897)],this[e(384)]);this[e(1043)].update({modelMatrix:Array[e(875)](t),inverseModelMatrix:Array[e(875)](I(t)),geographicTransform:null,clipMinimum:n[e(345)],clipMaximum:n[e(479)]}),this.requestRender()}[b(793)](){let e=b,t=this[e(882)].map(t=>sn(He(t,this[e(897)][e(627)]),this[e(544)],this[e(782)],this.colorMode));this[e(1043)][e(304)](t),this[e(617)]()}resetBrickRequests(){let e=b;this[e(1024)]+=1;for(let t of this[e(830)])t[e(935)]();this[e(830)][e(1007)](),this[e(860)][e(1007)](),this[e(909)][e(1007)](),this[e(893)][e(1007)](),this.configureSource(),this[e(496)]()}requestBrickSchedule(){let e=b;this[e(368)]=!0,this[e(617)]()}flushBrickSchedule(){let e=b;this[e(368)]&&(this[e(368)]=!1,this[e(496)]())}scheduleBricks(){let e=b;if(this[e(578)])return;this[e(368)]=!1,this.brickScheduleCount+=1;let t=this[e(1043)][e(469)][e(745)];if(t<=0)return;let n=t>=this.descriptors[e(642)];if(n&&this[e(893)][e(391)]===this[e(468)][e(642)]&&this[e(860)].size===this[e(468)].length&&this[e(909)][e(391)]===0)return;let r;n?r=this.descriptors:(this[e(646)]+=1,r=[...this[e(468)]][e(1034)]((t,n)=>fn(t,this[e(897)],this[e(807)],this[e(882)])-fn(n,this[e(897)],this[e(807)],this.profiles)||cn(t,this[e(270)],this.volumeCamera[e(466)])-cn(n,this.layout,this[e(770)][e(466)]))[e(979)](0,t));let i=new Set(r[e(569)](e=>e.key));this[e(893)]=i,n||this.renderer[e(354)](r[e(662)](t=>this[e(860)][e(675)](t[e(402)]))[e(569)](t=>ln(t,this[e(270)])));for(let t of this[e(860)])i[e(675)](t)||this[e(860)].delete(t);let a=Math.max(0,tn(this[e(499)]())-this[e(909)].size),o=r[e(662)](t=>!this[e(860)][e(675)](t[e(402)])&&!this.pendingKeys[e(675)](t[e(402)])).slice(0,a);for(let t of o)this[e(872)](t)}[b(872)](e){let t=b,n=this[t(1024)],r=this[t(897)],i=this[t(388)],a=new AbortController;this[t(830)].add(a),this[t(909)][t(654)](e[t(402)],n),Promise[t(463)](r.readChunk(i,e[t(610)],a[t(814)])).then(async a=>{let o=t;if(this[o(578)]||n!==this[o(1024)]||r!==this[o(897)]||i!==this[o(388)]||!this.desiredKeys[o(675)](e[o(402)]))return;let s=Bt(r[o(627)],this[o(270)][o(503)],e,a),c=ln(e,this[o(270)]);await this[o(1043)].uploadBrick({logicalIndex:c,values:s}),!(this[o(578)]||n!==this[o(1024)]||r!==this[o(897)]||i!==this[o(388)]||!this.desiredKeys.has(e[o(402)]))&&(this[o(860)][o(983)](e[o(402)]),this[o(617)]())})[t(482)](e=>{let n=t;e instanceof DOMException&&e[n(431)]===n(818)||console.error(e)})[t(655)](()=>{let r=t;this[r(830)].delete(a),this.pendingKeys.get(e[r(402)])===n&&this[r(909)].delete(e.key),n===this[r(1024)]&&this[r(496)]()})}handleFrameAvailable(){let e=b;this.renderDirty&&this[e(617)]()}[b(617)](){let e=b;this[e(578)]||(this[e(924)]=!0,this.renderMode===e(587)&&this[e(785)]===0&&(this.frameRequest=requestAnimationFrame(()=>{let t=e;this[t(785)]=0,!(this[t(578)]||!this[t(924)])&&this.render()})))}},mn=e=>pn[b(762)](e),hn={class:`page`},gn=[`aria-expanded`],_n={class:`controls`},vn={class:`control`},yn={class:`control`},bn=[`value`],xn={class:`control`},Sn={class:`control`},Cn={class:`control`},wn={class:`control`},Tn={class:`control`},En={class:`control`},Dn={for:`sceneOpacity`},On={class:`control`},kn={for:`sceneDensity`},An={class:`control`},jn={for:`sceneVertical`},Mn={class:`control`},Nn={class:`control`},Pn={class:`advanced`},Fn={class:`control`},In={class:`control`},Ln={class:`control`},Rn={class:`control`},zn={class:`control`},Bn={class:`control`},Vn={class:`control`},Hn={class:`control`},Un={class:`control`},Wn={class:`control`},Gn={class:`control`},Kn={class:`control`},qn={class:`control`},Jn={class:`status`},Yn={class:`workspace`},Xn={class:`scene`},Zn={class:`axis-controls`},Qn=[`onClick`],$n=[`onUpdate:modelValue`,`min`,`max`,`step`,`onInput`],er={class:`legend`},tr={class:`information`},nr=y(f({__name:`VolumeSceneDemo`,setup(f){let y=m(),b=m(),x=m(),S=m(!1),C=m(`auto`),ue=m(`composite`),de=m(`perspective`),w=m(`auto`),T=m(0),fe=m([]),E=m(.3),D=m(100),O=m(0),pe=m(`step`),me=m(512),he=m(12),k=g({...ae[0]}),A=g({...ae[1]}),j=m(400),M=m(`interpolate`),N=m(`正在加载真实 ZIP`),ge=m(`等待 WebGPU 场景`),_e=m(`尚未初始化`),ve=m(`尚无数据`),P=m(`尚未生成`),F=m(`[]`),I=null,L=null,ye=0,be=null,xe=0,R=null,z=g({x:101.2,y:6e3,z:36.8}),B=g({x:.01,y:1,z:.01}),V=g({x:null,y:null,z:null}),H=g({minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0}),U=()=>{I?.update({mode:ue.value,quality:C.value,opacity:E.value,densityScale:D.value,verticalScale:O.value+1,colorMode:pe.value})},Se=()=>{S.value=!S.value,requestAnimationFrame(()=>I?.resize())},W=()=>{if(!I)return;let e=I.camera,t=e.projection.near,n=e.projection.far;I.setCamera({...e,projection:de.value===`perspective`?{type:`perspective`,fovYDegrees:45,near:t,far:n}:{type:`orthographic`,height:1.4,near:t,far:n}})},G=()=>I?.setSliceTool(w.value===`none`?null:w.value),Ce=async()=>{I?.setTimeIndex(T.value),P.value!==`尚未生成`&&await Oe()},we=e=>{if(!I)return;let t=V[e];if(t){I.removeSlice(t),V[e]=null;return}V[e]=I.lockSlice(e,z[e]).id},K=e=>{let t=V[e];t&&I?.updateSlice(t,z[e])},q=()=>I?.beginInteraction(`slice`),J=()=>I?.endInteraction(`slice`),Te=e=>e===`x`?H.minX:e===`y`?H.minY:H.minZ,Y=e=>e===`x`?H.maxX:e===`y`?H.maxY:H.maxZ,Ee=()=>{I?.clearLockedSlices(),V.x=null,V.y=null,V.z=null},De=()=>{I?.update({clipBox:{...H}})},Oe=async()=>{if(!I||!L)return;let e=++xe;N.value=`正在生成路线剖面`;let t=await le(L,{timeIndex:T.value,route:[{...k},{...A}],sampleCount:Math.max(2,Math.round(j.value)),sampleMode:M.value});if(e!==xe||!I)return;let n=ce(t,{id:`standalone-route-profile`,opacity:1,depthMode:`scene`,revision:e});R=n,I.setRouteProfiles([n]),P.value=JSON.stringify({id:n.id,width:t.width,height:t.height,totalDistanceKm:Number(t.totalDistanceKm.toFixed(2)),levels:[t.heights[0],t.heights[t.heights.length-1]],valueCount:t.values.length,valuesShared:n.values===t.values},null,4),N.value=`路线剖面已生成：${t.width}×${t.height}`},ke=e=>{F.value=JSON.stringify(e,null,4);for(let t of[`x`,`y`,`z`]){let n=V[t];if(!n)continue;let r=e.find(e=>e.id===n);r?z[t]=r.position:V[t]=null}},X=async e=>{if(!y.value||!b.value||!L)return;let t=[`x`,`y`,`z`].filter(e=>V[e]),n=re(L);I?.destroy(),V.x=null,V.y=null,V.z=null,I=await mn({canvas:y.value,overlayContainer:b.value,interactionElement:y.value,source:L,colorStops:oe,opacityStops:te,colorMode:pe.value,timeIndex:T.value,mode:ue.value,quality:C.value,renderScale:1,opacity:E.value,densityScale:D.value,verticalScale:O.value+1,interactionRenderScale:.6,modelMatrix:n.modelMatrix,camera:e??se(n),chunk:{memoryLimitBytes:Math.max(128,Math.round(me.value))*1024*1024},sliceInteraction:{maxLockedSlices:Math.max(1,Math.round(he.value)),volumeDimFactor:.3,depthMode:`always-visible`,plateColor:[1,1,1,.15],onSlicesChange:ke,onSliceError:e=>{N.value=e.message}}}),G(),R&&I.setRouteProfiles([R]);for(let e of t)we(e)},Ae=async()=>{if(!I)return;let e=I.camera;N.value=`正在重建体积资源`,await X(e),N.value=`体积资源配置已重建`},je=async(e=!1)=>{try{N.value=`正在加载真实 ZIP`;let t=x.value?.files?.[0],n=e||!t?await ee():await ie(t);L=n.source,fe.value=n.metadata.timeList,T.value=0,R=null,P.value=`尚未生成`;let{xAxis:r,yAxis:i,zAxis:a}=n.source.metadata;Object.assign(H,{minX:Math.min(r.start,r.end),maxX:Math.max(r.start,r.end),minY:Math.min(i.start,i.end),maxY:Math.max(i.start,i.end),minZ:Math.min(a.start,a.end),maxZ:Math.max(a.start,a.end)}),z.x=(r.start+r.end)/2,z.y=(i.start+i.end)/2,z.z=(a.start+a.end)/2,B.x=r.count>1?Math.abs(r.end-r.start)/(r.count-1):1,B.y=1,B.z=a.count>1?Math.abs(a.end-a.start)/(a.count-1):1,ve.value=JSON.stringify({sourceName:n.metadata.sourceName,productTime:n.metadata.productTime,axes:n.source.metadata,layout:`index = ((z * height) + y) * width + x`},null,4),await X(),N.value=`真实体数据 ${n.source.metadata.xAxis.count}×${n.source.metadata.zAxis.count}×${n.source.metadata.yAxis.count}`}catch(e){N.value=e instanceof Error?e.message:String(e)}};return r(async()=>{if(!(!y.value||!b.value))try{await je(!0),be=new ResizeObserver(()=>I?.resize()),be.observe(y.value),ye=window.setInterval(()=>{if(!I)return;let e=I.statistics,t=e.estimatedFps>0?`${e.frameTimeMilliseconds.toFixed(1)} ms · ${e.estimatedFps.toFixed(0)} FPS`:`空闲（按需渲染）`;ge.value=`${t} · ${e.residentBrickCount}/${e.logicalBrickCount} 分块 · ${(e.gpuBytes/1024/1024).toFixed(1)} MiB`,_e.value=JSON.stringify(e,null,4)},500)}catch(e){N.value=e instanceof Error?e.message:String(e)}}),v(()=>{window.clearInterval(ye),be?.disconnect(),I?.destroy(),I=null,L=null}),(r,f)=>(t(),h(`main`,hn,[u(`section`,{class:c([`toolbar`,{collapsed:S.value}])},[u(`button`,{class:`secondary toolbar-toggle`,type:`button`,"aria-expanded":!S.value,onClick:Se},o(S.value?`展开参数`:`收起参数`),9,gn),f[55]||=u(`div`,{class:`toolbar-summary`},`体积参数已收起 · 点击右侧按钮重新展开`,-1),u(`div`,_n,[u(`div`,vn,[f[25]||=u(`label`,{for:`sceneFile`},`真实 ZIP / Real ZIP`,-1),u(`input`,{id:`sceneFile`,ref_key:`fileInput`,ref:x,type:`file`,accept:`.zip,application/zip,application/x-zip-compressed`},null,512)]),u(`div`,yn,[f[26]||=u(`label`,{for:`sceneTime`},`时间 / Time`,-1),a(u(`select`,{id:`sceneTime`,"onUpdate:modelValue":f[0]||=e=>T.value=e,onChange:Ce},[(t(!0),h(e,null,s(fe.value,(e,n)=>(t(),h(`option`,{key:`${e}-${n}`,value:n},o(n)+`: `+o(e),9,bn))),128))],544),[[p,T.value,void 0,{number:!0}]])]),u(`div`,xn,[f[28]||=u(`label`,{for:`sceneMode`},`体积模式 / Mode`,-1),a(u(`select`,{id:`sceneMode`,"onUpdate:modelValue":f[1]||=e=>ue.value=e,onChange:U},[...f[27]||=[u(`option`,{value:`composite`},`透明合成 / Composite`,-1),u(`option`,{value:`maximum`},`最大值 / Maximum`,-1)]],544),[[p,ue.value]])]),u(`div`,Sn,[f[30]||=u(`label`,{for:`sceneColor`},`颜色 / Color`,-1),a(u(`select`,{id:`sceneColor`,"onUpdate:modelValue":f[2]||=e=>pe.value=e,onChange:U},[...f[29]||=[u(`option`,{value:`step`},`分段 / Step`,-1),u(`option`,{value:`smooth`},`平滑 / Smooth`,-1)]],544),[[p,pe.value]])]),u(`div`,Cn,[f[32]||=u(`label`,{for:`sceneQuality`},`画质 / Quality`,-1),a(u(`select`,{id:`sceneQuality`,"onUpdate:modelValue":f[3]||=e=>C.value=e,onChange:U},[...f[31]||=[u(`option`,{value:`auto`},`自动 / Auto`,-1),u(`option`,{value:`performance`},`性能 / Performance`,-1),u(`option`,{value:`balanced`},`均衡 / Balanced`,-1),u(`option`,{value:`quality`},`质量 / Quality`,-1)]],544),[[p,C.value]])]),u(`div`,wn,[f[34]||=u(`label`,{for:`sceneProjection`},`投影 / Projection`,-1),a(u(`select`,{id:`sceneProjection`,"onUpdate:modelValue":f[4]||=e=>de.value=e,onChange:W},[...f[33]||=[u(`option`,{value:`perspective`},`透视 / Perspective`,-1),u(`option`,{value:`orthographic`},`正交 / Orthographic`,-1)]],544),[[p,de.value]])]),u(`div`,Tn,[f[36]||=u(`label`,{for:`sceneSliceTool`},`切面轴 / Slice axis`,-1),a(u(`select`,{id:`sceneSliceTool`,"onUpdate:modelValue":f[5]||=e=>w.value=e,onChange:G},[...f[35]||=[d(`<option value="auto" data-v-85e8ddf7>自动 / Auto</option><option value="x" data-v-85e8ddf7>X 经度</option><option value="y" data-v-85e8ddf7>Y 高度</option><option value="z" data-v-85e8ddf7>Z 纬度</option><option value="none" data-v-85e8ddf7>关闭 / Off</option>`,5)]],544),[[p,w.value]])]),u(`div`,En,[u(`label`,Dn,[f[37]||=_(`体积透明度 / Opacity `,-1),u(`span`,null,o(E.value.toFixed(2)),1)]),a(u(`input`,{id:`sceneOpacity`,"onUpdate:modelValue":f[6]||=e=>E.value=e,type:`range`,min:`0`,max:`1`,step:`0.01`,onInput:U},null,544),[[i,E.value,void 0,{number:!0}]])]),u(`div`,On,[u(`label`,kn,[f[38]||=_(`体积密度 / Density `,-1),u(`span`,null,o(D.value.toFixed(0)),1)]),a(u(`input`,{id:`sceneDensity`,"onUpdate:modelValue":f[7]||=e=>D.value=e,type:`range`,min:`1`,max:`200`,step:`1`,onInput:U},null,544),[[i,D.value,void 0,{number:!0}]])]),u(`div`,An,[u(`label`,jn,[f[39]||=_(`垂直倍率 / Vertical exaggeration `,-1),u(`span`,null,o(O.value.toFixed(1)),1)]),a(u(`input`,{id:`sceneVertical`,"onUpdate:modelValue":f[8]||=e=>O.value=e,type:`range`,min:`0`,max:`29`,step:`0.5`,onInput:U},null,544),[[i,O.value,void 0,{number:!0}]])]),u(`div`,Mn,[f[40]||=u(`label`,{for:`sceneMemory`},`显存上限 MB / GPU budget`,-1),a(u(`input`,{id:`sceneMemory`,"onUpdate:modelValue":f[9]||=e=>me.value=e,type:`number`,min:`128`,step:`128`,onChange:Ae},null,544),[[i,me.value,void 0,{number:!0}]])]),u(`div`,Nn,[u(`button`,{type:`button`,onClick:f[10]||=e=>je(!1)},`加载体积`),u(`button`,{class:`secondary`,type:`button`,onClick:f[11]||=e=>je(!0)},`加载仓库真实 ZIP`),u(`button`,{type:`button`,onClick:Oe},`生成路线剖面`)])]),u(`div`,Pn,[u(`div`,Fn,[f[41]||=u(`label`,{for:`sceneStartLng`},`A 经度`,-1),a(u(`input`,{id:`sceneStartLng`,"onUpdate:modelValue":f[12]||=e=>k.longitude=e,type:`number`,step:`0.01`},null,512),[[i,k.longitude,void 0,{number:!0}]])]),u(`div`,In,[f[42]||=u(`label`,{for:`sceneStartLat`},`A 纬度`,-1),a(u(`input`,{id:`sceneStartLat`,"onUpdate:modelValue":f[13]||=e=>k.latitude=e,type:`number`,step:`0.01`},null,512),[[i,k.latitude,void 0,{number:!0}]])]),u(`div`,Ln,[f[43]||=u(`label`,{for:`sceneEndLng`},`B 经度`,-1),a(u(`input`,{id:`sceneEndLng`,"onUpdate:modelValue":f[14]||=e=>A.longitude=e,type:`number`,step:`0.01`},null,512),[[i,A.longitude,void 0,{number:!0}]])]),u(`div`,Rn,[f[44]||=u(`label`,{for:`sceneEndLat`},`B 纬度`,-1),a(u(`input`,{id:`sceneEndLat`,"onUpdate:modelValue":f[15]||=e=>A.latitude=e,type:`number`,step:`0.01`},null,512),[[i,A.latitude,void 0,{number:!0}]])]),u(`div`,zn,[f[45]||=u(`label`,{for:`sceneSamples`},`路线列数`,-1),a(u(`input`,{id:`sceneSamples`,"onUpdate:modelValue":f[16]||=e=>j.value=e,type:`number`,min:`2`,step:`1`},null,512),[[i,j.value,void 0,{number:!0}]])]),u(`div`,Bn,[f[47]||=u(`label`,{for:`sceneSampleMode`},`路线采样`,-1),a(u(`select`,{id:`sceneSampleMode`,"onUpdate:modelValue":f[17]||=e=>M.value=e},[...f[46]||=[u(`option`,{value:`interpolate`},`双线性`,-1),u(`option`,{value:`cell`},`原始格点`,-1)]],512),[[p,M.value]])]),u(`div`,Vn,[f[48]||=u(`label`,{for:`sceneMaxSlices`},`锁定切面上限`,-1),a(u(`input`,{id:`sceneMaxSlices`,"onUpdate:modelValue":f[18]||=e=>he.value=e,type:`number`,min:`1`,step:`1`,onChange:Ae},null,544),[[i,he.value,void 0,{number:!0}]])]),u(`div`,Hn,[f[49]||=u(`label`,{for:`clipMinX`},`裁剪 X 最小`,-1),a(u(`input`,{id:`clipMinX`,"onUpdate:modelValue":f[19]||=e=>H.minX=e,type:`number`,step:`0.01`},null,512),[[i,H.minX,void 0,{number:!0}]])]),u(`div`,Un,[f[50]||=u(`label`,{for:`clipMaxX`},`裁剪 X 最大`,-1),a(u(`input`,{id:`clipMaxX`,"onUpdate:modelValue":f[20]||=e=>H.maxX=e,type:`number`,step:`0.01`},null,512),[[i,H.maxX,void 0,{number:!0}]])]),u(`div`,Wn,[f[51]||=u(`label`,{for:`clipMinY`},`裁剪 Y 最小`,-1),a(u(`input`,{id:`clipMinY`,"onUpdate:modelValue":f[21]||=e=>H.minY=e,type:`number`,step:`100`},null,512),[[i,H.minY,void 0,{number:!0}]])]),u(`div`,Gn,[f[52]||=u(`label`,{for:`clipMaxY`},`裁剪 Y 最大`,-1),a(u(`input`,{id:`clipMaxY`,"onUpdate:modelValue":f[22]||=e=>H.maxY=e,type:`number`,step:`100`},null,512),[[i,H.maxY,void 0,{number:!0}]])]),u(`div`,Kn,[f[53]||=u(`label`,{for:`clipMinZ`},`裁剪 Z 最小`,-1),a(u(`input`,{id:`clipMinZ`,"onUpdate:modelValue":f[23]||=e=>H.minZ=e,type:`number`,step:`0.01`},null,512),[[i,H.minZ,void 0,{number:!0}]])]),u(`div`,qn,[f[54]||=u(`label`,{for:`clipMaxZ`},`裁剪 Z 最大`,-1),a(u(`input`,{id:`clipMaxZ`,"onUpdate:modelValue":f[24]||=e=>H.maxZ=e,type:`number`,step:`0.01`},null,512),[[i,H.maxZ,void 0,{number:!0}]])]),u(`div`,{class:`control`},[u(`button`,{class:`secondary`,type:`button`,onClick:De},`应用裁剪`),u(`button`,{class:`secondary`,type:`button`,onClick:Ee},`清除切面`)])]),u(`div`,Jn,o(N.value),1)],2),u(`section`,Yn,[u(`div`,Xn,[u(`canvas`,{ref_key:`canvas`,ref:y,class:`volume-canvas`},null,512),u(`div`,{ref_key:`overlay`,ref:b,class:`slice-overlay`},null,512),f[59]||=u(`div`,{class:`scene-title`},[u(`h1`,null,`原生 WebGPU 体积与剖面`),u(`p`,null,`X 经度向东 · Y 真实高度向上 · Z 纬度向南`)],-1),u(`div`,Zn,[f[56]||=u(`h2`,null,`轴切面控制 / Axis slice controls`,-1),(t(),h(e,null,s([`x`,`y`,`z`],e=>u(`div`,{key:e,class:`axis-control`},[u(`button`,{class:c([`secondary`,{active:V[e]}]),type:`button`,onClick:t=>we(e)},o(V[e]?`隐藏 ${e.toUpperCase()}`:`显示 ${e.toUpperCase()}`),11,Qn),a(u(`input`,{"onUpdate:modelValue":t=>z[e]=t,type:`range`,min:Te(e),max:Y(e),step:B[e],onPointerdown:q,onPointerup:J,onInput:t=>K(e),onChange:J},null,40,$n),[[i,z[e],void 0,{number:!0}]]),u(`output`,null,o(e.toUpperCase())+` `+o(z[e].toFixed(e===`y`?0:4))+o(e===`y`?` m`:`°`),1)])),64))]),f[60]||=u(`div`,{class:`interaction-hint`},`左键拖动旋转 · 右键拖动平移 · 滚轮缩放`,-1),u(`div`,er,[f[57]||=u(`div`,{class:`legend-title`},`数值色标 / Value legend`,-1),u(`div`,{class:`legend-bar`,style:n({background:l(ne)})},null,4),f[58]||=u(`div`,{class:`legend-labels`},[u(`span`,null,`10`),u(`span`,null,`80`)],-1)])]),u(`aside`,tr,[f[61]||=u(`h2`,null,`操作`,-1),f[62]||=u(`p`,null,`左键拖动旋转，右键拖动平移，滚轮缩放。鼠标划过 X/Y/Z 轴预览任意位置切面，点击锁定；也可通过左下角控制条显示、移动和隐藏同一组切面。`,-1),f[63]||=u(`h2`,null,`数据范围`,-1),u(`pre`,null,o(ve.value),1),f[64]||=u(`h2`,null,`路线剖面`,-1),u(`pre`,null,o(P.value),1),f[65]||=u(`h2`,null,`锁定切面`,-1),u(`pre`,null,o(F.value),1),f[66]||=u(`h2`,null,`GPU 统计`,-1),u(`pre`,null,o(_e.value),1)])])]))}}),[[`__scopeId`,`data-v-85e8ddf7`]]);export{nr as default};