#!/bin/bash

clear

cd ..

npm install

clear

cd setup

node config.js

echo 'main file: (app.js)' 
read -p '-> ' mainfile

cd ..

clear

node $mainfile
