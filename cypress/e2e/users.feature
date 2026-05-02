
Feature: Users Test

    Scenario: Verify user can perform operations on learners page
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
        Then I should see the user profile icon on the dashboard
        When I hover over the users menu option
        Then I should see and be able to click the learners option in the dropdown menu
        Then I should be redirected to the learners page
        Then I should see the learners dashboard heading
        Then I should see an export button on the learners page
        Then I should see the learners table on the learners page
        Then I should see more than 1 learners in the learners table
        Then I should see atleast 1 header column in the learners table
        Then I should see atleast 1 data cell in the learners table
        Then I should see content in the first data cell of the learners table
        Then I should see content in the second data cell of the learners table
        Then I should be able to click and select 25 from the row per page dropdown
        Then I should be able to click and select 50 from the row per page dropdown
        Then I should be able to click and select 100 from the row per page dropdown
        Then I should see the all learners tab
        When I click on the all learners tab
        Then I should see the all learners next page button
        Then I can click on the all learners next page button
        Then I should see the all learners previous page button
        Then I can click on the all learners previous page button
        When I click on the active learners tab
        Then I should see the active learners next page button
        Then I can click on the active learners next page button
        Then I should see the active learners previous page button
        Then I can click on the active learners previous page button
        When I click on the inactive learners tab
        Then I should see the inactive learners next page button
        Then I can click on the inactive learners next page button
        Then I should see the inactive learners previous page button
        Then I can click on the inactive learners previous page button
        When I click on the disabled learners tab
        Then I should see the disabled learners next page button
        Then I can click on the disabled learners next page button
        Then I should see the disabled learners previous page button
        Then I can click on the disabled learners previous page button
        Then I should be able to click on the alumni learners tab
        When I click on the search input field
        Then I enter a non existing learner name inside the search input field
        Then I should see a message indicating no results found
        Then I should see a cancel search button
        When I click on the cancel search button
        Then I should see the learners table with all learners data
        When I click on the platform dropdown filter
        Then I should see a list of platforms in the dropdown filter
        Then I should be able to select a coursera from the dropdown filter
        When I click on the platform dropdown filter again
        Then I should be able to select pluralsight from the dropdown filter
        When I click on the profile tab
        Then I should see the logout option in the dropdown menu
        When I click on the logout option
        Then I should be redirected to the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button

