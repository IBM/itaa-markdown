#!/bin/sh
# Mihai Criveti <crmihai1@ie.ibm.com>

# TODO: Create parameters to use this tool, make it a make target
git filter-branch --env-filter '
OLD_EMAIL="crivetimihai@gmail.com"
CORRECT_NAME="Mihai Criveti"
CORRECT_EMAIL="crmihai1@ie.ibm.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

echo "Run: git push --force --tags origin 'refs/heads/*'"
