#!/bin/bash

sudo chmod -R 777 /home/ec2-user/topictalk-app

# Move to application directory
cd /home/ec2-user/express-app

# Add Node and NPM to the path
export NVM_DIRn="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Install required packages
npm install

node server.js > app.out.log 2> app.err.log < /dev/null &