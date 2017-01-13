function inName(name){
	name = name.trim().split(" ");

	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	name = name[0] + " " + name[1];
	return name;
}

 var inNameDisplay = "Astha Jain";
 inNameDisplay = inName(inNameDisplay);

 var formattedName = HTMLheaderName.replace("%data%", inNameDisplay);
 var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
 var formattedBioPic = HTMLbioPic.replace("%data%", "./images/me.jpg");
 //var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

 $("#header").prepend(formattedRole);
 //console.log("formattedName :",formattedName);
 
 $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
 
 var skills = ["C++", "JavaScript", "HTML", "Java"];

 var bio = {
 	"name" : "Astha Jain",
 	"role" : "Software Engineer",
 	"contacts" : {
 		"mobile" : "+65-81714898",
 		"email" : "asthajain.nitb@gmail.com",
 		"github" : "asthajn",
 		"location" : "Singapore"
 	},
 	"welcomeMessage" : "Hello, I am building my resume",
 	"skills" : skills,
 	"biopic" : "./images/me.jpg"
 };

 var work = {
 	"jobs" : [{
	 	"title" : "Software Engineer",
	 	"employer" : "Nextlabs",
	 	"years" : "0.5",
	 	"description" : "Working as a Full STack Developer for Control center application" ,
	 	"dates"	: "2016 - Present",
	 	"location" : "Singapore"
	 },
	 {
	 	"title" : "Associate System Engineer",
	 	"employer" : "IBM",
	 	"years" : "2",
	 	"description" : "Worked as Software Developer for AT&T and GM",
	 	"dates" : "2012-2014",
	 	"location" : "Bangalore"
	 }

 	]
 };


 var education = {
 	"schools" : [
 		{
 			"name" : "National University of Singapore",
 			"years" : "2014-2015",
 			"city" : "Singapore",
 			"major" : "Computer Science",
 			"degree" : "Master of Computing",
 			"url" : "http://www.nus.edu.sg/"
 		},
 		{
 			"name" : "National Institute of Technology",
 			"years" : "2008-2012",
 			"city" : "Bhopal, India",
 			"major" : "Information Technology",
 			"degree" : "Bachelor of Technology",
 			"url" : "http://www.web.manit.ac.in/"
 		}
 	],
 	"onlineCourses" : [
 		{
 			"title" : "JavaScript",
 			"school" : "Udacity",
 			"url" : "https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19350585610923"
 		}
 	]
 };

 var projects = {
 	"projects" : [
 		{
 			"title" : "Control Center - Signup application",
 			"dates" : "August 2016 - Dec 2016",
 			"description" : "Created cloud based signup application for control center to move CC to SaaS"
 		}
 	]
 };

	 if(bio.skills.length > 0){
	 	$("#header").append(HTMLskillsStart);
	 	var formattedSkills;
	 	for(skill in bio.skills){
	 		formattedSkills = HTMLskills.replace("%data%" , bio.skills[skill]);
	 		$("#skills").append(formattedSkills);
	 	}
	 	
	 }

//sanitization
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;

	newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    // Don't delete this line!
    return newHTML;
};

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);	

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;	

		$(".work-entry:last").append(formattedEmployerTitle);	

		var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);	

		var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

function locationizer(work_obj) {
    var myLocs = [];
    
    for(var job in work_obj.jobs){
        myLocs.push(work_obj.jobs[job].location);
    }
    
    return myLocs;
}



projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);	

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		//var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;	

		$(".project-entry:last").append(formattedTitle);	

		var formattedDates = HTMLprojectDates.replace("%data%" , projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);	

		var formattedDescription = HTMLprojectDescription.replace("%data%" , projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}	
}

displayWork();
projects.display();

$("#mapDiv").append(googleMap);

//AIzaSyAzdlvsT6V8Kh8fOXNIvsKEKoURXX3JKAU



//console.log(charEscape(html));
