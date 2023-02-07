const down = document.querySelector(".hotels");
const collect = document.querySelector(".collections")

down.addEventListener('click', function () {
    if(collect.classList.contains('show-collections')){
        collect.classList.remove('show-collections');
    }
    else{
        collect.classList.add('show-collections');
    }
    
})

