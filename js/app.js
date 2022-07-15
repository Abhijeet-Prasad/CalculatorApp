
// -------------------- Toggle Dark Mode --------------------

const mode = document.getElementById('mode'),
containerDiv = document.getElementsByClassName('container')

function changeMode() {
    mode.className = mode.className == 'fa-solid fa-sun'?
 'fa-solid fa-moon':'fa-solid fa-sun';
    console.log(mode)

    if (containerDiv[0].classList.contains('dark_mode')){
        containerDiv[0].classList.remove('dark_mode');
        document.body.style.background = "linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)";
    }
    else{
        containerDiv[0].classList.add('dark_mode');
        document.body.style.background = "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)";
    }
}


// -------------------- Math Calculations --------------------
const input = document.getElementsByClassName('screen')
