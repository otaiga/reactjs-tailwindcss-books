#!/bin/bash
set -e # stop on error

./node_modules/json-server/lib/cli/bin.js --watch books-db.json --port 8000 | cat - &
npm start &
wait