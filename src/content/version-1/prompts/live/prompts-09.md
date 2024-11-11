---
caption: Standard 9
title: Create a service that is simple and intuitive enough that users succeed first time, unaided.
version: "version-1"
standard: "standard-9"
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

- What evidence can you provide that users are, in the majority of cases, succeeding first time?
- Are less digitally minded and non subject area experts able to use the beta service?
- How were the design and content decisions made for the beta?
- Has the service been tested for accessibility?
- Are you demonstrating the happy path - can you show us other paths in the service?

### Evidence

Service Manager able to:

- show the majority of users of the beta service are succeeding first time
- show video of a less digitally minded user and non subject area experts succeeding to use the beta service
- explain how the design and content decisions for the beta were made, and relate back to user research, usability testing and analytics
- show the beta service is accessible
- explain other paths in the beta service and demonstrate that they work
