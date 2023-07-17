// change navbar color on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon

        const icon=faq.querySelector('.faqicon i');
        if(icon.className ==='fa-solid fa-plus'){
            icon.className="fa-solid fa-minus";
        }
        else{
           icon.className = "fa-solid fa-plus";
        }
    })
})


// counter increment

const counters=document.querySelectorAll(".counter");
counters.forEach((counter)=>{
    counter.innerHTML=0;

    const update=()=>{
        const targetcount=+counter.getAttribute('data-target');
        const startingcount=Number(counter.innerHTML);
        const incr=targetcount/100;
        if(startingcount<targetcount){
            counter.innerHTML=`${Math.round(startingcount+incr)}`;
            setTimeout(update,10);
        }
        else{
            counter.innerHTML=targetcount;
        }
    }

    update();
})

// show navbar

const menu=document.querySelector(".navmenu");
const menubtn=document.querySelector("#menubtn");
const closebtn=document.querySelector("#closebtn");

menubtn.addEventListener('click', ()=>{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    menubtn.style.display="none";
})

//close navbar
    const closenav=()=>{
    menu.style.display="none";
    closebtn.style.display="none";
    menubtn.style.display="inline-block";
}

closebtn.addEventListener('click',closenav)



