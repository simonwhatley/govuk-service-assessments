---
caption: Standard 5
title: Iterate and improve frequently
description: Build a service that can be iterated and improved on a frequent basis and make sure that you have the capacity, resources and technical flexibility to do so.
version: "version-2"
standard: "standard-5"
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

- What have you built and why?
- Describe the lifecycle of a story from user research to production.
- What are you doing to support frequent deployments with minimal user impact?
- How long are you expecting the beta period to last and why?

### Evidence

Service Manager able to:

- explain what they have built to this point and why.
- describe clearly the lifecycle of a story from user research to production.
- explain their deployment process and how they are able to support frequent deployments with minimal user impact.
- explain how long they expect the beta period to last and the reasons behind it.
