var path = require('path');
var Fire = require('fire-ts');
var fs = require('fs');
var uglify = require('uglify-js');
var opts={ 
	render: function(template, input,opts){
		var templ = Fire.parseSync(template,opts);	
		return templ(input,opts);	
	},
	uglify: true,
};

var templ = Fire.parseSync(path.join(__dirname,"laces.fts"),opts);
outputData=templ({},opts);

fs.writeFileSync("laces.min.js",uglify.minify(outputData,{fromString:true}).code);
