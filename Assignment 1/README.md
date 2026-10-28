# Assignment 1: Git Basics and Version Control

## Aim
To create a GitHub repository for the Student Task Manager Web Application and demonstrate core Git version control operations.

## Objectives
- Initialize and configure a Git repository.
- Track, stage, and commit application source files.
- Push local commits to a remote GitHub repository.
- Create, switch, and merge development branches.
- Verify repository commit history and status.

## Tools Used
- Git
- GitHub
- Visual Studio Code
- Node.js

## Git Operations Performed
1. Initialized local Git repository and created the remote repository on GitHub.
2. Cloned or linked the remote repository using `git remote add origin`.
3. Staged and committed base application files (`app.js`, `package.json`, `public/`).
4. Pushed initial commit to the remote `main` branch.
5. Created a `feature-ui` branch to implement UI enhancements.
6. Merged `feature-ui` branch into `main` and verified clean history.

## Commands Used
```bash
# Initialize and link repository
git init
git add .
git commit -m "feat: initial commit with Student Task Manager application"
git branch -M main
git remote add origin https://github.com/ishwari1201/DevOps-for-Scalable-Systems-Lab.git
git push -u origin main

# Branching operations
git switch -c feature-ui
git status
git add .
git commit -m "feat: enhance dashboard UI styles"
git switch main
git merge feature-ui
git push origin main
git log --oneline --graph --all
```

## Expected Outcome
Successful demonstration of fundamental Git version control lifecycle with tracked commits and clean remote synchronization on GitHub.

## Evidence & Screenshots
Screenshots demonstrating repository creation, commits, branching, merging, and push verification are stored in this folder:

- `Creation of GitHub Repository.png` — GitHub repository dashboard upon creation.
- `Performance-1.png` — Staging and committing application files in the terminal.
- `Performance-2.png` — Branch creation, merging, and git push verification.
- `Updated UI.png` — Verified Student Task Manager application UI running on localhost:3000.
