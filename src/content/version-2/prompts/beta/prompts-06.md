---
caption: Standard 6
title: Evaluate tools and systems
description: Evaluate what tools and systems will be used to build, host, operate and measure the service, and how to procure them.
version: "version-2"
standard: "standard-6"
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

### Questions

- How are you managing the constraints that the selection of technology stack places on you?
- How are you managing the constraints that the selected development toolchain places on you?
- What have you bought and how have you ensured you are getting value for money?
- How will you know if the service is healthy?
- What support arrangements have you got in place during beta?
- What decision making have you outsourced?

### Evidence

Service Manager able to:

- explain how they are managing the constraints that the selection of technology stack places on the service.
- explain how they are managing the constraints that the selected development toolchain places on the service.
- explain what they have bought and how they are ensuring they are getting value for money.
- explain or demonstrate how they will know if the service is healthy.
- explain the support arrangements they have in place during beta.
- explain what decision making they have outsourced.
