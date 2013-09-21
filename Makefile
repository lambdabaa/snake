.PHONY: default
default: lint

.PHONY: lint
lint:
	node_modules/.bin/jshint js --exclude 'js/alameda.js'

.PHONY: test
test:
	node_modules/.bin/marionette-mocha test/marionette/unit_test_test.js \
		--timeout 100s \
		--ui tdd
