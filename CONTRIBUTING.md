# Contributing Guidelines

&nbsp;&nbsp;I would ❤️ it if you contributed to the project and helped make docs even better. I will make sure that contributing to docs is easy, enjoyable, and educational for anyone and everyone. All contributions are welcome, including features, issues, documentation, guides, and more.

## Got a question?

&nbsp;&nbsp;You can ask questions and discuss docs-related topics by [contacting me](https://github.com/FirstSolar/docs#contact-me).

## Found a bug?

&nbsp;&nbsp;If you found a bug in the source code, you can help me by [submitting an issue](https://github.com/FirstSolar/docs/issues/new?assignees=&labels=type%3A%20bug&template=bug_report.md&title=) to my GitHub Repository.

&nbsp;&nbsp;Even better, you can [submit a Pull Request](#submit-pr) with a fix.

## Missing a feature?

&nbsp;&nbsp;You can request a new feature by [submitting an issue](https://github.com/FirstSolar/docs/issues/new?assignees=&labels=type%3A%20feature%20request&template=feature_request.md&title=) to my GitHub Repository.

&nbsp;&nbsp;If you'd like to implement a new feature, it's always good to be in touch with me before you invest time and effort.

* For a Major Feature, first open an issue and outline your proposal. This will let me coordinate efforts, prevent duplication of work, and help you craft the change so that it's successfully integrated into the project.
* Small Features can be crafted and directly submitted as a Pull Request.

## What do you need to know to help?

&nbsp;&nbsp;If you want to help out with a code contribution, my project uses the following stack:

### Server-side

* [Node.JS](https://nodejs.org/)
* [JavaScript](https://javascript.info)
* [TypeScript](https://www.typescriptlang.org/docs)
* [PostgreSQL](https://www.postgresql.org/about/)
* [Jest](https://docs.nestjs.com/fundamentals/testing) (for testing)

### Client-side

* [React](https://reactjs.org/docs/getting-started.html)
* [JavaScript](https://javascript.info)
* [TypeScript](https://www.typescriptlang.org/docs)

&nbsp;&nbsp;If you don't feel ready to make a code contribution yet, no problem! You can also check out the [documentation issues](https://github.com/FirstSolar/docs/labels/documentation).

<a name="submit-pr"/>

## How do I make a code contribution?

&nbsp;&nbsp;Are you new to open source contribution? Wondering how contributions work in my project? Here's a quick rundown.

&nbsp;&nbsp;Find an issue that you're interested in addressing, or a feature that you'd like to add. &nbsp;&nbsp;You can use [this view](https://github.com/FirstSolar/docs/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) which helps new contributors find easy gateways into my project.

### Step 1: Make a fork

&nbsp;&nbsp;Fork the docs repository to your GitHub organization. This means that you'll have a copy of the repository under *your-GitHub-username/repository-name*.

### Step 2: Clone the repository to your local machine

```
git clone https://github.com/{your-GitHub-username}/docs.git
```

&nbsp;&nbsp;Change the directory to a new one:

```
cd <repo-name>
```

### Step 3: Create a branch

```
git checkout -b branch-name-here
```

### Step 4: Make your changes

&nbsp;&nbsp;Update the code with your bug fix or new feature.

### Step 5: Add the changes that are ready to be committed

&nbsp;&nbsp;Stage the changes that are ready to be committed:

```
git add .
```

### Step 6: Commit the changes (Git)

&nbsp;&nbsp;Commit the changes with a short message (see below for more details on how we structure our [commit messages](#commit-messages)):
```
git commit -m "<type>(<package>): <subject>"
```

### Step 7: Push the changes to the remote repository

&nbsp;&nbsp;Push the changes to the remote repository using:

```
git push origin branch-name-here
```

### Step 8: Create Pull Request

&nbsp;&nbsp;In GitHub, do the following to submit a pull request to the upstream repository:

1.  Give the pull request a title and a short description of the changes made. Include also the issue or bug number associated with your change. Explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer.

&nbsp;&nbsp;Remember, it's okay if your pull request is not quiet perfect. The reviewer will be able to help you fix any problems and improve it!

2.  Wait for the pull request to be reviewed by a maintainer.

3.  Make changes to the pull request if the reviewing maintainer recommends them.

&nbsp;&nbsp;Celebrate your success after your pull request is merged 🙂

<a name="commit-messages"/>

## Git Commit Messages

&nbsp;&nbsp;We structure our commit messages like this:

```
<type>(<document>): <subject>
```

&nbsp;&nbsp;Example:

```
content(glossary): missing GUI description
```

### Types:

* **feat**: A new feature
* **fix**: A bug fix
* **content**: Adding missing or correcting existing content
* **style**: A code change that affects the appearance (formatting, white-space etc.)
* **refactor**: A code change that improves code structure and does not affect the functionality
* **perf**: A code change that improves performance
* **chore**: A code change to the build process or auxiliary tools and libraries such as documentation generation
* **test**: Adding missing or correcting existing tests

### Documents:

* **glossary**
* **security-guide**
* **integration-unit-admin-guide**
* **selection-unit-manager-guide**\

## Code of Conduct

&nbsp;&nbsp;Please note that this project is released with a [Code of Conduct](https://github.com/FirstSolar/docs/blob/main/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

&nbsp;&nbsp;Our Code of Conduct means that you need to treat everyone on the project with respect and politeness.
