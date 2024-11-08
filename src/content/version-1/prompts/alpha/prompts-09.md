---
caption: Standard 9
title: Create a service that is simple and intuitive enough that users succeed first time, unaided.
version: "version-1"
standard: "standard-9"
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

## Alpha

### Questions

- How did you collect evidence that users of the alpha service are, in the majority of cases, succeeding first time?

### Evidence

Service Manager able to:

- explain how they collected evidence that users of the alpha service are, in the majority of cases, succeeding first time
