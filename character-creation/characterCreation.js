load();

$(document).on('click', '.add_district', function() {
    console.log("new button pressed");
  $(`<div class="district">
                <h4 class="district-name">District <span class="district-number"></span></h4>
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

            updateDistrictNumbers($(this).parent().parent());
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
        
    updateDistrictNumbers($(this).parent().parent());
    saveLC();
    //přidej číslování distriktů
})

$(document).on('click', '#delete_district_first_button', function() {

    $(this).parent().children('.character').children('input').val('');
    $(this).parent().children('.character').children('#gender').val('Mystery').change();
    updateDistrictNumbers(this.parent().parent());
})

$(document).on('click', '#next_button', function() {

    window.location.href = 'relationship-points-creation';
})

// on change atribut aby se to ukladalo pri kazde zmene
function saveLC(){
    var districts = document.getElementById('districts');
    const nameCollection = document.getElementsByClassName('name');
    const genderCollection = document.getElementsByClassName('gender');

    localStorage.setItem('districts html', districts.innerHTML);

    const charNames = [];
    for (let index = 0; index < nameCollection.length; index++) {
        charNames.push(nameCollection.item(index).value); 
    }
    localStorage.setItem('names', charNames);
    
    const charGenders = [];
    for (let i = 0; i < charGenders.length; i++) {
        charGenders.push(genderCollection.item(i).value);
    }
    localStorage.setItem('genders', charGenders);
}

function load(){
    if (localStorage.getItem('districts html') != null) {
        document.getElementById('districts').innerHTML = localStorage.getItem('districts html');
    }

    const nameCollection = document.getElementsByClassName('name');
    var charNames;
    if (localStorage.getItem('names') != null) {
        charNames = localStorage.getItem('names').split(',');
        for (let i = 0; i < nameCollection.length; i++) {
            nameCollection.item(i).value = charNames[i];  
    }
    }


    const genderCollection = document.getElementsByClassName('gender');
    var charGenders;
    if(localStorage.getItem('character genders') != null) {
        charGenders = localStorage.getItem('character genders').split(',');
        for (let i = 0; i < genderCollection.length; i++) {
            genderCollection.item(i).value = charGenders[i];
        }
    }
}

function updateDistrictNumbers(district){    
    const districtNumbers = document.getElementsByClassName('district-number');
    for (let index = 0; index < districtNumbers.length; index++) {
        districtNumbers.item(index).innerHTML = ` ${ index + 1 }`;
    }
}

$(document).on('click', '.district-name', function() {
    if (!$('#edit-name').length) {
        var prevName = this;
    $(this).prepend('<input type="text" id="edit-name" onchange="editName(this)">');
    }  
})

function editName(editNameElement){
    $(editNameElement).parent().contents().filter(function() {
        return this.nodeType === 3;
    }).remove();
    $(editNameElement).parent().prepend(editNameElement.value);
    editNameElement.remove();

    saveLC();
}
