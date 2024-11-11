---
caption: Standard 13
title: Build a service consistent with the user experience of the rest of GOV.UK by using the design patterns and style guide.
version: "version-1"
standard: "standard-13"
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

- Has a designer and content designer been involved during the beta?
- Will there be a designer and content designer in the team or available to the team after the service is live?
- Have you used the GOV.UK design patterns and front end tool kit during the beta?
- Do you have a front end developer in place for after the service is live?
- Have you used the GDS style guide during the beta?
- Is the service responsive? Can you show us it works on mobile?
- Do the headers and footers match the GOV.UK style?

### Evidence

Service Manager able to:

- explain how the service has used the GOV.UK design patterns, front end tool kit and GDS style guide in the beta.
- explain what design, content design and front end developer support will be available to the team after the service is live
- show the service is responsive and works on mobile
- show that the headers and footers match the GOV.UK style
