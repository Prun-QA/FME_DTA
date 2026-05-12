Feature: Operations test
    Scenario: Verify user can navigate through the session page, view all available session and export session
        Given I am on the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button
        When I enter valid email
        Then I enter valid password
        Then I click on the login button
        Then I should be redirected to the dashboard
        Then The app logo should be visible on the dashboard
        Then I should see the operations profile icon on the dashboard
        When I hover over the operations menu option
        Then I should see and be able to click the sessions option in the dropdown menu
        Then I should be redirected to the sessions page
        Then I should see the current date header on the sessions page
        Then I should see the sessions export button on the sessions page
        Then I should see the sessions all body on the sessions page
        Then I should see the today header on the sessions page
        When I click on the day range option
        Then I should see and be able to click on the last 7 days option
        When I click on the day range option again
        Then I should see and be able to click on the last week option
        When I click on the day range option all again
        Then I should see and be able to click on the last month option
        When I click on the day range option for the last time
        Then I should see and be able to click on the last year option
        Then I should see and be able to click on the add session button
        Then I should be redirected to the add session page
        Then I should see the session title input field on the add session page
        Then I should see the session all day toggle button on the add session page
        Then I should see the do not repeat toggle button on the add session page
        Then I should see the session date input field on the add session page
        Then I should see the session start time input field on the add session page
        Then I should see the session end time input field on the add session page
        Then I should see the session type dropdown field on the add session page
        Then I should see the add participants dropdown field on the add session page
        Then I should see the location type dropdown field on the add session page
        Then I should see the meeting link input field on the add session page
        Then I should see the session description input field on the add session page
        Then I should see the reminder dropdown field on the add session page
        Then I should see the save session button on the add session page
        Then I should see the cancel button on the add session page
        When I click on the cancel button
        Then I should be redirected back to the sessions page
        When I click on the profile tab
        Then I should see the logout option in the dropdown menu
        When I click on the logout option
        Then I should be redirected to the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button
   
   Scenario: Verify user can navigate through the audit log page, view all logs on the table, and export audit log page
        Given I am on the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button
        When I enter valid email
        Then I enter valid password
        Then I click on the login button
        Then I should be redirected to the dashboard
        Then The app logo should be visible on the dashboard
        Then I should see the operations profile icon on the dashboard
        When I hover over the operations menu option
        Then I should see and be able to click the audit log option in the dropdown menu
        Then I should be redirected to the audit log page
        Then I should see the audit log header on the audit log page
        Then I should see and be able to click on the export audit log button on the audit log page
        Then I should see the audit log search input field on the audit log page
        When I type a non existing search term in the audit log search input field 
        Then I should see no results found message on the audit log page
        When I click on the cancel search button
        Then I should see the from date input field on the audit log page
        Then I should see the to date input field on the audit log page
        Then I should see the date stamp header on the audit log page 
        Then I should see the done by header on the audit log page
        Then I should see the action header on the audit log page
        Then I should see the affected user header on the audit log page
        Then I should see the description header on the audit log page
        Then I should see and be able to click on the next page button on the audit log page
        Then I should see and be able to click on the previous page button on the audit log page 
        Then I should be able to select 100 from the rows per page dropdown on the audit log page
        Then I should be able to select 50 from the rows per page dropdown on the audit log page
        Then I should be able to select 25 from the rows per page dropdown on the audit log page
        Then I should be able to select 10 from the rows per page dropdown on the audit log page
        When I click on the profile tab
        Then I should see the logout option in the dropdown menu
        When I click on the logout option
        Then I should be redirected to the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button

   Scenario: Verify user can navigate through the message page, view all message, view unread message, and group message
        Given I am on the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button
        When I enter valid email
        Then I enter valid password
        Then I click on the login button
        Then I should be redirected to the dashboard
        Then The app logo should be visible on the dashboard
        Then I should see the operations profile icon on the dashboard
        When I hover over the operations menu option
        Then I should see and be able to click the messages option in the dropdown menu
        Then I should be redirected to the messages page
        Then I should see the messages search input field on the messages page 
        Then I should see and be able to click on the all message tab on the messages page
        Then I should see and be able to click on the unread message tab on the messages page
        Then I should see and be able to click on the group message tab on the messages page
        When I click on the new message icon
        Then I should be redirected to the new message page
        Then I should see the new message header on the new message page
        Then I should see the search people input field on the new message page
        When I click on the cancel button on the new message page
        Then I should be redirected back to the message page
        When I click on the three dots icon on message page
        Then I should see and be able to click on the new group message option in the dropdown menu
        Then I should be redirected to a form page to create a new group
        Then I should see the new group header on the form page
        Then I should see the group name input field on the form page
        Then I should see the new group description input field on the form page
        Then I should see the add members dropdown field on the form page
        Then I should see the save button on the form page
        Then I should see the cancel button on the form page
        When I click on the cancel button on the form page
        Then I should be redirected back to the messages page
        When I click on the profile tab
        Then I should see the logout option in the dropdown menu
        When I click on the logout option
        Then I should be redirected to the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button
