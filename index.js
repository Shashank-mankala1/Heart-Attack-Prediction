async function predict() {
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const cholesterol = document.getElementById("cholesterol").value;

    if (!age || !gender || !cholesterol) {
        alert("Please fill all fields.");
        return;
    }

    const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ age, gender, cholesterol }),
    });

    const result = await response.json();
    document.getElementById("result").innerText =
        "Prediction: " + (result.prediction ? "High Risk" : "Low Risk");
}

var divElement = document.getElementById('viz1733007406024'); 
var vizElement = divElement.getElementsByTagName('object')[0]; 
if (divElement.offsetWidth > 800) {
    vizElement.style.minWidth = '420px'; 
    vizElement.style.maxWidth = '650px'; 
    vizElement.style.width = '100%'; 
    vizElement.style.minHeight = '587px';
    vizElement.style.maxHeight = '887px'; 
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'; 
} 
else if (divElement.offsetWidth > 500) { 
    vizElement.style.minWidth = '420px'; 
    vizElement.style.maxWidth = '650px'; 
    vizElement.style.width = '100%'; 
    vizElement.style.minHeight = '587px'; 
    vizElement.style.maxHeight = '887px'; 
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'; 
} 
else { 
    vizElement.style.width = '100%'; 
    vizElement.style.height = '727px'; 
} 
var scriptElement = document.createElement('script'); 
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
vizElement.parentNode.insertBefore(scriptElement, vizElement);



const modal = document.getElementById("predictModal");
const btn = document.getElementById("predictBtn");
const close = document.getElementById("closeModal");

// Open modal when button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal when 'x' is clicked
close.onclick = function() {
    modal.style.display = "none";
}

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
// document.getElementById("predictForm").onsubmit = function(event) {
//     event.preventDefault();
//     const field1 = document.getElementById("field1").value;
//     const field2 = document.getElementById("field2").value;
//     const field3 = document.getElementById("field3").value;
//     alert(`Submitted Values:\nField 1: ${field1}\nField 2: ${field2}\nField 3: ${field3}`);
//     modal.style.display = "none"; // Close modal after submission
// }



// document.getElementById("predictForm").addEventListener("submit", async function (event) {
// // document.getElementById("predictForm").onsubmit = function(event) {
//     event.preventDefault();

//     const fieldRange = 1;
//     const maxFields = 26;

//     const formData = {};

//     for (let i = fieldRange; i <= maxFields; i++) {
//         const fieldId = `field${i}`;
//         const fieldElement = document.getElementById(fieldId);
//         if (fieldElement) {
//             formData[fieldId] = fieldElement.value;
//         }
//     }
//     console.log(formData);

//     try {
//         // Send the data to the Heroku API
//         const response = await fetch("https://2c2930de10934de28b7c17a09afa6c99.app.posit.cloud/predict", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(formData)
//         });

//         const result = await response.json();

//         // Display the result
//         document.getElementById("result").innerText = `Prediction: ${result.prediction}`;
//     } catch (error) {
//         console.error("Error:", error);
//         document.getElementById("result").innerText = "Error fetching prediction. Please try again.";
//     }
// });


document.getElementById("predictForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        state: document.getElementById("field1").value,
        sex: document.getElementById("field2").value,
        generalHealth: document.getElementById("field3").value,
        physicalHealthDays: parseInt(document.getElementById("field4").value, 10),
        mentalHealthDays: parseInt(document.getElementById("field5").value, 10),
        lastCheckupTime: document.getElementById("field6").value,
        physicalActivities: document.getElementById("field7").value,
        sleepHours: parseInt(document.getElementById("field8").value, 10),
        removedTeeth: document.getElementById("field9").value,
        hadAngina: document.getElementById("field10").value,
        hadStroke: document.getElementById("field11").value,
        hadAsthma: document.getElementById("field12").value,
        hadSkinCancer: document.getElementById("field13").value,
        hadCOPD: document.getElementById("field14").value,
        hadDepressiveDisorder: document.getElementById("field15").value,
        hadKidneyDisease: document.getElementById("field16").value,
        hadArthritis: document.getElementById("field17").value,
        hadDiabetes: document.getElementById("field18").value,
        deafOrHardOfHearing: document.getElementById("field19").value,
        blindOrVisionDifficulty: document.getElementById("field20").value,
        smokerStatus: document.getElementById("field21").value,
        raceEthnicityCategory: document.getElementById("field22").value,
        ageCategory: document.getElementById("field23").value,
        heightInMeters: parseFloat(document.getElementById("field24").value),
        weightInKilograms: parseFloat(document.getElementById("field25").value),
        bmi: parseFloat(document.getElementById("field26").value)
    };

    try {
        const response = await fetch("https://2c2930de10934de28b7c17a09afa6c99.app.posit.cloud/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        document.getElementById("result").innerText = `Prediction: ${result.prediction}`;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerText = "Error: Could not fetch prediction. Check your API or connection.";
    }
});
