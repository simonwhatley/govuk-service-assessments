---
caption: Standard 12
title: Make sure users succeed first time
description: Create a service which is simple to use and intuitive enough that users succeed the first time.
version: "version-2"
standard: "standard-12"
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

- How did you collect evidence that users of the alpha service are, in the majority of cases, succeeding first time?
- What prototype testing did you do during alpha?
- What did you plan to test?
- How did you test the prototype with end users?
- What did you learn?
- What did you change?
- What didn’t you change and why?
- How many other versions of the prototype did you try?
- Why did you choose this version?

### Evidence

Service Manager able to:

- explain how they collected evidence that users of the alpha service are, in the majority of cases, succeeding first time.
- explain the service in a simple way to the panel.
- talk through substantial iteration in the design and content of the service during alpha.
- explain how prototype works as end-to-end user journey for all user needs, including those with assissted digital needs.
