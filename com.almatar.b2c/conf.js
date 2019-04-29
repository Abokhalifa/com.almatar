// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});

exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,

    specs: ['specs/*Spec.js'],
    baseUrl: 'https://www.almatar.com/en/',
    framework: 'jasmine',

    onPrepare: () => {
        // set browser size...
        //browser.manage().window().setSize(1024, 800);

        // better jasmine 2 reports...
        //This line was updated due to a change in Jasmine as in :
       // https://stackoverflow.com/questions/43001079/specreporter-is-not-a-constructor-error-when-running-protractor-using-angular-cl
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver',
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log',
                '--start-maximized'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 550000
    }
};


















//exports.config = {
//		seleniumAddress: 'http://192.168.1.4:4444/wd/hub',
//		//specs: ['test1.js'],
//		specs: ['customConfig.js','test1.js'],
//		capabilities: {
//			'browserName': 'chrome',
//			'chromeDriver': './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver',
//			'chromeOptions': {
//
//				'args': ["--start-maximized","--disable-infobars","--incognito"]   
//// args: [ "--headless", "--disable-gpu", "--window-size=800,600","--disable-infobars" ]
//			}
//		}
//
//
//};
