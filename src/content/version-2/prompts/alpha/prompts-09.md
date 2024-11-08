---
caption: Standard 9
title: Use open standards and common platforms
description: Use open standards and common government platforms where available, including GOV.UK Verify as an option for identity assurance.
version: "version-2"
standard: "standard-9"
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

- Are you locking yourself into any proprietary solutions where an open standard is available?
- Describe which common platforms you have identified that your intended system could use?
- Describe any common user needs you have identified and how are you going to address them in a consistent manner with the rest of government?

### Evidence

Service Manager able to:

- explain how they are avoiding locking themselves into any proprietary solutions where an open standard is available.
- describe what common platforms they have identified that their intended system could use.
- describe any common user needs they have identified and how how they are going to address them in a consistent manner with the rest of government.
