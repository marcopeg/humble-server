#/bin/bash
MAJOR=0
MINOR=0
FIX=1
docker build -t marcopeg/humble-server:latest -t marcopeg/humble-server:$MAJOR -t marcopeg/humble-server:$MAJOR.$MINOR -t marcopeg/humble-server:$MAJOR.$MINOR.$FIX .
docker push marcopeg/humble-server
