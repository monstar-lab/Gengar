module.exports = {
  browserStackCredentials: {
    username: "{BROWSER_STACK_USERNAME}", // user name
    password: "{BROWSER_STACK_ACCESS_KEY}" // password or BrowserStack access key
  },
  sites: [
    {
      name: "U1_001_top",
      url: "https://monstar-lab.com/"
    },
    {
      name: "U2_001_corp",
      url: "https://monstar-lab.com/corp/"
    },
    {
      name: "U3_001_services",
      url: "https://monstar-lab.com/services/web/"
    }
  ],
  options: {
    win_res: "1280x1024",
    mac_res: "1280x1024",
    wait_time: 20,
    browsers: [
      {
        browser: "chrome",
        browser_version: "50.0",
        os: "Windows",
        os_version: "10"
      },
      {
        browser: "firefox",
        browser_version: "45.0",
        os: "Windows",
        os_version: "10"
      },
      // {
      //   browser: 'ie',
      //   browser_version: '11.0',
      //   os: "Windows",
      //   os_version: '8.1'
      // },
      // {
      //   browser: 'safari',
      //   browser_version: '9.1',
      //   os: 'OS X',
      //   os_version: 'El Capitan'
      // },
      // {
      //   browser: "Mobile Safari",
      //   device: "iPhone 6",
      //   os: "ios",
      //   os_version: "8.3"
      // },
      // {
      //   browser: "Android Browser",
      //   device: "Samsung Galaxy S5",
      //   os: "android",
      //   os_version: "4.4"
      // }
    ]
  }
}
