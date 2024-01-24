 ~ cd sf-exercise
➜  sf-exercise cd linux-cmd-on-projects

Make sure you have added your GitHub repository as a remote. If you haven't, use the following command:

git remote add origin https://github.com/your-username/your-repo.git

Replaceusername and repo with your GitHub username and the name of your repository.

Verify the remote repositories:

To see a list of remote repositories, you can use:

git remote -v

Ensure that 'origin' is listed and points to your GitHub repository.

git push -u origin develop

➜  linux-cmd-on-projects git:(main) ✗ git branch develop

➜  linux-cmd-on-projects git:(main) ✗ git checkout develop
M	app/layout.tsx
M	app/page.tsx
Switched to branch 'develop'

➜  linux-cmd-on-projects git:(develop) ✗ git add .

➜  linux-cmd-on-projects git:(develop) ✗ git commit -m "Initial commit on develop branch"
[develop 5ffca5b] Initial commit on develop branch
 10 files changed, 92 insertions(+), 108 deletions(-)
 create mode 100644 .env
 create mode 100644 app/loading.tsx
 create mode 100644 app/not-found.tsx
 create mode 100644 app/route1/layout.tsx
 create mode 100644 app/route1/loading.tsx
 create mode 100644 app/route1/page.tsx
 create mode 100644 app/route2/loading.tsx
 create mode 100644 app/route2/page.tsx

➜  linux-cmd-on-projects git:(develop)

➜  linux-cmd-on-projects git:(develop) ✗ git push -u origin develop

 linux-cmd-on-projects git:(develop) ✗ git push -u origin develop
branch 'develop' set up to track 'origin/develop'.
Everything up-to-date

➜  linux-cmd-on-projects git:(develop) git checkout -b feature/Prova-per-un-primo-branch
Switched to a new branch 'feature/Prova-per-un-primo-branch'

➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch) ✗

➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch) ✗ git branch -f

[1]  + 39299 suspended  git branch -f
➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch) ✗ git checkout develop
M	instructions.md
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.

➜  linux-cmd-on-projects git:(develop) ✗ git checkout feature/Prova-per-un-primo-branch
M	instructions.md
Switched to branch 'feature/Prova-per-un-primo-branch'

➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch) ✗