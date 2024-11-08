---
caption: Standard 10
title: Test the end-to-end service
description: Be able to test the end-to-end service in an environment identical to that of the live version, including on all common browsers and devices, and using dummy accounts and a representative sample of users.
version: "version-2"
standard: "standard-10"
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

## Live

### Questions

- Describe any changes to the number and nature of the environments you’re using for testing.
- How frequently are you testing the system?
- How are you checking that your system works on all the supported devices?

### Evidence

Service Manager able to:

- describe any changes to the number and nature of the environments they’re using for testing.
- explain how frequently they are testing the system.
- explain how they are checking that their system works on all the supported devices.
- explain how they have ensured they have capacity for live, including non-digital parts of the service (e.g. assisted digital routes).
