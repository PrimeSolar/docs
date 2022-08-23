# docs
<p align="center">
<img alt="Contributions: welcome" src="pics/contributions-welcome.svg" style="padding: 0; margin: 0;"/>
<img alt="License: Mozilla Public License 2.0" src="pics/license-mozilla.svg" style="padding: 0; margin: 0;"/>   
</p>
    
This open-source repository contains the documentation sample code files that I have developed by myself.

⭐ Star me on GitHub — it motivates me a lot!

## Table of Contents

* [Real&Mate](#real&mate)
   * [Features](#features)
   * [How It Works](#how-it-works)
   * [External Services](#external-services)
   * [Road Map](#road-map)
* [License](#license)
* [Contributing](#contributing)
* [Support](#support)
   * [Ask a question about docs](#ask-a-question-about-docs)
   * [Create a Bug Report](#create-a-bug-report)
   * [Submit a Feature Request](#submit-a-feature-request)
   * [Contact Me](#contact-me)

<a name="real&mate"/>

## Real&Mate

<img align="right" width="200" height="200" alt="Real&Mate Logo" title="Real&Mate Logo" src="pics/logo_transparent.jpg"/>

Real&Mate software is designed for prompt implementation and support of real estate agency business processes.

<a name="features"/>

### Features

* Automation of providing the client with real estate offers from several agencies.
* Provision of additional services by several service organizations to one client under one contract.
* Several contracts support for one client.
* Agreement decisions are made in real time based on requirement analysis results and depend on the scores calculated on the basis of client data set.

<a name="how-it-works"/>

### How It Works
Real&Mate is designed to automatically process an application for a purchase, sale or lease of real estate, for client data analysis and manual setting of processing criteria by manager. GUI and CLI control is available. The software is developed in JavaScript. Interaction between software components is as follows:
1. The manager, using the Control Unit, sets up the client assessment methods in the Assessment Unit.
2. To create an application, the client manually fills out the form in Client Unit. Personal data are passed from the Client Unit to the Assessment Unit.
3. Assessment Unit sends data to the Integration Unit in JSON format using SQL request to get data from a specific external service. When requested, a record with client's application information is generated in the database with primary key which includes application ID and session IDs of connected external services. Sessions of connected external services are generated automatically when application is created. The database genType column specifies methods that form a queue of requests to external services. If there are no specified methods in the column, all available methods will be called. Parameters in requests to different external services may vary.

<img align="left" width="20" height="20" alt="Note: " title="Note" src="pics/note.svg" style="padding: 0; margin: 0;"/> If the request is retried and the cache is active, no further steps are taken. Assessment Unit gets response from cache.
<br clear="left"/>

4. Integration Unit sends request to the external service. The further interaction can be done using technologies such as HTTPS, REST API, SOAP and SQL-queries to the database.
5. External service processing received request and sends a response to the Integration Unit. Before further sending, the Integration Unit checks received data according to two criteria:
    * Data must be in JSON format.
    * Parameter names from external service must match with parameter names used by Assessment Unit.
    
    If at least one of the criteria is not met:
    
    5.1. The presence of handler for this external service is checked.
    
    5.2. If there is a handler, it's called and data is converted.

    <img align="left" width="20" height="20" alt="Note: " title="Note" src="pics/note.svg" style="padding: 0; margin: 0;"/> Conversion procedures are individual for the handlers of each external service and are configured by developer.
    <br clear="left"/>
    
6. Integration Unit sends data in JSON format to Assessment Unit using SQL-query.
7. Assessment Unit sends response with processed data to Control Unit. Manager gets real estate assessment report, manually adjusts the assessment method if necessary, and additionally analyzes real estate parameters.
8. After processing an application for purchase, sale or lease of real estate Control Unit sends to Client Unit the response to the client's request with deal options.

> All brands and related information mentioned in repository are fictitious for the purpose of demonstrating what kind of documentation I can develop. Any resemblance to real companies is purely coincidental.

<a name="external-services"/>

### External Services

|     Application     | Description  |       Plugin       |
|:-------------------:|:------------:|:------------------:|
|   AH Real Estate    | File manager |    ah-real&mate    |
| Cushmaw & Wakefielg | File manager | Natively supported |
|        Essev        | Text editor  |  real&mate.essev   | 
|        GSRE         | Text editor  |   real&mate.gsre   | 
|       Notiuv        | File manager | Natively supported | 

<a name="road-map"/>

### Road Map
#### Common
* [ ] Create components.js with reusable content
* [ ] Create CSS-file
* [ ] Add footer
* [ ] Add common info about technical support
* [ ] Add requirements for contacting technical support
* [ ] Add contacts
* [ ] Add more reusable content to components.js
* [ ] Improve style
#### Glossary
* [ ] Create gloss.md
* [ ] Create gloss.html
* [ ] Add title part
* [ ] Add annotation
* [ ] Add terms
#### Security Guide
* [ ] Create secg.md
* [ ] Create secg.html
* [ ] Add annotation
* [ ] Add glossary
* [ ] Add basic security concepts
* [ ] Add user roles
* [ ] Add operations available according to roles
* [ ] Add event logging info
* [ ] Add algorithm for getting records from the log
* [ ] Add operations in the log info
#### Intergration Unit Admin Guide
* [ ] Create intmodag.md
* [ ] Create intmodag.html
* [ ] Add annotation
* [ ] Add glossary
* [ ] Add how it works
* [ ] Add functionality
* [ ] Add external services
* [ ] Add command syntax overview
* [ ] Add unit installation preconditions
* [ ] Add unit installation
* [ ] Add integration installation
* [ ] Add troubleshooting
* [ ] Add technical support info
### Selection Unit Manager Guide
* [ ] Create selmodmg.md
* [ ] Create selmodmg.html
* [ ] Add annotation
* [ ] Add glossary
* [ ] Add how it works
* [ ] Add Real&Mate concept
* [ ] Add functionality
* [ ] Add external services
* [ ] Add authorization
* [ ] Add unit structure
* [ ] Add method creation
* [ ] Add method version info receiving
* [ ] Add version creation
* [ ] Add version points editing
* [ ] Add point addition
* [ ] Add point editing
* [ ] Add point creation
* [ ] Add rule display
* [ ] Add rule creation
* [ ] Add rule editing
* [ ] Add rule removal
* [ ] Add rule sorting
* [ ] Add point compilation
* [ ] Add node removal
* [ ] Add node priority
* [ ] Add disabled nodes
* [ ] Add version copying
* [ ] Add version status
* [ ] Add version removal
* [ ] Add version filtration
* [ ] Add version sorting
* [ ] Add method test creation
* [ ] Add test detail editing
* [ ] Add test parameter creation
* [ ] Add test parameter editing
* [ ] Add test parameter removal
* [ ] Add test parameter sorting
* [ ] Add A/B and Shadow test status editing
* [ ] Add Retro test editing
* [ ] Add test report receiving
* [ ] Add test filtration
* [ ] Add test sorting
* [ ] Add technical support info

<a name="license"/>

## License
[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)<a name="contributing"/>

## Contributing

docs is an open-source project. I am committed to a fully transparent development process of the project and appreciate highly any contributions. Whether you are helping me fix bugs, proposing new features or spreading the word &mdash; I would love to have you as part of the docs community.

Please refer to our [Contribution Guidelines](https://github.com/FirstSolar/docs/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/FirstSolar/docs/blob/main/CODE_OF_CONDUCT.md).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

## Support

<a name="ask-a-question-about-docs"/>

### Ask a question about docs

<a name="create-a-bug-report"/>

You can ask questions and participate in discussions about docs-related topics in the docs Discord channel.

<a href="https://discord.gg/9JJAhsP8" target="_blank"><img alt="Discord channel " title="Discord channel" src="pics/discord.svg" style="padding: 0; margin: 0;"/></a>

### Create a Bug Report

If you run into an issue, please [create bug report](https://github.com/FirstSolar/docs/issues/new?assignees=&labels=type%3A%20bug&template=bug_report.md&title=). This effort is valued and it will help all docs users.

<a name="submit-a-feature-request"/>

### Submit a Feature Request

If you have an idea, or you're missing an information that would make docs easier to understand, more accurate and more up-to-date, please [submit feature request](https://github.com/FirstSolar/docs/issues/new?assignees=&labels=type%3A%20feature%20request&template=feature_request.md&title=).

If a similar feature request already exists, don't forget to leave a "+1". If you add some more information such as your thoughts and vision about the feature, your comments will be embraced warmly :)

<a name="contact-me"/>

### Contact Me

Telegram [@ASMLHolding](https://t.me/ASMLHolding) · LinkedIn [@PepsiCo](https://www.linkedin.com/in/PepsiCo/) · Mail [cloudyskyweb@gmail.com](mailto:cloudyskyweb@gmail.com?subject=GitHub+docs) · Strava [@telegram](https://www.strava.com/athletes/telegram)
