# Documentation

<img alt="Solution: ES15" src="assets/solution-es15.svg" style="padding: 0; margin: 0;"/>

&nbsp;&nbsp;This open-source repository contains code examples related to software documentation that I have developed from scratch 📚

⭐ Please consider starring it on GitHub &mdash; your support motivates me to continue improving and expanding this work!

- [Documentation](#documentation)
  - [Real\&Mate](#realmate)
    - [Interface](#interface)
    - [Features](#features)
    - [How It Works](#how-it-works)
    - [External Services](#external-services)
    - [Code Attribution](#code-attribution)
  - [Contributing](#contributing)
  - [Support](#support)
    - [Ask a question about Real\&Mate Documentation](#ask-a-question-about-realmate-documentation)
    - [Create a Bug Report](#create-a-bug-report)
    - [Disclaimer](#disclaimer)
    - [Submit a Feature Request](#submit-a-feature-request)
    - [Support My Work ☕](#support-my-work-)
    - [Contact Me](#contact-me)

<a name="realandmate"></a>

## Real&Mate

<img align="right" width="200" height="200" alt="Real&Mate Logo" title="Real&Mate Logo" src="assets/logo-transparent.jpg"/>

&nbsp;&nbsp;Real&Mate software is designed for prompt implementation and support of real estate agency business processes.

<!--&nbsp;&nbsp;Real&Mate documentation contains an information that describes the product to its users, including what it is, how it operates, and how to use it.-->

&nbsp;&nbsp;**To view the documentation, please visit the <a href="https://primesolar.github.io/docs/" target="_blank">Real&Mate Documentation</a> website.**

<a name="interface"></a>

### Interface

&nbsp;&nbsp;The interface is designed to be user-friendly and visually appealing.

<a name="features"></a>

### Features

- Automation of providing the client with real estate offers from several agencies.
- Provision of additional services by several service organizations to one client under one contract.
- Several contracts support for one client.
- Agreement decisions are made in real time based on requirement analysis results and depend on the scores calculated on the basis of client data set.

<a name="how-it-works"></a>

### How It Works

&nbsp;&nbsp;Real&Mate is designed to automatically process an application for a purchase, sale or lease of real estate, for client data analysis and manual setting of processing criteria by manager. GUI and CLI control is available. The software is developed in JavaScript. Interaction between software components is as follows:

1. The manager, using the Control Unit, sets up the client assessment methods in the Assessment Unit.
2. To create an application, the client manually fills out the form in Client Unit. Personal data are passed from the Client Unit to the Assessment Unit.
3. Assessment Unit sends data to the Integration Unit in JSON format using SQL request to get data from a specific external service. When requested, a record with client's application information is generated in the database with primary key which includes application ID and session IDs of connected external services. Sessions of connected external services are generated automatically when application is created. The database genType column specifies methods that form a queue of requests to external services. If there are no specified methods in the column, all available methods will be called. Parameters in requests to different external services may vary.

<img align="left" width="20" height="20" alt="Note: " title="Note" src="assets/note.jpg" style="padding: 0; margin: 0;"/> If the request is retried and the cache is active, no further steps are taken. Assessment Unit gets response from cache.
<br clear="left"/>

4. Integration Unit sends request to the external service. The further interaction can be done using technologies such as HTTPS, REST API, SOAP and SQL-queries to the database.
5. External service processing received request and sends a response to the Integration Unit. Before further sending, the Integration Unit checks received data according to two criteria:

   - Data must be in JSON format.
   - Parameter names from external service must match with parameter names used by Assessment Unit.

   If at least one of the criteria is not met:

   5.1. The presence of handler for this external service is checked.

   5.2. If there is a handler, it's called and data is converted.

   <img align="left" width="20" height="20" alt="Note: " title="Note" src="assets/note.jpg" style="padding: 0; margin: 0;"/> Conversion procedures are individual for the handlers of each external service and are configured by developer.
   <br clear="left"/>

6. Integration Unit sends data in JSON format to Assessment Unit using SQL-query.
7. Assessment Unit sends response with processed data to Control Unit. Manager gets real estate assessment report, manually adjusts the assessment method if necessary, and additionally analyzes real estate parameters.
8. After processing an application for purchase, sale or lease of real estate Control Unit sends to Client Unit the response to the client's request with deal options.

> All brands and related information mentioned in the repository are fictitious for the purpose of demonstrating what types of documents I can develop. Any resemblance to real companies is purely coincidental.

<a name="external-services"></a>

### External Services

|     Application     | Description  |       Plugin       |
| :-----------------: | :----------: | :----------------: |
|   AH Real Estate    | File manager |    ah-real&mate    |
| Cushmaw & Wakefielg | File manager | Natively supported |
|        Essev        | Text editor  |  real&mate.essev   |
|        GSRE         | Text editor  |   real&mate.gsre   |
|       Notiuv        | File manager | Natively supported |

<a name="code-attribution"></a>

### Code Attribution

&nbsp;&nbsp;This project utilizes powerful libraries and stylesheets to enhance functionality and ensure consistent styling across different browsers:

- **Dexie.js**

  - **Author**: David Fahlander
  - **License**: Apache License, Version 2.0
  - **Link**: [Dexie.js Repository](https://github.com/dexie/Dexie.js)
  - **License Text**: [Apache License, Version 2.0](https://github.com/dexie/Dexie.js/blob/master/LICENSE)

- **html2canvas**

  - **Author**: Niklas von Hertzen
  - **License**: MIT License
  - **Link**: [html2canvas Repository](https://github.com/niklasvh/html2canvas)
  - **License Text**: [MIT License](https://github.com/niklasvh/html2canvas/blob/master/LICENSE)

- **Normalize.css**
  - **Author**: Nicolas Gallagher and Jonathan Neal
  - **License**: MIT License
  - **Link**: [Normalize.css Repository](https://github.com/necolas/normalize.css)
  - **License Text**: [MIT License](https://github.com/necolas/normalize.css/blob/master/LICENSE.md)

## Contributing

&nbsp;&nbsp;Real&Mate Documentation is an open-source project. I am committed to a fully transparent development process of the project and appreciate highly any contributions. Whether you are helping me fix bugs, proposing new features or spreading the word &mdash; I would love to have you as part of the Real&Mate Documentation community.

&nbsp;&nbsp;Please refer to our [Contribution Guidelines](https://github.com/PrimeSolar/docs/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/PrimeSolar/docs/blob/main/CODE_OF_CONDUCT.md) if you're interested in helping.

&nbsp;&nbsp;This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

## Support

<a name="ask-a-question-about-docs"></a>

### Ask a question about Real&Mate Documentation

<a name="create-a-bug-report"></a>

&nbsp;&nbsp;You can ask questions and participate in discussions about document-related topics:

- on the Documents Discord channel.

<a href="https://discord.gg/f6Vk2kDe" target="_blank"><img alt="Discord channel " title="Discord channel" src="assets/discord.svg" style="padding: 0; margin: 0;"/></a>

- on the <a href="https://matrix.to/#/#docs:matrix.org" target="_blank">Documets Matrix channel</a>.

- on <a href="https://stackoverflow.com/questions/tagged/real&mate-docs" target="_blank">Stack Overflow</a> by including the `realmate-documents` tag.

&nbsp;&nbsp;Remember to search for existing questions before creating a new one.

### Create a Bug Report

&nbsp;&nbsp;If you run into an issue, please [create bug report](https://github.com/PrimeSolar/docs/issues/new?assignees=&labels=type%3A%20bug&template=bug_report.md&title=). This effort is valued and it will help all Documents users.

### Disclaimer

<a name="disclaimer"></a>

&nbsp;&nbsp;The tools provided in this repository and on the website https://primesolar.github.io/docs/ for editing and saving content are intended for personal use only. I do not take any responsibility for the use of these tools or the content created or modified using them. All information that is not original or that is not published by me is not associated with me in any way. Users are solely responsible for their actions and the consequences of using the editing and saving features. By using this repository, files associated with this repository, or the website https://primesolar.github.io/docs/, you acknowledge and agree to this disclaimer.

<a name="submit-a-feature-request"></a>

### Submit a Feature Request

&nbsp;&nbsp;If you have an idea, or you're missing an information that would make documents easier to understand, more accurate and more up-to-date, please [submit feature request](https://github.com/PrimeSolar/docs/issues/new?assignees=&labels=type%3A%20feature%20request&template=feature_request.md&title=).

&nbsp;&nbsp;If a similar feature request already exists, don't forget to leave a "+1". If you add some more information such as your thoughts and vision about the feature, your comments will be embraced warmly 🙌

### Support My Work ☕

If you enjoy my project and would like to support my work, consider buying me a coffee! Your contributions help me stay energized and motivated to create even more amazing content.

Every cup of coffee you buy not only fuels my passion but also allows me to dedicate more time to developing innovative projects and sharing knowledge. Whether it's a small gesture or a generous contribution, every bit is greatly appreciated!

**Click the image to support my work:**

<a href="https://coff.ee/cocacola">
  <img src="assets/coffee.jpg" width="370" height="auto" alt="Buy Me a Coffee"/>
</a>

Thank you for your support! Together, we can create something wonderful! 💖

<a name="contact-me"></a>

### Contact Me

&nbsp;&nbsp;LinkedIn [@PepsiCo](https://www.linkedin.com/in/PepsiCo/)

![Animated Text](https://readme-typing-svg.demolab.com/?lines=Web+Developer;Internet+Sommelier;Passionate+Athlete;Caring+Environmentalist;Human)
