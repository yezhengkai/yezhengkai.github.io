#!/bin/bash

set -e
set -u
set -o pipefail

cd website
yarn start --poll 1000
