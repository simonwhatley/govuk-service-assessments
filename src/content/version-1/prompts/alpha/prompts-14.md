---
caption: Standard 14
title: Make sure that you have the capacity and technical flexibility to update and improve the service on a very frequent basis.
version: "version-1"
standard: "standard-14"
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

- Talk us through your deployment process for the alpha?
- How long does it take to make a change to the service during the alpha?
- Who can make a change during the alpha?
- Who can authorise making a change during the alpha?
- How do you test a change before it is made during the alpha?
- Do you require downtime for a release during the alpha? How long is the downtime?

### Evidence

Service Manager able to:

- clearly explain their deployment process for the alpha
- explain how long it takes to make a change to the service during the alpha
- explain who can make a change and who can authorise a change during the alpha
- explain how they test a change before it is made during the alpha
- explain why the service requires downtime for a release and how long that downtime is during the alpha
