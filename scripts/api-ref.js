// Terms

// activity_logs
class DtActivityLogs extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    activity_logs <da-boolean/>
    `
  }
}
customElements.define("dt-activity-logs", DtActivityLogs);
// +
class DdActivityLogs extends HTMLElement {
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
customElements.define("dd-activity-logs", DdActivityLogs);

// amenities
class DtAmenities extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    amenities <da-arraystring/>
    `
  }
}
customElements.define("dt-amenities", DtAmenities);
// +
class DdAmenities extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of available useful features and facilities of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-amenities", DdAmenities);

// app_category
class DtAppCategory extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    app_category <da-string/>
    `
  }
}
customElements.define("dt-app-category", DtAppCategory);
// +
class DdAppCategory extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The high-level family of the application.
    `
  }
}
customElements.define("dd-app-category", DdAppCategory);

// assigned_privileges
class DtAssignedPrivileges extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    assigned_privileges <da-arraystring/>
    `
  }
}
customElements.define("dt-assigned-privileges", DtAssignedPrivileges);
// +
class DdAssignedPrivileges extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The privileges this role includes:<ul>
      <li><code>Login</code>: able to log into the Real&Mate and read resources.</li>
      <li><code>CustomizeExecutive</code>: able to customize executive resources.</li>
      <li><code>CustomizeUsers</code>: able to customize users' accounts and their records.</li>
      <li><code>CustomizeSelf</code>: able to change the password for the current user account.</li>
      <li><code>CustomizeComponents</code>: able to customize components managed by this service.</li>
    </ul>
    `
  }
}
customElements.define("dd-assigned-privileges", DdAssignedPrivileges);

// auth_token
class DtAuthToken extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    auth_token <da-string/>
    `
  }
}
customElements.define("dt-auth-token", DtAuthToken);
// +
class DdAuthToken extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A token used for a user authentication.
    `
  }
}
customElements.define("dd-auth-token", DdAuthToken);

// boot
class DtBoot extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    boot <da-object/>
    `
  }
}
customElements.define("dt-boot", DtBoot);
// +
class DdBoot extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Parameters of the boot.
    `
  }
}
customElements.define("dd-boot", DdBoot);

// boot_source_override_enabled
class DtBootSourceOverrideEnabled extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    boot_source_override_enabled <da-string/>
    `
  }
}
customElements.define("dt-boot-source-override-enabled", DtBootSourceOverrideEnabled);
// +
class DdBootSourceOverrideEnabled extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Boot source override configuration:<ul>
      <li><code>once</code>: the option is enabled. The next download will occur from the source specified in <code>boot_source_override_target</code>. The value of <code>boot_source_override_enabled</code> is then reboot back to <code>disabled</code>.</li>
      <li><code>disabled</code>: the option is disabled. Loading will occur according to the selected priority in main configuration.</li>
    </ul>
    `
  }
}
customElements.define("dd-boot-source-override-enabled", DdBootSourceOverrideEnabled);

// boot_source_override_target
class DtBootSourceOverrideTarget extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    boot_source_override_target <da-string/>
    `
  }
}
customElements.define("dt-boot-source-override-target", DtBootSourceOverrideTarget);
// +
class DdBootSourceOverrideTarget extends HTMLElement {
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
customElements.define("dd-boot-source-override-target", DdBootSourceOverrideTarget);

// capitalizedResourceName
class capitalizedResourceName extends HTMLElement {
  connectedCallback() {
    this.innerHTML = document.getElementById("capitalizedResourceName").innerHTML;
  }
}
customElements.define("capitalized-resource-name", capitalizedResourceName);

// comments
class DtComments extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    comments <da-string/>
    `
  }
}
customElements.define("dt-comments", DtComments);
// +
class DdComments extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Additional comments or notes.
    `
  }
}
customElements.define("dd-comments", DdComments);

// communication_plan
class DtCommunicationPlan extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    communication_plan <da-string/>
    `
  }
}
customElements.define("dt-communication-plan", DtCommunicationPlan);
// +
class DdCommunicationPlan extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Strategy for informing users and stakeholders about the reboot.
    `
  }
}
customElements.define("dd-communication-plan", DdCommunicationPlan);

// date_added
class DtDateAdded extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    date_added <da-datetime/>
    `
  }
}
customElements.define("dt-date-added", DtDateAdded);
// +
class DdDateAdded extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The date and time the <resource-name></resource-name> was originally added.
    `
  }
}
customElements.define("dd-date-added", DdDateAdded);

// date_created
class DtDateCreated extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    date_created <da-datetime/>
    `
  }
}
customElements.define("dt-date-created", DtDateCreated);
// +
class DdDateCreated extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The date and time the <resource-name></resource-name> was originally created.
    `
  }
}
customElements.define("dd-date-created", DdDateCreated);

// date_modified
class DtDateModified extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    date_modified <da-date/>
    `
  }
}
customElements.define("dt-date-modified", DtDateModified);
// +
class DdDateModified extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The date the <resource-name></resource-name> was last changed and saved.
    `
  }
}
customElements.define("dd-date-modified", DdDateModified);

// description
class DtDescription extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    description <da-string/>
    `
  }
}
customElements.define("dt-description", DtDescription);
// +
class DdDescription extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An informational representation of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-description", DdDescription);

