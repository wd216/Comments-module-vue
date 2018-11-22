var commentList = {
	props:['comments'],
	template:`
		<div class='clist'>
			<comment v-for='c in comments'
				v-bind:comment='c'>,
			</comment>
		</div>
	`
};

var commentItem = {
	props: ['comment'],
	template: ` 
		<div class='comment'>
			<span class='comment-author'>{{comment.author}}</span>
			<span class='comment-content'>{{comment.content}}</span>
		</div>
	`
};