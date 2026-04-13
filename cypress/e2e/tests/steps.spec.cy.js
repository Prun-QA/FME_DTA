
/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
    cy.visit('/');
})
Then('I should see the login body', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.loginBody).should('be.visible');
    })
})
Then('I should see a welcome message', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.welcomeMessage).should('be.visible');
    })
})
Then('I should see the toggle password visibility button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.togglePasswordButton).should('be.visible');
    })
})
Then('I should see the forgot password link', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.forgotPasswordLink).should('be.visible');
    })
})
Then('I should see the login button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.loginButton).should('be.visible');
    })
})
When('I enter valid email', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.emailField).type(fmeDta.email);
    })
})
Then('I enter valid password', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.passwordField).type(fmeDta.password);
    })
})
Then('I click on the login button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.loginButton).click();
    })
})
Then('I should be redirected to the dashboard', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.url().should('include', '/dashboard');
    })
})
Then('The app logo should be visible on the dashboard', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.logo).should('be.visible');
    })
})
Then('I should see the user profile icon on the dashboard', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.userProfileIcon).should('be.visible');
    })
})
When('I click on the user profile icon', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.userProfileIcon).click();
    })
})
Then('I should see the logout option in the dropdown menu', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.logOutOption).should('be.visible');
    })
})
When('I click on the logout option', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.logOutOption).click();
    })
})
Then('I should be redirected to the login page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.url().should('include', '/admin');
    })
})

// Login with invalid credentials
When('I enter invalid email', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.emailField).type('invalid@example.com');
    })
})
Then('I enter invalid password', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.passwordField).type('invalidPassword');
    })
})
Then('I should see an error message indicating invalid credentials', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.invalidInputMessage).should('be.visible');
    })
})

// Learners page
When('I hover over the users menu option', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.userMenuButton).scrollIntoView().trigger('mouseover');
    })
})
Then('I should see and be able to click the learners option in the dropdown menu', () => {
    cy.contains('Learners', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the learners page', () => {
    cy.url().should('include', '/learners');
})
Then('I should see the learners dashboard heading', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.learnersDashboardHeader).should('be.visible');
    })
})
Then('I should see an export button on the learners page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.exportButton).should('be.visible');
    })
})
Then('I should see the learners table on the learners page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.learnersTable).should('be.visible');
    })
})
Then('I should see more than 1 learners in the learners table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.learnersTable).find('tr').should('have.length.greaterThan', 1);
    })
})
Then('I should see atleast 1 header column in the learners table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.learnersTable).find('th').should('have.length.greaterThan', 0);
    })
})
Then('I should see atleast 1 data cell in the learners table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.learnersTable).find('td').should('have.length.greaterThan', 0);
    })
})
Then('I should see content in the first data cell of the learners table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.learnersTable).find('td').first().should('not.be.empty');
    })
})
Then('I should see content in the second data cell of the learners table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.learnersTable).find('td').eq(1).should('not.be.empty');
    })
})
Then('I should be able to click and select 25 from the row per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.rowsPerPageDropdown).click();
        cy.get(fmeDta.rowsPerPageOption25).select('25');
    })
})
Then('I should be able to click and select 50 from the row per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.rowsPerPageDropdown).click();
        cy.get(fmeDta.rowsPerPageOption50).select('50');
    })
})
Then('I should be able to click and select 100 from the row per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.rowsPerPageDropdown).click();
        cy.get(fmeDta.rowsPerPageOption100).select('100');
    })
})
Then('I should see the all learners tab', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allLearnersTab).should('be.visible');
    })
})
When('I click on the all learners tab', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allLearnersTab).click();
    })
})
Then('I should see the all learners next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allLearnersNextPageButton).should('not.be.disabled');
    })
})
Then('I can click on the all learners next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allLearnersNextPageButton).click();
    })
})
Then('I should see the all learners previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allLearnersPreviousPageButton).should('not.be.disabled');
    })
})
Then('I can click on the all learners previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allLearnersPreviousPageButton).click();
    })
})
When('I click on the active learners tab', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeLearnersTab).click();
    })
})
Then('I should see the active learners next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeLearnersNextPageButton).should('not.be.disabled');
    })
})
Then('I can click on the active learners next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeLearnersNextPageButton).click();
    })
})
Then('I should see the active learners previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeLearnersPreviousPageButton).should('not.be.disabled');
    })
})
Then('I can click on the active learners previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeLearnersPreviousPageButton).click();
    })
})
When('I click on the inactive learners tab', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveLearnersTab).click();
    })
})
Then('I should see the inactive learners next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveLearnersNextPageButton).should('not.be.disabled');
    })
})
Then('I can click on the inactive learners next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveLearnersNextPageButton).click();
    })
})
Then('I should see the inactive learners previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveLearnersPreviousPageButton).should('not.be.disabled');
    })
})
Then('I can click on the inactive learners previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveLearnersPreviousPageButton).click();
    })
})
When('I click on the disabled learners tab', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledLearnersTab).click();
    })
})
Then('I should see the disabled learners next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledLearnersNextPageButton).should('not.be.disabled');
    })
})
Then('I can click on the disabled learners next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledLearnersNextPageButton).click();
    })
})
Then('I should see the disabled learners previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledLearnersPreviousPageButton).should('not.be.disabled');
    })
})
Then('I can click on the disabled learners previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledLearnersPreviousPageButton).click();
    })
})
Then('I should be able to click on the alumni learners tab', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.alumniLearnersTab).click();
    })
})
When('I click on the search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.searchInput).click();
    })
})
Then('I enter a non existing learner name inside the search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.searchInput).type('nonexistentuser');
    })
})
Then('I should see a message indicating no results found', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.noResultsMessage).should('be.visible').and('contain', 'No Records Found');
    })
})
Then('I should see a cancel search button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.cancelSearchButton).should('be.visible');
    })
})
When('I click on the cancel search button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.cancelSearchButton).click();
    })
})
Then('I should see the learners table with all learners data', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allLearnersTab).should('be.visible');
    })
})
When('I click on the platform dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.platformDropdown).click();
    })
})
Then('I should see a list of platforms in the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.listOfPlatform).should('be.visible');
    })
})
Then('I should be able to select a coursera from the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.courseraOption).click();
    })
})
When('I click on the platform dropdown filter again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.platformDropdown).click();
    })
})
Then('I should be able to select pluralsight from the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.pluralSightOption).click();
    })
})
When('I click on the profile tab', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.profileOption).click();
    })
})

