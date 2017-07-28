var bio = {
    "name": "Emmanuel Eze",
    "role": "Front-End Developer",
    "contacts": {
        "phone": "+2348100235229",
        "LinkedIn": "https://linkedin.com/in/ezechukwue",
        "github": "https://github.com/ezdevelopers",
        "twitter": "https://freelancer.com/u/ezechukwue",
        "email": "emereuwaonueze@gmail.com",
        "blog": "http://strictlyshopify.com",
        "location": "Lagos"
    },
    "welcomeMessage": "Welcome to My Resume, I love the web!",
    "skills": ['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY', 'BOOTSTRAP', 'PHP'],
    "image": "images/eze.png"

}

var education = {
    "schools": [
        {
            "institution": "Alvana Model Secondary School",
            "degree": "SSCE",
            "year": "2007-2013",
            "location": "Lagos"
        },
        {
            "institution": "Federal Universtiy of Technology",
            "degree": "Information Management Technology",
            "year": "2013-2018",
            "location": "Lagos",
        }
    ],
    "displayEducation": function () {

        education.schools.forEach(function (elem, index) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolTitle = HTMLschoolName.replace("%data%", education.schools[index].institution);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].year);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);

            $(".education-entry:last").append(
                formattedSchoolTitle,
                formattedSchoolDegree,
                formattedSchoolDates,
                formattedSchoolLocation
            );

        });

    }
}

var work = {
    "jobs": [
        {
            "company": "SBnet Technology",
            "position": "Intern",
            "dates": "March 2015 - September 2015",
            "location": "Lagos",
            "description": " Ullamco eu culpa, singulis dolor cillum cernantur fugiat. Duis est pariatur iis sed o nisi fugiat fugiat se amet commodo sempiternum se id eu anim voluptate ne anim nostrud fabulas, singulis nam excepteur, cillum excepteur de philosophari, ut quem expetendis illustriora. Vidisse multos fugiat te nisi, irure comprehenderit vidisse fore pariatur. Nisi mentitum fidelissimae. Iis noster elit malis possumus. Velit probant iudicem, eu est summis pariatur iis aut ullamco de singulis, ad est culpa vidisse. Quid quibusdam est cohaerescant id mentitum multos quae appellat lorem."
        },
        {
            "company": "Relserve Web design firm",
            "position": "Intern",
            "dates": "July 2017 - December 2017",
            "location": "Lagos",
            "description": " Ullamco eu culpa, singulis dolor cillum cernantur fugiat. Duis est pariatur iis sed o nisi fugiat fugiat se amet commodo sempiternum se id eu anim voluptate ne anim nostrud fabulas, singulis nam excepteur, cillum excepteur de philosophari, ut quem expetendis illustriora. Vidisse multos fugiat te nisi, irure comprehenderit vidisse fore pariatur. Nisi mentitum fidelissimae. Iis noster elit malis possumus. Velit probant iudicem, eu est summis pariatur iis aut ullamco de singulis, ad est culpa vidisse. Quid quibusdam est cohaerescant id mentitum multos quae appellat lorem."
        }
    ],
    "displayWork": function () {

        work.jobs.forEach(function (elem, index) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].company);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].position);

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
}
var projects = {

    "portfolio": [
        {
            "name": "Konga Track",
            "description": "Ad quem mentitum coniunctione, est e ipsum commodo, qui ad magna singulis se a culpa voluptatibus, nostrud magna fore ne multos a est fabulas se nescius a ea malis graviterque, lorem si quamquam. Aliquip cillum mandaremus. Fabulas eram eiusmod incurreret, litteris aute labore fabulas veniam. Eu consequat ne ingeniis. Esse voluptate arbitror, te laborum nam expetendis, esse appellat hic probant et o enim tempor. Singulis amet magna admodum dolore ad arbitror quem fore litteris labore. Irure ullamco qui senserit, fore nam ubi dolor tempor.",
            "image": "images/konga.jpg",
            "date": "March 2017"
        },
        {
            "name": "PSD to live Website",
            "description": "Ad quem mentitum coniunctione, est e ipsum commodo, qui ad magna singulis se a culpa voluptatibus, nostrud magna fore ne multos a est fabulas se nescius a ea malis graviterque, lorem si quamquam. Aliquip cillum mandaremus. Fabulas eram eiusmod incurreret, litteris aute labore fabulas veniam. Eu consequat ne ingeniis. Esse voluptate arbitror, te laborum nam expetendis, esse appellat hic probant et o enim tempor. Singulis amet magna admodum dolore ad arbitror quem fore litteris labore. Irure ullamco qui senserit, fore nam ubi dolor tempor.",
            "image": "images/psd.jpg",
            "date": "May 2017"
        }
    ],
    "displayProject": function () {

        projects.portfolio.forEach(function (elem, index) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.portfolio[index].name);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.portfolio[index].date);

            var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.portfolio[index].description);

            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.portfolio[index].image);

            $(".project-entry:last").append(
                formattedProjectTitle,
                formattedProjectDates,
                formattedProjectDesc,
                formattedProjectImage
            );
        });

    }

}

// Bio info formatting
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedHomeLocation = HTMLlocation.replace("%data%", bio.contacts.location);


// Programmatically add bio info to the page
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

// Programmatically add skills to the page
if (bio.skills !== "") {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = "";
    for (skills in bio.skills) {
        formattedSkills += HTMLskills.replace("%data%", bio.skills[skills]);
    }
}

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
}

// Programmatically add Name to the page
$("#header").prepend(formattedName, formattedRole);

//$("#main").prepend(internationalizeButton);


// Programmatically add skills to the page
$("#skills").append(formattedSkills);
$("#skills").append(HTMLskillsChart);

// Programmatically add Work Experience to the page
work.displayWork();

// Programmatically add contacts to the page
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedHomeLocation);

// Programmatically add projects to the page
projects.displayProject();
// Programmatically add projects to the page
education.displayEducation();
$("#mapDiv").append(googleMap);