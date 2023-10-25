(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const w=document.querySelector(".add-task"),x=document.getElementById("task_entry_form"),k=document.getElementById("task_entry"),d=document.getElementById("boardTask"),l=document.getElementById("boardDoing"),a=document.getElementById("boardFinished"),y=document.querySelector(".context-menu"),B=document.getElementById("context_del"),g=[],L=document.querySelector(".theme-toggle-btn"),p="tasks";function f(){return localStorage.getItem(p)?JSON.parse(localStorage.getItem(p)):null}function A(n){const t=Date.now(),r={task_id:0,task:n,status:0,created_at:t};if(f()){let e=f();r.task_id=parseInt(e[e.length-1].task_id)+1,e.push(r),localStorage.setItem(p,JSON.stringify(e))}else localStorage.setItem(p,JSON.stringify([r]))}function b(n,t){let r=f(),e=r.find(i=>i.task_id==n);e.status=t,localStorage.setItem(p,JSON.stringify(r)),h()}function M(n){return f().find(t=>t.task_id==n)}function N(n){return f().findIndex(t=>t.task_id==n)}function C(n){let t=f().filter(r=>r.task_id!=n);localStorage.setItem(p,JSON.stringify(t)),h()}var E=!1;function H(n){n.preventDefault();const t={x:n.clientX,y:n.clientY};let r=n.target.getAttribute("data-id");y.style.left=t.x.toString()+"px",y.style.top=t.y.toString()+"px",y.style.display="block",E=!0,B.addEventListener("click",function(e){C(r),y.style.display="none"}),E&&window.addEventListener("click",function(e){e.target!=y&&e.target!=y.children[0]&&(y.style.display="none")})}var c;function O(n,t){c=n.target,n.dataTransfer.setData("text/plain",n.target.innerText),n.dataTransfer.effectAllowed="move",c.style.opacity=.5,o.pending==0&&(document.getElementById("task-drop").style.display="flex"),o.doing==0&&(document.getElementById("doing-drop").style.display="flex"),o.finished==0&&(document.getElementById("finished-drop").style.display="flex"),d.addEventListener("drop",function(e){e.stopImmediatePropagation(),o.pending==0&&(console.log("Shifted bitch"),d.innerHTML="",b(c.getAttribute("data-id"),0),c=null)}),l.addEventListener("drop",function(e){e.stopImmediatePropagation(),o.doing==0&&(l.innerHTML="",b(c.getAttribute("data-id"),1),c=null)}),a.addEventListener("drop",function(e){e.stopImmediatePropagation(),o.finished==0&&(a.innerHTML="",b(c.getAttribute("data-id"),2),c=null)}),t.addEventListener("dragend",function(){try{c.style.opacity=1}catch{}o.doing==0&&(document.getElementById("doing-drop").style.display="none"),o.finished==0&&(document.getElementById("finished-drop").style.display="none"),g.forEach(e=>{e.classList.remove("dragged_slot")})}),d.addEventListener("dragover",function(e){e.preventDefault(),o.pending==0&&(d.children[0].style.color="#000",d.children[0].style.borderColor="#000")}),l.addEventListener("dragover",function(e){e.preventDefault(),o.doing==0&&(l.children[0].style.color="#000",l.children[0].style.borderColor="#000")}),a.addEventListener("dragover",function(e){e.preventDefault(),o.finished==0&&(a.children[0].style.color="#000",a.children[0].style.borderColor="#000")}),d.addEventListener("dragleave",function(e){e.preventDefault(),o.pending==0&&(d.children[0].style.color="#686868",d.children[0].style.borderColor="#ddd")}),l.addEventListener("dragleave",function(e){e.preventDefault(),o.doing==0&&(l.children[0].style.color="#686868",l.children[0].style.borderColor="#ddd")}),a.addEventListener("dragleave",function(e){e.preventDefault(),o.finished==0&&(a.children[0].style.color="#686868",a.children[0].style.borderColor="#ddd")});for(var r=0;r<g.length;r++)g[r].addEventListener("dragover",function(e){e.preventDefault(),e.target.classList.add("dragged_slot")}),g[r].addEventListener("dragleave",function(e){e.preventDefault(),e.target.classList.remove("dragged_slot")}),g[r].addEventListener("drop",function(e){e.stopImmediatePropagation();var i=c.getAttribute("data-id"),s=parseInt(e.target.getAttribute("data-child"));const u=f();u.splice(N(i),1);const _=u.findIndex(D=>D.task_id==s);let m=M(i),v=e.target.parentNode;console.log(v),v==d?m.status=0:v==l?m.status=1:m.status=2,u.splice(_+1,0,m),console.log(u),localStorage.setItem("tasks",JSON.stringify(u)),h()})}var o;function h(){if(document.querySelectorAll("#boardTask div.board-item").length>=1&&(d.innerHTML=""),document.querySelectorAll("#boardDoing div.board-item").length>=1&&(l.innerHTML=""),document.querySelectorAll("#boardFinished div.board-item").length>=1&&(a.innerHTML=""),f()){const n=f();o={pending:n.filter(t=>t.status==0).length,doing:n.filter(t=>t.status==1).length,finished:n.filter(t=>t.status==2).length},o.pending==0&&(d.innerHTML=`<div id="task-drop" class="drop-task-here">
      <i class="ic-drop-task">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-plus-square"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </i>
      <span>Drop Task Here</span>
    </div>`),o.doing==0&&(l.innerHTML=`<div id="doing-drop" class="drop-task-here">
      <i class="ic-drop-task">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-plus-square"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </i>
      <span>Drop Task Here</span>
    </div>`),o.finished==0&&(a.innerHTML=`<div id="finished-drop" class="drop-task-here">
      <i class="ic-drop-task">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-plus-square"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </i>
      <span>Drop Task Here</span>
    </div>`),n.forEach((t,r)=>{const e=document.createElement("div");e.classList.add("board-item"),e.setAttribute("data-id",t.task_id),e.setAttribute("draggable",!0),e.innerHTML=t.task;const i=document.createElement("div");i.setAttribute("id","dummy_slot"),i.setAttribute("data-child",t.task_id),t.status==0?(d.prepend(e),d.prepend(i),g.unshift(i)):t.status==1?(l.prepend(e),l.prepend(i),g.unshift(i)):(a.prepend(e),a.prepend(i),g.unshift(i)),e.addEventListener("contextmenu",function(s){H(s)}),e.addEventListener("dragstart",function(s){O(s,e)})})}}function I(n){x.style.display="block",document.getElementById("task_entry").focus(),document.querySelector(".add_task_display").style.display="none",w.style.border="2px solid #9C27B0";function t(){x.style.display="none",document.querySelector(".add_task_display").style.display="flex",w.style.border="2px solid transparent"}window.addEventListener("keyup",function(r){r.key=="Escape"&&t(),k.addEventListener("focusout",function(e){t()})}),x.addEventListener("submit",function(r){if(r.preventDefault(),k.value.trim().length>0){const e=k.value.trim();k.value="",A(e),h(),t()}})}function q(){w.addEventListener("click",function(n){I()}),document.addEventListener("keydown",function(n){(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&I()})}h();q();function T(){document.body.className="dark-theme",L.innerHTML=`
      <i class="sun">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </i>
      `,localStorage.setItem("theme","dark")}function S(){document.body.className="light-theme",L.innerHTML=`
  <i class="moon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-moon"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</i>
      `,localStorage.setItem("theme","light")}localStorage.getItem("theme")?localStorage.getItem("theme")=="dark"?T():S():(localStorage.setItem("theme","light"),document.body.className="light-theme");L.addEventListener("click",function(n){console.log("Fuck"),localStorage.getItem("theme")=="dark"?S():T()});
