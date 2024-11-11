---
caption: Standard 7
title: Establish performance benchmarks, in consultation with GDS, using the 4 key performance indicators (KPIs) defined in the manual, against which the service will be measured.
version: "version-1"
standard: "standard-7"
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

### Questions

- Have you made contact with the performance platform?
- How are you measuring the performance of the old service to provide a baseline for the new service?

### Evidence

Service Manager able to:

- show they have made contact with the performance platform
- explain how they currently measure the performance of the old service to provide a baseline for the new service