// documentation_updates
class DtDocumentationUpdates extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    documentation_updates <da-string/>
    `
  }
}
customElements.define("dt-documentation-updates", DtDocumentationUpdates);
// +
class DdDocumentationUpdates extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Updating documentation to reflect changes introduced by the reboot.
    `
  }
}
customElements.define("dd-documentation-updates", DdDocumentationUpdates);

// documentation_url
class DtDocumentationUrl extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    documentation_url <da-string/>
    `
  }
}
customElements.define("dt-documentation-url", DtDocumentationUrl);
// +
class DdDocumentationUrl extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The base URL for the <resource-name></resource-name> documentation.
    `
  }
}
customElements.define("dd-documentation-url", DdDocumentationUrl);

// email
class DtEmail extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    email <da-string/>
    `
  }
}
customElements.define("dt-email", DtEmail);
// +
class DdEmail extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An email address.
    `
  }
}
customElements.define("dd-email", DdEmail);

// enabled
class DtEnabled extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    enabled <da-boolean/>
    `
  }
}
customElements.define("dt-enabled", DtEnabled);
// +
class DdEnabled extends HTMLElement {
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
customElements.define("dd-enabled", DdEnabled);

// end_time
class DtEndTime extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    end_time <da-datetime/>
    `
  }
}
customElements.define("dt-end-time", DtEndTime);
// +
class DdEndTime extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The date and time when the process is expected to be completed.
    `
  }
}
customElements.define("dd-end-time", DdEndTime);

// environment
class DtEnvironment extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    environment <da-arraystring/>
    `
  }
}
customElements.define("dt-environment", DtEnvironment);
// +
class DdEnvironment extends HTMLElement {
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
customElements.define("dd-environment", DdEnvironment);

// first_name
class DtFirstName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    first_name <da-string/>
    `
  }
}
customElements.define("dt-first-name", DtFirstName);
// +
class DdFirstName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A personal name that identifies an individual, as distinct from their last name.
    `
  }
}
customElements.define("dd-first-name", DdFirstName);

// id
class DtId extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    id <da-string/>
    `
  }
}
customElements.define("dt-id", DtId);
// +
class DdId extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The unique identifier of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-id", DdId);

// id (2)
class DtId2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    id <da-string/>
    `
  }
}
customElements.define("dt-id-2", DtId2);
// +
class DdId2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The unique identifier of the <sub-resource-name></sub-resource-name>.
    `
  }
}
customElements.define("dd-id-2", DdId2);

// is_predefined
class DtIsPredefined extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    is_predefined <da-boolean/>
    `
  }
}
customElements.define("dt-is-predefined", DtIsPredefined);
// +
class DdIsPredefined extends HTMLElement {
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
customElements.define("dd-is-predefined", DdIsPredefined);

// impact_assessment
class DtImpactAssessment extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    impact_assessment <da-string/>
    `
  }
}
customElements.define("dt-impact-assessment", DtImpactAssessment);
// +
class DdImpactAssessment extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Evaluation of the potential impact of the reboot on users.
    `
  }
}
customElements.define("dd-impact-assessment", DdImpactAssessment);

// incident_response
class DtIncidentResponse extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    incident_response <da-string/>
    `
  }
}
customElements.define("dt-incident-response", DtIncidentResponse);
// +
class DdIncidentResponse extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Protocol for handling any incidents or issues that may arise during or after the reboot.
    `
  }
}
customElements.define("dd-incident-response", DdIncidentResponse);

