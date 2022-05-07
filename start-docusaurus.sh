#!/bin/bash

set -e
set -u
set -o pipefail

cd website

yarn start $@
# yarn start --locale zh-TW  # use zh-TW locale
# Use polling of files rather than watching for live reload as a fallback in environments where watching doesn't work.
#yarn start --poll 1000
