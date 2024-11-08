---
caption: Standard 10
title: Put appropriate assisted digital support in place that’s aimed towards those who genuinely need it.
version: "version-1"
standard: "standard-10"
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

- What user research have you conducted with assisted digital users and what have you learnt that will inform the design of your assisted digital support?
- What are your plans to test, measure and iterate your assisted digital support during beta?
- Will your assisted digital support be sustainably funded and free to the user?

### Evidence

Service Manager able to:

- explain what types of research, when, with how many people, including recruitment specification
- explain how the assisted digital support might be tailored according to research carried out so far
- explain why, if relevant, your service does not have to provide assisted digital in line with GDS policy, and what alternative will be in place for any assisted digital users
- explain how you will test, measure and iterate your assisted digital support during beta with assisted digital users for the end-to-end user journey, including identity assurance
- explain how you plan to ensure assisted digital support is sustainably funded (including support not delivered by government) and free to the user
