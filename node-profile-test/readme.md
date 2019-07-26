# Node profiling

[参考1](https://nodejs.org/ja/docs/guides/simple-profiling/)

## Usage

```sh
# start server
NODE_ENV=production node --prof index.js

# create user data and stress
curl -X GET "http://localhost:8080/newUser?username=matt&password=password"
ab -k -c 20 -n 250 "http://localhost:8080/auth?username=matt&password=password"

# write analyze data
node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt
```

## Ref

- [その他参考(いつかやるかも)](https://yosuke-furukawa.hatenablog.com/entry/2017/12/05/125517)
