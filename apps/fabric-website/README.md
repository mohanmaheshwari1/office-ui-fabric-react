# [Fabric website](http://dev.office.com/fabric)

##### The official website for the Offce UI Fabric project.

Office UI Fabric is a collection of projects that represent the Office and Office 365 design language in code. This website helps document, explain, and guide folks to the variety of sub-projects that make up Fabric.

## Build the website

Before you get started, make sure you have [node.js](https://nodejs.org/), [gulp](http://gulpjs.com/), and [git](https://git-scm.com/) installed. To view the documentation including examples, contracts, current statuses, and to add functionality or fix issues locally, you can:

1.  `git clone https://github.com/OfficeDev/office-ui-fabric-react.git` - this is the [Office UI Fabric React project](https://github.com/OfficeDev/office-ui-fabric-react)
2.  Change directories into the newly cloned project's directory: `cd office-ui-fabric-react`
3.  `npm install` to install dependencies and start building the project
4.  `npm run buildfast` to build additional dependencies of `fabric-website`
5.  Change directories to the `fabric-website` directory under `apps`: `cd apps && cd fabric-website`.
6.  To start the website, run `npm start`. This will open your operating system's default web browser with the website. You can make changes to the code which will automatically build and refresh the page using live-reload.

**Note**: Were any steps missing? Could the instructions be made clearer for the next person? Update the instructions above and submit a pull request!

## Test serving minified files locally

1.  `npm install -g http-server`
2.  In the fabric-website directory, run `npm run production` to build your minified files. They should be in the dist folder.
3.  `index.html` has logic to check if the app is running locally to serve the proper files.
4.  In the same directory, run `http-server`. This should serve the website for you to test as it runs on your new minified files.

## Licenses

All files on the Office UI Fabric React GitHub repository are subject to the MIT license. Please read the License file at the root of the project.

Usage of the fonts referenced in Office UI Fabric files is subject to the [license](https://aka.ms/fabric-assets-license).

---

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
