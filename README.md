# Docker & Kubernetes

### Table of Contents

| No. | Questions                                                                                                                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **Docker**                                                                                                                                                                                                                   |
| 1   | [What is Docker?](#what-is-docker)                                                                                                                                                                                                 |
| 2   | [What is docker Container?](#containers)                                                                                                                                                                                                 |
| 3   | [WHat is docker image?](#images)                                                                                                                                                                                                 |
| 4   | [What is DOCKERFILE?](#dockerfile)                                                                                                                                                                                                 |
| 5   | [Managing docker images](#managing-docker-images)                                                                                                                                                                                                 |
| 6   | [Managing docker containers](#managing-docker-containers)                                                                                                                                                                                                 |
| 7  | [Docker attached and de attached mode](#docker-attached-and-de-attached-mode)                                                                                                                                                                                                 |

                                                            
1. ### What is Docker?
Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

**[⬆ Back to Top](#table-of-contents)**

2. ### What is docker containers
A Docker container is a lightweight, standalone, and executable software package that includes everything needed to run an application or service, including the code, system tools, libraries, and settings.

Docker containers are created from Docker images, which are essentially snapshots of an application or service and its dependencies at a particular point in time. Each container runs in an isolated environment, separate from the host operating system and other containers, but with access to the host's resources such as CPU, memory, and network.

Docker containers are highly portable and can be deployed on any machine that supports Docker, regardless of the underlying operating system and hardware. They are widely used in software development and deployment workflows to ensure consistency and reliability across different environments, from development to production.

**[⬆ Back to Top](#table-of-contents)**

3. ### What is docker iamge?
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

**[⬆ Back to Top](#table-of-contents)**


5. ### Managing docker images
- `docker images`: List all local images on your system
- `docker search <image-name>`: Search for images on Docker Hub or other registries
- `docker pull <image-name>`: Download an image from a registry
- `docker build -t <image-name> <path-to-dockerfile>`: Build a new image from a Dockerfile and tag it with a name
- `docker tag <source-image> <new-image-name>:<tag>`: Tag an existing image with a new name and version tag
- `docker push <image-name>`: Push an image to a registry
- `docker rmi <image-name>`: Remove an image from your local system
- `docker --rm <image-name>`: Remove a container after it has stopped running
- `docker image prune`: Remove all unused images from your local system
- `docker image inspect <image-name>`: View detailed information about an image
- `docker cp <path> <container-name>:<path>`: Copy files or folders from local system to a container
- `docker cp <container-name>:<path> <path>`: Copy files or folders from a container to local system


**[⬆ Back to Top](#table-of-contents)**

6. ### Managing docker containers

- `docker run <image-name>`: Create and start a new container from an image
- `docker ps`: List all running containers on your system
- `docker ps -a`: List all containers, including stopped ones
- `docker stop <container-id>`: Stop a running container
- `docker rm <container-id>`: Remove a stopped container
- `docker logs <container-id>`: View the logs of a container

In addition to these commands, Docker also provides a range of options and flags that can be used to customize the behavior of images and containers. For more information, you can refer to the Docker documentation or run docker --help to see the available options.

**[⬆ Back to Top](#table-of-contents)**


7. ### Docker attached and de attached mode
When you run a container, you can specify whether it should run in attached or detached mode. In attached mode, the container's standard input, output, and error streams are connected to the terminal. In detached mode, the container runs in the background and does not receive input from the terminal.
- to run a container in detached mode, you can use the -d flag:
```bash
docker run -d <container-name>
```
- to attach to a running container, you can use the docker attach command:
```bash
docker attach <container-name>
```
- to see logs of a detached container, you can use the docker logs command:
```bash
docker logs <container-name>
```


8. ### Push docker image to docker hub
- First, you need to create a Docker Hub account and create a new repository for your image.
- Then, you need to log in to Docker Hub using the docker login command:
```bash
docker login
```
- Next, you need to tag your image with the name of the repository you created on Docker Hub:
```bash
docker tag <image-name> <docker-hub-username>/<repository-name>
```
- Finally, you can push your image to Docker Hub using the docker push command:
```bash
docker push <docker-hub-username>/<repository-name>
```
**[⬆ Back to Top](#table-of-contents)**



9. ### Pulling and Using shared images
- To pull an image from Docker Hub, you can use the docker pull command:
```bash
docker pull <image-name>
```

- To run a container from an image and map the container's port 80 to port 8080 on the host, you can use the -p flag:
```bash
docker run -p 8080:80 <image-name>
```

