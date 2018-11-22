var commentInput = {
	template: `
		<div class='cinput'>
			<label>
				<span>用户名</span>
				<input v-model='author'>
			</label>
			<label>
				<span>评论内容</span>
				<textarea v-model='content'></textarea>
			</label>
			<button @click='doSave'>发布</button>
		</div>
	`,
	data() { return{
		author:'',
		content:''
	}},
	methods: {
		doSave() {
			//发射、广播出去
			this.$emit('woyaobaocun',{
				id: +new Date(),
				author: this.author,
				content: this.content
			})
		}
	}
}