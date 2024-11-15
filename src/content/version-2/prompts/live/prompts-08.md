---
caption: Standard 8
title: Make all new source code open
description: Make all new source code open and reusable, and publish it under appropriate licences (or provide a convincing explanation as to why this cannot be done for specific subsets of the source code).
version: "version-2"
standard: "standard-8"
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

### Questions

- Describe how you are making new source code open and reuseable?
- Describe how you accept contributions and comments on the code?
- How are you handling updates and bug fixes to the code?
- What licences are you using to release code?
- Do you own the intellectual property?
- What code have you not opened and why?

### Evidence

Service Manager able to:

- explain how they are making new source code open and reusable.
- show their code in an open internet source code repository.
- describe how they accept contributions and comments on the code.
- explain how they are handling updates and bug fixes to the code.
- explain what licences they are using to release code.
- confirm that they own the intellectual property.
- explain what code they have not opened and why.
