document.getElementById("new district button").addEventListener("click", createNewDisrtict);

function createNewDistrict() {
    document.getElementsByClassName("disctricts").innerHTML +=
         `<div class="disctrict">
                <p>District</p>
                <div class="character">
                    <input type="text" placeholder="name">
                    <select name="gender" id="gender">
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="Mystery">Mystery</option>
                    </select>
                        
                </div>
    
                <div class="character">
                    <input type="text" placeholder="name">
                    <select name="gender" id="gender">
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="Mystery">Mystery</option>
                    </select>
                </div>
            </div>`;
}