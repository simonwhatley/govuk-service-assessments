---
caption: Standard 19
title: Build a service that can be iterated on a frequent basis and make sure resources are in place to do so.
version: "version-1"
standard: "standard-19"
section: "live"
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
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: true
---

### Questions

- How has the service being iterated frequently during the beta and how will this continue after the service is live?
- Who in the team was responsible for user research, usability testing and identifying actionable data insights during the beta, and who will be responsible after the service is live?
- Do you have access to the data sets you need e.g. analytics, call centre data?
- What have you thrown away or changed during the beta?

### Evidence

Service Manager able to:

- show that the service has being iterated on a frequent basis during the beta, based on user research, usability testing and analytics, and explain how this will continue after the service is live
- explain who in the team was responsible for user research, usability testing and identifying actionable data insights during the beta, and who will be responsible after the service is live
- show they have access to the data sets they need e.g. analytics, call centre data
- explain what they have thrown away or changed during the beta
