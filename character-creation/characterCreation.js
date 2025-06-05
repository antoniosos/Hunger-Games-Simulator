$(document).on('click', '.add_district', function() {
    console.log("new button pressed");
  $(`<div class="district">
                <p>District</p>
                <div class="character">
                    <input type="text" placeholder="name">
                    <select name="gender" id="gender">
                        <option value="Mystery">Mystery</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                        
                </div>
    
                <div class="character">
                    <input type="text" placeholder="name">
                    <select name="gender" id="gender">
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
    $(this).parent().remove();
})

$(document).on('click', '#delete_district_first_button', function() {
    
    $(this).parent().children('.character').children('input').val('');
    $(this).parent().children('.character').children('#gender').val('Mystery').change();
})

$(document).on('click', '#next_button', function() {
    $()
})