Scenario: Verify user can perform operations on facilitators page
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
        Then I should see the user profile icon on the dashboard
        When I hover over the users menu option
        Then I should see and be able to click the facilitators option in the dropdown menu
        Then I should see the facilitators dashboard heading
        Then I should see and be able to click the facilitators export button
        Then I should see the add facilitators button
        When I click on the add facilitators button
        Then I should see the invite new facilitator header
        Then I should fill facilitators first name input field
        Then I should fill facilitators middle name input field
        Then I should fill facilitators last name input field
        Then I should fill facilitators description input field
        Then I should fill facilitators email input field
        Then I should fill facilitators phone number input field
        When I click on the institution dropdown field
        Then I should be able to select an institution from the dropdown field
        When I click on the training center dropdown field
        Then I should be able to select a training center from the dropdown field
        Then I should see the facilitators discard invite button
        Then I should see the facilitators send button
        When I click on the facilitators send button
        Then I should see a success message indicating invite sent successfully
        Then I should see and be able to click on the okay thanks button in the success message on the facilitators invite page
        Then I should be redirected back to the facilitators page again
        Then I should see the new facilitator in the list
        Then I should see the search input field on the facilitators page
        When I click and type a non existing facilitators
        Then I should see a message indicating no results found
        Then I should see a cancel search button
        When I click on the cancel search button
        Then I should see the facilitators table with all facilitators data
        Then I should see more than 1 facilitator in the facilitators table
        Then I should see atleast 1 header column in the facilitators table
        Then I should see atleast 1 data cell in the facilitators table
        Then I should see the filter facilitators button
        When I click on the filter facilitators button
        Then I should see a list of status options in the dropdown filter
        Then I should be able to see and select active from the dropdown filter
        Then I should see the active facilitators next page button
        Then I can click on the active facilitators next page button
        Then I should see the active facilitators previous page button
        Then I can click on the active facilitators previous page button
        When I click on the filter facilitators button again
        Then I should be able to see and select inactive from the dropdown filter
        When I click on the filter facilitators button again
        Then I should be able to see and select all from the dropdown filter
        Then I should see the all facilitators next page button
        Then I can click on the all facilitators next page button
        Then I should see the all facilitators previous page button
        Then I can click on the all facilitators previous page button
        Then I should be able to click and select 25 from the row per page dropdown
        Then I should be able to click and select 50 from the row per page dropdown
        Then I should be able to click and select 100 from the row per page dropdown
        When I click on the facilitators profile button
        Then I click on view profile option in the dropdown menu
        Then I should see the facilitator profile page
        Then I should see the facilitator profile header
        Then I should see the facilitator recent activities section
        Then I should see the facilitator overview section
        Then I should see the student section
        Then I should see the schedule section
        When I click on the facilitator profile back button
        Then I should be redirected back to the facilitators page
        When I click in the facilitators profile button again
        Then I click on the edit details option in the dropdown menu
        Then I should see the facilitator email section
        Then I should see the facilitator discard changes button
        Then I should see the facilitator update details button
        When I click on the facilitator update details button
        Then I should see a success message indicating details updated successfully
        Then I should see and be able to click on the okay thanks button in the success message
        Then I should be redirected back to the facilitators page yet again
        When I click on the profile tab
        Then I should see the logout option in the dropdown menu
        When I click on the logout option
        Then I should be redirected to the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button

Scenario: Verify user can perform operations on mentors page
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
        Then I should see the user profile icon on the dashboard
        When I hover over the users menu option
        Then I should see and be able to click the mentors option in the dropdown menu
        Then I should be redirected to the mentors page
        Then I should see the mentors dashboard heading
        Then I should see and be able to click the mentors export button
        Then I should see the add mentors button
        When I click on the add mentors button
        Then I should see the invite new mentor header
        Then I should fill mentors first name input field
        Then I should fill mentors middle name input field
        Then I should fill mentors last name input field
        Then I should fill mentors description input field
        Then I should fill mentors email input field
        Then I should fill mentors phone number input field
        When I click on the mentors institution dropdown field
        Then I should be able to search for an institution
        Then I should be able to select an institution from the dropdown field on the mentors invite page
        When I click on the mentors training center dropdown field
        Then I should be able to select a training center from the dropdown field on the mentors invite page
        Then I should see the mentors discard invite button
        Then I should see the mentors send invite button
        When I click on the mentors send invite button
        Then I should see a success message indicating invitation sent successfully on the mentors invite page
        Then I should see and be able to click on the okay thanks button in the success message on the mentors invite page
        Then I should be redirected back to the mentors page again
        Then I should see the new mentor in the list
        Then I should see the search input field on the mentors page
        When I click and type a non existing mentor
        Then I should see a message indicating no results found
        Then I should see a cancel search button
        When I click on the cancel search button
        # Then I should see the mentors table with all mentors data
        Then I should see more than 1 mentor in the mentors table
        Then I should see atleast 1 header column in the mentors table
        Then I should see atleast 1 data cell in the mentors table
        Then I should see the filter mentors button
        When I click on the filter mentors button
        Then I should see a list of mentors status options in the dropdown filter
        Then I should be able to see and select active from the mentors dropdown filter
        # Then I should see the active mentors next page button
        # Then I can click on the active mentors next page button
        # Then I should see the active mentors previous page button
        # Then I can click on the active mentors previous page button
        When I click on the filter mentors button again
        Then I should be able to see and select inactive from the mentors dropdown filter
        # Then I should see the inactive mentors next page button
        # Then I can click on the inactive mentors next page button
        # Then I should see the inactive mentors previous page button
        # Then I can click on the inactive mentors previous page button
        When I click on the filter mentors button again
        Then I should be able to see and select disabled from the dropdown filter
        # Then I should see the disabled mentors next page button
        # Then I can click on the disabled mentors next page button
        # Then I should see the disabled mentors previous page button
        # Then I can click on the disabled mentors previous page button
        When I click on the filter mentors button again
        Then I should be able to see and select all from the mentors dropdown filter
        Then I should see the all mentors next page button
        Then I can click on the all mentors next page button
        Then I should see the all mentors previous page button
        Then I can click on the all mentors previous page button
        When I click on the mentors options button
        Then I click on the view profile option in the dropdown menu
        Then I should see the mentors profile page
        Then I should see the mentors profile header
        Then I should see the mentors recent activities section
        Then I should see the mentors overview section
        Then I should see the mentee details section
        Then I should see the schedules section
        Then I should see the outcomes section
        Then I should see the feedback section
        When I click on the mentors profile back button
        Then I should be redirected back to the mentors page
        When I click in the mentors options button again
        Then I click on the edit details option in the mentors dropdown menu
        Then I should see the mentors email section
        Then I should see the mentors discard changes button
        Then I should see the mentors update details button
        When I click on the mentors update details button
        Then I should see a mentors success message indicating details updated successfully
        Then I should see and be able to click on the okay thanks button in the success message
        Then I should be redirected back to the mentors page again
        When I click on the profile tab
        Then I should see the logout option in the dropdown menu
        When I click on the logout option
        Then I should be redirected to the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button
