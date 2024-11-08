---
caption: Standard 4
title: Use agile methods
description: Build your service using the agile, iterative and user-centred methods set out in the manual.
version: "version-2"
standard: "standard-4"
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

## Beta

### Questions

- Talk us through how you have worked in an agile way during alpha and how you are doing so in beta?
- What tools and techniques have you used during alpha to enable this way of working?
- How are you reviewing and iterating your processes?
- How are you adapting your processes to be responsive and iterating them?
- How are you communicating within the team?
- Can you give an example from alpha of how you have responded to user research and usability testing?
- How are you governing the service?

### Evidence

Service Manager able to

- clearly explain how the service has worked in an agile way during alpha and will continue to do so in beta, giving examples of using agile tools and techniques.
- explain how the service has reviewed and iterated their processes to be responsive during alpha.
- explain how the team has used agile tools and techniques to communicate within the team.
- give an example of how the service has responded to user research and usability testing during alpha.
- show that governance is proportional, not imposed, is based on clear and measurable goals, “go and see” rather than “wait and hear”.
