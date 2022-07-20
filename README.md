# docs
This open-source repository contains the documentation sample code files that I have developed by myself.

---
## Real&Mate

<img align="right" width="200" height="200" alt="Real&Mate Logo" title="Real&Mate Logo" src="https://raw.githubusercontent.com/Vladislav-Kazantsev/docs/main/logo_transparent.jpg"/>

Real&Mate software is designed for prompt implementation and support of real estate agency business processes.

### Features

* Automation of real estate offers provision to the client by several agencies.
* Additional services provision of several service organizations to one client under one agreement.
* Several agreements support for one client.
* Agreement decisions are made in real time based on requirement analysis results and depend on the scores calculated on the basis of client data set.

### How It Works
Real&Mate is designed to automatically process an application for a purchase, sale or lease of real estate, for client data analysis and manual setting of processing criteria by manager. GUI and CLI control is available. The software is developed in JavaScript. Interaction between software components is as follows:
1. The manager, using the Control Unit, sets up the client assessment methods in the Assessment Unit.
2. To create an application, the client manually fills out the form in Client Unit. Personal data are passed from the Client Unit to the Assessment Unit.
3. Assessment Unit sends data to the Integration Unit in JSON format using SQL request to get data from a specific external service. When requested, a record with client's application information is generated in the database with primary key which includes application ID and session IDs of connected external services. Sessions of connected external services are generated automatically when application is created. The database genType column specifies methods that form a queue of requests to external services. If there are no specified methods in the column, all available methods will be called. Parameters in requests to different external services may vary.

<img align="left" width="20" height="20" alt="Note: " title="Note" src="https://raw.githubusercontent.com/Vladislav-Kazantsev/docs/69cf4c1b8774b02bc887ad9b664d98370450a94d/note.svg" style="padding: 0; margin: 0;"/> If the request is retried and the cache is active, no further steps are taken. Assessment Unit gets response from cache.
<br clear="left"/>

4. Integration Unit sends request to the external service. The further interaction can be done using technologies such as HTTPS, REST API, SOAP and SQL-queries to the database.
5. External service processing received request and sends a response to the Integration Unit. Before further sending, the Integration Unit checks received data according to two criteria:
    * Data must be in JSON format.
    * Parameter names from external service must match with parameter names used by Assessment Unit.
    
    If at least one of the criteria is not met:
    5.1. The presence of handler for this external service is checked.
    5.2. If there is a handler, it's called and data is converted.

    <img align="left" width="20" height="20" alt="Note: " title="Note" src="https://raw.githubusercontent.com/Vladislav-Kazantsev/docs/69cf4c1b8774b02bc887ad9b664d98370450a94d/note.svg" style="padding: 0; margin: 0;"/> Conversion procedures are individual for the handlers of each external service and are configured by developer.
    <br clear="left"/>
    
6. Integration Unit sends data in JSON format to Assessment Unit using SQL-query.
7. Assessment Unit sends response with processed data to Control Unit.

### Roadmap
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
### License
[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)
> All brands and related information mentioned are fictitious for the purpose of demonstrating what kind of documentation I can develop. Any resemblance to real companies is purely coincidental.
