---
caption: Standard 6
title: Build the service using the agile, iterative and user-centred methods set out in the manual.
version: "version-1"
standard: "standard-6"
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

## Live

### Questions

- Talk us through how you have worked in an agile way during the beta and how you will continue to do so after the service is live?
- What tools and techniques have you used during the beta to enable this way of working?
- How have you reviewed and iterated your processes during the beta?
- How have you adapted your processes to be responsive and iterated them during the beta?
- How have you communicated within the team during the beta?
- Can you give an example from the beta of how you have responded to user research and usability testing?

### Evidence

Service Manager able to:

- clearly explain how the service has worked in an agile way during the beta and will continue to do so after the service is live, giving examples of using agile tools and techniques
- explain how the service has reviewed and iterated their processes to be responsive during the beta
- explain how the team has used agile tools and techniques to communicate within the team during the beta
- give an example of how the service has responded to user research and usability testing during the beta
