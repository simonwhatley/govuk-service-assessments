---
caption: Standard 1
title: Understand user needs. Research to develop a deep knowledge of who the service users are and what that means for digital and assisted digital service design.
version: "version-1"
standard: "standard-1"
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
      - text: Know your users
        href: "/{{ version }}/guides/know-your-users/"
      - text: User needs
        href: "/{{ version }}/guides/user-needs/"
      - text: Assisted digital
        href: "/{{ version }}/guides/assisted-digital/"
---

{% if related.items.length %}
Related guides:

{% for item in related.items %}
- [{{item.text}}]({{item.href}})
  {{ item.description if item.description.length }}
{% endfor %}
{% endif %}
