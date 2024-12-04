// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Parameters

// activity_logs API parameter
class DtActivityLogs extends HTMLElement { // Declare a class DtActivityLogs that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    activity_logs <da-boolean/>
    `
  }
}
customElements.define("dt-activity-logs", DtActivityLogs); // Define a custom element dt-activity-logs and assign it a class DtActivityLogs
// +
class DdActivityLogs extends HTMLElement { // Declare a class DdActivityLogs that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether activity logs are enabled for the user account:
    <ul>
    <li><code>true</code>: logs are enabled. Default.</li>
    <li><code>false</code>: logs are disabled.</li>
    </ul>
    `
  }
}
customElements.define("dd-activity-logs", DdActivityLogs); // Define a custom element dd-activity-logs and assign it a class DdActivityLogs

// amenities API parameter
class DtAmenities extends HTMLElement { // Declare a class DtAmenities that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    amenities <da-arraystring/>
    `
  }
}
customElements.define("dt-amenities", DtAmenities); // Define a custom element dt-amenities and assign it a class DtAmenities
// +
class DdAmenities extends HTMLElement { // Declare a class DdAmenities that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A list of useful facilities that are available near the <resource-name></resource-name>:
    <ul>
      <li><code>Bank</code>.</li>
      <li><code>Bar</code>.</li>
      <li><code>Beauty Salon</code>.</li>
      <li><code>Cinema</code>.</li>
      <li><code>Garden</code>.</li>
      <li><code>Park</code>.</li>
      <li><code>Post Office</code>.</li>
      <li><code>Restaurant</code>.</li>
      <li><code>Shop</code>.</li>
      <li><code>Temple</code>.</li>
    </ul>
    `
  }
}
customElements.define("dd-amenities", DdAmenities); // Define a custom element dd-amenities and assign it a class DdAmenities

// app_category API parameter
class DtAppCategory extends HTMLElement { // Declare a class DtAppCategory that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    app_category <da-string/>
    `
  }
}
customElements.define("dt-app-category", DtAppCategory); // Define a custom element dt-app-category and assign it a class DtAppCategory
// +
class DdAppCategory extends HTMLElement { // Declare a class DdAppCategory that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The high-level family of the application.
    `
  }
}
customElements.define("dd-app-category", DdAppCategory); // Define a custom element dd-app-category and assign it a class DdAppCategory

// assigned_privileges API parameter
class DtAssignedPrivileges extends HTMLElement { // Declare a class DtAssignedPrivileges that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    assigned_privileges <da-arraystring/>
    `
  }
}
customElements.define("dt-assigned-privileges", DtAssignedPrivileges); // Define a custom element dt-assigned-privileges and assign it a class DtAssignedPrivileges
// +
class DdAssignedPrivileges extends HTMLElement { // Declare a class DdAssignedPrivileges that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The privileges this role includes:<ul>
      <li><code>Login</code>: able to log into the Real&Mate and read resources.</li>
      <li><code>CustomizeExecutive</code>: able to customize executive resources.</li>
      <li><code>CustomizeUsers</code>: able to customize users accounts and their records.</li>
      <li><code>CustomizeSelf</code>: able to change the password for the current user account.</li>
      <li><code>CustomizeComponents</code>: able to customize components managed by this service.</li>
    </ul>
    `
  }
}
customElements.define("dd-assigned-privileges", DdAssignedPrivileges); // Define a custom element dd-assigned-privileges and assign it a class DdAssignedPrivileges

// auth_token API parameter
class DtAuthToken extends HTMLElement { // Declare a class DtAuthToken that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    auth_token <da-string/>
    `
  }
}
customElements.define("dt-auth-token", DtAuthToken); // Define a custom element dt-auth-token and assign it a class DtAuthToken
// +
class DdAuthToken extends HTMLElement { // Declare a class DdAuthToken that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A token used for a user authentication.
    `
  }
}
customElements.define("dd-auth-token", DdAuthToken); // Define a custom element dd-auth-token and assign it a class DdAuthToken

// boot API parameter
class DtBoot extends HTMLElement { // Declare a class DtBoot that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    boot <da-object/>
    `
  }
}
customElements.define("dt-boot", DtBoot); // Define a custom element dt-boot and assign it a class DtBoot
// +
class DdBoot extends HTMLElement { // Declare a class DdBoot that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Parameters of the boot.
    `
  }
}
customElements.define("dd-boot", DdBoot); // Define a custom element dd-boot and assign it a class DdBoot

// boot_source_override_enabled API parameter
class DtBootSourceOverrideEnabled extends HTMLElement { // Declare a class DtBootSourceOverrideEnabled that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    boot_source_override_enabled <da-string/>
    `
  }
}
customElements.define("dt-boot-source-override-enabled", DtBootSourceOverrideEnabled); // Define a custom element dt-boot-source-override-enabled and assign it a class DtBootSourceOverrideEnabled
// +
class DdBootSourceOverrideEnabled extends HTMLElement { // Declare a class DdBootSourceOverrideEnabled that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Boot source override configuration:<ul>
      <li><code>once</code>: the option is enabled. The next download will occur from the source specified in <code>boot_source_override_target</code>. The value of <code>boot_source_override_enabled</code> is then reboot back to <code>disabled</code>.</li>
      <li><code>disabled</code>: the option is disabled. Loading will occur according to the selected priority in main configuration.</li>
    </ul>
    `
  }
}
customElements.define("dd-boot-source-override-enabled", DdBootSourceOverrideEnabled); // Define a custom element dd-boot-source-override-enabled and assign it a class DdBootSourceOverrideEnabled

// boot_source_override_target API parameter
class DtBootSourceOverrideTarget extends HTMLElement { // Declare a class DtBootSourceOverrideTarget that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    boot_source_override_target <da-string/>
    `
  }
}
customElements.define("dt-boot-source-override-target", DtBootSourceOverrideTarget); // Define a custom element dt-boot-source-override-target and assign it a class DtBootSourceOverrideTarget
// +
class DdBootSourceOverrideTarget extends HTMLElement { // Declare a class DdBootSourceOverrideTarget that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Boot source when the value of <code>boot_source_override_enabled</code> is <code>once</code>:<ul>
      <li><code>pxe</code>: an environment for booting the system using a net card without using local data drives.</li>
      <li><code>hdd</code>: hard disk drive.</li>
      <li><code>cd</code>: compact disk.</li>
      <li><code>bios_setup</code>: BIOS Setup program.</li>
      <li><code>usb</code>: USB drive.</li>
      <li><code>none</code>: boot source is not selected.</li>
    </ul>
    `
  }
}
customElements.define("dd-boot-source-override-target", DdBootSourceOverrideTarget); // Define a custom element dd-boot-source-override-target and assign it a class DdBootSourceOverrideTarget

// capitalizedResourceName API parameter
class capitalizedResourceName extends HTMLElement { // Declare a class capitalizedResourceName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML = document.getElementById("capitalizedResourceName").innerHTML;
  }
}
customElements.define("capitalized-resource-name", capitalizedResourceName); // Define a custom element capitalized-resource-name and assign it a class capitalizedResourceName

// comments API parameter
class DtComments extends HTMLElement { // Declare a class DtComments that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    comments <da-string/>
    `
  }
}
customElements.define("dt-comments", DtComments); // Define a custom element dt-comments and assign it a class DtComments
// +
class DdComments extends HTMLElement { // Declare a class DdComments that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Additional comments or notes.
    `
  }
}
customElements.define("dd-comments", DdComments); // Define a custom element dd-comments and assign it a class DdComments

// communication_plan API parameter
class DtCommunicationPlan extends HTMLElement { // Declare a class DtCommunicationPlan that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    communication_plan <da-string/>
    `
  }
}
customElements.define("dt-communication-plan", DtCommunicationPlan); // Define a custom element dt-communication-plan and assign it a class DtCommunicationPlan
// +
class DdCommunicationPlan extends HTMLElement { // Declare a class DdCommunicationPlan that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Strategy for informing users and stakeholders about the reboot.
    `
  }
}
customElements.define("dd-communication-plan", DdCommunicationPlan); // Define a custom element dd-communication-plan and assign it a class DdCommunicationPlan

