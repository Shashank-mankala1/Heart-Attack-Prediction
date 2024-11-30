# Use the official R base image
FROM rocker/r-ver:4.3.1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    libssl-dev \
    libxml2-dev \
    && apt-get clean

# Install R packages needed for the API
RUN R -e "install.packages('plumber')"

# Set the working directory
WORKDIR /app

# Copy the API script and the model into the container
COPY model_api.R /app/model_api.R
COPY heart_model.RData /app/heart_model.RData

# Expose the port that the API will run on
EXPOSE 8000

# Start the R API
CMD ["Rscript", "/app/model_api.R"]
