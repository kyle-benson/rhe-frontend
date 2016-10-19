var sponsors = [
	{ "sponsor" : "Carahsoft", "contact" : "Natalie Gregory", "email" : "natalie.gregory@carahsoft.com" },
	{ "sponsor" : "Dell", "contact" : "Steve Harris", "email" : "steve_harris@dell.com" },
	{ "sponsor" : "DLT", "contact" : "Joe Perrino", "email" : "joe.perrino@dlt.com" },
	{ "sponsor" : "Emergent", "contact" : "Austin Wineholt", "email" : "awineholt@emergent360.com" },
	{ "sponsor" : "Immix Group", "contact" : "David Tong", "email" : "david_tong@immixgroup.com" },
	{ "sponsor" : "ShadowSoft", "contact" : "Michael Eith", "email" : "meith@shadow-soft.com" },
	{ "sponsor" : "Synnex", "contact" : "Jason Weathers", "email" : "jasonw@synnex.com" }
];

var speakers = [
	{ "speaker" : "Michelle Davis", "email" : "micdavis@redhat.com" },
	{ "speaker" : "Toan Do", "email" : "tdo@redhat.com" },
	{ "speaker" : "Nathan Jones", "email" : "njones@redhat.com" },
	{ "speaker" : "Tim MIller", "email" : "timiller@redhat.com" },
	{ "speaker" : "Michael Surbey", "email" : "msurbey@redhat.com" },
	{ "speaker" : "Jim Tyrell", "email" : "jtyrrell@redhat.com" }
];

