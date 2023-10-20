# React three-js portfolio

1. install node.js :: brew install node.
2. Use : `npm create vite@latest ./ -- --template react` to create bare react-project
3. Run command :: `npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom three react-tilt-parallax` to install necessary dependencies.
        Note :: react-tilt is legacy dependency , use --legacy-peer-dep flag or install react-parallax-tilt
4. Initialize tailwind.css:
    ```
    npm install -D tailwindcss
    npm install --legacy-peer-deps -D postcss autoprefixer
    npx tailwindcss init
    ```
5. Run command : `npm run dev` to serve the UI during local development.

### Docker setup.

- Install docker via offical website : `https://www.docker.com/get-started/`
- Dockerfile uses `nginx` to serve production buid.
- Run `docker build -t <image-name> .` in directory to build the image.
- Run `docker run -p <port_number> : 80 <image-name>` to start UI on `<port-number>`.
*Note* : 
    - No CVEs as per docker scout scans until 8/10/2023.
    - 2 stages : npm build + serve via nginx

### CICD setup:

- Use Azure Pipelines to build and deploy to AKS.
Note :: hosted parallelism for Azure Devops needs to be activated via form.

- *Alternative* : Use Github Actions build and push docker image.
    1. Create an `Azure Container Registry` either using CLI / portal.
    2. Enable Admin for your container registry and setup secrets for your github project.
       Goto : `<repository>/settings/secrets and variables/Actions`.  
       Define Repoistory Secrets.
    3. Create .github/workflows/main.yml file as per requirement.

### Deployment setup to Kubernetes

 - Prerequisites:
    ** Integrate Github actions to Azure: https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure?tabs=azure-portal%2Clinux

    - Run command `az ad sp create-for-rbac --name "login-service-principal" --role contributor --scopes /subscriptions/{subscription_id}/resourceGroups/{resource_group_name_of_AKS} --json-auth` on azure CLI or cloud shell.
    - Extract output JSON and set it as a secret named : `AZURE_LOGIN_CREDS` in github settings.
    - Connect your AKS to ACR : `az aks update -n myAKSCluster -g myResourceGroup --attach-acr <acr-name>`


1. Azure Devops
 - Run `azure-pipelines.yml` via Azure devops portal.
 - Verify container within AKS instance.

2. Github Action    
 - aks_deploy.yml is can be triggered via workflows tab in Github .
 - manifests/deployment.yml and manifests/service.yml are k8s spec files.

 ---

 ## Workflow to expose K8s services to internet.

 - Use ```kubectl apply -f deployment.yml -n <namespace>``` to deploy UI
 - Use ```kubectl apply -f service.yml -n <namespace>``` deploy service 
 - Install `ingress-controller` 
 - Update the DNS's A record to map to ingress-controller's external IP address.
 - Apply Ingress resource.
 - Check out `http` based insecure website , verify it's accessible.
 - Install `cert-manager` using helm. (https://cert-manager.io/docs/)
 - Apply `issuer.yml` and `certificate.yml`.
 - Update the `tls` section of ingress.yml and re-apply.
 - Test secure https website.



