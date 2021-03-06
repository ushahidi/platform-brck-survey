
# ISOOKO Surveys
The purpose of this repository is to explore solutions for creating a survey function between BRCK devices and Ushahidi deployments for the ISOOKO project. This repo is a dymnamic React form that reads form configurations from platform-api, generates a form in HTML, then allows submission of data to platform-api
## References
This is one of three repositories related to ISOOKO deployment of Ushahidi, [which is being tested here](https://isooko-stg.ushahidi.com/).
* This repo contains code initial code for the expansion of BRCK devices to enable surveys, which is a joint venture between BRCK and Ushahidi 
* The test deployment will also connect to other web services. In the [isooko-platform-api repo](https://github.com/ushahidi/isooko-platform-api) you will find code for the API that the client connects to
* In the [isooko-platform-client repo](https://github.com/ushahidi/isooko-platform-client) you will find code for the deployment’s graphical user interface.
* The project website for this [ISOOKO H2020 European Project can be found here](http://isooko.eu/). It will eventually contain a variety of outputs from the project such as specific documentation within reports, access to our training, and academic research related to the project. 

## Acknowledgment
This work has received support from the European Union’s Horizon 2020 research and innovation programme under [grant agreement No 779793](https://cordis.europa.eu/project/rcn/213085_en.html).

URL to render a form in the Moja experience is as follows;

`https://www.mojawifi.com/moja-survey/?survey={surveyId}&host={hostname}&uId={userId}`

`hostname` refers to the ushahidi.io server hosting the forms to render. When not specified, it defaults to `brck-tests`. This variable is NOT mandatory.

`surveyId` refers to the form id in the host above.  When not specified, it defaults to `0`. This variable is MANDATORY.

`userId` referes to the Moja experience user id. Its use here is to attach a user to a survey fielded. This variable is NOT mandatory.
