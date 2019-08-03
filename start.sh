#!/bin/bash
docker build -t mongo_migration .   
docker run --rm -it --network some-network mongo_migration:latest