// date_added API parameter
class DtDateAdded extends HTMLElement { // Declare a class DtDateAdded that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    date_added <da-datetime/>
    `
  }
}
customElements.define("dt-date-added", DtDateAdded); // Define a custom element dt-date-added and assign it a class DtDateAdded
// +
class DdDateAdded extends HTMLElement { // Declare a class DdDateAdded that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The date and time the <resource-name></resource-name> was originally added.
    `
  }
}
customElements.define("dd-date-added", DdDateAdded); // Define a custom element "dd-date-added and assign it a class DdDateAdded

// date_created API parameter
class DtDateCreated extends HTMLElement { // Declare a class DtDateCreated that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    date_created <da-datetime/>
    `
  }
}
customElements.define("dt-date-created", DtDateCreated); // Define a custom element dt-date-created and assign it a class DtDateCreated
// +
class DdDateCreated extends HTMLElement { // Declare a class DdDateCreated that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The date and time the <resource-name></resource-name> was originally created.
    `
  }
}
customElements.define("dd-date-created", DdDateCreated); // Define a custom element dd-date-created and assign it a class DdDateCreated

// date_modified API parameter
class DtDateModified extends HTMLElement { // Declare a class DtDateModified that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    date_modified <da-date/>
    `
  }
}
customElements.define("dt-date-modified", DtDateModified); // Define a custom element dt-date-modified and assign it a class DtDateModified
// +
class DdDateModified extends HTMLElement { // Declare a class DdDateModified that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The date the <resource-name></resource-name> was last changed and saved.
    `
  }
}
customElements.define("dd-date-modified", DdDateModified); // Define a custom element dd-date-modified and assign it a class DdDateModified

// description API parameter
class DtDescription extends HTMLElement { // Declare a class DtDescription that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    description <da-string/>
    `
  }
}
customElements.define("dt-description", DtDescription); // Define a custom element dt-description and assign it a class DtDescription
// +
class DdDescription extends HTMLElement { // Declare a class DdDescription that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An informational representation of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-description", DdDescription); // Define a custom element dd-description and assign it a class DdDescription

// documentation_updates API parameter
class DtDocumentationUpdates extends HTMLElement { // Declare a class DtDocumentationUpdates that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    documentation_updates <da-string/>
    `
  }
}
customElements.define("dt-documentation-updates", DtDocumentationUpdates); // Define a custom element dt-documentation-updates and assign it a class DtDocumentationUpdates
// +
class DdDocumentationUpdates extends HTMLElement { // Declare a class DdDocumentationUpdates that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Updating documentation to reflect changes introduced by the reboot.
    `
  }
}
customElements.define("dd-documentation-updates", DdDocumentationUpdates); // Define a custom element dd-documentation-updates and assign it a class DdDocumentationUpdates

// documentation_url API parameter
class DtDocumentationUrl extends HTMLElement { // Declare a class DtDocumentationUrl that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    documentation_url <da-string/>
    `
  }
}
customElements.define("dt-documentation-url", DtDocumentationUrl); // Define a custom element dt-documentation-url and assign it a class DtDocumentationUrl
// +
class DdDocumentationUrl extends HTMLElement { // Declare a class DdDocumentationUrl that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The base URL for the <resource-name></resource-name> documentation.
    `
  }
}
customElements.define("dd-documentation-url", DdDocumentationUrl); // Define a custom element dd-documentation-url and assign it a class DdDocumentationUrl

// email API parameter
class DtEmail extends HTMLElement { // Declare a class DtEmail that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    email <da-string/>
    `
  }
}
customElements.define("dt-email", DtEmail); // Define a custom element dt-email and assign it a class DtEmail
// +
class DdEmail extends HTMLElement { // Declare a class DdEmail that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An email address.
    `
  }
}
customElements.define("dd-email", DdEmail); // Define a custom element dd-email and assign it a class DdEmail

// enabled API parameter
class DtEnabled extends HTMLElement { // Declare a class DtEnabled that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    enabled <da-boolean/>
    `
  }
}
customElements.define("dt-enabled", DtEnabled); // Define a custom element dt-enabled and assign it a class DtEnabled
// +
class DdEnabled extends HTMLElement { // Declare a class DdEnabled that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether the <resource-name></resource-name> is enabled:
    <ul>
      <li><code>true</code>: the <resource-name></resource-name> is enabled. Default.</li>
      <li><code>false</code>: the <resource-name></resource-name> is disabled.</li>
    </ul>
    `
  }
}
customElements.define("dd-enabled", DdEnabled); // Define a custom element dd-enabled and assign it a class DdEnabled

// end_time API parameter
class DtEndTime extends HTMLElement { // Declare a class DtEndTime that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    end_time <da-datetime/>
    `
  }
}
customElements.define("dt-end-time", DtEndTime); // Define a custom element dt-end-time and assign it a class DtEndTime
// +
class DdEndTime extends HTMLElement { // Declare a class DdEndTime that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The date and time when the process is expected to be completed.
    `
  }
}
customElements.define("dd-end-time", DdEndTime); // Define a custom element dd-end-time and assign it a class DdEndTime

// environment API parameter
class DtEnvironment extends HTMLElement { // Declare a class DtEnvironment that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    environment <da-arraystring/>
    `
  }
}
customElements.define("dt-environment", DtEnvironment); // Define a custom element dt-environment and assign it a class DtEnvironment
// +
class DdEnvironment extends HTMLElement { // Declare a class DdEnvironment that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The environment type being rebooted:
    <ul>
      <li><b>Development</b>.</li>
      <li><b>Testing</b>.</li>
      <li><b>Production</b>.</li>
    </ul>
    `
  }
}
customElements.define("dd-environment", DdEnvironment); // Define a custom element dd-environment and assign it a class DdEnvironment

// first_name API parameter
class DtFirstName extends HTMLElement { // Declare a class DtFirstName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    first_name <da-string/>
    `
  }
}
customElements.define("dt-first-name", DtFirstName); // Define a custom element dt-first-name and assign it a class DtFirstName
// +
class DdFirstName extends HTMLElement { // Declare a class DdFirstName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A personal name that identifies an individual, as distinct from their last name.
    `
  }
}
customElements.define("dd-first-name", DdFirstName); // Define a custom element dd-first-name and assign it a class DdFirstName

// id API parameter
class DtId extends HTMLElement { // Declare a class DtId that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    id <da-string/>
    `
  }
}
customElements.define("dt-id", DtId); // Define a custom element dt-id and assign it a class DtId
// +
class DdId extends HTMLElement { // Declare a class DdId that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The unique identifier of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-id", DdId); // Define a custom element dd-id" and assign it a class DdId

// id (2) API parameter
class DtId2 extends HTMLElement { // Declare a class DtId2 that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    id <da-string/>
    `
  }
}
customElements.define("dt-id-2", DtId2); // Define a custom element dt-id-2 and assign it a class DtId2
// +
class DdId2 extends HTMLElement { // Declare a class DdId2 that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The unique identifier of the <sub-resource-name></sub-resource-name>.
    `
  }
}
customElements.define("dd-id-2", DdId2); // Define a custom element dd-id-2 and assign it a class DdId2

// is_predefined API parameter
class DtIsPredefined extends HTMLElement { // Declare a class DtIsPredefined that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    is_predefined <da-boolean/>
    `
  }
}
customElements.define("dt-is-predefined", DtIsPredefined); // Define a custom element dt-is-predefined and assign it a class DtIsPredefined
// +
class DdIsPredefined extends HTMLElement { // Declare a class DdIsPredefined that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether the role is predefined:
    <ul>
      <li><code>true</code>: the role is predefined. Default.</li>
      <li><code>false</code>: the role is custom.</li>
    </ul>
    `
  }
}
customElements.define("dd-is-predefined", DdIsPredefined); // Define a custom element dd-is-predefined and assign it a class DdIsPredefined

// impact_assessment API parameter
class DtImpactAssessment extends HTMLElement { // Declare a class DtImpactAssessment that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    impact_assessment <da-string/>
    `
  }
}
customElements.define("dt-impact-assessment", DtImpactAssessment); // Define a custom element dt-impact-assessment and assign it a class DtImpactAssessment
// +
class DdImpactAssessment extends HTMLElement { // Declare a class DdImpactAssessment that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Evaluation of the potential impact of the reboot on users.
    `
  }
}
customElements.define("dd-impact-assessment", DdImpactAssessment); // Define a custom element dd-impact-assessment and assign it a class DdImpactAssessment

