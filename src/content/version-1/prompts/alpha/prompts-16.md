---
caption: Standard 16
title: Use open standards and common government platforms (for example, identity assurance) where available.
version: "version-1"
standard: "standard-16"
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

- What open standards are you using?
- Are you complying with the open standards board’s decisions?
- Are you imposing vendor technology choices on users?
- What standards are you using to reduce lock-in?
- Have you engaged with the identity assurance team in GDS?

### Evidence

Service Manager able to:

- explain what open standards the service is using during the alpha
- explain how they are complying with the open standards board’s decisions during the alpha
- explain how they are avoiding imposing vendor technology decisions on users and reducing lock-in during the alpha
- confirm that they have engaged with the identity assurance team in GDS
