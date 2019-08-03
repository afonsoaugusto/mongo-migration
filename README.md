# mongo-migration
Project Node Data Migration with MongoDB

```
docker network rm some-network
docker network create some-network 
docker container stop some-mongo; docker container rm some-mongo
$ docker run -d --network some-network --name some-mongo -p 27017:27017  --hostname some-mongo \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    mongo

$ docker run -it --rm --network some-network mongo \
    mongo --host some-mongo \
        -u mongoadmin \
        -p secret \
        --authenticationDatabase admin \
        some-db

docker run --name mongo-express -d -p 8081:8081 --network some-network  \
        -e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin \
        -e ME_CONFIG_MONGODB_ADMINPASSWORD=secret \
        -e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance" \
        -e ME_CONFIG_MONGODB_SERVER="some-mongo" \
        mongo-express

```

```
docker run --rm -it -v $PWD:/srv --network some-network node:10 /bin/bash
cd /srv
npm install
```

```
mkdir example
cd example
migrate-mongo init

migrate-mongo create example_collection
```

```
docker build -t mongo_migration .   
docker run --rm -it mongo_migration:latest
```

```
npm install; npm start
```

## References
* [.dockerignore](https://github.com/GoogleCloudPlatform/nodejs-getting-started/blob/master/optional-kubernetes-engine/.dockerignore)
*