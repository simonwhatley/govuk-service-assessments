---
caption: Standard 13
title: Build a service consistent with the user experience of the rest of GOV.UK by using the design patterns and style guide.
version: "version-1"
standard: "standard-13"
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

- Has a designer and content designer been involved during the alpha?
- Have you used the GOV.UK design patterns and front end tool kit during alpha?
- Do you have a front end developer in place?
- Have you used the GDS style guide during the alpha?

### Evidence

Service Manager able to:

- explain how the service will use the GOV.UK design patterns, front end tool kit and GDS style guide during the alpha
- explain what design, content design and front end developer support was available to the team during the alpha
