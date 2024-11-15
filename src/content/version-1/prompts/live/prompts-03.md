---
caption: Standard 3
title: Evaluate what user data and information the service will be providing or storing, and address the security level, legal responsibilities, and risks associated with the service (consulting with experts where appropriate).
version: "version-1"
standard: "standard-3"
section: "live"
tags:
  - prompt
  - version-1
layout: standard
eleventyComputed:
  permalink: "/{{ version }}/{{ standard }}/{{ section }}/"
  eleventyNavigation:
    key: "{{ version }}-{{ standard }}-{{ section }}"
    title: "Prompts for ‘{{ title }}’"
    parent: "{{ version }}"
    subNavigation:
      label: "Sub-navigation"
      items:
        - text: Overview
          href: "/{{ version }}/{{ standard }}/"
          active: false
        - text: Alpha
          href: "/{{ version }}/{{ standard }}/alpha/"
          active: false
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: true
---

### Questions

- Have you engaged with the right people?
- Has a SIRO (Senior Information Risk Owner) been assigned and who are they?
- Has a (IAO) Information Asset Owner been assigned?
- Has an Accreditor been assigned to the project?
- Have you set the risk appetite for the project?
- What are you worried about?
- Why is the architecture of the service the way it is?
- What is the relationship between the service manager and the SIRO?
- Have you done a risk assessment and who has signed off the risks?
- Is the level of security appropriate (i.e. not too high or too low)?
- Have you got SIRO approval to operate or interim accreditation?
- Has the service been subject to an assessment using [Requirements for Secure Delivery of Online Public Services (RSDOPS)](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/270969/GPG_43_RSDOPS_Annex_A__issue_1.1_Dec_2012.pdf) (PDF, 24 pages)?
- What identity assurance needs were identified and how are they being met?

### Evidence

Service Manager able to:

- show that the security of the service is owned by the team under the service manager and that there has been proportionate external validation
- explain who they have engaged with
- confirm who the SIRO, Information Asset Owner and Accreditor are for the project
- explain what the risk appetite is for the project
- explain the architecture of the service and why they have chosen it
- confirm they have done a risk assessment and explain who has signed off the risks
- explain the level of security of and why it was chosen
- confirm service assessed against RSDOPS to identify the risks and the extent to which the service needs to know that users are who they say they are
- identify if the service needs to use identity assurance and if so what type and level
