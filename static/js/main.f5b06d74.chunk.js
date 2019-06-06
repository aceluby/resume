(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),r=t.n(s),i=(t(14),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h2",null,e.role),l.a.createElement("h3",null,e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"https://media.licdn.com/dms/image/C4E03AQEEKBDkpdoKwA/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=K1hj-UcXtyYRN6ahApVNZwHqT_MD19micnakHM55aLc",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand",style:{width:e.skillProficiency}}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Front End Portfolio"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-sixths s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01","data-mfp-src":"./".concat(e.imgurl)},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:""}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," ")," ")}}]),a}(n.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2014 CeeVee"),l.a.createElement("li",null,"Design by"," ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={imagebaseurl:"https://techonoeticsclub.github.io/",name:"Jake Luby",role:"Full Stack Developer",linkedinId:"jake-luby-135a5529",roleDescription:"I'm a full stack developer with strong front-end, object oriented, and DevOps skills.  With over 10 years of SDLC experience, I am confident I can take any idea and develop a clean, workable solution fast.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/jake-luby-135a5529/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/aceluby",className:"fa fa-github"}],aboutme:"In a nutshell, I'm a technologist. Whether it be through the lens of a BA, PM, QA, Dev, or DevOps; I bring the love of technology, learning, and breadth of experience to every job. I can bring an idea to reality by asking the right business questions; fleshing out exact requirements; designing an architecture for the future; writing supportable code; automating the testing process via unit, integration, performance, and end-to-end functional testing; and leading the team so everyone is on the same page to deliver results as fast as possible. ",address:"5331 Florida Ave N Crystal MN 55428",website:"",education:[{UniversityName:"Macalester College",specialization:"Computer Science & Math",MonthOfPassing:"May",YearOfPassing:"2005",Achievements:"Cum Laude, Phi Beta Kappa Officer"}],work:[{CompanyName:"Target",specialization:"Lead Engineer",MonthOfLeaving:"",YearOfLeaving:"Current",Achievements:"Rewrote the entire purchasing system in Java Spring, developed the CI/CD process, and wrote numerous web applications to support the global supply chain"},{CompanyName:"Data Recognition Corporation",specialization:"Sr. QA Engineer",MonthOfLeaving:"Dec",YearOfLeaving:"2012",Achievements:"Implemented their automation testing framework, seamlessly integrating into the development build and deployment pipeline"},{CompanyName:"SHPS",specialization:"Business Systems Analyst",MonthOfLeaving:"May",YearOfLeaving:"2008",Achievements:"Implemented dozens of new feeds while providing automated solutions for data entry"}],skillsDescription:"",skills:[{skillname:"OO Design and Analysis: Java Spring, Springboot, C#",skillProficiency:"100%"},{skillname:"Front End: ReactJs, AngularJs, Javascript, HTML5, CSS",skillProficiency:"80%"},{skillname:"DB: PostreSql, Cassandra, MongoDB, MSSQL, Sybase, MySql",skillProficiency:"85%"},{skillname:"CI/CD: Bash, Chef, Jenkins, Drone",skillProficiency:"95%"},{skillname:"Infrastructure: Kubernetes, OpenStack, Kafka, ELK",skillProficiency:"90%"}],portfolio:[{name:"Integrated Asset Network",description:"ReactJs App",imgurl:"images/portfolio/IAN.png"},{name:"Integrated Asset Network",description:"ReactJs App",imgurl:"images/portfolio/IAN-2.png"},{name:"Luby Studios",description:"ReactJs App",imgurl:"images/portfolio/luby-studios.png"},{name:"New Hope Bowl",description:"AngularJs App",imgurl:"images/portfolio/new-hope-bowl.png"},{name:"Talent On Tap",description:"ReactJs App",imgurl:"images/portfolio/talent-on-tap-1.png"},{name:"Talent On Tap",description:"ReactJs App",imgurl:"images/portfolio/talent-on-tap-2.png"}],testimonials:[{description:"Jake is a rockstar!  While working together he was consistently the guy to roll up his sleeves and get things done.",name:"Dan Gill - Director Optum Health"},{description:"Jake consistently over delivers and steps into any role asked.  His team is consistently one of my top performing teams and I accredit a lot of that to his leadership.",name:"Kraig Narr - VP Target"},{description:"Jake makes my job easy.  He's always asking the right business questions to deliver the right product.  His team is a well oiled agile machine, simplifying the process so we can focus on what should be focused on.",name:"Matthew Anderson - Senior Engineering Manager Target"}]},N=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:b}),l.a.createElement(d,{resumeData:b}),l.a.createElement(h,{resumeData:b}),l.a.createElement(E,{resumeData:b}),l.a.createElement(f,{resumeData:b}),l.a.createElement(g,{resumeData:b}),l.a.createElement(v,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f5b06d74.chunk.js.map