var dailyAgenda = {
	monday 		: [
		{ "time" : "08:30 - 08:45", "topic": "Check-in @ Patner Training 2016", "location": "Tysons Marriott", "speakers": "", "notes" : ""},
		{ "time" : "08:45 - 09:00", "topic": "Welcome & Intro", "location": "", "speakers": "Kyle Jensen, Kevin Chin", "notes" : ""},
		{ "time" : "09:00 - 10:00", "topic": "State of the Business", "location": "", "speakers": "Nathan Jones, Keith Barnes, Toan Do, Rick Miller, Lynne Chamberlain", "notes" : ""},
		{ "time" : "10:00 - 10:30", "topic": "Digital Transformation Keynote", "location": "", "speakers": "Adam Clater", "notes" : ""},
		{ "time" : "10:30 - 10:45", "topic": "Take 15 (Break)", "location": "", "speakers": "", "notes" : ""},
		{ "time" : "10:45 - 11:45", "topic": "Sales Update on Key Technologies", "location": "", "speakers": "Kyle Benson, Sompop", "notes" : ""},
		{ "time" : "11:45 - 12:45", "topic": "Lunch Break", "location": "", "speakers": "", "notes" : ""},
		{ "time" : "12:45 - 13:30", "topic": "Partner Resources & Best Pratices", "location": "", "speakers": "", "notes" : "Kyle Jensen, Operations, Bill Miltenberger"},
		{ "time" : "13:30 - 14:30", "topic": "Red Hat and Cyber Security", "location": "", "speakers": "", "notes" : "Rita Cattoll, Lance Paoli"},
		{ "time" : "13:30 - 15:00", "topic": "Working with Red Hat in the Public Cloud", "location": "", "speakers": "Bob Roselli, Frank Hum", "notes" : ""},
		{ "time" : "15:00 - 15:15", "topic": "Take 15 (Break)", "location": "", "speakers": "", "notes" : ""},
		{ "time" : "15:15 - 16:15", "topic": "Red Hat Storage Opportunities", "location": "", "speakers": "Garrett Clark", "notes" : ""},
		{ "time" : "16:15 - 16:45", "topic": "Partner Opportunities", "location": "", "speakers": "Kevin Chin, Dan McGuan, Wyane Rhone, Sterling Mead, Denis McCarthy", "notes" : ""},
		{ "time" : "16:45 - 17:00", "topic": "Final Review", "location": "", "speakers": "", "notes" : ""},
		{ "time" : "17:00 - 18:00", "topic": "Networking Event", "location": "", "speakers": "", "notes" : ""}
	],
	tuesday 	: [
		{ "time" : "08:30 - 08:45", "topic": "Check-in @ Patner Training 2016", "location": "Tysons Marriott", "speakers": "", "notes" : ""},
		{ "time" : "08:45 - 09:00", "topic": "Welcome & Intro", "location": "", "speakers": "Tim Miller, Kevin Chin", "notes" : ""},
		{ "time" : "09:00 - 09:30", "topic": "Digital Transformation Keynote", "location": "", "speakers": "Adam Clater", "notes" : ""},
		{ "time" : "09:30 - 10:00", "topic": "State of the Technology", "location": "", "speakers": "Tim Olson, Evong Nham", "notes" : ""},
		{ "time" : "10:00 - 10:15", "topic": "Partner Resources Update", "location": "", "speakers": "Anita Devadason", "notes" : ""},
		{ "time" : "10:15 - 10:30", "topic": "Take 15 (Break - Room Partition Change)", "location": "", "speakers": "", "notes" : ""}
	],
	wednesday  :  [
		{ "time" : "10:30 - 11:30", "topic": "Advantages in Moving to JBoss EAP", "location": "", "speakers": "Jim Tyrrell"},
		{ "time" : "11:30 - 12:00", "topic": "OpenShift - Containers Made Easy to Use", "location": "", "speakers": "Michael Surbey"},
		{ "time" : "12:00 - 13:15", "topic": "Lunch & OpenShift Lab", "location": "", "speakers": "Michael Surbey"},
		{ "time" : "13:15 - 14:30", "topic": "JEE Apps and OpenShift Container Platform", "location": "", "speakers": "Michelle Davis"},
		{ "time" : "14:30 - 14:45", "topic": "Take 15 (Break)", "location": "", "speakers": ""},
		{ "time" : "14:45 - 16:00", "topic": "Push Button CI/CD Workflow Using OpenShift", "location": "", "speakers": "Tariq Islam"},
		{ "time" : "16:00 - 17:00", "topic": "OpenShift Local Container Development Kit (CDK)", "location": "", "speakers": "Brandon Cox"},
		{ "time" : "17:00 - 18:00", "topic": "Networking Event", "location": "", "speakers": ""}
	],
	thursday 	: [
			{ "time" : "10:30 - 11:30", "topic": "infrastructure Technology Update", "location": "", "speakers": "Frank Hum, Maa Nuiriankh"},
			{ "time" : "11:30 - 12:15", "topic": "Lunch Break", "location": "", "speakers": ""},
			{ "time" : "12:15 - 13:15", "topic": "Open Hybrid Cloud Management", "location": "", "speakers": "Lucy Kerner"},
			{ "time" : "13:15 - 14:30", "topic": "Software Defined Storage", "location": "", "speakers": "Bob Buckley, Mike Flannery"},
			{ "time" : "14:30 - 14:45", "topic": "Take 15 (Break)", "location": "", "speakers": ""},
			{ "time" : "14:45 - 16:00", "topic": "Infrastructure Modernization", "location": "", "speakers": "Maa Nuiriankh, Gerald Dykeman"},
			{ "time" : "16:00 - 17:00", "topic": "OpenShift Container Management", "location": "", "speakers": "Kyle Benson"},
			{ "time" : "17:00 - 18:00", "topic": "Networking Event", "location": "", "speakers": ""}
	]
};

var breakoutSessions = [
	{ id : "ansible", "session" : "Ansible by Red Hat", "description" : ""},
	{ id : "cloud_access", "session" : "Red Hat Cloud Access", "description" : ""},
	{ id : "cloudforms", "session" : "Red Hat CloudForms", "description" : ""},
	{ id : "containers", "session" : "Containers", "description" : ""},
	{ id : "cdk", "session" : "OpenShift Local Container Development Kit (CDK)", "description" : ""},
	{ id : "eap", "session" : "JBoss Enterprise Application Platform (EAP)", "description" : ""},
	{ id : "open", "session" : "Online Partner Enablement Network (OPEN)", "description" : ""},
	{ id : "ocp", "session" : "OpenShift Container Platform", "description" : ""},
	{ id : "rhev", "session" : "Red Hat Virtualization", "description" : ""},
	{ id : "security", "session" : "Security", "description" : ""},
	{ id : "gluster", "session" : "Storage - Gluster", "description" : ""},
	{ id : "ceph", "session" : "Storage - Ceph", "description" : ""},
];

