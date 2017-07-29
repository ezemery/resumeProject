var bio = {
    "name": "Emmanuel Eze",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "+2348100235229",
        "linkedIn": "https://linkedin.com/in/ezechukwue",
        "github": "https://github.com/ezdevelopers",
        "twitter": "https://freelancer.com/u/ezechukwue",
        "email": "emereuwaonueze@gmail.com",
        "blog": "http://strictlyshopify.com",
        "location": "Lagos"
    },
    "welcomeMessage": "Welcome to My Resume, I love the web!",
    "skills": ['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY', 'BOOTSTRAP', 'PHP'],
    "biopic": "images/eze.png",
    "display": function() {
         
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedHomeLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        
        $("#header").prepend(formattedName, formattedRole);
        $("#header").append(
            formattedBioPic,
            formattedWelcomeMessage
            ); 
        $("#topContacts,#footerContacts").append(
            formattedMobile,
            formattedEmail,
            formattedGithub,
            formattedHomeLocation
        );
        if (bio.skills !== "") {
                $("#header").append(HTMLskillsStart);
                var formattedSkills = "";
                bio.skills.forEach(function(elem,index) {
                    formattedSkills += HTMLskills.replace("%data%", bio.skills[index]);
                });
            $("#skills").append(formattedSkills);
            }
        $("#skills").append(HTMLskillsChart);
         
    }

};

var education = {
    "schools": [
        {
            "name": "Alvana Model Secondary School",
            "degree": "SSCE",
            "dates": "2007-2013",
            "location": "Lagos",
            "majors":['Physics','Chemistry','Maths'],
            "url":"https://www.google.com"
        },
        {
            "name": "Federal Universtiy of Technology",
            "degree": "Information Management Technology",
            "dates": "2013-2018",
            "location": "Lagos",
            "majors":['Information Technology', 'Programming'],
            "url":"https://www.google.com"
        }
    ],
    "onlineCourses": [
        {
            "title":"Udacity FrontEnd Nanodegree",
            "school":"Udacity Inc",
            "dates":"June 2017 - November 2017",
            "url":"www.udacity.com"            
        },
        {
            "title":"Free Code Camp",
            "school":"Free code camp",
            "dates":"June 2017 - March 2018",
            "url":"www.freecodecamp.com"    
        }
    ],
    "display": function () {

        education.schools.forEach(function (elem, index) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolTitle = HTMLschoolName.replace("%data%", education.schools[index].name);

            var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", education.schools[index].url);
            
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);

            $(".education-entry:last").append(
                formattedSchoolTitle,
                formattedSchoolDegree,
                formattedSchoolDates,
                formattedSchoolLocation,
                formattedSchoolUrl
            );
            if (education.schools[index].majors !== "") {
            var formattedMajor = "";
             education.schools[index].majors.forEach(function(elm,indx) {
                    formattedMajor += HTMLschoolMajor.replace("%data%", education.schools[index].majors[indx]);
                });
             $(".education-entry:last").append(formattedMajor);  
            }

        });

        $(".education-entry:last").append(HTMLonlineClasses);
        
        education.onlineCourses.forEach(function (elem, index) {
        
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);

            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);

            $(".education-entry:last").append(
                formattedOnlineTitle + formattedOnlineSchool,
                formattedOnlineDates,
                formattedOnlineUrl
            );

        });

    }
};

