# Docker & Kubernetes

### Table of Contents

| No. | Questions                                                                                                                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **Docker**                                                                                                                                                                                                                   |
| 1   | [## What is Docker?](#what-is-docker)                                                                                                                                                                                                 |
| 2   | [## Containers](#containers)                                                                                                                                                                                                 |
| 3   | [## Images](#images)                                                                                                                                                                                                 |
| 4   | [## DOCKERFILE](#dockerfile)                                                                                                                                                                                                 |
                                                            
1. ### What is Docker?
Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

**[⬆ Back to Top](#table-of-contents)**

2. ### Containers
A Docker container is a lightweight, standalone, and executable software package that includes everything needed to run an application or service, including the code, system tools, libraries, and settings.

Docker containers are created from Docker images, which are essentially snapshots of an application or service and its dependencies at a particular point in time. Each container runs in an isolated environment, separate from the host operating system and other containers, but with access to the host's resources such as CPU, memory, and network.

Docker containers are highly portable and can be deployed on any machine that supports Docker, regardless of the underlying operating system and hardware. They are widely used in software development and deployment workflows to ensure consistency and reliability across different environments, from development to production.

**[⬆ Back to Top](#table-of-contents)**

3. ### Images
A Docker image is a read-only template or snapshot that contains all the necessary files, dependencies, and configuration required to run a specific application or service in a Docker container.

Docker images are built from a set of instructions called a Dockerfile, which specifies the base image to use, the application code, system libraries, environment variables, and other dependencies. The Dockerfile is used to create a reproducible and consistent image that can be deployed on any Docker-enabled environment.

Docker images can be pulled from a remote repository, such as Docker Hub, or created locally using the Docker CLI or other tools. Once an image is built or downloaded, it can be used to run one or more containers, each of which has its own isolated environment and runs the application or service in a separate instance.

Docker images are designed to be immutable and are versioned using tags or hashes to ensure consistency and reproducibility. They can be shared and reused across teams and organizations, making it easier to manage and deploy complex applications and microservices.

**[⬆ Back to Top](#table-of-contents)**

4. ### DOCKERFILE
A Dockerfile is a text file that contains a set of instructions for building a Docker image. It is used to define the configuration and dependencies required for an application or service to run inside a Docker container.

Here's an example Dockerfile for a simple Python web application:
    
```Dockerfile
# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./app

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . ./app

# Expose port 3000 for the application
EXPOSE 3000

# Start the application when the container launches
CMD ["npm", "start"]

```
This Dockerfile starts by specifying a base image `node`,. It then sets the working directory to `/app` and copies the `package.json` and `package-lock.json` files into the container.

Next, it runs the `npm install` command to install the dependencies specified in `package.json`. It then copies the rest of the application code into the container.

The `EXPOSE` instruction exposes `port 3000` for the application, and the CMD instruction specifies the command to run when the container launches. In this case, it runs the `npm start` command, assuming that the start script is defined in` package.json`.

To build an image from this Dockerfile, you can use the docker build command:
```bash
docker build -t my-node-app .
```
This will create a Docker image with the tag `my-node-app`, based on the instructions in the Dockerfile. You can then run this image as a container using the `docker run` command:

```bash
docker run -p 3000:3000 my-node-app
```    
This will start a container running the Node.js application, which can be accessed by visiting `http://localhost:3000` in a web browser.  

