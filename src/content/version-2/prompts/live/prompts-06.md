---
caption: Standard 6
title: Evaluate tools and systems
description: Evaluate what tools and systems will be used to build, host, operate and measure the service, and how to procure them.
version: "version-2"
standard: "standard-6"
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

- Describe what tech stack changes you’ve made since beta and why.
- Describe what development toolchain changes you’ve made since beta and why.
- What are you doing to ensure that you are continuing to get value for money from the systems you selected and bought at beta?
- How will you know if the service is healthy?
- What support arrangements have you got in place for live?
- What decision making have you outsourced?

### Evidence

Service Manager able to:

- describe what tech stack changes they’ve made during beta and why.
- describe what development toolchain changes they’ve made during beta and why.
- explain how they are ensuring they are continuing to get value for money from the systems they selected and bought at beta.
- explain or demonstrate how they will know if the service is healthy.
- explain the support arrangements they have in place for live.
- explain what decision making they have outsourced.
