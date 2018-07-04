/*
 * Create and export configuration variables
 * 
 */

// container for all the environments
const environments = {};

// staging (default) environment
environments.staging = {
    httpPort: process.env.HTTP_PORT || 3000,
    httpsPort: process.env.HTTPS_PORT || 3001,
    envName: 'staging',
    hashingSecret: process.env.HASHING_SECRET || 'thisIsASecret',
    maxChecks: 5,
    twilio: {
        accountSid : process.env.TWILIO_ACCOUNT_S_ID || 'ACb32d411ad7fe886aac54c665d25e5c5d',
        authToken : process.env.TWILIO_AUTH_TOKEN || '9455e3eb3109edc12e3d8c92768f7a67',
        fromPhone : process.env.TWILIO_FROM_PHONE || '+15005550006'
    },
    templateGlobals: {
        appName: 'UptimeChecker',
        companyName: 'DriDengCompany, Inc',
        yearCreated: '2018',
        baseUrl: process.env.BASE_URL || 'http://localhost:3000/'
    }
};

// Testing environment
environments.testing = {
    httpPort: process.env.HTTP_PORT || 4000,
    httpsPort: process.env.HTTPS_PORT || 4001,
    envName: 'testing',
    hashingSecret: process.env.HASHING_SECRET,
    maxChecks: 5,
    twilio: {
        accountSid : process.env.TWILIO_ACCOUNT_S_ID,
        authToken : process.env.TWILIO_AUTH_TOKEN,
        fromPhone : process.env.TWILIO_FROM_PHONE
    },
    templateGlobals: {
        appName: 'UptimeChecker',
        companyName: 'DriDengCompany, Inc',
        yearCreated: '2018',
        baseUrl: process.env.BASE_URL || 'http://localhost:4000/'
    }
};

// production environment
environments.production = {
    httpPort: process.env.HTTP_PORT || 5000,
    httpsPort: process.env.HTTPS_PORT || 5001,
    envName: 'production',
    hashingSecret: process.env.HASHING_SECRET,
    maxChecks: 5,
    twilio: {
        accountSid : process.env.TWILIO_ACCOUNT_S_ID,
        authToken : process.env.TWILIO_AUTH_TOKEN,
        fromPhone : process.env.TWILIO_FROM_PHONE
    },
    templateGlobals: {
        appName: 'UptimeChecker',
        companyName: 'DriDengCompany, Inc',
        yearCreated: '2018',
        baseUrl: process.env.BASE_URL || 'http://localhost:5000/'
    }
};

// determine which environment was passed as a command-line argument
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// check that the current environment is one of the environments above, if not, default to staging
const environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// export the module
module.exports = environmentToExport;