// incident_response API parameter
class DtIncidentResponse extends HTMLElement { // Declare a class DtIncidentResponse that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    incident_response <da-string/>
    `
  }
}
customElements.define("dt-incident-response", DtIncidentResponse); // Define a custom element dt-incident-response and assign it a class DtIncidentResponse
// +
class DdIncidentResponse extends HTMLElement { // Declare a class DdIncidentResponse that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Protocol for handling any incidents or issues that may arise during or after the reboot.
    `
  }
}
customElements.define("dd-incident-response", DdIncidentResponse); // Define a custom element dd-incident-response and assign it a class DdIncidentResponse

// items API parameter
class DtItems extends HTMLElement { // Declare a class DtItems that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    items <da-object/>
    `
  }
}
customElements.define("dt-items", DtItems); // Define a custom element dt-items and assign it a class DtItems
// +
class DdItems extends HTMLElement { // Declare a class DdItems that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Collection items.
    `
  }
}
customElements.define("dd-items", DdItems); // Define a custom element dd-items and assign it a class DdItems

// items_count API parameter
class DtItemsCount extends HTMLElement { // Declare a class DtItemsCount that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    items_count <da-number/>
    `
  }
}
customElements.define("dt-items-count", DtItemsCount); // Define a custom element dt-items-count and assign it a class DtItemsCount
// +
class DdItemsCount extends HTMLElement { // Declare a class DdItemsCount that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The number of items in the collection.
    `
  }
}
customElements.define("dd-items-count", DdItemsCount); // Define a custom element dd-items-count and assign it a class DdItemsCount

// language API parameter
class DtLanguage extends HTMLElement { // Declare a class DtLanguage that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    language <da-string/>
    `
  }
}
customElements.define("dt-language", DtLanguage); // Define a custom element dt-language and assign it a class DtLanguage
// +
class DdLanguage extends HTMLElement { // Declare a class DdLanguage that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A language used for the application. Default: <code>en-US</code>. Example: <code>fr-FR</code>, <code>es-ES</code>.
    `
  }
}
customElements.define("dd-language", DdLanguage); // Define a custom element dd-language and assign it a class DdLanguage

// language_default API parameter
class DtLanguageDefault extends HTMLElement { // Declare a class DtLanguageDefault that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    language_default <da-string/>
    `
  }
}
customElements.define("dt-language-default", DtLanguageDefault); // Define a custom element dt-language-default and assign it a class DtLanguageDefault
// +
class DdLanguageDefault extends HTMLElement { // Declare a class DdLanguageDefault that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The default language to be used for the application. Default: <code>en-US</code>. Example: <code>fr-FR</code>, <code>es-ES</code>.
    `
  }
}
customElements.define("dd-language-default", DdLanguageDefault); // Define a custom element dd-language-default and assign it a class DdLanguageDefault

// last_name API parameter
class DtLastName extends HTMLElement { // Declare a class DtLastName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    last_name <da-string/>
    `
  }
}
customElements.define("dt-last-name", DtLastName); // Define a custom element dt-last-name and assign it a class DtLastName
// +
class DdLastName extends HTMLElement { // Declare a class DdLastName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A name that identifies an individual's family, as distinct from their first name.
    `
  }
}
customElements.define("dd-last-name", DdLastName); // Define a custom element dd-last-name and assign it a class DdLastName

// lease_agreement_details API parameter
class DtLeaseAgreementDetails extends HTMLElement { // Declare a class DtLeaseAgreementDetails that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    lease_agreement_details <da-string/>
    `
  }
}
customElements.define("dt-lease-agreement-details", DtLeaseAgreementDetails); // Define a custom element dt-lease-agreement-details and assign it a class DtLeaseAgreementDetails
// +
class DdLeaseAgreementDetails extends HTMLElement { // Declare a class DdLeaseAgreementDetails that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Terms and conditions under that the property is leased.
    `
  }
}
customElements.define("dd-lease-agreement-details", DdLeaseAgreementDetails); // Define a custom element dd-lease-agreement-details and assign it a class DdLeaseAgreementDetails

// lease_term API parameter
class DtLeaseTerm extends HTMLElement { // Declare a class DtLeaseTerm that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    lease_term <da-string/>
    `
  }
}
customElements.define("dt-lease-term", DtLeaseTerm); // Define a custom element dt-lease-term and assign it a class DtLeaseTerm
// +
class DdLeaseTerm extends HTMLElement { // Declare a class DdLeaseTerm that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A period of a lease.
    `
  }
}
customElements.define("dd-lease-term", DdLeaseTerm); // Define a custom element dd-lease-term and assign it a class DdLeaseTerm

