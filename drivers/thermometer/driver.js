"use strict";

var coap = require('coap')

var sensors = [
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

var self = module.exports = {

	init: function( devices, callback ){

		devices.forEach(function(device){

					// if( args.body.room_temperature != info.measure_temperature ) {
					// 	setThermosmartInfo( device, {
					// 		measure_temperature: args.body.room_temperature
					// 	}, callback)
					// 	self.realtime(device, 'measure_temperature', args.body.room_temperature)
					// }

		});

		// we're ready
		callback();
	},

	capabilities: {
		measure_temperature: {
			get: function( device, callback ){
				var err;
				var options = {
					host: '192.168.1.126',
					pathname: '/' + device.type + '/' + device.number,
					method: 'GET'
				}
				var req = coap.request(options);

			  req.on('response', function(res) {
					var temperature = JSON.parse(res.payload.toString()).temperature;
					temperature = Math.round(temperature * 10) / 10;
					callback( err, temperature );
			  });

				req.end();
			}
		}
	},

	pair: function( socket ) {

		Homey.log('ThermoSmart pairing has started...');

		socket.on('list_devices', function( data, callback ) {
			var devices = sensors.map(function(sensor){
				console.log(sensor.number + ' ' + sensor.description)
				return {
					data: {
						id			: 'sensor/' + sensor.number,
						type: "sensor",
						number: sensor.number
					},
					name: sensor.description
				};
			});

			callback( null, devices );

		});

		socket.on('disconnect', function( data, callback ){
			console.log('disconnect!!!', arguments)
		})
	}

}
