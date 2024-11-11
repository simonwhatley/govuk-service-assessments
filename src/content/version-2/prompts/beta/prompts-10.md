---
caption: Standard 10
title: Test the end-to-end service
description: Be able to test the end-to-end service in an environment identical to that of the live version, including on all common browsers and devices, and using dummy accounts and a representative sample of users.
version: "version-2"
standard: "standard-10"
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

- What environments do you have?
- How quickly and easily can you create a new environment?
- What data exists in your pre-production environments?
- How are you gaining confidence that your service will perform under expected loads?
- How are you checking that your system works on all the supported devices?

### Evidence

Service Manager able to:

- explain what environments they have.
- explain how quickly and easily they can create a new environment.
- explain what data exists in their pre-production environments.
- explain how they are gaining confidence that their service will perform under expected loads (including assisted digital routes).
- describe testing environments, systems, and approaches for non-digital parts of the service (including assisted digital routes).
- explain how they are checking that their system works on all the supported devices.
- demonstrate their service in a live-like environment.
