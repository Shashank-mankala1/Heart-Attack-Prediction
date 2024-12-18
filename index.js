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
document.getElementById("predictForm").onsubmit = function(event) {
    event.preventDefault();
    const field1 = document.getElementById("field1").value;
    const field2 = document.getElementById("field2").value;
    const field3 = document.getElementById("field3").value;
    alert(`Submitted Values:\nField 1: ${field1}\nField 2: ${field2}\nField 3: ${field3}`);
    modal.style.display = "none"; // Close modal after submission
}