document.getElementById("new-district-button").addEventListener("click", createNewDistrict);

function createNewDistrict() {
    console.log("create new district func");
    console.log(document.getElementsByClassName("districts"));
    document.getElementsByClassName("districts").innerHTML +=
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



function creatueNewDistrictQuery() {
    const districtsEl = document.querySelector(".districts");   
    let newDistrict = "";
    newDistrict += `<div class="disctrict">
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
    
    districtsEl.innerHTML = newDistrict;
}


function tmp() {
    document.getElementById("add_after_me")
                .insertAdjacentHTML("afterend",
                    `<h3>
                        This is the text which has
                        been inserted by JS
                    </h3>`);
}