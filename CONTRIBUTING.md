# Contributing Guidelines

I would ❤️ it if you contributed to the project and helped make docs even better. I will make sure that contributing to docs is easy, enjoyable, and educational for anyone and everyone. All contributions are welcome, including features, issues, documentation, guides, and more.

## Got a question?

You can ask questions and discuss docs-related topics by [contacting me](https://github.com/FirstSolar/docs#contact-me).

## Found a bug?

If you found a bug in the source code, you can help me by [submitting an issue](https://github.com/FirstSolar/docs/issues/new?assignees=&labels=type%3A%20bug&template=bug_report.md&title=) to my GitHub Repository.

Even better, you can [submit a Pull Request](#submit-pr) with a fix.

## Missing a feature?

You can request a new feature by [submitting an issue](https://github.com/FirstSolar/docs/issues/new?assignees=&labels=type%3A%20feature%20request&template=feature_request.md&title=) to my GitHub Repository.

If you'd like to implement a new feature, it's always good to be in touch with me before you invest time and effort.

* For a Major Feature, first open an issue and outline your proposal. This will let me coordinate efforts, prevent duplication of work, and help you craft the change so that it's successfully integrated into the project.
* Small Features can be crafted and directly submitted as a Pull Request.

## What do you need to know to help?

If you want to help out with a code contribution, my project uses the following stack:

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

If you don't feel ready to make a code contribution yet, no problem! You can also check out the [documentation issues](https://github.com/FirstSolar/docs/labels/documentation).

<a name="submit-pr"/>

## How do I make a code contribution?

Are you new to open source contribution? Wondering how contributions work in our project? Here's a quick rundown.

Find an issue that you're interested in addressing, or a feature that you'd like to add.
You can use [this view](https://github.com/FirstSolar/docs/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) which helps new contributors find easy gateways into our project.

### Step 1: Make a fork

Fork the docs repository to your GitHub organization. This means that you'll have a copy of the repository under *your-GitHub-username/repository-name*.

### Step 2: Clone the repository to your local machine

```
git clone https://github.com/{your-GitHub-username}/docs.git
```

### Step 3: Create a branch

Create a new branch for your fix.

```
git checkout -b branch-name-here
```

### Step 4: Make your changes

Update the code with your bug fix or new feature.

### Step 5: Add the changes that are ready to be committed

Stage the changes that are ready to be committed:

```
git add .
```

### Step 6: Commit the changes (Git)

Commit the changes with a short message. <!-- (See below for more details on how we structure our commit messages) -->

```
git commit -m "<type>(<package>): <subject>"
```

### Step 7: Push the changes to the remote repository

Push the changes to the remote repository using:

```
git push origin branch-name-here
```
