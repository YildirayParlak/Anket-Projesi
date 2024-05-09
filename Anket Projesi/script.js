let dogruCevaplar =['E','E','E','E'];
let form = document.querySelector(".question-form");
let sonuc = document.querySelector(".result");
let span = document.querySelector("span");

form.addEventListener('submit',function(e){
    e.preventDefault();

    let puan =0;

    let kullaniciCevaplari =[form.q1.value,form.q2.value,form.q3.value,form.q4.value,];

    kullaniciCevaplari.forEach(function(cevap,index){
        if(cevap === dogruCevaplar[index]){
            puan+=25;
        }
    });

    sonuc.classList.remove('d-none');
    let skor =0;
   const yazdir = setInterval(() => {
        span.textContent=`${skor}%`;
        if(skor == puan){
            clearInterval(yazdir);
        }else{
            skor++;
        }
    }, 15);

});