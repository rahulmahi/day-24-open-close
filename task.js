let submitBtn = document.getElementById('s-btn');

let select = document.getElementById('select');

let val;

// function start()
// {
//     // val = select.value;
//     val = document.getElementById('select').value;
// }
function start()
{
    val = document.getElementById('select').value;

    console.log(val);
    if(val == 'open' || val == 'Close') 
    {
        content.innerHTML = 'we are ' + val;
    }
    else{
        content.innerHTML = 'we are ' + val;
    }   
}
//submitBtn.addEventListener('click',start);
