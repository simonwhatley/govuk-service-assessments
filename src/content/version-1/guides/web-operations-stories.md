---
title: User stories for web operations
subtitle: A useful starting point when understanding the scope of infrastructure work
layout: page
eleventyComputed:
  permalink: "{{ page.filePathStem | replace('/content/','/') }}/"
---

This document outlines the typical scope of infrastructure and web operations (sometimes erroneously referred to as hosting) work on a large service redesign project.

The sample list of user stories provided is not intended to be a complete list of all areas of interest nor are you likely to need to do all of this for every service. The idea is for this list to be a good starting place from where to you can write additional stories, delete ones you do not require and split stories into smaller ones. Importantly you also need to provide your own acceptance criteria specific to the needs of your service.

Remember these stories are [a placeholder for a conversation](/version-1/guides/writing-user-stories/#promise-of-a-conversation). For some contexts, that conversation will be ‘this does not apply to my service’ – that is fine. But there will almost certainly be other stories not listed here which do apply.

## The problem

An issue we have observed on a number of projects is a lack of understanding early on in a project about the work required to run a large online service. Often this is placed under _hosting_ and is investigated too late in the process.

## Intended audience

The hosting of a complex and sensitive software application requires a team of people with specialist skills to design, setup and operate. Because this work is generally not user facing and can be highly technical it is sometimes easy to leave until later – with potentially dire consequences for launching safely and on time.

### Service managers

Does your team have people who deeply understand this topic? If you are not an expert then it is important to involve people permanently in the team who are. They can explain the technical trade offs and decisions which may affect your service.

### Delivery managers

As well as understanding the potentially large scope of work, many of the areas discussed here have lead times associated with third parties. The earlier stories related to these topics are brought into project backlogs the sooner estimates can be made and deadlines understood.

## Stories

The following stories are intended to provide a starting point for any project, rather than be a complete set. Individual projects would be expected to take and modify stories as needed and importantly to apply their own acceptance criteria specific to their requirements.

The majority of these stories are from the point of view of developers, web operations engineers and the responsible service manager. Although not ideal, for this particular technical topic this works reasonably well. Feel free to change the focus when using them in your backlog.

### Process

_Development process_
As a developer working on the service
So that we can ensure a high level of quality
And so we can maximise the integrity of the source code
I want a well documented and understood development process

_Out-of-hours support_
As the service manager responsible for the service
So that we can ensure a suitable level of availability and integrity
I want to understand the requirement for Out-of-hours support

_Disaster recovery_
As the service manager responsible for the service
So that in the event of a disaster everyone doesn’t panic and make things up
I want a clear disaster recovery plan in place to deal with different types of catastrophic event

_Release process_
As the service manager responsible for the service
So that the service can be changed on a very frequent basis
And so that changes do not cause problems for users
I want a well documented and understood release process

_Security response_
As the service manager responsible for the service
So that security incidents are handled with extra care
And so that the service meets its wider Government obligation to GovCert
I want a well documented and understood security incident process

_Helpdesk_
As the service manager responsible for the service
So that communication with users is done in a joined up way
I want a central helpdesk function to deal with events, incidents and requests

_Request Management_
As the service manager responsible for the service
So that questions from users can be dealt with efficiently
I want a clear information request management policy

_Event Management_
As the service manager responsible for the service
So that likely events that could affect the running of the service can be dealt with smoothly
I want a clear event management policy

_Incident Management_
As the service manager responsible for the service
So that problems that arise with that service can be dealt with efficiently
I want a clear incident management policy

_Operations manual_
As the service manager responsible for the service
So that information about the running of the service is not kept in individuals’ heads
And so information is readily available to people running the service
I want a single place to store content for a service operations manual

### Shared service

_Source code hosting_
As a developer working on the service
So we have somewhere to securely store our source code
I want access to a central source code hosting service or repository

_Continuous Integration_
As a developer working on the service
So we can ensure a high level of quality in the code
And so we can minimise the time needed for regression testings
I want a Continuous Integration environment which automatically runs tests against every commit

_External DNS_
As a web operations engineer
So that visitors to the service don’t need to remember an IP address that will change
I want a process and supplier relationship to manage external DNS addresses

### Policy

_Sensitivity of source code_
As a developer working on the service
So that I understand the controls that need to be in place
And so that I know who and how I may share it
I want a clear policy around the sensitivity of source code

_Third party code_
As a developer working on the service
I want a clear policy around use of third party source code libraries
So that I do not introduce unknown security problems

_Change evaluation_
As the service manager responsible for the service
So that I can release changes to production quickly
And so that we can meet our obligation to the Digital by Default Service Standard
I want a documented process for evaluating and deciding on a change to the production service

_Access control_
As the service manager responsible for the service
So that the confidentiality, integrity and availability of the service isn’t compromised
And so that suitable technical controls can be put in place to enforce it
I want a clear policy on who has access to what on the production system

_Separation of duties_
As the service manager responsible for the service
So that we can ensure the service has enough people in the right roles
I want to understand any required separation of duties (whether driven by legislation or security concerns)

_Clearances_
As the service manager responsible for the service
So that security clearances can be arranged early in the project to avoid access restrictions later on
I want to know what level of clearances are required for different roles (including third parties)

_Releasing open source_
As a developer working on the service
So that I do not introduce unknown security problems
And so that we can meet our obligation to the Digital by Default Service Standard
I want a clear policy around releasing code as open source

### Design

_Government networks_
As a technical architect
So that the right suppliers are contracted
And so that long lead times are factored into the project plan early
I want to know whether the service requires access to a Government network like the PSN or GSI

_Multiple infrastructure providers_
As the service manager for this service
So that I understand the intended availability constraints
I want to know whether multiple suppliers of Infrastructure are required

_Capacity planning_
As a web operations engineer
So that we can estimate the number and size of infrastructure components (instances, firewalls, load balancers etc.)
And so that resource based costs can be estimated
I want to carry out some capacity planning activities

_Network architecture_
As a technical architect
So that I can build out a production environment to an agreed specification
I want a network architecture design

### Components

_Web servers_
As a web operations engineer working on the service
So that we can serve HTTP request
And so we can proxy requests to application servers
I want to install and configure a web server

_Databases_
As a web operations engineer working on the service
So that data can be stored in a manner befitting its structure
And so the stored data can be queried as quickly as required
I want to install and configure a suitable database server

As a web operations engineer working on the service
So that data can still be read even during a failure of a single database server
I want to configure some failover or other redundancy mechanism for the database

As a web operations engineer working on the service
So that data can still be written even during a failure of a single database server
I want to configure some failover or other redundancy mechanism for the database

_Load balancers_
As a web operations engineer working on the service
So that web requests can still be served even with the failure of one or more web servers
I want to install and/or configure a load balancer

_Internal DNS_
As a web operations engineer working on the service
So that we can easily address our services and instances
I want to install and/or configure a mechanism to manage internal DNS

_Database backups_
As the service manager for the service
So that we can recover from a large failure of our database infrastructure
I want regular automated backups to be taken of the data stored in the database

As the service manager for the service
So that we can recover from a large failure of a single suppliers infrastructure
I want regular automated backups to be stored off site

_HTTP cache_
As a web operations engineer working on the service
So that the service remains fast when serving identical content
And so load is minimised on the application servers
I want to install an HTTP cache

_Email gateway_
As a developer working on the service
So that the service can send email to administrators or end users
I want to setup and configure a suitable email gateway

_Application servers_
As a developer working on the service
So that the code I write can be run on server instances
I want to install and configure a suitable application server

_Internal package repository_
As a web operations engineer working on the service
So that we can use software not available in our operating system repositories
And so that we can use the security, dependency management and versioning features
I want to install and configure an internal package repository

_Artifact repository_
As a developer working on the service
So that we can share and version individual code components that need it
I want to install and configure an artifact repository

_Message queue_
As a developer working on the service
So that I can easily and efficiently process work asynchronously
I want to install and configure a suitable message queue or work queue system

_Search server_
As a developer working on the service
So that I can quickly and efficiently search through large amounts of data
I want to install and configure a suitable search engine

_Object cache_
As a developer working on the service
So that I can minimise the number of queries to the database
And so that I can keep the service fast and responsive to users
I want to install and configure a object caching system

### Monitoring

_Metric collection service_
As a web operations engineer working on the service
So that we can collect large numbers of time series metrics from the running service
I want to install and configure a metric collection system

_Application running monitoring checks_
As a web operations engineer working on the service
So that we can run checks against metrics from the metrics system
And so that we can run active checks based on arbitrary code
I want to install and configure a monitoring system

_Smoke tests_
As a developer working on the service
So that I know that I haven’t broken anything when deploying my application
I want a series of smoke tests to be run after all deployments

_Application metrics_
As a developer working on the service
So that I can gain visibility of how my application is running in production
And so we can find and fix problems with it quickly
I want a simple way of instrumenting my application to feed metrics to the metrics system

_System metrics_
As a web operations engineer working on the service
So that we can identify and fix problems with the system, ideally before they occur
I want to set up collection of low level system metrics like load, disk, network io, etc.

_Security monitoring_
As a web operations engineer working on the service
So that we notice quickly and are alerted to any incidents with a security flavour
I want to configure suitable security monitoring tools

_Notifications_
As a web operations engineer or developer supporting the service
So that I know about any issues as they happen
I want to set up suitable notifications from the monitoring system

_Transactional monitoring_
As a developer working on a transactional service
So that we can block fraudulent or otherwise suspect transactions
I want to install and configure a transactional monitoring system with suitable rules

_External monitoring_ As the service manager for the service
So that in the event of a failure of the monitoring system
And so that the service is monitoring from outside our local network
I want an external monitoring capability with basic checks to monitoring service uptime

_Monitoring data feed from infrastructure provider_
As a web operations engineer working on the service
So that I am aware of problems in the hypervisor, physical or network infrastructure
I want a feed of monitoring data from the Infrastructure supplier

### Logging

_Log collection_
As a web operations engineer working on the service
So that I can easily see everything that is happening in specific applications
I want to collect all the logs from applications running on the same host in one place

_Log aggregation_
As a web operations engineer working on the service
So that I don’t have to go to an individual machine to view its logs
I want all logs from all machines to be aggregated together

_Log storage_ As a web operations engineer working on the service
So that logs can be kept for a suitable period of time
I want to provision enough storage for log archiving

_Log viewing_ As a web operations engineer working on the service
So that I can see what is happening across the infrastructure
I want a mechanism for viewing and searching logs in as near real time as possible

As a developer working on the service
So that I can extract information from logs to aid with improving the service
I want a mechanism to run queries across the aggregated logs

### Configuration management

_Configuration management client_
As a web operations engineer working on the service
So that changes to server configuration can be made safely and quickly
I want to install software to manage configuration management

_Configuration management database_ As a web operations engineer working on the service
So that configuration changes are tracked over time
And so that current state of available to query
I want to install software to manage a configuration management database

_Configuration management server_
As a web operations engineer working on the service
So that all nodes do not have all configuration information
I want to install software to allow centralised management of Configuration management code

### Deployment

_Configuration management code deployment mechanism_
As a web operations engineer working on the service
So that configuration changes can be made safely and in an auditable manner
I want a deployment process and tooling for configuration management code

_Application deployment mechanism_
As a developer working on the service
So that changes to applications can be made available to users
And so that changes are made in a safe and auditable manner
I want a deployment process and tooling for application code

_Release tracking_
As the service manager for the service
So that we have an auditable log of what was changed when by whom
I want an up-to-date list of releases to be maintained

_Packaging_
As a web operations engineer working on the service
So that we don’t have to compile customised applications from source before using them
And so we can take advantage of dependency and version management capabilities of the OS
I want a process and tooling for creating our own system packages

_Orchestration_
As a web operations engineer working on the service
So that I can run commands across multiple instances quickly
I want tooling in place which allows some orchestration based on the current instances

_Database migrations_
As a web operations engineer working on the service
So that I can have confidence that database migration scripts will work when applied to production
I want database migrations to be deployed through the same sequence of environments as code changes

_Management of secrets_
As a web operations engineer working on the service
So that I can ensure confidential communication between particular parts of the system
I want a process or tool for managing secrets such as keys and passwords

### Access control

_End user devices_
As the service manager responsible for the service
So that management access to the infrastructure can be locked down to prevent unauthorised access
I want to know what kind of protection the management end user devices require

_User directory_
As a web operations engineer
So that we do not have to maintain multiple lists of privileged users
And so that users can be added and removed once in a central fashion
I want to install and configure something to provide a single user directory

_Key based authentication_
As a web operations engineer
So that we are not vulnerable to password based login attempts to individual servers
I want to set-up public key based authentication

_Single sign-on_
As a web operations engineer
So that any third party web interfaces we use can be accessed via a single login
I want to install and configure a single sign-on systems

_Network/VPN configuration_
As a web operations engineer
So that management functions can not be accessed via the public internet
And so that we reduce the surface area for attack
I want to restrict management access to a VPN and/or non-public restricted network

### Provisioning

_Other environments_
As the service manage for the service
So that I can see the very latest working version of the service at any time
And so I can share that with people in and outside the team
I want a preview environment to be provisioned which is similar to production

As a web operations engineer working on the service
So that the we have a clean environment in which to test production deployments
And so that we have a secure environment to test with production-like data
I want to provision a staging environment which mimics production as closely as possible

_Production environment_
As a web operations engineer working on the service
So that the service can launch to the public
I want to provision a production environment

_Base image(s)_
As a web operations engineer working on the service
So that all server instances start out with sensible security settings
I want to create a base image running the chosen operating system with hardened configuration

_Public network interfaces_
As a web operations engineer working on the service
So that the application only receives wanted traffic from the internet
And so that we don’t accidentally expose sensitive or insecure components of the system
I want to configure and test the public network interfaces for the system

_Private network configuration_
As a web operations engineer working on the service
So that individual internal components can only talk with known parts of the system
And so we limit the extent of any security breach
I want to configure and test the private network interfaces for the system

_Network codes of connection_
As a web operations engineer working on the service
Given I need to communicate with a system only available on a Government network
So that the two systems can talk with each other
I want to meet the code of connection requirements and configure access to the network

_Management network_
As a web operations engineer working on the service
So that network traffic used to manage the infrastructure is separate from public traffic
And so we can monitor irregularities in network traffic separately
I want to configure a separate management network

_Platform load balancers_
As a web operations engineer working on the service
So that we can reduce the number of single points of failure
And so that we can scale out to deal with a large amount of traffic
I want to provision load balancers to distribute traffic between multiple instances

_Platform firewalls_
As a web operations engineer working on the service
So that unwanted traffic can be filtered before it enters our virtual infrastructure
I want to configure the external facing IaaS firewalls to only allow certain traffic

_Dynamic environments_
As a web operations engineer working on the service
So that we are not constrained by a fixed number of environments
And so we can easy run full stack tests or experiments
I want to be able to easily provision an environment running the full service

_Elastic scaling_
As a web operations engineer working on the service
So that the service can automatically deal with unexpected increases in traffic
I want to configure tooling to automatically scale the number of instances based on load

### Security controls

_Operating system hardening_
As a web operations engineer
So that we are making use of built-in operating system security controls
I want to automate a default set of hardening rules for our chosen operating system

_Malware detection_
As a web operations engineer
So that instances which may be compromised can be dealt with quickly
I want to automate the detection of potential malware

_Intrusion detection_
As a web operations engineer
So that instances which are being attacked or probed can defend themselves
I want to configure an intrusion detection and prevention system

_Virus scanning_
As a web operations engineer
So we can be sure that files in the system don’t have viruses
I want to install virus scanning for files passing a network boundary

_Host firewalls_
As a web operations engineer
So that the surface area for attack is limited
And so that services which should only be available locally aren’t exposed on the internet
I want to install and configure a local firewall

_On instance event auditing_
As a web operations engineer
So that I know when things like logins or other sensitive events happen on instances
I want to set-up some auditing of events

_Rate/connection limiting_
As a web operations engineer
So that large spikes in traffic from a single source don’t overwhelm application
I want to configure some level of rate and connection limiting for web requests

_Secure storage of key material_
As a web operations engineer
So that any highly sensitive cryptographic keys are not lost, resulting in a compromise
I want to have a mechanism in place to securely store key material

_Third party DDoS protection_
As a web operations engineer
So that a the site does not go down under a denial of service attack
I want to purchase and/or configure a level of DDoS protection

### Testing

_Performance testing_
As the service manager responsible for the service
So that we know the service will be fast and responsive under realistic traffic
I want to be able to run a comprehensive performance test suite against the service

_As a developer working on the service_
So that we know changes to the code do not negatively affect performance
I want the performance test suite to run as part of the continuous integration system

_Load testing_
As the service manager responsible for the service
So that we know the service will still be working under larger amounts of traffic than are expected
I want to be able to run a comprehensive load test suite against the service

_Application penetration testing_
As the service manager responsible for the service
So that the service does not get compromised due to a vulnerability
And so we meet our accreditation obligations
I want to run a suitable number of penetration tests against the applications under development

_As the service manager responsible for the service_
So that the service does not get compromised due to a vulnerability
And so we meet our accreditation obligations
I want to run a suitable number of penetration tests against third party installed applications used as part of the service

_Infrastructure penetration testing_
As the service manager responsible for the service
So that the service does not get compromised due to a vulnerability
And so we meet our accreditation obligations
I want to run a suitable number of penetration tests against the infrastructure configuration

### Operating system

_Operation system selection_
As a web operations engineer working on the service
So that we have a clear path to receiving security updates
And so we can more easily find support for our systems
I want to select and install a suitable default operating system for the service

_File systems_
As a web operations engineer working on the service
So that we get the best possible performance and reliability from the disk
I want to select a suitable file system and partition layout

_Resource isolation_
As a web operations engineer working on the service
So that noisy applications cannot affect other applications on the instance
I want to be able to isolate running applications from each other in terms of memory and CPU

_Read-only file systems_
As a web operations engineer working on the service
So that I can protect against files being changed due to compromises in the application
I want to be able to configure a read-only file system if appropriate.
