// redirect people to rocket.chat/docs if they try and browse the GitHub pages version

if(location.hostname == "rocketchat.github.io" && location.href.indexOf('?noredirect') == -1) {
	location="https://rocket.chat" + location.pathname
}

var url = location.href;
if(url.substr(url.length - 1) === '/') {
	window.location = url.substr(0, url.length - 1);
}
