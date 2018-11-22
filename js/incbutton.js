var myIncrement = {
	data(){
		return {
			count:0
		}
	},
	methods:{
		incr(){
			this.count = this.count + 1 ;
		}
		,decr() {
			this.count = this.count > 0 ? this.count -1 : 0;
		}
	},
	template: `<div style="border: 1px solid red">
					<button @click = 'incr' @mouseover='decr'>
						你已点击了 {{count}} 下
					</button>
				</div>`
}