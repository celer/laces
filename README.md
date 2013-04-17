Introduction
============

Laces is a simple client side and server side library for generating forms and menus for Bootstrap. It tries to generate mostly nicely formated HTML which can directly be used in a browser or converted to the template language of your choosing. 


Forms
=====

Pretty much you pass it a javascript object like so:

```javascript

	Laces.form({
		fields: {
			username:{
				type: "text",
				placeholder:"username..."
				label:"Username",
				desc:"The username for this user",
				prepend:{ 
					input:"@"
				}
			},
			password:{ 
				type:"password",
				placeholder:"password...",
				label:"Password",
				desc:"The password for the user",
			}
		},
		formType: "inline"
	})


```

and it will generate the html for a form for you. 

 * fields
  * field
    * type - text,password,textarea,hidden,checkbox,radio,select
    * placeholder - the placeholder to use 
    * label - the label for the field 
    * desc - the description of the field 
    * prepend or append - prepend or append fields to the control (only works on input/password)
      * button - the label to use on a button
      * input - the label to use on an input
    * menu
      * title - the title for a menu
      * items - see the section below for menu
    * values - values to use for a select box
    * multiple - use a multiple select
 * formType - the type of form to generate, inline, horizontal or vertical - will default to vertical

Menus
=====

If you supply a javascript object to Laces.menu it will generate a menu for you:

```Javascript
	Laces.menu({items: [
		"bar",
		"----", 
		{ href:"href", id:"wolf", title:"wolf" }
	]});
```
Here is the [example](http://htmlpreview.github.io/?https://github.com/celer/laces/blob/master/test/menu.html)


 * items (string or /^-+$/ or object)
	* href - the href for the menu item
  * id - the id for the menu item
  * title - the title for the menu item

 - If it finds a string that matches the regex /^-+$/ it will create a divider otherwise it will create a menu item with the string value