// facilitators page
Then('I should see and be able to click the facilitators option in the dropdown menu', () => {
    cy.contains('Facilitators', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the facilitators page', () => {
    cy.url().should('include', '/facilitators');
})
Then('I should see the facilitators dashboard heading', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorDashboardHeader).should('be.visible');
    })
})
Then('I should see and be able to click the facilitators export button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorsExportButton).should('be.visible').click();
    })
})
Then('I should see the add facilitators button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addFacilitatorButton).should('be.visible');
    })
})
Then('I should see the search input field on the facilitators page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.searchFacilitatorInput).should('be.visible');
    })
})
When('I click and type a non existing facilitators', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.searchFacilitatorInput).type('nonexistentfacilitator');
    })
})
Then('I should see the facilitators table with all facilitators data', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorsTable).scrollIntoView().should('be.visible');
    })
})
Then('I should see more than 1 facilitator in the facilitators table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorsTable).find('tr').should('have.length.greaterThan', 1);
    })
})
Then('I should see atleast 1 header column in the facilitators table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorsTable).find('th').should('have.length.greaterThan', 0);
    })
})
Then('I should see atleast 1 data cell in the facilitators table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorsTable).find('td').should('have.length.greaterThan', 0);
    })
})
Then('I should see the filter facilitators button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.filtersFacilitatorsButton).should('be.visible');
    })
})
When('I click on the filter facilitators button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.filtersFacilitatorsButton).click();
    })
})
Then('I should see a list of status options in the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.statusDropdown).should('be.visible');
    })
})
Then('I should be able to see and select active from the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeFacilitatorsTab).should('be.visible').click();
    })
})
Then('I should see the active facilitators next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeFacilitatorsNextPageButton).should('not.be.disabled');
    })
})
Then('I can click on the active facilitators next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeFacilitatorsNextPageButton).click();
    })
})
Then('I should see the active facilitators previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeFacilitatorsPreviousPageButton).should('not.be.disabled');
    })
})
Then('I can click on the active facilitators previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeFacilitatorsPreviousPageButton).click();
    })
})
When('I click on the filter facilitators button again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.filtersFacilitatorsButton).click();
    })
})
Then('I should be able to see and select inactive from the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveFacilitatorsTab).scrollIntoView().should('be.visible').click();
    })
})
Then('I should be able to see and select all from the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allFacilitatorsTab).should('be.visible').click();
    })
})
Then('I should see the all facilitators next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allFacilitatorsNextPageButton).should('not.be.disabled');
    })
})
Then('I can click on the all facilitators next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allFacilitatorsNextPageButton).click();
    })
})
Then('I should see the all facilitators previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allFacilitatorsPreviousPageButton).should('not.be.disabled');
    })
})
Then('I can click on the all facilitators previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allFacilitatorsPreviousPageButton).click();
    })
})
When('I click on the facilitators profile button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorProfileButton).click();
    })
})
Then('I click on view profile option in the dropdown menu', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorViewProfileTab).click();
    })
})
Then('I should see the facilitator profile page', () => {
    cy.url().should('include', 'users/facilitators/');
})
Then('I should see the facilitator profile header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorProfileHeader).should('be.visible');
    })
})
Then('I should see the facilitator recent activities section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.recentactivitiesTab).should('be.visible');
    })
})
Then('I should see the facilitator overview section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.overviewTab).should('be.visible');
    })
})
Then('I should see the student section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.studentDetailsTab).should('be.visible');
    })
})
Then('I should see the schedule section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.schedulesTab).should('be.visible');
    })
})
When('I click on the facilitator profile back button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorProfileBackButton).click();
    })
})
Then('I should be redirected back to the facilitators page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.url().should('include', 'users/facilitators');
    })
})
When('I click in the facilitators profile button again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorProfileButton).click();
    })
})
Then('I click on the edit details option in the dropdown menu', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.editDetailsButton).click();
    })
})
Then('I should see the facilitator email section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.facilitatorInvitationEmailInput).should('be.visible');
    })
})
Then('I should see the facilitator discard changes button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.discardChangesButton).should('be.visible')
    })
})
Then('I should see the facilitator update details button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.updateFacilitatorButton).should('be.visible');
    })
})
When('I click on the facilitator update details button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.updateFacilitatorButton).click();
    })
})
Then('I should see a success message indicating details updated successfully', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.successfulUpdateMessage, { timeout: 20000 }).should('be.visible');
    })
})
Then('I should see and be able to click on the okay thanks button in the success message', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.okayThanksButton).should('be.visible').click();
    })
})
Then('I should be redirected back to the facilitators page again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.url().should('include', 'users/facilitators');
    })
})

