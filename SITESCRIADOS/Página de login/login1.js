const node = document.getElementById('icone')

node.addEventListener('click', ()=>{
    const form = document.getElementById('pai')
    if(node.classList.contains('fa-moon')){
        node.classList.remove('fa-moon')
        node.classList.add('fa-sun');
        form.classList.add('dark')
        return;
    }
    node.classList.add('fa-moon')
    node.classList.remove('fa-sun');
    form.classList.remove('dark')
});



alert('aperte na lua :)')
