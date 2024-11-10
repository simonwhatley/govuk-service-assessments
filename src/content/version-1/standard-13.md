---
caption: Standard 13
title: Build a service consistent with the user experience of the rest of GOV.UK by using the design patterns and style guide.
version: "version-1"
standard: "standard-13"
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
      - text: Design and content
        href: "/{{ version }}/guides/design-and-content/"
      - text: Service user experience
        href: "/{{ version }}/guides/service-user-experience/"
---

{% if related.items.length %}
Related guides:

{% for item in related.items %}
- [{{item.text}}]({{item.href}})
  {{ item.description if item.description.length }}
{% endfor %}
{% endif %}
