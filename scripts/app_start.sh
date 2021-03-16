cd /home/ubuntu/api

# create new env variable with mongo url
echo "MONGO_URL=\"fake value\"" | sudo tee .env

# build and run the server
sudo npm run build
sudo pm2 start build/app.js