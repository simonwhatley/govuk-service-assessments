---
caption: Standard 20
title: Put a plan in place for ongoing user research and usability testing to continuously seek feedback from users.
version: "version-1"
standard: "standard-20"
section: "alpha"
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
          active: true
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

## Alpha

### Questions

- What did you learn from user research and usability testing during the alpha?
- Are the resources in place to do regular user research and usability testing?
- Do you have a testing environment in place?
- Who in the team is doing user research and usability testing?
- How often are you doing user research and usability testing during the alpha?
- How do the results feed into the design of the service?
- What is the user research plan for the beta stage and are there resources for user research and usability testing?

### Evidence

Service manager able to:

- explain what they learnt during the alpha and how this was incorporated into the service design
- explain who is doing user research and usability testing and how it is being resourced
- explain their testing environment
- explain how often they are doing user research and usability testing
- explain how the results from user research and usability testing are incorporated into the design of the service
