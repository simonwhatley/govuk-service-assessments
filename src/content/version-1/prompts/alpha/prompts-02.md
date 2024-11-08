---
caption: Standard 2
title: Put in place a sustainable multidisciplinary team that can design, build and operate the service, led by a suitably skilled and senior service manager with decision-making responsibility.
version: "version-1"
standard: "standard-2"
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

- Can you talk us through your team for the alpha?
- Is the service manager empowered to make decisions during the alpha?
- Do you have confirmation of this from above?
- Is the service manager the single responsible person with the power and knowledge to make decisions to improve the service day to day during the alpha?
- Are there any gaps in the team and how are you addressing these?
- Is there a separation of key roles?

### Evidence

Service Manager able to:

- clearly explain the structure of the team for the alpha (the following should be either in the team or available to the team depending on the scale of the service - service manager, product manager, delivery manager, tech lead, assisted digital lead, designer, user researcher, developers, content designer, technical architect, web ops, product analyst)
- explain how they are empowered to make decisions during the alpha
- explain where they have gaps in the team and explain how they will address them
- show that there is a separation of key roles (i.e., the same person is not performing multiple roles within the service)
- show there is at least one user researcher working at least 3 days per week
