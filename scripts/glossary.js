// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Terms and Definitions

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////a/////////////////////////////////////////////////////////////////////////////////////////////////

// API Terms

// API
const gAPI = document.getElementById("gAPI");
if (gAPI) {
  gAPI.innerHTML += `
  <td>API</td>
  <td><p>Application Programming Interface. It’s a collection of standardized protocols and tools that enable different technology systems to communicate and interact with one another. It serves as an interface that facilitates the access and delivery of data, allowing applications to request and exchange information seamlessly.</p></td>
  `;
}

// Authorization
const gAuthorization = document.getElementById("gAuthorization");
if (gAuthorization) {
  gAuthorization.innerHTML += `
  <td>Authorization</td>
  <td><p>Process of specifying access rights/privileges to resources. It identifies what kinds of data a user is allowed to access. To access data through the API, a data requestor supplies an authorization code &mdash; an API key or API token &mdash; and the user’s allowed level of data access is delivered through the API.</p></td>
  `;
}

// Authentication
const gAuthentication = document.getElementById("gAuthentication");
if (gAuthentication) {
  gAuthentication.innerHTML += `
  <td>Authentication</td>
  <td><p>The process of verifying a user's identity to ensure that they are who they claim to be. In the context of an API, authentication is essential for determining the legitimacy of a person requesting data, ensuring that only authorized users can access sensitive information.</p></td>
  `;
}

// Data Synchronization
const gDataSynchronization = document.getElementById("gDataSynchronization");
if (gDataSynchronization) {
  gDataSynchronization.innerHTML += `
  <td>Data Synchronization</td>
  <td><p>The process of copying and synchronizing data between a server and a client. This process involves an initial request to retrieve a dataset from the primary source, followed by subsequent requests to obtain updates. Data synchronization ensures that both server and client maintain consistent and up-to-date information.</p></td>
  `;
}

// Endpoint
const gEndpoint = document.getElementById("gEndpoint");
if (gEndpoint) {
  gEndpoint.innerHTML += `
  <td>Endpoint</td>
  <td><p>A web address where data can be accessed. The API service has many endpoints where different kinds of data can be accessed.</p></td>
  `;
}

// HTTP
const gHTTP = document.getElementById("gHTTP");
if (gHTTP) {
  gHTTP.innerHTML += `
  <td>HTTP</td>
  <td><p>The Hypertext Transfer Protocol. It's the set of rules for transferring data between systems on the World Wide Web or within a local network. HTTP defines how messages are formatted and transmitted, as well as how web servers and browsers should respond to various commands. It is the foundation of data communication on the internet, enabling the retrieval of web pages, images, and other resources, and is commonly used in conjunction with HTTPS (HTTP Secure).</p></td>
  `;
}

// JSON
const gJSON = document.getElementById("gJSON");
if (gJSON) {
  gJSON.innerHTML += `
  <td>JSON</td>
  <td><p>The JavaScript Object Notation. It's a lightweight data-interchange format that is easy for humans to read and write and is easy for machines to parse and generate. Real&Mate’s API can return data to requestors in this format for ease of use.</p></td>
  `;
}

// Metadata
const gMetadata = document.getElementById("gMetadata");
if (gMetadata) {
  gMetadata.innerHTML += `
  <td>Metadata</td>
  <td><p>Data that provides information about other data. It's a description of what data is available and how it's organized. Metadata can be analyzed so that data requestors understand exactly what the data they access from an API will look like.</p></td>
  `;
}

// OAuth
const gOAuth = document.getElementById("gOAuth");
if (gOAuth) {
  gOAuth.innerHTML += `
  <td>OAuth</td>
  <td><p>Open authorization. It's an open standard that allows for authentication and authorization in one step. It allows previously-identified users of systems to log in to other APIs and get access to services quickly.</p></td>
  `;
}

// OData
const gOData = document.getElementById("gOData");
if (gOData) {
  gOData.innerHTML += `
  <td>OData</td>
  <td><p>Open Data Protocol. It's an ISO/IEC approved, OASIS standard that defines a set of rules for building and using RESTful APIs.</p></td>
  `;
}

// Payload
const gPayload = document.getElementById("gPayload");
if (gPayload) {
  gPayload.innerHTML += `
  <td>Payload</td>
  <td><p>Actual data transmitted as part of a request or response in an API interaction. The payload contains the relevant information that a client sends to a server or a server returns to a client, typically in a structured format such as JSON or XML.</p></td>
  `;
}

// Protocol
const gProtocol = document.getElementById("gProtocol");
if (gProtocol) {
  gProtocol.innerHTML += `
  <td>Protocol</td>
  <td><p>A set of rules and conventions that govern the format, transmission, and processing of data exchanged between systems. Protocols ensure that data is communicated accurately and efficiently.</p></td>
  `;
}

// Query
const gQuery = document.getElementById("gQuery");
if (gQuery) {
  gQuery.innerHTML += `
  <td>Query</td>
  <td><p>A request made by a user to the API that specifies the type of data needed. It specifies parameters for data retrieval, allowing the API to understand and fulfill user's information requirements effectively.</p></td>
  `;
}

