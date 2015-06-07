/*
 * Biography
 */
var bio = {

    name : 'Israel Bastida',
    role : 'Front-End Web Developer + PHP Back-End Engineer',
    contacts : {
        mobile   : '+52 1 2224156595',
        email    : 'developer@eter5.com',
        twitter  : '@eter5',
        github   : 'eter5',
        location : 'Mexico'
    },
    welcomeMessage : 'In 1985 at age of nine years I made my first program on a Commodore 64 personal computer, '  +
        'the programming language that I used for first time was BASIC. From that time computing science became '  +
        'a passion for me.'                                                                +
        ' ' +
        'In 2007, after a stage in my life as musician and audio engineer, I decided to resume professionally on '  +
        'world of computer science (previously I had developed some projects with HTML and Flash). PHP5 was the '   +
        'first programming language I learned for web development, even before starting my engineering degree.'     +
        ' ' +
        'I have experience with some tools and technologies related to PHP5 like CodeIgniter, Symfony 2, Drupal, '  +
        'PrestaShop, MySQL, to name a few. I am interested in learn some others tools and technologies like '       +
        'Phalcon and Laravel.'                                                                                      +
        ' ' +
        'I have skill, knowledge and experience for build and develop Web Applications adaptables to the most '     +
        'advanced browsers and current devices (Smart Phones, Smart TV, Tablets…), using tools and technologies '   +
        'described before, and Responsive Web Design techniques (RWD): HTML5, CSS3, JavaScript, jQuery, Sass, '     +
        'Compass, etc.'                                                                                             +
        ' ' +
        'To date I have worked as a freelance on diverse computing tasks, mostly related to Back-End Web '          +
        'Development (in PHP5 and MySQL) and more recently and strongly with Front-End Web Development (in '        +
        'HTML5/CSS3/JavaScript).',
    skills : [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP5',
        'RWD',
        'Sass',
        'jQuery',
        'Git',
        'Web Performance',
        'Gulp',
        'npm',
        'Testing'
    ],
    biopic : 'images/foto.jpg',

    // TODO: display the bio info to the resume
    display : function() {

        var formattedName       = HTMLheaderName.replace("%data%", this.name);
        var formattedRole       = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile     = HTMLmobile.replace("%data%",     this.contacts.mobile);
        var formattedEmail      = HTMLemail.replace("%data%",      this.contacts.email);
        var formattedTwitter    = HTMLtwitter.replace("%data%",    this.contacts.twitter);
        var formattedGitHub     = HTMLgithub.replace("%data%",     this.contacts.github);
        var formattedlocation   = HTMLlocation.replace("%data%",   this.contacts.location);
        var formattedBioPic     = HTMLbioPic.replace("%data%",     this.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedGitHub);
        $("#topContacts").append(formattedlocation);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);

        if (this.skills.length > 0) {

            this.skills.forEach(function(element, index, array) {

                var formattedSkills = HTMLskills.replace("%data%", element);

                $("#skills").append(formattedSkills);
            });
        }

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedGitHub);
        $("#footerContacts").append(formattedlocation);
    }
};


/*
 * Work
 */
