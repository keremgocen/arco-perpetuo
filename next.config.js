const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        customKey: "test-value-dev",
        API_PINCODE_URL: "http://127.0.0.1:8000/api/customer_login/",
      },
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      customKey: "test-value-prod",
    },
  };
};