// mentors page
Then('I should see and be able to click the mentors option in the dropdown menu', () => {
    cy.contains('Mentors', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the mentors page', () => {
    cy.url().should('include', 'users/mentors');
})
Then('I should see the mentors dashboard heading', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsDashboardHeader).should('be.visible');
    })
})
Then('I should see and be able to click the mentors export button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsExportButton).should('be.visible').click();
    })
})
Then('I should see the add mentors button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addMentorButton).should('be.visible');
    })
})
Then('I should see the search input field on the mentors page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.searchMentorInput).should('be.visible');
    })
})
When('I click and type a non existing mentor', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.searchMentorInput).click().type('nonexistingmentor');
    })
})
Then('I should see the mentors table with all mentors data', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsTable).should('be.visible');
    })
})
Then('I should see more than 1 mentor in the mentors table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsTable).find('tr').should('have.length.greaterThan', 1);
    })
})
Then('I should see atleast 1 header column in the mentors table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsTable).find('th').should('have.length.greaterThan', 0);
    })
})
Then('I should see atleast 1 data cell in the mentors table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsTable).find('td').should('have.length.greaterThan', 0);
    })
})
Then('I should see the filter mentors button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsFiltersButton).scrollIntoView().should('be.visible');
    })
})
When('I click on the filter mentors button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsFiltersButton).click();
    })
})
Then('I should see a list of mentors status options in the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsStatusDropdown).should('be.visible');
    })
})
Then('I should be able to see and select active from the mentors dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeMentorsTab).should('be.visible').click();
    })
})
Then('I should see the active mentors next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeMentorsNextPageButton).should('be.visible');
    })
})
Then('I can click on the active mentors next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeMentorsNextPageButton).click();
    })
})
Then('I should see the active mentors previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeMentorsPreviousPageButton).should('be.visible');
    })
})
Then('I can click on the active mentors previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeMentorsPreviousPageButton).click();
    })
})
Then('I should be able to see and select inactive from the mentors dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveMentorsTab).should('be.visible').click();
    })
})
Then('I should see the inactive mentors next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveMentorsNextPageButton).should('be.visible');
    })
})
Then('I can click on the inactive mentors next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveMentorsNextPageButton).click();
    })
})
Then('I should see the inactive mentors previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveMentorsPreviousPageButton).should('be.visible');
    })
})
Then('I can click on the inactive mentors previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inactiveMentorsPreviousPageButton).click();
    })
})
Then('I should be able to see and select disabled from the dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledMentorsTab).should('be.visible').click();
    })
})
Then('I should see the disabled mentors next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledMentorsNextPageButton).should('be.visible');
    })
})
Then('I can click on the disabled mentors next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledMentorsNextPageButton).click();
    })
})
Then('I should see the disabled mentors previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledMentorsPreviousPageButton).should('be.visible');
    })
})
Then('I can click on the disabled mentors previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.disabledMentorsPreviousPageButton).click();
    })
})
When('I click on the filter mentors button again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsFiltersButton).click();
    })
})
Then('I should be able to see and select all from the mentors dropdown filter', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allMentorsTab).should('be.visible').click();
    })
})
Then('I should see the all mentors next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allMentorsNextPageButton).should('not.be.disabled');
    })
})
Then('I can click on the all mentors next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allMentorsNextPageButton).click();
    })
})
Then('I should see the all mentors previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allMentorsPreviousPageButton).should('not.be.disabled');
    })
})
Then('I can click on the all mentors previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.allMentorsPreviousPageButton).click();
    })
})
When('I click on the mentors options button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsOptionsButton).click();
    })
})
Then('I click on the view profile option in the dropdown menu', () => {
    cy.contains(/view profile/i, { timeout: 5000 }).should('be.visible').click();
})
Then('I should see the mentors profile page', () => {
    cy.url().should('include', 'users/mentors/');
})
Then('I should see the mentors profile header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsProfileHeader).should('be.visible');
    })
})
Then('I should see the mentors recent activities section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsRecentActivityHeader).should('be.visible');
    })
})
Then('I should see the mentors overview section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsOverviewTab).should('be.visible');
    })
})
Then('I should see the mentee details section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.menteeDetailsTab).should('be.visible');
    })
})
Then('I should see the schedules section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsSchedulesTab).should('be.visible');
    })
})
Then('I should see the outcomes section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsOutcomesTab).should('be.visible');
    })
})
Then('I should see the feedback section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsFeedBackTab).should('be.visible');
    })
})
When('I click on the mentors profile back button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsProfileBackButton).click();
    })
})
Then('I should be redirected back to the mentors page', () => {
    cy.url().should('include', 'users/mentors');
})
When('I click in the mentors options button again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsOptionsButton).click();
    })
})
Then('I click on the edit details option in the mentors dropdown menu', () => {
    cy.contains(/Edit Details/i, { timeout: 5000 }).should('be.visible').click();
})
Then('I should see the mentors email section', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsInvitationEmailInput).should('be.visible');
    })
})
Then('I should see the mentors discard changes button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsDiscardChangesButton).should('be.visible');
    })
})
Then('I should see the mentors update details button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.updateMentorsButton).should('be.visible');
    })
})
When('I click on the mentors update details button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.updateMentorsButton).click();
    })
})
Then('I should see a mentors success message indicating details updated successfully', () => {
    cy.contains('Mentor Updated', { timeout: 12000 }).should('be.visible');
})
When('I click on the add mentors button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addMentorButton).click();
    })
})
Then('I should see the invite new mentor header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.inviteNewMentorHeader).should('be.visible');
    })
})
Then('I should see mentors first name input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsFirstNameInput).should('be.visible');
    })
})
Then('I should see mentors middle name input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsMiddleNameInput).should('be.visible');
    })
})
Then('I should see mentors last name input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsLastNameInput).should('be.visible');
    })
})
Then('I should see mentors email input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsEmailInput).should('be.visible');
    })
})
Then('I should see mentors phone number input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsPhoneNumberInput, { timeout: 10000 }).scrollIntoView().should('be.visible');
    })
})
Then('I should see mentors description input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsDescriptionInput, { timeout: 10000 }).scrollIntoView().should('be.visible');
    })
})
Then('I should see the administrative details section', () => {
    cy.contains('Administrative details', { timeout: 10000 }).scrollIntoView().should('be.visible');
})
Then('I should see the mentors send invite button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsSendInvitationButton).should('be.visible');
    })
})
Then('I should see the mentors discard button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsDiscardInvitationButton).should('be.visible');
    })
})
When('I click on the mentors discard button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.mentorsDiscardInvitationButton).click();
    })
})
Then('I should be redirected back to the mentors page again', () => {
    cy.url().should('include', 'users/mentors');
})

