---
caption: Standard 1
title: Understand user needs. Research to develop a deep knowledge of who the service users are and what that means for digital and assisted digital service design.
version: "version-1"
standard: "standard-1"
section: "beta"
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
          active: true
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

### Questions

- What user research have you completed so far? (should be more than just a one off survey)
- How many users did you speak to?
- Have you done qualitative and quantitative research?
- What have you learnt about your users that is specifically relevant to the design of the service?
- How has your research being applied to the design of the service?
- What are the user needs for your service? (Can you capture them in one sentence?)
- Have you created user stories based on user needs?
- What user research do you plan to do during the remainder of the beta?
- Have you researched what the service should be called to best meet user needs and discussed with GOV.UK to ensure the start page is optimised? (using user research and digital landscape analytics)

### Evidence

Service Manager able to:

- explain clearly what user research has been completed during the beta including qualitative usability testing and quantitative surveys
- explain the user research methods, frequency of testing (normally with at least 5 users for each sprint), types of recruits and where they were recruited from, how the full service has been tested and in what environments, resources available and communication process into the service team to inform the design
- explain what has been learnt about users and user needs, including population demographics and digital proficiency profiles
- give an example of a user story, the need it relates to and how that user need was determined
- explain how the service name was determined through user research
