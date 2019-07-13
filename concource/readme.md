# Concourse practice

## Usage

```shell
# up concourse
docker-compose up -d

# access localhost:8080(dashboard) to install `fly` CLI

# login from cli: username/password = test/test
fly -t ci login -c http://localhost:8080 -u test -p test

# create pipeline
fly -t ci set-pipeline -p booklit -c booklit.yml

# run on dashboard(click 'play')
# or cli(with 'unpause-pipeline')
fly -t ci unpause-pipeline -p booklit
```