// Admission Queue
Then('I should see and be able to click the admission queue option in the dropdown menu', () => {
    cy.contains('Admission Queue', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the admission queue page', () => {
    cy.url().should('include', 'admission-queue');
})
Then('I should see the admission queue dashboard heading', () => {
    cy.contains('Admission Queue', { timeout: 5000 }).should('be.visible');
})
Then('I should see the admission queue record count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueRecordsCount).should('be.visible');
    })
})
Then('I should see and be able to click on the admission queue export button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueExportButton).should('be.visible').click();
    })
})
Then('I should see the search input field on the admission queue page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueSearchInput).should('be.visible');
    })
})
When('I click and type a non existing admission name', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueSearchInput).click().type('Non Existing Admission');
    })
})
Then('I should see a message indicating no results found on the admission queue page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.noResultsMessage).should('be.visible').and('contain', 'No Records Found');
    })
})
Then('I should see the admission queue table headers', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueTableHeaders).should('be.visible');
    })
})
Then('I should see multiple rows of data in the admission queue table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueTable).find('tr').should('have.length.greaterThan', 1);
    })
})
Then('I should see atleast 1 header column in the admission queue table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueTable).find('th').should('have.length.greaterThan', 0);
    })
})
Then('I should see atleast 1 data cell in the admission queue table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueTable).find('td').should('have.length.greaterThan', 0);
    })
})
Then('I should see content in the first data cell of the admission queue table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueTable).find('td').first().should('not.be.empty');
    })
})
Then('I should see the admission queue number header column', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueQueueNumberHeader).should('be.visible');
    })
})
Then('I should see the admission queue student header column', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueStudentHeader).should('be.visible');
    })
})
Then('I should see the admission queue skill area header column', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueSkillAreaHeader).should('be.visible');
    })
})
Then('I should see the admission queue skill assessment header column', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueSkillAssessmentHeader).should('be.visible');
    })
})
Then('I should see the admission queue psychometric header column', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueuePsychometricHeader).should('be.visible');
    })
})
Then('I should see the admission queue date header column', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueDateHeader).should('be.visible');
    })
})
Then('I should see the admission queue rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueRowsPerPageDropdown).scrollIntoView().should('be.visible');
    })
})
Then('I should be able to click and select 100 from the admission queue rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueRowsPerPageDropdown).select('100');
    })
})
Then('I should be able to click and select 50 from the admission queue rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueRowsPerPageDropdown).select('50');
    })
})
Then('I should be able to click and select 25 from the admission queue rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueRowsPerPageDropdown).select('25');
    })
})
Then('I should be able to click and select 10 from the admission queue rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueRowsPerPageDropdown).select('10');
    })
})
Then('I should see the admission queue next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueNextButton).should('not.be.disabled').click();
    })
})
Then('I can click on the admission queue next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueNextButton).click();
    })
})
Then('I should see the admission queue previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueuePrevButton).should('not.be.disabled');
    })
})
Then('I can click on the admission queue previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueuePrevButton).click();
    })
})
When('I click on the admission queue options button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueFirstRowOptionsButton).click();
    })
})
Then('I click on the view profile option in the admission queue dropdown menu', () => {
    cy.contains(/view profile/i, { timeout: 5000 }).should('be.visible').click();
})
Then('I should see the admission queue profile page', () => {
    cy.url().should('include', '/users/learners/');
})
Then('I should see the action button enabled on the admission queue profile page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueActionButton).should('be.enabled');
    })
})
Then('I should see pre assessment performance section on the admission queue profile page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueuePreassessmentPerformance).should('be.visible');
    })
})
Then('I should see performance vs average section on the admission queue profile page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueuePerformanceVsAverage).should('be.visible');
    })
})
Then('I should see assessment breakdown section on the admission queue profile page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueAssessmentBreakdown).should('be.visible');
    })
})
Then('I should see the key performance insights section on the admission queue profile page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.admissionQueueKeyPerformanceInsights).scrollIntoView().should('be.visible');
    })
})
When('I click on back button on the admission queue profile page', () => {
    cy.go('back');
})
Then('I should be redirected back to the admission queue page again', () => {
    cy.url().should('include', '/admission-queue');
})

// Institution page
Then('I should see the programs profile icon on the dashboard', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.programmsDashboardHeader).should('be.visible');
    })
})
When('I hover over the programs menu option', () => {
    cy.contains('Programs', { timeout: 5000 }).scrollIntoView().trigger('mouseover');
})
Then('I should see and be able to click the institutions option in the dropdown menu', () => {
    cy.contains('Institutions', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the institutions page', () => {
    cy.url().should('include', '/institutions');
})
Then('I should see the institutions page heading', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsDashboardHeader).should('be.visible');
    })
})
Then('I should see and be able to click on the institutions export button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsExportButton).should('be.visible').click();
    })
})
Then('I should see the search input field on the institutions page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsSearchInput).should('be.visible');
    })
})
When('I click and type a non existing institutions name', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsSearchInput).click().type('Non Existing Institution');
    })
})
Then('I should see a message indicating no results found on the institutions page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.noResultsMessage).should('be.visible');
    })
})
Then('I should see multiple rows of data in the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsTable).find('tr').should('have.length.greaterThan', 1);
    })
})
Then('I should see atleast 1 header column in the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsTable).find('th').should('have.length.greaterThan', 0);
    })
})
Then('I should see atleast 1 data cell in the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsTable).find('td').should('have.length.greaterThan', 0);
    })
})
Then('I should see content in the first data cell of the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsTable).find('td').first().should('not.be.empty');
    })
})
Then('I should see the institutions name header in the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsNameHeader).should('be.visible');
    })
})
Then('I should see the institutions total centers header in the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsTotalCentersHeader).should('be.visible');
    })
})
Then('I should see the institutions learners header in the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsLearnersHeader).should('be.visible');
    })
})
Then('I should see the institutions ratings header in the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsRatingsHeader).should('be.visible');
    })
})
Then('I should see the institutions status header in the institutions table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsStatusHeader).should('be.visible');
    })
})
Then('I should see and be able to click on the institutions add button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsAddButton, { timeout: 10000 })
            .scrollIntoView()
            .should('be.visible')
            .and('not.be.disabled')
            .click();
    })
})
Then('I should see and be able to click on the add institution from the dropdown menu', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsAddAnInstitutionOption, { timeout: 10000 }).should('be.visible').click();
    })
})
Then('I should be redirected to the add institution page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.url().should('include', '/institution');
    })
})
Then('I should see and be able to click on the select an institution field', () => {
    cy.contains('Select Here', { timeout: 10000 }).scrollIntoView().should('be.visible');
})
Then('I should see the institution name input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionNameInput).should('be.visible');
    })
})
Then('I should see the description textarea field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionDescriptionTextarea).should('be.visible');
    })
})
Then('I should see the institution location textarea field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionLocationTextarea).should('be.visible');
    })
})
Then('I should see the institution email input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionEmailInput).should('be.visible');
    })
})
Then('I should see the institution phone number input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionPhoneInput).scrollIntoView().should('be.visible');
    })
})
Then('I should see the institution website input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionWebsiteInput, { timeout: 10000 }).scrollIntoView().should('be.visible');
    })
})
Then('I should see the institution accreditation number input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionAccreditationNumberInput).should('be.visible');
    })
})
Then('I should see the institution accreditation date input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionAccreditationDateInput).should('be.visible');
    })
})
Then('I should see institution logo upload button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionLogoUploadButton).should('be.visible');
    })
})
Then('I should see the institution submit button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addInstitutionSubmitButton).should('be.visible');
    })
})
Then('I should see the institution cancel button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addInstitutionCancelButton).should('be.visible');
    })
})
When('I click on the institution cancel button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addInstitutionCancelButton).click();
    })
})
Then('I should be redirected back to the institutions page', () => {
    cy.url().should('include', '/institutions');
})
Then('I should see and be able to click on the institution next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsNextButton).should('not.be.disabled').click();
    })
})
Then('I should see and be able to click on the institution previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsPrevButton).should('not.be.disabled').click();
    })
})
Then('I should be able to click and select 100 on the rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsRowsPerPageDropdown).select('100');
    })
})
Then('I should be able to click and select 50 on the rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsRowsPerPageDropdown).select('50');
    })
})
Then('I should be able to click and select 25 on the rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsRowsPerPageDropdown).select('25');
    })
})
Then('I should be able to click and select 10 on the rows per page dropdown', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.institutionsRowsPerPageDropdown).select('10');
    })
})

