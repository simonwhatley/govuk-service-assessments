---
caption: Standard 18
title: Use analytics tools that collect performance data.
version: "version-1"
standard: "standard-18"
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
      - text: Analytics tools
        href: "/{{ version }}/guides/analytics-tools/"
      - text: Performance platform
        href: "/{{ version }}/guides/performance-platform/"
---

{% if related.items.length %}
Related guides:

{% for item in related.items %}

- [{{item.text}}]({{item.href}})
  {{ item.description if item.description.length }}
{% endfor %}
{% endif %}
