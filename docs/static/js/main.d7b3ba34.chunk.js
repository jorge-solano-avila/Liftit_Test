(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n(231)},173:function(e,t,n){},174:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),i=n.n(o),c=n(6),s=n(234),l={authenticated:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;switch((arguments.length>1?arguments[1]:void 0).type){case"LogIn/LOG_IN":return Object.assign({},e,{authenticated:!0});case"LogIn/SET_NOT_AUTHENTICATED":return Object.assign({},e,{authenticated:!1});default:return e}},m={serviceCreated:!1,sourceLocation:null,destinationLocation:null,distance:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"App/SERVICE_CREATED_SUCCESSFULLY":return Object.assign({},e,{serviceCreated:!0});case"App/SET_SOURCE_LOCATION":return Object.assign({},e,{sourceLocation:t.sourceLocation});case"App/SET_DESTINATION_LOCATION":return Object.assign({},e,{destinationLocation:t.destinationLocation});case"App/SET_DISTANCE":return Object.assign({},e,{distance:t.distance});default:return e}},p=Object(c.b)({app:d,logIn:u,form:s.a}),b=Object(c.c)(p),h=n(17),E=n(52),g=n(23),v=n(26),f=n(27),_=n(32),O=n(28),L=n(31),y=n(9),S=n(70),D=n.n(S),N=(n(173),n(233)),A=n(232),j=(n(174),function(e){var t=e.label,n=e.input,a=e.type,o=e.meta,i=o.touched,c=o.error,s=o.warning;return r.a.createElement("div",null,r.a.createElement("label",{className:"service-form__label"},t),r.a.createElement("br",null),r.a.createElement("div",null,a?r.a.createElement("input",Object.assign({className:"service-form__input"},n,{type:a})):r.a.createElement("textarea",Object.assign({rows:5,className:"service-form__textarea"},n)),r.a.createElement("br",null),i&&(c&&r.a.createElement("span",{className:"service-form__error"},c)||s&&r.a.createElement("span",null,s))),r.a.createElement("br",null),r.a.createElement("br",null))}),C=Object(A.a)({form:"service",validate:function(e){var t={},n=e.description,a=e.sourceAddress,r=e.destinationAddress;return n&&n.length>1e4&&(t.description="La descripci\xf3n debe tener m\xe1ximo 10.000 caracteres"),a?a.length>255&&(t.sourceAddress="La direcci\xf3n de origen debe tener m\xe1ximo 255 caracteres"):t.sourceAddress="Debes ingresar una direcci\xf3n de origen",r?r.length>255&&(t.destinationAddress="La direcci\xf3n de destino debe tener m\xe1ximo 255 caracteres"):t.destinationAddress="Debes ingresar una direcci\xf3n de destino",t}})(function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement(N.a,{name:"description",component:j,label:"Descripci\xf3n"}),r.a.createElement(N.a,{name:"sourceAddress",component:j,type:"text",label:"Direcci\xf3n de origen"}),r.a.createElement(N.a,{name:"destinationAddress",component:j,type:"text",label:"Direcci\xf3n de destino"}),r.a.createElement("div",null,r.a.createElement("button",{className:"service-form__button",type:"submit"},"Crear")))}),w=n(41),I=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.calculateDistance()}},{key:"componentDidUpdate",value:function(e){var t=e.sourceLocation,n=e.destinationLocation,a=this.props,r=a.sourceLocation,o=a.destinationLocation;t.lat!==r.lat||t.lng!==r.lng?this.calculateDistance():n.lat===o.lat&&n.lng===o.lng||this.calculateDistance()}},{key:"calculateDistance",value:function(){var e=this.props,t=e.google,n=e.sourceLocation,a=e.destinationLocation,r=e.onDistance;(new t.maps.DistanceMatrixService).getDistanceMatrix({origins:[n],destinations:[a],travelMode:"DRIVING",drivingOptions:{departureTime:new Date,trafficModel:"optimistic"}},function(e,t){if("OK"===t&&e.rows&&e.rows.length>0&&e.rows[0].elements&&e.rows[0].elements.length>0&&e.rows[0].elements[0].distance&&e.rows[0].elements[0].duration){var n={distance:e.rows[0].elements[0].distance.text,duration:e.rows[0].elements[0].duration.text};r(n)}else r(null)})}},{key:"render",value:function(){var e=this.props,t=e.google,n=e.sourceLocation,a=e.destinationLocation;return r.a.createElement(w.Map,{style:{position:"relative",width:"800px",height:"400px"},google:t,zoom:14,initialCenter:n},r.a.createElement(w.Marker,{title:"Origen",name:"Origen",position:n}),r.a.createElement(w.Marker,{title:"Destino",name:"Destino",position:a}))}}]),t}(a.Component),T=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyCgWMCE2RtiNMu3smD1tbbj1hP5VVsFAdQ"})(I),k=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):t},x=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(_.a)(this,Object(O.a)(t).call(this,e))).submit=n.submit.bind(Object(y.a)(Object(y.a)(n))),n.handleDistance=n.handleDistance.bind(Object(y.a)(Object(y.a)(n))),n.handleLogOut=n.handleLogOut.bind(Object(y.a)(Object(y.a)(n))),n}return Object(L.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history,t=k("session");D.a.setApiKey("AIzaSyCgWMCE2RtiNMu3smD1tbbj1hP5VVsFAdQ"),t||e.replace("/log-in")}},{key:"queryGeocode",value:function(e,t){var n=this.props,a=n.onSetSourceLocation,r=n.onSetDestinationLocation;D.a.fromAddress(t).then(function(t){var n=t.results[0];e?a(n.geometry.location):r(n.geometry.location)},function(e){console.error(e)})}},{key:"submit",value:function(e){var t=this.props.onServiceCreated,n=e.sourceAddress,a=e.destinationAddress;t(),this.queryGeocode(!0,n),this.queryGeocode(!1,a)}},{key:"handleDistance",value:function(e){(0,this.props.onSetDistance)(e)}},{key:"handleLogOut",value:function(){var e;this.props.history;e="session",localStorage.removeItem(e)}},{key:"renderMap",value:function(){var e=this.props,t=e.sourceLocation,n=e.destinationLocation;return t&&n?r.a.createElement("div",{className:"app__content__map"},r.a.createElement(T,{sourceLocation:t,destinationLocation:n,onDistance:this.handleDistance})):null}},{key:"render",value:function(){var e=this.props,t=e.serviceCreated,n=e.distance,a=t?r.a.createElement("span",{className:"app__content__created"},"\xa1Servicio creado exitosamente!"):null,o=n?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{className:"app__content__subtitle"},"Distancia: "),n.distance),r.a.createElement("p",null,r.a.createElement("span",{className:"app__content__subtitle"},"Duraci\xf3n: "),n.duration)):null,i=this.renderMap();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__content"},r.a.createElement("h2",{className:"app__content__title"},"Creaci\xf3n de servicio"),r.a.createElement("button",{className:"app__content__button",onClick:this.handleLogOut},r.a.createElement(E.b,{to:"/log-in"},"Cerrar sesi\xf3n")),r.a.createElement(C,{onSubmit:this.submit}),r.a.createElement("br",null),a,o,i))}}]),t}(a.Component),M=Object(h.b)(function(e,t){return{serviceCreated:e.app.serviceCreated,sourceLocation:e.app.sourceLocation,destinationLocation:e.app.destinationLocation,distance:e.app.distance}},function(e){return{onServiceCreated:function(){return e({type:"App/SERVICE_CREATED_SUCCESSFULLY"})},onSetSourceLocation:function(t){return e(function(e){return{type:"App/SET_SOURCE_LOCATION",sourceLocation:e}}(t))},onSetDestinationLocation:function(t){return e(function(e){return{type:"App/SET_DESTINATION_LOCATION",destinationLocation:e}}(t))},onSetDistance:function(t){return e(function(e){return{type:"App/SET_DISTANCE",distance:e}}(t))},dispatch:e}})(x),U=(n(229),n(230),function(e){var t=e.label,n=e.input,a=e.type,o=e.meta,i=o.touched,c=o.error,s=o.warning;return r.a.createElement("div",null,r.a.createElement("label",{className:"log-in-form__label"},t),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:"log-in-form__input"},n,{type:a})),r.a.createElement("br",null),i&&(c&&r.a.createElement("span",{className:"log-in-form__error"},c)||s&&r.a.createElement("span",null,s))),r.a.createElement("br",null),r.a.createElement("br",null))}),R=Object(A.a)({form:"logIn",validate:function(e){var t={},n=e.email,a=e.password;return n?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)?n.length>255&&(t.email="El correo debe tener m\xe1ximo 255 caracteres"):t.email="Debes ingresar un correo v\xe1lido":t.email="Debes ingresar un correo",a?a.length<8?t.password="La contrase\xf1a debe tener m\xednimo 8 caracteres":a.length>255&&(t.password="La contrase\xf1a debe tener m\xe1ximo 255 caracteres"):t.password="Debes ingresar una contrase\xf1a",t}})(function(e){var t=e.handleSubmit;return r.a.createElement("form",{className:"log-in-form",onSubmit:t},r.a.createElement(N.a,{name:"email",component:U,type:"text",label:"Correo electr\xf3nico"}),r.a.createElement(N.a,{name:"password",component:U,type:"password",label:"Contrase\xf1a"}),r.a.createElement("div",null,r.a.createElement("button",{className:"log-in-form__button",type:"submit"},"Ingresar")))}),G=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(_.a)(this,Object(O.a)(t).call(this,e))).submit=n.submit.bind(Object(y.a)(Object(y.a)(n))),n}return Object(L.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history,n=e.onSetNotAuthenticated;k("session")?t.push("/"):n()}},{key:"componentDidUpdate",value:function(e){var t=e.authenticated,n=this.props,a=n.authenticated,r=n.history;t!==a&&a&&r.push("/")}},{key:"submit",value:function(e){var t=this.props.onLogIn,n={email:e.email,password:e.password};!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("session",{authenticated:!0,token:"TestToken"}),t(n)}},{key:"render",value:function(){return r.a.createElement("div",{className:"log-in"},r.a.createElement("div",{className:"log-in__section"},r.a.createElement("h2",{className:"log-in__section__title"},"Iniciar sesi\xf3n"),r.a.createElement("div",{className:"log-in__section__form"},r.a.createElement(R,{onSubmit:this.submit}))))}}]),t}(a.Component),V=Object(h.b)(function(e,t){return{authenticated:e.logIn.authenticated}},function(e){return{onLogIn:function(t){return e(function(e){return{type:"LogIn/LOG_IN",credentials:e}}(t))},onSetNotAuthenticated:function(){return e({type:"LogIn/SET_NOT_AUTHENTICATED"})},dispatch:e}})(G),W=function(e){var t=e.store;return r.a.createElement(h.a,{store:t},r.a.createElement(E.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:M}),r.a.createElement(g.a,{path:"/log-in",component:V})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,{store:b}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.d7b3ba34.chunk.js.map