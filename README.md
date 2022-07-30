# Project Pathfinder

## Purpose

**Goal of this project:** Ease the process of figuring out admission requirements at [Copenhagen Business School (CBS)](https://www.cbs.dk/en). Thereby encouraging students to explore more diverse paths through CBS' programme portfolio.

**Goal of this repository:** Prove that the crux of this project is not software engineering related by building a functional prototype [myself](https://www.linkedin.com/in/tomasvemola/).

## Background

Across my years at Copenhagen Business School (CBS), I [(Tomas Vemola)](https://www.linkedin.com/in/tomasvemola/) have been a part of a number of steering groups, working groups and initiatives across CBS.

One of those initiatives was called "Programme Portfolio Review". The objective of the initiative was to simplify CBS' portfolio of undergraduate and graduate programmes. Currently, it is a hurdle to understand CBS' portfolio for employers, the business community, and students alike. Primarily due to the sheer number of different programmes CBS offers.

As far as I can tell from my participation in the initiative, the only meaningful outcome for students was consensus around the fact that building an interactive interface through which students could explore and figure out their "path" through CBS is desirable.

Before being put on hold, the Programme Portfolio Review group has been working on the problem for 2+ years. I have been part of the group for about 1.5 years. As far as I can tell, the only meaningful outcome for students was the following: The group supported building an interface that helps students understand their potential paths through CBS, including electives and graduate programmes.

Nevertheless, due to shifting priorities and other circumstances, the interface has never been built. Among the hurdles was the fact that this was a project including IT (which is constantly strained). Therefore, I decided to take the IT element out the equation by building it myself, and hopefully accelerate the timeline of the project.

## What does it do?
Project Pathfinder puts all information about admission criteria into one place, and helps evaluate students' options when progressing through CBS.

### Eventually, the Pathfinder aims to support several use cases.
1. As a prospective undergraduate student at CBS, I want to explore what are my options spanning undergraduate programmes and admission into graduate programmes.
2. As a current undergraduate students at CBS, I want to explore what are my graduate programme options given my current accomplishments at CBS (passed courses, exchange semesters).
3. As a prospective graduate student at CBS, I want to explore which graduate programmes I qualify for.

Currently, Pathfinder is focused on solving use case number 2. Depending on the success, other use cases might be implemented later.

### Use case 2 - current undergraduate students
**Challenge:** Figuring out which graduate programmes I can qualify for is confusing and time-consuming.
1. Information about graduate programmes' admission criteria is scattered on individual pages on CBS' website.
2. It is unclear which of my passed courses fulfill which admission criteria.

**Leading to:** Confused students and Student Guidance Counsellors having to answer the same questions over and over again.

**Proposed solution flow** currently under implementation:
1. Input all passed courses
2. Click a magic button
3. Output a list of graduate programmes grouped by admission criteria fulfillment
    1. Certainty of admission (legal claim, or *retskrav* in Danish)
    2. Possibility of admission (fulfilled all criteria)
    3. Conditional possibility of admission (not all criteria fulfilled)
    4. Impossibility of admission (criteria impossible to fulfill)