// license API parameter
class DtLicense extends HTMLElement { // Declare a class DtLicense that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    license <da-string/>
    `
  }
}
customElements.define("dt-license", DtLicense); // Define a custom element dt-license and assign it a class DtLicense
// +
class DdLicense extends HTMLElement { // Declare a class DdLicense that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The permit from an authority to own or use <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-license", DdLicense); // Define a custom element dd-license and assign it a class DdLicense

// mainResourceName API parameter
class mainResourceName extends HTMLElement { // Declare a class mainResourceName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML = document.getElementById("mainResourceName").innerHTML;
  }
}
customElements.define("main-resource-name", mainResourceName); // Define a custom element main-resource-name and assign it a class mainResourceName

// maintenance_schedule API parameter
class DtMaintenanceSchedule extends HTMLElement { // Declare a class DtMaintenanceSchedule that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    maintenance_schedule <da-arraystring/>
    `
  }
}
customElements.define("dt-maintenance-schedule", DtMaintenanceSchedule); // Define a custom element dt-maintenance-schedule and assign it a class DtMaintenanceSchedule
// +
class DdMaintenanceSchedule extends HTMLElement { // Declare a class DdMaintenanceSchedule that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A list of all the expected maintenance plans.
    `
  }
}
customElements.define("dd-maintenance-schedule", DdMaintenanceSchedule); // Define a custom element dd-maintenance-schedule and assign it a class DdMaintenanceSchedule

// max_password_length API parameter
class DtMaxPasswordLength extends HTMLElement { // Declare a class DtMaxPasswordLength that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    max_password_length <da-number/>
    `
  }
}
customElements.define("dt-max-password-length", DtMaxPasswordLength); // Define a custom element dt-max-password-length and assign it a class DtMaxPasswordLength
// +
class DdMaxPasswordLength extends HTMLElement { // Declare a class DdMaxPasswordLength that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
     Maximum length of password. Default: <code>20</code>.
    `
  }
}
customElements.define("dd-max-password-length", DdMaxPasswordLength); // Define a custom element dd-max-password-length and assign it a class DdMaxPasswordLength

// max_username_length API parameter
class DtMaxUsernameLength extends HTMLElement { // Declare a class DtMaxUsernameLength that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    max_username_length <da-number/>
    `
  }
}
customElements.define("dt-max-username-length", DtMaxUsernameLength); // Define a custom element dt-max-username-length and assign it a class DtMaxUsernameLength
// +
class DdMaxUsernameLength extends HTMLElement { // Declare a class DdMaxUsernameLength that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
     Maximum length of username. Default: <code>20</code>.
    `
  }
}
customElements.define("dd-max-username-length", DdMaxUsernameLength); // Define a custom element dd-max-username-length and assign it a class DdMaxUsernameLength

// middle_name API parameter
class DtMiddleName extends HTMLElement { // Declare a class DtMiddleName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    middle_name <da-string/>
    `
  }
}
customElements.define("dt-middle-name", DtMiddleName); // Define a custom element dt-middle-name and assign it a class DtMiddleName
// +
class DdMiddleName extends HTMLElement { // Declare a class DdMiddleName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An additional personal name that is placed between a person's first name and their last name.
    `
  }
}
customElements.define("dd-middle-name", DdMiddleName); // Define a custom element dd-middle-name and assign it a class DdMiddleName

// min_password_length API parameter
class DtMinPasswordLength extends HTMLElement { // Declare a class DtMinPasswordLength that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    min_password_length <da-number/>
    `
  }
}
customElements.define("dt-min-password-length", DtMinPasswordLength); // Define a custom element dt-min-password-length and assign it a class DtMinPasswordLength
// +
class DdMinPasswordLength extends HTMLElement { // Declare a class DdMinPasswordLength that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
     Minimum length of password. Default: <code>8</code>.
    `
  }
}
customElements.define("dd-min-password-length", DdMinPasswordLength); // Define a custom element dd-min-password-length and assign it a class DdMinPasswordLength

// min_username_length API parameter
class DtMinUsernameLength extends HTMLElement { // Declare a class DtMinUsernameLength that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    min_username_length <da-number/>
    `
  }
}
customElements.define("dt-min-username-length", DtMinUsernameLength); // Define a custom element dt-min-username-length and assign it a class DtMinUsernameLength
// +
class DdMinUsernameLength extends HTMLElement { // Declare a class DdMinUsernameLength that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
     Minimum length of username. Default: <code>1</code>.
    `
  }
}
customElements.define("dd-min-username-length", DdMinUsernameLength); // Define a custom element dd-min-username-length and assign it a class DdMinUsernameLength

// monitoring API parameter
class DtMonitoring extends HTMLElement { // Declare a class DtMonitoring that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    monitoring <da-string/>
    `
  }
}
customElements.define("dt-monitoring", DtMonitoring); // Define a custom element dt-monitoring and assign it a class DtMonitoring
// +
class DdMonitoring extends HTMLElement { // Declare a class DdMonitoring that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Configuration for monitoring the reboot process in real-time.
    `
  }
}
customElements.define("dd-monitoring", DdMonitoring); // Define a custom element dd-monitoring and assign it a class DdMonitoring

// name API parameter
class DtName extends HTMLElement { // Declare a class DtName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    name <da-string/>
    `
  }
}
customElements.define("dt-name", DtName); // Define a custom element dt-name and assign it a class DtName
// +
class DdName extends HTMLElement { // Declare a class DdName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A word or set of words by that the <resource-name></resource-name> is known, addressed and referred to.
    `
  }
}
customElements.define("dd-name", DdName); // Define a custom element dd-name and assign it a class DdName

// name-2 API parameter
class DtName2 extends HTMLElement { // Declare a class DtName2 that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    name <da-string/>
    `
  }
}
customElements.define("dt-name-2", DtName2); // Define a custom element dt-name-2 and assign it a class DtName2
// +
class DdName2 extends HTMLElement { // Declare a class DdName2 that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A name of a person.
    `
  }
}
customElements.define("dd-name-2", DdName2); // Define a custom element dd-name-2 and assign it a class DdName2

// name (3)
class DtName3 extends HTMLElement { // Declare a class DtName3 that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    name <da-string/>
    `
  }
}
customElements.define("dt-name-3", DtName3); // Define a custom element dt-name-3 and assign it a class DtName3
// +
class DdName3 extends HTMLElement { // Declare a class DdName3 that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A word or set of words by that a <sub-resource-name></sub-resource-name> is known, addressed and referred to.
    `
  }
}
customElements.define("dd-name-3", DdName3); // Define a custom element dd-name-3 and assign it a class DdName3

// notifications API parameter
class DtNotifications extends HTMLElement { // Declare a class DtNotifications that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    notifications <da-boolean/>
    `
  }
}
customElements.define("dt-notifications", DtNotifications); // Define a custom element dt-notifications and assign it a class DtNotifications
// +
class DdNotifications extends HTMLElement { // Declare a class DdNotifications that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The setting for notifications in the application:<ul>
    <li><code>true</code>: notifications are enabled. Default.</li>
    <li><code>false</code>: notifications are disabled.</li>
    </ul>
    `
  }
}
customElements.define("dd-notifications", DdNotifications); // Define a custom element dd-notifications and assign it a class DdNotifications

// notifications_default API parameter
class DtNotificationsDefault extends HTMLElement { // Declare a class DtNotificationsDefault that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    notifications_default <da-boolean/>
    `
  }
}
customElements.define("dt-notifications-default", DtNotificationsDefault); // Define a custom element dt-notifications-default and assign it a class DtNotificationsDefault
// +
class DdNotificationsDefault extends HTMLElement { // Declare a class DdNotificationsDefault that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The default setting for notifications in the application:<ul>
    <li><code>true</code>: notifications are enabled. Default.</li>
    <li><code>false</code>: notifications are disabled.</li>
    </ul>
    `
  }
}
customElements.define("dd-notifications-default", DdNotificationsDefault); // Define a custom element dd-notifications-default and assign it a class DdNotificationsDefault

// occupancy API parameter
class DtOccupancy extends HTMLElement { // Declare a class DtOccupancy that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    occupancy <da-string/>
    `
  }
}
customElements.define("dt-occupancy", DtOccupancy); // Define a custom element dt-occupancy and assign it a class DtOccupancy
// +
class DdOccupancy extends HTMLElement { // Declare a class DdOccupancy that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The fact of occupying a <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-occupancy", DdOccupancy); // Define a custom element dd-occupancy and assign it a class DdOccupancy

// owner API parameter
class DtOwner extends HTMLElement { // Declare a class DtOwner that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    owner <da-string/>
    `
  }
}
customElements.define("dt-owner", DtOwner); // Define a custom element dt-owner and assign it a class DtOwner
// +
class DdOwner extends HTMLElement { // Declare a class DdOwner that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A person or company that owns the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-owner", DdOwner); // Define a custom element dd-owner and assign it a class DdOwner

// reason API parameter
class DtReason extends HTMLElement { // Declare a class DtReason that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    reason <da-string/>
    `
  }
}
customElements.define("dt-reason", DtReason); // Define a custom element dt-reason and assign it a class DtReason
// +
class DdReason extends HTMLElement { // Declare a DdReason CLASS that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A brief description of why the action is considered necessary.
    `
  }
}
customElements.define("dd-reason", DdReason); // Define a custom element dd-reason and assign it a class DdReason

// reboot_type API parameter
class DtRebootType extends HTMLElement { // Declare a class DtRebootType that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    reboot_type <da-arraystring/>
    `
  }
}
customElements.define("dt-reboot-type", DtRebootType); // Define a custom element dt-reboot-type and assign it a class DtRebootType
// +
class DdRebootType extends HTMLElement { // Declare a class DdRebootType that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The type of reboot being performed:
    <ul>
      <li><b>System Restart</b>.</li>
      <li><b>Configuration Change</b>.</li>
      <li><b>Software Update</b>.</li>
    </ul>
    `
  }
}
customElements.define("dd-reboot-type", DdRebootType); // Define a custom element dd-reboot-type and assign it a class DdRebootType

// require_two_factor_auth API parameter
class DtRequireTwoFactorAuth extends HTMLElement { // Declare a class DtRequireTwoFactorAuth that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    require_two_factor_auth <da-boolean/>
    `
  }
}
customElements.define("dt-require-two-factor-auth", DtRequireTwoFactorAuth); // Define a custom element dt-require-two-factor-auth and assign it a class DtRequireTwoFactorAuth
// +
class DdRequireTwoFactorAuth extends HTMLElement { // Declare a class DdRequireTwoFactorAuth that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether to require two-factor authentication:
    <ul>
      <li><code>true</code>: two-factor authentication is required.</li>
      <li><code>false</code>: two-factor authentication is not required. Default.</li>
    </ul>
    `
  }
}
customElements.define("dd-require-two-factor-auth", DdRequireTwoFactorAuth); // Define a custom element dd-require-two-factor-auth and assign it a class DdRequireTwoFactorAuth

// resourceName API parameter
class resourceName extends HTMLElement { // Declare a class resourceName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML = document.getElementById("resourceName").innerHTML;
  }
}
customElements.define("resource-name", resourceName); // Define a custom element resource-name and assign it a class resourceName

// password API parameter
class DtPassword extends HTMLElement { // Declare a class DtPassword that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    password <da-string/>
    `
  }
}
customElements.define("dt-password", DtPassword); // Define a custom element dt-password and assign it a class DtPassword
// +
class DdPassword extends HTMLElement { // Declare a class DdPassword that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A secret character combination that must be used to gain admission to the <main-resource-name></main-resource-name>.
    `
  }
}
customElements.define("dd-password", DdPassword); // Define a custom element dd-password and assign it a class DdPassword

// password_change_required API parameter
class DtPasswordChangeRequired extends HTMLElement { // Declare a class DtPasswordChangeRequired that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    password_change_required <da-boolean/>
    `
  }
}
customElements.define("dt-password-change-required", DtPasswordChangeRequired); // Define a custom element dt-password-change-required and assign it a class DtPasswordChangeRequired
// +
class DdPasswordChangeRequired extends HTMLElement { // Declare a class DdPasswordChangeRequired that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether a password change is required:
      <ul>
        <li><code>true</code>: a password change is required.</li>
        <li><code>false</code>: a password change is not required.</li>
      </ul>
      `
  }
}
customElements.define("dd-password-change-required", DdPasswordChangeRequired); // Define a custom element dd-password-change-required and assign it a class DdPasswordChangeRequired

// permissions API parameter
class DtPermissions extends HTMLElement { // Declare a class DtPermissions that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    permissions <da-arraystring/>
    `
  }
}
customElements.define("dt-permissions", DtPermissions); // Define a custom element dt-permissions and assign it a class DtPermissions
// +
class DdPermissions extends HTMLElement { // Declare a class DdPermissions that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A list of permissions that are available for the user account.
    `
  }
}
customElements.define("dd-permissions", DdPermissions); // Define a custom element dd-permissions and assign it a class DdPermissions

// phone API parameter
class DtPhone extends HTMLElement { // Declare a class DtPhone that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    phone <da-string/>
    `
  }
}
customElements.define("dt-phone", DtPhone); // Define a custom element dt-phone and assign it a class DtPhone
// +
class DdPhone extends HTMLElement { // Declare a class DdPhone that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A phone number.
    `
  }
}
customElements.define("dd-phone", DdPhone); // Define a custom element dd-phone and assign it a class DdPhone

// plan API parameter
class DtPlan extends HTMLElement { // Declare a class DtPlan that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    plan <da-object/>
    `
  }
}
customElements.define("dt-plan", DtPlan); // Define a custom element dt-plan and assign it a class DtPlan
// +
class DdPlan extends HTMLElement { // Declare a class DdPlan that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A subscription plan.
    `
  }
}
customElements.define("dd-plan", DdPlan); // Define a custom element dd-plan and assign it a class DdPlan

// plan_features API parameter
class DtPlanFeatures extends HTMLElement { // Declare a class DtPlanFeatures that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    plan_features <da-arraystring/>
    `
  }
}
customElements.define("dt-plan-features", DtPlanFeatures); // Define a custom element dt-plan-features and assign it a class DtPlanFeatures
// +
class DdPlanFeatures extends HTMLElement { // Declare a class DdPlanFeatures that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The list of features included in the subscription plan.
    `
  }
}
customElements.define("dd-plan-features", DdPlanFeatures); // Define a custom element dd-plan-features and assign it a class DdPlanFeatures

// plan_name API parameter
class DtPlanName extends HTMLElement { // Declare a class plan_name that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    plan_name <da-string/>
    `
  }
}
customElements.define("dt-plan-name", DtPlanName); // Define a custom element dt-plan-name and assign it a class DtPlanName
// +
class DdPlanName extends HTMLElement { // Declare a class DdPlanName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The name of the subscription plan:<ul>
    <li><code>Starter</code>.</li>
    <li><code>Standard</code>.</li>
    <li><code>Premium</code>.</li>
    <li><code>Enterprise</code>.</li>
    </ul>
    `
  }
}
customElements.define("dd-plan-name", DdPlanName); // Define a custom element dd-plan-name and assign it a class DdPlanName

// plan_price API parameter
class DtPlanPrice extends HTMLElement { // Declare a class DtPlanPrice that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    plan_price <da-number/>
    `
  }
}
customElements.define("dt-plan-price", DtPlanPrice); // Define a custom element dt-plan-price and assign it a class DtPlanPrice
// +
class DdPlanPrice extends HTMLElement { // Declare a class DdPlanPrice that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The price of the subscription plan.
    `
  }
}
customElements.define("dd-plan-price", DdPlanPrice); // Define a custom element dd-plan-price and assign it a class DdPlanPrice

// plans API parameter
class DtPlans extends HTMLElement { // Declare a class DtPlans that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    plans <da-arrayobject/>
    `
  }
}
customElements.define("dt-plans", DtPlans); // Define a custom element dt-plans and assign it a class DtPlans
// +
class DdPlans extends HTMLElement { // Declare a class DdPlans that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A list of available subscription plans.
    `
  }
}
customElements.define("dd-plans", DdPlans); // Define a custom element dd-plans and assign it a class DdPlans

// post_analysis API parameter
class DtPostAnalysis extends HTMLElement { // Declare a class DtPostAnalysis that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    post_analysis <da-string/>
    `
  }
}
customElements.define("dt-post-analysis", DtPostAnalysis); // Define a custom element dt-post-analysis and assign it a class DtPostAnalysis
// +
class DdPostAnalysis extends HTMLElement { // Declare a class DdPostAnalysis that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Analysis of the process to identify areas for improvement.
    `
  }
}
customElements.define("dd-post-analysis", DdPostAnalysis); // Define a custom element dd-post-analysis and assign it a class DdPostAnalysis

// post_reboot_verification API parameter
class DtPostRebootVerification extends HTMLElement { // Declare a class DtPostRebootVerification that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    post_reboot_verification <da-string/>
    `
  }
}
customElements.define("dt-post-reboot-verification", DtPostRebootVerification); // Define a custom element dt-post-reboot-verification and assign it a class DtPostRebootVerification
// +
class DdPostRebootVerification extends HTMLElement { // Declare a class DdPostRebootVerification that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Verification steps to confirm that the reboot was successful and the application is operating as expected.
    `
  }
}
customElements.define("dd-post-reboot-verification", DdPostRebootVerification); // Define a custom element dd-post-reboot-verification and assign it a class DdPostRebootVerification

// preferences API parameter
class DtPreferences extends HTMLElement { // Declare a class DtPreferences that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    preferences <da-object/>
    `
  }
}
customElements.define("dt-preferences", DtPreferences); // Define a custom element dt-preferences and assign it a class DtPreferences
// +
class DdPreferences extends HTMLElement { // Declare a class DdPreferences that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A list of user preferences.
    `
  }
}
customElements.define("dd-preferences", DdPreferences); // Define a custom element dd-preferences and assign it a class DdPreferences

// processing_timeout API parameter
class DtProcessingTimeout extends HTMLElement { // Declare a class DtProcessingTimeout that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    processing_timeout <da-boolean/>
    `
  }
}
customElements.define("dt-processing-timeout", DtProcessingTimeout); // Define a custom element dt-processing-timeout and assign it a class DtProcessingTimeout
// +
class DdProcessingTimeout extends HTMLElement { // Declare a class DdProcessingTimeout that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether the processing timeout is set:
      <ul>
        <li><code>true</code>: the processing timeout is set.</li>
        <li><code>false</code>: the processing timeout is not set.</li>
      </ul>
    <p>Default processing timeout: 30 seconds.</p>
    `
  }
}
customElements.define("dd-processing-timeout", DdProcessingTimeout); // Define a custom element dd-processing-timeout and assign it a class DdProcessingTimeout

// property_address API parameter
class DtPropertyAddress extends HTMLElement { // Declare a class DtPropertyAddress that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    property_address <da-string/>
    `
  }
}
customElements.define("dt-property-address", DtPropertyAddress); // Define a custom element dt-property-address and assign it a class DtPropertyAddress
// +
class DdPropertyAddress extends HTMLElement { // Declare a class DdPropertyAddress that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The address of the real estate object.
    `
  }
}
customElements.define("dd-property-address", DdPropertyAddress); // Define a custom element dd-property-address and assign it a class DdPropertyAddress

// property_area API parameter
class DtPropertyArea extends HTMLElement { // Declare a class DtPropertyArea that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    property_area <da-string/>
    `
  }
}
customElements.define("dt-property-area", DtPropertyArea); // Define a custom element dt-property-area and assign it a class DtPropertyArea
// +
class DdPropertyArea extends HTMLElement { // Declare a class DdPropertyArea that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The area of the real estate object, expressed in square meters.
    `
  }
}
customElements.define("dd-property-area", DdPropertyArea); // Define a custom element dd-property-area and assign it a class DdPropertyArea

// property_id API parameter
class DtPropertyId extends HTMLElement { // Declare a class DtPropertyId that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    property_id <da-string/>
    `
  }
}
customElements.define("dt-property-id", DtPropertyId); // Define a custom element dt-property-id and assign it a class DtPropertyId
// +
class DdPropertyId extends HTMLElement { // Declare a class DdPropertyId that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The unique identifier of the property.
    `
  }
}
customElements.define("dd-property-id", DdPropertyId); // Define a custom element dd-property-id and assign it a class DdPropertyId

// property_type API parameter
class DtPropertyType extends HTMLElement { // Declare a class DtPropertyType that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    property_type <da-string/>
    `
  }
}
customElements.define("dt-property-type", DtPropertyType); // Define a custom element dt-property-type and assign it a class DtPropertyType
// +
class DdPropertyType extends HTMLElement { // Declare a class DdPropertyType that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The type of the real estate object:
    <ul>
      <li><code>Apartment</code>: a room or suite of rooms designed as a residence and commonly located in a building occupied by more than one household.</li>
      <li><code>Townhouse</code>: a house that is one of a row of identical houses situated side by side and sharing common walls, designed as a single-family residence.</li>
      <li><code>Bungalow</code>: a small house or cottage usually having a single story and sometimes an additional attic story.</li>
      <li><code>Ranch</code>: an extensive farm.</li>
      <li><code>Houseboat</code>: a barge designed and equipped for use as a dwelling.</li>
      <li><code>Single-Family House</code>: a structure maintained and used as a single dwelling unit.</li>
      <li><code>Mediterranean</code>: a house whose key features can include high ceilings, arches, bricks, wood doors and ceramic tile.</li>
      <li><code>Tudor</code>: a house that can have tall, narrow doors and windows, small diamond-shaped window panes and wooden staircases.</li>
      <li><code>Farmhouse</code>: a dwelling house on a farm.</li>
      <li><code>Mansion</code>: a large stately dwelling house with many rooms.</li>
    </ul>
    `
  }
}
customElements.define("dd-property-type", DdPropertyType); // Define a custom element dd-property-type and assign it a class DdPropertyType

// real_estate_objects API parameter
class DtRealEstateObjects extends HTMLElement { // Declare a class DtRealEstateObjects that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    real_estate_objects <da-object/>
    `
  }
}
customElements.define("dt-real-estate-objects", DtRealEstateObjects); // Define a custom element dt-real-estate-objects and assign it a class DtRealEstateObjects
// +
class DdRealEstateObjects extends HTMLElement { // Declare a class DdRealEstateObjects that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A collection of references to real estate objects.
    `
  }
}
customElements.define("dd-real-estate-objects", DdRealEstateObjects); // Define a custom element dd-real-estate-objects and assign it a class DdRealEstateObjects

// rentable_area API parameter
class DtRentableArea extends HTMLElement { // Declare a class DtRentableArea that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    rentable_area <da-string/>
    `
  }
}
customElements.define("dt-rentable-area", DtRentableArea); // Define a custom element dt-rentable-area and assign it a class DtRentableArea
// +
class DdRentableArea extends HTMLElement { // Declare a class DdRentableArea that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The amount of area that is allocated to a tenant.<br/>It can be used to calculate a total rent owed by a tenant to a lessor.
    `
  }
}
customElements.define("dd-rentable-area", DdRentableArea); // Define a custom element dd-rentable-area and assign it a class DdRentableArea

// rental_price API parameter
class DtRentalPrice extends HTMLElement { // Declare a class DtRentalPrice that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    rental_price <da-string/>
    `
  }
}
customElements.define("dt-rental-price", DtRentalPrice); // Define a custom element dt-rental-price and assign it a class DtRentalPrice
// +
class DdRentalPrice extends HTMLElement { // Declare a class DdRentalPrice that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A rental price of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-rental-price", DdRentalPrice); // Define a custom element dd-rental-price and assign it a class DdRentalPrice

// role_name API parameter
class DtRoleName extends HTMLElement { // Declare a class DtRoleName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    role_name <da-string/>
    `
  }
}
customElements.define("dt-role-name", DtRoleName); // Define a custom element dt-role-name and assign it a class DtRoleName
// +
class DdRoleName extends HTMLElement { // Declare a class DdRoleName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A name of the specific role within the Real&Mate.
    `
  }
}
customElements.define("dd-role-name", DdRoleName); // Define a custom element dd-role-name and assign it a class DdRoleName

