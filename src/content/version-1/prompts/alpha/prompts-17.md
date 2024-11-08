---
caption: Standard 17
title: Be able to test the end-to-end service in an environment identical to that of the live version on all common browsers and devices. Use dummy accounts and a representative sample of users.
version: "version-1"
standard: "standard-17"
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

- How do you deploy in the alpha service and how do you test before deploying?
- Where do you do performance testing?
- Do you have an environment for previewing new features?
- Are you doing ongoing penetration testing?
- What browsers and devices do you support and why?

### Evidence

Service Manager able to:

- explain how they deploy during the alpha and test before deploying
- explain how and where they do performance testing for the alpha service
- explain how they preview new features before deploying them to the alpha service
- explain their ongoing penetration testing during the alpha
- explain their browser and device testing during the alpha
