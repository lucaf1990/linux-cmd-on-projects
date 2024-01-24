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

➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch) ✗ git commit -m"refs PRIMA-PROVA-COMMIT: created a new Route3"
[feature/Prova-per-un-primo-branch aeb82b4] refs PRIMA-PROVA-COMMIT: created a new Route3
 2 files changed, 52 insertions(+), 2 deletions(-)
 create mode 100644 app/route3/page.tsx

➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch) ✗ git commit -m"refs PRIMA-PROVA-COMMIT: created a new Route3"
[feature/Prova-per-un-primo-branch aeb82b4] refs PRIMA-PROVA-COMMIT: created a new Route3
 2 files changed, 52 insertions(+), 2 deletions(-)
 create mode 100644 app/route3/page.tsx

➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch) git push
fatal: The current branch feature/Prova-per-un-primo-branch has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/Prova-per-un-primo-branch

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch)  git push --set-upstream origin feature/Prova-per-un-primo-branch
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 11 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 1.19 KiB | 1.19 MiB/s, done.
Total 6 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote:
remote: Create a pull request for 'feature/Prova-per-un-primo-branch' on GitHub by visiting:
remote:      https://github.com/lucaf1990/linux-cmd-on-projects/pull/new/feature/Prova-per-un-primo-branch
remote:
To https://github.com/lucaf1990/linux-cmd-on-projects.git
 * [new branch]      feature/Prova-per-un-primo-branch -> feature/Prova-per-un-primo-branch
branch 'feature/Prova-per-un-primo-branch' set up to track 'origin/feature/Prova-per-un-primo-branch'.

➜  linux-cmd-on-projects git:(feature/Prova-per-un-primo-branch)
