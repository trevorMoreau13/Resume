# AWS Lightsail Node.js Deployment Guide

This guide will walk you through deploying your resume website on AWS Lightsail using Node.js.

## Prerequisites

- An AWS account
- Your resume website files uploaded to GitHub (see GITHUB_SETUP.md)
- Basic familiarity with command line and SSH

## Step 1: Create a Lightsail Instance

1. Log in to the [AWS Lightsail console](https://lightsail.aws.amazon.com/)
2. Click "Create instance"
3. Select a Region and Availability Zone close to your target audience
4. Under "Select a platform", choose "Linux/Unix"
5. Under "Select a blueprint", choose "Node.js"
6. Choose an instance plan (the smallest plan should be sufficient for this static website)
7. Name your instance (e.g., "trevor-moreau-resume")
8. Click "Create instance"
9. Wait for the instance to start (this may take a few minutes)

## Step 2: Configure SSH Access

1. In the Lightsail console, select your instance
2. Go to the "Connect" tab
3. You can either:
   - Use the browser-based SSH client by clicking "Connect using SSH"
   - Download the SSH key and use your own terminal

## Step 3: Clone Your GitHub Repository

1. Connect to your instance via SSH
2. Clone your GitHub repository:

```bash
# Navigate to the bitnami application directory
cd /opt/bitnami/apache/htdocs

# Remove the default files (backup if needed)
sudo mv index.html index.html.bak

# Clone your GitHub repository
sudo git clone https://github.com/yourusername/trevor-moreau-resume.git .
```

Note: The final dot (.) in the git clone command means "clone into the current directory"

## Step 4: Set Up a Simple Node.js Server

1. Create a server.js file:

```bash
sudo nano server.js
```

2. Add the following code:

```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for all routes (for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

3. Save and exit (Ctrl+X, then Y, then Enter)

4. Install Express:

```bash
sudo npm install express
```

## Step 5: Configure the Server to Start Automatically

1. Create a PM2 configuration:

```bash
sudo npm install -g pm2
sudo pm2 start server.js
sudo pm2 save
sudo pm2 startup
```

2. Follow any additional instructions provided by the pm2 startup command

## Step 6: Configure Networking

1. Go back to the AWS Lightsail console
2. Select your instance
3. Go to the "Networking" tab
4. Under "Firewall", add a rule to allow HTTP traffic:
   - Application: HTTP
   - Protocol: TCP
   - Port: 80
5. Add another rule for HTTPS if you plan to use SSL:
   - Application: HTTPS
   - Protocol: TCP
   - Port: 443

## Step 7: Configure Apache as a Reverse Proxy

1. Connect to your instance via SSH
2. Edit the Apache configuration:

```bash
sudo nano /opt/bitnami/apache/conf/bitnami/bitnami.conf
```

3. Find the VirtualHost section and modify it to include:

```apache
<VirtualHost _default_:80>
    # ... existing configuration ...
    
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    # ... rest of existing configuration ...
</VirtualHost>
```

4. Save and exit (Ctrl+X, then Y, then Enter)
5. Restart Apache:

```bash
sudo /opt/bitnami/ctlscript.sh restart apache
```

## Step 8: Access Your Website

1. In the Lightsail console, find your instance's public IP address
2. Enter this IP address in your web browser
3. You should see your resume website

## Step 9: Set Up a Domain Name (Optional)

1. Register a domain name if you don't have one
2. In the Lightsail console, go to the "Networking" tab
3. Under "DNS zones", create a DNS zone for your domain
4. Follow the instructions to update your domain's name servers
5. Create an A record pointing to your instance's IP address

## Troubleshooting

- If your website doesn't appear, check the Apache error logs:
  ```bash
  sudo tail -f /opt/bitnami/apache/logs/error_log
  ```

- If you need to restart your Node.js application:
  ```bash
  sudo pm2 restart server
  ```

- If you update your website files, pull the latest changes:
  ```bash
  cd /opt/bitnami/apache/htdocs
  sudo git pull
  ```

## Maintenance and Updates

To update your website in the future:

1. Push changes to your GitHub repository
2. SSH into your Lightsail instance
3. Navigate to your website directory:
   ```bash
   cd /opt/bitnami/apache/htdocs
   ```
4. Pull the latest changes:
   ```bash
   sudo git pull
   ```

Your resume website is now deployed on AWS Lightsail using Node.js!
