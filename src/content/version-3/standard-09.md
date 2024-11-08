---
caption: Standard 9
title: Create a secure service which protects users’ privacy
description: Evaluate what data the service will be collecting, storing and providing.
version: "version-3"
standard: "standard-9"
tags:
  - standard
  - version-3
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
---

Understand how government classifies the data, the organisation’s legal responsibilities, and security risks associated with the service. Consult experts where you need to.

## Why it’s important

Government services often hold personal and sensitive information about users. Government has a legal duty to protect this information. Failing in that duty would undermine public trust in government services.

## What it means

Service teams should:

- actively identify security and privacy threats to the service, and have a robust, proportionate approach to securing information and managing fraud risks
- have a plan and budget that lets them manage security during the life of the service (for example by responding to new threats, putting controls in place and applying security patches to software)
- collect and process users’ personal information in a way that’s secure and respects their privacy
- follow the guidance about using cookies or similar technologies
- use an approach to identity assurance and authentication that balances the risks in a proportionate way (for services that need identity assurance or authentication)
- work with business and information risk teams (for example, senior information risk owners (SIROs), information asset owners (IAOs) and data guardians) to make sure the service meets security requirements and regulations without putting delivery at risk
- carry out appropriate vulnerability and penetration testing

## Related guidance

[Securing your information](https://www.gov.uk/service-manual/technology/securing-your-information)

[Protecting your service against fraud](https://www.gov.uk/service-manual/technology/protecting-your-service-against-fraud)

[Collecting personal information from users](https://www.gov.uk/service-manual/design/collecting-personal-information-from-users)

[Working with cookies or similar technologies](/service-manual/technology/working-with-cookies-and-similar-technologies)

[Vulnerability and penetration testing](https://www.gov.uk/service-manual/technology/vulnerability-and-penetration-testing)

<!-- ## Service standard points

[1\. Understand users and their needs](https://www.gov.uk/service-manual/service-standard/point-1-understand-user-needs)

[2\. Solve a whole problem for users](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem)

[3\. Provide a joined up experience across all channels](https://www.gov.uk/service-manual/service-standard/point-3-join-up-across-channels)

[4\. Make the service simple to use](https://www.gov.uk/service-manual/service-standard/point-4-make-the-service-simple-to-use)

[5\. Make sure everyone can use the service](https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service)

[6\. Have a multidisciplinary team](https://www.gov.uk/service-manual/service-standard/point-6-have-a-multidisciplinary-team)

[7\. Use agile ways of working](https://www.gov.uk/service-manual/service-standard/point-7-use-agile-ways-of-working)

[8\. Iterate and improve frequently](https://www.gov.uk/service-manual/service-standard/point-8-iterate-and-improve-frequently)

[9\. Create a secure service which protects users’ privacy](https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service)

[10\. Define what success looks like and publish performance data](https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data)

[11\. Choose the right tools and technology](https://www.gov.uk/service-manual/service-standard/point-11-choose-the-right-tools-and-technology)

[12\. Make new source code open](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open)

[13\. Use and contribute to open standards, common components and patterns](https://www.gov.uk/service-manual/service-standard/point-13-use-common-standards-components-patterns)

[14\. Operate a reliable service](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service) -->
