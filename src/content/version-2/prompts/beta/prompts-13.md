---
caption: Standard 13
title: Make the user experience consistent with GOV.UK
description: Build a service consistent with the user experience of the rest of GOV.UK including using the design patterns and style guide.
version: "version-2"
standard: "standard-13"
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

- Has a designer and content designer been involved during the development so far?
- Is there a designer and content designer in the team or available to the team during beta?
- Have you used the GOV.UK design patterns and front-end tool kit during alpha and are you doing so during beta?
- Do you have a front-end developer in place for beta development?
- Have you used the GDS style guide during alpha and are you doing so during beta?
- Is the service responsive? Can you show us it works on mobile?
- Do the headers and footers match the GOV.UK style?

### Evidence

Service Manager able to:

- explain how the service has used the GOV.UK design patterns, front-end tool kit and GDS style guide.
- explain what design, content design and front-end developer support are available to the team during beta.
- show the service is responsive and works on mobile.
- show that the headers and footers match the GOV.UK style.
