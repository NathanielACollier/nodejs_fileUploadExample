# nodejs File Upload Example

## /angularClient
+ This folder contains the angular client that provides a way to call the nodejs file upload API
+ Build Requirements
    + Need node
+ Build instructions
    ```
    cd angularClient
    npm install
    ng build --watch
    ```
    + The angular cli is configured to build the files into the nodejs express server's static files directory

## /nodejsServerApps
+ This folder provides the nodejs file upload API, and hosts the angular app.
+ Build Requirements
    + Need node
+ Build instructions
    ```
    cd nodejsServerApp
    npm install
    npm run startServer
    ```