var breakoutSchedules = {
	"ansible" : [
		{
			"what" : "IT complexity is a huge problem for businesses. The more complex IT is, the more costly it is to deploy and maintain. Furthermore, complex environments take much longer to deploy and typically suffer longer and more severe outages." +
							 "As system complexity increases, team productivity decreases." +
		           "IaaS+ is a great starting point for reducing the complexity of existing IT environments, modernizing IT environments, and implementing initial DevOps practices. By automating repetitive tasks, teams are able to focus on productivity and" +
							 "innovation rather than mundane repetitive tasks. Ansible and Ansible Tower by Red Hat help organizations automate cloud provisioning, configuration management, application deployment, intra-service orchestration," +
							 "and many other IT needs." +
							 "<u>Benefits of Ansible and DevOps</u>:" +
							 "• Save time and increase productivity to overcome complexity so there's more resources for innovation." +
							 "• Make fewer mistakes and errors so you can increase accountability and compliance." +
							 "• Improve collaboration and job satisfaction to promote a culture of success." +
							 "• Agentless (uses existing SSH and WinRM transports), so there's nothing to install on remote systems and no separate agents to manage." +
							 "• Created for multi-tier deployments, and models your IT infrastructure by describing how all of your systems inter-relate, rather than just managing one system at a time.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"cloud_access" : [
		{
			"what" : "Red Hat Cloud Access makes it easy to migrate your current subscriptions for use on qualified Red Hat Certified Cloud and Service Providers. All benefits of your subscription transfer to the public cloud. That means you keep your direct" +
							 "relationship with Red Hat, including sales and our award-winning support.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"cloudforms" : [
		{
			"what" : "CloudForms gives you choice and flexibility while providing a unified and consistent set of management capabilities across:" +
							 "• Virtualization platforms like Red Hat Virtualization, VMware vRealize, and Microsoft Hyper-V." +
							 "• Private cloud platforms based on OpenStack®." +
							 "• Public cloud platforms like Amazon Web Services and Microsoft Azure." +
							 "CloudForms can see and manage both the guest and host systems, allowing management of workloads and infrastructure within the same system.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"containers" : [
		{
			"what" : "Containers are a solution to the problem of how to get software to run reliably when moved from one computing environment to another" +
							 "Put simply, a container consists of an entire runtime environment: an application, plus all its dependencies, libraries and other binaries," +
							 "and configuration files needed to run it, bundled into one package. By containerizing the application platform and its dependencies, differences in OS distributions and underlying infrastructure are abstracted away." +
							 "This sounds like virtualization. What's the difference?" +
							 "With virtualization technology, the package that can be passed around is a virtual machine and it includes an entire operating system as well as the application. A physical server running three virtual machines  would have a hypervisor and three separate operating systems running on top of it." +
							 "By contrast a server running three containerized applications as with Docker runs a single operating system, and each container shares the operating system kernel with the other containers." +
							 "Shared parts of the operating system are read only, while each container has its own mount (i.e., a way to access the container) for writing. That means the containers are much more lightweight and use  far fewer resources than virtual machines.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"cdk" : [
		{
			"what" : "Red Hat Container Development Kit provides a pre-built Container Development Environment based on Red Hat Enterprise Linux to help you develop container-based (sometimes called Docker) applications quickly." +
							 "The containers you build can be easily deployed on any Red Hat container host or platform, including: Red Hat Enterprise Linux, Red Hat Enterprise Linux Atomic Host, and our platform-as-a-service solution, OpenShift Enterprise 3.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"eap" : [
		{
			"what" : "JBoss EAP is a subscription-based/open-source Java EE-based application server runtime platform used for building, deploying, and hosting" +
							 "highly-transactional Java applications and services.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"open" : [
		{
			"what" : "Red Hat OPEN enables partners around the world to work smarter, faster, and more efficiently. Available anytime, anywhere through the Red Hat" +
			         "Partner Portal, Red Hat OPEN provides access to the tools, training, support, and resources needed to advance your business, including:" +
							 "• Role-specific, self-paced training courses designed for sales, sales engineer, and delivery specialists that can lead to earning a Red Hat partner accreditation." +
							 "• The Red Hat Partner Demo System with pre-configured demos across the Red Hat product lines." +
							 "• The Red Hat technical library, an online resource offering tagged, searchable, and dynamic content, available whenever you need it.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"ocp" : [
		{
			"what" : "PaaS is a better choice than IaaS+ for fully maximizing the benefits of DevOps. With IaaS+, it’s still up to individual development, test, and production teams to configure each environment. Even with IaaS+ these teams suffer the same fate of inconsistent environments." +
			         "PaaS helps IT deploy uniform development, test, and production environments. This uniformity reduces the risks and impact of configuration differences while maximizing the benefits of DevOps." +
							 "Although IaaS+ is suitable for building modern applications, a container based approach implemented by enterprise PaaS offerings, like OpenShift, makes development and deployment of applications using a distributed model or framework of Microservices (a model on the rise which breaks large applications into smaller services) much easier for enterprise IT." +
							 "<u>Benefits of OpenShift and DevOps:</u>" +
							 "• Process optimization from Development to Production–instead of waiting for weeks, months, or years to move from idea to production, it is only minutes, hours, or days." +
							 "• Businesses deliver faster, exceeding customer expectations, thereby increasing the customer retention." +
							 "• Code deployment is faster, errors are vastly reduced and quickly detected resulting in dramatic Mean Time To Recover (MTTR)." +
							 "• Operations, in addition to development, operates at the speed of business." +
							 "• PaaS makes DevOps possible without hiring specialized skill sets. PaaS brings closer collaboration between developers and operations with less effort." +
							 "• Combining PaaS (tools) and DevOps (culture) reduces operational overhead, freeing up resources for new products.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"rhev" : [
		{
			"what" : "Red Hat Enterprise Virtualization offers enterprises the ideal platform on which to base large-scale virtualization initiatives and internal and private cloud" +
							 "deployments. The complete virtualization management system lets customers centrally and effectively manage their entire virtual environments, which can" +
							 "include virtual datacenters, clusters, hosts, guest virtual servers and desktops, networking, and storage.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"security" : [
		{
			"what" : "<u>The mission of Red Hat Product Security is to:</u>" +
							 "• Help protect customers from meaningful security concerns when using Red Hat products and services." +
							 "• Investigate, track, and explain security issues that may affect users of Red Hat supported products and services." +
							 "• Be the point of contact for customers, users, and researchers who find security issues in our products and services." +
							 "• Publish the procedures for dealing with security issues in our products and services." +
							 "• Provide timely security fixes, advisories, and updates that our customers can easily find, obtain, and understand." +
							 "• Help customers keep their systems updated to minimize the security risks and provide automated analysis and enforcement of security practices." +
							 "• Work with other vendors of Linux and open source software to reduce the security risks through information sharing and peer review." +
							 "The heart of Red Hat's security response capabilities is a carefully designed and thoroughly validated process for managing vulnerabilities." +
							 "At Red Hat, stable code is backed by a strong security team." +
							 "<u>Red Hat Product Security ensures Red Hat products are secure by:</u>" +
							 "• Identifying security issues." +
							 "• Assessing issue severity." +
							 "• Creating updates." +
							 "• Notifying customers." +
							 "• Distributing updates.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"gluster" : [
		{
			"what" : "Red Hat Gluster Storage is an open, scalable, reliable, and cost-effective data-management platform that streamlines file and object access across physical, virtual," +
							 "and cloud environments. It is a scale-out file store with a straightfoward architecture suitable for public, private, and hybrid cloud environments. Red Hat Gluster Storage" +
							 "offers mature network file system (NFS), server message block (SMB), and Hadoop distributed file system (HDFS) interfaces and is well suited for analytics, rich media, file" +
							 "sync and share, and virtualization workloads.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	],
	"ceph" : [
		{
			"what" : "A robust, massively scalable block and object storage platform for enterprises deploying public or private clouds, Red Hat Ceph Storage is a modern storage system for" +
							 "the cloud. The product's highly tunable, extensible, and configurable architecture offers mature interfaces for enterprise block and object storage, making it well" +
							 "suited for archival, rich media, and cloud infrastructure workloads like OpenStack. Red Hat Ceph Storage significantly lowers the cost of storing enterprise data and helps" +
							 "enterprises manage exponential data growth. Delivered in one self-healing, self-managing platform with no single point of failure, Red Hat Ceph Storage handles data management" +
							 "so businesses can focus on improving data availability.",
			"use" : "",
			"probe" : "",
			"info" : ""
		}
	]
};
