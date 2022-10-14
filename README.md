# CogArch_Markdown


## Introduction
This is the markdown repository template for the "Export to GitHub Pages" utility in [Cognitive Architect](https://w3.ibm.com/tools/cogarch/).  

The export utility creates markdown files containing the architecture information and then generates the corresponding GitHub Pages of the architecture using [MkDocs](https://www.mkdocs.org), [ejs](https://ejs.co/), [MkDocs Awesome Pages plugin](https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/).  

It consists of the following folders:
- docs
- template
  - official_template : contains the architectural artifacts' default [ejs](https://ejs.co/) templates
  - user_template : user-defined templates that overrides the default ones
- theme : contains the [theme](https://squidfunk.github.io/mkdocs-material/customization/#extending-the-theme) used for the generated pages

and files:
- Makefile : for redeploying changes made to the theme and/or markdown files 
- README.md : this page
- mkdocs.yml : configuration file for MkDocs
- requirements.txt : MkDocs dependencies


When the export is successfully executed:
- the markdown files containing the various architectural artifacts and instances will be stored in the `docs` folder AND
- a json file containing all the architecture information (`archData_[architecture-name].json`) will also be created



## Setup

Before executing the export utility, the following setup is required:


1. Make a copy of the markdown repository template to your own GitHub repository by [*Fork*ing](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository.
   - If you are using GitHub Free, your repository has to be set as public. More information on GitHub Pages configuration [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
2. Generate the GitHub token with ***repo***  access. This is needed so that the export utility can generate the appropriate files into your GitHub repo.  
For help on creating the token and getting the repository URL, go to [GitHub Repo URL & Token](#github-repo-token--url).


💡 Tip: At a minimum, each architecture should have its own git repository! If you want to show different content based on your target audience or purpose, export them to different GitHub repositories.



## Usage in Cognitive Architect : Export Utility

1. Go to the Export / Import menu in Cognitive Architect
2. Provide your github repository link and token
3. Click the Export button
4. The Export utility will execute in the background and you will be notified and provided with the link to the published pages when the export is done.


⚠️ Warning: Do not close the browser window after the Export request has been submitted! The URL of your GitHub Pages will be returned when the export is completed.

💡 Tip: You can continue to work in Cognitive Architect while your Export request is being processed.


If you did not see or get the URL, your GitHub Pages can typically be accessed via:  
`https://pages.github.ibm.com/{github_account}/{repo_name}/`or  
`https://pages.github.com/{github_account}/{repo_name}/`

If you get a "*404 - Page/File Not Found*" error, check your repository's Settings -> GitHub Pages for the correct URL.



## GitHub Repo Token & URL

To generate an access token for your repository:
 - Navigate to [repository-url]/settings/tokens/new (e.g. https://github.ibm.com/settings/tokens/new)
 - Add a description, for e.g. cogArch-access and select *repo* scope
 - Click the "Generate Token" button
 - Click on the clipboard icon (📋) to copy the token and save it somewhere. You will need this in the "Export dialog" in Cognitive Architect. Note that you cannot retrieve the token from Git after you leave the Token generation page.


For this export function, you have to use the HTTPS repository URL, regardless of whether your target repository is in Enterprise Git or Public Git.

Sample HTTPS URLs are:
 - `https://github.ibm.com/jang/CogArch_Markdown_arch1.git` (GHE) 
 - `https://github.com/jang/CogArch_Markdown_arch5.git` (Public)

You can retrieve the URL by clicking on the Code button for your repository and copy the HTTPS URL.



## Customization

The export utility uses [MkDocs](https://www.mkdocs.org) with the [ejs](https://ejs.co/) template engine to generate the markdown files. The [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/) theme for [MkDocs](https://www.mkdocs.org) is then used to generate the GitHub Pages.

We chose `ejs` as our template engine because of its performance and ease of understanding since it is closer to pure HTML.


To customize the markdown files:
- Copy the `ejs` file(s) to be changed from the *templates/official_template* folder to the *templates/user_template* one.
  - Note: Do not change the name of the file(s). 
- Modify the content as needed.
- Re-submit the Export request in Cognitive Architect.


To change the look & feel of your pages:
- refer to Material for MkDocs - Customization](https://squidfunk.github.io/mkdocs-material/customization/) on how to customize the themes
- Re-submit the Export request in Cognitive Architect.


💡 Tip: If the GitHub Pages do not reflect your latest updates, clear the cache and refresh.


### Customization Examples

- Coming Soon...


## Refreshing Your Pages using Command Line Execution
If you customize the theme and/or *.MD files, instead of using the Export utility in Cognitive Architect, you can refresh your GitHub Pages with command line executions. Note that `python 3.x` has to be installed on your machine in order to use this approach.

In a terminal window:
- Download your repository to your local machine
  - see https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository for more information
- In the directory where your repository is, run `make venv` to create the python environment
- Run `make serve` to start up the MkDocs engine on your local machine
- Update the docs/*.md files as needed
- Commit changes to your repository
- Run `make deploy` to deploy the changes


⚠️ Warning: If there are updates to your architecture after executing the Export function, DO NOT USE this approach. Run the Export utility in Cognitive Architect to generate the latest updates.


## Feedback and Contributions

We are always looking for feedback and contributions.  

- If you have any *suggestions* to the documentation or *contributions*, please submit a *Pull request* with your suggested changes or contributions.
- If you have *general* feedback and comments, please open a *New Issue*.

Your participation is greatly appreciated.