// items
class DtItems extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    items <da-object/>
    `
  }
}
customElements.define("dt-items", DtItems);
// +
class DdItems extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Collection items.
    `
  }
}
customElements.define("dd-items", DdItems);

// items_count
class DtItemsCount extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    items_count <da-number/>
    `
  }
}
customElements.define("dt-items-count", DtItemsCount);
// +
class DdItemsCount extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The number of items in the collection.
    `
  }
}
customElements.define("dd-items-count", DdItemsCount);

// language
class DtLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    language <da-string/>
    `
  }
}
customElements.define("dt-language", DtLanguage);
// +
class DdLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A language used for the application. Default: <code>en-US</code>. Example: <code>fr-FR</code>, <code>es-ES</code>.
    `
  }
}
customElements.define("dd-language", DdLanguage);

// language_default
class DtLanguageDefault extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    language_default <da-string/>
    `
  }
}
customElements.define("dt-language-default", DtLanguageDefault);
// +
class DdLanguageDefault extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The default language to be used for the application. Default: <code>en-US</code>. Example: <code>fr-FR</code>, <code>es-ES</code>.
    `
  }
}
customElements.define("dd-language-default", DdLanguageDefault);

// last_name
class DtLastName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    last_name <da-string/>
    `
  }
}
customElements.define("dt-last-name", DtLastName);
// +
class DdLastName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A name that identifies an individual's family, as distinct from their first name.
    `
  }
}
customElements.define("dd-last-name", DdLastName);

// lease_agreement_details
class DtLeaseAgreementDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    lease_agreement_details <da-string/>
    `
  }
}
customElements.define("dt-lease-agreement-details", DtLeaseAgreementDetails);
// +
class DdLeaseAgreementDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The terms and conditions under which the property is leased.
    `
  }
}
customElements.define("dd-lease-agreement-details", DdLeaseAgreementDetails);

// lease_term
class DtLeaseTerm extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    lease_term <da-string/>
    `
  }
}
customElements.define("dt-lease-term", DtLeaseTerm);
// +
class DdLeaseTerm extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The period of the lease.
    `
  }
}
customElements.define("dd-lease-term", DdLeaseTerm);

