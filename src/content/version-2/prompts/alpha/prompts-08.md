---
caption: Standard 8
title: Make all new source code open
description: Make all new source code open and reusable, and publish it under appropriate licences (or provide a convincing explanation as to why this cannot be done for specific subsets of the source code).
version: "version-2"
standard: "standard-8"
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

- Talk us through your plan for making all new source code open and reusable?
- Do you own the intellectual property?
- Will I be able to reuse your code in another department?

### Evidence

Service Manager able to:

- explain their plan for making all new source code open and reusable.
- confirm that they own the intellectual property.
- explain how a team in another department can reuse their code.
