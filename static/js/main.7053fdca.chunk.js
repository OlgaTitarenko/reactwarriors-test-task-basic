(window["webpackJsonpreactwarriors-test-task-basic"]=window["webpackJsonpreactwarriors-test-task-basic"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),i=n(3),m=n(4),c=n(6),l=n(5),u=n(7);var f=function(e){var t=e.data;return r.a.createElement("div",{className:"item"},"self"!==t.thumbnail?r.a.createElement("img",{src:t.thumbnail,alt:""}):null,r.a.createElement("p",null,t.title),r.a.createElement("p",null,"Number of comments ",t.num_comments),r.a.createElement("a",{href:"https://www.reddit.com"+t.permalink,target:"_blank",rel:"noopener noreferrer"},"Link"))},h=(n(13),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],isLoading:!1,autoRefresh:!1,minComm:0},n.getItems=function(){n.setState({isLoading:!0}),fetch("https://www.reddit.com/r/reactjs.json?limit=100").then((function(e){return e.json()})).then((function(e){var t=e.data;n.setState({items:t.children,isLoading:!1})}))},n.handleRefresh=function(){n.state.autoRefresh?(n.setState({autoRefresh:!1}),clearInterval(n.autoRefreshInt)):(n.setState({autoRefresh:!0}),n.autoRefreshInt=setInterval(n.getItems,4e3))},n.updateMinComm=function(e){n.setState({minComm:+e.target.value})},n}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.isLoading,a=e.autoRefresh,o=e.minComm,s=t.filter((function(e){return e.data.num_comments>=o})).sort((function(e,t){return t.data.num_comments-e.data.num_comments})),i=0;return 0!==s.length&&(i=s[0].data.num_comments),r.a.createElement("div",null,r.a.createElement("h1",null,"Top commented"),r.a.createElement("button",{type:"button",onClick:this.handleRefresh,className:"btnRefresh"}," ",a?"Stop":"Start"," auto-refresh"),r.a.createElement("p",null,"Current filter ",o),r.a.createElement("input",{type:"range",value:o,onChange:this.updateMinComm,min:0,max:i}),n?r.a.createElement("p",null,"Is loading"):r.a.createElement("div",{className:"itemList"},s.length>0?s.map((function(e){var t=e.data;return r.a.createElement(f,{data:t,key:t.id})})):r.a.createElement("p",null,"No results found matching your criteria")))}}]),t}(r.a.Component));s.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7053fdca.chunk.js.map