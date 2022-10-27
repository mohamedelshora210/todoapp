let taskinput = document.getElementById('taskinput');
let addbtn = document.getElementById('addbtn');
let notasks = document.getElementById('notasks');
let alltasks = document.getElementById('alltasks');
let invaliddata = document.querySelectorAll('#invaliddata');
let closemsg = document.querySelector('#invaliddata .close');
let btnmodel = document.getElementById('btnmodel');
let model = document.getElementById('model');
let showmodel = ()=>{
    model.classList.toggle('block');
}

btnmodel.addEventListener('click',showmodel)

let notasksfunction = ()=>{
    if(alltasks.childElementCount==0){
        notasks.classList.remove('none')
    }
}

let closemsgfunction = ()=>{
    invaliddata[0].classList.add('none')

}

let addtask = ()=>{
    let taskdata = taskinput.value;

    if(taskinput.value.length==0 ){
        invaliddata[0].classList.remove('none')
        invaliddata[1].classList.add('none')
        invaliddata[2].classList.add('none')
    }
    else if( taskinput.value.length<3){
        invaliddata[1].classList.remove('none')
        invaliddata[0].classList.add('none')
        invaliddata[2].classList.add('none')
    }
    else if (taskinput.value.length>20){
        invaliddata[2].classList.remove('none')
        invaliddata[1].classList.add('none')
        invaliddata[0].classList.add('none')
    }
    else{
        notasks.classList.add('none');
        alltasks.innerHTML += ` <div class="task alert alert-info">
        ${taskdata}
        <button class=" delete btn btn-sm btn-danger float-end ">Delete</button>
        </div>`;
        taskinput.value = "";
            showmodel(),
        
        alltasks.addEventListener('click',function(e){
               if(e.target.classList.contains('task')){
                e.target.classList.toggle('checked')
               }
        })

    }
    document.addEventListener('click',function(e){
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove();
            notasksfunction();
        }
    })
    

   
    

}

addbtn.addEventListener('click',addtask);
closemsg.addEventListener('click',closemsgfunction);