---
caption: Standard 15
title: Make all new source code open and reuseable, and publish it under appropriate licences (or provide a convincing explanation as to why this cannot be done for specific subsets of the source code).
version: "version-1"
standard: "standard-15"
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

- Talk us through your plan for making all new source code open and reusable?
- Do you own the intellectual property?
- Will I be able to reuse your code in another department?

### Evidence

Service manager able to:

- explain their plan for making all new source code open and reusable during the alpha
- confirm that the service owns the intellectual property or give a valid explanation why not
- explain how other departments will be able to reuse their code during alpha
