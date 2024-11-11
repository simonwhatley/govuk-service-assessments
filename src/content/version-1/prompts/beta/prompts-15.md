---
caption: Standard 15
title: Make all new source code open and reuseable, and publish it under appropriate licences (or provide a convincing explanation as to why this cannot be done for specific subsets of the source code).
version: "version-1"
standard: "standard-15"
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

- Do you have a policy in place for making new source code open and reuseable during the beta?
- What licences are you using to release code during the beta?
- Do you own the intellectual property?
- Can I reuse your code in another department?
- What have you open sourced for the beta?

### Evidence

Service Manager able to:

- explain their policy for making all new source code open and reusable during the beta
- explain what licences they are using to release code during the beta
- confirm that the service owns the intellectual property or give a valid explanation why not
- explain how other departments will be able to reuse their code during the beta
- show an example of something that is open sourced for the beta
