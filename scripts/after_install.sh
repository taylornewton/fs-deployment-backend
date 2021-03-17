cd /home/ubuntu/api

# install project dependencies
sudo npm install

# install process manager
sudo npm install pm2 -g

# Stop any currently running processes
sudo pm2 kill