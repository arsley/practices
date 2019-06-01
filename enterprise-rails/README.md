# Enterprise Rails

書籍「エンタープライズRails」のお試し用

## Usage

```shell
# start Postgres database
make postgres

# create database
make database

# control database directly
psql -U postgres -h localhost -d practices_development
# or
bundle exec rails dbconsole

# dump schema from database
bundle exec rails db:schema:dump

# start server
bundle exec rails s
```
