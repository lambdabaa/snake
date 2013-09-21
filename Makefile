.PHONY: default
default: lint

.PHONY: lint
lint:
	jshint js --exclude 'js/alameda.js'
