(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('{"title":"","studies":[{"institute":"The University of Hong Kong","logo":"images/hku-logo.png","url":"http://www.hku.hk/","title":"Bachelor on Computer Science","durationInYears":"4","graduationYear":2019}],"certifications":[],"projects":[{"projectName":"Anti-Emulator plugin for Cuckoodroid by Frida","logo":"/images/cuckoodroid.png","owner":"Felixho19","repo":"CuckooWithFrida","url":"https://github.com/Felixho19/CuckooWithFrida","description":"An plugin module allows Cuckoodroid to implement API hook using Frida JavaScript.","stacks":["Python","Android","JavaScript"]},{"projectName":"GoGoCoach","logo":"/images/gogocoach_icon.png","owner":"Felixho19","repo":"go-go-coach","url":"https://github.com/Felixho19/go-go-coach","description":"An Android appliction for matching users and coaches, based on Geolocation.","stacks":["Android","Firebase","Google Map API"]},{"projectName":"Tutoria - Tutor-broking system for university students","logo":"/images/Endeavor.jpg","owner":"Felixho19","repo":"Tutoria","url":"https://github.com/Felixho19/Tutoria","description":"A coursework about timeslot reservation system.","stacks":["Django","JQuery","SQLite","Celery","Redis"]}],"experiences":[{"company":"PCCW Solutions Ltd","url":"https://www.pccwsolutions.com/site/en/home","roles":[{"title":"Graduate Trainee - Software Engineer","start_date":"Aug 2019","end_date":"Current"}]},{"company":"Messer Financial Software Ltd","url":"https://messerfs.com/","roles":[{"title":"3-month Computer Science Intern","start_date":"Jun 2018","end_date":"Aug 2018"}]}]}')},31:function(e){e.exports=JSON.parse('{"skills":[{"name":"Spoken Languages","items":["Cantonese: Native","English: Advanced","Japanese: Basic"]},{"name":"Programming Languages","items":["Python","Java","Bash","JavaScript","SQL","C/C++","PHP"]},{"name":"Messaging middleware","items":["Apache Kafka","Solace PubSub+"]},{"name":"Web development","items":["ReactJS","Vue.js","Angular.js","Django","Flask","HTML5","CSS","JQuery","Mule"]},{"name":"Mobile development","items":["Android"]},{"name":"DevOps","items":["Version Control: Git","Cloud Platform: AWS","CI/CD: Ansible-playbook, Docker, Jenkins, Kubernetes"]}]}')},39:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(13),i=n.n(r),o=(n(39),n(9)),s=n(10),l=n(12),j=n(11),d=(n(40),n(18)),u=n(55),b=n(56),h=n(61),p=n(57),O=n(58),m=n(28),x=n(49),g=n(26),f=n(60),v=n(24),k=n(14),w=n(2);function y(e){var t=e.project,n=Object(a.useState)(0),c=Object(g.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(0),s=Object(g.a)(o,2),l=s[0],j=s[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){fetch("https://ncyr2o8m84.execute-api.us-east-2.amazonaws.com/default/getFelixPublicGitHubInfo?repo="+t.repo,{method:"GET"}).then((function(e){200===e.status?e.json().then((function(e){console.log(e),i(e.starCount),j(e.watchCount)})):console.log("Looks like there was a problem. Status Code: "+e.status)})).catch((function(e){console.error(e)}))}),1e3);return function(){clearTimeout(e)}})),Object(w.jsxs)(f.a,{className:"card",style:{width:"18rem"},children:[Object(w.jsx)("div",{className:"cardDivImage",children:Object(w.jsx)(f.a.Img,{className:"cardImage",varient:"top",src:"/myProfile"+t.logo,alt:t.projectName})}),Object(w.jsxs)(f.a.Body,{children:[Object(w.jsx)(f.a.Title,{children:Object(w.jsx)("a",{href:t.url,rel:"noopener noreferrer",target:"_blank",children:t.projectName})}),Object(w.jsx)(f.a.Text,{children:t.description}),Object(w.jsxs)(f.a.Text,{children:[Object(w.jsxs)("span",{className:"icon",children:[Object(w.jsx)(k.a,{icon:v.b}),":",r]}),Object(w.jsxs)("span",{className:"icon",children:[Object(w.jsx)(k.a,{icon:v.a}),":",l]})]})]}),Object(w.jsx)(f.a.Footer,{children:Object(w.jsx)("ul",{children:t.stacks.map((function(e,t){return Object(w.jsx)("li",{children:e},t)}))})})]})}var C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsx)(x.a,{className:"card-deck pages",children:m.projects.map((function(e,t){return Object(w.jsx)(y,{project:e},t)}))})}}]),n}(c.a.Component),S=n(50),N=n(51);function T(){return Object(w.jsx)(S.a,{children:Object(w.jsxs)(N.a,{children:[Object(w.jsx)("h1",{className:"banner",children:"Felix Ho"}),Object(w.jsx)("div",{children:Object(w.jsx)("p",{className:"desc",children:"Self-motivated developer. Open for worldwide software engineer opportunities."})})]})})}var A=n(52),F=n(53),I=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsx)(N.a,{children:Object(w.jsx)(A.a,{children:Object(w.jsxs)(F.a,{className:"page",children:[Object(w.jsx)("p",{children:"Hi, this static website is using for exhibiting my coursework and side projects."}),Object(w.jsx)("p",{children:"Feel free to contact me via Linkedin. (Link at the bottom)"})]})})})}}]),n}(c.a.Component),J=n(54),P=n(31),G=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"page",children:[Object(w.jsx)("h2",{children:"Technical Skills"}),Object(w.jsxs)(J.a,{striped:!0,bordered:!0,hover:!0,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Area"}),Object(w.jsx)("th",{children:"Detail"})]})}),Object(w.jsx)("tbody",{children:P.skills.map((function(e,t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.name}),Object(w.jsx)("td",{children:Object(w.jsx)("ul",{children:e.items.map((function(e,t){return Object(w.jsx)("li",{children:e},t)}))})})]},t)}))})]})]})}}]),n}(c.a.Component),L=n(59),_=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={activeTab:"0"},a.toggle=a.toggle.bind(Object(d.a)(a)),a}return Object(s.a)(n,[{key:"toggle",value:function(e){this.state.activeTab!==e.target.id&&this.setState({activeTab:e.target.id})}},{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsxs)(L.a,{className:"navbar",bg:"light",expand:"lg",children:[Object(w.jsx)(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsx)(L.a.Collapse,{id:"responsive-navbar-nav",children:Object(w.jsxs)(u.a,{tabs:!0,children:[Object(w.jsx)(b.a,{children:Object(w.jsx)(h.a,{id:"0",onClick:this.toggle,children:"Introduction"})}),Object(w.jsx)(b.a,{children:Object(w.jsx)(h.a,{id:"1",onClick:this.toggle,children:"Github Project Galley"})}),Object(w.jsx)(b.a,{children:Object(w.jsx)(h.a,{id:"2",onClick:this.toggle,children:"Skills Profile"})})]})})]}),Object(w.jsx)(T,{}),Object(w.jsxs)(p.a,{activeTab:this.state.activeTab,children:[Object(w.jsx)(O.a,{tabId:"0",children:Object(w.jsx)(I,{})}),Object(w.jsx)(O.a,{tabId:"1",children:Object(w.jsx)(C,{})}),Object(w.jsx)(O.a,{tabId:"2",children:Object(w.jsx)(G,{})})]})]})}}]),n}(c.a.Component),D=n(25),E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("footer",{children:[Object(w.jsx)("hr",{}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)("a",{href:"https://www.linkedin.com/in/felix-ho-b69878155/",rel:"noopener noreferrer",target:"_blank",children:Object(w.jsx)(k.a,{icon:D.b})}),Object(w.jsx)("a",{href:"https://github.com/Felixho19",rel:"noopener noreferrer",target:"_blank",children:Object(w.jsx)(k.a,{icon:D.a})})]})]})}}]),n}(c.a.Component),W=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={webSiteName:"Felix's personal website"},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(_,{}),Object(w.jsx)(E,{})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(w.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b699c297.chunk.js.map