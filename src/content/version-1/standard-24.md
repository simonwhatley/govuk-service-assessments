---
caption: Standard 24
title: Make a plan (with supporting evidence) to achieve a high digital take-up and assisted digital support for users who really need it. Report performance data on the Performance Platform.
version: "version-1"
standard: "standard-24"
section: "overview"
tags:
  - standard
  - version-1
layout: standard
eleventyComputed:
  permalink: "/{{ version }}/{{ standard }}/"
  eleventyNavigation:
    key: "{{ version }}-{{ standard }}"
    title: "{{ title }}"
    parent: "{{ version }}"
    subNavigation:
      label: "Sub-navigation"
      items:
        - text: Overview
          href: "/{{ version }}/{{ standard }}/"
          active: true
        - text: Alpha
          href: "/{{ version }}/{{ standard }}/alpha/"
          active: false
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
  related:
    items:
      - text: Digital take-up
        href: "/{{ version }}/guides/digital-take-up/"
      - text: Performance Platform
        href: "/{{ version }}/guides/performance-platform/"
---

{% if related.items.length %}
Related guides:

{% for item in related.items %}
- [{{item.text}}]({{item.href}})
  {{ item.description if item.description.length }}
{% endfor %}
{% endif %}
