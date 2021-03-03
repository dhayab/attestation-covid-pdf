#!/usr/bin/env bash

TMP=$(mktemp -d)
REPOSITORY="https://github.com/LAB-MI/attestation-deplacement-derogatoire-covid-19/"
SCRIPTS=("src/js/pdf-util.js" "src/js/util.js")
RESOURCES=("src/certificate.pdf")

git clone $REPOSITORY "$TMP"
for SCRIPT in "${SCRIPTS[@]}"; do
    FILE="$TMP/$SCRIPT"
    sed -i "1i const Blob = require('node-blob')\n" "$FILE"
    cp "$FILE" utils
done
for RESOURCE in "${RESOURCES[@]}"; do cp "$TMP/$RESOURCE" public; done

rm -rf "$TMP"