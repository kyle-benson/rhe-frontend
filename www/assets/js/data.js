var cam_speakers = [
	{ "speaker" : "Bob Roselli", "email" : "broselli@redhat.com" },
	{ "speaker" : "Christine Hanchett", "email" : "chanchet@redhat.com" },
	{ "speaker" : "Denis McCarthy", "email" : "dmccarth@redhat.com" },
	{ "speaker" : "Ed Siu", "email" : "esiu@redhat.com" },
	{ "speaker" : "Kathleen Cunningham", "email" : "kcunning@redhat.com" },
	{ "speaker" : "Kyle Jensen", "email" : "kjensen@redhat.com" },
	{ "speaker" : "Lori Parker", "email" : "loparker@redhat.com" },
	{ "speaker" : "Mark Schoonmaker", "email" : "mschoonm@redhat.com" },
	{ "speaker" : "Mary Ann Bilohlavek", "email" : "mbilohla@redhat.com" },
	{ "speaker" : "Pam Wittner", "email" : "pdalexan@redhat.com" },
	{ "speaker" : "Rick Stahovec", "email" : "rstahove@redhat.com" },
	{ "speaker" : "Sherri Iceton", "email" : "siceton@redhat.com" },
	{ "speaker" : "Sterling Mead", "email" : "smead@redhat.com" },
	{ "speaker" : "Steve Gamelin", "email" : "sgamelin@redhat.com" },
	{ "speaker" : "Wayne Rhone", "email" : "wrhone@redhat.com" }
];

var csa_speakers = [
	{ "speaker" : "Anita Devadason", "email" : "adevadas@redhat.com" },
	{ "speaker" : "Frank Hum", "email" : "fhum@redhat.com" },
	{ "speaker" : "Kevin Chin", "email" : "kchin@redhat.com" },
	{ "speaker" : "Kyle Benson", "email" : "kbenson@redhat.com" },
	{ "speaker" : "Maã Shepsu Menåb Nuíríãnkh", "email" : "mnuirian@redhat.com" },
	{ "speaker" : "Manny Evangelista", "email" : "mevangel@redhat.com" },
	{ "speaker" : "Michael Surbey", "email" : "msurbey@redhat.com" }
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
	{ id : "consulting", "session" : "Red Hat Consulting", "description": ""},
	{ id : "government", "session" : "Red Hat Solutions for Government", "description": ""},
	{ id : "sat", "session" : "Red Hat Satellite", "description" : ""}
];