@only
Scenario: Verify user can perform operations on admissions queue page
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
        Then I should see the user profile icon on the dashboard
        When I hover over the users menu option
        Then I should see and be able to click the admission queue option in the dropdown menu
        Then I should be redirected to the admission queue page
        Then I should see the admission queue dashboard heading
        Then I should see the admission queue record count
        Then I should see and be able to click on the admission queue export button
        Then I should see the search input field on the admission queue page
        When I click and type a non existing admission name
        Then I should see a message indicating no results found on the admission queue page
        Then I should see a cancel search button
        When I click on the cancel search button
        Then I should see the admission queue table headers
        Then I should see multiple rows of data in the admission queue table
        Then I should see atleast 1 header column in the admission queue table
        Then I should see atleast 1 data cell in the admission queue table
        Then I should see content in the first data cell of the admission queue table
        Then I should see the admission queue number header column
        Then I should see the admission queue student header column
        Then I should see the admission queue skill area header column
        Then I should see the admission queue skill assessment header column
        Then I should see the admission queue psychometric header column
        Then I should see the admission queue date header column
        Then I should see the admission queue rows per page dropdown
        Then I should be able to click and select 100 from the admission queue rows per page dropdown
        Then I should be able to click and select 50 from the admission queue rows per page dropdown
        Then I should be able to click and select 25 from the admission queue rows per page dropdown
        Then I should be able to click and select 10 from the admission queue rows per page dropdown
        Then I should see the admission queue next page button
        Then I can click on the admission queue next page button
        Then I should see the admission queue previous page button
        Then I can click on the admission queue previous page button
        When I click on the admission queue options button
        Then I click on the view profile option in the admission queue dropdown menu
        Then I should see the admission queue profile page
        Then I should see the action button enabled on the admission queue profile page
        Then I should see pre assessment performance section on the admission queue profile page
        Then I should see performance vs average section on the admission queue profile page
        Then I should see assessment breakdown section on the admission queue profile page
        Then I should see the key performance insights section on the admission queue profile page
        When I click on back button on the admission queue profile page
        Then I should be redirected back to the admission queue page again
        When I click on the profile tab
        Then I should see the logout option in the dropdown menu
        When I click on the logout option
        Then I should be redirected to the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button





