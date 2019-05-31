postgres:
	docker run --rm -d --name pg -p 5432:5432 -v `pwd`/pgdata:/var/lib/postgresql/data postgres:11-alpine

stop:
	docker stop pg

clean: stop
	rm -rf pgdata
