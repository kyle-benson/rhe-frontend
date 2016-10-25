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
	{ id : "sat", "session" : "Red Hat Satellite", "description" : ""}
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
			"info" : "<p><ul><li><a href='http://red.ht/2ekDDTr' target='blank'>Red Hat CloudForms</a></li>" +
			          "<li><a href='http://bit.ly/2eIsDz5' target='blank'>Managing Your Private Cloud</a></li>" +
								"<li><a href='http://red.ht/2eGtSQc' target='blank'>Management Portfolio</a></li></ul></p>"
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
			"use" : "CI/CD: Enable developers to develop and test applications more quickly and within any environment.</br></br>" +
			 				"DevOps: Break down barriers between Dev and Ops teams to improve the app development process.</br></br>" +
							"Infrastructure Optimization: Decrease infrastructure costs while increasing its efficiency.",
			"probe" : "Are you looking to make a move to microservices & hybrid cloud architectures?</br></br>" +
								"Are you wanting to containerize traditional applications?</br></br>" +
								"What role do you see containers playing in your IT infrastructure strategy moving forward?</br></br>" +
								"What benefits do you hope to achieve by adopting container technology?</br></br>" +
								"What concerns do you have about container technology?",
			"info" : 	"<p><ul><li><a href='www.redhat.com/containers'target='blank'>Containers</a></li>" +
								"<li><a href='http://bit.ly/2eongXM'>Why containers?</a></li>" +
								"<li><a href='http://bit.ly/2ee0Ho2'>Why Red Hat containers?</a></li></ul></p>"
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
			"info" : 	"<p><ul><li><a href='http://developers.redhat.com/products/cdk/overview/'>Red Hat Container Development Kit</a></li>" +
								"<li><a href='http://developers.redhat.com/blog/2016/06/01/red-hat-cdk-installation-in-just-minutes/'>Blog - Red Hat CDK installation in just minutes!</a></li>" +
								"<li><a href='http://developers.redhat.com/promotions/docker-cheatsheet/'>Container Cheet Sheet</a></li></ul></p>"
		}
	],
	"eap" : [
		{
			"what" : 	"Red Hat JBoss Enterprise Application Platform (EAP) is the only choice for organizations seeking an open source, market leading Java EE application platform. " +
								"Organizations standardize on JBoss EAP in order to gain efficiencies from their existing Java applications as well as establish a foundation for Java apps deployed " +
								"in cloud environments, containers, microservices architectures, and using DevOps methodologies. Additionally many organizations make the change to JBoss EAP to " +
								"realize signifigant decreases in total cost of ownership (TCO), while gaining the freedom to move between vendors by coding to standards." +
								"</br></br>Key Advantages:</br>" +
								"- Modular platform</br>" +
								"- Lightweight requirements</br>" +
								"- High Performance</br>" +
								"- Extremely fast startup times</br>" +
								"- Enterprise grade reliability, security and compliance</br>" +
								"- Adherence to standards</br>" +
								"- Avoidance of vendor lock in</br>",
			"use" : 	"JBoss EAP is well-suited for organizations with demanding reliability, security, and compliance requirements that need developer-friendly technology, high productivity, and flexible deployment. " +
								" Organizations that use JBoss EAP can fully support a wide range of Java applications, from HTML5 mobile applications to microservices apps to highly transactional applications that use the Java EE programming approach. " +
								"JBoss EAP helps organizations deliver business value more quickly and with greater flexibility, resulting in lower costs, fast and easy scale-out, and reduced IT complexity.</br></br>" +
								"Organizations looking to migrate to a new Java EE app server are key prospects for Red Hat JBoss EAP</br></br>" +
								"Java developers looking to build microservices or simply more modular Java applications.</br></br>" +
								"Customers spending too much time and resources on maintaining and updating traditional Java EE monolithic applications.</br></br>" +
								"Customers looking to decrease the cost associated with hosting their applications.</br></br>" +
								"Customers looking to avoid vendor lock-in.</br></br>",
			"probe" : "What types of applications do you have, and how are your current applications used?</br></br>" +
								"What application servers do you currently use?</br></br>" +
								"What are your plans for modernizing your older incumbent (legacy) applications?</br></br>" +
								"Are you thinking of deploying applications in the cloud to gain benefits of elastic scaling and easy provisioning?</br></br>" +
								"How is your relationship with your current middleware provider(s), and how is your current existing environment working?</br></br>" +
								"Have you recently experienced demands to develop, deploy, and update your systems and processes more quickly?</br></br>" +
								"What are your plans to accommodate growing IT requests from your customers?</br></br>" +
								"Do you plan on expanding your cloud and virtualization strategies in the future?",
			"info" : 	"<p><ul><li><a href='https://www.redhat.com/en/technologies/jboss-middleware/application-platform'>Red Hat JBoss Enterprise Application Platform</a></li>" +
								"<li><a href='https://www.redhat.com/en/resources/red-hat-jboss-enterprise-application-platform-technology-overview'>Technology Brief</a></li>" +
								"<li><a href='https://www.redhat.com/en/insights/devops'>Innovate faster with DevOps</a></li></ul></p>"
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
			"info" : 	"<p><ul><li><a href='https://www.redhat.com/open'>OPEN</a></li>" +
								"<li><a href='https://partnercenter.force.com/s/training_OPEN_brochure.pdf'>OPEN Brochure</a></li>" +
								"<li><a href='https://partnercenter.force.com/s/Howtoguide-accessandregisterforRedHatOPENpartnertraining.pdf?v=2'>How to Access OPEN</a></li>" +
								"<li><a href='http://bit.ly/1vWKVB2'>OPEN Course Catalog</a></li>" +
								"<li><a href='https://partner.redhat.com'>Red Hat Connect for Business Partners</a></li></ul></p>"
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
