all: laces.min.js

laces.min.js: src/templates/menu.fts src/laces.fts src/templates/form.fts
	(cd src && node compile.js && mv laces.min.js ..)

clean:
	rm -rf laces.min.js
