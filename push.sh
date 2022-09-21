#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SRC_DIR="$SCRIPT_DIR"
cd $SRC_DIR

MESSAGE_ARRAY=("8^8" ">_<" "*^*" "T^T" "OwO" "*3*" "🤔" "🤨" "❓" "❗" "⁉️" "X_X" "ꉂꉂ(ᵔᗜᵔ*)")
LENGTH=13
INDEX="$RANDOM % $LENGTH"
COMMIT_MESSAGE=$1

if [ -z "$COMMIT_MESSAGE" ]
then
  echo "no commit message entered. use random emoji"
  COMMIT_MESSAGE=${MESSAGE_ARRAY[$INDEX]}
fi

# echo "$COMMIT_MESSAGE"

git config --global credential.helper store
git add .
git commit -m "$COMMIT_MESSAGE"
git push