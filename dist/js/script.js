const navMenu = document.getElementById('navMenu');
const navList = document.getElementById('nav-list');
const submitBtn = document.getElementById('submitBtn');

navMenu.addEventListener('click', function(){
    navMenu.classList.toggle('nav-active');
    navList.classList.toggle('hidden');
})
const navTitle = document.getElementById('nav-title');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');




window.onscroll = function(){
    const header = document.querySelector('header');
    const navFixed = header.offsetTop;

    if(window.pageYOffset > navFixed){
        header.classList.add('nav-fixed');
        navTitle.classList.remove('text-white');
        navTitle.classList.add('text-primary');
        span1.classList.remove('bg-white');
        span1.classList.add('bg-slate-900');
        span2.classList.remove('bg-white');
        span2.classList.add('bg-slate-900');
        span3.classList.remove('bg-white');
        span3.classList.add('bg-slate-900');
        link1.classList.remove('lg:text-white');
        link1.classList.add('lg:text-primary');
        link2.classList.remove('lg:text-white');
        link2.classList.add('lg:text-primary');
        link3.classList.remove('lg:text-white');
        link3.classList.add('lg:text-primary');
    } else{
        header.classList.remove('nav-fixed');
        navTitle.classList.add('text-white');
        navTitle.classList.remove('text-primary');
        span1.classList.add('bg-white');
        span1.classList.remove('bg-slate-900');
        span2.classList.add('bg-white');
        span2.classList.remove('bg-slate-900');
        span3.classList.add('bg-white');
        span3.classList.remove('bg-slate-900');
        link1.classList.add('lg:text-white');
        link1.classList.remove('lg:text-primary');
        link2.classList.add('lg:text-white');
        link2.classList.remove('lg:text-primary');
        link3.classList.add('lg:text-white');
        link3.classList.remove('lg:text-primary');
    }
}

submitBtn.addEventListener('submit',function(e){
    alert('Thanks for your response!');
    e.preventDefault();

})