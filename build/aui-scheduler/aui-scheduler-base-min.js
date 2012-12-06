AUI.add("aui-scheduler-base",function(aP){var aw=aP.Lang,d=aw.isArray,bg=aw.isBoolean,k=aw.isDate,bb=aw.isFunction,ah=aw.isNumber,T=aw.isObject,bn=aw.isString,aQ=aw.isValue,a6=aP.ColorUtil,p=aP.DataType.DateMath,aI=aP.WidgetStdMod,aJ=":",m=".",ak="",F="&ndash;",bz=" ",x=function(A){return A instanceof aP.ModelList;},E=function(A){return A instanceof aP.SchedulerView;},i="%H:%M",Z="%l",bx="%M",ax=function(A){var bB=[Z];if(A.getMinutes()>0){bB.push(aJ);bB.push(bx);}if(A.getHours()>=12){bB.push("p");}return bB.join(ak);},aY="data-view-name",D="scheduler-base",V="scheduler-calendar",aK="scheduler-view",ac="activeView",J="all",Y="allDay",ad="borderColor",aV="borderColorRGB",aO="borderStyle",bu="borderWidth",aR="button",bl="clearfix",a7="color",a0="colorBrightnessFactor",bi="colorSaturationFactor",aN="content",ab="controls",a3="controlsNode",a1="date",bd="day",I="disabled",aW="endDate",aq="eventRecorder",bw="hd",K="header",bj="headerNode",u="helper",aD="hidden",U="hsbColor",aC="icon",r="iconNextNode",ba="iconPrevNode",ag="icons",at="inherit",a2="isoTime",bt="locale",br="meeting",t="name",ay="nav",ap="navNode",f="navigationDateFormatter",v="next",h="nextDate",y="node",au="noscroll",aj="pallete",bh="prev",a4="prevDate",bc="radio",am="reminder",bv="rendered",bm="repeated",ao="scheduler",aE="scheduler-event",bq="scrollable",a="short",bp="startDate",aa="strings",aZ="title",j="titleDateFormat",l="today",aS="todayNode",H="triggerNode",S="view",X="viewDateNode",ar="viewStack",by="views",aH="viewsNode",aA="visible",R=aP.getClassName,aT=R(u,bl),q=R(aC),a8=R(D,ab),o=R(D,bw),aG=R(D,aC,v),W=R(D,aC,bh),bo=R(D,ay),P=R(D,l),aL=R(D,S),n=R(D,S,ak),N=R(D,S,a1),C=R(aK,au),c=R(aK,bq),ai="yui3-button-selected",B=R(D,by),z=R(aE),Q=R(aE,J,bd),aX=R(aE,aN),bk=R(aE,I),L=R(aE,aD),G=R(aE,aC,I),O=R(aE,aC,br),aB=R(aE,aC,am),e=R(aE,aC,bm),bs=R(aE,ag),b=R(aE,br),w=R(aE,am),aF=R(aE,bm),av=R(aE,a),M=R(aE,aZ),a5='<div class="'+a8+'"></div>',g='<div class="'+o+'"></div>',bA='<button type="button" class="'+[q,aG].join(bz)+' yui3-button">Next</button>',aU='<button type="button" class="'+[q,W].join(bz)+' yui3-button">Prev</button>',s='<div class="'+bo+'"></div>',az='<button type="button" class="'+P+' yui3-button">{today}</button>',bf='<button type="button" class="'+[aL,n].join(bz)+'{name}" data-view-name="{name}">{label}</button>',aM='<div class="'+N+'"></div>',al='<div class="'+B+'"></div>';var ae=aP.Component.create({NAME:aE,ATTRS:{allDay:{setter:aP.DataType.Boolean.parse,value:false},borderStyle:{value:"solid",validator:bn},borderWidth:{value:"1px",validator:bn},colorBrightnessFactor:{value:0.75,validator:ah},colorSaturationFactor:{value:1.5,validator:ah},content:{setter:String,validator:aQ},color:{lazyAdd:false,setter:"_setColor",value:"#D96666",validator:bn},titleDateFormat:{getter:"_getTitleDateFormat",value:function(){var A=this,bB=A.get(ao),bC=bB&&bB.get(ac).get(a2),bD={endDate:F+bz+i,startDate:i};if(!bC){bD.endDate=F+bz+ax(A.get(aW));bD.startDate=ax(A.get(bp));}if(A.getMinutesDuration()<=30){delete bD.endDate;}else{if(A.get(Y)){bD={};}}return bD;}},endDate:{setter:"_setDate",valueFn:function(){var A=p.clone(this.get(bp));A.setHours(A.getHours()+1);return A;}},disabled:{value:false,validator:bg},meeting:{value:false,validator:bg},node:{valueFn:function(){return aP.NodeList.create(aP.Node.create(this.EVENT_NODE_TEMPLATE).setData(aE,this));}},reminder:{value:false,validator:bg},repeated:{value:false,validator:bg},scheduler:{},startDate:{setter:"_setDate",valueFn:function(){return new Date();}},visible:{value:true,validator:bg}},EXTENDS:aP.Model,PROPAGATE_ATTRS:[Y,bp,aW,aN,a7,a0,bi,aO,bu,j,aA,I],prototype:{EVENT_NODE_TEMPLATE:'<div class="'+z+'">'+'<div class="'+M+'"></div>'+'<div class="'+aX+'"></div>'+'<div class="'+bs+'">'+'<span class="'+[q,G].join(bz)+'"></span>'+'<span class="'+[q,O].join(bz)+'"></span>'+'<span class="'+[q,aB].join(bz)+'"></span>'+'<span class="'+[q,e].join(bz)+'"></span>'+"</div>"+"</div>",initializer:function(){var A=this;A.bindUI();A.syncUI();},bindUI:function(){var A=this;A.after({allDayChange:A._afterAllDayChange,colorChange:A._afterColorChange,disabledChange:A._afterDisabledChange,endDateChange:A._afterEndDateChange,meetingChange:A._afterMeetingChange,reminderChange:A._afterReminderChange,repeatedChange:A._afterRepeatedChange,visibleChange:A._afterVisibleChange});},syncUI:function(){var A=this;A._uiSetAllDay(A.get(Y));A._uiSetColor(A.get(a7));A._uiSetDisabled(A.get(I));A._uiSetEndDate(A.get(aW));A._uiSetMeeting(A.get(br));A._uiSetReminder(A.get(am));A._uiSetRepeated(A.get(bm));A._uiSetVisible(A.get(aA));A.syncNodeTitleUI();A.syncNodeContentUI();},destroy:function(){var A=this;A.get(y).remove(true);},addPaddingNode:function(){var A=this;A.get(y).push(aP.Node.create(A.EVENT_NODE_TEMPLATE).setData(aE,A));A.syncUI();},clone:function(){var bB=this,A=null,bC=bB.get(ao);if(bC){A=new bC.eventModel();A.copyPropagateAttrValues(bB,null,{silent:true});}return A;},copyDates:function(bB,bC){var A=this;A.setAttrs({endDate:p.clone(bB.get(aW)),startDate:p.clone(bB.get(bp))},bC);},copyPropagateAttrValues:function(bC,bE,bD){var A=this,bB={};A.copyDates(bC,bD);aP.Array.each(A.constructor.PROPAGATE_ATTRS,function(bF){if(!((bE||{}).hasOwnProperty(bF))){var bG=bC.get(bF);if(!T(bG)){bB[bF]=bG;}}});A.setAttrs(bB,bD);},getBorderColor:function(){var A=this;return A[aV].hex;},getDaysDuration:function(){var A=this;return p.getDayOffset(A.get(aW),A.get(bp));},getHoursDuration:function(){var A=this;return p.getHoursOffset(A.get(aW),A.get(bp));},getMinutesDuration:function(){var A=this;return p.getMinutesOffset(A.get(aW),A.get(bp));},getSecondsDuration:function(){var A=this;return p.getSecondsOffset(A.get(aW),A.get(bp));},sameEndDate:function(bB){var A=this;return p.compare(A.get(aW),bB.get(aW));},sameStartDate:function(bB){var A=this;return p.compare(A.get(bp),bB.get(bp));},isAfter:function(bD){var bC=this;var bB=bC.get(bp);var A=bD.get(bp);return p.after(bB,A);},isBefore:function(bD){var bC=this;var bB=bC.get(bp);var A=bD.get(bp);
return p.before(bB,A);},intersects:function(bD){var bC=this;var bE=bC.get(aW);var bB=bC.get(bp);var A=bD.get(bp);return(bC.sameStartDate(bD)||p.between(A,bB,bE));},intersectHours:function(bC){var bB=this;var bE=bB.get(aW);var A=bB.get(bp);var bD=p.clone(A);p.copyHours(bD,bC.get(bp));return(p.compare(A,bD)||p.between(bD,A,bE));},isDayBoundaryEvent:function(){var A=this;return p.isDayBoundary(A.get(bp),A.get(aW));},isDayOverlapEvent:function(){var A=this;return p.isDayOverlap(A.get(bp),A.get(aW));},getClearEndDate:function(){var A=this;return p.safeClearTime(A.get(aW));},getClearStartDate:function(){var A=this;return p.safeClearTime(A.get(bp));},move:function(bC,bB){var A=this;var bD=A.getMinutesDuration();A.setAttrs({endDate:p.add(p.clone(bC),p.MINUTES,bD),startDate:bC},bB);},setContent:function(bB){var A=this;A.get(y).each(function(bD){var bC=bD.one(m+aX);bC.setContent(bB);});},setTitle:function(bB){var A=this;A.get(y).each(function(bC){var bD=bC.one(m+M);bD.setContent(bB);});},syncNodeContentUI:function(){var A=this;A.setContent(A.get(aN));},syncNodeTitleUI:function(){var bB=this,bD=bB.get(j),A=bB.get(bp),bC=bB.get(aW),bE=[];if(bD.startDate){bE.push(bB._formatDate(A,bD.startDate));}if(bD.endDate){bE.push(bB._formatDate(bC,bD.endDate));}bB.setTitle(bE.join(bz));},split:function(){var A=this,bC=p.clone(A.get(bp)),bD=p.clone(A.get(aW));if(A.isDayOverlapEvent()&&!A.isDayBoundaryEvent()){var bB=p.clone(bC);bB.setHours(24,0,0,0);return[[bC,p.toMidnight(p.clone(bC))],[bB,p.clone(bD)]];}return[[bC,bD]];},_afterAllDayChange:function(bB){var A=this;A._uiSetAllDay(bB.newVal);},_afterColorChange:function(bB){var A=this;A._uiSetColor(bB.newVal);},_afterDisabledChange:function(bB){var A=this;A._uiSetDisabled(bB.newVal);},_afterEndDateChange:function(bB){var A=this;A._uiSetEndDate(bB.newVal);},_afterMeetingChange:function(bB){var A=this;A._uiSetMeeting(bB.newVal);},_afterReminderChange:function(bB){var A=this;A._uiSetReminder(bB.newVal);},_afterRepeatedChange:function(bB){var A=this;A._uiSetRepeated(bB.newVal);},_afterVisibleChange:function(bB){var A=this;A._uiSetVisible(bB.newVal);},_setColor:function(bB){var A=this;A[U]=a6.rgb2hsb(a6.getRGB(bB));A[ad]=aP.clone(A[U]);A[ad].b*=A.get(a0);A[ad].s*=A.get(bi);A[aV]=a6.hsb2rgb(A[ad]);return bB;},_setDate:function(bB){var A=this;if(ah(bB)){bB=new Date(bB);}return bB;},_formatDate:function(bC,bD){var bB=this;var A=bB.get(bt);return aP.DataType.Date.format(bC,{format:bD,locale:A});},_getTitleDateFormat:function(bB){var A=this;if(bn(bB)){bB={endDate:bB,startDate:bB};}else{if(bb(bB)){bB=bB.call(A);}}return bB;},_uiSetAllDay:function(bB){var A=this;A.get(y).toggleClass(Q,!!bB);},_uiSetColor:function(bD){var A=this;var bC=A.get(y);var bE=A.getBorderColor();if(bC){var bB={borderWidth:A.get(bu),borderColor:bE,backgroundColor:bD,borderStyle:A.get(aO),color:at};bC.setStyles(bB);}},_uiSetDisabled:function(bB){var A=this;A.get(y).toggleClass(bk,!!bB);},_uiSetEndDate:function(bB){var A=this;A.get(y).toggleClass(av,A.getMinutesDuration()<=30);},_uiSetMeeting:function(bB){var A=this;A.get(y).toggleClass(b,!!bB);},_uiSetReminder:function(bB){var A=this;A.get(y).toggleClass(w,!!bB);},_uiSetRepeated:function(bB){var A=this;A.get(y).toggleClass(aF,!!bB);},_uiSetVisible:function(bB){var A=this;A.get(y).toggleClass(L,!bB);}}});aP.SchedulerEvent=ae;var a9=aP.Base.create(V,aP.ModelList,[],{model:aP.SchedulerEvent,initializer:function(){var A=this;A.after("colorChange",A._afterColorChange);A.after("disabledChange",A._afterDisabledChange);A.after("visibleChange",A._afterVisibleChange);A.after(["add","remove","reset"],A._afterEventsChange);A.on(["remove","reset"],A._onRemoveEvents);A._uiSetEvents(A.toArray());A._setModelsAttrs({color:A.get(a7),disabled:A.get(I),visible:A.get(aA)});},_afterColorChange:function(bB){var A=this;A._setModelsAttrs({color:A.get(a7)},{silent:bB.silent});},_afterDisabledChange:function(bB){var A=this;A._setModelsAttrs({disabled:A.get(I)},{silent:bB.silent});},_afterEventsChange:function(bB){var A=this;A._setModelsAttrs({color:A.get(a7),disabled:A.get(I),visible:A.get(aA)},{silent:true});A._uiSetEvents(A.toArray());},_afterVisibleChange:function(bB){var A=this;A._setModelsAttrs({visible:A.get(aA)},{silent:bB.silent});},_onRemoveEvents:function(bC){var A=this;var bB=A.get(ao);if(bB){bB.removeEvents(A);}},_setModelsAttrs:function(bB,bC){var A=this;A.each(function(bD){bD.setAttrs(bB,bC);});},_uiSetEvents:function(bC){var A=this;var bB=A.get(ao);if(bB){bB.addEvents(bC);bB.syncEventsUI();}}},{ATTRS:{color:{valueFn:function(){var bB=this;var bC=bB.get(aj);var A=Math.ceil(Math.random()*bC.length)-1;return bC[A];},validator:bn},disabled:{value:false,validator:bg},name:{value:"(no name)",validator:bn},pallete:{value:["#d96666","#e67399","#b373b3","#8c66d9","#668cb3","#668cd9","#59bfb3","#65ad89","#4cb052","#8cbf40","#bfbf4d","#e0c240","#f2a640","#e6804d","#be9494","#a992a9","#8997a5","#94a2be","#85aaa5","#a7a77d","#c4a883","#c7561e","#b5515d","#c244ab","#603f99","#536ca6","#3640ad","#3c995b","#5ca632","#7ec225","#a7b828","#cf9911","#d47f1e","#b56414","#914d14","#ab2671","#9643a5","#4585a3","#737373","#41a587","#d1bc36","#ad2d2d"],validator:d},scheduler:{},visible:{value:true,validator:bg}}});aP.SchedulerCalendar=a9;aP.SchedulerEvents=aP.Base.create("scheduler-events",aP.ModelList,[],{comparator:function(bB){var A=bB.get(bp),bC=bB.get(aW);return A+1/(bC-A);},model:aP.SchedulerEvent},{ATTRS:{scheduler:{}}});var an=function(){};an.ATTRS={};aP.mix(an.prototype,{calendarModel:aP.SchedulerCalendar,eventModel:aP.SchedulerEvent,eventsModel:aP.SchedulerEvents,initializer:function(bB){var A=this;A._events=new A.eventsModel({after:{add:aP.bind(A._afterAddEvent,A)},bubbleTargets:A,scheduler:A});A.addEvents(bB.items||bB.events);},addEvents:function(bC){var A=this,bB=A._toSchedulerEvents(bC);return A._events.add(bB);},eachEvent:function(bB){var A=this;return A._events.each(bB);},flushEvents:function(){var A=this;A._events.each(function(bB){delete bB._filtered;});},getEventByClientId:function(bB){var A=this;
return A._events.getByClientId(bB);},getEvents:function(bC){var A=this,bB=A._events;bB.sort({silent:true});if(bC){bB=bB.filter(bC);}else{bB=bB.toArray();}return bB;},getEventsByDay:function(bB,bC){var A=this;bB=p.safeClearTime(bB);return A.getEvents(function(bD){return p.compare(bD.getClearStartDate(),bB)||(bC&&p.compare(bD.getClearEndDate(),bB));});},getIntersectEvents:function(bB){var A=this;bB=p.safeClearTime(bB);return A.getEvents(function(bD){var bC=bD.getClearStartDate();var bE=bD.getClearEndDate();return(bD.get(aA)&&(p.compare(bB,bC)||p.compare(bB,bE)||p.between(bB,bC,bE)));});},removeEvents:function(bC){var A=this,bB=A._toSchedulerEvents(bC);return A._events.remove(bB);},resetEvents:function(bC){var A=this,bB=A._toSchedulerEvents(bC);return A._events.reset(bB);},_afterAddEvent:function(bB){var A=this;bB.model.set(ao,A);},_toSchedulerEvents:function(bB){var A=this,bC=[];if(x(bB)){bC=bB.toArray();bB.set(ao,A);}else{if(d(bB)){aP.Array.each(bB,function(bD){if(x(bD)){bC=bC.concat(bD.toArray());bD.set(ao,A);}else{bC.push(bD);}});}else{bC=bB;}}return bC;}});aP.SchedulerEventSupport=an;var af=aP.Component.create({NAME:D,ATTRS:{activeView:{validator:E},date:{value:new Date(),validator:k},eventRecorder:{setter:"_setEventRecorder"},strings:{value:{agenda:"Agenda",day:"Day",month:"Month",today:"Today",week:"Week",year:"Year"}},navigationDateFormatter:{value:function(bB){var A=this;return aP.DataType.Date.format(bB,{format:"%B %d, %Y",locale:A.get(bt)});},validator:bb},views:{setter:"_setViews",value:[]},viewDate:{getter:"_getViewDate",readOnly:true},firstDayOfWeek:{value:0,validator:ah},controlsNode:{valueFn:function(){return aP.Node.create(a5);}},viewDateNode:{valueFn:function(){return aP.Node.create(aM);}},headerNode:{valueFn:function(){return aP.Node.create(g);}},iconNextNode:{valueFn:function(){return aP.Node.create(bA);}},iconPrevNode:{valueFn:function(){return aP.Node.create(aU);}},navNode:{valueFn:function(){return aP.Node.create(s);}},todayNode:{valueFn:function(){return aP.Node.create(this._processTemplate(az));}},viewsNode:{valueFn:function(){return aP.Node.create(al);}}},HTML_PARSER:{controlsNode:m+a8,viewDateNode:m+N,headerNode:m+o,iconNextNode:m+aG,iconPrevNode:m+W,navNode:m+bo,todayNode:m+P,viewsNode:m+B},UI_ATTRS:[a1,ac],AUGMENTS:[aP.SchedulerEventSupport,aP.WidgetStdMod],prototype:{viewStack:null,initializer:function(){var A=this;A[ar]={};A[a3]=A.get(a3);A[X]=A.get(X);A[K]=A.get(bj);A[r]=A.get(r);A[ba]=A.get(ba);A[ap]=A.get(ap);A[aS]=A.get(aS);A[aH]=A.get(aH);A.after({activeViewChange:A._afterActiveViewChange,render:A._afterRender});},bindUI:function(){var A=this;A._bindDelegate();},syncUI:function(){var A=this;A.syncStdContent();},getViewByName:function(bB){var A=this;return A[ar][bB];},getStrings:function(){var A=this;return A.get(aa);},getString:function(bB){var A=this;return A.getStrings()[bB];},renderView:function(bB){var A=this;if(bB){bB.show();if(!bB.get(bv)){if(!A.bodyNode){A.setStdModContent(aI.BODY,ak);}bB.render(A.bodyNode);}}},plotViewEvents:function(bB){var A=this;bB.plotEvents(A.getEvents());},syncEventsUI:function(){var A=this,bB=A.get(ac);if(bB){A.plotViewEvents(bB);}},renderButtonGroup:function(){var A=this;A.buttonGroup=new aP.ButtonGroup({srcNode:A[aH],type:bc,on:{selectionChange:aP.bind(A._onButtonGroupSelectionChange,A)}}).render();},syncStdContent:function(){var A=this;var bB=A.get(by);A[ap].append(A[ba]);A[ap].append(A[r]);A[a3].append(A[aS]);A[a3].append(A[ap]);A[a3].append(A[X]);aP.Array.each(bB,function(bC){A[aH].append(A._createViewTriggerNode(bC));});A[K].append(A[a3]);A[K].append(A[aH]);A[K].addClass(aT);A.setStdModContent(aI.HEADER,A[K].getDOM());},_afterActiveViewChange:function(bD){var bB=this;if(bB.get(bv)){var bC=bD.newVal;var A=bD.prevVal;if(A){A.hide();}bB.renderView(bC);var bE=bB.get(aq);if(bE){bE.hideOverlay();}bB._uiSetDate(bB.get(a1));}},_afterRender:function(bC){var A=this,bB=A.get(ac);A.renderView(bB);A.renderButtonGroup();A._uiSetDate(A.get(a1));A._uiSetActiveView(bB);},_bindDelegate:function(){var A=this;A[a3].delegate("click",A._onClickPrevIcon,m+W,A);A[a3].delegate("click",A._onClickNextIcon,m+aG,A);A[a3].delegate("click",A._onClickToday,m+P,A);},_createViewTriggerNode:function(bB){var A=this;if(!bB.get(H)){var bC=bB.get(t);bB.set(H,aP.Node.create(aw.sub(bf,{name:bC,label:(A.getString(bC)||bC)})));}return bB.get(H);},_getViewDate:function(){var A=this,bB=A.get(a1),bC=A.get(ac);if(bC){bB=bC.getAdjustedViewDate(bB);}return bB;},_onClickToday:function(bC){var A=this,bB=A.get(ac);if(bB){A.set(a1,bB.getToday());}bC.preventDefault();},_onClickNextIcon:function(bC){var A=this,bB=A.get(ac);if(bB){A.set(a1,bB.get(h));}bC.preventDefault();},_onClickPrevIcon:function(bC){var A=this,bB=A.get(ac);if(bB){A.set(a1,bB.get(a4));}bC.preventDefault();},_onButtonGroupSelectionChange:function(bB){var A=this,bC=bB.originEvent.target.attr(aY);A.set(ac,A.getViewByName(bC));bB.preventDefault();},_processTemplate:function(bB){var A=this;return aw.sub(bB,A.getStrings());},_setEventRecorder:function(bB){var A=this;if(bB){bB.setAttrs({scheduler:A},{silent:true});bB.addTarget(A);}},_setViews:function(bC){var A=this;var bB=[];aP.Array.each(bC,function(bD){if(E(bD)&&!bD.get(bv)){bD.setAttrs({scheduler:A});bB.push(bD);A[ar][bD.get(t)]=bD;}});if(!A.get(ac)){A.set(ac,bC[0]);}return bB;},_uiSetActiveView:function(bD){var A=this;if(bD){var bC=bD.get(t),bB=A[aH].one(m+n+bC);if(bB){A[aH].all(aR).removeClass(ai);bB.addClass(ai);}}},_uiSetDate:function(bE){var bB=this;var bD=bB.get(f);var A=bD.call(bB,bE);if(bB.get(bv)){var bC=bB.get(ac);if(bC){bC._uiSetDate(bE);bD=bC.get(f);A=bD.call(bC,bE);}bB[X].html(A);bB.syncEventsUI();}}}});aP.Scheduler=af;var be=aP.Component.create({NAME:aK,AUGMENTS:[aP.WidgetStdMod],ATTRS:{bodyContent:{value:ak},filterFn:{validator:bb,value:function(A){return true;}},height:{value:600},isoTime:{value:false,validator:bg},name:{value:ak,validator:bn},navigationDateFormatter:{value:function(bB){var A=this;var bC=A.get(ao);return aP.DataType.Date.format(bB,{format:"%A, %d %B, %Y",locale:bC.get(bt)});
},validator:bb},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:bg},triggerNode:{setter:aP.one},visible:{value:false}},BIND_UI_ATTRS:[bq],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},getAdjustedViewDate:function(bB){var A=this;return p.toMidnight(bB);},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return p.clearTime(new Date());},limitDate:function(bB,bC){var A=this;if(p.after(bB,bC)){bB=p.clone(bC);}return bB;},plotEvents:function(){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetDate:function(A){},_afterRender:function(bC){var A=this;var bB=A.get(ao);A._uiSetScrollable(A.get(bq));},_setScheduler:function(bC){var A=this;var bB=A.get(ao);if(bB){A.removeTarget(bB);}if(bC){A.addTarget(bC);bC.after(["*:add","*:remove","*:reset"],aP.bind(A.flushViewCache,A));}return bC;},_uiSetScrollable:function(bC){var A=this;var bB=A.bodyNode;if(bB){bB.toggleClass(c,bC);bB.toggleClass(C,!bC);}}}});aP.SchedulerView=be;},"@VERSION@",{requires:["aui-base","aui-color-util","aui-datatype","button-group","model","model-list","widget-stdmod"],skinnable:true});