// Skill Areas page
Then('I should see and be able to click the skill areas option in the dropdown menu', () => {
    cy.contains('Skill Areas', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the skill areas page', () => {
    cy.url().should('include', '/skill-areas');
})
Then('I should see the skill areas page heading', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasDashboardHeader).should('be.visible');
    })
})
Then('I should see and be able to click on the skill areas export button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasExportButton).should('be.visible').click();
    })
})
Then('I should see the total skill areas count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.totalSkillAreasCount).should('be.visible');
    })
})
Then('I should see the active skill areas count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.activeSkillAreasCount).should('be.visible');
    })
})
Then('I should see the total enrolled count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.totalEnrolledCount).should('be.visible');
    })
})
Then('I should see the average completion rate', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.avgCompletionRate).should('be.visible');
    })
})
Then('I should see and be able to type a non existing skill area name in the search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasSearchInput).should('be.visible').type('Non Existing Skill Area');
    })
})
Then('I should see a message indicating no results found on the skill areas page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.noResultsMessage, { timeout: 10000 }).scrollIntoView().should('be.visible').and('contain', 'No Records Found');
    })
})
Then('I should see and click cancel search button on the skill area page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.cancelSearchButton).should('be.visible').click();
    })
})
When('I type a valid skill area name in the search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasSearchInput).should('be.visible').type('Data');
    })
})
Then('I should see the skill area in the skill areas table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasTable).should('be.visible');
    })
})
When('I clear the search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasSearchInput).should('be.visible').clear();
    })
})
Then('I should see multiple rows of data in the skill areas table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasTable).find('tr').should('have.length.greaterThan', 1);
    })
})
Then('I should see atleast 1 header column in the skill areas table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasTable).find('th').should('have.length.greaterThan', 0);
    })
})
Then('I should see atleast 1 data cell in the skill areas table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasTable).find('td').should('have.length.greaterThan', 0);
    })
})
Then('I should see content in the first data cell of the skill areas table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasTable).find('td').first().should('not.be.empty');
    })
})
Then('I should see and be able to click on the skill areas add button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasAddButton, { timeout: 10000 })
            .scrollIntoView()
            .should('be.visible')
            .and('not.be.disabled')
            .click();
    })
})
Then('I should see the add skill area modal headers', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addSkillAreaModalHeader).should('be.visible');
    })
})
Then('I should see the skill area name input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreaNameInput).should('be.visible');
    })
})
Then('I should see the skill area platform dropdown field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreaPlatformDropdown).should('be.visible');
    })
})
Then('I should see the skill area description textarea field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreaDescriptionTextarea).should('be.visible');
    })
})
Then('I should see the skill area add beginner course button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addBeginnerCourseButton).should('be.visible');
    })
})
Then('I should see the skill area add intermediate course button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addIntermediateCourseButton).scrollIntoView().should('be.visible');
    })
})
Then('I should see the skill area add advanced course button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addAdvancedModuleButton).should('be.visible');
    })
})
Then('I should see the skill area save button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.saveSkillAreaButton).should('be.visible');
    })
})
Then('I should see the skill area cancel button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.cancelSkillAreaButton).should('be.visible');
    })
})
When('I click on the skill area cancel button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.cancelSkillAreaButton).click();
    })
})
Then('I should be redirected back to the skill areas page', () => {
    cy.url().should('include', '/skill-areas');
})
Then('I should see and be able to click on the skill areas next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasNextButton).scrollIntoView().should('be.visible').click();
    })
})
Then('I should see and be able to click on the skill areas previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasPrevButton).scrollIntoView().should('be.visible').click();
    })
})
Then('I should be able to click and select 100 on the rows per page dropdown on skill areas', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasRowsPerPageDropdown).select('100');
    })
})
Then('I should be able to click and select 50 on the rows per page dropdown on skill areas', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasRowsPerPageDropdown).select('50');
    })
})
Then('I should be able to click and select 25 on the rows per page dropdown on skill areas', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasRowsPerPageDropdown).select('25');
    })
})
Then('I should be able to click and select 10 on the rows per page dropdown on skill areas', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAreasRowsPerPageDropdown).select('10');
    })
})

