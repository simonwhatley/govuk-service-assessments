---
caption: Standard 14
title: Make sure that you have the capacity and technical flexibility to update and improve the service on a very frequent basis.
version: "version-1"
standard: "standard-14"
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

## Live

### Questions

- Talk us through your deployment process after the service is live?
- How long will it take to make a change to the service after the service is live?
- Who can make a change after the service is live?
- Who can authorise making a change after the service is live?
- How will you test a change before it is made after the service is live?
- Will you require downtime for a release after the service is live? How long is the downtime?

### Evidence

Service Manager able to:

- clearly explain their deployment process for after the service is live
- explain how long it will take to make a change to the service after the service is live
- explain who can make a change and who can authorise a change after the service is live
- explain how they will test a change before it is made after the service is live
- explain why the service requires downtime for a release and how long that downtime will be after the service is live
