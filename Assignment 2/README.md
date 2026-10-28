# Assignment 2: Git Branching and Collaboration

## Aim
To implement Git branching strategies using feature branches, pull requests, code reviews, and merging to simulate collaborative software development in a distributed team.

## Objectives
- Create and manage isolated feature branches.
- Simulate team collaboration on a shared GitHub repository.
- Push feature branch changes and create GitHub Pull Requests (PR).
- Perform code review, approval, and merge the PR into `main`.
- Synchronize local repository with remote updates.

## Tools Used
- Git
- GitHub
- Visual Studio Code

## Procedure
1. Cloned the shared Student Task Manager repository.
2. Synchronized `main` branch with the latest changes.
3. Created a new branch named `feature-add-task`.
4. Implemented feature enhancements in `public/script.js` and `app.js`.
5. Committed and pushed changes to `origin/feature-add-task`.
6. Opened a Pull Request on GitHub.
7. Conducted review and merged the pull request into `main`.
8. Pulled merged updates locally.

## Commands Used
```bash
# Branch setup and work
git switch main
git pull origin main
git switch -c feature-add-task
git status
git add .
git commit -m "feat: add task creation and validation"
git push -u origin feature-add-task

# After Pull Request merge on GitHub
git switch main
git pull origin main
git log --oneline --graph --all
```

## Expected Outcome
Successful demonstration of collaborative development workflows with clean pull request reviews, conflict-free merges, and synchronized branches.

## Evidence & Screenshots
- `Collaborative branches.png` — GitHub branch overview showing feature branches and commit logs.
- `Contributors.png` — GitHub repository insights verifying contributor commit activity.
