---
caption: Standard 6
title: Build the service using the agile, iterative and user-centred methods set out in the manual.
version: "version-1"
standard: "standard-6"
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

- Talk us through how you have worked in an agile way during the alpha and how you will do so in the beta?
- What tools and techniques have you used during the alpha to enable this way of working?
- How are you reviewing and iterated your processes?
- How are you adapting your processes to be responsive and iterated them?
- How are you communicating within the team?
- Can you give an example from the alpha of how you have responded to user research and usability testing?

### Evidence

Service Manager able to:

- clearly explain how the service has worked in an agile way during the alpha and will continue to do so in the beta, giving examples of using agile tools and techniques
- explain how the service has reviewed and iterated their processes to be responsive during the alpha
- explain how the team has used agile tools and techniques to communicate within the team during the alpha
- give an example of how the service has responded to user research and usability testing during the alpha
