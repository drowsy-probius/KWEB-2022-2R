#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SRC_DIR="$SCRIPT_DIR"
cd $SRC_DIR

BRANCHES=("preview" "production")
BRANCH_NAME=$1
COMMIT_MESSAGE=$2

if [ -z "$BRANCH_NAME" ]
then
  echo "no branch name entered. exit..."
  exit
fi
if [[ ! " ${BRANCHES[*]} " =~ " ${BRANCH_NAME} " ]]; then 
  echo "Invalid branch name"
  echo "  Possible branches: preview, production"
  exit
fi
if [ -z "$COMMIT_MESSAGE" ]
then
  echo "no commit message entered. exit..."
  exit
fi

# eas login
# npx expo install expo-updates 
# eas update:configure # -> eas.json
# eas build:configure # -> eas.json

eas update --branch "$BRANCH_NAME" --message "$COMMIT_MESSAGE"