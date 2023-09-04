
window.addEventListener('load', ()=> {
    const name = localStorage.getItem('NAME');
    const ages = localStorage.getItem('AGES');
    const weight = localStorage.getItem('WEIGHT');
    const height = localStorage.getItem('HEIGHT');
    document.getElementById('inp_name').value = name;
    document.getElementById('inp_ages').value = ages;
    document.getElementById('inp_weight').value = weight;
    document.getElementById('inp_height').value = height;
  

    const gender  = localStorage.getItem('GENDER');
    const Male = document.getElementById('dot-1');
    const Female = document.getElementById('dot-2');
    if (gender == "Male") 
        Male.checked = true;
    else if (gender == "Female")   Female.checked = true;


    const sickness = localStorage.getItem('SICK');
    const daithaoduong = document.getElementById('dot-1a');
    const suythanman = document.getElementById('dot-2a');
    const caohuyetap = document.getElementById('dot-3a');
    const binhthuong = document.getElementById('dot-4a');
    if (sickness == "daithaoduong") 
        daithaoduong.checked = true;
    else if (sickness == "suythanman") suythanman.checked = true;
    else if (sickness== "caohuyetap") caohuyetap.checked = true;
    else binhthuong.checked = true;

    const jobs = localStorage.getItem('JOBS');
    const laodongnang = document.getElementById('dot-1b');
    const laodongvua = document.getElementById('dot-2b');
    const laodongnhe = document.getElementById('dot-3b');
    if (jobs == "ldnang") 
        laodongnang.checked = true;
    else if (jobs == "ldvua") laodongvua.checked = true;
    else if (jobs== "ldnhe") laodongnhe.checked = true;
})
    function handleSubmit () {
        const FullName = document.getElementById('inp_name').value;
        const Ages = document.getElementById('inp_ages').value;
        const Wght = document.getElementById('inp_weight').value;
        const Hght = document.getElementById('inp_height').value;
       
        var Jobs;
        var Gender;
        var Sick;
        var a = document.getElementsByName("gender");
        if(a[0].checked) Gender = a[0].value; 
            else Gender = a[1].value; 
        
        var a = document.getElementsByName("job");
        if(a[0].checked) Jobs = a[0].value;
            else if(a[1].checked) Jobs = a[1].value;
                else Jobs = a[2].value;

        var a = document.getElementsByName("sickness");
        if(a[0].checked) Sick = a[0].value;
            else if(a[1].checked) Sick = a[1].value;
                else if(a[2].checked) Sick = a[2].value;
                    else Sick = a[3].value;

        localStorage.setItem("SICK", Sick);
        localStorage.setItem("JOBS", Jobs);
        localStorage.setItem("GENDER", Gender);


        localStorage.setItem("NAME", FullName);
        localStorage.setItem("AGES", Ages);
        localStorage.setItem("WEIGHT", Wght);
        localStorage.setItem("HEIGHT", Hght);
    return;
    }
