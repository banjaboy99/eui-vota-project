#!/bin/bash

# Where the Orderer MSP materials will be stored
export FABRIC_CA_CLIENT_HOME=${PWD}/organizations/ordererOrganizations/example.com

# Enroll the Orderer CA admin
echo ">>> Enrolling the Orderer CA Admin"
fabric-ca-client enroll -u https://admin:adminpw@localhost:9054 \
  --tls.certfiles ${PWD}/organizations/fabric-ca/ordererOrg/tls-cert.pem

# Create required directories
mkdir -p ${FABRIC_CA_CLIENT_HOME}/msp
mkdir -p ${FABRIC_CA_CLIENT_HOME}/orderers
mkdir -p ${FABRIC_CA_CLIENT_HOME}/users

# Register orderer
echo ">>> Registering orderer"
fabric-ca-client register --id.name orderer --id.secret ordererpw --id.type orderer \
  --tls.certfiles ${PWD}/organizations/fabric-ca/ordererOrg/tls-cert.pem

# Register orderer admin
echo ">>> Registering ordererAdmin"
fabric-ca-client register --id.name ordererAdmin --id.secret ordererAdminpw --id.type admin \
  --tls.certfiles ${PWD}/organizations/fabric-ca/ordererOrg/tls-cert.pem

# Enroll orderer
echo ">>> Enrolling orderer"
fabric-ca-client enroll -u https://orderer:ordererpw@localhost:9054 \
  -M ${FABRIC_CA_CLIENT_HOME}/orderers/orderer.example.com/msp \
  --tls.certfiles ${PWD}/organizations/fabric-ca/ordererOrg/tls-cert.pem

# Enroll orderer admin
echo ">>> Enrolling ordererAdmin"
fabric-ca-client enroll -u https://ordererAdmin:ordererAdminpw@localhost:9054 \
  -M ${FABRIC_CA_CLIENT_HOME}/users/Admin@example.com/msp \
  --tls.certfiles ${PWD}/organizations/fabric-ca/ordererOrg/tls-cert.pem

echo "✅ Orderer identities registered and enrolled successfully!"

