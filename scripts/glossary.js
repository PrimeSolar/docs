/**
 * The Library of Custom Reusable Web Components
 * This file is the library containing my collection of custom, reusable web components
 * that can be used across different parts of the project. These components go beyond what browsers provide,
 * allowing for expanded capabilities and functionality in the project.
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

/** Terms and Definitions. */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////a/////////////////////////////////////////////////////////////////////////////////////////////////

/** API Terms. */

/** API. */
const gAPI = document.getElementById("gAPI");
if (gAPI) {
  gAPI.innerHTML += `
  <td>API</td>
  <td><p>Application Programming Interface. It’s a collection of standardized protocols and tools that enable different technology systems to communicate and exchange data seamlessly. It allows developers to integrate functionality without managing underlying infrastructure, facilitating access and delivery of information across distributed systems.</p></td>
  `;
}

/** Authorization. */
const gAuthorization = document.getElementById("gAuthorization");
if (gAuthorization) {
  gAuthorization.innerHTML += `
  <td>Authorization</td>
  <td><p>The process of specifying access rights to resources based on user identity. When accessing data through an API, a requestor supplies an authorization credential — an API key or token — that determines their allowed data access level delivered through the API.</p></td>
  `;
}

/** Authentication. */
const gAuthentication = document.getElementById("gAuthentication");
if (gAuthentication) {
  gAuthentication.innerHTML += `
  <td>Authentication</td>
  <td><p>The process of verifying a user's identity to confirm they are who they claim to be. In API contexts, it ensures only legitimate users access sensitive data by validating credentials before granting authorization.</p></td>
  `;
}

/** Data Synchronization. */
const gDataSynchronization = document.getElementById("gDataSynchronization");
if (gDataSynchronization) {
  gDataSynchronization.innerHTML += `
  <td>Data Synchronization</td>
  <td><p>The process of copying and synchronizing data between a server and a client. This process involves an initial request to retrieve a dataset from the primary source, followed by subsequent requests to obtain updates. Data synchronization ensures that both server and client maintain consistent and up-to-date information.</p></td>
  `;
}

/** Endpoint. */
const gEndpoint = document.getElementById("gEndpoint");
if (gEndpoint) {
  gEndpoint.innerHTML += `
  <td>Endpoint</td>
  <td><p>A specific web address where data can be accessed through an API. Each endpoint corresponds to a different resource, allowing developers to retrieve or manipulate different kinds of data.</p></td>
  `;
}

/** HTTP. */
const gHTTP = document.getElementById("gHTTP");
if (gHTTP) {
  gHTTP.innerHTML += `
  <td>HTTP</td>
  <td><p>The Hypertext Transfer Protocol. It's the set of rules for transferring data between systems on the World Wide Web or within a local network. HTTP defines how messages are formatted and transmitted between web servers and clients. It is the foundation of data communication on the internet, enabling the retrieval of web pages, images, and other resources, and is commonly used in conjunction with HTTPS (HTTP Secure).</p></td>
  `;
}

/** JSON. */
const gJSON = document.getElementById("gJSON");
if (gJSON) {
  gJSON.innerHTML += `
  <td>JSON</td>
  <td><p>The JavaScript Object Notation. It's a lightweight data-interchange format that is easy for humans to read and write and is easy for machines to parse and generate. Real&Mate’s API can return data in JSON format, making it simple for developers to integrate and work with.</p></td>
  `;
}

/** Metadata. */
const gMetadata = document.getElementById("gMetadata");
if (gMetadata) {
  gMetadata.innerHTML += `
  <td>Metadata</td>
  <td><p>Data that provides information about other data. It's a description of what data is available and how it's organized. Metadata can be analyzed so that data requestors understand exactly what the data they access from an API will look like.</p></td>
  `;
}

/** OAuth. */
const gOAuth = document.getElementById("gOAuth");
if (gOAuth) {
  gOAuth.innerHTML += `
  <td>OAuth</td>
  <td><p>Open authorization. It's an open standard that allows for authentication and authorization in one step. It allows previously-identified users of systems to log in to other APIs and get access to services quickly.</p></td>
  `;
}

/** OData. */
const gOData = document.getElementById("gOData");
if (gOData) {
  gOData.innerHTML += `
  <td>OData</td>
  <td><p>Open Data Protocol. It's an ISO/IEC approved, OASIS standard that defines best practices for building and using RESTful APIs, enabling consistent data access patterns across systems.</p></td>
  `;
}

/** Payload. */
const gPayload = document.getElementById("gPayload");
if (gPayload) {
  gPayload.innerHTML += `
  <td>Payload</td>
  <td><p>The actual data transmitted in an API request or response. It contains the relevant information exchanged between client and server, typically formatted as JSON or XML.</p></td>
  `;
}

/** Protocol. */
const gProtocol = document.getElementById("gProtocol");
if (gProtocol) {
  gProtocol.innerHTML += `
  <td>Protocol</td>
  <td><p>A set of rules that governs the format, transmission, and processing of data exchanged between systems. Protocols ensure that data is communicated accurately and efficiently.</p></td>
  `;
}

