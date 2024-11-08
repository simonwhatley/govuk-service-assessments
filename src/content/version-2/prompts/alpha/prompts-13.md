---
caption: Standard 13
title: Make the user experience consistent with GOV.UK
description: Build a service consistent with the user experience of the rest of GOV.UK including using the design patterns and style guide.
version: "version-2"
standard: "standard-13"
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

- Has a designer and content designer been involved during alpha?
- Have you used the GOV.UK design patterns and front end tool kit during alpha?
- Do you have a front end developer in place?
- Have you used the GDS style guide during alpha?

### Evidence

Service Manager able to:

- explain how the service has used the GOV.UK design patterns, front-end tool kit and GDS style guide during alpha.
- explain what design, content design and front-end developer support was available to the team during alpha.
