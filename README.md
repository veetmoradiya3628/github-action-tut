- What is Github actions ?
    - Github actions is a continues integration and continuous delivery (CI/CD) platform built directly into Github.
    - It allows you to automate various tasks within your software development workflow.
- Components
    - Workflows
        - Configurable automated process that will run one or more jobs.
        - defined in the .github/workflows path in github repository.
        - defined by a YAML file
    - Jobs
        - A job is a set of steps in a workflow that is executed on the same runner.
    - Events
        - An event is a specific activity in a repository that triggers a workflow run.
        - on pull request, opens a issue etc. 
    - Actions
        - An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task.
    - Runners
        - A runner is a server that runs your workflows when they're triggered. Each runner can run a single job at a time.

#### Variables & Secret in Github Actions
- Variables for single workflow
    - The entire workflow, by using env at the top level of workflow file
    - The contents of a job within a workflow
    - A specific step within a job
- Configuration Variables for Multiple workflows
    - create configuration variables for use across multiple workflows, and can define them at either the organization, repository or environment level.
- Context Variables from Github Metadata
    - Contexts are a way to access information about workflow runs, variables, runner environments, jobs and steps.
- Inputs for Manually triggered workflow
    - When using the workflow_dispatch event, you can optionally specify inputs that are passed to the workflow.

#### Runners in Github Actions
- Runners are the machines that execute jobs in a Github Actions Workflow
- Github Hosted vs. Self Hosted

- How to setup a self hosted runners on Google Cloud VM ?
    - To setup self hosted runner we can configure from github documentation.

#### Reusable workflow in GitHub Actions
- repeated usable workflow is workflow which can be reused across the organization repository and triggered with workflow_call dispatch.

#### Starter workflow in Github Actions
- Starter workflows are templates that help you to create your own Github Actions Workflows for a repository.
- They offer an alternative to starting from a blank workflow file and are useful because some of the work will already have been done for you.
- default starter workflow can be configured at organization level where public repository with .github name should exists and create workflow in it.
- starter workflow can be considered as reusable across all the public repositories in the organization.

#### Logging and Monitoring in Github Actions
- Log retention & artifact retention policies in the Github 

#### Learn Items

- Automatic infrastructure provisioning with Terraform ? - need to learn terraform first.
- Automatic readme file creation using terradoc ? - need to learn terraform first.
- Keyless authentication from Github Actions to Google cloud using Workload Identity Fedration.

#### Hands on Items

1. CI/CD for MEAN App
    - Topics: GitHub Actions, Docker, Cloud Run, MongoDB Atlas
    - Action Items:
        - Set up GitHub Actions for linting, testing, and build
        - Deploy Express backend to Cloud Run
        - Deploy Angular frontend to Firebase Hosting
2. Serverless To-Do App
    - Topics: Firebase Hosting, Firestore, Cloud Functions
    - Action Items:
        - Deploy Angular frontend to Firebase Hosting
        - Deploy Express API as a Cloud Function
        - Automate deployment via GitHub Actions
3. API Gateway with Cloud Endpoints
    - Topics: Cloud Endpoints, JWT Auth, Cloud Run
    - Action Items:
        - Deploy Express API to Cloud Run
        - Secure API with JWT (Firebase Auth)
        - Automate deployment via GitHub Actions
4. Background Job Processing with Pub/Sub
    - Topics: Pub/Sub, Cloud Functions, Event-Driven Architecture
    - Action Items:
        - Publish messages from Express API to Pub/Sub
        - Process messages with Cloud Functions
        - Automate deployment via GitHub Actions
5. Secrets Management with GCP
    - Topics: GCP Secret Manager, Cloud Run, Secure Credentials
    - Action Items:
        - Store MongoDB credentials in Secret Manager
        - Retrieve secrets dynamically in GitHub Actions
        - Deploy MEAN app securely
6. Automated MongoDB Backup
    - Topics: MongoDB, Cloud Storage, Scheduled Backups
    - Action Items:
        - Use GitHub Actions cron job for backups
        - Export MongoDB data using mongodump
        - Upload to Cloud Storage
7. Auto-Scaling API with Cloud Run
    - Topics: Cloud Run, Load Testing, Auto-Scaling
    - Action Items:
        - Deploy Express API on Cloud Run
        - Configure auto-scaling
        - Use Locust for automated load testing
8. Cloud Logging & Monitoring
    - Topics: Cloud Logging, Monitoring, Alerts
    - Action Items:
        - Integrate Cloud Logging in Express backend
        - Set up error rate alerts
        - Automate deployment with GitHub Actions
9. Real-time Notifications with Firestore
    - Topics: Firestore Triggers, Cloud Functions, Push Notifications
    - Action Items:
        - Deploy Angular app to Firebase Hosting
        - Listen for Firestore updates with Cloud Functions
        - Send real-time notifications
10. Automated PR Preview Deployments
    - Topics: Firebase Hosting, GitHub Actions, Preview Deployments
    - Action Items:
        - Deploy Angular preview versions for each PR
        - Automatically delete previews when PR is closed