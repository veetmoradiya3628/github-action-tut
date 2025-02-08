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