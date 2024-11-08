---
caption: Standard 7
title: Understand security and privacy issues
description: Evaluate what user data and information the digital service will be providing or storing and address the security level, legal responsibilities, privacy issues and risks associated with the service (consulting with experts where appropriate).
version: "version-2"
standard: "standard-7"
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

- Describe your teams approach to security and risk management.
- Describe the threats to your service.
- What fraud vectors exist and what controls are you putting in place?
- Describe your interactions with the business and information risk teams, e.g. SIRO (Senior Information Risk Owner), IAO (Information Asset Owner), Data Guardians.
- Describe any outstanding legal concerns e.g. data protection or data sharing.
- Describe your cookie and privacy policy and how you arrived at it?

### Evidence

Service Manager able to:

- describe their team’s approach to security and risk management.
- describe the threats to their service.
- explain what fraud vectors exist and what controls they are putting in place.
- describe their interactions with the business and information risk teams e.g. SIRO (Senior Information Risk Owner), IAO (Information Asset Owner), Data Guardians.
- describe any outstanding legal concerns e.g. data protection or data sharing.
- present their cookie and privacy policy and explain how they arrived at it.
