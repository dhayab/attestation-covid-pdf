#!/usr/bin/env bash

TMP=$(mktemp -d)
REPOSITORY="https://github.com/LAB-MI/attestation-couvre-feu-covid-19/"
SCRIPTS=("src/js/pdf-util.js" "src/js/util.js")
RESOURCES=("src/certificate.pdf")

git clone $REPOSITORY $TMP
for SCRIPT in ${SCRIPTS[@]}; do
    FILE="$TMP/$SCRIPT"
    echo "const Blob = require('node-blob'); $(cat $FILE)" > $FILE
    cp $FILE utils
done
for RESOURCE in ${RESOURCES[@]}; do cp $TMP/$RESOURCE public; done

rm -rf $TMP