var myclock = {
	
	template : `
	<div>
	<slot></slot>
	<h4 :style='{color: this.color, fontSize: this.size}'>现在的时间是: {{date}}</h4>
	</div>`,
	props:['color','size'],
	data(){
		return{
			date:new Date().toLocaleTimeString(),
			_timer:null
		}
	},
	methods:{
		updateTime(){
			this.date = new Date().toLocaleTimeString();
		}
	},
	created(){
		this._timer = setInterval(this.updateTime,1000)
	},
	beforeDestory(){
		this._timer.cancel();
	}
}