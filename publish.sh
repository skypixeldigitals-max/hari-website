#!/usr/bin/env bash
# Publish the HARI site to GitHub Pages.
#
#   ./publish.sh <github-username> [repo-name] [contact-email]
#
# Example:
#   ./publish.sh devike hari-website hello@hari.lk
#
# Run this AFTER you have created an empty PUBLIC repo on github.com.
# It fills in the site URL placeholders, commits, and pushes to main.

set -euo pipefail

USER_NAME="${1:-}"
REPO="${2:-hari-website}"
EMAIL="${3:-}"

if [ -z "$USER_NAME" ]; then
  echo "Usage: ./publish.sh <github-username> [repo-name] [contact-email]" >&2
  exit 1
fi

SITE_URL="https://${USER_NAME}.github.io/${REPO}/"
echo "Site URL will be: $SITE_URL"

# 1. Fill in the canonical / Open Graph / JSON-LD URLs
sed -i "s|https://REPLACE-ME.github.io/hari-website/|${SITE_URL}|g" index.html

# 2. Contact email: set it, or remove the dead mailto link if none given
if [ -n "$EMAIL" ]; then
  sed -i "s|REPLACE-ME@example.com|${EMAIL}|g" index.html
  echo "Contact email set to: $EMAIL"
else
  # strip the whole "Email us" anchor so no broken link ships
  sed -i '/mailto:REPLACE-ME@example.com/d' index.html
  echo "No email supplied - the 'Email us' footer link was removed (WhatsApp remains)."
fi

# 3. Sanity check: nothing left unfilled
if grep -q "REPLACE-ME" index.html; then
  echo "ERROR: REPLACE-ME placeholders still present:" >&2
  grep -n "REPLACE-ME" index.html >&2
  exit 1
fi

# 4. Commit and push
git add -A
if ! git diff --cached --quiet; then
  git commit -q -m "Set live site URL and contact details"
fi

git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${USER_NAME}/${REPO}.git"
git branch -M main
git push -u origin main

cat <<EOF

Pushed.

Last step, in the browser:
  https://github.com/${USER_NAME}/${REPO}/settings/pages
  Source: "Deploy from a branch"  ->  Branch: main  /  (root)  ->  Save

Your public link (live in about a minute):
  ${SITE_URL}
EOF
