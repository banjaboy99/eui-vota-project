# 📌 API Specification – E-Voting System

This document defines the API endpoints for the Student and Admin portals.  
It maps **pages → components → backend endpoints**.

---

## 🎓 Student Endpoints

### 🔐 Authentication
- **POST /api/auth/student/login**  
  → Student login with studentID + password.  
  → Returns JWT token.

### 👤 Student Profile
- **GET /api/students/:id**  
  → Fetch student details (name, department, studentID, electionID).  

### 🧑‍💻 Liveness & Biometrics
- **POST /api/students/:id/liveness**  
  → Upload face scan for liveness check.  
  → Returns success/failure.

### 🗳 Elections
- **GET /api/elections/current**  
  → Fetch active election details (candidates, offices, parties).  

- **POST /api/votes**  
  → Cast vote.  
  → Body: `{ studentId, candidateId, electionId, timestamp }`  
  → Writes to MongoDB + submits to Fabric chaincode.  

### 📊 Results & History
- **GET /api/elections/past**  
  → Fetch past elections with summary (dates, offices).  

- **GET /api/elections/:id/results**  
  → Fetch results of a specific election.  
  → Returns data formatted for charts.  

---

## 🧑‍💼 Admin Endpoints

### 🔐 Authentication
- **POST /api/auth/admin/login**  
  → Admin login with staffId + password.  
  → Returns JWT token.

### 📊 Dashboard
- **GET /api/dashboard/stats**  
  → Fetch overall stats (total voters, turnout %, active elections).  

### 👥 Candidates
- **GET /api/candidates**  
  → List all candidates for current election.  

- **POST /api/candidates**  
  → Add a new candidate.  

- **PUT /api/candidates/:id**  
  → Edit candidate bio, photo, party.  

- **DELETE /api/candidates/:id**  
  → Remove a candidate.  

### 🗳 Election Management
- **POST /api/elections**  
  → Create a new election.  

- **PUT /api/elections/:id**  
  → Update election details (start/end times).  

- **GET /api/elections/:id/live**  
  → Get live vote counts + monitoring info.  

### 📡 Monitoring & Devices
- **GET /api/monitoring/devices**  
  → Fetch all registered devices.  

- **PUT /api/monitoring/devices/:id/flag**  
  → Flag device as suspicious.  

### 📜 Audit Logs
- **GET /api/audit**  
  → Fetch audit logs (device ID → student hash → action).  
  → Supports search & filtering.  

---

## 🔗 Mapping Pages → Endpoints

| **Frontend Page**       | **Endpoints Used** |
|--------------------------|--------------------|
| Student → Login          | `POST /api/auth/student/login` |
| Student → LivenessCheck  | `POST /api/students/:id/liveness` |
| Student → Elections      | `GET /api/elections/current`, `POST /api/votes` |
| Student → PastElections  | `GET /api/elections/past`, `GET /api/elections/:id/results` |
| Student → Profile        | `GET /api/students/:id` |
| Admin → Login            | `POST /api/auth/admin/login` |
| Admin → Dashboard        | `GET /api/dashboard/stats` |
| Admin → Candidates       | `GET /api/candidates`, `POST /api/candidates`, `PUT /api/candidates/:id`, `DELETE /api/candidates/:id` |
| Admin → ElectionMonitoring | `GET /api/elections/:id/live`, `GET /api/monitoring/devices`, `PUT /api/monitoring/devices/:id/flag` |
| Admin → ResultChecker    | `GET /api/elections/:id/results` |
| Admin → AuditLogs        | `GET /api/audit` |

---
