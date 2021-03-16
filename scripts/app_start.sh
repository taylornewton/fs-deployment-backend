cd /home/ubuntu/api

# create new env variable with mongo url
sudo echo "MONGO_URL=\"fake value\"" >> .env

# build and run the server
sudo npm run build
sudo npm run start