// roles API parameter
class DtRoles extends HTMLElement { // Declare a class DtRoles that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    roles <da-object/>
    `
  }
}
customElements.define("dt-roles", DtRoles); // Define a custom element dt-roles and assign it a class DtRoles
// +
class DdRoles extends HTMLElement { // Declare a class DdRoles that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Roles assigned to users within the application.
    `
  }
}
customElements.define("dd-roles", DdRoles); // Define a custom element dd-roles and assign it a class DdRoles

// rollback_plan API parameter
class DtRollbackPlan extends HTMLElement { // Declare a class DtRollbackPlan that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    rollback_plan <da-string/>
    `
  }
}
customElements.define("dt-rollback-plan", DtRollbackPlan); // Define a custom element dt-rollback-plan and assign it a class DtRollbackPlan
// +
class DdRollbackPlan extends HTMLElement { // Declare a class DdRollbackPlan that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A plan outlining steps to revert to the previous state in case of any issues during the reboot process.
    `
  }
}
customElements.define("dd-rollback-plan", DdRollbackPlan); // Define a custom element dd-rollback-plan and assign it a class DdRollbackPlan

// security_deposit API parameter
class DtSecurityDeposit extends HTMLElement { // Declare a class DtSecurityDeposit that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    security_deposit <da-string/>
    `
  }
}
customElements.define("dt-security-deposit", DtSecurityDeposit); // Define a custom element dt-security-deposit and assign it a class DtSecurityDeposit
// +
class DdSecurityDeposit extends HTMLElement { // Declare a class DdSecurityDeposit that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A sum of money held in trust.
    `
  }
}
customElements.define("dd-security-deposit", DdSecurityDeposit); // Define a custom element dd-security-deposit and assign it a class DdSecurityDeposit

