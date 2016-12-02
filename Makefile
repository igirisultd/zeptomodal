
bin-dir = ./node_modules/.bin/
karma = $(bin-dir)karma
http-server = $(bin-dir)http-server

.PHONY: tests-manual tests ci

tests-manual:
	$(http-server)

tests:
	$(karma) start

ci:
	$(karma) start --browsers SlimerJS --single-run
