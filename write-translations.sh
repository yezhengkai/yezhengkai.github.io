#!/bin/bash

set -e
set -u
set -o pipefail

cd website

# Translate plugin data
# refer to https://docusaurus.io/docs/i18n/tutorial#translate-plugin-data
yarn run write-translations --locale zh-TW