// security_settings API parameter
class DtSecuritySettings extends HTMLElement { // Declare a class DtSecuritySettings that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    security_settings <da-object/>
    `
  }
}
customElements.define("dt-security-settings", DtSecuritySettings); // Define a custom element dt-security-settings and assign it a class DtSecuritySettings
// +
class DdSecuritySettings extends HTMLElement { // Declare a class DdSecuritySettings that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
     Settings related to security.
    `
  }
}
customElements.define("dd-security-settings", DdSecuritySettings); // Define a custom element dd-security-settings and assign it a class DdSecuritySettings

// service_enabled API parameter
class DtServiceEnabled extends HTMLElement { // Declare a class DtServiceEnabled that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    service_enabled <da-boolean/>
    `
  }
}
customElements.define("dt-service-enabled", DtServiceEnabled); // Define a custom element dt-service-enabled and assign it a class DtServiceEnabled
// +
class DdServiceEnabled extends HTMLElement { // Declare a class DdServiceEnabled that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether the <resource-name></resource-name> is enabled:
      <ul>
        <li><code>true</code>: the service is enabled.</li>
        <li><code>false</code>: the service is disabled.</li>
      </ul>
    <p>Enabled means the system will run the service on the next boot. So if you enable a service, you still need to manually start it, or reboot and it will start.</p>
    `
  }
}
customElements.define("dd-service-enabled", DdServiceEnabled); // Define a custom element dd-service-enabled and assign it a class DdServiceEnabled

// show_plans_modal_window API parameter
class DtShowPlansModalWindow extends HTMLElement { // Declare a class DtShowPlansModalWindow that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    show_plans_modal_window <da-boolean/>
    `
  }
}
customElements.define("dt-show-plans-modal-window", DtShowPlansModalWindow); // Define a custom element dt-show-plans-modal-window and assign it a class DtShowPlansModalWindow
// +
class DdShowPlansModalWindow extends HTMLElement { // Declare a class DdShowPlansModalWindow that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether to display the modal window with subscription plans:
      <ul>
        <li><code>true</code>: the modal window is displayed. Default.</li>
        <li><code>false</code>: the modal window is not displayed.</li>
      </ul>
    `
  }
}
customElements.define("dd-show-plans-modal-window", DdShowPlansModalWindow); // Define a custom element dd-show-plans-modal-window and assign it a class DdShowPlansModalWindow

// show_plans_modal_window_repeat_after API parameter
class DtShowPlansModalWindowRepeatAfter extends HTMLElement { // Declare a class DtShowPlansModalWindowRepeatAfter that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    show_plans_modal_window_repeat_after <da-number/>
    `
  }
}
customElements.define("dt-show-plans-modal-window-repeat-after", DtShowPlansModalWindowRepeatAfter); // Define a custom element dt-show-plans-modal-window-repeat-after and assign it a class DtShowPlansModalWindowRepeatAfter
// +
class DdShowPlansModalWindowRepeatAfter extends HTMLElement { // Declare a class DdShowPlansModalWindowRepeatAfter that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The number of days after that the subscription plans modal window should be displayed again. Default: <code>30</code>.
    `
  }
}
customElements.define("dd-show-plans-modal-window-repeat-after", DdShowPlansModalWindowRepeatAfter); // Define a custom element dd-show-plans-modal-window-repeat-after and assign it a class DdShowPlansModalWindowRepeatAfter

