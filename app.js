"use strict";


var sensors = {};
var lights = {};

var resources = {
		"relay": [
				 {"number":  1, "description": "Bel", "type":"light"}
				,{"number":  2, "description": "Verlichting"}
				,{"number":  21, "description": "Keuken"}
				,{"number":  46, "description": "Bureau"}
				,{"number":  47, "description": "Aanbouw"}
		]
		,"motor": [
				 {"number": 0,  "description": "Screen cinema"}
				,{"number": 1, "description": "Screen Office"}
				,{"number": 2, "description": "Screen Livingroom"}
				,{"number": 3, "description": "Screen Parent Bedroom"}
		]
		,"localmood": [
				 {"number":  7, "description": "Have Dinner"}
				,{"number":  8, "description": "Cooking"}
				,{"number": 10, "description": "All screens up"}
				,{"number": 11, "description": "All screens down"}
		]
		,"generalmood": [
				 {"number": 0, "description": "All lights off"}
				,{"number": 1, "description": "Panic (all lights on)"}
				,{"number": 2, "description": "Sleep (selected lights off)"}
		]
		,"condition": [
				{"number": 0, "description": "Is it dark outside?"}
		]
		,"flag": [
				{"number": 0, "description": "Is it dark outside?"}
		]
		,"sensor": [
				 {"number": 3, "description": "Buiten", "type": "LIGHT"}
				,{"number": 4, "description": "Garage", "type": "LIGHT"}
				,{"number": 7, "description": "Kamer Kobe", "type": "LIGHT"}
				,{"number": 8, "description": "Slaapkamer", "type": "LIGHT"}
				,{"number": 9, "description": "Badkamer", "type": "LIGHT"}
				,{"number": 10, "description": "Bureau", "type": "LIGHT"}
				,{"number": 11, "description": "Living", "type": "LIGHT"}
				,{"number": 12, "description": "Keuken", "type": "LIGHT"}
				,{"number": 13, "description": "Inkomhal", "type": "LIGHT"}
				,{"number": 14, "description": "Aanbouw", "type": "LIGHT"}
		]
}

var self 		= module.exports;
self.init 		= init;
//self.pair 		= pair;

function init() {

	Homey.log("Hello world!");

}
