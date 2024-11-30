library(plumber)

# Load your model
load("/app/heart_model.RData")

# Define the API
pr <- plumb("api_routes.R")  # Replace with your route file if needed

# Run the API on port 8000
pr$run(host = "0.0.0.0", port = 8000)