// Questions page
Then('I should see and be able to click the questions option in the dropdown menu', () => {
    cy.contains('Questions', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the question management page', () => {
    cy.url().should('include', '/questions');
})
Then('I should see the questions dashboard header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.questionsDashboardHeader).should('be.visible');
    })
})
Then('I should see and be able to click on the questions export button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.questionsExportButton).should('be.visible').click();
    })
})
Then('I should see the questions summary header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.questionsSummaryHeader).should('be.visible');
    })
})
Then('I should see the total questions count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.totalQuestionsCount).should('be.visible');
    })
})
Then('I should see the total attempts count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.totalAttemptsCount).should('be.visible');
    })
})
Then('I should see the questions performance percentage', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.questionsPerformance).should('be.visible');
    })
})
Then('I should see the total passed count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.totalPassedCount).should('be.visible');
    })
})
Then('I should see the total failed count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.totalFailedCount).should('be.visible');
    })
})
Then('I should see the psychometric header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricHeader).should('be.visible');
    })
})
Then('I should see the psychometric total questions count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricTotalQuestions).should('be.visible');
    })
})
Then('I should see the psychometric total attempts count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricTotalAttempts).should('be.visible');
    })
})
Then('I should see the psychometric performance percentage', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricPerformance).should('be.visible');
    })
})
Then('I should see the psychometric view details button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricViewDetailsButton).should('be.visible');
    })
})
When('I click on the psychometric view details button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricViewDetailsButton).click();
    })
})
Then('I should see the psychometric details modal header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsHeader).should('be.visible');
    })
})
Then('I should see and be able to click on the psychometric details export button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsExportButton).should('be.visible').click();
    })
})
Then('I should see the psychometric details question map button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsQuestionMapButton).should('be.visible');
    })
})
Then('I should see the psychometric details add question button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsAddQuestionButton).should('be.visible');
    })
})
Then('I should see the psychometric details search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsSearchInput).should('be.visible');
    })
})
Then('I should see the psychometric question title header in the psychometric details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsQuestionTitleHeader).should('be.visible');
    })
})
Then('I should see the psychometric question type header in the psychometric details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsQuestionTypeHeader).should('be.visible');
    })
})
Then('I should see the psychometric performance header in the psychometric details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsPerformanceHeader).should('be.visible');
    })
})
Then('I should see the psychometric status header in the psychometric details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsStatusHeader).should('be.visible');
    })
})
Then('I should see the psychometric points header in the psychometric details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsPointsHeader).should('be.visible');
    })
})
Then('I should see and be able to click on the psychometric details next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsNextButton).should('not.be.disabled').click();
    })
})
Then('I should see and be able to click on the psychometric details previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsPrevButton).should('not.be.disabled').click();
    })
})
Then('I should be able to click and select 100 on the rows per page dropdown on psychometric details', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsRowsPerPageDropdown).select('100');
    })
})
Then('I should be able to click and select 50 on the rows per page dropdown on psychometric details', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsRowsPerPageDropdown).select('50');
    })
})
Then('I should be able to click and select 25 on the rows per page dropdown on psychometric details', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsRowsPerPageDropdown).select('25');
    })
})
Then('I should be able to click and select 10 on the rows per page dropdown on psychometric details', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricDetailsRowsPerPageDropdown).select('10');
    })
})
Then('I should be able to go back to the previous page using the back button on the browser', () => {
    cy.go('back');
})
Then('I should see the psychometric add question button on the question management page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.psychometricAddQuestionsButton).should('be.visible');
    })
})
Then('I should see the skill assessment header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentHeader).should('be.visible');
    })
})
Then('I should see the skill assessment total questions count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentTotalQuestions).should('be.visible');
    })
})
Then('I should see the skill assessment total attempts count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentTotalAttempts).should('be.visible');
    })
})
Then('I should see the skill assessment performance percentage', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentPerformance).should('be.visible');
    })
})
Then('I should see the skill assessment view details button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentViewDetailsButton).should('be.visible');
    })
})
When('I click on the skill assessment view details button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentViewDetailsButton).click();
    })
})
Then('I should see the skill assessment details page header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsHeader).should('be.visible');
    })
})
Then('I should see the skill assessment search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsSearchInput).should('be.visible');
    })
})
Then('I should see the skill assessment add questions button enabled', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsAddQuestionButton).should('be.enabled');
    })
})
Then('I should see the skill assessment learning stack header in the skill assessment details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsLearningStackHeader).should('be.visible');
    })
})
Then('I should see the skill assessment total questions header in the skill assessment details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsTotalQuestionsHeader).should('be.visible');
    })
})
Then('I should see the skill assessment attempts header in the skill assessment details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsAttemptsHeader).should('be.visible');
    })
})
Then('I should see the skill assessment average performance header in the skill assessment details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsAvPerformanceHeader).should('be.visible');
    })
})
Then('I should see the skill assessment date stamp header in the skill assessment details table', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsDateStampHeader).should('be.visible');
    })
})
Then('I should be able to see and click on the skill assessment details next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsNextButton).should('not.be.disabled').click();
    })
})
Then('I should see and be able to click on the skill assessment details previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsPrevButton).should('not.be.disabled').click();
    })
})
Then('I should be able to click and select 100 on the rows per page dropdown on skill assessment details', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsRowsPerPageDropdown).select('100');
    })
})
Then('I should be able to click and select 50 on the rows per page dropdown on skill assessment details', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsRowsPerPageDropdown).select('50');
    })
})
Then('I should be able to click and select 25 on the rows per page dropdown on skill assessment details', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsRowsPerPageDropdown).select('25');
    })
})
Then('I should be able to click and select 10 on the rows per page dropdown on skill assessment details', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.skillAssessmentDetailsRowsPerPageDropdown).select('10');
    })
})
Then('I should be able to go back to the previous page again using the back button on the browser', () => { // Add a wait to ensure the page has loaded before going back
    cy.go('back');
})

