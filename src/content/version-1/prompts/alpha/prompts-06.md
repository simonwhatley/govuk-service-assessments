---
caption: Standard 6
title: Build the service using the agile, iterative and user-centred methods set out in the manual.
version: "version-1"
standard: "standard-6"
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

### Questions

- Talk us through how you are working in an agile way?
- What tools and techniques are you using to enable this way of working?
- How are you reviewing and iterating your processes?
- How are you able to adapt your processes to be responsive and iterate?
- How are you communicating within the team?
- Can you give an example of how you have responded to user research and usability testing?

### Evidence

Service Manager able to:

- clearly explain how the service is working in an agile way, using agile tools and techniques
- explain how the service has reviewed and iterated their processes to be responsive
- explain how the team are using agile tools and techniques to communicate within the team
- give an example of how the service has responded to user research and usability testing
