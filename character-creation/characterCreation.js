$(document).on('click', '.add_district', function() {
    console.log("new button pressed");
  $(`<div class="district">
                <p>District</p>
                <div class="character">
                    <input class="name" type="text" placeholder="name" onchange="saveLC()">
                    <select name="gender" id="gender" onchange="saveLC()">
                        <option value="Mystery">Mystery</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                        
                </div>
    
                <div class="character">
                    <input class="name" type="text" placeholder="name" onchange="saveLC()">
                    <select name="gender" id="gender" onchange="saveLC()">
                        <option value="Mystery">Mystery</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>
                <input type="button" value="Delete district" id="delete_district_button">
            </div>`).insertAfter('.district:last');
})

$(document).on('click', '#delete_district_button', function() {
    
    console.log("delete button pressed");
    console.log()

    if($(this).parent().parent().children('.district').length == 1){
        $(this).parent().children('.character').children('input').val('');
        $(this).parent().children('.character').children('#gender').val('Mystery').change();
    }
    else{
        $(this).parent().remove();
    }
        
    
    //přidej číslování distriktů
})

$(document).on('click', '#delete_district_first_button', function() {

    $(this).parent().children('.character').children('input').val('');
    $(this).parent().children('.character').children('#gender').val('Mystery').change();
})

$(document).on('click', '#next_button', function() {


    
    window.location.href = 'relationship-points-creation';
})

// on change atribut aby se to ukladalo pri kazde zmene
function saveLC(){
    var inputName = document.getElementsByClassName('name');
    localStorage.setItem('name', inputName);
    console.log(inputName.val)
    
    var inputNameByID = document.getElementById('tmp');
    localStorage.setItem('idname',inputNameByID.value);
}

function load(){

}
