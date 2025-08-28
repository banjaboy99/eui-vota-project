#!/bin/bash

# Where the client will store the MSP materials
export FABRIC_CA_CLIENT_HOME=${PWD}/organizations/peerOrganizations/org1.example.com

# Enroll the CA admin
echo ">>> Enrolling the CA Admin"
fabric-ca-client enroll -u https://admin:adminpw@localhost:7054 \
  --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

# Create the org1 msp folders if missing
mkdir -p ${FABRIC_CA_CLIENT_HOME}/msp
mkdir -p ${FABRIC_CA_CLIENT_HOME}/peers
mkdir -p ${FABRIC_CA_CLIENT_HOME}/users

# Register the peer
echo ">>> Registering peer0"
fabric-ca-client register --id.name peer0 --id.secret peer0pw --id.type peer \
  --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

# Register the user
echo ">>> Registering user1"
fabric-ca-client register --id.name user1 --id.secret user1pw --id.type client \
  --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

# Register the org admin
echo ">>> Registering org1admin"
fabric-ca-client register --id.name org1admin --id.secret org1adminpw --id.type admin \
  --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

# Enroll peer0
echo ">>> Enrolling peer0"
fabric-ca-client enroll -u https://peer0:peer0pw@localhost:7054 \
  -M ${FABRIC_CA_CLIENT_HOME}/peers/peer0.org1.example.com/msp \
  --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

# Enroll user1
echo ">>> Enrolling user1"
fabric-ca-client enroll -u https://user1:user1pw@localhost:7054 \
  -M ${FABRIC_CA_CLIENT_HOME}/users/User1@org1.example.com/msp \
  --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

# Enroll org admin
echo ">>> Enrolling org1admin"
fabric-ca-client enroll -u https://org1admin:org1adminpw@localhost:7054 \
  -M ${FABRIC_CA_CLIENT_HOME}/users/Admin@org1.example.com/msp \
  --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

echo "✅ Org1 identities registered and enrolled successfully!"
