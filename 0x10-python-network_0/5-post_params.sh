#!/bin/bash
# This script takes in a URL, sends a POST request to the passed URL, and displays the body of the response
curl -s -X POST -d "subject=I will always be here for PLD&email=test@gmail.com" "$1"
