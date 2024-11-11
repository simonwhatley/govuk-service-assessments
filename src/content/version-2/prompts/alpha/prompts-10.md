---
caption: Standard 10
title: Test the end-to-end service
description: Be able to test the end-to-end service in an environment identical to that of the live version, including on all common browsers and devices, and using dummy accounts and a representative sample of users.
version: "version-2"
standard: "standard-10"
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

### Questions

- What environments do you have?
- What are the common devices and browsers for users of your service?
- How have you designed the system around that?

### Evidence

Service Manager able to:

- explain what environments they have.
- explain what the common devices and browsers are for users of their service.
- explain how they have designed the system around the common devices and browsers for users of their service.
