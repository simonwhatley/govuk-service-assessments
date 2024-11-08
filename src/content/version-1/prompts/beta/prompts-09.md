---
caption: Standard 9
title: Create a service that is simple and intuitive enough that users succeed first time, unaided.
version: "version-1"
standard: "standard-9"
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

## Beta

### Questions

- What evidence can you provide that users are, in the majority of cases, succeeding first time?
- Were less digitally minded and non subject area experts able to use the alpha service?
- How were the design and content decisions made for the beta?
- Has the current version of the service been tested for accessibility?
- Are you demonstrating just the happy path - what thought has gone into other paths and can you show us they work?

### Evidence

Service Manager able to:

- show the majority of users of the alpha service are succeeding first time
- explain how the design and content decisions for the alpha were made, and relate back to user research, usability testing and analytics
- show the alpha service is accessible
- explain other paths in the alpha service and demonstrate that they work
