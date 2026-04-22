# Milestone 2 — She Code Africa
## Racheal Adeyemo

---

## Terraform Provisioning
Five AWS infrastructure tasks provisioned using Terraform:
- Task 1: EC2 Instance
- Task 2: S3 Bucket with Versioning
- Task 3: Security Group
- Task 4: VPC Network
- Task 5: EC2 Instance inside Custom VPC

---

## Linux CLI / Git
Git repository initialized, files staged, committed and pushed to GitHub.

---

## Cloud Concepts
Essay and architecture diagram covering AWS regions, EC2, S3, IAM, and Security Groups.

---

## AWS Security
Essay and corrected architecture diagram covering IAM, MFA, restricted SSH, and private S3.

---

## Container Fundamentals & CI/CD Pipeline

### Steps taken:
1. Created a Hello World HTML app
2. Wrote a Dockerfile using nginx:alpine
3. Built the image locally using `docker build`
4. Ran the container using `docker run`
5. Tagged and pushed image to Docker Hub manually
6. Created a GitHub Actions CI/CD pipeline that automatically builds and pushes the image to Docker Hub on every push to main

### Docker Hub Repository:
https://hub.docker.com/r/rayversecloud/hello-world-app

### CI/CD Pipeline:
.github/workflows/docker-pipeline.yml