(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(354);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var r=n(178);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var a=n(367);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var d=n(525);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}))},178:function(e,t,n){var o=n(7),r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.ProcessEditor=void 0;var a=r(n(9)),d=r(n(69)),u=r(n(1)),i=r(n(10)),l=r(n(179)),c=n(177),s=n(96),f=o(n(361));t.ProcessEditor=function(e){var t=(0,s.useStateLink)(e.processNodesSL),n=(0,s.useStateLink)(e.processNodeConnectorsSL),o=u.default.useState({x:0,y:0}),r=(0,d.default)(o,2),p=r[0],m=r[1],v=u.default.useRef({x:0,y:0}).current,y=0,N=u.default.useMemo((function(){return l.default.create({onStartShouldSetPanResponder:function(e,t){return!0},onPanResponderGrant:function(e,t){y+=1,setTimeout((function(){y=0}),500)},onPanResponderMove:function(e,t){m({x:v.x+t.dx,y:v.y+t.dy})},onPanResponderRelease:function(t,n){v.x+=n.dx,v.y+=n.dy,2===y&&e.navigation.navigate({routeName:"Modal"})}})}),[]);return u.default.createElement(i.default,(0,a.default)({style:{flex:1,flexDirection:"row",overflow:"hidden",backgroundColor:"#999999"}},N.panHandlers),u.default.createElement(i.default,{style:{flex:1,zIndex:-1,transform:[{translateX:p.x},{translateY:p.y}]}},t.value&&t.value.map((function(t){return u.default.createElement(c.ProcessNodeDisplay,(0,a.default)({id:t.id},t,{processNodeConnectorsSL:e.processNodeConnectorsSL}))})),u.default.createElement(f.default,{height:"100%",width:"100%",style:{zIndex:2}},n.value&&n.value.map((function(e){return n.value.filter((function(t){return!e.in&&t.in&&e.idTargetNode==t.idNode&&e.idTargetNodeParameter==t.idParameter})).map((function(t){return console.log(e),console.log(t),u.default.createElement(f.Line,{x1:e.position.x+10,y1:e.position.y+10,x2:t.position.x+10,y2:t.position.y+10,stroke:"red",strokeWidth:"1"})}))})))))}},253:function(e,t,n){n(254),e.exports=n(255)},254:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},352:function(e,t,n){var o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(353)).default;t.default=r},353:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(177),r=n(36),a=(0,n(621).createStackNavigator)({Home:{screen:o.ProcessScreen},Modal:{screen:o.ModalScreen}},{initialRouteName:"Home",headerMode:"none"}),d=(0,r.createAppContainer)(a);t.default=d},354:function(e,t,n){var o=n(7),r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.ProcessScreen=void 0;var a=r(n(2)),d=r(n(3)),u=r(n(5)),i=r(n(4)),l=r(n(6)),c=o(n(1)),s=n(96),f=n(178),p=function(e){function t(){var e,n;(0,a.default)(this,t);for(var o=arguments.length,r=new Array(o),d=0;d<o;d++)r[d]=arguments[d];return(n=(0,u.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(r)))).processNodesSL=(0,s.createStateLink)([{id:1,type:1,desc:"Node 1",pos:{x:100,y:200},outputs:[{target:{idTargetNode:2,idTargetNodeParameter:0}}]},{id:2,type:1,desc:"Node 2",pos:{x:300,y:200},inputs:[{}],outputs:[{target:{idTargetNode:3,idTargetNodeParameter:0},value:"True"},{target:{idTargetNode:4,idTargetNodeParameter:0},value:"False"}]},{id:3,type:1,desc:"Node 3.1",pos:{x:500,y:150},inputs:[{}]},{id:4,type:1,desc:"Node 3.2",pos:{x:500,y:350},inputs:[{}]}]),n.processNodeConnectorsSL=(0,s.createStateLink)([]),n}return(0,l.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return c.default.createElement(f.ProcessEditor,{navigation:this.props.navigation,processNodesSL:this.processNodesSL,processNodeConnectorsSL:this.processNodeConnectorsSL})}}]),t}(c.PureComponent);t.ProcessScreen=p},367:function(e,t,n){var o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.ProcessNodeDisplay=void 0;var r=o(n(9)),a=o(n(1)),d=o(n(10)),u=o(n(26)),i=o(n(179)),l=o(n(11)),c=n(96),s=n(368),f=l.default.create({container:{position:"absolute",zIndex:1,alignSelf:"flex-start",width:150,padding:5,backgroundColor:"white"},connector:{width:20,height:20,borderRadius:10},inContent:{flexDirection:"row",alignSelf:"flex-start"},inConnector:{backgroundColor:"green"},outContent:{flexDirection:"row",alignSelf:"flex-end"},outConnector:{backgroundColor:"blue"}}),p=function(e){return a.default.createElement(d.default,{style:f.inContent},a.default.createElement(v,{direction:"in",idNode:e.idNode,idParameter:e.idParameter,idTargetNode:null,idTargetNodeParameter:null,processNodeConnectorsSL:e.processNodeConnectorsSL}),e.value&&a.default.createElement(u.default,null,e.value))},m=function(e){return a.default.createElement(d.default,{style:f.outContent},e.value&&a.default.createElement(u.default,null,e.value),a.default.createElement(v,{direction:"out",idNode:e.idNode,idParameter:e.idParameter,idTargetNode:e.target.idTargetNode,idTargetNodeParameter:e.target.idTargetNodeParameter,processNodeConnectorsSL:e.processNodeConnectorsSL}))},v=function(e){var t,n=(0,c.useStateLink)(e.processNodeConnectorsSL),o="in"==e.direction?"green":"blue";return a.default.createElement(d.default,{ref:function(e){t=e},onLayout:function(o){t&&t.measure((function(t,o,r,a,d,u){console.log(t),n.set((function(t){var n=t.filter((function(t){return!t.in&&t.idNode==e.idNode&&t.idParameter==e.idParameter}));return n.length>0?n[0].position={x:d,y:u}:t.push({idNode:e.idNode,idParameter:e.idParameter,in:"in"==e.direction,idTargetNode:e.idTargetNode,idTargetNodeParameter:e.idTargetNodeParameter,position:{x:d,y:u},size:{x:20,y:20}}),console.log(t),t}))}))}},a.default.createElement(s.Entypo,{name:"arrow-right",size:18,color:o}))};t.ProcessNodeDisplay=function(e){var t=a.default.useMemo((function(){return i.default.create({onStartShouldSetPanResponder:function(e,t){return!0},onPanResponderMove:function(e,t){}})}),[]);return console.log(e),a.default.createElement(d.default,(0,r.default)({style:[f.container,{top:e.pos.y,left:e.pos.x}]},t.panHandlers),a.default.createElement(d.default,null,a.default.createElement(u.default,null,e.desc)),a.default.createElement(d.default,{style:{flexDirection:"row"}},a.default.createElement(d.default,{style:{flex:1}},e.inputs&&e.inputs.map((function(t,n){return a.default.createElement(p,(0,r.default)({},t,{idNode:e.id,idParameter:n,processNodeConnectorsSL:e.processNodeConnectorsSL}))}))),a.default.createElement(d.default,{style:{flex:1}},e.outputs&&e.outputs.map((function(t,n){return a.default.createElement(m,(0,r.default)({},t,{idNode:e.id,idParameter:n,processNodeConnectorsSL:e.processNodeConnectorsSL}))})))))}},525:function(e,t,n){var o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalScreen=void 0;var r=o(n(2)),a=o(n(3)),d=o(n(5)),u=o(n(4)),i=o(n(6)),l=o(n(1)),c=o(n(10)),s=o(n(26)),f=function(e){function t(){return(0,r.default)(this,t),(0,d.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,i.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return l.default.createElement(c.default,{style:{flex:1,alignItems:"center",justifyContent:"center"}},l.default.createElement(s.default,{style:{fontSize:30}},"This is a modal!"))}}]),t}(l.default.Component);t.ModalScreen=f}},[[253,1,2]]]);
//# sourceMappingURL=../../be85a31d27e6363a3c93.map