var work = {
    "jobs": [
        {
            "employer": "SBnet Technology",
            "title": "Intern",
            "dates": "March 2015 - September 2015",
            "location": "Lagos",
            "description": " Ullamco eu culpa, singulis dolor cillum cernantur fugiat. Duis est pariatur iis sed o nisi fugiat fugiat se amet commodo sempiternum se id eu anim voluptate ne anim nostrud fabulas, singulis nam excepteur, cillum excepteur de philosophari, ut quem expetendis illustriora. Vidisse multos fugiat te nisi, irure comprehenderit vidisse fore pariatur. Nisi mentitum fidelissimae. Iis noster elit malis possumus. Velit probant iudicem, eu est summis pariatur iis aut ullamco de singulis, ad est culpa vidisse. Quid quibusdam est cohaerescant id mentitum multos quae appellat lorem."
        },
        {
            "employer": "Relserve Web design firm",
            "title": "Intern",
            "dates": "July 2017 - December 2017",
            "location": "Lagos",
            "description": " Ullamco eu culpa, singulis dolor cillum cernantur fugiat. Duis est pariatur iis sed o nisi fugiat fugiat se amet commodo sempiternum se id eu anim voluptate ne anim nostrud fabulas, singulis nam excepteur, cillum excepteur de philosophari, ut quem expetendis illustriora. Vidisse multos fugiat te nisi, irure comprehenderit vidisse fore pariatur. Nisi mentitum fidelissimae. Iis noster elit malis possumus. Velit probant iudicem, eu est summis pariatur iis aut ullamco de singulis, ad est culpa vidisse. Quid quibusdam est cohaerescant id mentitum multos quae appellat lorem."
        }
    ],
    "display": function () {

        work.jobs.forEach(function (elem, index) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);


            var formatedWorkEmployerTitle = formattedEmployer + formattedTitle;


            $(".work-entry:last").append(
                formatedWorkEmployerTitle,
                formattedDates,
                formattedLocation,
                formattedDescription

            );
        });
    }
};
var projects = {

    "projects": [
        {
            "title": "Konga Track",
            "description": "Ad quem mentitum coniunctione, est e ipsum commodo, qui ad magna singulis se a culpa voluptatibus, nostrud magna fore ne multos a est fabulas se nescius a ea malis graviterque, lorem si quamquam. Aliquip cillum mandaremus. Fabulas eram eiusmod incurreret, litteris aute labore fabulas veniam. Eu consequat ne ingeniis. Esse voluptate arbitror, te laborum nam expetendis, esse appellat hic probant et o enim tempor. Singulis amet magna admodum dolore ad arbitror quem fore litteris labore. Irure ullamco qui senserit, fore nam ubi dolor tempor.",
            "images": "images/konga.jpg",
            "dates": "March 2017 - May 2017"
        },
        {
            "title": "PSD to live Website",
            "description": "Ad quem mentitum coniunctione, est e ipsum commodo, qui ad magna singulis se a culpa voluptatibus, nostrud magna fore ne multos a est fabulas se nescius a ea malis graviterque, lorem si quamquam. Aliquip cillum mandaremus. Fabulas eram eiusmod incurreret, litteris aute labore fabulas veniam. Eu consequat ne ingeniis. Esse voluptate arbitror, te laborum nam expetendis, esse appellat hic probant et o enim tempor. Singulis amet magna admodum dolore ad arbitror quem fore litteris labore. Irure ullamco qui senserit, fore nam ubi dolor tempor.",
            "images": "images/psd.jpg",
            "dates": "May 2017 - june 2017"
        }
    ],
    "display": function () {

        projects.projects.forEach(function (elem, index) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);

            var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[index].description);

            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images);

            $(".project-entry:last").append(
                formattedProjectTitle,
                formattedProjectDates,
                formattedProjectDesc,
                formattedProjectImage
            );
        });

    }

};



//Name Internalisation           
var inName = function (name) {
    name = name.toLowerCase();
    var splitName = name.split(" ");
    var firstLetter = splitName[0].slice(0, 1);
    var firstName = splitName[0].slice(1);
    firstLetter = firstLetter.toUpperCase();
    var secondName = splitName[1].toUpperCase();
    var fullName = firstLetter + firstName + " " + secondName;
    return fullName;
};



//$("#main").prepend(internationalizeButton);

// Programmatically add bio-data to the page
bio.display();
// Programmatically add Work Experience to the page
work.display();
// Programmatically add projects to the page
projects.display();
// Programmatically add projects to the page
education.display();
$("#mapDiv").append(googleMap);