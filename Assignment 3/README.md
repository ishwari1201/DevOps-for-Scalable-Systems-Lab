# Assignment 3: Jenkins Build Automation

## Aim
To configure Jenkins to pull the Student Task Manager application from GitHub and automate the application build process.

## Objectives
- Understand Jenkins CI build jobs and automation principles.
- Create and configure a Freestyle project linked to GitHub.
- Automate dependency installation via `npm install`.
- Execute automated build verification via `npm run build`.
- Inspect build execution status and console logs.

## Tools Used
- Jenkins
- Git & GitHub
- Node.js & npm

## Procedure
1. Created automated verification script `build.js` and defined `"build": "node \"Assignment 3/build.js\""` in `package.json`.
2. Committed and pushed configuration to GitHub.
3. Created a Jenkins Freestyle project named `task-manager-build`.
4. Configured Source Code Management (Git) with repository URL and `*/main` branch.
5. Added build step: **Execute Windows batch command** or **Execute shell**:
   ```bash
   npm install
   npm run build
   ```
6. Triggered manual build and reviewed console output.

## Expected Outcome
Successful trigger and execution of the automated build job in Jenkins with green build status (SUCCESS) and verified console output.

## Evidence & Screenshots
- `Freestyle project.png` — Jenkins project configuration with Git repository settings.
- `Manual build.png` — Jenkins dashboard displaying project status and manual trigger option.
- `Successful build.png` — Console log verifying successful execution and "Finished: SUCCESS".
