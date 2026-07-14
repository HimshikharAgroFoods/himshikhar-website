
const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");
if(menuBtn&&navMenu){menuBtn.addEventListener("click",()=>{const open=navMenu.classList.toggle("show");menuBtn.setAttribute("aria-expanded",String(open));});}
const topBtn=document.getElementById("topBtn");
if(topBtn){window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>450));topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const form=document.getElementById("inquiryForm");
if(form){form.addEventListener("submit",e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent("Website Inquiry - "+data.get("inquiry"));const body=encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nInquiry: ${data.get("inquiry")}\n\nMessage:\n${data.get("message")}`);window.location.href=`mailto:himshikharagrofoods@gmail.com?subject=${subject}&body=${body}`;});}