// license
class DtLicense extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    license <da-string/>
    `
  }
}
customElements.define("dt-license", DtLicense);
// +
class DdLicense extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The permit from an authority to own or use <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-license", DdLicense);

// mainResourceName
class mainResourceName extends HTMLElement {
  connectedCallback() {
    this.innerHTML = document.getElementById("mainResourceName").innerHTML;
  }
}
customElements.define("main-resource-name", mainResourceName);

// maintenance_schedule
class DtMaintenanceSchedule extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    maintenance_schedule <da-arraystring/>
    `
  }
}
customElements.define("dt-maintenance-schedule", DtMaintenanceSchedule);
// +
class DdMaintenanceSchedule extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of all the expected maintenance plans.
    `
  }
}
customElements.define("dd-maintenance-schedule", DdMaintenanceSchedule);

// max_password_length
class DtMaxPasswordLength extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    max_password_length <da-number/>
    `
  }
}
customElements.define("dt-max-password-length", DtMaxPasswordLength);
// +
class DdMaxPasswordLength extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
     Maximum length of password. Default: <code>20</code>.
    `
  }
}
customElements.define("dd-max-password-length", DdMaxPasswordLength);

// max_username_length
class DtMaxUsernameLength extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    max_username_length <da-number/>
    `
  }
}
customElements.define("dt-max-username-length", DtMaxUsernameLength);
// +
class DdMaxUsernameLength extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
     Maximum length of username. Default: <code>20</code>.
    `
  }
}
customElements.define("dd-max-username-length", DdMaxUsernameLength);

// middle_name
class DtMiddleName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    middle_name <da-string/>
    `
  }
}
customElements.define("dt-middle-name", DtMiddleName);
// +
class DdMiddleName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An additional personal name that is placed between a person's first name and their last name.
    `
  }
}
customElements.define("dd-middle-name", DdMiddleName);

// min_password_length
class DtMinPasswordLength extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    min_password_length <da-number/>
    `
  }
}
customElements.define("dt-min-password-length", DtMinPasswordLength);
// +
class DdMinPasswordLength extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
     Minimum length of password. Default: <code>8</code>.
    `
  }
}
customElements.define("dd-min-password-length", DdMinPasswordLength);

// min_username_length
class DtMinUsernameLength extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    min_username_length <da-number/>
    `
  }
}
customElements.define("dt-min-username-length", DtMinUsernameLength);
// +
class DdMinUsernameLength extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
     Minimum length of username. Default: <code>4</code>.
    `
  }
}
customElements.define("dd-min-username-length", DdMinUsernameLength);

// monitoring
class DtMonitoring extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    monitoring <da-string/>
    `
  }
}
customElements.define("dt-monitoring", DtMonitoring);
// +
class DdMonitoring extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Configuration for monitoring the reboot process in real-time.
    `
  }
}
customElements.define("dd-monitoring", DdMonitoring);

// name
class DtName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    name <da-string/>
    `
  }
}
customElements.define("dt-name", DtName);
// +
class DdName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A word or set of words by which the <resource-name></resource-name> is known, addressed and referred to.
    `
  }
}
customElements.define("dd-name", DdName);

// name-2
class DtName2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    name <da-string/>
    `
  }
}
customElements.define("dt-name-2", DtName2);
// +
class DdName2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A name of a person.
    `
  }
}
customElements.define("dd-name-2", DdName2);

// name (3)
class DtName3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    name <da-string/>
    `
  }
}
customElements.define("dt-name-3", DtName3);
// +
class DdName3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A word or set of words by which a <sub-resource-name></sub-resource-name> is known, addressed and referred to.
    `
  }
}
customElements.define("dd-name-3", DdName3);

// notifications
class DtNotifications extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    notifications <da-boolean/>
    `
  }
}
customElements.define("dt-notifications", DtNotifications);
// +
class DdNotifications extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The setting for notifications in the application:<ul>
    <li><code>true</code>: notifications are enabled. Default.</li>
    <li><code>false</code>: notifications are disabled.</li>
    </ul>
    `
  }
}
customElements.define("dd-notifications", DdNotifications);

// notifications_default
class DtNotificationsDefault extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    notifications_default <da-boolean/>
    `
  }
}
customElements.define("dt-notifications-default", DtNotificationsDefault);
// +
class DdNotificationsDefault extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The default setting for notifications in the application:<ul>
    <li><code>true</code>: notifications are enabled. Default.</li>
    <li><code>false</code>: notifications are disabled.</li>
    </ul>
    `
  }
}
customElements.define("dd-notifications-default", DdNotificationsDefault);

// occupancy
class DtOccupancy extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    occupancy <da-number/>
    `
  }
}
customElements.define("dt-occupancy", DtOccupancy);
// +
class DdOccupancy extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The fact of occupying a <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-occupancy", DdOccupancy);

// owner
class DtOwner extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    owner <da-object/>
    `
  }
}
customElements.define("dt-owner", DtOwner);
// +
class DdOwner extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A person or company that owns <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-owner", DdOwner);

// reason
class DtReason extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    reason <da-string/>
    `
  }
}
customElements.define("dt-reason", DtReason);
// +
class DdReason extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A brief description of why the action is considered necessary.
    `
  }
}
customElements.define("dd-reason", DdReason);

// reboot_type
class DtRebootType extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    reboot_type <da-arraystring/>
    `
  }
}
customElements.define("dt-reboot-type", DtRebootType);
// +
class DdRebootType extends HTMLElement {
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
customElements.define("dd-reboot-type", DdRebootType);

// require_two_factor_auth
class DtRequireTwoFactorAuth extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    require_two_factor_auth <da-boolean/>
    `
  }
}
customElements.define("dt-require-two-factor-auth", DtRequireTwoFactorAuth);
// +
class DdRequireTwoFactorAuth extends HTMLElement {
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
customElements.define("dd-require-two-factor-auth", DdRequireTwoFactorAuth);

// resourceName
class resourceName extends HTMLElement {
  connectedCallback() {
    this.innerHTML = document.getElementById("resourceName").innerHTML;
  }
}
customElements.define("resource-name", resourceName);

// password
class DtPassword extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    password <da-string/>
    `
  }
}
customElements.define("dt-password", DtPassword);
// +
class DdPassword extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A secret character combination that must be used to gain admission to the <main-resource-name></main-resource-name>.
    `
  }
}
customElements.define("dd-password", DdPassword);

// password_change_required
class DtPasswordChangeRequired extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    password_change_required <da-boolean/>
    `
  }
}
customElements.define("dt-password-change-required", DtPasswordChangeRequired);
// +
class DdPasswordChangeRequired extends HTMLElement {
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
customElements.define("dd-password-change-required", DdPasswordChangeRequired);

// permissions
class DtPermissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    permissions <da-arraystring/>
    `
  }
}
customElements.define("dt-permissions", DtPermissions);
// +
class DdPermissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of permissions that are available for the user account.
    `
  }
}
customElements.define("dd-permissions", DdPermissions);

