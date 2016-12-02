
bin-dir = ./node_modules/.bin/
bower = $(bin-dir)bower
karma = $(bin-dir)karma
http-server = $(bin-dir)http-server
uglify = $(bin-dir)uglifyjs
source = ./src/zeptomodal.js
out-dir = ./dist/
minified = $(out-dir)zeptomodal.min.js
version = `cat VERSION`

#We're all phonies around here
.PHONY: tests-manual tests ci ci-tests deps build promote check-version

deps:
	npm install
	$(bower) install

tests-manual: deps
	$(http-server)

tests: deps
	$(karma) start

ci-tests: deps
	$(karma) start --browsers SlimerJS --single-run

ci: ci-tests build

build: deps
	cp $(source) $(out-dir)
	$(uglify) --compress --mangle --output $(minified) -- $(source)
