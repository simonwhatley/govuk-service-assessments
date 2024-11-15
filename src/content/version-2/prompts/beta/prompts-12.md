---
caption: Standard 12
title: Make sure users succeed first time
description: Create a service which is simple to use and intuitive enough that users succeed the first time.
version: "version-2"
standard: "standard-12"
section: "beta"
tags:
  - prompt
  - version-2
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

- What evidence can you provide that users are, in the majority of cases, succeeding first time?
- Were less digitally minded and non subject area experts able to use the beta service?
- How were the design and content decisions made in beta?
- Have you checked that the content used within the service aligns with the content published on relevant GOV.UK pages?
- Has the current version of the service been tested for accessibility?
- Are you demonstrating just the happy path - what thought has gone into other paths and can you show us they work?
- What prototype testing have you done so far?
- What did and do you plan to test?
- How did and do you test the prototype with end users?
- What have you learnt?
- What did you change?
- What didn’t you change and why?
- How many other versions of the prototype did you try?
- Why did you choose this version?

#### Assisted digital support

- Which routes of assisted digital support will you be testing in beta?
- How do they meet user needs?
- What are your plans to test your assisted digital support during beta?
- Can you iterate your assisted digital support across all routes and providers, for the full end-to-end user journey?

### Evidence

Service Manager able to:

- show the majority of users of the service are succeeding first time.
- explain how the design and content decisions for the service were made, and relate back to user research, usability testing and analytics.
- show the service is accessible.
- explain other paths in the service and demonstrate that they work.
- show videos of usability testing.
- talk through substantial iteration in the design and content of the service.

#### Assisted digital support

Service Manager able to:

- talk through how the assisted digital support has been designed to meet user needs, including routes and providers. If not providing all types (telephone and face by face, talk through and on behalf of), explain why.
- explain the end-to-end user journeys for assisted digital support, including identity assurance (e.g. Verify) if required.
- explain how you will test your assisted digital support in beta, with users with the lowest level of digital skills and access.
- explain how you will test the end-to-end user journey for each route, including identity assurance (e.g. Verify) if required.
- explain how you are able to iterate your assisted digital support across all routes and providers, for the full end-to-end journey?
