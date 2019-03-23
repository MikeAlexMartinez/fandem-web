Feature: HomePage
  visiting the root page of the site
  should route me to the home page

  Scenario: Open Home Page
    Given I am on the root page
    When I do nothing
    Then I expect to see the title