// phone
class DtPhone extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    phone <da-string/>
    `
  }
}
customElements.define("dt-phone", DtPhone);
// +
class DdPhone extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A phone number.
    `
  }
}
customElements.define("dd-phone", DdPhone);

// plan
class DtPlan extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    plan <da-object/>
    `
  }
}
customElements.define("dt-plan", DtPlan);
// +
class DdPlan extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A subscription plan.
    `
  }
}
customElements.define("dd-plan", DdPlan);

// plan_features
class DtPlanFeatures extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    plan_features <da-arraystring/>
    `
  }
}
customElements.define("dt-plan-features", DtPlanFeatures);
// +
class DdPlanFeatures extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The list of features included in the subscription plan.
    `
  }
}
customElements.define("dd-plan-features", DdPlanFeatures);

// plan_name
class DtPlanName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    plan_name <da-string/>
    `
  }
}
customElements.define("dt-plan-name", DtPlanName);
// +
class DdPlanName extends HTMLElement {
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
customElements.define("dd-plan-name", DdPlanName);

// plan_price
class DtPlanPrice extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    plan_price <da-number/>
    `
  }
}
customElements.define("dt-plan-price", DtPlanPrice);
// +
class DdPlanPrice extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The price of the subscription plan.
    `
  }
}
customElements.define("dd-plan-price", DdPlanPrice);

// plans
class DtPlans extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    plans <da-arrayobject/>
    `
  }
}
customElements.define("dt-plans", DtPlans);
// +
class DdPlans extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of available subscription plans.
    `
  }
}
customElements.define("dd-plans", DdPlans);

// post_analysis
class DtPostAnalysis extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    post_analysis <da-string/>
    `
  }
}
customElements.define("dt-post-analysis", DtPostAnalysis);
// +
class DdPostAnalysis extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Analysis of the process to identify areas for improvement.
    `
  }
}
customElements.define("dd-post-analysis", DdPostAnalysis);

// post_reboot_verification
class DtPostRebootVerification extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    post_reboot_verification <da-string/>
    `
  }
}
customElements.define("dt-post-reboot-verification", DtPostRebootVerification);
// +
class DdPostRebootVerification extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Verification steps to confirm that the reboot was successful and the application is operating as expected.
    `
  }
}
customElements.define("dd-post-reboot-verification", DdPostRebootVerification);

// preferences
class DtPreferences extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    preferences <da-object/>
    `
  }
}
customElements.define("dt-preferences", DtPreferences);
// +
class DdPreferences extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of user preferences.
    `
  }
}
customElements.define("dd-preferences", DdPreferences);

// processing_timeout
class DtProcessingTimeout extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    processing_timeout <da-boolean/>
    `
  }
}
customElements.define("dt-processing-timeout", DtProcessingTimeout);
// +
class DdProcessingTimeout extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An indication of whether the processing timeout is set:
      <ul>
        <li><code>true</code>: the processing timeout is set.</li>
        <li><code>false</code>: the processing timeout is not set.</li>
      </ul>
    Default processing timeout: 30 seconds.
    `
  }
}
customElements.define("dd-processing-timeout", DdProcessingTimeout);

// property_address
class DtPropertyAddress extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    property_address <da-string/>
    `
  }
}
customElements.define("dt-property-address", DtPropertyAddress);
// +
class DdPropertyAddress extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The address of this property.
    `
  }
}
customElements.define("dd-property-address", DdPropertyAddress);

// property_id
class DtPropertyId extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    property_id <da-string/>
    `
  }
}
customElements.define("dt-property-id", DtPropertyId);
// +
class DdPropertyId extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The unique identifier of the property.
    `
  }
}
customElements.define("dd-property-id", DdPropertyId);

// property_size
class DtPropertySize extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    property_size <da-string/>
    `
  }
}
customElements.define("dt-property-size", DtPropertySize);
// +
class DdPropertySize extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The size of this property.
    `
  }
}
customElements.define("dd-property-size", DdPropertySize);

// property_type
class DtPropertyType extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    property_type <da-string/>
    `
  }
}
customElements.define("dt-property-type", DtPropertyType);
// +
class DdPropertyType extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The type of this property.
    `
  }
}
customElements.define("dd-property-type", DdPropertyType);

// real_estate_objects
class DtRealEstateObjects extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    real_estate_objects <da-object/>
    `
  }
}
customElements.define("dt-real-estate-objects", DtRealEstateObjects);
// +
class DdRealEstateObjects extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A collection of references to real estate objects.
    `
  }
}
customElements.define("dd-real-estate-objects", DdRealEstateObjects);

// rentable_area
class DtRentableArea extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    rentable_area <da-string/>
    `
  }
}
customElements.define("dt-rentable-area", DtRentableArea);
// +
class DdRentableArea extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The amount of space that is allocated to a tenant.<br/>It can be used to calculate the total rent owed by the tenant to the landlord.
    `
  }
}
customElements.define("dd-rentable-area", DdRentableArea);

// rental_price
class DtRentalPrice extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    rental_price <da-string/>
    `
  }
}
customElements.define("dt-rental-price", DtRentalPrice);
// +
class DdRentalPrice extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A rental price of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-rental-price", DdRentalPrice);

