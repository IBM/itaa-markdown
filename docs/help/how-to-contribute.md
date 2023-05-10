---
classification: confidential
status: published
owner: CognitiveArchitectSiteAuthor
---
# How to Contribute

## Style Guide

???+ success "Make sure you follow this style guide before pushing any changes to the Github repo"
    - Name your files using a short, descriptive name, in lowercase, separated by dashes. Example: `my-page-here.md` or `my-picture.png`. Do not include spaces in file names and make sure that your file ends with `.md`.
    - Make sure that your file has a heading 1 at the first line of it with a clear title of the page that start with # followed by a space then your page title. Example: `# My OpenShift Page Title`.
    - Capture all screenshots in PNG format: `this-is-a-description-of-the-screenshot.png`.
    - Place all images in the `img` directory and link using relative paths in markdown. Ex: `[My Image Description](./img/my-image-description.png)`.
    - For new sections, copy and modify the [sample page template](./page-template.md) to the relevant directory

    See: [IBM Style Guide](https://www.ibm.com/developerworks/library/styleguidelines/index.html)

    See: [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)

    For more information on supported markdown and notations, see the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/extensions/admonition/) theme.

## Creating new content

???+ example "Definition of Done"
    Submit only content that passes the *Definition of Done* checklist:

    - Has a **Document Control** section that contains information on the *Owner*, *User Story* and *Status*.
    - Written in **properly formatted** markdown.
    - **Original**, and does not copy/paste from existing guides / resources.
    - **Builds** on your local machine.
    - Has an associated **story** (issue or feature request) tracked on [GitHub Projects](https://github.ibm.com/{{ cookiecutter.repo_parent }}/{{ cookiecutter.repo_dir }}/projects).

???+ failure "What NOT to contribute: reinventing the wheel"
    - Unoriginal material: do NOT copy paragraphs from infocenters, product documentation, wikipedia, medium.com, k8s docs
    - Screenshots or other copyrighted material we did not originate (we: IBM + Red Hat)
    - Material that exists elsewhere. Did someone else do this better? Link to it
    - Material from Seismic. Link to the Seismic page, do not copy / paste information.

    Ask yourself: who will maintain the material I have contributed? What happens when the source changes? Does it help a Solutions Architect that's working on a deal? Is the material original? If not, do not add it.

## How to mark material as IBM Confidential

There are three categories of classification to be aware of:

| Classification        | Description        | What to do      |
|-----------------------|--------------------|-----------------|
| IBM Internal Use Only  | All IBM internal use only, nothing to be published in Architecture Center | Use the document control and check **IBM Internal Use Only**
| Public                | All public, all to be published in Architecture Center.              | Use the document control and check **Public**
| Some IBM Internal Use Only | There is sentences or paragraphs in this document that is IBM Internal Use Only. But the remaining material is classified as public. |  First of all try to avoid this, if possible split the document into two one for **Public** and one for **IBM Internal Use Only**. If that is not the case you can help the reviewers and others to see what it is you you have rated **IBM Internal Use Only**. Do this by putting it in a section with the comment tags `<!-- hidden comment -->` Start with **`<!-- IBM Internal Use Only START -->`** have your confidential text and end it with **`<!-- IBM Internal Use Only END -->`**. By doing so you will help the rest of the team both on reviews and later on to perhaps help figure out how to segment the document.

## Setting up your GitHub config

Edit `~/.gitconfig` and set up your `user.name` and `user.email` to match your IBM GitHub name and mail.
Edit the content of `~/.gitconfig` as follow with your own details:

```bash
cat ~/.gitconfig
[user]
	name = Mihai Criveti
	email = crmihai1@ie.ibm.com
```

Verify that the config is correct and see if our name and email is set correctly:

```bash
git config --global -l
user.name=Mihai Criveti
user.email=crmihai1@ie.ibm.com
```

## Setting up your GitHub access

To interact with IBM GitHub set technical credentials like

* Personal Access Token or
* SSH key

### Personal Access Token

**Personal Access Token (PAT)** is a token to access the GitHub API via **HTTPS**. To create one follow this steps

* [Access the settings page of your GitHub profile](https://github.ibm.com/settings/tokens)
* `Generate a new token`
* Add a `Note` and check the scope `repo`
* Afterwards `generate token`

Remember the generated token in your key store and do not share them with other.

```bash
git clone https://github.ibm.com/{{ cookiecutter.repo_parent }}/{{ cookiecutter.repo_dir }}
Cloning into '{{ cookiecutter.repo_dir }}'...
Username for 'https://github.ibm.com': token
Password for 'https://token@github.ibm.com':
...
```

The password is your generated token.

### SSH key

The ssh key option is the more secure and comfortable option. To create the ssh keys follow this steps


* [Access the SSH settings page of your GitHub profile](https://github.ibm.com/settings/keys)
* Follow the [instruction to generate a SSH key](https://docs.github.com/en/enterprise-server@2.21/github/authenticating-to-github/connecting-to-github-with-ssh) if needed
* Select `New SSH key` to enter a new public ssh key

```bash
git clone git@github.ibm.com:{{ cookiecutter.repo_parent }}/{{ cookiecutter.repo_dir }}
Cloning into '{{ cookiecutter.repo_dir }}'...
...
```

With the `git` protocol instead of `https` is the internal ssh key used to authenticate you.


## Build Locally

You can follow the below commands to clone and build the repo locally. After that, you will be able to run the Github pages on your localhost.

```
# clone the repo locally
git clone https://github.ibm.com/OiC/{{ cookiecutter.repo_parent }}/{{ cookiecutter.repo_dir }}

# Use this command to build the repo locally for the first time
make venv serve

# Use this command for subsequent builds
make serve
```

## Build Locally windows

Install Python 3 in your computer from https://www.python.org/downloads/

The following steps are one time steps
```
# clone the repo locally
git clone https://github.ibm.com/{{ cookiecutter.repo_parent }}/{{ cookiecutter.repo_dir }}

# Setup venv for your Python
python -m venv env
env\Scripts\activate.bat

# Setup required libraries
python -m pip install --upgrade pip setuptools wheel
python -m pip install --upgrade -r requirements.txt
```

The following setup to do each time you open new cmd

```
# switch to python venv
env\Scripts\activate.bat

# Run the mkdocs serve on port 8000
mkdocs serve --livereload -a 127.0.0.1:8000
```
## Creating pull requests

Example pull request for closing issues:

```bash
# Grab the latest changes
git pull origin main

# Create a new branch
git checkout -b 179-fix-some-defect

# Fix the defect/make changes
vim somefile

# Add all (-A) changed files to the set which will be part of your next commit
git add -A
# Create a commit with a comment which holds a reference to the ticket/issue
git commit -m 'Closes #179, fixed everything!!!'

# Push to origin
git push origin 179-fix-some-defect
```

See:

* [Linking a pull request to an issue](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) and
* [The Contribution process step by step - Github and git flow](https://ocp42.cloudpak8s.io/contribute/#the-contribution-process-step-by-step-github-and-git-flow)
* [GitHub walkthrough - branch / change / push / pull request (Video, Box@IBM)](https://ibm.box.com/s/s7oljud9vuyc6d2uzc6jlb0kyn7gcr6w)

## Reviewing content and submitting an issue

- If you can submit a *Pull Request* with your suggested changes, do so. That is the best way to contribute.
- Please open a [New Issue](https://github.ibm.com/{{ cookiecutter.repo_parent }}/{{ cookiecutter.repo_dir }}/issues) if you have *general* feedback and comments.
- Ask yourself: is the content actionable by a solutions architect? If not, trim it down.

!!! warning "Do not open issues if you can and know how to contribute"
    - If you are creating content or can make the fix yourself, do so.
    - Create a single issue per page, do not create multiple issues for the same document.
    - Typos and rephrasing issues should come with a pull request.

## Getting Help

For any issues with the build, please reach out to cmihai on Slack or @crmihai1 on GitHub.
