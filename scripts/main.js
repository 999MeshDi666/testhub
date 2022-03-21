let checked_section = document.querySelectorAll('.form__check-button');
let accept_confInfo = document.querySelectorAll('.form__label-accept');

function checked(checked_var, checked__toggler){
    checked_var.forEach((checked)=>{checked.addEventListener('click', ()=>{
            checked.classList.toggle(checked__toggler);
        })
    })
}
checked(checked_section, 'checked__section');
checked(accept_confInfo, 'checked__img');
// У меня не работал псевдокласс checked и я решил сделать через js (от Мади)