// role_name
class DtRoleName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    role_name <da-string/>
    `
  }
}
customElements.define("dt-role-name", DtRoleName);
// +
class DdRoleName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A name of the specific role within the Real&Mate.
    `
  }
}
customElements.define("dd-role-name", DdRoleName);

// roles
class DtRoles extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    roles <da-object/>
    `
  }
}
customElements.define("dt-roles", DtRoles);
// +
class DdRoles extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Roles assigned to users within the application.
    `
  }
}
customElements.define("dd-roles", DdRoles);

// rollback_plan
class DtRollbackPlan extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    rollback_plan <da-string/>
    `
  }
}
customElements.define("dt-rollback-plan", DtRollbackPlan);
// +
class DdRollbackPlan extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A plan outlining steps to revert to the previous state in case of any issues during the reboot process.
    `
  }
}
customElements.define("dd-rollback-plan", DdRollbackPlan);

// security_deposit
class DtSecurityDeposit extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    security_deposit <da-string/>
    `
  }
}
customElements.define("dt-security-deposit", DtSecurityDeposit);
// +
class DdSecurityDeposit extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A sum of money held in trust.
    `
  }
}
customElements.define("dd-security-deposit", DdSecurityDeposit);

// security_settings
class DtSecuritySettings extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    security_settings <da-object/>
    `
  }
}
customElements.define("dt-security-settings", DtSecuritySettings);
// +
class DdSecuritySettings extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
     Settings related to security.
    `
  }
}
customElements.define("dd-security-settings", DdSecuritySettings);

// service_enabled
class DtServiceEnabled extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    service_enabled <da-boolean/>
    `
  }
}
customElements.define("dt-service-enabled", DtServiceEnabled);
// +
class DdServiceEnabled extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An indication of whether the <resource-name></resource-name> is enabled:
      <ul>
        <li><code>true</code>: the service is enabled.</li>
        <li><code>false</code>: the service is disabled.</li>
      </ul>
    Enabled means the system will run the service on the next boot. So if you enable a service, you still need to manually start it, or reboot and it will start.
    `
  }
}
customElements.define("dd-service-enabled", DdServiceEnabled);

// show_plans_modal_window
class DtShowPlansModalWindow extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    show_plans_modal_window <da-boolean/>
    `
  }
}
customElements.define("dt-show-plans-modal-window", DtShowPlansModalWindow);
// +
class DdShowPlansModalWindow extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An indication of whether to display a modal window for subscription plans:
      <ul>
        <li><code>true</code>: modal window is displayed. Default.</li>
        <li><code>false</code>: modal window is not displayed.</li>
      </ul>
    `
  }
}
customElements.define("dd-show-plans-modal-window", DdShowPlansModalWindow);

