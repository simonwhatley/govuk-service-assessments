---
caption: Standard 18
title: Test with the minister
description: Test the service from beginning to end with the minister responsible for it.
version: "version-2"
standard: "standard-18"
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

- Has the minister responsible for the service tested it?

### Evidence

Service Manager able to:

- Show a video or photo of the responsible minister testing the service, or provide written confirmation signed by the responsible minister to confirm they have tested the service.
