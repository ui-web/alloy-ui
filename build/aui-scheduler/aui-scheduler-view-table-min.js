AUI.add("aui-scheduler-view-table",function(an){var aa=an.Lang,aH=aa.isFunction,aQ=aa.isString,q=an.DataType.DateMath,ai=an.WidgetStdMod,aY=q.WEEK_LENGTH,a6="-",l=".",S="",a5=" ",al="scheduler-view",av="scheduler-view-table",a8=function(A,a9){return function(bb){var ba=bb.all(A);return(ba.size()>=a9)?ba:null;};},aw="body",f="close",ao="col",H="colHeaderDaysNode",w="colgrid",aD="colspan",I="columnDayHeader",J="columnTableGrid",a="container",am="content",az="data",aI="day",i="displayDaysInterval",V="displayRows",ad="div",aA="down",ar="endDate",a4="event",aR="events",O="eventsOverlay",aM="filterFn",B="first",L="firstDayOfWeek",j="grid",C="header",d="headerDateFormatter",z="headerTableNode",af="icon",c="left",aV="locale",aL="more",t="next",v="node",o="overlay",m="right",s="row",P="rowsContainerNode",U="scheduler",ag="scheduler-event",aU="showMore",aS="startDate",M="strings",n="table",aB="tableGridNode",u="tableRowContainer",p="tableRows",aP="tbody",ax="title",a2="tl",k="today",aT="tr",W="viewDate",ac="visible",K=an.getClassName,r=K(af),a3=K(af,"arrowstop-1-l"),g=K(af,"arrowstop-1-r"),aq=K(al,n,w),a7=K(al,n,w,B),aJ=K(al,n,w,k),ak=K(al,n,a),T=K(al,n,aR,o,v),b=K(al,n,aR,o,v,aw),aG=K(al,n,aR,o,v,f),ae=K(al,n,C,ao),ay=K(al,n,C,aI),X=K(al,n,C,n),aj=K(al,n,aL),aX=K(al,n,s),aN=K(al,n,s,a),G=K(al,n,az),E=K(al,n,az,ao),Z=K(al,n,az,ao,ax),a1=K(al,n,az,ao,ax,aA),ab=K(al,n,az,ao,ax,B),N=K(al,n,az,ao,ax,t),Q=K(al,n,az,ao,ax,k),x=K(al,n,az,a4),aO=K(al,n,az,a4,c),aZ=K(al,n,az,a4,m),R=K(al,n,az,B),ah=K(al,n,j),F=K(al,n,j,B),aW='<div class="'+ak+'">'+'<div class="'+aN+'"></div>'+"</div>",ap='<div class="'+T+'">'+'<div class="'+b+'"></div>'+'<a href="javascript:;" class="'+aG+'">{label}</a>'+"</div>",aK='<td class="'+aq+'">&nbsp;</td>',a0='<th class="'+ay+'"><div>&nbsp;</div></th>',h='<table cellspacing="0" cellpadding="0" class="'+X+'">'+"<tbody>"+'<tr class="'+ae+'"></tr>'+"</tbody>"+"</table>",aF='<a href="javascript:;" class="'+aj+'">{label} {count}</a>',aC='<div class="'+aX+'" style="top: {top}%; height: {height}%;"></div>',Y='<table cellspacing="0" cellpadding="0" class="'+G+'">'+"<tbody></tbody>"+"</table>",aE='<table cellspacing="0" cellpadding="0" class="'+ah+'">'+"<tbody>"+"<tr></tr>"+"</tbody>"+"</table>",y='<span class="'+[r,a3].join(a5)+'"></span>',au='<span class="'+[r,g].join(a5)+'"></span>',D='<td class="'+E+'"><div></div></td>',at="<tr></tr>";var e=an.Component.create({NAME:av,ATTRS:{bodyContent:{value:S},displayDaysInterval:{value:42},displayRows:{value:4},fixedHeight:{value:true},name:{value:n},headerDateFormatter:{value:function(a9){var A=this;var ba=A.get(U);return an.DataType.Date.format(a9,{format:"%A",locale:ba.get(aV)});},validator:aQ},navigationDateFormatter:{value:function(a9){var A=this;var ba=A.get(U);return an.DataType.Date.format(a9,{format:"%b %Y",locale:ba.get(aV)});},validator:aH},scrollable:{value:false},strings:{value:{close:"Close",showMore:"Show more"}},headerTableNode:{valueFn:function(){return an.Node.create(h);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},rowsContainerNode:{valueFn:function(){return an.Node.create(aW);}},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{colHeaderDaysNode:a8(l+ay,7),headerTableNode:l+X,rowsContainerNode:l+ak,tableGridNode:a8(l+ah,7)},EXTENDS:an.SchedulerView,prototype:{evtDateStack:null,evtRenderedStack:null,rowDataTableStack:null,initializer:function(){var A=this;A.evtDateStack={};A.evtRenderedStack={};A.rowDataTableStack={};A[H]=A.get(H);A[z]=A.get(z);A[P]=A.get(P);A[aB]=A.get(aB);A[I]=A.headerTableNode.one(l+ae);A[J]=an.NodeList.create();A[u]=A[P].one(l+aN);A[p]=an.NodeList.create();},bindUI:function(){var A=this;A[P].delegate("click",an.bind(A._onClickMore,A),l+aj);},renderUI:function(){var A=this,a9=A._getDisplayRowsCount(),ba;for(ba=0;ba<a9;ba++){A[p].push(A.buildGridRowNode(ba));}A._renderEventsOverlay();A[H].appendTo(A[I]);A[p].appendTo(A[u]);},buildEventsRow:function(a9,be,bd){var A=this;var ba=A.get(V);var bc=0;var bb=an.Node.create(at);A.loopDates(a9,be,function(bn,bj){if(bc>bj){return;}var bo=A.getIntersectEvents(bn);var bl=A._getRenderableEvent(bo,a9,be,bn);var bh=an.Node.create(D);var bg=bh.one(ad);if((ba<bo.length)&&(bd===(ba-1))){var bm=A.get(M);var bi=an.Node.create(aa.sub(aF,{count:(bo.length-(ba-1)),label:bm[aU]}));bi.setData(aR,bo);bg.append(bi);}else{if(bl){var bf=A._getEvtSplitInfo(bl,bn,a9,be);bh.attr(aD,bf.colspan);bc+=(bf.colspan-1);A._syncEventNodeContainerUI(bl,bg,bf);A._syncEventNodeUI(bl,bg,bn);var bk=String(bn.getTime());A.evtRenderedStack[bk].push(bl);}}bc++;bb.append(bh);});return bb;},buildEventsTable:function(A,bc){var bi=this,bg=bi.get(V),bf=q.clearTime(bi._findCurrentIntervalStart()),be=String(bf.getTime()).concat(A.getTime()).concat(bc.getTime()),bh=bi.rowDataTableStack[be],bd;if(!bh){bh=an.Node.create(Y);var bb=bh.one(aP);var ba=bi.buildEventsTitleRow(bh,A,bc);bb.append(ba);for(bd=0;bd<bg;bd++){var a9=bi.buildEventsRow(A,bc,bd);bb.append(a9);}bi.rowDataTableStack[be]=bh;}return bh;},buildEventsTitleRow:function(ba,a9,bc){var A=this;var bb=an.Node.create(at);A.loopDates(a9,bc,function(be,bd){var bf=an.Node.create(D);bf.addClass(Z).toggleClass(ab,(bd===0)).toggleClass(Q,q.isToday(be)).toggleClass(N,q.isToday(q.subtract(be,q.DAY,1))).toggleClass(a1,q.isToday(q.subtract(be,q.WEEK,1)));bb.append(bf.setContent(be.getDate()));});return bb;},buildGridRowNode:function(bd){var ba=this;var bb=ba._getDisplayRowsCount();var a9=100/bb;var A=ba._getTableGridNode(bd);var bc=an.Node.create(aa.sub(aC,{height:a9,top:a9*bd}));bc.append(A.toggleClass(F,(bd===0)));return bc;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtRenderedStack={};A.rowDataTableStack={};},getIntersectEvents:function(a9){var A=this;var bc=A.get(U);var bb=String(a9.getTime());if(!A.evtDateStack[bb]){var ba=bc.getIntersectEvents(a9);A.evtDateStack[bb]=ba.filter(A.get(aM));}return A.evtDateStack[bb];},getNextDate:function(){var A=this;var ba=A.get(U);var bb=ba.get(W);var a9=A.get(i);return q.toLastHour(q.add(bb,q.DAY,a9));
},getPrevDate:function(){var A=this;var ba=A.get(U);var bb=ba.get(W);var a9=A.get(i);return q.toMidnight(q.subtract(bb,q.DAY,a9));},hideEventsOverlay:function(){var A=this;A[O].set(ac,false);},loopDates:function(A,bb,be,bf,bd){var bg=this;var a9=q.clone(A);var ba=bb.getTime();var bc;for(bc=0;a9.getTime()<=ba;bc++){be.apply(bg,[a9,bc]);a9=q.add(a9,(bf||q.DAY),(bd||1));}},plotEvents:function(){var a9=this;var bc=a9._findCurrentIntervalStart();var A=q.safeClearTime(bc);a9.flushViewCache();a9.hideEventsOverlay();a9.bodyNode.all(l+G).remove();var ba=a9.get(i);var bb=Math.min(ba,aY);a9[p].each(function(bg,be){var bd=q.add(A,q.DAY,bb*be);var bh=q.add(bd,q.DAY,bb-1);var bf=a9.buildEventsTable(bd,bh);if(be===0){bf.addClass(R);}bg.append(bf);});},syncDaysHeaderUI:function(){var a9=this;var bc=a9.get(U);var bd=bc.get(W);var bb=a9.get(d);var A=a9.get(aV);var ba=a9._findFirstDayOfWeek(bd);a9.colHeaderDaysNode.all(ad).each(function(bg,bf){var be=q.add(ba,q.DAY,bf);bg.html(bb.call(a9,be));});},syncGridUI:function(){var bi=this;var bc=bi.getToday();var a9=bi.get(U);bi[J].removeClass(aJ);var bb=bi._findCurrentIntervalStart();var be=bi._findCurrentIntervalEnd();if(q.between(bc,bb,be)){var A=a9.get(L);var bg=bi._findFirstDayOfWeek(bc);var bd=q.getWeekNumber(bc,A)-q.getWeekNumber(bb,A);var bh=(bc.getDate()-bg.getDate());var ba=bi._getCellIndex([bh,bd]);var bf=bi[J].item(ba);if(bf){bf.addClass(aJ);}}},syncStdContent:function(){var A=this;A.setStdModContent(ai.BODY,A[P].getDOM());A.setStdModContent(ai.HEADER,A[z].getDOM());},_findCurrentIntervalEnd:function(){var A=this;var ba=A.get(U);var bb=ba.get(W);var a9=A.get(i);return q.add(bb,q.DAY,a9);},_findCurrentIntervalStart:function(){var A=this;var a9=A.get(U);return a9.get(W);},_findFirstDayOfWeek:function(ba){var A=this;var bb=A.get(U);var a9=bb.get(L);return q.getFirstDayOfWeek(ba,a9);},_getCellIndex:function(a9){var A=this;return a9[1]*aY+a9[0];},_getDisplayRowsCount:function(){var A=this;var a9=A.get(i);return Math.ceil(a9/aY);},_getDisplayRowDaysCount:function(){var A=this;var a9=A.get(i);return Math.min(a9,aY);},_getEvtLabel:function(ba){var a9=this;var bb=ba.get(ar);var A=ba.get(aS);return[A.getHours(),a6,bb.getHours(),a5,ba.get(am)].join(S);},_getEvtSplitInfo:function(bd,bg,A,bb){var be=this;var a9=bd.getClearStartDate();var bc=bd.getClearEndDate();var bf=q.getDayOffset(bb,bg);var ba={colspan:Math.min(q.getDayOffset(bc,bg),bf)+1,left:q.before(a9,A),right:q.after(bc,bb)};return ba;},_getRenderableEvent:function(bh,A,bb,bi){var bg=this,be=String(bi.getTime()),ba;if(!bg.evtRenderedStack[be]){bg.evtRenderedStack[be]=[];}for(ba=0;ba<bh.length;ba++){var bf=bh[ba];var a9=bf.get(aS);var bd=q.after(bi,a9)&&!q.isDayOverlap(bi,A);var bc=!q.isDayOverlap(a9,bi);var bj=an.Array.indexOf(bg.evtRenderedStack[be],bf)>-1;if(!bj&&(bc||bd)){return bf;}}return null;},_getTableGridNode:function(be){var a9=this,bb=a9.get(i),A=a9[aB].item(be),bd=A.one(aT),ba;for(ba=0;ba<Math.min(bb,aY);ba++){var bc=an.Node.create(aK);bd.append(bc);if(ba===0){bc.addClass(a7);}a9[J].push(bc);}return A;},_onClickMore:function(ba){var A=this;var bb=ba.target;var a9=bb.getData(aR);var bc=an.NodeList.create();an.Array.each(a9,function(be){var bd=be.get(v).item(0).clone();bd.setData(ag,be);bd.setStyles({height:"auto",left:0,position:"relative",top:0,width:"auto"});bc.push(bd);});A[O].bodyNode.one(l+b).setContent(bc);A[O].setAttrs({visible:true,xy:bb.getXY()});},_renderEventsOverlay:function(){var a9=this;var A=a9.get(M);a9[O]=new an.Overlay({align:{points:[a2,a2]},bodyContent:aa.sub(ap,{label:A[f]}),render:a9[P],visible:false,width:250,zIndex:450});a9[O].bodyNode.delegate("click",an.bind(a9.hideEventsOverlay,a9),l+aG);},_syncEventNodeContainerUI:function(a9,bb,ba){var A=this;bb.addClass(x);if(ba.left){bb.addClass(aO).prepend(y);}if(ba.right){bb.addClass(aZ).append(au);}},_syncEventNodeUI:function(bh,a9,bj){var bi=this;var bc=bi.get(U);var A=bc.get(L);var bb=bh.get(v);var ba=bh.get(aS);var bg=q.clearTime(bi._findCurrentIntervalStart());var bd=q.getFirstDayOfWeek(new Date(Math.max(ba,bg)),A);var bf=Math.floor(q.getDayOffset(bj,bd)/aY);if(bb.size()<=bf){bh.addPaddingNode();}var be=bb.item(bf);be.setStyles({height:"auto",left:0,top:0,width:"auto"});be.appendTo(a9);bh.syncUI();},_uiSetDate:function(a9){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;var a9=A.get(i);var ba=Math.min(a9,aY);return A._valueNodeList(ba,a0);},_valueTableGridNode:function(){var A=this;var a9=A.get(i);var ba=Math.min(a9,aY);return A._valueNodeList(ba,aE);},_valueNodeList:function(bb,ba){var A=this;var a9=[];while(bb--){a9.push(ba);}return an.NodeList.create(a9.join(S));}}});an.SchedulerTableView=e;},"@VERSION@",{requires:["aui-scheduler-base","overlay"],skinnable:true});