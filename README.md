# Buggytestautomation

# Project Description
  
  Cypress framework with Javascript is used to automate the resource https://buggy.testit.org/.
  As  An end user functional flow is used in the generation of scripts. An user visits site, register,login, update profile and votes.
  As an Functional automation tester, i have identified bugs in the error messages, validation messages and site.Idenfied bugs are reported in
  [BugsinBuggytest.docx](https://github.com/svk2021/Buggytestautomation/blob/main/BugsinBuggytest.docx)
  
  
  
  
  
  # Solution
  
  ##PreRequisites
  * node.js: go to https://nodejs.org/en/download/ and install the latest version 
  * git : go to https://git-scm.com/download 
  ## Clone project into local directory
  ```
  git clone https://github.com/svk2021/Buggytestautomation.git
  ```
  ## Install nodejs and cypress in your local machine
  * install nodejs : go to https://nodejs.org/en/download/ and install
  * Download visual studio code https://code.visualstudio.com/download
  * npm install cypress
  # Run Cypress with Test Runner
  ```
   cd /project folder
   npx cypress open
   npx cypress run --spec cypress\integration\Buggytests\*.spec.js --browser chrome
   ```
   
   
   # Tests created 
   
   ## Test scenarios  created for
   * login.spec.js
   * profile.spec.js
   * register.spec.js
   * votes.spec.js

   ## Run with Test Runner
   in the cypress Test Runner, select Chrome as the browser and click on "Run 5 integration specs"
   
   ## Execution Summary Report
   * [Chart generated](https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/TestExecutionReportchart.PNG  "Test execution summary")
   * [Login] (https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/login.PNG "loginscript")
   * [Login execution] (https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/LoginExecutionScript.PNG "login execution") 
   * [Register] (https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/RegisterScriptExectionreport.PNG "register validation")
   * [Register executor] (https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/RegisterScriptExectionreport.PNG "registerexecution")
   * [profile updated] (https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/profileUpdateexecutionreport.PNG "profile update")
   * [profile exection](https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/profileUpdateexecutionreport.PNG)
   * [vote] (https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/VoteScriptExecution.PNG "vote")
   * [Vote script executor] (https://github.com/svk2021/Buggytestautomation/blob/main/cypress/images/VoteScriptExecution.PNG "vote script executor")
   
  
   
   
   
  
  
  
