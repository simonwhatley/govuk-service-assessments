---
caption: Standard 14
title: Make sure that you have the capacity and technical flexibility to update and improve the service on a very frequent basis.
version: "version-1"
standard: "standard-14"
section: "beta"
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
          active: true
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

## Beta

### Questions

- Talk us through your deployment process for the beta?
- How long will it take to make a change to the service during the beta?
- Who can make a change during the beta?
- Who can authorise making a change during the beta?
- How will you test a change before it is made during the beta?
- Will you require downtime for a release during the beta? How long is the downtime?

### Evidence

Service Manager able to:

- clearly explain their deployment process for the beta
- explain how long it will take to make a change to the service during the beta
- explain who can make a change and who can authorise a change during the beta
- explain how they will test a change before it is made during the beta
- explain why the service requires downtime for a release and how long that downtime will be during the beta
