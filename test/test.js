var DomJS=require('dom-js').DomJS;
var Laces=require('../laces.min.js');
var assert=require('assert');
var fs=require('fs');

var domjs = new DomJS();

var header = '<!DOCTYPE html><html><head><script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.js"></script><script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.js"></script><link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/css/bootstrap.css"></link></head><body>';

var footer='</body></html>';


var compare=function(name,html,onComplete){
		fs.writeFile(name+".html",html,function(err,res){
			fs.exists(name+".json",function(exists){
				domjs.parse(html,function(err,result){
					if(!exists){
						fs.writeFile(name+".json",JSON.stringify(result),function(err,res){
							return onComplete(err,true);
						});
					} else {
						fs.readFile(name+".json",function(err,data){
							data=data.toString();
							assert.equal(data,JSON.stringify(result))
							return onComplete(err,true);
						});
					}
				});
			});
		});

}

describe("Laces",function(){


	it("should create a basic menu",function(done){
		var menu = Laces.menu({items:[
			{ href:"href", id:"id",title:"bar"},
			"---",
			"wolf",
		]})
		menu=header+'<div class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">menu</a><ul class="dropdown-menu" role="menu">'+menu+'</ul></div>'+footer;
		compare("menu",menu,function(err,res){
			console.log(err,res);
			done();
		});		
	});



});
