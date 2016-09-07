module.exports = {
  browserStackCredentials: {
    username: "{BROWSER_STACK_USERNAME}",
    password: "{BROWSER_STACK_ACCESS_KEY}"
  },
  options: {
    win_res: "1280x1024",
    mac_res: "1280x1024",
    wait_time: 10,
    browsers: [
      {
        browser: "chrome",
        browser_version: "50.0",
        os: "Windows",
        os_version: "10"
      },
      // {
      //   browser: "firefox",
      //   browser_version: "45.0",
      //   os: "Windows",
      //   os_version: "10"
      // },
      // {
      //   browser: "ie",
      //   browser_version: "11.0",
      //   os: "Windows",
      //   os_version: "8.1"
      // },
      // {
      //   browser: "safari",
      //   browser_version : "9.1",
      //   os: "OS X",
      //   os_version: "El Capitan"
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
  },
  sites: [
    {
      name: "U1_001_top",
      image: "",
      url: "https://monstar-lab.com/global/"
    },
    {
      name: "U2_001_corp",
      image: "",
      url: "https://monstar-lab.com/global/work/try-it/"
    },
    {
      name: "U3_001_services",
      image: "",
      url: "http://dentsu-ho.com/?fixed_tag=Column"
    },
    {
      name: "U4_001_works",
      image: "try",
      url: "https://monstar-lab.com/global/work/try-it/"
    },
    {
      name: "U4_001_works",
      image: "apperrelation",
      url: "https://monstar-lab.com/global/work/apperrelation/"
    },
  ]
}
