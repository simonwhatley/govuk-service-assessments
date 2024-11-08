---
caption: Standard 4
title: Use agile methods
description: Build your service using the agile, iterative and user-centred methods set out in the manual.
version: "version-2"
standard: "standard-4"
section: "live"
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
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: true
---

## Live

### Questions

- Talk us through how you have worked in an agile way during beta and how you will continue to do so after the service is live?
- What tools and techniques have you used during beta to enable this way of working?
- How have you reviewed and iterated your processes during beta?
- How have you adapted your processes to be responsive and iterated them during beta?
- How have you communicated within the team during beta?
- Can you give an example from beta of how you have responded to user research and usability testing?
- How are you governing the service?

### Evidence

Service Manager able to:

- clearly explain how the service has worked in an agile way during beta and will continue to do so after the service is live, giving examples of using agile tools and techniques.
- explain how the service has reviewed and iterated their processes to be responsive during beta.
- explain how the team has used agile tools and techniques to communicate within the team during beta.
- give an example of how the service has responded to user research and usability testing during beta.
- show that governance is proportional, not imposed, is based on clear and measurable goals, “go and see” rather than “wait and hear”, a clear focus on managing change and risk in real time rather than at arbitrary points, human centred not process centred.
