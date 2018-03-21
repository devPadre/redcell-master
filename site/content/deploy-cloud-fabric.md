# Demo Blockchain Instructions - Google Cloud

## Spin up your Google Cloud Compute Instance
```Ubuntu 1604-lts
2 CPU 20GB
Compute engine
Access your instance
SSH “remote access”
```
## Install Pre-reqs  
[prerequisits](https://medium.com/google-cloud/deploy-fabcar-on-hyperledger-fabric-93c082c31b7a)

```
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get install python
```

## Install Go go1.9.x
[instructions](https://www.samclarke.com/installing-go-1-9-on-ubuntu-16-04/)  355MB
```
sudo add-apt-repository ppa:gophers/archive

sudo apt update

sudo apt-get install golang-1.9-go

echo "export PATH=\$PATH:/usr/lib/go-1.9/bin" >> ~/.profile

source ~/.profile
```

## Install node
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt-get install -y build-essential

nodejs -v

npm -v
```

## Install docker-ce
[instructions](https://docs.docker.com/install/linux/docker-ce/ubuntu/#extra-steps-for-aufs)
For UBUNTU - you need to remove the older docker.io
```
sudo apt-get remove docker docker-engine docker.io

sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update

sudo apt-get install docker-ce

sudo docker run hello-world

sudo groupadd docker

sudo usermod -aG docker $USER

sudo systemctl enable docker

docker --version

docker run hello-world
```
You may need to close the shell and open a new one.

## Install docker-compose
[install](https://docs.docker.com/compose/install/#install-compose)
```
sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version

```

## Install JQ   
```sudo apt-get install jq```

## npm install gulp
npm install gulp -g

## Install Hyperledger Fabric

Download and install the binaries - make sure they are compatible:
```
curl -sSL https://goo.gl/6wtTN5 | bash -s 1.0.0
```
Alternatively, you can download just the binaries that are necessary:

Hyperledger Fabric is hosted in a docker hub: https://hub.docker.com/u/hyperledger/
Since there are not necessarily “latest” versions, you may want to find the actual latest tags and pull them.
Individually you can pull them like: docker pull hyperledger/fabric-peer:latest
Pull up docker images for required components: (may have to use sudo)

```
TAG=x86_64-1.0.6
for IMAGE in orderer couchdb peer ca tools
do
  docker pull hyperledger/fabric-${IMAGE}:${TAG} && \
  docker tag hyperledger/fabric-${IMAGE}:${TAG} hyperledger/fabric-${IMAGE}:latest
done

TAG=x86_64-0.4.6
for IMAGE in baseimage
do
    docker pull hyperledger/fabric-${IMAGE}:$[TAG] && \
    docker tag hyperledger/fabric-${IMAGE}:${TAG}
    hyperledger/fabric-${IMAGE}:latest
done

```
Individually and for additional requirements:

```docker pull hyperledger/fabric-peer:x86_64-1.0.6
docker pull hyperledger/fabric-ca:x86_64-1.0.6
docker pull hyperledger/fabric-orderer:x86_64-1.0.6
docker pull hyperledger/fabric-couchdb:x86_64-1.0.6
docker pull hyperledger/fabric-baseimage:x86_64-0.4.6
docker pull hyperledger/fabric-tools:x86_64-1.0.6
docker pull hyperledger/fabric-membersrvc:latest
```
You will need to tag the images with "latest" - a sample is below:

```
docker pull hyperledger/fabric-baseimage:x86_64-0.4.6
docker tag \
hyperledger/fabric-baseimage:x86_64-0.4.6 \
hyperledger/fabric-baseimage:latest
```
Add the binaries to your .profile path

```
export PATH=$PWD/bin:$PATH
```

Worryingly, some people seem to believe that the latest tag will be automatically updated — that if I pull an image marked latest, docker will take care of checking it is still the newest version before running it each time. This is emphatically not the case – just as with every other tag, you still need to manually docker pull new versions.

## Launch Fabric with 3 peers

https://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html

npm install

./startFabric.sh

mkdir /fabric
cd /fabric
sudo touch docker-compose.yml
sudo nano docker-compose.yml

```
vp0:
#  container_name: vp0
  image: hyperledger/fabric-peer
  ports:
    - "7050:7050"
    - "7051:7051"
    - "7052:7052"
  environment:
  - CORE_PEER_ADDRESSAUTODETECT=true
  - CORE_VM_ENDPOINT=unix:///var/run/docker.sock
  - CORE_LOGGING_LEVEL=WARN
  - CORE_PEER_ID=vp0
  - CORE_PEER_VALIDATOR_CONSENSUS_PLUGIN=noops
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
  command: peer node start
vp1:
#  container_name: vp1
  image: hyperledger/fabric-peer
  environment:
  - CORE_PEER_ADDRESSAUTODETECT=true
  - CORE_VM_ENDPOINT=unix:///var/run/docker.sock
  - CORE_LOGGING_LEVEL=WARN
  - CORE_PEER_ID=vp1
  - CORE_PEER_DISCOVERY_ROOTNODE=vp0:7051
  - CORE_PEER_VALIDATOR_CONSENSUS_PLUGIN=noops
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
  command: peer node start
  links:
  - vp0
vp2:
#  container_name: vp2
  image: hyperledger/fabric-peer
  environment:
  - CORE_PEER_ADDRESSAUTODETECT=true
  - CORE_VM_ENDPOINT=unix:///var/run/docker.sock
  - CORE_LOGGING_LEVEL=WARN
  - CORE_PEER_ID=vp2
  - CORE_PEER_DISCOVERY_ROOTNODE=vp0:7051
  - CORE_PEER_VALIDATOR_CONSENSUS_PLUGIN=noops
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
  command: peer node start
  links:
  - vp0
```

Then get set the network up with docker-compose

```
docker-compose up

docker ps

```
let it run and check the name for vp0  - it may not be simply vp0

```
curl http://$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' fabric_vp0_1):7050-7052-7050-7052/tcp
```


Helpful docker commands

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
 [If issues with sudo npm](http://www.competa.com/blog/how-to-run-npm-without-sudo/)


 ```
sudo apt-get install -y nginx


gcloud compute ssh talent-exchange \
    --project redcell-191816 \
    --zone us-east1-c \
    -- -L 2200:localhost:8080


docker run \
--rm \
--interactive \
--tty \
--publish=3001:3001 \
--net=host \
node /bin/bash
 ```

 http://blockchain.infinite-blue.com/wp-content/uploads/Fabric-to-Marbles-Lab-Alex-Kim_revised-0516.pdf


## Set up Apache Web server

```
sudo apt-get update && sudo apt-get install apache2 -y

echo '<!doctype html><html><body><h1>Hello World!</h1></body></html>' | sudo tee /var/www/html/index.html

sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3001
```
Utilize the iptables command to point to port 3001  (or whichever port is being served by the app)

## IPTABLES
One way is to set up an iptables forwarding rule. iptables will then bind to the desired port (80 or 443) and forward all incoming traffic to your application's port, such as 1337.

However, this solution requires that you persist the iptables rule so that it gets executed on system startup, because your machine will crash or reboot eventually.

Redirecting traffic from one port to another
Let's issue the following command to redirect incoming traffic on port 80 to our Node.js app that is listening on port 1337:
```
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 1337
```
Automatically re-apply the rule on system reboot
Next, go ahead and install iptables-persistent to save the rule permanently and have it reapplied automatically when your system reboots:
```
sudo apt-get install iptables-persistent
sudo /etc/init.d/iptables-persistent save 
```
That's it. Now your Node.js app is accessible on port 80 and you should be good to go.



 ## Check listening ports

 lsof -i -P | grep LISTEN


 /root/fabric-samples/fabcar/hfc-key-store/