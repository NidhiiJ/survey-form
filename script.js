
var form1 = document.getElementById('form1')
        var nextButton1 = document.getElementById("next1")
        var nextButton2 = document.getElementById("next2")
        var nextButton3 = document.getElementById("next3")
        var nextButton4 = document.getElementById("next4")
        var prevButton1 = document.getElementById("prev1")
        var prevButton2 = document.getElementById("prev2")
        var prevButton3 = document.getElementById("prev3")
        var prevButton4 = document.getElementById("prev4")
        var prevButton5 = document.getElementById("prev5")
        var counter = document.getElementById('counter')
        
        form1.classList.add("displayform")
        counter.innerHTML = '1/5'
        
        const onNext=(e)=>{     
            let idstr = e.target.parentNode.parentNode.id
            let newElemId = idstr.slice(0,-1)+ JSON.stringify(Number(idstr.charAt(idstr.length - 1))+1)
            document.getElementById(idstr).classList.remove('displayform')
            document.getElementById(newElemId).classList.add("displayform")
            counter.innerHTML=JSON.stringify(Number(idstr.charAt(idstr.length - 1))+1)+'/5'
        }

        const onPrev=(e)=>{
            document.getElementById('errmsg').innerHTML=''
            let idstr = e.target.parentNode.parentNode.id
            let newElemId = idstr.slice(0,-1)+ JSON.stringify(Number(idstr.charAt(idstr.length - 1))-1)
            if(newElemId==='form0'){
                return
            }else{
                document.getElementById(idstr).classList.remove('displayform')
                document.getElementById(newElemId).classList.add("displayform")
                counter.innerHTML=JSON.stringify(Number(idstr.charAt(idstr.length - 1))-1)+'/5'
            }
            
        }

        
        const alertPopup=()=>{
           if(confirm('Are you sure you want to submit response?')){
            document.getElementById('submitres').type= 'submit'
            return document.getElementById('form5').action = 'submit.html';
           } else{
                document.getElementById('submitres').type= 'button'
               
                return document.getElementById('errmsg').innerHTML='something went wrong';
           }
        }

        [nextButton1, nextButton2, nextButton3, nextButton4 ]
        .forEach(item => item.addEventListener('click', onNext));

        [prevButton1, prevButton2, prevButton3, prevButton4, prevButton5]
        .forEach(item => item.addEventListener('click', onPrev))



        const names = ['a','b', 'c', 'd']
        names.forEach(name=>{
        let radioBtns = document.querySelectorAll(`input[name=${name}]`);
        let result = document.getElementById(`result${name}`)
        
        let findselected = ()=>{
        var selected = document.querySelector(`input[name='${name}']:checked`).value;
        
        result.textContent = `value : ${selected}`;
     }
     radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener('change', findselected);
     })
        })


        
    