// Pre-assessment page
Then('I should see and be able to click the preassessment option in the dropdown menu', () => {
    cy.contains('Pre-assessments', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the preassessment page', () => {
    cy.url().should('include', '/pre-assessments');
})
Then('I should see preassessment dashboard header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentDashboardHeader).should('be.visible');
    })
})
Then('I should see and be able to click on the preassessment export button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentExportButton).should('be.visible').click();
    })
})
Then('I should see the preassessment add new batch button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentAddNewBatchButton).should('be.visible');
    })
})
Then('I should see the preassessment search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentSearchInput).should('be.visible');
    })
})
When('I click and type a non-existing batch name in the preassessment search input field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentSearchInput).should('be.visible').type('Non Existing Batch Name');
    })
})
Then('I should see a message indicating no results found on the preassessment page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.noResultsMessage, { timeout: 10000 }).scrollIntoView().should('be.visible').and('contain', 'No Records Found');
    })
})
Then('I should see and click cancel search button on the preassessment page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.cancelSearchButton).should('be.visible').click();
    })
})
Then('I should see the preassessment table batch name header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentTableBatchNameHeader).scrollIntoView().should('be.visible');
    })
})
Then('I should see the preassessment table batch creator header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentTableBatchCreatorHeader).should('be.visible');
    })
})
Then('I should see the preassessment table date stamp header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentTableDateStampHeader).should('be.visible');
    })
})
Then('I should see the preassessment table psychometric header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentPsychometricHeader).should('be.visible');
    })
})
Then('I should see the preassessment table skill assessment header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentSkillAssessmentHeader).should('be.visible');
    })
})
Then('I should see the preassessment table minimum score header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentMinScoreHeader).should('be.visible');
    })
})
Then('I should see the preassessment table performance header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentPerformanceHeader).scrollIntoView().should('be.visible');
    })
})
Then('I should see the preassessment table status header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentStatusHeader).should('be.visible');
    })
})
Then('I should see and be able to click on the preassessment table next page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentNextButton).scrollIntoView().should('be.visible').click();
    })
})
Then('I should see and be able to click on the preassessment table previous page button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentPrevButton).scrollIntoView().should('be.visible').click();
    })
})
Then('I should be able to click and select 100 on the rows per page dropdown on preassessment page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentRowsPerPageDropdown).select('100');
    })
})
Then('I should be able to click and select 50 on the rows per page dropdown on preassessment page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentRowsPerPageDropdown).select('50');
    })
})
Then('I should be able to click and select 25 on the rows per page dropdown on preassessment page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentRowsPerPageDropdown).select('25');
    })
})
Then('I should be able to click and select 10 on the rows per page dropdown on preassessment page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentRowsPerPageDropdown).select('10');
    })
})
Then('I should be able to click on a preassessment batch option button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentOptionsButton, { timeout: 10000 }).scrollIntoView().should('be.visible').then($el => {
            // if the selector points to an inner svg, click its closest button; otherwise click the element
            const $btn = $el.is('button') ? $el : $el.closest('button');
            cy.wrap($btn).click();
        })
    })
})
Then('I should be able to see and select view details from the dropdown menu of the preassessment batch option button', () => {
    cy.contains(/view details/i, { timeout: 10000 }).scrollIntoView().should('be.visible').click();
})
Then('I should see the preassessment batch total usage count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentTotalUsageCount).should('be.visible');
    })
})
Then('I should see the preassessment batch performance rate', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentPerformanceRate).should('be.visible');
    })
})
Then('I should see the preassessment batch total questions count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentTotalQuestionsCount).should('be.visible');
    })
})
Then('I should see the preassessment batch unique questions count', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentUniqueQuestionsCount).should('be.visible');
    })
})
Then('I should see the preassessment batch performance trend header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentPerformanceTrendHeader).scrollIntoView().should('be.visible');
    })
})
Then('I should see the preassessment batch question distribution header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentQuestionDistributionHeader).should('be.visible');
    })
})
When('I click on the preassessment batch option button again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentOptionsButton).scrollIntoView().should('be.visible').click();
    })
})
Then('I should see and be able to click on preassessment edit batch option', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentEditBatchOption).should('be.visible').click();
    })
})
Then('I should be redirected to the preassessment edit batch page', () => {
    cy.url().should('include', '/pre-assessments');
})
Then('I should see the preassessment edit batch name header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.editPreassessmentBatchModalHeader).should('be.visible');
    })
})
Then('I should see the preassessment details header', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentDetails).should('be.visible');
    })
})
Then('I should see the preassessment title field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentTitleField).should('be.visible');
    })
})
Then('I should see the preassessment duration field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentDurationField).should('be.visible');
    })
})
Then('I should see the preassessment psychometric questions count field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentPsychometricQuestionsCount).should('be.visible');
    })
})
Then('I should see the preassessment skill assessment questions count field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentSkillAssessmentQuestionsCount).should('be.visible');
    })
})
Then('I should see the preassessment intermediate score from field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.intermediateScoreFrom).scrollIntoView().should('be.visible');
    })
})
Then('I should see the preassessment intermediate score to field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.intermediateScoreTo).should('be.visible');
    })
})
Then('I should see the preassessment advanced score from field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.advancedScoreFrom).should('be.visible');
    })
})
Then('I should see the preassessment advanced score to field', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.advancedScoreTo).should('be.visible');
    })
})
Then('I should see the preassessment update batch button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentUpdateBatchButton).should('be.visible');
    })
})
Then('I should see the preassessment edit batch cancel button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentCancelEditButton).should('be.visible');
    })
})
When('I click on the preassessment edit batch cancel button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.preassessmentCancelEditButton).click();
    })
})
Then('I should be redirected back to the preassessment page', () => {
    cy.url().should('include', '/pre-assessments');
})

// Sessions page
Then ('I should see the operations profile icon on the dashboard', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.operationsProfileIcon).should('be.visible');
    })
})
When('I hover over the operations menu option', () => {
    cy.contains('Operations', { timeout: 5000 }).should('be.visible').trigger('mouseover');
})
Then('I should see and be able to click the sessions option in the dropdown menu', () => {
    cy.contains('Sessions', { timeout: 5000 }).should('be.visible').click();
})
Then('I should be redirected to the sessions page', () => {
    cy.url().should('include', '/sessions');
})
Then('I should see the current date header on the sessions page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.dateHeader).should('be.visible');
    })
})
Then('I should see the sessions export button on the sessions page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionExportTab).should('be.visible');
    })
})
Then('I should see the sessions all body on the sessions page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionAllBody).should('be.visible');
    })
})
Then('I should see the today header on the sessions page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.todayHeader).should('be.visible');
    })
})
When('I click on the day range option', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.dayRangeOption).should('be.visible').click();
    })
})
Then('I should see and be able to click on the last 7 days option', () => {
    cy.contains('Last 7 days', { timeout: 5000 }).should('be.visible').click();
})
When('I click on the day range option again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.dayRangeOption).should('be.visible').click();
    })
})
Then('I should see and be able to click on the last week option', () => {
    cy.contains('Last week', { timeout: 5000 }).should('be.visible').click();
})
When('I click on the day range option all again', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.dayRangeOption).should('be.visible').click();
    })
})
Then('I should see and be able to click on the last month option', () => {
    cy.contains('Last month', { timeout: 5000 }).should('be.visible').click();
})
When('I click on the day range option for the last time', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.dayRangeOption).should('be.visible').click();
    })
})
Then('I should see and be able to click on the last year option', () => {
    cy.contains('Last year', { timeout: 5000 }).should('be.visible').click();
})
Then('I should see and be able to click on the add session button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addSessionTab).should('be.visible').click();
    })
})
Then('I should be redirected to the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addSessionPage).should('be.visible');
    })
})
Then('I should see the session title input field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionTitleInput).should('be.visible');
    })
})
Then('I should see the session all day toggle button on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionAllDayToggle).should('be.visible');
    })
})
Then('I should see the do not repeat toggle button on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionDoNotRepeatToggle).should('be.visible');
    })
})
Then('I should see the session date input field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionDateInput).should('be.visible');
    })
})
Then('I should see the session start time input field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionStartTimeInput).should('be.visible');
    })
})
Then('I should see the session end time input field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionEndTimeInput).should('be.visible');
    })
})
Then('I should see the session type dropdown field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionTypeDropdown).should('be.visible');
    })
})
Then('I should see the add participants dropdown field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.addparticipantDropdown).should('be.visible');
    })
})
Then('I should see the location type dropdown field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.locationTypeDropdown).scrollIntoView().should('be.visible');
    })
})
Then('I should see the meeting link input field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.meetingLinkInput).should('be.visible');
    })
})
Then('I should see the session description input field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.sessionDescriptionTextarea).should('be.visible');
    })
})
Then('I should see the reminder dropdown field on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.reminderDropdown).should('be.visible');
    })
})
Then('I should see the save session button on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.saveSessionButton).should('be.visible');
    })
})
Then('I should see the cancel button on the add session page', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.cancelSessionButton).should('be.visible');
    })
})
When('I click on the cancel button', () => {
    cy.fixture('fmeDta').then((fmeDta) => {
        cy.get(fmeDta.cancelSessionButton).click();
    })
})
Then('I should be redirected back to the sessions page', () => {
    cy.url().should('include', '/sessions');
})

