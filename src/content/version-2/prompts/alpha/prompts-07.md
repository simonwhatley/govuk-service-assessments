---
caption: Standard 7
title: Understand security and privacy issues
description: Evaluate what user data and information the digital service will be providing or storing and address the security level, legal responsibilities, privacy issues and risks associated with the service (consulting with experts where appropriate).
version: "version-2"
standard: "standard-7"
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

- Describe the perceived threats to your service and how you are designing the prototype to mitigate them?
- What fraud vectors exist and what controls are you prototyping?

### Evidence

Service Manager able to:

- describe the perceived threats to the service and explain how they are designing the prototype to mitigate them.
- explain what fraud vectors exist and what controls they are prototyping.
