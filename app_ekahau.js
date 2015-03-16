var request = require('request');
var fs = require('fs');
var LineByLineReader = require('line-by-line');

var req_num = 0;
var line_num = 0;
var current_line = '';
var xposition;

var BLISS_LEFT = 340;
var BLISS_RIGHT = 420;
var CHECK_COUNT = 5;

var STATE_FACTORY = 1;
var STATE_FROM_FACTORY = 2;
var STATE_WAREHOUSE = 3;
var STATE_FROM_WAREHOUSE = 4;
var last_state = 1;

var last_location = "factory";

var factory_count = 0;
var warehouse_count = 0;
var from_factory_count = 0;
var from_warehouse_count = 0;


function ekahau_get(){
	request.get('http://localhost:56566/epe/pos/taglist?fields=posgood&serial=231476', {
	  'auth': {
		'user': 'admin',
		'pass': 'admin',
		'sendImmediately': false
	  }
	}).pipe(fs.createWriteStream('result.txt'));
	
	req_num++;
	//console.log('Request Number: ' + req_num );	
}


function read_result(){
	
	var lr = new LineByLineReader('result.txt');
	
	lr.on('error', function (err) {
		//console.log("Error reading line");
	});

	lr.on('line', function (line) {
		if(line.indexOf('posx') != -1){
			//console.log(line);
			//position_str = line.slice(8,11);
			//console.log(position_str);
			
			xposition = Number(line.slice(8,11));
			console.log(xposition);
			
			if(xposition < BLISS_LEFT){
				console.log("factory");
				last_location = "factory";
				
				factory_count = factory_count + 2;
				adjust_values();
				
				if(factory_count == CHECK_COUNT){
						request.get('https://agile-beach-2376.herokuapp.com/fire-event/infactory')
						
						console.log('sse sent');
						
						last_state = STATE_FACTORY;
				}
				
			} else if (xposition < BLISS_RIGHT){
				console.log("from " + last_location);
				var state = STATE_FROM_FACTORY;
				
				if(last_location.indexOf("house") != -1 ){
					from_warehouse_count = from_warehouse_count + 2;
					state = STATE_FROM_WAREHOUSE;
				} else {
					from_factory_count = from_factory_count + 2;
					state = STATE_FROM_FACTORY;
				}					
				
				adjust_values();
				
				if((( from_warehouse_count == CHECK_COUNT ) || ( from_factory_count == CHECK_COUNT )) && (last_state != STATE_FROM_WAREHOUSE) && (last_state != STATE_FROM_FACTORY)) {
						/* console.log(from_warehouse_count);
						console.log(from_factory_count);
						console.log(last_state); */
						
						var url = ('https://agile-beach-2376.herokuapp.com/fire-event/' + "from" + last_location);
						request.get(url);
						
						console.log('sse sent');
						
						last_state = state;
				}
			} else {
				console.log("warehouse");
				last_location = "warehouse";
				
				warehouse_count = warehouse_count + 2;
				adjust_values();
				
				if(warehouse_count == CHECK_COUNT){
						request.get('https://agile-beach-2376.herokuapp.com/fire-event/inwarehouse')
						
						console.log('sse sent');
						
						last_state = STATE_WAREHOUSE;
				}
			}
			//console.log(position + 2);
		}
	});

	lr.on('end', function () {
		//console.log("Finished reading lines");
	});
	
}

setInterval(ekahau_get, 2000);

function delay_read(){
	setInterval(read_result, 2000);
}

setTimeout(delay_read, 200);

function adjust_values(){
	
	factory_count--;
	warehouse_count--;
	from_factory_count--;
	from_warehouse_count--;
	
	if(factory_count < 0){
		factory_count = 0;
	} else if(factory_count > CHECK_COUNT){
		factory_count = CHECK_COUNT;
	}
	
	if(warehouse_count < 0){
		warehouse_count = 0;
	} else if(warehouse_count > CHECK_COUNT){
		warehouse_count = CHECK_COUNT;
	}
	
	if(from_factory_count < 0){
		from_factory_count = 0;
	} else if(from_factory_count > CHECK_COUNT){
		from_factory_count = CHECK_COUNT;
	}
	
	if(from_warehouse_count < 0){
		from_warehouse_count = 0;
	} else if(from_warehouse_count > CHECK_COUNT){
		from_warehouse_count = CHECK_COUNT;
	}
}