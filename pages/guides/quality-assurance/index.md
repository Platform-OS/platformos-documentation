---
title: Best QA practices before and after releases
permalink: /guides/quality-assurance/
---
## Introduction

Any changes made in the front end of marketplace may affect the functionality, existing features and views of pages. Hence, it is very important to make sure that no damages have been made after releasing changes into the production environment your client. Any defect encountered by the user may be the cause of unpleasant consequences, including: loss of reputation, the user switching to another service, a drop in income. Below is a set of core practices that will save you many unnecessary problems. Thanks to our tips, you will find errors before you make any changes to production environment – that is, at the stage where removal will be at the lowest cost and will not cause any negative impact. Keep in mind that the testing process should begin as early as possible. Early testing allows you to prevent defects from the very beginning in MP's for your clients. Here are the types of tests and a set of practices that you can prepare and execute in a timely manner, in order to build high quality applications.

## Areas of application with the highest risk

When testing software, it is not possible to test all scenarios and report all errors. There will never be a situation where we can find all the errors. Hence, it is important to decide which software components we test and which ones we don’t. 

So how should one choose the areas for testing?

Choose the areas that are most susceptible to errors and those that can cause the costliest malfunctions.

Here are some helpful questions when deciding which areas to test:
* Which parts of the software are the most complex and vulnerable to errors?
* Which functionalities are the most important in light of the application of the project?
* Which functionalities are the most visible to the end customer?
* The lack of which functionality may cause financial losses?
* Which part of the software is considered the riskiest by the developers?
* What kind of errors can cause customer frustration?

For software where users need to sign up for an account - for example, in order to be able to make purchases, such a risky area may be the sign-in and login areas, and the purchase process, including payment.

## Smoke Testing

It is a good practice to perform so-called “Smoke Tests”. Typically, they include between 20 and 30 test cases that test key functionalities. If the tests fail, the test process should be stopped until errors are corrected. The test cycle is shown in the diagram below.

[![Country selection](/assets/images/guides/quality-assurance/smoke_testing.png)](/assets/images/guides/quality-assurance/smoke_testing.png)

Most often, these types of tests include typical paths that a potential user may follow. Smoke tests should not take too much time and should provide quick information on whether the system is suitable for further testing.
It is good practice to design smoke tests that check the most important paths, from the customer’s point of view.
Smoke tests may be manual and automated tests. It is important, however, that the steps we take within the smoke tests do not go against the basic features of this type of testing. During manual user interface testing and functional testing, we should not delve too deep into any of them. For example, if the user interface includes a form with several checkboxes in the first step, when we choose to go to the next step, we should not look at too many combinations, we should limit our scope to the most likely selection (usually the one that the typical user would make).

## Sanity Tests

Sanity is a more in-depth method of testing of individual functionalities. These tests answer the question whether the logic of the application complies with the requirements. In case when the sanity test have negative results, the next stages of testing are usually put on hold, until all detected errors are fixed.
Both sanity and smoke tests belong to the same test group, which is characterized by:
* A quick execution time
* Lack of deep insight into the operation of the tested functionality.

Sanity tests answer the question whether what we are testing is in accordance with system requirements and specifications.

[![Country selection](/assets/images/guides/quality-assurance/sanity_tests.png)](/assets/images/guides/quality-assurance/sanity_tests.png)

The diagram presents the difference between smoke and sanity tests. Smoke tests are mainly performed in the initial phase of project development, usually following the first few deployments. Sanity tests are a more in-depth method of testing the specific functionalities and are being performed later in the lifecycle.

## Regression Testing

Regression testing is performed to ensure that the application is working after modifications, bug fixes, or adding new functionalities. Regression tests may also include test cases from the smoke and sanity test suites. Because of the frequent execution of these tests, one should consider automating them.
Regression testing allows for:
* Searching for errors resulting from changes in environment / code
* Disclosure of previously undetected errors
Main criteria of choice for test cases for regression testing:
* Which bugs have been fixed or what extensions or changes have been implemented
* Which areas becomes most affected by changes
* What is the impact of the changes on other parts of the system
Regression testing should be done after smoke tests or sanity tests. Thanks to this approach, we can make sure that the new version of the application is suitable for testing and whether it is worth to commence working on.

## Exploratory Testing
In cases when we do not have the time to create test plans and test cases, we can opt for exploratory tests. This type of testing allows testers to learn the application before starting another type of tests.
In exploratory tests, we execute tests without pre-prepared test cases, but with a designated goal.
Ad-hoc tests also allow to find missing items in our testing strategy and reveal
Before proceeding with and during the exploratory tests, it is worth to include the following:
* Clearly define the purpose of the tests
* Keep notes of what to test and for what reason
* It is very important to list any questions that will arise during the tests
* It is useful to record or write down the test steps.

## Summary
It is important to keep in mind a few key principles when making new changes to your production environment:

* Depending on the size of the project, develop your own smoke tests, sanity tests and regression tests.
* Before making any changes to the production environment, perform smoke tests; in case of major changes – apply sanity tests and a regression test package.
* After uploading changes to the production environment, perform a sanity check to ensure that new and existing functionalities are working properly.
* For larger applications, it is worth to perform exploratory tests regulary.
* It is worth it to automatize the smoke and sanity tests, as they are tests that are performed very often. Thanks to automation, we may save a lot of time and obtain quick feedback on the condition of our application.
