
function user(name, id) {
   this.name = name;
   this.id = id;
}
var user1 = new user('the binh', 1);
var user2 = new user('son dang', 2);
var user3 = new user('the minh', 3);

function comment(user_id, content) {
       this.user_id = user_id;
       this.content = content;
}
var comment1 = new comment(1, 'anh son chua ra video?');
var comment2 = new comment(2, 'vua ra xong em oi');
var users = new Array(user1, user2, user3);
var comments = new Array(comment1, comment2);

function getcoments() {
	return new Promise(function(resole) {
		setTimeout(() => {
			resole(comments)
		}, 1000);
	})
}

function getuserbyids(userid) {
	return new Promise(function(resole) {
		var result = users.filter(function(users) {
			return userid.includes(users.id)
		})
		setTimeout(
			resole(result),
			1000
		)
	})
}

getcoments()
.then(function(comments) {
	var userids = comments.map(function(comment) {
		return comment.user_id
	})
//	console.log(userid)
return getuserbyids(userids)
.then(function(users) {
     return {
	     users: users,
	     comments: comments
     }
})
})
.then(function(data) {
	   var box = document.getElementById('comments-box');
	   var html = ' ';
           data.comments.forEach(function(comment) {
		   data.users.find(function(user) {
			   user.id === comment.user_id;
		   })
	   })Lydia Hallie
	html +=`
	<li>${user.name}</li>
	<p>${comment}</p>
	`
	 box.innerHTML = html;
})