// show_plans_modal_window_repeat_after
class DtShowPlansModalWindowRepeatAfter extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    show_plans_modal_window_repeat_after <da-number/>
    `
  }
}
customElements.define("dt-show-plans-modal-window-repeat-after", DtShowPlansModalWindowRepeatAfter);
// +
class DdShowPlansModalWindowRepeatAfter extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The number of days after which the subscription plans modal window should be displayed again. Default: <code>30</code>.
    `
  }
}
customElements.define("dd-show-plans-modal-window-repeat-after", DdShowPlansModalWindowRepeatAfter);

// start_time
class DtStartTime extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    start_time <da-datetime/>
    `
  }
}
customElements.define("dt-start-time", DtStartTime);
// +
class DdStartTime extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The date and time when the process is scheduled to begin.
    `
  }
}
customElements.define("dd-start-time", DdStartTime);

// subResourceName
class subResourceName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += document.getElementById("subResourceName").innerHTML;
  }
}
customElements.define("sub-resource-name", subResourceName);

// subscription_management
class DtSubscriptionManagement extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    subscription_management <da-object/>
    `
  }
}
customElements.define("dt-subscription-management", DtSubscriptionManagement);
// +
class DdSubscriptionManagement extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Settings related to subscription management.
    `
  }
}
customElements.define("dd-subscription-management", DdSubscriptionManagement);

// tags
class DtTags extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    tags <da-arraystring/>
    `
  }
}
customElements.define("dt-tags", DtTags);
// +
class DdTags extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Labels attached to the <resource-name></resource-name> for the purpose of identification or to add an extra level of description.
    `
  }
}
customElements.define("dd-tags", DdTags);

// tenant
class DtTenant extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    tenant <da-object/>
    `
  }
}
customElements.define("dt-tenant", DtTenant);
// +
class DdTenant extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A person who rents a property from a landlord.
    `
  }
}
customElements.define("dd-tenant", DdTenant);

// testing_procedures
class DtTestingProcedures extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    testing_procedures <da-string/>
    `
  }
}
customElements.define("dt-testing-procedures", DtTestingProcedures);
// +
class DdTestingProcedures extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Procedures for testing the application after the reboot to ensure proper functionality and performance.
    `
  }
}
customElements.define("dd-testing-procedures", DdTestingProcedures);

// time_zone
class DtTimeZone extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    time_zone <da-string/>
    `
  }
}
customElements.define("dt-time-zone", DtTimeZone);
// +
class DdTimeZone extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The time zone used for the application. Default: <code>America/New_York</code>. Example: <code>Europe/Paris</code>, <code>Asia/Tokyo</code>.
    `
  }
}
customElements.define("dd-time-zone", DdTimeZone);

// time_zone_default
class DtTimeZoneDefault extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    time_zone_default <da-string/>
    `
  }
}
customElements.define("dt-time-zone-default", DtTimeZoneDefault);
// +
class DdTimeZoneDefault extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The default time zone to be used for the application. Default: <code>America/New_York</code>. Example: <code>Europe/Paris</code>, <code>Asia/Tokyo</code>.
    `
  }
}
customElements.define("dd-time-zone-default", DdTimeZoneDefault);

// two_factor_auth
class DtTwoFactorAuth extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    two_factor_auth <da-boolean/>
    `
  }
}
customElements.define("dt-two-factor-auth", DtTwoFactorAuth);
// +
class DdTwoFactorAuth extends HTMLElement {
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
customElements.define("dd-two-factor-auth", DdTwoFactorAuth);

// url
class DtUrl extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    url <da-string/>
    `
  }
}
customElements.define("dt-url", DtUrl);
// +
class DdUrl extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Resource URL.
    `
  }
}
customElements.define("dd-url", DdUrl);

// username
class DtUsername extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    username <da-string/>
    `
  }
}
customElements.define("dt-username", DtUsername);
// +
class DdUsername extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An identifier used by a person with an access to the <main-resource-name></main-resource-name>.
    `
  }
}
customElements.define("dd-username", DdUsername);

// utilities
class DtUtilities extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    utilities <da-arraystring/>
    `
  }
}
customElements.define("dt-utilities", DtUtilities);
// +
class DdUtilities extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of available utilities:
    <ul>
      <li><b>Electric power</b>.</li>
      <li><b>Natural gas</b>.</li>
      <li><b>Sewerage</b>.</li>
      <li><b>Cold water</b>.</li>
      <li><b>Hot water</b>.</li>
    </ul>
    `
  }
}
customElements.define("dd-utilities", DdUtilities);

// version
class DtVersion extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    version <da-string/>
    `
  }
}
customElements.define("dt-version", DtVersion);
// +
class DdVersion extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A serial number of the <resource-name></resource-name> particular form differing in certain respects from an earlier form of it.
    `
  }
}
customElements.define("dd-version", DdVersion);

const dd = document.getElementsByTagName("dd");
const dl = document.getElementsByTagName("dl");
for (let x of dd) {
  for (let y of dl) {
    if (x.contains(y) == true) {
      x.style.marginBottom = "0";
    }
  }
}
const ul = document.getElementsByTagName("ul");
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
class THTTPCode200 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    HTTP Code: 200
    `
  }
}
customElements.define("t-http-code-200", THTTPCode200);