// Audit log
Then ('I should see and be able to click the audit log option in the dropdown menu', () => {
    cy.contains('Audit Log', { timeout: 5000 }).should('be.visible').click();
})
        Then ('I should be redirected to the audit log page', () => {
            cy.url().should('include', '/audit-log');
        })
        Then ('I should see the audit log header on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogHeader).should('be.visible');
            })
        })
        Then ('I should see and be able to click on the export audit log button on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.exportButton).should('be.visible').click();
            })
        })
        Then ('I should see the audit log search input field on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogSearchInput).should('be.visible');
            })
        })
        When ('I type a non existing search term in the audit log search input field', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogSearchInput).type('non-existing-term');
            })
        })
        Then ('I should see no results found message on the audit log page', () => {
            cy.contains('No Records Found', { timeout: 10000 }).should('be.visible');
        })
        Then ('I should see the default audit log results on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogDefaultResults).scrollIntoView().should('be.visible');
            })
        })
        Then ('I should see the from date input field on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogFromDateInput).should('be.visible');
            })
        })
        Then ('I should see the to date input field on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogToDateInput).should('be.visible');
            })
        })
        Then ('I should see the date stamp header on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogDateStampHeader).should('be.visible');
            })
        })
        Then ('I should see the done by header on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogDoneByHeader).should('be.visible');
            })
        })
        Then ('I should see the action header on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogActionHeader).should('be.visible');
            })
        })
        Then ('I should see the affected user header on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogAffectedUserHeader).should('be.visible');
            })
        })
        Then ('I should see the description header on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogDescriptionHeader).scrollIntoView().should('be.visible');
            })
        })
        Then ('I should see and be able to click on the next page button on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogNextButton).scrollIntoView().should('be.visible').click();
            })
        })
        Then ('I should see and be able to click on the previous page button on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogPrevButton).scrollIntoView().should('be.visible').click();
            })
        })
        Then ('I should be able to select 100 from the rows per page dropdown on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogRowsPerPageDropdown).select('100');
            })
        })
        Then ('I should be able to select 50 from the rows per page dropdown on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogRowsPerPageDropdown).select('50');
            })
        })
        Then ('I should be able to select 25 from the rows per page dropdown on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogRowsPerPageDropdown).select('25');
            })
        })
        Then ('I should be able to select 10 from the rows per page dropdown on the audit log page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.auditLogRowsPerPageDropdown).select('10');
            })
        })

        // Messages Page
        Then ('I should see and be able to click the messages option in the dropdown menu', () => {
            cy.contains('Messages', { timeout: 5000 }).should('be.visible').click();
        })
        Then ('I should be redirected to the messages page', () => {
            cy.url().should('include', '/messages');
        })
        Then ('I should see the messages search input field on the messages page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.messageSearchInput).should('be.visible');
            })
        })
        Then ('I should see and be able to click on the all message tab on the messages page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.allMessagesTab).should('be.visible').click();
            })
        })
        Then ('I should see and be able to click on the unread message tab on the messages page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.unreadMessagesTab).should('be.visible').click();
            })
        })
        Then ('I should see and be able to click on the group message tab on the messages page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.groupMessagesTab).should('be.visible').click();
            })
        })
        When ('I click on the new message icon', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.newMessageButton).click();
            })
        })
        Then ('I should be redirected to the new message page', () => {
            cy.url().should('include', '/messages');
        })
        Then ('I should see the new message header on the new message page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.newMessageHeader).should('be.visible');
            })
        })
        Then ('I should see the search people input field on the new message page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.searchPeopleInput).should('be.visible');
            })
        })
        When ('I click on the cancel button on the new message page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.cancelNewMessageButton).click();
            })
        })
        Then ('I should be redirected back to the message page', () => {
            cy.url().should('include', '/messages');
        })
        When ('I click on the three dots icon on message page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.threeDotsIcon).click();
            })
        })
        Then ('I should see and be able to click on the new group message option in the dropdown menu', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.newGroupMessageOption).should('be.visible').click();
            })
        })
        Then ('I should be redirected to a form page to create a new group', () => {
            cy.url().should('include', '/messages');
        })
        Then ('I should see the new group header on the form page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.newGroupHeader).should('be.visible');
            })
        })
        Then ('I should see the group name input field on the form page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.groupNameInput).should('be.visible');
            })
        })
        Then ('I should see the new group description input field on the form page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.groupDescriptionInput).should('be.visible');
            })
        })
        Then ('I should see the add members dropdown field on the form page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.addMembersDropdown).should('be.visible');
            })
        })
        Then ('I should see the save button on the form page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.saveButton).should('be.visible');
            })
        })
        Then ('I should see the cancel button on the form page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.cancelButton).should('be.visible');
            })
        })
        When ('I click on the cancel button on the form page', () => {
            cy.fixture('fmeDta').then((fmeDta) => {
                cy.get(fmeDta.cancelButton).click();
            })
        })
        Then ('I should be redirected back to the messages page', () => {
            cy.url().should('include', '/messages');
        })

