---
caption: Standard 9
title: Use open standards and common platforms
description: Use open standards and common government platforms where available, including GOV.UK Verify as an option for identity assurance.
version: "version-2"
standard: "standard-9"
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

## Beta

### Questions

- Are you locking yourself into any proprietary solutions where an open standard is available?
- What does the system output to the users and in what format?
- Describe your use of common government platforms
- Describe the integration mechanisms with any external systems
- What common user needs does your service meet and what are you reusing from across government to help meet that user need?
- What data do you hold and what is your open data responsibility?

### Evidence

Service Manager able to:

- explain how they are avoiding locking themselves into any proprietary solutions where an open standard is available.
- explain what the system outputs to users and in what format.
- describe their use of common government platforms.
- describe the integration mechanisms with any external systems.
- explain any common user needs their service meets and what they are reusing from across government to help meet that user need.
- explain what common data they hold and their open data responsibility.
