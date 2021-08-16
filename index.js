/*! <anderpang@foxmail.com> 2021-08-16 */
"use strict";!function(t,e){"object"==typeof exports?(exports.__esModule=!0,exports.default=e()):t.PathAstar=e()}(this,function(){function h(t,e){this.x=t,this.y=e,this.isTracked=!1,this.isFixed=!1}function t(t){var e=t.flat(),i=[],s=e.length;for(this._maps=t,this._width=t[0].length,this._height=t.length,this._closedList=[],this.startNode=this.endNode=null,this._nodeMaps=new Map,this._indexes=[];s--;)1===e[s]&&i.push(s);this.obstacleList=i}return t.prototype={_reset:function(){return this._nodeMaps.forEach(function(t){t.isTracked=t.isFixed=!1}),this},setStart:function(t,e){return this.startNode=this._createNode(t,e),this},setEnd:function(t,e){return this.endNode=this._createNode(t,e),this},randomAll:function(t){var e=this._width*this._height;if(e-2<t)throw new Error("Too many obstacles");for(var i=this._indexes,s=0;s<e;s++)i[s]=s;var n=this._getRandomIndex(),r=this._getRandomIndex(),h=[n,r];return this.startNode=this._createNodeFromIndex(n),this.endNode=this._createNodeFromIndex(r),this._reset(),this.obstacleList=this._createObstacles(t,h),this},coord2Index:function(t,e){return this._width*e+t},index2Coord:function(t){var e=t/this._width|0,i=t-this._width*e;return(t=Object.create(null)).x=i,t.y=e,t},track:function(t,e){var i=this.startNode;return this._check(i,[],t,e),this},_createIndices:function(){for(var t=this._width*this._height,e=this._indexes,i=0;i<t;i++)e[i]=i;return this},_uni:function(t){for(var e,i=t.length;i--;)for(e=0;e<i;e++)if(t[e]===t[i]){t.splice(e,i-e);break}return t.slice(1)},_check:function(e,i,s,n){var t=this._getAround(e),r=t.length;if(r)i.push(e),(r=this._getNearest(t,r)).isTracked=!0,r.x===this.endNode.x&&r.y===this.endNode.y?s(this._uni(i)):this._check(r,i,s,n);else{let t=i.pop();e.isFixed=!0,t?(this._nodeMaps.forEach(function(t){t.isTracked=!1}),t.isTracked=!0,this._check(t,i,s,n)):"function"==typeof n&&n()}},_getNearest:function(t,e){for(var i,s=this.endNode,n=e,r=t[--n],h=r.x-s.x,o=r.y-s.y,d=h*h+o*o,a=d;n--;)(d=(h=(i=t[n]).x-s.x)*h+(o=i.y-s.y)*o)<a&&(a=d,r=i);return r},_getAround:function(t){var e,i=[],s=t.x,n=t.y;return 0<s&&(e=this._getAroundNode(s-1,n,t))&&i.push(e),s<this._width-1&&(e=this._getAroundNode(s+1,n,t))&&i.push(e),0<n&&(e=this._getAroundNode(s,n-1,t))&&i.push(e),n<this._height-1&&(e=this._getAroundNode(s,n+1,t))&&i.push(e),i},_getAroundNode:function(t,e,i){var s,n=this._nodeMaps,r=this.coord2Index(t,e);return(i=i.parent)&&i.x===t&&i.y===e||-1!==this.obstacleList.indexOf(r)?null:n.has(r)?(s=n.get(r)).isFixed||s.isTracked?null:s:((s=new h(t,e)).isTracked=!0,n.set(r,s),s)},_createNodeFromIndex:function(t){var e=t/this._width|0;return new h(t-this._width*e,e)},_getRandomIndex:function(){var t=this._indexes,e=Math.random()*t.length|0,i=t[e];return t.splice(e,1),i},_createObstacles:function(t,e){for(var i,s=[];t--;)i=this._getRandomIndex(),e.push(i),s.push(i);return s},_createNode:function(t,e){return new h(t,e)}},t});