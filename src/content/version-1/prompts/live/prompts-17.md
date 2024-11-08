---
caption: Standard 17
title: Be able to test the end-to-end service in an environment identical to that of the live version on all common browsers and devices. Use dummy accounts and a representative sample of users.
version: "version-1"
standard: "standard-17"
section: "live"
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
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: true
---

## Live

### Questions

- How will you deploy in the beta service and how will you test before deploying?
- Where do you do performance testing?
- Do you have an environment for previewing new features?
- Are you doing ongoing penetration testing?
- What browsers and devices do you support and why?

### Evidence

Service Manager able to:

- explain how they will deploy during the live service and test before deploying
- explain how and where they will do performance testing for the live service
- explain how they can preview new features before deploying them to the live service
- explain their plan for ongoing penetration testing after the service is live
- confirm that the service supports all browsers and devices identified in the service manual, and if not provide a valid reason why not
