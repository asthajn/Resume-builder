 var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
 $("#header").prepend(formattedRole);

 var formattedName = HTMLheaderName.replace("%data%", "Astha Jain");
 $("#header").prepend(formattedName);
 
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
 	"biopic" : "/images/me.jpg"
 };

 var work = {
 	"position" : "Software Engineer",
 	"employer" : "Nextlabs",
 	"years" : "0.5",
 	"description" : "Working as a Full STack Developer for Control center application"
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
	 		formattedSkills = HTMLskills.replace("%data%" , skill);
	 		$("#skills").append(formattedSkills);
	 	}
	 	
	 }