// start_time API parameter
class DtStartTime extends HTMLElement { // Declare a class start_time that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    start_time <da-datetime/>
    `
  }
}
customElements.define("dt-start-time", DtStartTime); // Define a custom element dt-start-time and assign it a class DtStartTime
// +
class DdStartTime extends HTMLElement { // Declare a class DdStartTime that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The date and time when the process is scheduled to begin.
    `
  }
}
customElements.define("dd-start-time", DdStartTime); // Define a custom element dd-start-time and assign it a class DdStartTime

// subResourceName API parameter
class subResourceName extends HTMLElement { // Declare a class subResourceName that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += document.getElementById("subResourceName").innerHTML;
  }
}
customElements.define("sub-resource-name", subResourceName); // Define a custom element sub-resource-name and assign it a class subResourceName

// subscription_management API parameter
class DtSubscriptionManagement extends HTMLElement { // Declare a class DtSubscriptionManagement that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    subscription_management <da-object/>
    `
  }
}
customElements.define("dt-subscription-management", DtSubscriptionManagement); // Define a custom element dt-subscription-management and assign it a class DtSubscriptionManagement
// +
class DdSubscriptionManagement extends HTMLElement { // Declare a class DdSubscriptionManagement that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Settings related to subscription management.
    `
  }
}
customElements.define("dd-subscription-management", DdSubscriptionManagement); // Define a custom element dd-subscription-management and assign it a class DdSubscriptionManagement

// tags API parameter
class DtTags extends HTMLElement { // Declare a class DtTags that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    tags <da-arraystring/>
    `
  }
}
customElements.define("dt-tags", DtTags); // Define a custom element dt-tags and assign it a class DtTags
// +
class DdTags extends HTMLElement { // Declare a class DdTags that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Labels attached to the <resource-name></resource-name> for the purpose of identification or to add an extra level of description.
    `
  }
}
customElements.define("dd-tags", DdTags); // Define a custom element dd-tags and assign it a class DdTags

// tenant API parameter
class DtTenant extends HTMLElement { // Declare a class tenant that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    tenant <da-object/>
    `
  }
}
customElements.define("dt-tenant", DtTenant); // Define a custom element dt-tenant and assign it a class DtTenant
// +
class DdTenant extends HTMLElement { // Declare a class DdTenant that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A person who rents a property from a lessor.
    `
  }
}
customElements.define("dd-tenant", DdTenant); // Define a custom element dd-tenant and assign it a class DdTenant

// testing_procedures API parameter
class DtTestingProcedures extends HTMLElement { // Declare a class DtTestingProcedures that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    testing_procedures <da-string/>
    `
  }
}
customElements.define("dt-testing-procedures", DtTestingProcedures); // Define a custom element dt-testing-procedures and assign it a class DtTestingProcedures
// +
class DdTestingProcedures extends HTMLElement { // Declare a class DdTestingProcedures that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Procedures for testing the application after the reboot to ensure proper functionality and performance.
    `
  }
}
customElements.define("dd-testing-procedures", DdTestingProcedures); // Define a custom element dd-testing-procedures and assign it a class DdTestingProcedures

// time_zone API parameter
class DtTimeZone extends HTMLElement { // Declare a class DtTimeZone that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    time_zone <da-string/>
    `
  }
}
customElements.define("dt-time-zone", DtTimeZone); // Define a custom element dt-time-zone and assign it a class DtTimeZone
// +
class DdTimeZone extends HTMLElement { // Declare a class DdTimeZone that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The time zone used for the application. Default: <code>America/New_York</code>. Example: <code>Europe/Paris</code>, <code>Asia/Tokyo</code>.
    `
  }
}
customElements.define("dd-time-zone", DdTimeZone); // Define a custom element dd-time-zone and assign it a class DdTimeZone

// time_zone_default API parameter
class DtTimeZoneDefault extends HTMLElement { // Declare a class DtTimeZoneDefault that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    time_zone_default <da-string/>
    `
  }
}
customElements.define("dt-time-zone-default", DtTimeZoneDefault); // Define a custom element dt-time-zone-default and assign it a class DtTimeZoneDefault
// +
class DdTimeZoneDefault extends HTMLElement { // Declare a class DdTimeZoneDefault that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    The default time zone to be used for the application. Default: <code>America/New_York</code>. Example: <code>Europe/Paris</code>, <code>Asia/Tokyo</code>.
    `
  }
}
customElements.define("dd-time-zone-default", DdTimeZoneDefault); // Define a custom element dd-time-zone-default and assign it a class DdTimeZoneDefault

// title API parameter
class DtTitle extends HTMLElement { // Declare a class DtTitle that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    title <da-string/>
    `
  }
}
customElements.define("dt-title", DtTitle); // Define a custom element dt-title and assign it a class DtTitle
// +
class DdTitle extends HTMLElement { // Declare a class DdTitle that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A brief title of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-title", DdTitle); // Define a custom element dd-title and assign it a class DdTitle

// two_factor_auth API parameter
class DtTwoFactorAuth extends HTMLElement { // Declare a class DtTwoFactorAuth that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    two_factor_auth <da-boolean/>
    `
  }
}
customElements.define("dt-two-factor-auth", DtTwoFactorAuth); // Define a custom element dt-two-factor-auth and assign it a class DtTwoFactorAuth
// +
class DdTwoFactorAuth extends HTMLElement { // Declare a class DdTwoFactorAuth that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An indication of whether a two-factor authentication is required:
    <ul>
      <li><code>true</code>: a two-factor authentication is required.</li>
      <li><code>false</code>: a two-factor authentication is not required. Default.</li>
    </ul>
    `
  }
}
customElements.define("dd-two-factor-auth", DdTwoFactorAuth); // Define a custom element dd-two-factor-auth and assign it a class DdTwoFactorAuth

// url API parameter
class DtUrl extends HTMLElement { // Declare a class DtUrl that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    url <da-string/>
    `
  }
}
customElements.define("dt-url", DtUrl); // Define a custom element dt-url and assign it a class DtUrl
// +
class DdUrl extends HTMLElement { // Declare a class DdUrl that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Resource URL.
    `
  }
}
customElements.define("dd-url", DdUrl); // Define a custom element dd-url and assign it a class DdUrl

// username API parameter
class DtUsername extends HTMLElement { // Declare a class DtUsername that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    username <da-string/>
    `
  }
}
customElements.define("dt-username", DtUsername); // Define a custom element dt-username and assign it a class DtUsername
// +
class DdUsername extends HTMLElement { // Declare a class DdUsername that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    An identifier used by a person with an access to the <main-resource-name></main-resource-name>.
    `
  }
}
customElements.define("dd-username", DdUsername); // Define a custom element dd-username and assign it a class DdUsername

// utilities API parameter
class DtUtilities extends HTMLElement { // Declare a class DtUtilities that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    utilities <da-arraystring/>
    `
  }
}
customElements.define("dt-utilities", DtUtilities); // Define a custom element dt-utilities and assign it a class DtUtilities
// +
class DdUtilities extends HTMLElement { // Declare a class DdUtilities that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A list of available utilities:
    <ul>
      <li><code>Electric power</code>.</li>
      <li><code>Natural gas</code>.</li>
      <li><code>Sewerage</code>.</li>
      <li><code>Cold water</code>.</li>
      <li><code>Hot water</code>.</li>
    </ul>
    `
  }
}
customElements.define("dd-utilities", DdUtilities); // Define a custom element dd-utilities and assign it a class DdUtilities

// version API parameter
class DtVersion extends HTMLElement { // Declare a class DtVersion that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    version <da-string/>
    `
  }
}
customElements.define("dt-version", DtVersion); // Define a custom element dt-version and assign it a class DtVersion
// +
class DdVersion extends HTMLElement { // Declare a class DdVersion that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    A serial number of the <resource-name></resource-name> particular form differing in certain respects from an earlier form of it.
    `
  }
}
customElements.define("dd-version", DdVersion); // Define a custom element dd-version and assign it a class DdVersion

const dd = document.getElementsByTagName("dd"); // Select all elements with tag dd
const dl = document.getElementsByTagName("dl"); // Select all elements with tag dl
for (let x of dd) {
  for (let y of dl) {
    if (x.contains(y) == true) {
      x.style.marginBottom = "0";
    }
  }
}
const ul = document.getElementsByTagName("ul"); // Select all elements with tag ul
for (let x of dd) {
  for (let w of ul) {
    if (x.contains(w) == true) {
      x.style.marginBottom = "0";
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Titles

// HTTP Code: 200
class THTTPCode200 extends HTMLElement { // Declare a class THTTPCode200 that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    HTTP Code: 200
    `
  }
}
customElements.define("t-http-code-200", THTTPCode200); // Define a custom element t-http-code-200 and assign it a class THTTPCode200

