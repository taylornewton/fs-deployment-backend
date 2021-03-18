cd /home/ubuntu/api

# install project dependencies
sudo npm install

# install process manager
sudo npm install pm2 -g

# Stop any currently running processes (if running from last deployment)
sudo pm2 kill

# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-2.0.30.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install --update

# Copy .env file from S3
sudo /usr/local/bin/aws s3 cp s3://bon-appetit-api-secrets/.env .env