// Request body
class TRequestBody extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Request Body
    `
  }
}
customElements.define("t-request-body", TRequestBody);

// Request headers
class TRequestHeaders extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    Request Headers
    `
  }
}
customElements.define("t-request-headers", TRequestHeaders);

// Response body
class TResponseBody extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Response Body
    `
  }
}
customElements.define("t-response-body", TResponseBody);

// Response codes
class TResponseCodes extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Response Codes
    `
  }
}
customElements.define("t-response-codes", TResponseCodes);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DAta types

// array[bigint]
class DtArrayBigint extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[bigint]</dataType>
    `
  }
}
customElements.define("da-arraybigint", DtArrayBigint);

// array[date]
class DtArrayDate extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[date]</dataType>
    `
  }
}
customElements.define("da-arraydate", DtArrayDate);

// array[number]
class DtArrayNumber extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[number]</dataType>
    `
  }
}
customElements.define("da-arraynumber", DtArrayNumber);

// array[object]
class DtArrayObject extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[object]</dataType>
    `
  }
}
customElements.define("da-arrayobject", DtArrayObject);

// array[string]
class DtArrayString extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[string]</dataType>
    `
  }
}
customElements.define("da-arraystring", DtArrayString);

// bigint
class DtBigint extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>bigint</dataType>
    `
  }
}
customElements.define("da-bigint", DtBigint);

// boolean
class DtBoolean extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>boolean</dataType>
    `
  }
}
customElements.define("da-boolean", DtBoolean);

// date
class DtDate extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>date</dataType>
    `
  }
}
customElements.define("da-date", DtDate);

// datetime
class DtDateTime extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>datetime</dataType>
    `
  }
}
customElements.define("da-datetime", DtDateTime);

// number
class DtNumber extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>number</dataType>
    `
  }
}
customElements.define("da-number", DtNumber);

// object
class DtObject extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>object</dataType>
    `
  }
}
customElements.define("da-object", DtObject);

// string
class DtString extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>string</dataType>
    `
  }
}
customElements.define("da-string", DtString);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Response Codes

// Column rules

const colgroup = document.getElementById("rc-colgroup");
if (colgroup != null) {
  colgroup.children[0].style.width = "20%";
  colgroup.children[1].style.width = "80%";
}

// 200
class Sc200 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.2.1" target="_blank">The request has succeeded.</a>
    `
  }
}
customElements.define("sc-200", Sc200);

// 204
class Sc204 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.2.5" target="_blank">The request was completed successfully,<br />there is no additional content to send.</a>
    `
  }
}
customElements.define("sc-204", Sc204);

// 400
class Sc400 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc7231#section-6.5.1" target="_blank">The server cannot process the request<br />
    because a client error has been detected.</a>
    `
  }
}
customElements.define("sc-400", Sc400);

// 403
class Sc403 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc7231#section-6.5.3" target="_blank">The server understood the request<br />
    and does not authorize it.</a>
    `
  }
}
customElements.define("sc-403", Sc403);

// 404
class Sc404 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.4.5" target="_blank">The server cannot find the requested resource.</a>
    `
  }
}
customElements.define("sc-404", Sc404);

// 500
class Sc500 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.5.1" target="_blank">Internal server error.</a>
    `
  }
}
customElements.define("sc-500", Sc500);

// Code
class ScCode extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Code
    `
  }
}
customElements.define("sc-code", ScCode);

// Description
class ScDescription extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Description
    `
  }
}
customElements.define("sc-desc", ScDescription);

console.log("api-ref.js is completed")
