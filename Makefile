
bin-dir = ./node_modules/.bin/
bower = $(bin-dir)bower
karma = $(bin-dir)karma
http-server = $(bin-dir)http-server

.PHONY: tests-manual tests ci deps

deps:
	npm install
	$(bower) install

tests-manual: deps
	$(http-server)

tests: deps
	$(karma) start

ci: deps
	$(karma) start --browsers SlimerJS --single-run
