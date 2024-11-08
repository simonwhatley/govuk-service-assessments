---
caption: Standard 16
title: Use open standards and common government platforms (for example, identity assurance) where available.
version: "version-1"
standard: "standard-16"
section: "beta"
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
          active: false
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: true
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

## Beta

### Questions

- What open standards are you using?
- Are you complying with the open standards board’s decisions?
- Are you imposing vendor technology choices on users?
- What standards are you using to reduce lock-in?
- Are you intending to use the identity assurance platform when it is available?

### Evidence

Service Manager able to:

- explain what open standards the service will use during the beta
- explain how they are complying with the open standards board’s decisions
- explain how they are avoiding imposing vendor technology decisions on users and reducing lock-in
- explain whether they are intending to use the identity assurance platform for their service and if not, why not
