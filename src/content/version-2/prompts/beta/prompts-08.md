---
caption: Standard 8
title: Make all new source code open
description: Make all new source code open and reusable, and publish it under appropriate licences (or provide a convincing explanation as to why this cannot be done for specific subsets of the source code).
version: "version-2"
standard: "standard-8"
section: "beta"
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
          active: true
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

### Questions

- Describe how you are making new source code open and reuseable?
- What licences are you using to release code during beta?
- Do you own the intellectual property?
- Describe how a team in another department can reuse your code.
- What code from other teams/services are you using?

### Evidence

Service Manager able to:

- explain how they are making new source code open and reusable.
- show their code in an open internet source code repository.
- explain what licences they are using to release code during beta.
- confirm that they own the intellectual property.
- explain how a team in another department can reuse their code.
- explain what code from other teams/service they are using.
