---
caption: Standard 18
title: Test with the minister
description: Test the service from beginning to end with the minister responsible for it.
version: "version-2"
standard: "standard-18"
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

- How are you planning to test the service with the minister responsible for it before the service moves into live?

### Evidence

Service Manager able to:

- explain how they will test the service with the minister responsible for it before the service moves into live.
