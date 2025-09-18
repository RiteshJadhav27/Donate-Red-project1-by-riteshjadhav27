// async function validateAndAlertForm1() {
//     var donartype = document.getElementById('donartype').value
//     var medicine = document.getElementById('medicine').value
//     var lastdonation = document.getElementById('lastdonation').value
//     var immunizations = document.getElementById('immunizations').value
//     var Malaria = document.getElementById('Malaria').value
//     var recieveblood = document.getElementById('recieveblood').value
//     var jaundice = document.getElementById('jaundice').value
//     var Rabies   = document.getElementById('Rabies').value
//     if (donartype == "" || donartype == "Are You First Time Donar") {
//         alert("Fill all details")
//     }
//     else if (medicine == "" || medicine == "Are You Taking Any Medicines") {
//         alert("Fill all details")
//     }
//     else if (lastdonation == "" || lastdonation == "When did you last donated Blood") {
//         alert("Fill all details")
//     }
//     else if (immunizations == "" || immunizations == "Have you received any immunizations in the past month?") {
//         alert("Fill all details")
//     }
//     else if (Malaria == "" || Malaria == "Have you been treated for Malaria in the past 3 months?") {
//         alert("Fill all details")
//     }
//     else if (recieveblood == "" || recieveblood == "Have you received blood in the past 6 months?") {
//         alert("Fill all details")
//     }
//     else if (jaundice == "" || jaundice == "Have you had close contact with someone diagnosed with hepatitis or yellow jaundice in the past 6 months?") {
//         alert("Fill all details")
//     }
//     else if (Rabies == "" || Rabies == "Have you been treated for Rabies or received Hepatitis B immune globulin in the past year?") {
//         alert("Fill all details")
//     }
//     else {
//         const queryObj = {
//             "donartype": donartype,
//             "medicine": medicine,
//             "lastdonation": lastdonation,
//             "immunizations": immunizations,
//             "Malaria": Malaria,
//             "recieveblood": recieveblood,
//             "Rabies": Rabies,
//             "jaundice": jaundice
//         }
//         fetch(`/donarDetailsSave1?donartype=${queryObj.donartype}&medicine=${queryObj.medicine}&lastdonation=${queryObj.lastdonation}&immunizations=${queryObj.immunizations}&Malaria=${queryObj.Malaria}&recieveblood=${queryObj.recieveblood}&Rabies=${queryObj.Rabies}&jaundice=${queryObj.jaundice}`)
//         .then(resp => resp.json())
//         .then((response) => {
//             if (response.stat == true) {
//                 window.location.href = "/check3"
//             }
//             else{
//                 window.location.href = "/error"
//             }
//         })
//     }
// }

// async function validateAndAlertForm2() {
//     var Diabetes = document.getElementById('Diabetes').checked
//     var Cancer = document.getElementById('Cancer').checked
//     var Tuberculosis = document.getElementById('Tuberculosis').checked
//     var asthma = document.getElementById('asthma').checked
//     var liver = document.getElementById('liver').checked
//     var kidney = document.getElementById('kidney').checked
//     var clot = document.getElementById('clot').checked
//     var Heart = document.getElementById('Heart').checked
//     var Allergy = document.getElementById('Allergy').checked
//     var queryObj = {
//         "Diabetes": "No",
//         "Cancer": "No",
//         "Tuberculosis": "No",
//         "asthma": "No",
//         "liver": "No",
//         "kidney": "No",
//         "clot": "No",
//         "Heart": "No",
//         "Allergy": "No"
//     }
//     if (Diabetes == true) {
//         queryObj.Diabetes = "Yes"
//     }
//     else if(Cancer == true){
//         queryObj.Cancer = "Yes"
//     }
//     else if(Tuberculosis == true){
//         queryObj.Tuberculosis = "Yes"
//     }
//     else if(asthma == true){
//         queryObj.asthma = "Yes"
//     }
//     else if(liver == true){
//         queryObj.liver = "Yes"
//     }
//     else if(kidney == true){
//         queryObj.kidney = "Yes"
//     }
//     else if(clot == true){
//         queryObj.clot = "Yes"
//     }
//     else if(Heart == true){
//         queryObj.Heart = "Yes"
//     }
//     else if(Allergy == true){
//         queryObj.Allergy = "Yes"
//     }
//     fetch(`/donarDetailsSave2?Diabetes=${queryObj.Diabetes}&Cancer=${queryObj.Cancer}&Tuberculosis=${queryObj.Tuberculosis}&asthma=${queryObj.asthma}&liver=${queryObj.liver}&kidney=${queryObj.kidney}&clot=${queryObj.clot}&Heart=${queryObj.Heart}&Allergy=${queryObj.Allergy}`)
//         .then(resp => resp.json())
//         .then((response) => {
//             if (response.stat == true) {
//                 window.location.href = "/showDetails"
//             }
//             else{
//                 window.location.href = "/error"
//             }
//         })
// }


//form 2
async function validateAndAlertForm1() {
    var email = "user@example.com"; // TODO: Fetch actual email from session
    var donartype = document.getElementById('donartype').value;
    var medicine = document.getElementById('medicine').value;
    var lastdonation = document.getElementById('lastdonation').value;
    var immunizations = document.getElementById('immunizations').value;
    var malaria = document.getElementById('Malaria').value;
    var recieveblood = document.getElementById('recieveblood').value;
    var jaundice = document.getElementById('jaundice').value;
    var rabies = document.getElementById('Rabies').value;

    const formData = new FormData();
    formData.append("email", email);
    formData.append("donartype", donartype);
    formData.append("medicine", medicine);
    formData.append("lastdonation", lastdonation);
    formData.append("immunizations", immunizations);
    formData.append("malaria", malaria);
    formData.append("recieveblood", recieveblood);
    formData.append("jaundice", jaundice);
    formData.append("rabies", rabies);

    try {
        await fetch("../Backend/submitcheck2.php", {  
            method: "POST",
            body: formData
        });

        // ✅ Redirect to check3.html after storing data
        window.location.href = "../html/check3.html";  
    } catch (error) {
        console.error("Error:", error);
    }
}




// Form 3
function validateAndAlertForm2() {
    // Collect data from form
    const userData = {
        Diabetes: document.getElementById("Diabetes").checked ? "Yes" : "No",
        Cancer: document.getElementById("Cancer").checked ? "Yes" : "No",
        Tuberculosis: document.getElementById("Tuberculosis").checked ? "Yes" : "No",
        asthma: document.getElementById("asthma").checked ? "Yes" : "No",
        liver: document.getElementById("liver").checked ? "Yes" : "No",
        kidney: document.getElementById("kidney").checked ? "Yes" : "No",
        clot: document.getElementById("clot").checked ? "Yes" : "No",
        Heart: document.getElementById("Heart").checked ? "Yes" : "No",
        Allergy: document.getElementById("Allergy").checked ? "Yes" : "No",
    };

    // Store in sessionStorage
    sessionStorage.setItem("donorData", JSON.stringify(userData));

    // Redirect to details.html
    window.location.href = "../html/details.html";
}