var breakoutSchedules = {
	"ansible" : [
		{
			"what" : 	"Ansible is a radically simple IT automation engine that automates cloud provisioning, configuration management, application deployment, intra-service orchestration, and many other IT needs.</br></br>" +
								"Ansible was created for multi-tier deployments, and models your IT infrastructure by describing how all of your systems inter-relate, rather than just managing one system at a time. It uses no agents and no " +
								"additional custom security infrastructure, so it's easy to deploy--and most importantly, uses a very simple language (YAML, in the form of Ansible Playbooks). " +
								"YAML allows you to describe your automation jobs in a way that approaches plain English.</br></br>" +
								"Key Advantages:</br>" +
								"- Simple Automation Language</br>" +
								"- Agentless Approach using SSH & WinRM</br>" +
								"- Increase productivity and business growth through automation</br></br>" +
								"Ansible Tower by Red Hat is a customer-premises platform web app that is designed to make Ansible ready for the enterprise by providing businesses with control, knowledge, and delegation capabilities " +
								"for enterprise-wide automation. With Ansible Tower, a RESTful application programming interface (REST API) and user interface (UI) ensures users are able to rapidly and securely run Ansible across entire IT environments. " +
								"Ansible Tower provides organizations the ability to provide authentication, role based authorization, and logging of tasks through the UI this is a powerful tool for many security minded organizations.",
			"use" : 	"IT complexity is a huge problem for businesses. The more complex IT is, the more costly it is to deploy and maintain. Furthermore, complex environments take much longer to deploy and typically suffer longer " +
								"and more severe outages. As system complexity increases, team productivity decreases. Ansible and Ansible Tower by Red Hat help organizations of any size implement DevOps quickly and efficiently. " +
								"Regardless of what is being deployed, and where it's being deployed, Ansible can manage the complete application life-cycle management process.",
			"probe" : "Are you using Ansible? If yes, do you want to learn more about Ansible Tower?</br></br>" +
								"If you aren't currently using Ansible, what is your IT automation strategy?</br></br>" +
								"How do you orchestrate multi-tier application deployments? How do you handle configuration management? How do you gather real-time, system-specific information across your environment?</br></br>" +
								"How often do you deploy applications, and/or provision infrastructure, and how long does it typically take?</br></br>" +
								"Do you ever wish there was a simpler way for everyone in the company to benefit from automation tools, not just those who know complex programming languages?</br></br>" +
								"Are your employees freqently bogged down by routine but necessary IT tasks?</br></br>" +
								"Is there a plan within the organization for IT automation?</br></br>",
			"info" : 	"<p><ul><li><a href='https://www.ansible.com' target='_blank'>Ansible by Red Hat</a></li>" +
								"<li><a href='https://www.ansible.com/whitepapers' target='_blank'>Ansible Whitepapers</a></li>" +
								"<li><a href='https://www.ansible.com/tower' target='_blank'>Ansible Tower by Red Hat</a></li>" +
								"<li><a href='https://www.ansible.com/quick-start-video' target='_blank'>Video - Getting Started with Ansible</a></li>" +
								"<li><a href='https://www.redhat.com/en/technologies/management' target='_blank'>Red Hat Management Products</a></li></ul></p>"
		}
	],
	"cloud_access" : [
		{
			"what" : "<p>With Red Hat Cloud Access, you can easily move subscriptions from your datacenter to a Red Hat Certified Public Cloud and Service Provider. " +
			         "You’ll keep all of the benefits of your subscription and your direct relationship with Red Hat, including access to product experts and our" +
							 "award-winning Red Hat Global Support Services.</p>",
			"use" : "<p><ul><li>A customer wishes to deploy to public cloud infrastructure, but wants to maintain a trusted support relationship with Red Hat.</li>" +
							"<li>Customer wants to have a single management/update architecture (via Red Hat Satellite) across on-premise and cloud based Red Hat Enterprise Linux.</li></ul></p>",
			"probe" : "<p>N/A</p>",
			"info" : "<p><ul><li><a href='http://red.ht/2f4W81k' target='_blank'>Red Hat Certified Cloud and Service Providers</a></li></ul></p>"
		}
	],
	"cloudforms" : [
		{
			"what" : "<p>Red Hat CloudForms offers unified management for hybrid environments, providing a consistent experience and functionality across virtualization, " +
			         "private and public cloud platforms, and container-based infrastructures. Red Hat CloudForms helps enterprises accelerate service delivery through " +
							 "self-service, including complete operational and life-cycle management of the deployed services. It provides greater operational visibility through " +
							 "continuous discovery, monitoring, and deep inspection of managed resources. And it ensures compliance and governance using automated policy enforcement " +
							 "and remediation. All the while, CloudForms is reducing operational costs and reducing or eliminating the manual processes that burden IT staff.</p>",
			"use" : "<p><ul><u>Private Cloud Management</u><li>Extend existing virtualization capabilities</li>" +
			        "<li>Centralized management of multiple platforms (eg, VMware and RHV)</li>" +
							"<li>Policy enforcement</li>" +
							"<br/><u>Hybrid Cloud Management</u><li>Managing public and private cloud infrastructure</li>" +
							"<br/><u>Public Cloud Management</u><li>Provision to multiple public clouds</li>" +
							"<li>Enforce agency/corporate policies</li>" +
							"<li>Cloud brokering</li></ul></p>",
			"probe" : "<p><ol><li>Do you have any cloud initiatives currently underway?</li>" +
			          "<li>Do you have multiple cloud/virtualization providers?</li>" +
								"<li>Is the busienss side of your organization asking you to deploy applications faster or be more agile?</li>" +
								"<li>Are you interested in private cloud, but have not implemented one yet?</li>" +
								"<li>Are your IT operations teams being saddled with many manual tasks related to providing infrastructure to your internal customers?</li>" +
								"<li>Is there a plan within the organization for cloud management?</li>" +
								"<li>Do you have a budget for automation solutions?</li>" +
								"<li>Are you looking for a solution to deliver IT resources faster to your development team?</li>" +
								"<li>Do you have problems managing the virtual machine life cycle?</li>" +
								"<li>Do you have unused software assigned to virtual machines that are not in use?</li>" +
								"<li>Can you automate the provisioning of a multi-virtual machine service?</li>" +
								"<li>Can you automate the compliance of virtual machines and powered-off templates, and apply new governance to changing standards?</li></ol></p>",
			"info" : "<p><ul><li><a href='http://red.ht/2ekDDTr' target='_blank'>Red Hat CloudForms</a></li>" +
			          "<li><a href='http://bit.ly/2eIsDz5' target='_blank'>Managing Your Private Cloud</a></li>" +
								"<li><a href='http://red.ht/2eGtSQc' target='_blank'>Management Portfolio</a></li></ul></p>"
		}
	],
	"containers" : [
		{
			"what" : 	"Containers leverage a combination of lightweight application isolation and image-based deployment to keep applications and their runtime components together. " +
								"Containers are essentially simpler, lighter, and denser virtual machines that require orchestration and management to be useful. " +
								"They benefit both development and operations processes by allowing engineers and administrators to package, add to, and share self contained portable applications easily.</br></br>" +
								"Containers contain a piece of software in a complete filesystem including everything it needs to run: code, runtime, system tools, system libraries – anything to be installed on the server.</br></br>" +
								"Lastly, containers have similar resource isolation and allocation benefits as virtual machines but a different architectural approach allows them to be much more portable and efficient. " +
								"Containers include the application and all of its dependencies, but share the kernel with other containers. " +
								"They run as an isolated process in user space on the host operating system. " +
								"They’re also not tied to any specific infrastructure they can run on any computer, on any infrastructure, and in any cloud.",
			"use" : "<p><ul><u>CI/CD</u><li>Enable developers to develop and test applications more quickly and within any environment.</li>" +
			 				"<br/><u>DevOps</u><li>Break down barriers between Dev and Ops teams to improve the app development process.</li>" +
							"<br/><u>Infrastructure Optimization</u><li>Decrease infrastructure costs while increasing its efficiency.</li>",
			"probe" : "<p><ol><li>Are you looking to make a move to microservices & hybrid cloud architectures?</li>" +
								"<li>Are you wanting to containerize traditional applications?</li>" +
								"<li>What role do you see containers playing in your IT infrastructure strategy moving forward?</li>" +
								"<li>What benefits do you hope to achieve by adopting container technology?</li>" +
								"<li>What concerns do you have about container technology?</li></ol></p>",
			"info" : 	"<p><ul><li><a href='www.redhat.com/containers'target='blank'>Containers</a></li>" +
								"<li><a href='http://bit.ly/2eongXM' target='_blank'>Why containers?</a></li>" +
								"<li><a href='http://bit.ly/2ee0Ho2' target='_blank'>Why Red Hat containers?</a></li></ul></p>"
			}
	],
	"cdk" : [
		{
			"what" : 	"Red Hat Container Development Kit provides a pre-built Container Development Environment based on Red Hat Enterprise Linux to help you develop container-based (sometimes called Docker) applications quickly. " +
								" The containers you build can be easily deployed on any Red Hat container host or platform, including: " +
								"Red Hat Enterprise Linux, Red Hat Enterprise Linux Atomic Host, and our platform-as-a-service solution, OpenShift Enterprise 3.",
			"use" : 	"The Container Development Kit provides a pre-built, single-machine OpenShift 3 environment, so you can try the latest version of the OpenShift platform-as-a-service that integrates " +
								"support for docker-formatted containers and Kubernetes. When you bring up the rhel-ose Vagrantfile, OpenShift is started and provisioned. " +
								"</br></br>To help you get started building applications, a number of OpenShift templates are included. You can access the OpenShift Web console from your browser or work from the CLI using the oc command to deploy container applications. " +
								"OpenShift is pre-configured with a local Docker registry available and a local version of Kubernetes running, so you can test the full experience in a self-contained environment." +
								"To save you from having to assemble a container development environment from scratch, Container Development Kit delivers the latest container tools in a Red Hat Enterprise Linux virtual " +
								"machine that you can use on your Mac OS X, Microsoft Windows, or Red Hat Enterprise Linux system. In addition, you have your choice of virtualization platforms (VirtualBox, Hyper-V, and " +
								"the Linux KVM/libvirt hypervisors are all supported). All of the VM configuration details on your system are handled for you by Vagrant, an open-source tool for creating and distributing portable and reproducible development environments.",
			"probe" : "N/A",
			"info" : 	"<p><ul><li><a href='http://developers.redhat.com/products/cdk/overview/' target='_blank'>Red Hat Container Development Kit</a></li>" +
								"<li><a href='http://developers.redhat.com/blog/2016/06/01/red-hat-cdk-installation-in-just-minutes/' target='_blank'>Blog - Red Hat CDK installation in just minutes!</a></li>" +
								"<li><a href='http://developers.redhat.com/promotions/docker-cheatsheet/' target='_blank'>Container Cheet Sheet</a></li></ul></p>"
		}
	],
	"eap" : [
		{
			"what" : 	"<p>Red Hat JBoss Enterprise Application Platform (EAP) is the only choice for organizations seeking an open source, market leading Java EE application platform. " +
								"Organizations standardize on JBoss EAP in order to gain efficiencies from their existing Java applications as well as establish a foundation for Java apps deployed " +
								"in cloud environments, containers, microservices architectures, and using DevOps methodologies. Additionally many organizations make the change to JBoss EAP to " +
								"realize signifigant decreases in total cost of ownership (TCO), while gaining the freedom to move between vendors by coding to standards.</p>" +
								"<p><ul><u>Key Advantages:</u>" +
								"<li>Modular platform</li>" +
								"<li>Lightweight requirements</li>" +
								"<li>High Performance</li>" +
								"<li>Extremely fast startup times</li>" +
								"<li>Enterprise grade reliability, security and compliance</li>" +
								"<li>Adherence to standards</li>" +
								"<li>Avoidance of vendor lock in</li></ul></p>",
			"use" : 	"<p><ul><li>JBoss EAP is well-suited for organizations with demanding reliability, security, and compliance requirements that need developer-friendly technology, high productivity, and flexible deployment. " +
								"Organizations that use JBoss EAP can fully support a wide range of Java applications, from HTML5 mobile applications to microservices apps to highly transactional applications that use the Java EE programming approach. " +
								"JBoss EAP helps organizations deliver business value more quickly and with greater flexibility, resulting in lower costs, fast and easy scale-out, and reduced IT complexity.</li>" +
								"<li>Organizations looking to migrate to a new Java EE app server are key prospects for Red Hat JBoss EAP</li>" +
								"<li>Java developers looking to build microservices or simply more modular Java applications.</li>" +
								"<li>Customers spending too much time and resources on maintaining and updating traditional Java EE monolithic applications.</li>" +
								"<li>Customers looking to decrease the cost associated with hosting their applications.</li>" +
								"<li>Customers looking to avoid vendor lock-in.</li></ul></p>",
			"probe" : "<p><ol><li>What types of applications do you have, and how are your current applications used?</li>" +
								"<li>What application servers do you currently use?</li>" +
								"<li>What are your plans for modernizing your older incumbent (legacy) applications?</li>" +
								"<li>Are you thinking of deploying applications in the cloud to gain benefits of elastic scaling and easy provisioning?</li>" +
								"<li>How is your relationship with your current middleware provider(s), and how is your current existing environment working?</li>" +
								"<li>Have you recently experienced demands to develop, deploy, and update your systems and processes more quickly?</li>" +
								"<li>What are your plans to accommodate growing IT requests from your customers?</li>" +
								"<li>Do you plan on expanding your cloud and virtualization strategies in the future?</li></ul></p>",
			"info" : 	"<p><ul><li><a href='https://www.redhat.com/en/technologies/jboss-middleware/application-platform' target='_blank'>Red Hat JBoss Enterprise Application Platform</a></li>" +
								"<li><a href='https://www.redhat.com/en/resources/red-hat-jboss-enterprise-application-platform-technology-overview' target='_blank'>Technology Brief</a></li>" +
								"<li><a href='https://www.redhat.com/en/insights/devops' target='_blank'>Innovate faster with DevOps</a></li></ul></p>"
		}
	],
	"open" : [
		{
			"what" : 	"Red Hat OPEN is an enablement program created specifically for partners providing role-based training on how to sell and deliver Red Hat products and solutions. " +
								"The program features self-paced, online learning, combined with online assessments that lead to accreditation. Partners in partner sales, sales engineer, and delivery roles " +
								"should start their learning journey with Red Hat OPEN, then continue with Red Hat Training and Certification.",
			"use" : 	"New Courses Available in OPEN:</br>" +
								"- How to Sell Red Hat Insights</br>" +
								"- How to Sell Ansible Tower by Red Hat</br>" +
								"- Automation with Ansible by Red Hat</br>" +
								"- Red Hat Cloud Suite FASTRAX</br>" +
								"- Red Hat CloudForms Implementation</br>" +
								"- Red Hat OpenStack Implementation</br>" +
								"- App Development with Red Hat Mobile Application Platform</br>" +
								"- OSGI-Based Development with Red Hat JBoss Fuse</br>" +
								"- Business Logic Development with Red Hat JBoss BPM Suite</br>" +
								"- OpenShift 3 Implementation</br>" +
								"- Application Development with Red Hat OpenShift</br>" +
								"- RHEL 7 Troubleshooting</br>" +
								"- RHEL for SAP HANA</br>" +
								"- RHEL for IBM zSystems FASTRAX</br>" +
								"- RHEL Atomic Host and Containers",
			"probe" : "N/A",
			"info" : 	"<p><ul><li><a href='https://www.redhat.com/open' target='_blank'>OPEN</a></li>" +
								"<li><a href='https://partnercenter.force.com/s/training_OPEN_brochure.pdf' target='_blank>OPEN Brochure</a></li>" +
								"<li><a href='https://partnercenter.force.com/s/Howtoguide-accessandregisterforRedHatOPENpartnertraining.pdf?v=2' target='_blank'>How to Access OPEN</a></li>" +
								"<li><a href='http://bit.ly/1vWKVB2' target='_blank'>OPEN Course Catalog</a></li>" +
								"<li><a href='https://partner.redhat.com' target='_blank'>Red Hat Connect for Business Partners</a></li></ul></p>"
		}
	],
	"ocp" : [
		{
			"what" : 	"Red Hat OpenShift Container Platform helps organizations develop, deploy, and manage existing and container-based applications seamlessly across physical, virtual, and public cloud infrastructures. " +
								"Built on proven open source technologies, Red Hat OpenShift Container Platform helps application development and IT operations teams modernize applications, deliver new services, and accelerate development processes.</br></br>" +
								"Available On-Premise:</br>" +
								"- OpenShift Container Local</br>" +
								"- OpenShift Container Lab</br>" +
								"- OpenShift Container Platform</br></br>" +
								"Available Cloud-based:</br>" +
								"- OpenShift Online</br>" +
								"- OpenShift Dedicated</br></br>" +
								"Key Advantages:</br>" +
								"- Expedite innovation to market</br>" +
								"- Accelerate application development</br>" +
								"- Increase operational efficiency</br>" +
								"- Enable DevOps",
			"use" : 	"Development Teams:</br>" +
								"Red Hat OpenShift Container Platform provides developers with an optimal platform for provisioning, building, and deploying applications and their components in a self-service fashion. " +
								"With automated workflows like our source-to-image (S2I) process, it’s easy to get source code from version control systems into ready-to-run, docker-formatted container images." +
								"OpenShift Container Platform integrates with continuous integration and delivery tools, making it an ideal solution for any development team.</br></br>" +
								"Operations Teams:</br>" +
								"OpenShift Container Platform gives IT operations a secure, enterprise-grade environment that provides policy-based control and automation for container-based applications in production. " +
								"Cluster services, scheduling, and orchestration based on Kubernetes all provide load-balancing and auto-scaling capabilities. Security features prevent tenants from compromising other containers or the " +
								"underlying host. And because OpenShift can attach persistent storage directly to Linux® containers.",
			"probe" : "How do you ensure high availability for your services?</br>" +
								"How do you scale in case of peak usage?</br>" +
								"How long does it take from the time a developer asks for a specific environment to the actual application deployment? And how can you manage upgrade processes for your production environments?</br>" +
								"How much time does it take to clone one of your existing environments?</br>" +
								"Do you have plans to invest in or look into microservices, DevOps or containers?</br>" +
								"What programming languages or frameworks do you primarily use? Do you want to be able to choose different ones?</br>" +
								"How much time do you have to spend patching security fixes, and is this a big issue for your organization?</br>" +
								"What is your organization's cloud strategy, and how do you plan to expand your public or private cloud initiatives?	</br>" +
								"Are your development teams able to deliver new applications on time?</br>" +
								"Do developers go around IT and use public cloud resources?",
			"info" : 	"<p><ul><li><a href='https://www.redhat.com/openshift' target='_blank'>Openshift Website</a></li>" +
								"<li><a hreh='https://www.youtube.com/watch?v=D_Lj0rObunI' target='_blank'>Video - Introduction to OpenShift</a></li>" +
								"<li><a href='http://red.ht/2eZoGJ4' target='_blank'>Demo - How to use a push-button infrastructure in application development</a></li>" +
								"<li><a href='http://red.ht/2eqJ2Zz' target='_blank'>Demo - How to build and use an automated framework for container-based CI/CD</a></li>" +
								"<li><a href='https://www.youtube.com/user/rhopenshift' target='_blank'>YouTube - OpenShift</a></li></ul></p>"
		}
	],
	"rhev" : [
		{
			"what" : "<p>Red Hat Enterprise Virtualization offers enterprises the ideal platform on which to base large-scale virtualization initiatives and internal and private cloud" +
							 "deployments. The complete virtualization management system lets customers centrally and effectively manage their entire virtual environments, which can" +
							 "include virtual datacenters, clusters, hosts, guest virtual servers and desktops, networking, and storage.</p>" +
							 "<p><ul><u>Key Advantages</u><li>Centralized management of the KVM hypervisor</li>" +
							 "<li>Unmatched performance</li>" +
							 "<li>Self-Service User Portal</li>" +
							 "<li>Automated workload management</li>" +
							 "<li>Security with sVirt and SELinux</li>" +
							 "<li>Open source innovations</li>" +
							 "<li>Affordable + higher ROI</li></ul></p>",
			"use" : "<p><ul><u>Less-critical Application Tiers</u><li>Virtualize less-critical application tiers where performance and cost are the primary concerns</li>" +
			        "<br><u>Dev/Test Environments</u><li>Quickly provision VMs in QA and development environments</li>" +
							"<br><u>Cloud Transition</u><li>Co-engineered with Red Hat OpenStack for a smooth transition into Private and Public clouds</li></ul></p>",
			"probe" : "<p><ol><li>What virtualization platform are you using today? Does it provide the TCO and flexibility you require?</li>" +
			          "<li>How do you ensure your virtualization technology is secure?</li>" +
								"<li>How do you prevent lock-in and ensure that your organization is ready to seamlessly adopt next generation IT capabilities?</li>" +
								"<li>How do you virtualize your Tier-1 resource intensive workloads?</li>" +
								"<li>Do you have servers running RHEL, and are you interested in virtualization?</li>" +
								"<li>Are you getting the performance that you need for your virtualized infrastructure?</li>" +
								"<li>How do you manage your virtual machine environment? Do you think this is a future-proof strategy?</li>" +
								"<li>Does the organization lack comprehensive management tools that provide visibility across your virtual infrastructure?</li></ol></p>",
			"info" : "<p><ul><li><a href='http://red.ht/2f5cMy0' target='blank'>Red Hat Virtualization</a></li>" +
               "<li><a href='http://red.ht/2fd7qQm' target='blank'>Gartner 2016 Server Virtualization Report</a></li></ul></p>"
		}
	],
	"security" : [
		{
			"what" : 	"Unlike proprietary vendors, Red Hat develops software in collaboration with customers from a range of industries, including government and financial services, ensuring that rigorous security protocols are built in. " +
								"This is one of the reasons why our software meets some of the highest security certifications available under internationally recognized standards like Common Criteria. Security and open source innovation go hand in hand.</br></br>" +
								"The mission of Red Hat Product Security is to:</br>" +
								"- Help protect customers from meaningful security concerns when using Red Hat products and services.</br>" +
								"- Investigate, track, and explain security issues that may affect users of Red Hat supported products and services.</br>" +
								"- Be the point of contact for customers, users, and researchers who find security issues in our products and services.</br>" +
								"- Publish the procedures for dealing with security issues in our products and services.</br>" +
								"- Provide timely security fixes, advisories, and updates that our customers can easily find, obtain, and understand.</br>" +
								"- Help customers keep their systems updated to minimize the security risks and provide automated analysis and enforcement of security practices.</br>" +
								"- Work with other vendors of Linux and open source software to reduce the security risks through information sharing and peer review.</br></br>" +
								"The heart of Red Hat's security response capabilities is a carefully designed and thoroughly validated process for managing vulnerabilities. At Red Hat, stable code is backed by a strong security team.</br></br>" +
								"Red Hat Product Security ensures Red Hat products are secure by:</br>" +
								"- Identifying security issues.</br>" +
								"- Assessing issue severity.</br>" +
								"- Creating updates.</br>" +
								"- Notifying customers.</br>" +
								"- Distributing updates.",
			"use" : 	"",
			"probe" : "",
			"info" : 	"<p><ul><li><a href='https://www.redhat.com/security' target='_blank'>Security Website</a></li>" +
								"<li><a href='http://red.ht/2dvqXXb' target='_blank'>Government Standards (Certification and Accreditations)</a></li>" +
								"<li><a href='https://www.redhat.com/en/technologies/guide/it-security' target='_blank'>IT Security Guide</a></li></ul></p>"
		}
	],
	"gluster" : [
		{
			"what" : "<p>Red Hat Gluster Storage is an open, scalable, reliable, and cost-effective data-management platform that streamlines file and object access across physical, virtual," +
							 "and cloud environments. It is a scale-out file store with a straightfoward architecture suitable for public, private, and hybrid cloud environments. Red Hat Gluster Storage" +
							 "offers mature network file system (NFS), server message block (SMB), and Hadoop distributed file system (HDFS) interfaces and is well suited for analytics, rich media, file" +
							 "sync and share, and virtualization workloads.</p>" +
							 "<p><ul><u>Key Advantages</u><li>Open source</li>" +
							 "<li>Scalable, with no Metadata Server</li>" +
							 "<li>Multi-protocol access to the same data</li>" +
							 "<li>Modular</li>" +
							 "<li>Always On, Highly Available</li></ul></p>",
			"use" : "<p><ul><li>Cost-effective, scalable deployments for analytics:  machine log data analytics, GeoSpatial, big data analytics</li>" +
			        "<li>Enterprise File Sharing:  Media streaming, Active archives</li>" +
							"<li>Support the storage demands of virtual machine sprawl with commodity x86 servers instead of more complex options.</li>" +
							"<li>Rich Media & Archival</li>" +
							"<li>File Sync & Share</li></ul></p>",
			"probe" : "<p><ol><li>What storage technology are you currently using for X project?</li>" +
			          "<li>Does the technology scale flexibly and cost effectively with commodity hardware?</li>" +
								"<li>What challenges are you facing with your current storage infrastructure?</li></ol></p>",
			"info" : "<p><ul><li><a href='http://red.ht/2f5laxs' target='blank'>Red Hat Storage</a></li>" +
							 "<li><a href='http://red.ht/2eDY7pg' target='blank'>Test-Drive Storage</a></li>" +
							 "<li><a href='http://red.ht/2eDY2lt' target='blank'>Gartner File Systems And Object Storage</a></li>" +
               "<li><a href='http://bit.ly/2e8mc6X' target='blank'>Red Hat Storage Story</a></li></ul></p>"
		}
	],
	"ceph" : [
		{
			"what" : 	"A robust, massively scalable block and object storage platform for enterprises deploying public or private clouds, Red Hat Ceph Storage is a modern storage system for the cloud. " +
								"The product's highly tunable, extensible, and configurable architecture offers mature interfaces for enterprise block and object storage, making it well suited for archival, rich media, " +
								"and cloud infrastructure workloads like OpenStack. Red Hat Ceph Storage significantly lowers the cost of storing enterprise data and helps enterprises manage exponential data growth. " +
								"Delivered in one self-healing, self-managing platform with no single point of failure, Red Hat Ceph Storage handles data management so businesses can focus on improving data availability." +
								"Business Benefits:</br>" +
								"- Lower cost</br>" +
								"- Open source</br>" +
								"- Peace of mind</br>" +
								"- Proven at web scale</br></br>" +
								"Technical Benefits:</br>" +
								"- Massive scalability</br>" +
								"- Maximum uptime</br>" +
								"- Reduced maintenance</br>" +
								"- Operational efficiency</br>",
			"use" : 	"Deeply Integrated Storage for OpenStack (Nova, Cinder, Manila, Glance, Keystone, Swift).</br>" +
								"Cost-effective, scalable deployments for big data analytics, multimedia content, cloud applications and large-scale enterprise file stores.</br>" +
								"Petabyte-scale Storage for objects. Works with industry-standard APIs.",
			"probe" : "What storage technology are you currently using for your project?</br>" +
								"Does the technology scale flexibly and cost effectively with commodity hardware?</br>" +
								"What challenges are you facing with your current storage infrastructure?",
			"info" : 	"<p><ul>" +
								"<li><a href='http://www.redhat.com/storage' target='_blank'>Ceph</a></li>" +
								"<li><a href='http://www.youtube.com/user/redhatstorage' target='_blank'>Youtube</a></li>" +
								"<li><a href='http://red.ht/cephtestdrive' target='_blank'>Red Hat Storage Test-Drive</a></li>" +
								"<li><a href='https://engage.redhat.com/gartnermagic-quadrant-storage-s-201610121525' target='_blank'>Gartner Magic Quadrant report - Red Hat named a Visionary</a></li></ul></p>"
		}
	],
	"consulting" : [
		{
			"what" : 	"Red Hat Consulting offers more than just technical expertise to help partners when needed.</br></br>" +
								"Red Hat Consulting offers a wide range of services and support to help government agencies take full advantage of open source solutions in order to maximize the value of Red Hat technologies. " +
								"Whether agencies are looking to standardize and optimize their existing Red Hat Enterprise Linux environment or are moving to DevOps using containers, Red Hat Consulting can guide customers and " +
								"partners through a seamless transition with professional services, training, mentoring and knowledge transfer.",
			"use" : 	"N/A",
			"probe" : "N/A",
			"info" : 	"<p><ul><li><a href='https://www.redhat.com/en/services/consulting' target='_blank'>Consulting Website</a></li></ul></p>"
		}
	],
	"government" : [
		{
			"what" : 	"Your budget shrinks, but you have to deliver more every year—consolidate, build shared services, increase security, and prepare for emergency situations. " +
								"The answer? Stable, trustworthy, and secure Red Hat open source solutions.</br></br>" +
								"Red Hat technologies use the power of open source communities to make you more efficient, meet critical IT demands, and improve service delivery—all without vendor lock-in.",
			"use" : 	"N/A",
			"probe" : "N/A",
			"info" : 	"<p><ul><li><a href='http://www.redhat.com/government' target='_blank'>Government and Public Sector Website</a></li>" +
								"<li><a href='http://red.ht/2efxThA' target='_blank'>Brochure - Collaborative solutions for Innovative Government</a></li></ul></p>"
		}
	],
	"sat" : [
		{
			"what" : "<p>Red Hat Satellite is a system management solution that makes Red Hat infrastructure easier to deploy, scale, and manage across physical, virtual, " +
			          "and cloud environments. Satellite helps users provision, configure, and update systems to ensure they are running efficiently, securely, and in compliance " +
								"with various standards. Red Hat Satellite includes: Red Hat Satellite Server. Red Hat Satellite Capsule Server. Smart Management Add-On. By automating most " +
								"tasks related to maintaining systems, Satellite helps organizations increase efficiency, reduces operational costs, and enables IT to better respond to " +
								"strategic business needs.</p>",
			"use" : "<p><ul><li>Any Red Hat Enterprise Linux customer (typically with 20 or more RHEL systems) looking to lower the total cost of ownership.</li>" +
			        "<li>Customers with concerns around security and compliance, slow response to business needs, high administration costs, and limited scalability.</li></ul></p>",
			"probe" : "<p><ol><li>How do you plan to manage your Red Hat Enterprise Linux systems?</li>" +
			          "<li>Do your curent methods for management provide you with an audit trail and reporting of failed actions?</li>" +
								"<li>Do you use any tools today to help manage the configuration of your various Red Hat systems?</li>" +
								"<li>How important is it to maintain standards in system configuration?</li>" +
								"<li>Would it be helpful to consistently apply patches and configuration changes across your Linux environment?</li>" +
								"<li>Would you like to reduce the time spent by your LInux administrators doing low-value tasks?</li></ol></p>",
			"info" : "<p><ul><li><a href='http://red.ht/2dGE3B4' target='blank'>Red Hat Satellite</a></li>" +
               "<li><a href='http://red.ht/2eGtSQc' target='blank'>Management Portfolio</a></li></ul></p>"
		}
	]
};
