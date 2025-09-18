window.addEventListener('load', () => {
    fetch('../Backend/fetchDetails.php')  
        .then(resp => {
            if (!resp.ok) {
                throw new Error(`HTTP error! Status: ${resp.status}`);
            }
            return resp.json();
        })
        .then((response) => {
            console.log("Response received:", response);

            if (response.stat === true) {
                const user = response.data.user;
                const details1 = response.data.details1 || {};
                const details2 = response.data.details2 || {};

                document.getElementById('name').innerText = user.first_name + " " + user.last_name;
                document.getElementById('phone').innerText = user.phone;
                document.getElementById('email').innerText = user.email;
                document.getElementById('age').innerText = user.age;
                document.getElementById('bloodGrp').innerText = user.blood_type;
                document.getElementById('state').innerText = user.state;
                document.getElementById('city').innerText = user.city;

                document.getElementById('firstdonar').innerText = details1.first_time_donor ? "Yes" : "No";
                document.getElementById('medicine').innerText = details1.taking_medicine ? "Yes" : "No";
                document.getElementById('lastdonate').innerText = details1.last_donated ? "Yes" : "No";
                document.getElementById('immu').innerText = details1.immunizations ? "Yes" : "No";
                document.getElementById('malaria').innerText = details1.malaria_treatment ? "Yes" : "No";
                document.getElementById('recieveblood').innerText = details1.received_blood ? "Yes" : "No";
                document.getElementById('jaundice').innerText = details1.close_contact_jaundice ? "Yes" : "No";
                document.getElementById('Rabies').innerText = details1.rabies_treatment ? "Yes" : "No";

                document.getElementById('Diabetes').innerText = details2.diabetes ? "Yes" : "No";
                document.getElementById('Cancer').innerText = details2.cancer ? "Yes" : "No";
                document.getElementById('Tuberculosis').innerText = details2.tuberculosis ? "Yes" : "No";
                document.getElementById('asthma').innerText = details2.asthma ? "Yes" : "No";
                document.getElementById('liver').innerText = details2.liver ? "Yes" : "No";
                document.getElementById('kidney').innerText = details2.kidney ? "Yes" : "No";
                document.getElementById('clot').innerText = details2.clot ? "Yes" : "No";
                document.getElementById('Heart').innerText = details2.heart ? "Yes" : "No";
                document.getElementById('Allergy').innerText = details2.allergy ? "Yes" : "No";
            } else {
                console.error("Error fetching details:", response.error);
                window.location.href = "../html/error.html";
            }
        })
        .catch(error => console.error("Error fetching details:", error));
});



// function registerdonar() {
//     const input = document.getElementById('concent').checked
//     if (input == true) {
//         fetch(`/validateDonar`)
//         .then(resp=>resp.json())
//         .then((response)=>{
//             if (response.stat == true) {   
//                 if (response.valid == true) {
//                     window.location.href = '/thank'
//                 }
//                 else{
//                     window.location.href = "/rejected"
//                 }
//             }
//             else{
//                 window.location.href = "/error"
//             }
//         })
//     }
//     else{
//         alert('Give concent to register as a donar')
//     }
// }


// window.addEventListener('load',()=>{
//     fetch('/fetchDetails')
//     .then(resp => resp.json())
//     .then((response) =>{
//         if (response.stat == true) {
//             const user = response.data.user
//             const details1 = response.data.details1
//             const details2 = response.data.details2
//             document.getElementById('name').innerText = user.name
//             document.getElementById('phone').innerText = user.phone
//             document.getElementById('email').innerText = user.email
//             document.getElementById('age').innerText = user.age
//             document.getElementById('bloodGrp').innerText = user.bloodGrp
//             document.getElementById('state').innerText = user.state
//             document.getElementById('city').innerText = user.city
//             document.getElementById('firstdonar').innerText = details1.donartype
//             document.getElementById('medicine').innerText = details1.medicine
//             document.getElementById('lastdonate').innerText = details1.lastdonation
//             document.getElementById('immu').innerText = details1.immunizations
//             document.getElementById('malaria').innerText = details1.Malaria
//             document.getElementById('recieveblood').innerText = details1.recieveblood
//             document.getElementById('jaundice').innerText = details1.Rabies
//             document.getElementById('Rabies').innerText = details1.jaundice
//             document.getElementById('Diabetes').innerText = details2.Diabetes
//             document.getElementById('Cancer').innerText = details2.Cancer
//             document.getElementById('Tuberculosis').innerText = details2.Tuberculosis
//             document.getElementById('asthma').innerText = details2.asthma
//             document.getElementById('liver').innerText = details2.liver
//             document.getElementById('kidney').innerText = details2.kidney
//             document.getElementById('clot').innerText = details2.clot
//             document.getElementById('Heart').innerText = details2.Heart
//             document.getElementById('Allergy').innerText = details2.Allergy
//         }
//         else{
//             window.location.href = "/error"
//         }
//     })
// })

