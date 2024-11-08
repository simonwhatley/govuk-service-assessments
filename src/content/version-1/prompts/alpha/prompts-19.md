---
caption: Standard 19
title: Build a service that can be iterated on a frequent basis and make sure resources are in place to do so.
version: "version-1"
standard: "standard-19"
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

- How did you iterate the service frequently during the alpha?
- Who was responsible for user research, usability testing and identifying actionable data insights during the alpha?

### Evidence

Service Manager able to:

- explain how they have iterated the service frequently during the alpha
- explain who was responsible for user research, usability testing and identifying actionable data insights during the alpha
