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
- Docker file included uses `nginx` to serve production buid.
- Run `docker build -t <image-name> .` in directory to build the image.
- Run `docker run -p <port_number> : 80 <image-name>` to start UI on `<port-number>`.

### Deployment setup to Kubernetes


