## How Docker Tags Are Generated

Every time code is pushed to the main branch, the CI/CD pipeline 
automatically builds and pushes the Docker image with two tags:

1. `latest` — always points to the most recent build
2. Git Commit SHA — a unique identifier for that exact commit
   e.g. `rayversecloud/hello-world-app:e17f7a065ef422dd...`

This means every build is traceable. If a bug is introduced, 
you can pull any previous version by its exact commit SHA and 
roll back instantly.

The SHA is generated automatically by GitHub Actions using:
`${{ github.sha }}`