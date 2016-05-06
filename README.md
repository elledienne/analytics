# Complete analytics integration for Meteor

This package is a fork of the awesome [okgrow:analytics](https://github.com/okgrow/analytics).

## Why this fork

This package fixes a bug in the original package when it's used together with FlowRouter. The router wasn't waiting for the package to be loaded, so the first access to a website was not registered by Segment.

The main difference between this package and the original one is the function `startFlowRouter`

```
startFlowRouter = function (){
  if (_FlowRouter) {
    _FlowRouter.initialize()
  }
}
```

The purpose of this function is to start FlowRouter after the package is loaded and ready to go. (Yes, that means that if you want it to work you have to pause your router like this `FlowRouter.wait()`)


## Installation

`> meteor add elledienne:analytics`

## Configuration

Add various platforms by adding each tool's configuration to your `settings.json` file:

```
{
  "public": {
    "analyticsSettings": {
      // Add your analytics tracking ids here (remove this line before running)
      "Google Analytics" : {"trackingId": "Your tracking ID"},
      "Segment.io"       : {"apiKey": "..."}
    }
  }
}
```

It's important to note that service names and API key-names provided above are specific to the platform. Make sure to use the correct service name and key shown for the plaform you're adding.

## More documentation and info

For more documentation refer to the original package [okgrow:analytics](https://github.com/okgrow/analytics).
