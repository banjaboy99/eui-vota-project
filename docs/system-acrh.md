# 🏛 System Architecture – E-Voting System

This document explains the architecture of the e-voting system, showing how frontend, backend, and blockchain interact.

---

## 🖥 High-Level Overview

- **Frontend (React + Tailwind)**  
  - Student & Admin portals (separate dashboards).  
  - Handles UI, login, elections, voting, monitoring.  

- **Backend (Node.js/Express)**  
  - API gateway for both Student and Admin.  
  - Handles authentication (JWT), business logic, MongoDB, and Fabric SDK calls.  

- **Databases**
  - **MongoDB (off-chain)** → Student Registry, Candidates, Elections, Audit Logs, Devices.  
  - **CouchDB (Fabric world state)** → Current blockchain state (votes, tallies).  

- **Blockchain (Hyperledger Fabric)**  
  - Chaincode (smart contracts) for casting votes and tallying results.  
  - Ensures immutability and tamper resistance.  

---

## 🔗 Data Flow (Step by Step)

1. **Student Login**
   - Student logs in → Backend verifies via MongoDB → Issues JWT token.

2. **Liveness Check**
   - Student uploads face scan → Backend calls Liveness API → Stores result in MongoDB.

3. **Election Participation**
   - Student requests active election → Backend fetches from MongoDB (candidates, offices).  
   - Student votes → Backend saves to MongoDB (audit) → Submits to Fabric chaincode.  
   - Chaincode writes transaction to blockchain ledger → Updates CouchDB world state.

4. **Admin Dashboard**
   - Admin logs in → Backend verifies credentials (MongoDB).  
   - Admin can create/manage elections, add candidates, and monitor devices.  
   - Live monitoring fetches vote counts from Fabric (via CouchDB world state).  

5. **Results & Audit Logs**
   - Students see **past election results** (MongoDB + CouchDB tally).  
   - Admins access **audit logs** (MongoDB) to trace suspicious devices & activities.

---

## 🗂 Component Interaction Diagram

