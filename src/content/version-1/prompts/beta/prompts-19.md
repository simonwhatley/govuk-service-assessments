---
caption: Standard 19
title: Build a service that can be iterated on a frequent basis and make sure resources are in place to do so.
version: "version-1"
standard: "standard-19"
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

### Questions

- How has the service being iterated frequently during the alpha and how will this continue during the beta?
- Who in the team was responsible for user research, usability testing and identifying actionable data insights during the alpha, and who will be responsible during the beta?
- Have you planned access to the data sets you’ll need during the beta e.g analytics, call centre data?
- What have you thrown away or changed from the alpha?

### Evidence

Service Manager able to:

- show that the service has being iterated on a frequent basis during the alpha, based on user research, usability testing and analytics, and explain how this will continue during the beta
- explain who in the team was responsible for user research, usability testing and identifying actionable data insights during the alpha, and who will be responsible during the beta
- explain how they plan to access the data sets they will need e.g. analytics, call centre data
- explain what they have thrown away during the alpha
