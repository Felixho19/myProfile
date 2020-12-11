(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"title":"","studies":[{"institute":"The University of Hong Kong","logo":"images/hku-logo.png","url":"http://www.hku.hk/","title":"Bachelor on Computer Science","durationInYears":"4","graduationYear":2019}],"certifications":[],"projects":[{"projectName":"Anti-Emulator plugin for Cuckoodroid by Frida","logo":"/images/cuckoodroid.png","url":"https://github.com/Felixho19/CuckooWithFrida","description":"Cuckoodroid is using to perform malware analysis for the android platform. The anti-emulator plugin is a key required to run since most malware behaviors aren\'t run in the emulator. This project attempts to observe the possibility to implement this feature with more emulation options.","stacks":["Python 2 and 3","Android","MongoDB"]},{"projectName":"GoGoCoach","logo":"/images/gogocoach_icon.png","url":"https://github.com/Felixho19/go-go-coach","description":"An Android appliction for matching users and coaches, based on Geolocation.","stacks":["Android","Firebase","Google API"]},{"projectName":"Tutoria - Tutor-broking system for university students","logo":"/images/Endeavor.jpg","url":"https://github.com/Felixho19/Tutoria","description":"It was a group assignment for a software engineering course in the 2nd semester and done in 2017. I was responsible for the booking system.","stacks":["Django Web framwork","JQuery","SQlite"]},{"projectName":"SG airline app challenge for lounge services","logo":"/images/sghack.png","url":"https://felixho19.github.io/SGapp/","description":"A demo application of personalized dining services: Tracking the utilization of space; Analyzing the dishes\' nutritional content; Collecting data on meal consumption for improving customer experience.","stacks":["ReactJS","Bootstrap","Material-UI"]}],"experiences":[{"company":"PCCW Solutions Ltd","url":"https://www.pccwsolutions.com/site/en/home","roles":[{"title":"Graduate Trainee","start_date":"Aug 2019","end_date":"Current"}]},{"company":"Messer Financial Software Ltd","url":"https://messerfs.com/","roles":[{"title":"3-month Computer Science Intern","start_date":"Jun 2018","end_date":"Aug 2018"}]}]}')},27:function(e){e.exports=JSON.parse('{"skills":[{"name":"Spoken Languages","items":["Cantonese: Native","English: Business","Japanese: Basic"]},{"name":"Programming Languages","items":["Python 2/3","C/C++","Java 8","Haskell","JavaScript ES6","Bash","SQL","PHP"]},{"name":"Messaging middleware","items":["Apache Kafka","Solace PubSub+"]},{"name":"Web development","items":["Web frontend framework: React, Vue.js, Angular.js, JQuery","Web backend framework: Django, Flask","HTML5, CSS","MEAN stack (MongoDB + Express.js + React + Node.js)","Mule API"]},{"name":"Mobile development","items":["Android app (Java)","Firebase"]},{"name":"DevOps","items":["Version Control: Git","Cloud Platform: AWS, Azure","CI/CD: Jenkins, ansible-playbook","Docker"]}]}')},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),i=(a(37),a(8)),c=a(9),s=a(11),m=a(10),u=(a(38),a(15)),p=a(48),d=a(52),g=a(53),h=a(58),b=a(54),E=a(55),f=a(24),k=a(46),v=a(57),j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{className:"card-deck"},f.projects.map((function(e,t){return r.a.createElement(v.a,{key:t,className:"card mb-4",style:{width:"18rem"}},r.a.createElement(v.a.Img,{className:"cardImage",varient:"top",src:"/myProfile"+e.logo,alt:e.projectName}),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,r.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},e.projectName)),r.a.createElement(v.a.Text,null,e.description)),r.a.createElement(v.a.Footer,null,r.a.createElement("h5",null,"Implemented by"),r.a.createElement("ul",null,e.stacks.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))})))}}]),a}(r.a.Component),y=a(47);function w(){return r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement("h1",{className:"banner display-3"},"Felix Ho"),r.a.createElement("div",{className:"mask"},r.a.createElement("p",{className:"desc"},"Seeking for software engineer job worldwide"))))}var C=a(49),O=a(50),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(C.a,null,r.a.createElement(O.a,{className:"page"},r.a.createElement("p",null,"Hi, this website is using for exhibiting my worked projects."),r.a.createElement("p",null,"Feel free to contact me via Linkedin. (Link at the bottom)"))))}}]),a}(r.a.Component),N=a(51),A=a(27),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement("h2",null,"Technical Skills"),r.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Area"),r.a.createElement("th",null,"Detail"))),r.a.createElement("tbody",null,A.skills.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("ul",null,e.items.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))})))))}}]),a}(r.a.Component),x=a(56),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={activeTab:"0"},n.toggle=n.toggle.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e.target.id&&this.setState({activeTab:e.target.id})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(p.a,null,r.a.createElement(x.a,{bg:"light",expand:"lg"},r.a.createElement(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{tabs:!0},r.a.createElement(g.a,null,r.a.createElement(h.a,{id:"0",onClick:this.toggle},"Introduction")),r.a.createElement(g.a,null,r.a.createElement(h.a,{id:"1",onClick:this.toggle},"Selected Projects")),r.a.createElement(g.a,null,r.a.createElement(h.a,{id:"2",onClick:this.toggle},"Profiles"))))),r.a.createElement(b.a,{activeTab:this.state.activeTab},r.a.createElement(E.a,{tabId:"0"},r.a.createElement(S,null)),r.a.createElement(E.a,{tabId:"1"},r.a.createElement(j,null)),r.a.createElement(E.a,{tabId:"2"},r.a.createElement(T,null)))))}}]),a}(r.a.Component),F=a(20),J=a(22),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement(p.a,null,r.a.createElement("a",{href:"https://www.linkedin.com/in/felix-ho-b69878155/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(F.a,{icon:J.b})),r.a.createElement("a",{href:"https://github.com/Felixho19",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(F.a,{icon:J.a}))))}}]),a}(r.a.Component),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={webSiteName:"Felix's personal website"},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(P,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.d0da9b01.chunk.js.map