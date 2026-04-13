
Feature: Programs test

        Scenario: Verify user can perform operations on institution page
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
                Then I should see the programs profile icon on the dashboard
                When I hover over the programs menu option
                Then I should see and be able to click the institutions option in the dropdown menu
                Then I should be redirected to the institutions page
                Then I should see the institutions page heading
                Then I should see and be able to click on the institutions export button
                Then I should see the search input field on the institutions page
                When I click and type a non existing institutions name
                Then I should see a message indicating no results found on the institutions page
                Then I should see a cancel search button
                When I click on the cancel search button
                Then I should see multiple rows of data in the institutions table
                Then I should see atleast 1 header column in the institutions table
                Then I should see atleast 1 data cell in the institutions table
                Then I should see content in the first data cell of the institutions table
                Then I should see the institutions name header in the institutions table
                Then I should see the institutions total centers header in the institutions table
                Then I should see the institutions learners header in the institutions table
                Then I should see the institutions ratings header in the institutions table
                Then I should see the institutions status header in the institutions table
                Then I should see and be able to click on the institutions add button
                Then I should see and be able to click on the add institution from the dropdown menu
                Then I should be redirected to the add institution page
                Then I should see and be able to click on the select an institution field
                Then I should see the institution name input field
                Then I should see the description textarea field
                Then I should see the institution location textarea field
                Then I should see the institution email input field
                Then I should see the institution phone number input field
                Then I should see the institution website input field
                Then I should see the institution accreditation number input field
                Then I should see the institution accreditation date input field
                Then I should see institution logo upload button
                Then I should see the institution submit button
                Then I should see the institution cancel button
                When I click on the institution cancel button
                Then I should be redirected back to the institutions page
                Then I should see and be able to click on the institution next page button
                Then I should see and be able to click on the institution previous page button
                Then I should be able to click and select 100 on the rows per page dropdown
                Then I should be able to click and select 50 on the rows per page dropdown
                Then I should be able to click and select 25 on the rows per page dropdown
                Then I should be able to click and select 10 on the rows per page dropdown
                When I click on the profile tab
                Then I should see the logout option in the dropdown menu
                When I click on the logout option
                Then I should be redirected to the login page
                Then I should see the login body
                Then I should see a welcome message
                Then I should see the toggle password visibility button
                Then I should see the forgot password link
                Then I should see the login button

        Scenario: Verify user can perform operations on skill areas page
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
                Then I should see the programs profile icon on the dashboard
                When I hover over the programs menu option
                Then I should see and be able to click the skill areas option in the dropdown menu
                Then I should be redirected to the skill areas page
                Then I should see the skill areas page heading
                Then I should see and be able to click on the skill areas export button
                Then I should see the total skill areas count
                Then I should see the active skill areas count
                Then I should see the total enrolled count
                Then I should see the average completion rate
                Then I should see and be able to type a non existing skill area name in the search input field
                Then I should see a message indicating no results found on the skill areas page
                Then I should see and click cancel search button on the skill area page
                When I type a valid skill area name in the search input field
                Then I should see the skill area in the skill areas table
                When I clear the search input field
                Then I should see multiple rows of data in the skill areas table
                Then I should see atleast 1 header column in the skill areas table
                Then I should see atleast 1 data cell in the skill areas table
                Then I should see content in the first data cell of the skill areas table
                Then I should see and be able to click on the skill areas add button
                Then I should see the add skill area modal headers
                Then I should see the skill area name input field
                Then I should see the skill area platform dropdown field
                Then I should see the skill area description textarea field
                Then I should see the skill area add beginner course button
                Then I should see the skill area add intermediate course button
                Then I should see the skill area add advanced course button
                Then I should see the skill area save button
                Then I should see the skill area cancel button
                When I click on the skill area cancel button
                Then I should be redirected back to the skill areas page
                Then I should see and be able to click on the skill areas next page button
                Then I should see and be able to click on the skill areas previous page button
                Then I should be able to click and select 100 on the rows per page dropdown on skill areas
                Then I should be able to click and select 50 on the rows per page dropdown on skill areas
                Then I should be able to click and select 25 on the rows per page dropdown on skill areas
                Then I should be able to click and select 10 on the rows per page dropdown on skill areas
                When I click on the profile tab
                Then I should see the logout option in the dropdown menu
                When I click on the logout option
                Then I should be redirected to the login page
                Then I should see the login body
                Then I should see a welcome message
                Then I should see the toggle password visibility button
                Then I should see the forgot password link
                Then I should see the login button
        
        Scenario: Verify user can perform operations on questions page
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
                Then I should see the programs profile icon on the dashboard
                When I hover over the programs menu option
                Then I should see and be able to click the questions option in the dropdown menu
                Then I should be redirected to the question management page
                Then I should see the questions dashboard header
                Then I should see the questions summary header
                Then I should see the total questions count
                Then I should see the total attempts count
                Then I should see the questions performance percentage
                Then I should see the total passed count
                Then I should see the total failed count
                Then I should see the psychometric header
                Then I should see the psychometric total questions count
                Then I should see the psychometric total attempts count
                Then I should see the psychometric performance percentage
                Then I should see the psychometric view details button
                When I click on the psychometric view details button
                Then I should see the psychometric details modal header
                Then I should see and be able to click on the psychometric details export button
                Then I should see the psychometric details question map button
                Then I should see the psychometric details add question button
                Then I should see the psychometric details search input field
                Then I should see the psychometric question title header in the psychometric details table
                Then I should see the psychometric question type header in the psychometric details table
                Then I should see the psychometric performance header in the psychometric details table
                Then I should see the psychometric status header in the psychometric details table
                Then I should see the psychometric points header in the psychometric details table
                Then I should see and be able to click on the psychometric details next page button
                Then I should see and be able to click on the psychometric details previous page button
                Then I should be able to click and select 100 on the rows per page dropdown on psychometric details
                Then I should be able to click and select 50 on the rows per page dropdown on psychometric details
                Then I should be able to click and select 25 on the rows per page dropdown on psychometric details
                Then I should be able to click and select 10 on the rows per page dropdown on psychometric details
                Then I should be able to go back to the previous page using the back button on the browser
                Then I should see the psychometric add question button on the question management page
                Then I should see the skill assessment header
                Then I should see the skill assessment total questions count
                Then I should see the skill assessment total attempts count
                Then I should see the skill assessment performance percentage
                Then I should see the skill assessment view details button
                When I click on the skill assessment view details button
                Then I should see the skill assessment search input field
                Then I should see the skill assessment add questions button enabled
                Then I should see the skill assessment learning stack header in the skill assessment details table
                Then I should see the skill assessment total questions header in the skill assessment details table
                Then I should see the skill assessment attempts header in the skill assessment details table
                Then I should see the skill assessment average performance header in the skill assessment details table
                Then I should see the skill assessment date stamp header in the skill assessment details table
                Then I should be able to see and click on the skill assessment details next page button
                Then I should see and be able to click on the skill assessment details previous page button
                Then I should be able to click and select 100 on the rows per page dropdown on skill assessment details
                Then I should be able to click and select 50 on the rows per page dropdown on skill assessment details
                Then I should be able to click and select 25 on the rows per page dropdown on skill assessment details
                Then I should be able to click and select 10 on the rows per page dropdown on skill assessment details
                When I click on the profile tab
                Then I should see the logout option in the dropdown menu
                When I click on the logout option
                Then I should be redirected to the login page
                Then I should see the login body
                Then I should see a welcome message
                Then I should see the toggle password visibility button
                Then I should see the forgot password link
                Then I should see the login button
        
        Scenario: Verify user can perform operations on pre-assessment page
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
                Then I should see the programs profile icon on the dashboard
                When I hover over the programs menu option
                Then I should see and be able to click the preassessment option in the dropdown menu
                Then I should be redirected to the preassessment page
                Then I should see preassessment dashboard header
                Then I should see and be able to click on the preassessment export button
                Then I should see the preassessment add new batch button
                Then I should see the preassessment search input field
                When I click and type a non-existing batch name in the preassessment search input field
                Then I should see a message indicating no results found on the preassessment page
                Then I should see and click cancel search button on the preassessment page
                Then I should see the preassessment table batch name header
                Then I should see the preassessment table batch creator header
                Then I should see the preassessment table date stamp header
                Then I should see the preassessment table psychometric header
                Then I should see the preassessment table skill assessment header
                Then I should see the preassessment table minimum score header
                Then I should see the preassessment table performance header
                Then I should see the preassessment table status header
                Then I should see and be able to click on the preassessment table next page button
                Then I should see and be able to click on the preassessment table previous page button
                Then I should be able to click and select 100 on the rows per page dropdown on preassessment page
                Then I should be able to click and select 50 on the rows per page dropdown on preassessment page
                Then I should be able to click and select 25 on the rows per page dropdown on preassessment page
                Then I should be able to click and select 10 on the rows per page dropdown on preassessment page
                Then I should be able to click on a preassessment batch option button
                Then I should be able to see and select view details from the dropdown menu of the preassessment batch option button
                Then I should see the preassessment batch total usage count
                Then I should see the preassessment batch performance rate
                Then I should see the preassessment batch total questions count
                Then I should see the preassessment batch unique questions count
                Then I should see the preassessment batch performance trend header
                Then I should see the preassessment batch question distribution header
                Then I should be able to go back to the previous page using the back button on the browser
                When I click on the preassessment batch option button again
                Then I should see and be able to click on preassessment edit batch option
                Then I should be redirected to the preassessment edit batch page
                Then I should see the preassessment edit batch name header
                Then I should see the preassessment details header
                Then I should see the preassessment title field
                Then I should see the preassessment duration field
                Then I should see the preassessment psychometric questions count field
                Then I should see the preassessment skill assessment questions count field
                Then I should see the preassessment intermediate score from field
                Then I should see the preassessment intermediate score to field
                Then I should see the preassessment advanced score from field
                Then I should see the preassessment advanced score to field
                Then I should see the preassessment update batch button
                Then I should see the preassessment edit batch cancel button
                When I click on the preassessment edit batch cancel button
                Then I should be redirected back to the preassessment page
                When I click on the profile tab
                Then I should see the logout option in the dropdown menu
                When I click on the logout option
                Then I should be redirected to the login page
                Then I should see the login body
                Then I should see a welcome message
                Then I should see the toggle password visibility button
                Then I should see the forgot password link
                Then I should see the login button




