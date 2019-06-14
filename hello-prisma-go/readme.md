# Go + Prisma (+ Go Modules)

## Usage

```
# if you not prisma-cli not installed
brew tap prisma/prisma
brew install prisma

# up and setup database
docker-compose up -d
prisma deploy

# install dependencies?
go build

# run
go run index.go
```

## references

- [非公開モジュールやローカルで変更したモジュールをGo Modules(vgo)環境で利用する3つの方法](https://engineers.fenrir-inc.com/entry/2018/10/19/170613)
- [go 1.11のmodules(vgo)が有効な環境で相対importが cannot find module for path でエラーになった話。](https://pod.hatenablog.com/entry/2018/12/26/074944)
