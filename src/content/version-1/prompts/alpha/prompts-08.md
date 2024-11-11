---
caption: Standard 8
title: Analyse the prototype service’s success, and translate user feedback into features and tasks for the next phase of development.
version: "version-1"
standard: "standard-8"
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

- What prototype testing did you do during the alpha?
- What did you plan to test?
- How did you test the prototype with end users?
- What did you learn?
- What did you change?
- What didn’t you change and why?
- How many other versions of the prototype did you try?
- Why did you choose this version?

### Evidence

Service Manager able to:

- talk clearly about user research reports, indicating where a service required remediation
- talk through substantial iteration in the design and content of the service during the alpha
- explain how prototype works as end to end user journey for all user needs, including those with assisted digital needs
