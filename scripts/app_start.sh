cd /home/ubuntu/api

# build and run the server
sudo npm run build
sudo pm2 start build/app.js