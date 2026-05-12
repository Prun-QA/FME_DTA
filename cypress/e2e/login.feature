
Feature: Login Test

    Scenario: Verify user can successfully login with valid credentials
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
        When I click on the user profile icon
        Then I should see the logout option in the dropdown menu
        When I click on the logout option
        Then I should be redirected to the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button


    Scenario: Verify user cannot login succesfully with invalid credentials
        Given I am on the login page
        Then I should see the login body
        Then I should see a welcome message
        Then I should see the toggle password visibility button
        Then I should see the forgot password link
        Then I should see the login button
        When I enter invalid email
        Then I enter invalid password
        Then I click on the login button
        Then I should see an error message indicating invalid credentials    
            