# Enterprise Rails

書籍「エンタープライズRails」のお試し用

## Usage

```shell
# start Postgres database
make postgres

# control database directly
psql -U postgre -h localhost -d practices_development

# dump schema from database (no migration)
bundle exec rails db:schema:dump

# start server
bundle exec rails s
```
