(function($){
	var Message = Backbone.Model.extend({
		default:function(){
			return{
				title:"111",
				order:Messages.nextOrder(),
				done:false
			};
		},
		initialize:function(){
			if(!this.get("title")){
				this.set({"title":this.default().title});
			}
		},
		toggle:function(){
			this.save({done:!this.get("done")});
		},
		delete:function(){
			this.destroy();
		}
	});

	var Messages = Backbone.Collection.extend({
		model:Message,
		localStorage:new Store("messages"),
		done:function(){
			return this.filter(function(msg){
				return msg.get('done');
			});
		},

		remainging:function(){
			return this.without.apply(this,this.done());
		}
	});

	var MsgView = Backbone.View.extend({
		tagName:"li",
		event:{

		},

	});

});