var work = {

    jobs : [{
        employer    : 'Web Contabil',
        title       : 'PHP Back-End Engineer',
        location    : 'São Paulo, Brazil',
        dates       : 'July 2014 - February 2015',
        description : 'It was a temporary work for a company in São Paulo, Brazil. My job was to develop the '      +
            'Back-End in PHP5 and MySQL. The data exchange with the Front-End (developed in Ext JS) was through '   +
            'JSON.'
    },
    {
        employer    : '3e Concepts',
        title       : 'PHP Back-End Engineer',
        location    : 'D.F., Mexico',
        dates       : 'August 2012 - March 2013',
        description : 'I worked for a short period of time in 3e, but for me it was a lot of learning experience. ' +
            'I performed maintenance tasks on PHP back-end projects and I developed some projects based on '        +
            'Codeigniter and Symfony2 technologies. It was a great experience working in 3e Concepts.'
    }],

    // TODO: display the work info to the resume
    display : function() {

        for (var job in this.jobs) {

            var formattedEmployer     = HTMLworkEmployer.replace("%data%",    this.jobs[job].employer);
            var formattedTitle        = HTMLworkTitle.replace("%data%",       this.jobs[job].title);
            var formattedDates        = HTMLworkDates.replace("%data%",       this.jobs[job].dates);
            var formattedLocation     = HTMLworkLocation.replace("%data%",    this.jobs[job].location);
            var formattedDescription  = HTMLworkDescription.replace("%data%", this.jobs[job].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};


/*
 * Projects
 */
var projects = {

    projects : [{
        title       : 'Sample Project',
        dates       : 'month 0000 - month 0000',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                      'Suspendisse maximus neque at malesuada condimentum. ' +
                      'Quisque lobortis enim vel enim elementum, ac convallis magna scelerisque. ' +
                      'Donec sed neque tortor. Morbi non est risus. Etiam molestie quis augue pulvinar condimentum. ' +
                      'Phasellus facilisis ante in dolor viverra ultrices. Proin vitae gravida justo, ...',
        images      : ['images/197x148.gif', 'images/197x148.gif']
    },
    {
        title       : 'Sample Project 2',
        dates       : 'month 0000 - month 0000',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                      'Suspendisse maximus neque at malesuada condimentum. ' +
                      'Quisque lobortis enim vel enim elementum, ac convallis magna scelerisque. ' +
                      'Donec sed neque tortor. Morbi non est risus. Etiam molestie quis augue pulvinar condimentum. ' +
                      'Phasellus facilisis ante in dolor viverra ultrices. Proin vitae gravida justo, ...',
        images      : ['images/197x148.gif', 'images/197x148.gif', 'images/197x148.gif']
    }],

    // TODO: display the projects info to the resume
    display : function() {

        for (var project in this.projects) {

            var formattedTitle       = HTMLprojectTitle.replace("%data%",       this.projects[project].title);
            var formattedDates       = HTMLprojectDates.replace("%data%",       this.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            if (this.projects[project].images.length > 0) {

                this.projects[project].images.forEach(function(element, index, array) {

                    var formattedImages = HTMLprojectImage.replace("%data%", element);

                    $(".project-entry:last").append(formattedImages);
                });
            }
        }
    }
};


/*
 * Education
 */
var education = {

    schools : [{
        name     : 'Instituto Tecnologico Universitario',
        location : 'Puebla, Mexico',
        degree   : 'Software Development Engineer',
        majors   : ['major 1', 'major 2', 'major n...'],
        dates    : 2009,
        url      : 'http://www.dasc.com.mx'
    }],
    onlineCourses : [{
        title  : 'Front-End Web Developer Nanodegree',
        school : 'Udacity, Inc.',
        date   : 2015,
        url    : 'https://www.udacity.com'
    },
    {
        title  : 'Master in HTML5/CSS3 and JavaScript',
        school : 'Code School LLC',
        date   : 2014,
        url    : 'https://www.codeschool.com'
    }],

    // TODO: display the education info to the resume
    display : function() {

        for (var school in this.schools) {

            var formattedName     = HTMLschoolName.replace("%data%",     this.schools[school].name);
            var formattedDegree   = HTMLschoolDegree.replace("%data%",   this.schools[school].degree);
            var formattedDates    = HTMLschoolDates.replace("%data%",    this.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            var formattedMajor    = HTMLschoolMajor.replace("%data%",    this.schools[school].majors.join(", "));

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }

        $("#education").append(HTMLonlineClasses);

        for (var onlineCourse in this.onlineCourses) {

            var formattedTitle  = HTMLonlineTitle.replace("%data%",  this.onlineCourses[onlineCourse].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
            var formattedDate   = HTMLonlineDates.replace("%data%",  this.onlineCourses[onlineCourse].date);
            var formattedUrl    = HTMLonlineURL.replace("%data%",    this.onlineCourses[onlineCourse].url);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDate);
            $(".education-entry:last").append(formattedUrl);
        }
    }
};


// TODO: display content
bio.display();
work.display();
projects.display();
education.display();


// TODO: display map
$("#mapDiv").append(googleMap);


// TODO: internationalize
function inName() {

    var name = $("#name").text().toLowerCase().split(" ");

    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1);
    name[1] = name[1].toUpperCase();
    name    = name.join(" ");

    return name;
}

// $("#main").append(internationalizeButton);

