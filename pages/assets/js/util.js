var EventUtil = {
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent(type, handler);
		}else{
			element["on"+type] = handler;
		}
	},

	getEvent: function(event){
		return event? event : window.event;
	},

	getTarget: function(event){
		return event.target? event.target : event.srcElement;
	},

	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},

	removeHandler: function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false)
		}else if(element.detachEvent){
			element.detachEvent(type, handler);
		}else{
			element["on"+type] = null;
		}
	},

	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
};