// Request body
class TRequestBody extends HTMLElement { // Declare a class TRequestBody that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Request Body
    `
  }
}
customElements.define("t-request-body", TRequestBody); // Define a custom element t-request-body and assign it a class TRequestBody

// Request example
class TRequestExample extends HTMLElement { // Declare a class TRequestExample that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Request Example
    `
  }
}
customElements.define("t-request-example", TRequestExample); // Define a custom element t-request-example and assign it a class TRequestExample

// Request headers
class TRequestHeaders extends HTMLElement { // Declare a class TRequestHeaders that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML = `
    Request Headers
    `
  }
}
customElements.define("t-request-headers", TRequestHeaders); // Define a custom element t-request-headers and assign it a class TRequestHeaders

// Response body
class TResponseBody extends HTMLElement { // Declare a class TResponseBody that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Response Body
    `
  }
}
customElements.define("t-response-body", TResponseBody); // Define a custom element t-response-body and assign it a class TResponseBody

// Response codes
class TResponseCodes extends HTMLElement { // Declare a class TResponseCodes that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Response Codes
    `
  }
}
customElements.define("t-response-codes", TResponseCodes); // Define a custom element t-response-codes and assign it a class TResponseCodes

// Response example
class TResponseExample extends HTMLElement { // Declare a class TResponseExample that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Response Example
    `
  }
}
customElements.define("t-response-example", TResponseExample); // Define a custom element t-response-example and assign it a class TResponseExample

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DAta types

// array[bigint]
class DtArrayBigint extends HTMLElement { // Declare a class DtArrayBigint that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[bigint]</dataType>
    `
  }
}
customElements.define("da-arraybigint", DtArrayBigint); // Define a custom element da-arraybigint and assign it a class DtArrayBigint

// array[date]
class DtArrayDate extends HTMLElement { // Declare a class DtArrayDate that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[date]</dataType>
    `
  }
}
customElements.define("da-arraydate", DtArrayDate); // Define a custom element da-arraydate and assign it a class DtArrayDate

// array[number]
class DtArrayNumber extends HTMLElement { // Declare a class DtArrayNumber that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[number]</dataType>
    `
  }
}
customElements.define("da-arraynumber", DtArrayNumber); // Define a custom element da-arraynumber and assign it a class DtArrayNumber

// array[object]
class DtArrayObject extends HTMLElement { // Declare a class DtArrayObject that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[object]</dataType>
    `
  }
}
customElements.define("da-arrayobject", DtArrayObject); // Define a custom element da-arrayobject and assign it a class DtArrayObject

// array[string]
class DtArrayString extends HTMLElement { // Declare a class DtArrayString that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[string]</dataType>
    `
  }
}
customElements.define("da-arraystring", DtArrayString); // Define a custom element da-arraystring and assign it a class DtArrayString

// bigint
class DtBigint extends HTMLElement { // Declare a class DtBigint that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>bigint</dataType>
    `
  }
}
customElements.define("da-bigint", DtBigint); // Define a custom element da-bigint and assign it a class DtBigint

// boolean
class DtBoolean extends HTMLElement { // Declare a class DtBoolean that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>boolean</dataType>
    `
  }
}
customElements.define("da-boolean", DtBoolean); // Define a custom element da-boolean and assign it a class DtBoolean

// date
class DtDate extends HTMLElement { // Declare a class DtDate that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>date</dataType>
    `
  }
}
customElements.define("da-date", DtDate); // Define a custom element da-date and assign it a class DtDate

// datetime
class DtDateTime extends HTMLElement { // Declare a class DtDateTime that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>datetime</dataType>
    `
  }
}
customElements.define("da-datetime", DtDateTime); // Define a custom element da-datetime and assign it a class DtDateTime

// number
class DtNumber extends HTMLElement { // Declare a class DtNumber that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>number</dataType>
    `
  }
}
customElements.define("da-number", DtNumber); // Define a custom element da-number and assign it a class DtNumber

// object
class DtObject extends HTMLElement { // Declare a class DtObject that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>object</dataType>
    `
  }
}
customElements.define("da-object", DtObject); // Define a custom element da-object and assign it a class DtObject

// string
class DtString extends HTMLElement { // Declare a class DtString that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <dataType>string</dataType>
    `
  }
}
customElements.define("da-string", DtString); // Define a custom element da-string and assign it a class DtString

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Response Codes

// Column Rules

const colgroup = document.getElementById("rc-colgroup"); // Select an element with an identifier rc-colgroup
if (colgroup) {
  colgroup.children[0].style.width = "20%";
  colgroup.children[1].style.width = "80%";
}

// 200
class Sc200Dsc extends HTMLElement { // Declare a class Sc200Dsc that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.2.1" target="_blank">The request has succeeded.</a>
    `
  }
}
customElements.define("sc-200-dsc", Sc200Dsc); // Define a custom element sc-200-dsc and assign it a class Sc200Dsc
// +
const sc200 = document.getElementById("sc-200"); // Select an element with an identifier sc-200
if (sc200) {
  sc200.innerHTML += `
      <td>
        200
      </td>
      <td class="cell-center">
        <sc-200-dsc></sc-200-dsc>
      </td>
    `
}

// 204
class Sc204Dsc extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.2.5" target="_blank">The request was completed successfully,<br />there is no additional content to send.</a>
    `
  }
}
customElements.define("sc-204-dsc", Sc204Dsc);
// +
const sc204 = document.getElementById("sc-204");
if (sc204) {
  sc204.innerHTML += `
      <td>
        204
      </td>
      <td class="cell-center">
        <sc-204-dsc></sc-204-dsc>
      </td>
    `
}

// 400
class Sc400Dsc extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc7231#section-6.5.1" target="_blank">The server cannot process the request<br />
    because a client error has been detected.</a>
    `
  }
}
customElements.define("sc-400-dsc", Sc400Dsc);
// +
const sc400 = document.getElementById("sc-400");
if (sc400) {
  sc400.innerHTML += `
      <td>
        400
      </td>
      <td class="cell-center">
        <sc-400-dsc></sc-400-dsc>
      </td>
    `
}

// 403
class Sc403Dsc extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc7231#section-6.5.3" target="_blank">The server understood the request<br />
    and does not authorize it.</a>
    `
  }
}
customElements.define("sc-403-dsc", Sc403Dsc);
// +
const sc403 = document.getElementById("sc-403");
if (sc403) {
  sc403.innerHTML += `
      <td>
        403
      </td>
      <td class="cell-center">
        <sc-403-dsc></sc-403-dsc>
      </td>
    `
}

// 404
class Sc404Dsc extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.4.5" target="_blank">The server cannot find the requested resource.</a>
    `
  }
}
customElements.define("sc-404-dsc", Sc404Dsc);
// +
const sc404 = document.getElementById("sc-404");
if (sc404) {
  sc404.innerHTML += `
      <td>
        404
      </td>
      <td class="cell-center">
        <sc-404-dsc></sc-404-dsc>
      </td>
    `
}

// 500
class Sc500Dsc extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.5.1" target="_blank">Internal server error.</a>
    `
  }
}
customElements.define("sc-500-dsc", Sc500Dsc);
// +
const sc500 = document.getElementById("sc-500");
if (sc500) {
  sc500.innerHTML += `
      <td>
        500
      </td>
      <td class="cell-center">
        <sc-500-dsc></sc-500-dsc>
      </td>
    `
}

// Code
class ScCode extends HTMLElement { // Declare a class ScCode that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Code
    `
  }
}
customElements.define("sc-code", ScCode); // Define a custom element sc-code and assign it a class ScCode

// Description
class ScDescription extends HTMLElement { // Declare a class ScDescription that defines a type of logic for a custom element
  connectedCallback() {
    this.innerHTML += `
    Description
    `
  }
}
customElements.define("sc-desc", ScDescription); // Define a custom element sc-desc and assign it a class ScDescription

console.log("api-ref.js is completed")
