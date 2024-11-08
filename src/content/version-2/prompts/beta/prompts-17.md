---
caption: Standard 17
title: Report performance data on the Performance Platform
description: Why you should report data and how you’ll be assessed.
version: "version-2"
standard: "standard-17"
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

- Have you agreed what metrics are going on the performance platform?
- What data is being uploaded to the performance platform during beta?
- How is data being uploaded to the performance platform during beta?
- Is the performance dashboard available for use?

### Evidence

Service Manager able to:

- show the beta dashboard with baseline data and explain the audience and use of the dashboard during beta.
- show which metrics are being uploaded to the performance platform and how they are uploaded (manual, automatic).
- show published performance dashboard.
