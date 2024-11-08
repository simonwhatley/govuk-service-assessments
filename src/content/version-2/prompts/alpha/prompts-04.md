---
caption: Standard 4
title: Use agile methods
description: Build your service using the agile, iterative and user-centred methods set out in the manual.
version: "version-2"
standard: "standard-4"
section: "alpha"
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

- Talk us through how you are working in an agile way.
- What tools and techniques are you using to enable this way of working?
- How are you reviewing and iterating your processes?
- How are you able to adapt your processes to be responsive and iterate?
- How are you communicating within the team?
- Can you give an example of how you have responded to user research and usability testing?
- How are you governing the service?

### Evidence

Service Manager able to:

- clearly explain how the service is working in an agile way, using agile tools and techniques.
- explain how the service has reviewed and iterated their processes to be responsive.
- explain how the team are using agile tools and techniques to communicate within the team.
- give an example of how the service has responded to user research and usability testing.
- show that governance is proportional, not imposed, is based on clear and measurable goals, “go and see” rather than “wait and hear”, a clear focus on managing change and risk in real time rather than at arbitrary points, human centred not process centred.
