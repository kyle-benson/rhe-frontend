var _currentDay = "";
var _currentRoom = "";

var _dailyAgenda = null;
var _breakoutSessions = null;
var _speakers = null;
var _sponsors = null;

// HARD CODED TO THE LOCAL DATA FILE
_dailyAgenda = dailyAgenda;
_breakoutSessions = breakoutSessions;
_breakoutSchedules = breakoutSchedules;
_speakers = speakers;
_sponsors = sponsors;


$("#btnCaptureImage").on("click", capturePhoto);

$("#agendaList").on("click",'li', function (e){

	var ref = this;
	_currentDay = $(ref).attr("keyfield");
	$.mobile.changePage("#pageDailyAgenda", {transition: "slide"});
	getAgenda(_currentDay);
});

$("#roomList").on ("click", "li", function (e) {
	var ref = this;
	_currentRoom = $(ref).attr("keyfield");
	$.mobile.changePage("#pageRoomAgenda", {transition: "slide"});
	getRoomAgenda(_currentRoom);
});

$("#pageBreakoutSessions" ).on( "pageshow", getSessionList );

$("#sessionList").on ("click", "li", function (e) {
	var ref = this;
	_id = $(ref).attr ("keyfield");
	$.mobile.changePage("#pageBreakoutSchedules", {transition : "slide"});
	getSchedules(_id);
});


$("#pageSpeakers").on("pageshow", getSpeakerList );
$("#pageSponsors").on("pageshow", getSponsorsList );

// Get Agenda
function getAgenda(currentDay){
	var itemList = _dailyAgenda[currentDay];
	Helper.bindListView ("#listAgendaItems", itemList, agendaRenderFunction, "", true);
	return;
}

function agendaRenderFunction(itemList) {
	var _html =  "";
	// comment
	var _topic = itemList.topic;
	var _room = itemList.location;
	var _speakers = itemList.speakers;
	var _time = itemList.time;

	_html += "<p><strong>" + _time + "</strong></p>";
	_html += "<h2>" + _topic + "</h2>";
	_html += "<p><strong>" + _room + "</strong></p>";
	_html += "<p><strong>" + _speakers + "</strong></p>";
	//_html += "<p class=\"ui-li-aside\"><strong>" + _time + "</strong></p>";

	return _html;
/*
<h2>Stephen Weber</h2>
<p><strong>You've been invited to a meeting at Filament Group in Boston, MA</strong></p>
<p>Hey Stephen, if you're available at 10am tomorrow, we've got a meeting with the jQuery team.</p>
<p class="ui-li-aside"><strong>6:24</strong>PM</p>
*/
}

function getSchedules (session) {
	var _sessionList = _breakoutSchedules[session];
	Helper.bindListView("#scheduleList", _sessionList, scheduleListRenderFunction, "", true);
	return;
}

function scheduleListRenderFunction(sessionList){
	//{ "day" : "Wednesday",  "time" : "3:00 - 4:00", "topic" : "Container 101", "speakers": "Matt Jamison", "room" : "Randolph" },
	var _html = "";
	var _day = sessionList.what;
	var _time = sessionList.use;
	var _room = sessionList.probe;
	var _spkrs = sessionList.info;

	_html += "<h1>What Is It?</h1><p class='wrappable'>" + _day + "</p>";
	_html += "<h1>Common Use Case</h1><p>" + _time + "</p>";
	_html += "<h1>Probing Question(s)</h1><p>" + _room + "</p>";
	_html += "<h1>More Information</h1><p>" + _spkrs + "</p>";

	return _html;
}

function getSponsorsList(){
	var _sponsorList = _sponsors;
	Helper.bindListView ("#sponsorList", _sponsorList, sponsorListRenderFunction, "", true);
	return;
}

function sponsorListRenderFunction (sponsorListItem){
	_html = "";
	_sponsorName = sponsorListItem.sponsor;
	_sponsorContact = sponsorListItem.contact;
	_sponsorEmail = sponsorListItem.email;

	_html += "<h2>" + _sponsorName + "</h2>";
	_html += "<p><strong>" + _sponsorContact + "</strong></p>";
	_html += "<p><strong>" + _sponsorEmail + "</strong></p>";

	return _html;

}

function getSpeakerList() {
	var _speakerList = _speakers;
	Helper.bindListView ("#speakerList", _speakerList, speakerListRenderFunction, "", true);
	return;
}

function speakerListRenderFunction (speakerListItem){
	var _html = "";
	var _speakerName = speakerListItem.speaker;
	var _email = speakerListItem.email;

	_html += "<h2>" + _speakerName + "</h2>";
	_html += "<p><strong>" + _email + "</strong></p>";

	return _html;
}

function getSessionList (){
	var _sessionList = _breakoutSessions;
	Helper.bindListView("#sessionList", _sessionList, sessionListRenderFunction, "id");
	return;
}

function sessionListRenderFunction (sessionListItem){
	var _html =  "";

	var _sessionName = sessionListItem.session;
	var _description = sessionListItem.description;

	_html += "<h2>" + _sessionName + "</h2>";
	_html += "<p><strong>" + _description + "</strong></p>";

	return _html;
}

// IMAGE CAPTURE FUNCTIONS
function onPhotoDataSuccess(imageData) {
	// Uncomment to view the base64 encoded image data
	// console.log(imageData);

	// Get image handle
	//
	var smallImage = document.getElementById('smallImage');
	// Unhide image elements
	//
	smallImage.style.display = 'block';
	// Show the captured photo
	// The inline CSS rules are used to resize the image
	//
	smallImage.src = "data:image/jpeg;base64," + imageData;

	//doOCR(imageData);
}

	//A button will call this function
	//
function capturePhoto() {
	console.log("in capturePhoto");
	// Take picture using device camera and retrieve image as base64-encoded string
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
		quality: 70,
		destinationType: navigator.camera.DestinationType.DATA_URL,
		sourceType : navigator.camera.PictureSourceType.CAMERA,
		targetWidth: 1024,
		targetHeight: 768,
		saveToPhotoAlbum: false
	});
}

//Called if something bad happens.
//
function onFail(message) {
	alert('Failed because: ' + message);
}


function filter(arr, criteria) {
  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    });
  });
}
