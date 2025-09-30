# Git Rules & Workflow Handbook

A quick reference guide for effective Git workflow, inspired by feature branch best practices.

---

## 🚀 Feature Branch Workflow

### 1. Start from Latest Main/Develop

```bash
git checkout develop
git pull origin develop
```

### 2. Create Feature Branch

```bash
git checkout -b feature/feature-name
```

### 3. Work & Commit Frequently

```bash
# Make changes, then stage and commit
git add .
git commit -m "feat: add login functionality"
git commit -m "fix: resolve validation issue"
git commit -m "refactor: clean up component structure"
```

### 4. Push Feature Branch

```bash
git push origin feature/feature-name
```

### 5. Create Pull Request

-   Go to your Git platform (GitHub, GitLab, etc.)
-   Compare `feature/feature-name` with `develop` or `main`
-   Add description and assign reviewers
-   Request review

### 6. Merge & Cleanup

```bash
git checkout develop
git pull origin develop
git merge feature/feature-name
git branch -d feature/feature-name
git push origin --delete feature/feature-name
```

---

## 📋 Essential Commands

### Setup

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global color.ui auto
```

### Branching

```bash
git branch                    # list branches
git checkout -b feature/name  # create & switch
git checkout feature/name     # switch to existing
git branch -d feature/name    # delete merged branch
```

### Staging & Committing

```bash
git status                    # see changes
git add .                     # stage all changes
git add path/to/file          # stage specific file
git commit -m "message"       # commit staged changes
git commit --amend -m "msg"   # amend last commit
```

### Syncing

```bash
git fetch origin              # download remote changes
git pull origin develop       # fetch + merge
git push origin feature/name  # push branch
git push -u origin feature/name  # push & set upstream
```

### History & Inspection

```bash
git log --oneline             # compact history
git log --graph --decorate    # visual history
git diff                      # working tree changes
git diff --cached             # staged changes
git show <commit>             # show commit details
```

### Undo & Reset

```bash
git restore path/to/file      # discard file changes
git restore --staged file     # unstage file
git reset --soft HEAD~1       # undo last commit (keep changes)
git reset --hard HEAD~1       # undo last commit (discard changes)
```

### Stash Work-in-Progress

```bash
git stash push -m "wip: context"
git stash list
git stash pop                 # apply & remove top stash
git stash drop stash@{0}      # remove specific stash
```

---

## 🎯 Best Practices

### Commit Messages

-   Use [Conventional Commits](https://www.conventionalcommits.org/):
    -   `feat:` new feature
    -   `fix:` bug fix
    -   `docs:` documentation
    -   `style:` formatting
    -   `refactor:` code restructuring
    -   `test:` adding tests
    -   `chore:` maintenance

### Branch Naming

-   `feature/` - new features
-   `fix/` - bug fixes
-   `hotfix/` - urgent fixes
-   `release/` - release preparation
-   `docs/` - documentation updates

### Workflow Tips

-   Keep commits small and focused
-   Pull latest changes before starting new work
-   Write clear PR descriptions
-   Review your own code before requesting review
-   Delete feature branches after merging
-   Use meaningful branch names

---

## 🔧 Useful Aliases

```bash
git config --global alias.st "status -sb"
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.df "diff --word-diff=color"
```

---

## 📝 Quick Reference

| Action          | Command                            |
| --------------- | ---------------------------------- |
| Start feature   | `git checkout -b feature/name`     |
| Save work       | `git add . && git commit -m "msg"` |
| Push feature    | `git push origin feature/name`     |
| Update branch   | `git pull origin develop`          |
| Switch branches | `git checkout branch-name`         |
| See status      | `git status`                       |
| View history    | `git log --oneline`                |

---

_Keep main/develop stable, work in feature branches, and merge through Pull Requests._