/** Query. */
const gQuery = document.getElementById("gQuery");
if (gQuery) {
  gQuery.innerHTML += `
  <td>Query</td>
  <td><p>An API-request made by a user specifying the data needed and any parameters for retrieval. The API processes the request and returns the relevant data based on those specifications.</p></td>
  `;
}

/** REST. */
const gREST = document.getElementById("gREST");
if (gREST) {
  gREST.innerHTML += `
  <td>REST</td>
  <td><p>Representational State Transfer. An architectural style for building scalable, distributed APIs. It uses standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources identified by URLs, exchanging data representations (JSON, XML) between client and server in a stateless manner.</p></td>
  `;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Real Estate Terms. */

/** Active Solar System. */
const gActiveSolarSystem = document.getElementById("gActiveSolarSystem");
if (gActiveSolarSystem) {
  gActiveSolarSystem.innerHTML += `
  <td>Active Solar System</td>
  <td><p>A home energy setup that utilizes solar panels to convert sunlight into electricity for immediate use or storage.</p></td>
  `;
}

/** Buyers Agency Fee. */
const gBuyersAgencyFee = document.getElementById("gBuyersAgencyFee");
if (gBuyersAgencyFee) {
  gBuyersAgencyFee.innerHTML += `
  <td>Buyers Agency Fee</td>
  <td><p>The fee or commission paid to a buyer’s agent or brokerage for finding and managing a home purchase for a buyer. Represented as a percentage of the sales price, the fee is paid by the seller at closing and is intended to compensate the buyer’s agent for their expertise, negotiation skills, and assistance throughout the buying process.</p></td>
  `;
}

/** CMA. */
const gCMA = document.getElementById("gCMA");
if (gCMA) {
  gCMA.innerHTML += `
  <td>CMA</td>
  <td><p>Comparative Market Analysis. It's an in-depth analysis, prepared by a real estate agent, that determines the estimated value of a home based on recently sold homes of similar condition, size, features and age that are located in the same area.</p></td>
  `;
}

/** Deed. */
const gDeed = document.getElementById("gDeed");
if (gDeed) {
  gDeed.innerHTML += `
  <td>Deed</td>
  <td><p>A legal document that formally establishes and transfers ownership of real property from one party to another.</p></td>
  `;
}

/** Earnest Money. */
const gEarnestMoney = document.getElementById("gEarnestMoney");
if (gEarnestMoney) {
  gEarnestMoney.innerHTML += `
  <td>Earnest Money</td>
  <td><p>A security deposit made by a buyer to demonstrate their serious intent to purchase a property. This deposit is typically submitted along with an offer to buy and serves as a sign of good faith to the seller.</p></td>
  `;
}

/** Environmentally Friendly Home Construction. */
const gEnvironmentallyFriendlyHomeConstruction = document.getElementById(
  "gEnvironmentallyFriendlyHomeConstruction"
);
if (gEnvironmentallyFriendlyHomeConstruction) {
  gEnvironmentallyFriendlyHomeConstruction.innerHTML += `
  <td>Environmentally Friendly Home Construction</td>
  <td><p>A building constructed with recycled materials and wood from a renewable source. It can also employ many devices and constructs that lessen a carbon footprint, including geothermal heating systems and solar panels.</p></td>
  `;
}

/** Infrastructure. */
const gInfrastructure = document.getElementById("gInfrastructure");
if (gInfrastructure) {
  gInfrastructure.innerHTML += `
  <td>Infrastructure</td>
  <td><p>Organizational structures that are required for society or a business to function.</p></td>
  `;
}

/** Installment Contract. */
const gInstallmentContract = document.getElementById("gInstallmentContract");
if (gInstallmentContract) {
  gInstallmentContract.innerHTML += `
  <td>Installment Contract </td>
  <td><p>A contractual arrangement in that a buyer agrees to pay the total purchase price of a product or service in a series of scheduled payments, or installments, over a specified period of time. This type of agreement allows the buyer to acquire the item immediately while spreading the cost over time, making it more manageable financially.</p></td>
  `;
}

/** Listing Price. */
const gListingPrice = document.getElementById("gListingPrice");
if (gListingPrice) {
  gListingPrice.innerHTML += `
  <td>Listing Price</td>
  <td><p>A price at that a property is offered for sale by a seller. This amount reflects seller's expectations and serves as a starting point for negotiations between a seller and a buyer.</p></td>
  `;
}

/** Mortgage Banker. */
const gMortgageBanker = document.getElementById("gMortgageBanker");
if (gMortgageBanker) {
  gMortgageBanker.innerHTML += `
  <td>Mortgage Banker</td>
  <td><p>An individual or financial institution that originates, sells, and services mortgage loans. Mortgage bankers provide necessary funds for borrowers to purchase real estate.</p></td>
  `;
}

/** Real Estate. */
const gRealEstate = document.getElementById("gRealEstate");
if (gRealEstate) {
  gRealEstate.innerHTML += `
  <td>Real Estate</td>
  <td><p>Any given piece of land along with anything that is permanently attached to it, such as buildings, housing, natural resources, and other permanent structures. Real estate encompasses both residential and commercial properties and is a key component of the property market.</p></td>
  `;
}
