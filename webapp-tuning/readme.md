# webapp performance tuning practice

## plan

- Sinatra で N+1 があるような簡素な例を作る
  - stackprof + bullet (+ rack-mini-profiler) を導入
  - Prometheus + Grafana の導入
- `docker-compose` で用意する

## spec

- base : sinatra
- template engine : erb
- ORM : MySQL (`gem mysql2`)
- OS : CentOS 7 1810
- benchmark : autocannon

## links

- [stackprof](https://github.com/tmm1/stackprof)
  - [参考](https://qiita.com/shunsakai/items/28182914389a156199cd)
- [bullet](https://github.com/flyerhzm/bullet)
- [rack-mini-profiler](https://github.com/MiniProfiler/rack-mini-profiler)
- [Prometheus](https://prometheus.io/)
  - [参考](https://qiita.com/Chanmoro/items/ac0eb1bf93760566b338)
  - [github](https://github.com/prometheus/prometheus)
- [Grafana](https://grafana.com/)
  - [参考](https://qiita.com/Chanmoro/items/a23f0408f0e64658a775)
- [autocannon](https://github.com/mcollina/autocannon)