// REST
const gREST = document.getElementById("gREST");
if (gREST) {
  gREST.innerHTML += `
  <td>REST</td>
  <td><p>Representational State Transfer. An architectural style for designing networked applications, particularly in the context of distributed hypermedia systems. REST is based on a set of principles and constraints that promote scalability, stateless communication, and the use of standard HTTP methods (such as GET, POST, PUT, DELETE) for interacting with resources. In a RESTful system, resources are identified by URLs, and the state of the application is represented through the transfer of representations (such as JSON or XML) between a client and a server, allowing for a more efficient and flexible interaction model.</p></td>
  `;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Real Estate Terms

// Active Solar System
const gActiveSolarSystem = document.getElementById("gActiveSolarSystem");
if (gActiveSolarSystem) {
  gActiveSolarSystem.innerHTML += `
  <td>Active Solar System</td>
  <td><p>A home energy setup that utilizes solar panels to convert sunlight into electricity for immediate use or storage.</p></td>
  `;
}

// Buyers Agency Fee
const gBuyersAgencyFee = document.getElementById("gBuyersAgencyFee");
if (gBuyersAgencyFee) {
  gBuyersAgencyFee.innerHTML += `
  <td>Buyers Agency Fee</td>
  <td><p>The fee or commission paid to a buyer’s agent or brokerage for finding and managing a home purchase for a buyer. Represented as a percentage of the sales price, the fee is paid by the seller at closing and is intended to compensate the buyer’s agent for their expertise, negotiation skills, and assistance throughout the buying process.</p></td>
  `;
}

// CMA
const gCMA = document.getElementById("gCMA");
if (gCMA) {
  gCMA.innerHTML += `
  <td>CMA</td>
  <td><p>Comparative Market Analysis. It's an in-depth analysis, prepared by a real estate agent, that determines the estimated value of a home based on recently sold homes of similar condition, size, features and age that are located in the same area.</p></td>
  `;
}

// Deed
const gDeed = document.getElementById("gDeed");
if (gDeed) {
  gDeed.innerHTML += `
  <td>Deed</td>
  <td><p>A legal document that formally establishes and transfers ownership of real property from one party to another.</p></td>
  `;
}

// Earnest Money
const gEarnestMoney = document.getElementById("gEarnestMoney");
if (gEarnestMoney) {
  gEarnestMoney.innerHTML += `
  <td>Earnest Money</td>
  <td><p>A security deposit made by a buyer to demonstrate their serious intent to purchase a property. This deposit is typically submitted along with an offer to buy and serves as a sign of good faith to the seller.</p></td>
  `;
}

// Environmentally Friendly Home Construction
const gEnvironmentallyFriendlyHomeConstruction = document.getElementById(
  "gEnvironmentallyFriendlyHomeConstruction"
);
if (gEnvironmentallyFriendlyHomeConstruction) {
  gEnvironmentallyFriendlyHomeConstruction.innerHTML += `
  <td>Environmentally Friendly Home Construction</td>
  <td><p>A building constructed with recycled materials and wood from a renewable source. It can also employ many devices and constructs that lessen a carbon footprint, including geothermal heating systems and solar panels.</p></td>
  `;
}

// Infrastructure
const gInfrastructure = document.getElementById("gInfrastructure");
if (gInfrastructure) {
  gInfrastructure.innerHTML += `
  <td>Infrastructure</td>
  <td><p>Organizational structures that are required for society or a business to function.</p></td>
  `;
}

// Installment Contract
const gInstallmentContract = document.getElementById("gInstallmentContract");
if (gInstallmentContract) {
  gInstallmentContract.innerHTML += `
  <td>Installment Contract </td>
  <td><p>A contractual arrangement in that a buyer agrees to pay the total purchase price of a product or service in a series of scheduled payments, or installments, over a specified period of time. This type of agreement allows the buyer to acquire the item immediately while spreading the cost over time, making it more manageable financially.</p></td>
  `;
}

// Listing Price
const gListingPrice = document.getElementById("gListingPrice");
if (gListingPrice) {
  gListingPrice.innerHTML += `
  <td>Listing Price</td>
  <td><p>A price at that a property is offered for sale by a seller. This amount reflects seller's expectations and serves as a starting point for negotiations between a seller and a buyer.</p></td>
  `;
}

// Mortgage Banker
const gMortgageBanker = document.getElementById("gMortgageBanker");
if (gMortgageBanker) {
  gMortgageBanker.innerHTML += `
  <td>Mortgage Banker</td>
  <td><p>An individual or financial institution that originates, sells, and services mortgage loans. Mortgage bankers provide necessary funds for borrowers to purchase real estate.</p></td>
  `;
}

// Real Estate
const gRealEstate = document.getElementById("gRealEstate");
if (gRealEstate) {
  gRealEstate.innerHTML += `
  <td>Real Estate</td>
  <td><p>Any given piece of land along with anything that is permanently attached to it, such as buildings, housing, natural resources, and other permanent structures. Real estate encompasses both residential and commercial properties and is a key component of the property market.</p></td>
  `;
}
