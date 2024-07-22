
// This file is auto-generated from the files under "src/lib/verify.ts"


"use strict";(()=>{var u=e=>{throw TypeError(e)};var m=(e,t,s)=>t.has(e)||u("Cannot "+s);var i=(e,t,s)=>(m(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g=(e,t,s,o)=>(m(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);var b=["kes.im","bitly.com","tinyurl.com","redr.me","is.gd","t.ly"],w=["blogspot.com","helfingt","kntldwammkbsa","francisco36919","jarananko","3talexandrae1y","matchlovers.link","lokuil.xyz","yudistir","gresju4.xyz","ruyii.xyz","4xouhk7gb1","hojimetx","monicahess.eu.org","brianr.xyz","fer46twhbe","oneamour.my.id","arraamn","g5angen","imonetizet2027","aithne.xyz","elaina-nunez","badwui85.xyz","uiopp.xyz","afg3we5tgqw35","guru-tracking.com","pawaka2","generatorku5454","zsdfgeabgegr6t3","sidselmehl","krawu","delightfuidates","specialforyoulove","marenvelten","vreswafgy33","dsgadfsgadf6","kominfo","angeelina","l.wl.co","xdxdxfdxfgdfgdasdadwa","hokky.xyz","hw36t636q6h","lohlo.top","komplenganjis","bablass69.site","by8uis.site","kendat.site","versewqa1","vrsetgwaet","detyui31","hgty56vwrhj912","cloesrewab","unfamiillardates","frtyuerd","nus4nt4rr4j4w42","rtgret354ge950","helokity.homes","gordesce.xyz","elizabeeth.com","fisbar.com","dertygfds37.xyz","vewtrgwq5.com","joshbut.live","petekongan.xyz","kaesi.xyz"],y=["about","abuse","account","accounting","ad","admin","ads","advert","advertise","api","apps","archive","assets","auth","backup","billing","bin","blog","bot","bots","browser","cdn","changelog","chess","cli","client","code","community","confirm","consent","console","contact","contact-us","control","cookies","copyright","create","customer","customers","dashboard","data","delete","demo","dev","developers","disclaimer","discover","docs","domain","download","drive","edit","email","error","errors","events","example","examples","exit","explore","faq","favorites","features","feed","feedback","file","files","find","forgot","forum","forums","free","get","group","groups","help","home","hosting","how","images","img","info","information","inquiry","install","internet","invite","invites","job","jobs","js","json","kesim","keys","language","languages","learn","legal","license","list","lists","live","log","login","logout","logs","mail","manage","map","maps","market","marketing","master","media","member","members","metrics","moderator","module","modules","monitor","monitoring","munich","my","name","net","network","new","news","newsletter","null","oauth","offers","office","online","order","orders","overview","page","pages","panel","password","paste","payment","payments","photos","ping","plans","plugin","plugins","policy","porn","portal","preferences","premium","press","pricing","privacy","pro","products","profile","projects","public","purchase","query","queue","rames","ramesaliyev","redirect","register","report","reports","reseller","resources","reveal","robots","root","save","script","scripts","search","secure","security","select","self","server","servers","service","services","settings","shop","signup","sitemap","sites","smtp","source","static","stats","status","store","stream","style","styles","sub","subscribe","subscriptions","support","sysadmin","system","table","tables","tag","tags","task","tasks","team","teams","tech","terms","test","theme","themes","token","tokens","tools","top","topics","tos","translate","translation","translations","trending","tum","tumblr","tutorial","tutorials","twitter","unblock","unfollow","unsubscribe","update","upgrade","upload","uploads","url","usage","user","username","users","utility","validate","verification","verify","video","videos","web","webhooks","webmaster","widget","widgets","wiki","window","wordpress","work","worker","www","xml","xxx","yahoo","yandex","your","yourname","youtube","ytu","zip"],a={HOSTNAMES:b,URL_KEYWORDS:w,SLUGS:y};var{pow:j,random:L,floor:R}=Math,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),U=d.reduce((e,t,s)=>(e[t]=s,e),{});function p(){return d}var r,n=class{constructor(t){c(this,r);g(this,r,new URL(t))}getHostname(){return i(this,r).hostname}getPathname(){return i(this,r).pathname}getPathSegments(){return this.getPathname().split("/").slice(1)}};r=new WeakMap;var x=[...p(),"\\-","\\_"].join(""),v=new RegExp(`(?!.*(-|_)$)(?!^(-|_).*)^[${x}]{1,}$`,"i"),k=/^(https?:\/\/[^\s\.]+\.[^\s]{2,})/i;function H(e,t,s){return!(e.length<=t||e.length>s||!v.test(e)||a.SLUGS.includes(e.toLowerCase()))}function P(e,t,s){if(e.length<=t||e.length>s)return!1;let o;try{o=new n(e)}catch(l){return!1}if(!k.test(e))return!1;let f=o.getHostname().toLowerCase();if(a.HOSTNAMES.includes(f))return!1;let h=e.toLowerCase();return!a.URL_KEYWORDS.some(l=>h.indexOf(l)!==-1)}})();
