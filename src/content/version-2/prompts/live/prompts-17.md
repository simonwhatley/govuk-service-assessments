---
caption: Standard 17
title: Report performance data on the Performance Platform
description: Why you should report data and how you’ll be assessed.
version: "version-2"
standard: "standard-17"
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

Can you demonstrate your service dashboard?

### Evidence

Service manager able to:

- show published performance platform dashboard, including metrics for the 4 KPIs, and other key metrics.
- explain metrics and reason why they have been chosen.
