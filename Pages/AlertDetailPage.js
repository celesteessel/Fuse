var alert = this.Parameter;

var image = alert.map(function(x) { return x.image; });
var thumbnail = alert.map(function(x) { return x.thumbnail; });
var name = alert.map(function(x) { return x.name; });
var title = alert.map(function(x) { return x.title; });
var id = alert.map(function(x) { return x.id; });
var emrals = alert.map(function(x) { return x.emrals; });
var poster_username = alert.map(function(x) { return x.poster_username; });
var views = alert.map(function(x) { return x.views; });
var created_naturaltime = alert.map(function(x) { return x.created_naturaltime; });
var google_url = alert.map(function(x) { return x.google_url; });





function back() {
	alert.value = alert.value;
	router.goBack();
}


module.exports = {

	thumbnail: thumbnail,
	name: name,
	title: title,
	back: back,
	id: id,
	emrals: emrals,
	poster_username: poster_username,
	views: views,
	created_naturaltime: created_naturaltime,
	google_url: google_url
};