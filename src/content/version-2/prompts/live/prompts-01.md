---
caption: Standard 1
title: Understand user needs
description: Understand user needs. Research to develop a deep knowledge of who the service users are and what that means for the design of the service.
version: "version-2"
standard: "standard-1"
section: "live"
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
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: true
---

In the beta phase the main purpose is to establish that the team has continued to build out the service in a way that meets user needs, that this has been done in a way that makes the service easy for all users. We are particularly looking to see that findings from the user research are reflected in the design of the service as it has progressed through this phase. Responses should cover both digital and assisted digital support.

When doing user research for assisted digital, ensure that research is done specifically with (potential) users of this particular service who have the lowest level of digital skills. Recruitment and research with this audience will need to be done using offline methods.

### Questions

#### Questions about user needs

- Tell us about what users are trying to do when they encounter your service?
- How do they meet their needs now?
- What are the pain points?
- What are the needs that they have when they use this service?
- What are the particular design challenges for this service with this audience?
- Tell us about what you’ve learned about the particular needs of people who are less confident online or not online?
- How did you learn this?

#### Questions about usability

- How many rounds of usability testing have you done so far?
- Who have you done usability testing with?
- What were the tasks you set for participants and what materials did you supply to help them complete the task (if relevant).
- Give us some specific examples of how aspects of the interface design has changed in each iteration in response to usability testing? (Show us your build/measure/learn cycles, what hypotheses did you test? what happened? what did you do?)
- Can most people get through the service end-to-end without assistance?
- Have you started testing methods for supporting people who do need assistance to get through the service?
- Has your testing included the supporting content and proposed start page for the service?
- Who have you done this testing with and what were your findings?
- What issues have you not yet resolved? What are your hypotheses around how you might solve those issues? How will you test that?
- What issues are you unable to test/resolve in beta? How are you going to handle that as you move into live?
- Have you tested whether the name of the service makes sense to your users?

### Evidence

It is very useful to include your user researcher in the team presenting at the assessment to answer assessor’s questions.

The user researcher and/or service manager should be able to answer questions from the assessment panel by showing and referring to some or all of these artefacts of user research (for the onscreen service and assisted digital support), which include:

- user research output of discovery that describes how users (including assisted digital users) are currently meeting the needs that this service will meet, (e.g. a customer journey map or user needs map), key pain points in the current journey and description of the user research that has informed this output.
- stories of people you have met, persona, profiles or some other way of telling the stories of the users (including assisted digital users) who will be using this service in the future.
- the user needs you have identified for this service, including any specific needs of assisted digital users.
- any key insights you have gained from the research that describes significant service design challenges for this project to overcome.
- your research schedule for beta (who you did research with, when and where, including assisted digital users).
- user research videos and accompanying user research analysis outputs for recent sprints.
- examples showing how the design of various elements in the service have changed from iteration to iteration in response to user research impact on user stories and product changes, explain how evidence from analytics has informed these experiments and outcomes.
