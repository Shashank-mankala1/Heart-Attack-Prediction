# library(plumber)

# # Load your model
# load("/app/heart_model.RData")

# # Define the API
# pr <- plumb("api_routes.R")  # Replace with your route file if needed

# # Run the API on port 8000
# port <- as.numeric(Sys.getenv("PORT", "8000"))  # Default to 8000 if not set
# pr$run(host = "0.0.0.0", port = port)

library(plumber)

# Load your model
load("/app/heart_model.RData")

# Define the API
# You would typically create a function that does the prediction here
# For demonstration, I'll define a simple function that uses the loaded model

# Sample prediction function
# Let's assume your model is named "heart_model" and is trained to predict based on the input data.
predict_heart_disease <- function(age, sex, chest_pain, blood_pressure) {
  # Assuming your model takes a data frame and returns a prediction
  new_data <- data.frame(age = age, sex = sex, chest_pain = chest_pain, blood_pressure = blood_pressure)
  prediction <- predict(heart_model, new_data)  # Make sure the model variable name matches
  return(list(prediction = prediction))
}

# Create a Plumber router
pr <- plumb()

# Define the API endpoint
# Example: POST /predict
# Expecting JSON data with fields: age, sex, chest_pain, blood_pressure
pr$handle("POST", "/predict", function(req, res) {
  body <- jsonlite::fromJSON(req$postBody)
  
  # Extract inputs from the JSON body
  age <- body$age
  sex <- body$sex
  chest_pain <- body$chest_pain
  blood_pressure <- body$blood_pressure
  
  # Call the prediction function
  prediction <- predict_heart_disease(age, sex, chest_pain, blood_pressure)
  
  # Return the prediction as a JSON response
  res$body <- jsonlite::toJSON(prediction)
  res
})

# Start the API on port 8000 (or the port provided by Render)
port <- as.numeric(Sys.getenv("PORT", "8000"))  # Use Render's dynamic port if available
pr$run(host = "0.0.0.0", port = port)

